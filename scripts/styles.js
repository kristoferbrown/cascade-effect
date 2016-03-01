var styleTimer,
	styleAfter;

function earnStyles() {
	$('#earn-unmodal').remove();
	$('#available-points .sub-controller').after('<div id="earn-unmodal" style="display:none;"></div>');
	$('#earn-unmodal').empty().append('<p>How many style points did your GM give you?</p><select class="long" id="points-earned"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select>');
	$('#earn-unmodal').append('<div class="clear"></div><a id="cancel-earn-styles" class="button cancel long">Cancel</a>');
	$('#cancel-earn-styles').tap(function(){
		$('#style-controller #earn-points, #style-controller #spend-points').fadeIn().width(110).height(20);
		$('#earn-unmodal').slideUp();
	});
	$('#earn-unmodal').append('<a id="save-earned" class="button next finish long">Save</a>');
	$('#save-earned').tap(function(){
		character.styles.available = character.styles.available + parseInt($('#earn-unmodal #points-earned').val());
		$('#available-points .available-value').empty().append(character.styles.available);
		saveCharacterObject(false);
		if (character.styles.available > 0) {
			$('#spend-points').show();
		}
		$('#style-controller #earn-points, #style-controller #spend-points').fadeIn().width(110).height(20);
		$('#earn-unmodal').slideUp();
	});
	$('#style-controller #earn-points, #style-controller #spend-points').fadeOut().width(0).height(0);
	$('#earn-unmodal').slideDown();
}

function styleAudit() {
	var enstylizationQuotient = $('#styles-view .point.filled').length;
	if (settings.tiered) {
		enstylizationQuotient = 0;
		$('#styles-view .point.filled').each(function(){
			if ($(this).parent().parent().hasClass('style-class-core') || $(this).parent().parent().hasClass('arcane')) {
				if ($(this).index('#styles-view #'+$(this).parent().parent().attr('id')+' .point.filled') < 3) {
					enstylizationQuotient++;
				} else if ($(this).index('#styles-view #'+$(this).parent().parent().attr('id')+' .point.filled') < 6) {
					enstylizationQuotient++;enstylizationQuotient++;
				} else {
					enstylizationQuotient++;enstylizationQuotient++;enstylizationQuotient++;
				}
			} else if ($(this).parent().parent().hasClass('specialty') || $(this).parent().parent().hasClass('aux-row')) {
				enstylizationQuotient = enstylizationQuotient + parseInt($(this).parent().parent().attr('id').split('-spec')[1]);
			}
		});
	}
	$('.style-quotient').empty().append(enstylizationQuotient);
}

function toggleSpendMode() {
	if ($('body').hasClass('spend-mode')) {
		//refund tentative points
		var current = parseInt($('#available-points .available-value').text());
		$.each($('#styles-view .point.tentative'), function(key, value) {
			$(this).parent().children('.hidden').text((parseInt($(this).parent().children('.hidden').text()) - 1));
			$(this).removeClass('tentative').addClass('empty');
		});
		$('#available-points .available-value').text(character.styles.available);
		//hide visible elements
		$('body').removeClass('spend-mode');
		$('#styles-view .dead-slide').removeClass('alive');
		//remove tentative specialties
		$('#styles-view .retroactive').remove();
		$('#style-controller #earn-points, #style-controller #spend-points').fadeIn().width(110).height(20);
		$('#style-controller .sub-controller .button').fadeOut().width(0).height(0);
		if ($('#arcane .row').length === 1) {
			$('#arcane .style-hide').slideDown();
		}
	} else {
		//activate
		$('body').addClass('spend-mode');
		$('#styles-view .dead-slide').addClass('alive');
		$('#style-controller #earn-points, #style-controller #spend-points').fadeOut().width(0).height(0);
		$('#style-controller .sub-controller .button').fadeIn().width(110).height(20);
	}	
}

