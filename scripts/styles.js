var styleAfter;

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
			if ($(this).parent().parent().hasClass('style-class-core')) {
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
			if (((tier === false) && tentativeCurrent > 2 & tentativeCurrent < 6) || tier === 'spec2' || tier === 'aux2') {
				cost = 2;
			} else if (((tier === false) && tentativeCurrent > 5) || tier === 'spec3' || tier === 'aux3') {
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
		}
	} else {
		//decrement
		//compute cost tier if enabled
		if (settings.tiered) {
			if ((tier === false && tentativeCurrent > 3 & tentativeCurrent < 7) || tier === 'spec2' || tier === 'aux2') {
				cost = 2;
			} else if ((tier === false && tentativeCurrent > 6) || tier === 'spec3' || tier === 'aux3') {
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
				//delist specialties if needed
				if (!tier && (newVal === 0 || newVal === 3 || newVal === 6)) {
					if (newVal === 0) {
						hideSpec('spec1', trait, event);
					} else if (newVal === 3) {
						hideSpec('spec2', trait,  event);
					} else if (newVal === 6) {
						hideSpec('spec3', trait,  event);
					}
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

function customizeAux(event) {
	// @TODO: break auxarc lists into parent arcana groupings
	var trait = $(event.target).parent().attr('id').split('-')[1],
		tier = $(event.target).parent().attr('id').split('-')[2],
		originalEvent = event,
		auxList = {
			Strength: {'aux':[],'skills':['Toughness','Athletics','Manipulation'],'comSkills':['Unarmed','Melee']},
			Finesse: {'aux':[],'skills':['Stealth','Investigate','Drive','Charm','Manipulate'],'comSkills':['Unarmed','Melee','Defense','Ballistics']},
			Perception: {'aux':[],'skills':['Alertness','Investigate','Drive','Charm'],'comSkills':['Firearms','Ballistics','Initiative']},
			Stamina: {'aux':[],'skills':['Toughness','Athletics','Survival'],'comSkills':['Defense']},
			Agility: {'aux':[],'skills':['Toughness','Athletics','Stealth','Drive'],'comSkills':['Defense','Initiative']},
			Wits: {'aux':[],'skills':['Stealth','Investigate','Drive','Survival','Charm','Manipulate'],'comSkills':['Defense', 'Initiative']},
			Willpower: {'aux':['Filter','Retrogradient','Ward','Cascade Discharge','Combat Evocation','Evocation Extensibility','Sublimed Storage','Yau Combat','Yau Traversal'],'skills':['Toughness','Guts','Survival'],'comSkills':[false]},
			Intelligence: {'aux':['Condense Matter','Entropic Combat','Transmute Matter', 'Modulate Waveform', 'Redirect Waveform', 'Transmute Waveform','Alter Mass','Redirect Momenta','Telekinesis'],'skills':['Hardware','Humanities','Medicine','Science','Software','Survival','Languages'],'comSkills':[false]},
			Charisma: {'aux':['Bolstering Field','Draining Field','Halting Field','Emulate','Fade','Shift','Clairvoyance','Suggestion','Telepathy'],'skills':['Stealth','Investigate','Guts','Charm','Manipulate'],'comSkills':[false]}
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
		$('#aux-unmodal').empty().append('<h3 class="select-aux-style-h">Arcane Styles</h3>');
		$.each(auxList[trait].aux, function() {
			$('#aux-unmodal').append('<a id="'+trait+'-'+tier+'-'+encodeInput(this)+'" class="row aux-style aux-custom">'+this+'</a>');
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
		//show hide everything
		$(event.target).parent().children().slideDown();
		$('.aux-label').fadeIn();
		$('.aux-customize').fadeIn()
		$('#aux-unmodal').slideUp();
	});
	
	$('#aux-unmodal').slideDown();
}

function styleHold(event) {
	var descriptionId,
		afterInstead = false,
		appendLocation = event.target;

	//scroll calculation
	if ($('#style-unmodal').is(':visible') && $('#style-unmodal').position().top < $(event.target).position().top) {
		var height = $(window).scrollTop() - $('#style-unmodal').height();
		$('#style-unmodal').remove();
		window.scrollTo(0, height);
		$('html, body').animate({ scrollTop: $(event.target).offset().top - 200}, 300);
	} else {
		$('html, body').animate({ scrollTop: $(event.target).offset().top - 200}, 300);
		$('#style-unmodal').remove();
	}
	if (!$('#monitor').hasClass('hidden')) {
		toggleMonitor();
	}
	
	$('#styles-view .description-open').removeClass('description-open');
	//set up description ids and locations or static text descriptions
	if ($(event.target).hasClass('specialty')) {
		//specialty style row
		descriptionId = '#'+event.target.id+'-desc';
	} else if ($(event.target).hasClass('style-class-core')) {
		//core style anywhere
		appendLocation = $(event.currentTarget).find('.core-detail');
		afterInstead = true;
		descriptionId = '#'+event.target.id+'-desc';
	} else if ($(event.target).hasClass('style-class-title')) {
		//core style label
		appendLocation = $(event.currentTarget).find('.core-detail');
		afterInstead = true;
		descriptionId = '#'+$(event.target).parent().attr('id')+'-desc';
	} else if ($(event.target).hasClass('aux-style') && $(event.target).hasClass('aux-custom')) {
		//customize aux selections
		if (event.target.id.indexOf('spec1') !== -1) {
			descriptionId = '#'+event.target.id.split('spec1-')[1]+'-desc';
		} else if (event.target.id.indexOf('spec2') !== -1) {
			descriptionId = '#'+event.target.id.split('spec2-')[1]+'-desc';
		} else if (event.target.id.indexOf('spec3') !== -1) {
			descriptionId = '#'+event.target.id.split('spec3-')[1]+'-desc';
		}
	} else if ($(event.target).hasClass('aux-style') && $(event.target).hasClass('aux-row')) {
		//aux row
		descriptionId = '#'+$(event.target).children('.aux-label').attr('id')+'-desc';
	} else if ($(event.target).hasClass('aux-label') && $(event.target).parent().hasClass('aux-style')) {
		// aux row label
		descriptionId = '#'+$(event.target).attr('id')+'-desc';
	} else if ($(event.target).hasClass('aux-skill') || $(event.target).hasClass('aux-com-skill')) {
		//static description for aux skills
		descriptionId = false;
		$(appendLocation).append('<div class="unmodal" id="style-unmodal" style="display:none;"></div>');
		$('#style-unmodal').empty().append('<p>Each point in this style raises the skill with the same name by a point.</p>').slideDown();
	} else if ($(event.target).hasClass('aux-label') && ($(event.target).parent().hasClass('aux-skill') || $(event.target).parent().hasClass('aux-com-skill')) ) {
		//static description for aux skills
		descriptionId = false;
		$(appendLocation).append('<div class="unmodal" id="style-unmodal" style="display:none;"></div>');
		$('#style-unmodal').empty().append('<p>Each point in this style raises the skill with the same name by a point.</p>').slideDown();
	} else if ($(event.target).hasClass('aux-row') || $(event.target).hasClass('aux-label')) {
		//static aux node description
		descriptionId = false;
		$(event.target).closest('.aux-row').append('<div class="unmodal" id="style-unmodal" style="display:none;"></div>');
		$('#style-unmodal').empty().append('<p>This slot can be used to improve one of the skills related to this attribute or to gain one of the auxiliary styles related to this attribute.</p>').slideDown();
	}
	
	//append and populate the unmodal
	if (descriptionId) {
		if (afterInstead) {
			$(appendLocation).after('<div class="unmodal" id="style-unmodal" style="display:none;"></div>');
		} else {
			$(appendLocation).append('<div class="unmodal" id="style-unmodal" style="display:none;"></div>');
		}	
		$('#style-unmodal').empty().append('<img src="images/spin-large.gif">').slideDown();
		$('#style-unmodal').load('rulebook/styles-chapter.html '+descriptionId, function () {
			$('#style-unmodal h4').remove();
			$('#style-unmodal').append('<a id="cancel-style-options" class="button cancel long close-options">Hide Description</a>');
			$('#cancel-style-options').off().tap(function(event){
				event.stopPropagation();
				$('#style-unmodal').slideUp();
				$('html, body').animate({ scrollTop: $(event.currentTarget).parent().parent().offset().top - 200}, 300);
			});
		});
	} else {
		$('#style-unmodal').append('<a id="cancel-style-options" class="button cancel long close-options">Hide Description</a>');
		$('#cancel-style-options').off().tap(function(event){
			event.stopPropagation();
			$('#style-unmodal').slideUp();
			$('html, body').animate({ scrollTop: $(event.currentTarget).parent().parent().offset().top - 200}, 300);
		});	
	}
}