function adjustStyle(event) {
	var trait = $(event.target).parent().parent().attr('id').split('-')[0],
		traitObject = character.styles.classes[trait],
		tier = false,
		charCurrent,
		tentativeCurrent = parseInt($(event.target).parent().children('.trait-value').text()),
		direction = $(event.target).hasClass('plus'),
		available = parseInt($('#available-points .available-value').text()),
		newVal,
		trackLength = $(event.target).parent().children('.point').length,
		cost;

	//what are we adjusting?	
	if ($(event.target).parent().parent().hasClass('specialty')) {
		//a specialty style
		tier = $(event.target).parent().parent().attr('id').split('-')[1];
		charCurrent = character.styles.classes[trait][tier][1];
	} else if ($(event.target).parent().parent().hasClass('aux-row')) {
		//an aux style
		tier = 'aux'+$(event.target).parent().parent().attr('id').split('spec')[1];
		trait = $(event.target).parent().parent().attr('id').split('-')[1];
		if ($(event.target).parent().parent().hasClass('retroactive')) {
			charCurrent = 0;
		} else {
			charCurrent = character.styles.classes[trait][tier].value;
		}
	} else if ($(event.target).parent().parent().hasClass('arcane')) {
		//arcana
		charCurrent = character.styles.arcane[trait];
		tier = 'arcane';
	} else {
		//a core style
		charCurrent = character.styles.classes[trait].core;
	}
	
	//going up or going down?	
	if (direction) {
		//increment

		//adjust track length if there are unavailable dots
		trackLength = trackLength - $(event.currentTarget).parent().children('.unavailable').length;

		//compute cost tier if setting enabled
		if (settings.tiered) {
			if (((tier === false || tier === 'arcane') && tentativeCurrent > 2 & tentativeCurrent < 6) || tier === 'spec2' || tier === 'aux2') {
				cost = 2;
			} else if (((tier === false || tier === 'arcane') && tentativeCurrent > 5) || tier === 'spec3' || tier === 'aux3') {
				cost = 3;
			} else {
				cost = 1;
			}
		} else {
			cost = 1;
		}
		//increment if available points is above cost and track isn't full
		if (available >= cost && tentativeCurrent < trackLength) {
			newVal = tentativeCurrent + 1;
			available = available - cost;
			$('#available-points .available-value').empty().append(available);
			$(event.target).parent().children('.trait-value').empty().append(newVal);
			$(event.target).parent().children('.empty').first().addClass('tentative').removeClass('empty');
			$(event.target).parent().children('.reset-node').removeClass('reset-node cancel').append('-');
			
			//update spec listings if core and 1,4,7
			if (!tier && (newVal === 1 || newVal === 4 || newVal === 7)) {
				if (newVal === 1) {
					listSpec('spec1', trait, traitObject, true);
				} else if (newVal === 4) {
					listSpec('spec2', trait, traitObject, true);
				} else if (newVal === 7) {
					listSpec('spec3', trait, traitObject, true);
				}
			}
			
			//update arcana listings if necessary
			if (tier && ($(event.target).parent().parent().text().indexOf('Extropy') !== -1 || $(event.target).parent().parent().text().indexOf('Proxy') !== -1 || $(event.target).parent().parent().text().indexOf('Avatar') !== -1 || $(event.target).parent().parent().hasClass('arcane'))) {
				listArcana(false, trait, event);
			}
		}
	} else {
		//decrement
		
		//compute cost tier if enabled
		if (settings.tiered) {
			if (((tier === false || tier === 'arcane') && tentativeCurrent > 3 & tentativeCurrent < 7) || tier === 'spec2' || tier === 'aux2') {
				cost = 2;
			} else if (((tier === false || tier === 'arcane') && tentativeCurrent > 6) || tier === 'spec3' || tier === 'aux3') {
				cost = 3;
			} else {
				cost = 1;
			}
		} else {
			cost = 1;
		}

		//its an empty aux node, reset it instead of decrementing
		if (tentativeCurrent === 0 && charCurrent === 0 && $(event.currentTarget).parent().parent().hasClass('aux-row')) {
			if ($(event.currentTarget).parent().parent().hasClass('retroactive')) {
				$(event.currentTarget).parent().parent().parent().append('<div id="'+$(event.currentTarget).parent().parent().attr('id')+'" class="row aux-row retroactive color '+trait+'-shade"><span class="aux-label">Auxiliary Node</span><a class="long detail aux-customize button">Customize</a></div>');
			} else {
				$(event.currentTarget).parent().parent().parent().append('<div id="'+$(event.currentTarget).parent().parent().attr('id')+'" class="row aux-row color '+trait+'-shade"><span class="aux-label">Auxiliary Node</span><a class="long detail aux-customize button">Customize</a></div>');
			}
			$(event.currentTarget).parent().parent().remove();
			if ($(event.currentTarget).parent().parent().hasClass('has-requirements')) {
				$('#'+event.target.parentElement.parentElement.className.split('requires-')[1].split(' ')[0]).removeClass('is-required');
				$('#'+event.target.parentElement.parentElement.className.split('requires-')[1].split(' ')[0]+' .requirement-alert').remove();
			}
			$('.aux-customize').off().click(function(event){
				customizeAux(event);
			});
		}
		
		if (tentativeCurrent > charCurrent) {
			//check if we're removing a needed prereq, pop modal if we are decrement normally if not
			if ($(event.currentTarget).parent().parent().hasClass('is-required') && $(event.currentTarget).siblings('.tentative, .filled').length === 1){
				if ($(event.currentTarget).parent().parent().children('.requirement-alert').length === 0) {
					$(event.currentTarget).parent().parent().append('<div class="requirement-alert">This style is required by <strong><em>'+decodeInput(event.currentTarget.parentElement.parentElement.className.split('required-by-')[1])+'</em></strong>, to remove it remove the style that requires it or reload your character sheet.</div>'); 
				}
			} else {
				newVal = tentativeCurrent - 1;
				available = available + cost;
				$('#available-points .available-value').empty().append(available);
				$(event.target).parent().children('.trait-value').empty().append(newVal);
				$(event.target).parent().children('.tentative').last().addClass('empty').removeClass('tentative');
				if ($(event.currentTarget).parent().parent().hasClass('aux-row') && newVal === 0) {
					$(event.currentTarget).parent().children('.button.minus').empty().addClass('reset-node cancel');
				}
				//delist specialties and arcana if needed
				if (!tier && (newVal === 0 || newVal === 3 || newVal === 6)) {
					if (newVal === 0) {
						hideSpec('spec1', trait, event);
					} else if (newVal === 3) {
						hideSpec('spec2', trait,  event);
						removeArcana(trait, 'core2');
					} else if (newVal === 6) {
						hideSpec('spec3', trait,  event);
						removeArcana(trait, 'core3');
					}
				} else if (($(event.target).parent().parent().text().indexOf('Extropy') !== -1 || $(event.target).parent().parent().text().indexOf('Proxy') !== -1 || $(event.target).parent().parent().text().indexOf('Avatar') !== -1) && $(event.target).parent().children('.empty').length === 3) {
					if (tier === 'spec2' || tier === 'spec3') {
						removeArcana(trait, tier);
					}
				} else if (($(event.target).parent().parent().text().indexOf('Extropy') !== -1 || $(event.target).parent().parent().text().indexOf('Proxy') !== -1 || $(event.target).parent().parent().text().indexOf('Avatar') !== -1) && $(event.target).parent().children('.empty').length !== 3) {
					listArcana(false, trait, event);
				}
				if ($(event.target).parent().parent().hasClass('arcane') && $(event.target).parent().children('.tentative').length === 0 ) {
					listArcana(false, trait, event);
				}
			}
		}	
	}
}

function saveTentative() {
	var trait,
		tier,
		oldValue,
		newValue,
		changed,
		auxName;

	$.each($('#styles-view .point.tentative'), function(key, value) {
		trait = $(this).parent().parent().attr('id').split('-')[0];
		if ($(this).parent().parent().hasClass('specialty')) {
			//is specialty
			tier = $(this).parent().parent().attr('id').split('-')[1];
			oldValue = character.styles.classes[trait][tier][1];
		} else if ($(this).parent().parent().hasClass('aux-row')) {
			//is aux
			tier = 'aux'+$(this).parent().parent().attr('id').split('spec')[1];
			trait = $(this).parent().parent().attr('id').split('-')[1];
			oldValue = character.styles.classes[trait][tier].value;
		} else if ($(this).parent().parent().hasClass('arcane')) {
			//is arcana
			oldValue = character.styles.arcane[trait];
		} else {
			//is core
			oldValue = character.styles.classes[trait].core;
		}
		newValue = parseInt($(this).parent().children('.trait-value').text());
		if (newValue > oldValue) {
			if ($(this).parent().parent().hasClass('specialty')) {
				character.styles.classes[trait][tier][1] = newValue;
			} else if ($(this).parent().parent().hasClass('aux-row')) {
				auxName = encodeInput($(this).parent().parent().children('.aux-label').text());
				character.styles.classes[trait][tier].value = newValue;
				character.styles.classes[trait][tier].name = auxName;
				if ($(this).parent().parent().hasClass('aux-skill')) {
					character.styles.classes[trait][tier].skill = 'skill';
				} else if ($(this).parent().parent().hasClass('aux-com-skill')) {
					character.styles.classes[trait][tier].skill = 'combatSkill';
				}
				if (!character.addenda.auxSet[auxName]) { 
					character.addenda.auxSet = character.addenda.auxSet.concat(auxName);
				}
			} else if ($(this).parent().parent().hasClass('arcane')) {
				character.styles.arcane[trait] = newValue;
			} else {
				character.styles.classes[trait].core = newValue;
			}
		}
		$(this).removeClass('tentative');
	});
	$('.retroactive').removeClass('retroactive');
	character.styles.available = parseInt($('#available-points .available-value').text());
	saveCharacterObject(true);
	toggleSpendMode();
}

function listSpec(tier, key, value, active) {
	if (tier === 'spec1') {
		$('#'+key+'-style-class').append('<div class="sub-row" id="'+key+'-specialties"></div><div class="sub-row" id="'+key+'-aux"></div>');
	}
	$('#'+key+'-specialties').append('<div style="display:none;" id="'+key+'-'+tier+'" class="row specialty '+tier+' color '+key+'-shade">'+value[tier][0]+'<span class="detail"></span></div>');
	$('#'+key+'-style-class .'+tier+' .detail').append('<span class="hidden trait-value" style="display:none;">'+value[tier][1]+'</span>');
	$('#'+key+'-style-class .'+tier+' .detail').append('<a class="button minus dead-slide">-</a>');
	for (var i = 0; i < 3; i++) {
		if (i < value[tier][1]) {
			$('#'+key+'-style-class .'+tier+' .detail').append('<span class="filled point"></span>');
		} else {
			$('#'+key+'-style-class .'+tier+' .detail').append('<span class="empty point"></span>');
		}
	}
	$('#'+key+'-style-class .'+tier+' .detail').append('<a class="button plus dead-slide">+</a>');
	if (active) {
		$('#'+key+'-aux').append('<div style="display:none;" id="aux-'+key+'-'+tier+'" class="row aux-row color '+key+'-shade"><span class="aux-label">Auxiliary Node</span><a class="long detail aux-customize button">Customize</a></div>');
	} else {
		var auxTier = 'aux'+tier.split('c')[1];
		if (character.styles.classes[key][auxTier].value > 0) {
			if (character.styles.classes[key][auxTier].skill === false) {
				$('#'+key+'-aux').append('<div style="display:none;" id="aux-'+key+'-'+tier+'" class="row aux-style aux-row color '+key+'-shade"><span id="'+character.styles.classes[key][auxTier].name+'" class="aux-label">'+decodeInput(character.styles.classes[key][auxTier].name)+'</span><span class="detail"></span></div>');
			} else if (character.styles.classes[key][auxTier].skill === 'skill') {
				$('#'+key+'-aux').append('<div style="display:none;" id="aux-'+key+'-'+tier+'" class="row aux-skill aux-row color '+key+'-shade"><span class="aux-label">'+decodeInput(character.styles.classes[key][auxTier].name)+'</span><span class="detail"></span></div>');
			} else if (character.styles.classes[key][auxTier].skill === 'combatSkill') {
				$('#'+key+'-aux').append('<div style="display:none;" id="aux-'+key+'-'+tier+'" class="row aux-com-skill aux-row color '+key+'-shade"><span class="aux-label">'+decodeInput(character.styles.classes[key][auxTier].name)+'</span><span class="detail"></span></div>');
			}			
			
			$('#aux-'+key+'-'+tier+' .detail').append('<span class="hidden trait-value" style="display:none;">'+value[auxTier].value+'</span>');
			$('#aux-'+key+'-'+tier+' .detail').append('<a class="button minus dead-slide">-</a>');
			for (var i = 0; i < 3; i++) {
				if (i < value[auxTier].value) {
					$('#aux-'+key+'-'+tier+' .detail').append('<span class="filled point"></span>');
				} else {
					$('#aux-'+key+'-'+tier+' .detail').append('<span class="empty point"></span>');
				}
			}
			$('#aux-'+key+'-'+tier+' .detail').append('<a class="button plus dead-slide">+</a>');
		} else {
			$('#'+key+'-aux').append('<div style="display:none;" id="aux-'+key+'-'+tier+'" class="row aux-row color '+key+'-shade"><span class="aux-label">Auxiliary Node</span><a class="long detail aux-customize button">Customize</a></div>');		
		}
	}
	if (active === true) {
		$('.dead-slide').addClass('alive');
		$('#styles-view .button.dead-slide').off().tap(function(event) {
			adjustStyle(event);
		});
		$('.aux-customize').off().click(function(event){
			customizeAux(event);
		});
		$('#'+key+'-style-class .'+tier).addClass('retroactive');
		$('#'+key+'-aux .row').last().addClass('retroactive');
	}
	$('#'+key+'-style-class .'+tier).slideDown(300);
	$('#'+key+'-aux .row').last().slideDown(300);
	styleTimer = setTimeout(styleCleanUp, 300);
}

function hideSpec(tier, trait, event) {
	var refund = $(event.target).parent().parent().children('.sub-row').children('.'+tier).children('.detail').children('.tentative').length,
		newAvailable = parseInt($('#available-points .available-value').text()) + refund;

		$(event.target).parent().parent().children('.sub-row').children('.'+tier).slideUp(300, function() {
			$(this).remove();
		});
		$(event.target).parent().parent().children('#'+trait+'-aux').children().last().slideUp(300, function() {
			$(this).remove();
		});
		$('#available-points .available-value').empty().append(newAvailable);
}

function listArcana(prep, trait, event) {
	var arcaneTrait = false,
		wilAvailable = 0,
		chaAvailable = 0,
		intAvailable = 0,
		nAvailable = 0,
		totalAvailable = 0,
		wilArray = ['','',''],
		chaArray = ['','',''],
		intArray = ['','',''],
		castArcana,
		refreshBinders = false;
	
	//set up arrays to append later
	wilArray[0] = '<div style="display:none;" id="evocation" class="row Willpower-arcane no-dots arcane color WIL-tint">Evocation<span class="detail"><div class="hidden trait-value" style="display:none;">'+character.styles.arcane.evocation+'</div></span></div>';
	wilArray[1] = '<div style="display:none;" id="abjuration" class="row Willpower-arcane no-dots arcane color WIL-tint">Abjuration<span class="detail"><div class="hidden trait-value" style="display:none;">'+character.styles.arcane.abjuration+'</div></span></div>';
	wilArray[2] = '<div style="display:none;" id="sublimation" class="row Willpower-arcane no-dots arcane color WIL-tint">Sublimation<span class="detail"><div class="hidden trait-value" style="display:none;">'+character.styles.arcane.sublimation+'</div></span></div>';
	chaArray[0] = '<div style="display:none;" id="pneumaplegia" class="row Charisma-arcane no-dots arcane color CHA-tint">Pneumaplegia<span class="detail"><div class="hidden trait-value" style="display:none;">'+character.styles.arcane.pneumaplegia+'</div></span></div>';
	chaArray[1] = '<div style="display:none;" id="schizosomata" class="row Charisma-arcane no-dots arcane color CHA-tint">Schizosomata<span class="detail"><div class="hidden trait-value" style="display:none;">'+character.styles.arcane.schizosomata+'</div></span></div>';
	chaArray[2] = '<div style="display:none;" id="telethesia" class="row Charisma-arcane no-dots arcane color CHA-tint">Telethesia<span class="detail"><div class="hidden trait-value" style="display:none;">'+character.styles.arcane.telethesia+'</div></span></div>';
	intArray[0] = '<div style="display:none;" id="chromodynamism" class="row Intelligence-arcane no-dots arcane color INT-tint">Chromodynamism<span class="detail"><div class="hidden trait-value" style="display:none;">'+character.styles.arcane.chromodynamism+'</div></span></div>';
	intArray[1] = '<div style="display:none;" id="electromagnetism" class="row Intelligence-arcane no-dots arcane color INT-tint">Electromagnetism<span class="detail"><div class="hidden trait-value" style="display:none;">'+character.styles.arcane.electromagnetism+'</div></span></div>';
	intArray[2] = '<div style="display:none;" id="gravitonertia" class="row Intelligence-arcane no-dots color arcane INT-tint">Gravitonertia<span class="detail"><div class="hidden trait-value" style="display:none;">'+character.styles.arcane.gravitonertia+'</div></span></div>';
	
	//set up vars	
	if (character.styles.classes.Willpower.spec2[1] > 0){wilAvailable++;}
	if (character.styles.classes.Willpower.spec3[1] > 0){wilAvailable++;}
	if (character.styles.arcane.evocation > 0){wilAvailable--;}
	if (character.styles.arcane.abjuration > 0){wilAvailable--;}
	if (character.styles.arcane.sublimation > 0){wilAvailable--;}
	//if (castArcana === 'Evocation' || castArcana === 'Abjuration' || castArcana === 'Sublimation'){wilAvailable++;}
	
	if (character.styles.classes.Charisma.spec2[1] > 0){chaAvailable++;}
	if (character.styles.classes.Charisma.spec3[1] > 0){chaAvailable++;}
	if (character.styles.arcane.pneumaplegia > 0){chaAvailable--;}
	if (character.styles.arcane.schizosomata > 0){chaAvailable--;}
	if (character.styles.arcane.telethesia > 0){chaAvailable--;}
	//if (castArcana === 'Pneumaplegia' || castArcana === 'Schizosomata' || castArcana === 'Telethesia'){chaAvailable++;}
	
	if (character.styles.classes.Intelligence.spec2[1] > 0){intAvailable++;}
	if (character.styles.classes.Intelligence.spec3[1] > 0){intAvailable++;}
	if (character.styles.arcane.chromodynamism > 0){intAvailable--;}
	if (character.styles.arcane.electromagnetism > 0){intAvailable--;}
	if (character.styles.arcane.gravitonertia > 0){intAvailable--;}
	//if (castArcana === 'Chromodynamism' || castArcana === 'Electromagnetism' || castArcana === 'Gravitonertia'){intAvailable++;}
	
	totalAvailable =  wilAvailable + chaAvailable + intAvailable;	
	
	if (!prep) {
		if ($(event.target).parent().parent().hasClass('arcane')) {
			arcaneTrait = trait;
			trait = $(event.target).parent().parent().attr('class').split(' ')[1].split('-')[0];
		}
		if (parseInt($('#'+trait+'-specialties .spec2 .hidden').text()) > 0) {nAvailable ++;}
		if (parseInt($('#'+trait+'-specialties .spec3 .hidden').text()) > 0) {nAvailable ++;}
		$.each($('.'+trait+'-arcane .hidden'), function(event) {
			if (parseInt($(this).text()) > 0) {nAvailable --;}
		});
	}
	
	//hide message if we list any styles
	if (totalAvailable > 0 || nAvailable > 0) {
		$('#arcane .style-hide').hide();
	} else if (castArcana) {
		$('#arcane .style-hide').hide();
	} else if (prep) {
		$.each(character.styles.arcane, function(){
			if (this > 0) {
				$('#arcane .style-hide').hide();
				return false;
			}
		})
	}

	//populate willpower arcana
	if ($('#arcane .WIL-tint').length === 0) {
		if (wilAvailable > 0 || trait === 'Willpower') {
			refreshBinders = true;
			$('#arcane').append(wilArray[0]);
			$('#arcane').append(wilArray[1]);
			$('#arcane').append(wilArray[2]);
		} else if (prep && wilAvailable === 0) {
			refreshBinders = true;
			if (character.styles.arcane.evocation > 0) {$('#arcane').append(wilArray[0]);$('#evocation').addClass('permanent');}
			if (character.styles.arcane.abjuration > 0) {$('#arcane').append(wilArray[1]);$('#abjuration').addClass('permanent');}
			if (character.styles.arcane.sublimation > 0) {$('#arcane').append(wilArray[2]);$('#sublimation').addClass('permanent');}
		}
	} else if ($('#arcane .WIL-tint').length === 1 && nAvailable > 0) {
		refreshBinders = true;
		arcaneTrait = $('#arcane .'+trait+'-arcane').attr('id');
		if (arcaneTrait === 'evocation') {
			$('#evocation').after(wilArray[1]);
			$('#evocation').after(wilArray[2]);
		} else if (arcaneTrait === 'abjuration') {
			$('#abjuration').before(wilArray[0]);
			$('#abjuration').after(wilArray[2]);
		} else if (arcaneTrait === 'sublimation') {
			$('#sublimation').before(wilArray[0]);
			$('#sublimation').before(wilArray[1]);		
		}
	} else if (trait === 'Willpower' && nAvailable <= 0) {
		$.each($('.'+trait+'-arcane .hidden'), function(){
			if ($(this).text() === '0') {
				$(this).parent().parent().slideUp(300).addClass('to-remove');
			}
		});
	} else if ($('#arcane .WIL-tint').length === 2 && $(event.target).parent().children('.tentative').length === 0) {
		refreshBinders = true;
		if ($('#arcane #evocation').length === 0) {$('#arcane .Willpower-arcane').last().after(wilArray[0]);}
		if ($('#arcane #abjuration').length === 0) {$('#arcane .Willpower-arcane').last().after(wilArray[1]);}
		if ($('#arcane #sublimation').length === 0) {$('#arcane .Willpower-arcane').last().after(wilArray[2]);}
	}
	//populate intelligence arcana
	if ($('#arcane .INT-tint').length === 0) {
		if (intAvailable > 0 || trait === 'Intelligence') {
			refreshBinders = true;
			$('#arcane').append(intArray[0]);
			$('#arcane').append(intArray[1]);
			$('#arcane').append(intArray[2]);
		} else if (prep && intAvailable === 0) {
			refreshBinders = true;
			if (character.styles.arcane.chromodynamism > 0) {$('#arcane').append(intArray[0]);$('#chromodynamism').addClass('permanent');}
			if (character.styles.arcane.electromagnetism > 0) {$('#arcane').append(intArray[1]);$('#electromagnetism').addClass('permanent');}
			if (character.styles.arcane.gravitonertia > 0) {$('#arcane').append(intArray[2]);$('#gravitonertia').addClass('permanent');}
		}
	} else if ($('#arcane .INT-tint').length === 1 && nAvailable > 0) {
		refreshBinders = true;
		arcaneTrait = $('#arcane .'+trait+'-arcane').attr('id');
		if (arcaneTrait === 'chromodynamism') {
			$('#chromodynamism').after(intArray[1]);
			$('#chromodynamism').after(intArray[2]);
		} else if (arcaneTrait === 'electromagnetism') {
			$('#electromagnetism').before(intArray[0]);
			$('#electromagnetism').after(intArray[2]);
		} else if (arcaneTrait === 'gravitonertia') {
			$('#gravitonertia').before(intArray[0]);
			$('#gravitonertia').before(intArray[1]);
		}
	} else if (trait === 'Intelligence' && nAvailable <= 0) {
		$.each($('.'+trait+'-arcane .hidden'), function(){
			if ($(this).text() === '0') {
				$(this).parent().parent().slideUp(300).addClass('to-remove');
			}
		});
	} else if ($('#arcane .INT-tint').length === 2 && $(event.target).parent().children('.tentative').length === 0) {
		refreshBinders = true;
		if ($('#arcane #chromodynamism').length === 0) {$('#arcane .Intelligence-arcane').last().after(intArray[0]);}
		if ($('#arcane #electromagnetism').length === 0) {$('#arcane .Intelligence-arcane').last().after(intArray[1]);}
		if ($('#arcane #gravitonertia').length === 0) {$('#arcane .Intelligence-arcane').last().after(intArray[2]);}
	}
	//populate charisma arcana
	if ($('#arcane .CHA-tint').length === 0) {
		if (chaAvailable > 0 || trait === 'Charisma') {
			refreshBinders = true;
			$('#arcane').append(chaArray[0]);
			$('#arcane').append(chaArray[1]);
			$('#arcane').append(chaArray[2]);
		} else if (prep && chaAvailable === 0) {
			refreshBinders = true;
			if (character.styles.arcane.pneumaplegia > 0) {$('#arcane').append(chaArray[0]);$('#pneumaplegia').addClass('permanent');}
			if (character.styles.arcane.schizosomata > 0) {$('#arcane').append(chaArray[1]);$('#schizosomata').addClass('permanent');}
			if (character.styles.arcane.telethesia > 0) {$('#arcane').append(chaArray[2]);$('#telethesia').addClass('permanent');}
		}
	} else if ($('#arcane .CHA-tint').length === 1 && nAvailable > 0) {
		refreshBinders = true;
		arcaneTrait = $('#arcane .'+trait+'-arcane').attr('id');
		if (arcaneTrait === 'pneumaplegia') {
			$('#pneumaplegia').after(chaArray[1]);
			$('#pneumaplegia').after(chaArray[2]);
		} else if (arcaneTrait === 'schizosomata') {
			$('#schizosomata').before(chaArray[0]);
			$('#schizosomata').after(chaArray[2]);
		} else if (arcaneTrait === 'telethesia') {
			$('#telethesia').before(chaArray[0]);
			$('#telethesia').before(chaArray[1]);
		}
	} else if (trait === 'Charisma' && nAvailable <= 0) {
		$.each($('.'+trait+'-arcane .hidden'), function(){
			if ($(this).text() === '0') {
				$(this).parent().parent().slideUp(300).addClass('to-remove');
			}
		});
	} else if ($('#arcane .CHA-tint').length === 2 && $(event.target).parent().children('.tentative').length === 0) {
		refreshBinders = true;
		if ($('#arcane #pneumaplegia').length === 0) {$('#arcane .Charisma-arcane').last().after(chaArray[0]);}
		if ($('#arcane #schizosomata').length === 0) {$('#arcane .Charisma-arcane').last().after(chaArray[1]);}
		if ($('#arcane #telethesia').length === 0) {$('#arcane .Charisma-arcane').last().after(chaArray[2]);}
	}
	//add buttons and dots to each arcane row
	if (refreshBinders) {
		$.each($('#arcane .row'), function( key, value ) {
			//set up local vars to determine how many dots are available
			var arcAttribute,
				arcSpec2,
				arcSpec3,
				arcAvailable;
			if ($(this).hasClass('Willpower-arcane')) {arcAttribute = 'Willpower';}
			else if ($(this).hasClass('Intelligence-arcane')) {arcAttribute = 'Intelligence';}
			else {arcAttribute = 'Charisma';}
			arcSpec2 = parseInt($('#'+arcAttribute+'-spec2 .detail .trait-value').text());
			arcSpec3 = parseInt($('#'+arcAttribute+'-spec3 .detail .trait-value').text());
			arcAvailable = arcSpec2 * 3;
			if (arcSpec3 > arcSpec2) {arcAvailable = arcSpec3 * 3;} else {arcAvailable = arcSpec2 * 3;}
			
			//remove old elements so we can update relist them with updated availability
			$(this).children('.detail').children('.button').remove();
			$(this).children('.detail').children('.point').remove();
			
			//relist dots and buttons
			$(this).children('.detail').append('<a class="button minus dead-slide">-</a>');
			for (var i = 0; i < 9; i++) {
				if (i < character.styles.arcane[$(this).attr('id')]) {
					$(this).children('.detail').append('<span class="filled point"></span>');
				} else if (i < parseInt($(this).children('.detail').children('.hidden').text())) {
					$(this).children('.detail').append('<span class="tentative filled point"></span>');
				} else if (i < arcAvailable) {
					$(this).children('.detail').append('<span class="empty point"></span>');
				} else {
					$(this).children('.detail').append('<span class="unavailable empty point"></span>');
				}
			}
			$(this).children('.detail').append('<a class="button plus dead-slide">+</a>');
			$(this).removeClass('no-dots');
		});
	}
	
	if (!prep) {
		$('.dead-slide').addClass('alive');
		if (refreshBinders) {
			$('#styles-view .button.dead-slide').off().tap(function(event) {
				adjustStyle(event);
			});
		}
		$('.aux-customize').off().click(function(event){
			customizeAux(event);
		});
		$('.'+trait+'-arcane').addClass('retroactive');
		$('#arcane .permanent').removeClass('retroactive');
		$('#arcane .row').off().bind('taphold', styleHold);
	}

	//show hidden rows and adjust height if visible
	$('#arcane .row.arcane').slideDown(290);
	styleTimer = setTimeout(styleCleanUp, 300);
}

function styleCleanUp() {
	clearTimeout(styleTimer);
	$('#styles-view .to-remove').remove();
	if ($('#arcane .row').length === 1) {
		$('#arcane .style-hide').slideDown();
	}
}

function removeArcana(trait, tier) {
	var remove = false,
		tier2Length = $('#'+trait+'-specialties .spec2 .empty').length,
		tier3Length = $('#'+trait+'-specialties .spec3 .empty').length,
		arcanaEmpty = $('.'+trait+'-arcane .point.empty').length,
		arcanaTentative = $('.'+trait+'-arcane').has('.point.tentative').length,
		arcanaFilled = $('.'+trait+'-arcane').has('.point.filled').length;
	if (tier === 'core2' || (tier === 'spec2' && $('#'+trait+'-specialties .spec3').length === 0) || (tier === 'spec2' && tier3Length === 3) || ((tier === 'core3' || tier === 'spec3') && tier2Length === 3)) {
		remove = 'all';
	} else if (tier === 'spec2' && tier3Length !== 3 && (arcanaTentative > 0 || arcanaFilled > 0)) {
		remove = true;
	} else if ((tier === 'core3' || tier === 'spec3') && tier2Length !== 3 && (arcanaTentative > 0 || arcanaFilled > 0)) {
		remove = true;
	}
	if (remove === true || remove === 'all') {
		if (remove === 'all') {
			$('.'+trait+'-arcane.retroactive').addClass('to-remove').slideUp(290);
		} else if (arcanaTentative + arcanaFilled === 1) {
			$('.'+trait+'-arcane.retroactive').addClass('to-remove');
			$('.'+trait+'-arcane').has('.point.tentative').removeClass('to-remove');
			$('.'+trait+'-arcane').has('.point.filled').removeClass('to-remove');
			$('.'+trait+'-arcane.to-remove').slideUp(290);
		} else if (arcanaTentative === 1 && arcanaFilled === 1) {
			$('.'+trait+'-arcane.retroactive').addClass('to-remove');
			$('.'+trait+'-arcane').has('.point.filled').removeClass('to-remove');
			$('.'+trait+'-arcane.to-remove').slideUp(290);
		} else if (arcanaTentative > 1) {
			var arc1 = $('.'+trait+'-arcane').has('.point.tentative')[0],
				arc2 = $('.'+trait+'-arcane').has('.point.tentative')[1];
			if (($(arc1).children().children('.tentative').length === $(arc2).children().children('.tentative').length) || ($(arc1).children().children('.tentative').length > $(arc2).children().children('.tentative').length)) {
				$(arc2).addClass('to-remove');
			} else {
				$(arc1).addClass('to-remove');
			}			
		} else {
			$('.'+trait+'-arcane.retroactive').addClass('to-remove').slideUp(290);
		}
		$('#available-points .available-value').text(parseInt($('#available-points .available-value').text()) + $('.'+trait+'-arcane.retroactive.to-remove .tentative').length);	
		styleTimer = setTimeout(styleCleanUp, 300);
	}
}

function customizeAux(event) {
	var trait = $(event.target).parent().attr('id').split('-')[1],
		tier = $(event.target).parent().attr('id').split('-')[2],
		originalEvent = event,
		auxList = {
			Strength: {'aux':['Focus Strike'],'skills':['Toughness','Athletics','Manipulation'],'comSkills':['Unarmed','Melee']},
			Finesse: {'aux':['Stealth Attacks'],'skills':['Stealth','Investigate','Drive','Charm','Manipulate'],'comSkills':['Unarmed','Melee','Defense','Ballistics']},
			Perception: {'aux':['Occult Spectra'],'skills':['Alertness','Investigate','Drive','Charm'],'comSkills':['Firearms','Ballistics','Initiative']},
			Stamina: {'aux':[{'name':'Diffuse Regeneration','availability':1,'requirements':['Stamina-spec3',1,'auxSpec','Regeneration']},'Retrogradient'],'skills':['Toughness','Athletics','Survival'],'comSkills':['Defense']},
			Agility: {'aux':['Evasion', 'Flash Strike'],'skills':['Toughness','Athletics','Stealth','Drive'],'comSkills':['Defense','Initiative']},
			Wits: {'aux':['Ally Communication', {'name':'Combat Healing','availability':2,'requirements':['Heal',1,'aux']}, 'Leadership', 'Stealth Attacks'],'skills':['Stealth','Investigate','Drive','Survival','Charm','Manipulate'],'comSkills':['Defense', 'Initiative']},
			Willpower: {'aux':[{'name':'Blink','availability':2,'requirements':['sublimation',5,'arcane']},{'name':'Combat Healing','availability':2,'requirements':['Heal',1,'aux']},{'name':'Evocation Extensibility','availability':1,'requirements':['evocation',1,'arcane']},{'name':'Filter','availability':1,'requirements':['abjuration',1,'arcane']},{'name':'Focus Strike','availability':2},{'name':'Heal','availability':1,'requirements':['Stamina-spec3',1,'auxSpec','Regeneration']},{'name':'Healing Field','availability':2,'requirements':['Heal',1,'aux']},'Regeneration',{'name':'Sublimation Storage','availability':1,'requirements':['sublimation',1,'arcane']},{'name':'Ward Extensibility','availability':1,'requirements':['abjuration',1,'arcane']}],'skills':['Toughness','Guts','Survival'],'comSkills':[false]},
			Intelligence: {'aux':[{'name':'function(Cast)','availability':2,'requirements':['function_oparen_Primary_cloparen_',1,'aux']},{'name':'function(Primary)','availability':1,'requirements':['Intelligence-spec1',1,'spec']},{'name':'function(Secondary)','availability':2,'requirements':['function_oparen_Primary_cloparen_',1,'aux']},{'name':'Sublimation Storage','availability':2,'requirements':['sublimation',1,'arcane']}],'skills':['Hardware','Humanities','Medicine','Science','Software','Survival','Languages'],'comSkills':[false]},
			Charisma: {'aux':['Ally Communication',{'name':'Combat Healing','availability':2,'requirements':['Heal',1,'aux']},{'name':'Evocation Extensibility','availability':2,'requirements':['evocation',1,'arcane']},{'name':'Heal','availability':1,'requirements':['Stamina-spec3',1,'auxSpec','Regeneration']},{'name':'Healing Field','availability':2,'requirements':['Heal',1,'aux']},'Leadership','Regeneration'],'skills':['Stealth','Investigate','Guts','Charm','Manipulate'],'comSkills':[false]}
		};
	auxList[trait].skills = auxList[trait].skills.concat(character.addenda.customSkills[trait]);
	$('#aux-unmodal').remove();
	$('.aux-customize').fadeOut();
	$(event.currentTarget).parent().children().slideUp();
	$(event.currentTarget).parent().append('<div id="aux-unmodal" style="display:none;"></div>');
	if (!$('#monitor').hasClass('hidden')) {
		toggleMonitor();
	}
	if (auxList[trait].aux[0]) {
		$('#aux-unmodal').empty().append('<h3 class="select-aux-style-h">Auxiliary Styles</h3>');
		$.each(auxList[trait].aux, function() {
			if ($.type(this) === 'string') {
				//no requirements, list it
				$('#aux-unmodal').append('<a id="'+trait+'-'+tier+'-'+encodeInput(this)+'" class="row aux-style aux-custom">'+this+'</a>');
			} else {
				//check the requirements and list if we can
				if (this.availability && (this.availability <= parseInt($(event.target).parent().attr('id').split('spec')[1]))) {
					//it is available in this tier
					if (!this.requirements) {
						//no further requirements, list it!
						$('#aux-unmodal').append('<a id="'+trait+'-'+tier+'-'+encodeInput(this.name)+'" class="row aux-style aux-custom">'+this.name+'</a>');
					} else if (this.requirements[2] === 'arcane' && $('#'+this.requirements[2]+' #'+this.requirements[0]+' .point.filled').length >= this.requirements[1]) {
						//requirements are arcane and we meet them, list it!
						$('#aux-unmodal').append('<a id="'+trait+'-'+tier+'-'+encodeInput(this.name)+'" class="row aux-style has-requirements arcane-requirements requires-'+this.requirements[0]+' aux-custom">'+this.name+'</a>');
					} else if (this.requirements[2] === 'aux' && ($('#'+this.requirements[0]+'.aux-label').parent().children('.detail').children('.filled.point').length + $('#'+this.requirements[0]+'.aux-label').parent().children('.detail').children('.tentative.point').length) >= this.requirements[1]) {
						//requirements are auxiliary and we meet them, list it!
						$('#aux-unmodal').append('<a id="'+trait+'-'+tier+'-'+encodeInput(this.name)+'" class="row aux-style has-requirements aux-requirements requires-'+this.requirements[0]+' aux-custom">'+this.name+'</a>');
					} else if (this.requirements[2] === 'spec' && ($('#'+this.requirements[0]+'.specialty').children().children('.filled').length + $('#'+this.requirements[0]+'.specialty').children().children('.tentative').length) >= this.requirements[1]) {
						//requirements are a speciality and we meet them, list it!
						$('#aux-unmodal').append('<a id="'+trait+'-'+tier+'-'+encodeInput(this.name)+'" class="row aux-style has-requirements spec-requirements requires-'+this.requirements[0]+' aux-custom">'+this.name+'</a>');
					} else if (this.requirements[2] === 'auxSpec') {
						if ((($('#'+this.requirements[0]+'.specialty').children().children('.filled').length + $('#'+this.requirements[0]+'.specialty').children().children('.tentative').length) >= this.requirements[1]) || ($('#'+this.requirements[3]+'.aux-label').parent().children('.detail').children('.filled.point').length + $('#'+this.requirements[3]+'.aux-label').parent().children('.detail').children('.tentative.point').length) >= this.requirements[1]) {
							//requirements are the regen edge case, we meet them so list it
							$('#aux-unmodal').append('<a id="'+trait+'-'+tier+'-'+encodeInput(this.name)+'" class="row has-requirements aux-spec-requirements requires-'+this.requirements[0]+' aux-style aux-custom">'+this.name+'</a>');
						}
					}
				}
			}
		});
	} else {
		$('#aux-unmodal').empty();
	}
	$('#aux-unmodal').append('<h3 class="select-aux-skill-h">Skills</h3>');
	$.each(auxList[trait].skills, function() {
		$('#aux-unmodal').append('<a id="'+trait+'-'+tier+'-'+encodeInput(this)+'" class="row aux-custom aux-skill">'+decodeInput(this)+'</a>');
	});
	if (auxList[trait].comSkills[0]) {
		$.each(auxList[trait].comSkills, function() {
			$('#aux-unmodal').append('<a id="'+trait+'-'+tier+'-'+encodeInput(this)+'" class="row aux-custom aux-com-skill">'+this+'</a>');
		});
	}
	$.each(character.addenda.auxSet, function(key){
		$('#aux-unmodal #'+trait+'-'+tier+'-'+encodeInput(this)).remove();
	});
	if ($('#aux-unmodal .aux-style').length === 0) {
		$('#aux-unmodal .select-aux-style-h').remove();
	}
	if ($('#aux-unmodal .aux-skill, #aux-unmodal .aux-com-skill').length === 0) {
		$('#aux-unmodal .select-aux-skill-h').remove();
	}
	$('#aux-unmodal').append('<div class="clear"></div><a id="cancel-customize-aux" class="button cancel long">Cancel</a>');
	$('#cancel-customize-aux').tap(function(){
		$(event.target).parent().children().slideDown();
		$('.aux-customize').fadeIn()
		$('#aux-unmodal').slideUp();
		styleTimer = setTimeout(styleCleanUp, 300);
	});
	$('#aux-unmodal .row.aux-custom').off().click(function(){
		$('#style-unmodal').remove()
		$('#aux-'+trait+'-'+tier).children('.aux-label').attr('id', encodeInput($(this).text())).text($(this).text());
		$('#aux-'+trait+'-'+tier).children('.button').remove();
		if ($(this).hasClass('aux-skill')) {
			$('#aux-'+trait+'-'+tier).addClass('aux-skill');
		} else if ($(this).hasClass('aux-com-skill')) {
			$('#aux-'+trait+'-'+tier).addClass('aux-com-skill');
		} else if ($(this).hasClass('aux-style')) {
			$('#aux-'+trait+'-'+tier).addClass('aux-style');
		}
		$('#aux-'+trait+'-'+tier).append('<span class="detail"><span class="hidden trait-value" style="display:none;">0</span><a class="button minus dead-slide">-</a><span class="empty point"></span><span class="empty point"></span><span class="empty point"></span><a class="button plus dead-slide">+</a></span>');
		$('#styles-view .button.dead-slide').off().tap(function(event) {
			adjustStyle(event);
		});
		if ($('body').hasClass('spend-mode')) {
			$('.dead-slide').addClass('alive');
		}
		$('#aux-'+trait+'-'+tier).children('.detail').children('.button.minus').empty().addClass('reset-node cancel');
		//add requirement classes to the prereq styles and to the selected style
		if ($(this).hasClass('has-requirements')) {
			$(this).parent().parent().addClass($(this).attr('class'));
			if ($(this).hasClass('aux-requirements')) {
				$('#'+this.className.split('requires-')[1].split(' ')[0]+'.aux-label').parent().addClass('is-required required-by-'+encodeInput($(this).text()));
			} else if ($(this).hasClass('arcane-requirements') || $(this).hasClass('spec-requirements')) {
				$('#'+this.className.split('requires-')[1].split(' ')[0]).addClass('is-required required-by-'+encodeInput($(this).text()));
			}
		}
		//show hide everything
		$(event.target).parent().children().slideDown();
		$('.aux-label').fadeIn();
		$('.aux-customize').fadeIn()
		$('#aux-unmodal').slideUp();
		styleTimer = setTimeout(styleCleanUp, 300);
	});
	
	$('#aux-unmodal').slideDown();
	styleTimer = setTimeout(styleCleanUp, 300);
}