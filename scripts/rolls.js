function roll(clicked, manualDice, manualBonus, event) {
	var clickedTrait,
		dice = 0,
		bonus = 0,
		rolledSuccesses = 0,
		rollResults = 0,
		currentSpeed = parseInt($('#speed-mon .current').text()),
		speedCost = 0,
		currentAmmo,
		newAmmo,
		explode = false,
		doubleAttack = false,
		reroll = false,
		damReroll,
		lowAtt = false;
	
	//reset containers
	$('#results').finish();
	$('.action-roll-result').remove();
	$('#results .die-results, #results .roll-totals, #results .total-result, #results .dam-die-results, #results .dam-roll-totals, #results .dam-total-result, #results .location-hit, #results .critical, #results .no-speed').empty();
	$('#results .total-result, #results .damage-results').css('display', 'block');
	$('.damage-results').removeClass('bordered');
	$('.attack-row').not(('#skill-unmodal, #attk-unmodal, #dattack-unmodal, .unmodal')).slideDown();
	$('#skill-unmodal, #attk-unmodal, #dattack-unmodal, .unmodal').slideUp();
	$('.skill-row, .defense-row, .attribute-row').removeClass('description-open');
	
	// perform manual or basic roll
	if (clicked === 'manual-aim') {
		clicked = 'manual';
		dice = manualDice;
		bonus = manualBonus;
	} else if (clicked === 'manual') {
		dice = manualDice;
		bonus = manualBonus;
		$('#aim-bonus').remove();
		$('.aimed').removeClass('aimed');
	} else {
		
		// set values to roll based on what trait was clicked
		if ($(clicked).hasClass('attribute-row')) {
			dice = parseInt($(clicked).children('.attribute-value').html()) - parseInt($(clicked).children('.technique-level').html());
			bonus = parseInt($(clicked).children('.technique-level').html());
		} else if ($(clicked).hasClass('double-attack')) {
			doubleAttack = 'main';
			dice = parseInt($(clicked).children('.main-hand').children('.attack-roll').children('.detail').children('.dice').text());
			bonus = parseInt($(clicked).children('.main-hand').children('.attack-roll').children('.detail').children('.bonus').text());
			attackRoll($(clicked).children('.main-hand'), event);
		} else if ($(clicked).hasClass('off-hand')) {
			doubleAttack = 'off';
			dice = parseInt($(clicked).children('.attack-roll').children('.detail').children('.dice').text());
			bonus = parseInt($(clicked).children('.attack-roll').children('.detail').children('.bonus').text());
			attackRoll(clicked, event);
		} else {
			dice = parseInt($(clicked).children().children(".dice").html());
			bonus = parseInt($(clicked).children().children('.bonus').html());
			if ($(clicked).children('.attack-keyword-list').children('#light-explosive-desc-taphold').length > 0 || $(clicked).children('.attack-keyword-list').children('#explosive-desc-taphold').length > 0 || $(clicked).children('.attack-keyword-list').children('#high-explosive-desc-taphold').length > 0) {
				explode = true;
			} else if ($(clicked).hasClass('attack-row')) {
				//adjust bonus if we've aimed and then trigger the rest of the attack roll
				if ($(clicked).children('#aim-bonus').length > 0) {
					bonus = bonus + parseInt($(clicked).children('#aim-bonus').children('.detail').text());
				}
				attackRoll(clicked, event);
			}
		}
		
		//deduct ammo if needed
		if ($(clicked).find('.ammo-row').first().not('.infinite-ammo').length > 0) {
			currentAmmo = $(clicked).find('.ammo-row').first().children('.detail').text().split(' / ');
			if (parseInt(currentAmmo[0]) === 0 || parseInt($(clicked).children('.off-hand').find('.ammo-row').first().children('.detail').text().split(' / ')[0]) === 0) {
				currentAmmo = 'empty';
			} else {
				if ($(clicked).children('.attack-keyword-list').children('#automatic-desc-taphold').length === 1 || $('#'+$(clicked).attr('id').split('-')[0]).find('#automatic-desc-taphold').length === 1 || ($(clicked).children('.main-hand').length === 1 && $('#'+$(clicked).children('.main-hand').attr('id').split('-')[0]).find('#automatic-desc-taphold').length === 1)) {
					//it's automatic, deduct burst
					if (parseInt(currentAmmo[0]) < 3) {
						newAmmo = '0 / '+currentAmmo[1];
					} else {
						newAmmo = (parseInt(currentAmmo[0]) - 3)+' / '+currentAmmo[1];
					}
					if (doubleAttack === 'main') {
						character.attacks[$('#'+$(clicked).children('.main-hand').attr('id').split('-')[0]).attr('id')].ammoCurrent = parseInt(currentAmmo[0]) - 3;
						if (character.attacks[$('#'+$(clicked).children('.main-hand').attr('id').split('-')[0]).attr('id')].ammoCurrent < 0) {character.attacks[$('#'+$(clicked).children('.main-hand').attr('id').split('-')[0]).attr('id')].ammoCurrent = 0}
						$('#'+$(clicked).children('.main-hand').attr('id').split('-')[0]).find('.ammo-row').children('.detail').text(newAmmo);
						$('#'+$(clicked).children('.main-hand').attr('id').split('-')[0]).find('.ammo-meter').children('.ammo-pip.full').last().addClass('empty').removeClass('full');
						$('#'+$(clicked).children('.main-hand').attr('id').split('-')[0]).find('.ammo-meter').children('.ammo-pip.full').last().addClass('empty').removeClass('full');
						$('#'+$(clicked).children('.main-hand').attr('id').split('-')[0]).find('.ammo-meter').children('.ammo-pip.full').last().addClass('empty').removeClass('full');
					} else if (doubleAttack === 'off') {
						if ($(clicked).attr('id') !== $(clicked).parent().children('.main-hand').attr('id')) {
							character.attacks[$(clicked).attr('id').split('-')[0]].ammoCurrent = parseInt(currentAmmo[0]) - 1;
							$('#'+$(clicked).attr('id').split('-')[0]).find('.ammo-row').children('.detail').text(newAmmo);
							$('#'+$(clicked).attr('id').split('-')[0]).find('.ammo-meter').children('.ammo-pip.full').last().addClass('empty').removeClass('full');
							$('#'+$(clicked).attr('id').split('-')[0]).find('.ammo-meter').children('.ammo-pip.full').last().addClass('empty').removeClass('full');
							$('#'+$(clicked).attr('id').split('-')[0]).find('.ammo-meter').children('.ammo-pip.full').last().addClass('empty').removeClass('full');
						}
					} else {
						character.attacks[$(clicked).attr('id')].ammoCurrent = parseInt(currentAmmo[0]) - 3;
						if (character.attacks[$(clicked).attr('id')].ammoCurrent < 0) {character.attacks[$(clicked).attr('id')].ammoCurrent = 0}
						$(clicked).children('.ammo-meter').children('.ammo-pip.full').last().addClass('empty').removeClass('full');
						$(clicked).children('.ammo-meter').children('.ammo-pip.full').last().addClass('empty').removeClass('full');
					}
				} else if ($(clicked).children('.attack-keyword-list').children('#bow-desc-taphold').length === 1) {
					//it's a bow, only show current column
					newAmmo = (parseInt(currentAmmo[0]) - 1);
					character.attacks[$(clicked).attr('id')].ammoCurrent = parseInt(currentAmmo[0]) - 1;
				} else {
					//it's regular, deduct one
					newAmmo = (parseInt(currentAmmo[0]) - 1)+' / '+currentAmmo[1];
					if (doubleAttack === 'main') {
						character.attacks[$(clicked).children('.main-hand').attr('id').split('-')[0]].ammoCurrent = parseInt(currentAmmo[0]) - 1;
						$('#'+$(clicked).children('.main-hand').attr('id').split('-')[0]).find('.ammo-row').children('.detail').text(newAmmo);
						$('#'+$(clicked).children('.main-hand').attr('id').split('-')[0]).find('.ammo-meter').children('.ammo-pip.full').last().addClass('empty').removeClass('full');
					} else if (doubleAttack === 'off') {
						if ($(clicked).attr('id') !== $(clicked).parent().children('.main-hand').attr('id')) {
							character.attacks[$(clicked).attr('id').split('-')[0]].ammoCurrent = parseInt(currentAmmo[0]) - 1;
							$('#'+$(clicked).attr('id').split('-')[0]).find('.ammo-row').children('.detail').text(newAmmo);
							$('#'+$(clicked).attr('id').split('-')[0]).find('.ammo-meter').children('.ammo-pip.full').last().addClass('empty').removeClass('full');
						}
					} else {
						character.attacks[$(clicked).attr('id')].ammoCurrent = parseInt(currentAmmo[0]) - 1;
					}
				}
				$(clicked).find('.ammo-row').first().children('.detail').text(newAmmo);
				$(clicked).children('.ammo-meter').children('.ammo-pip.full').last().addClass('empty').removeClass('full');
				$('#double-attacks #'+$(clicked).attr('id')+'-sub-row .ammo-row').empty().append($(clicked).children('.ammo-row').html());
			}
		}
		
		//deduct speed cost if attack or defense
		if ($(clicked).hasClass('attack-row row') || $(clicked).hasClass('defense-row row') || $(clicked).hasClass('double-attack')) {
			if (currentAmmo !== 'empty') {
				if ($(clicked).children('.speed-row').length > 0) {
					speedCost = parseInt($(clicked).children('.speed-row').children('.detail').text());
				} else if ($(clicked).children('.mutual-stats').find('.speed-row').length > 0) {
					speedCost = parseInt($(clicked).children('.mutual-stats').find('.speed-row').children('.detail').text());
				} else {
					speedCost = 3;
				}
				if (speedCost > parseInt($('#speed-mon .current').text())) {
					$('#results .no-speed').text('Not enough speed!');
				}
				$('#speed-mon .current').text(currentSpeed - speedCost);
				$('#speed-mon .notice').text('-'+ speedCost).finish().fadeIn(200).delay(1000).fadeOut(1000);
				updateMonitor(clicked);
			}
		}
		
		//remove aim bonus container whether we used it or not
		$('.aimed').removeClass('aimed');
		$('#aim-bonus').remove();
	}
	
	if (currentAmmo !== 'empty' && clicked.id !== 'evocation-attack' && clicked.id !== 'entropic-attack' && clicked.id !== 'photonic-attack' && clicked.id !== 'kinetic-attack' && !explode) {
		// roll dice and append values to results container
		if (dice <= 0) {
			dice = 1;
			lowAtt = true;
		}
		for (var i = 1; i <= dice; i++) {	
			var dieResult = Math.floor(Math.random()* 6)+1;
			//show die
			$('#results .die-results').append('<span class="dice-result-icon die-value-'+ dieResult +'"></span>');
			//increment success tally
			if ((dieResult > 3 && lowAtt === false) || dieResult > 4) {
				rolledSuccesses++;
			}
			//did a 6 explode
			if (dieResult === 6) {
				reroll = true;
			}
			//it's the last die and we earned a reroll, add another die and disable reroll
			if (i === dice && reroll) {
				if ($('#results .die-results hr').length === -0) {
					$('#results .die-results').append('<hr class="reroll-rule"><span class="reroll-label">Rerolls:</span>');
				}
				dice++;
				reroll = false;
			}
		}
		//populate results container
		rollResults = rolledSuccesses + bonus;
		if ($(clicked).hasClass('attack-row row')) {
			$('#results h4').remove();
			$('#results .die-results').before('<h4>'+$(clicked).children('.attack-name').text()+'</h4>');
		} else if ($(clicked).hasClass('defense-row row')) {
			$('#results h4').remove();
			$('#results .die-results').before('<h4>'+$(clicked).children('.defense-title').text()+'</h4>');
		} else if ($(clicked).hasClass('double-attack') || $(clicked).hasClass('off-hand')) {
			$('#results h4').remove();
			$('#results .die-results').before('<h4>'+$(clicked).children('.attack-name').text()+'</h4>');
		} else if (clicked === 'manual') {
			console.log('manual roll');
		} else {
			$('#results h4').remove();
			$('#results .die-results').before('<h4>'+decodeInput($(clicked).attr('id'))+'</h4>');
		}
		if (clicked.id) {$('#results').removeClass().addClass('results-'+clicked.id);}
		if (lowAtt) {$('#results .die-results').prepend('<div class="zero-att-penalty">Low Attribute Penalty!</div>');}
		$('#results .roll-totals').append(rolledSuccesses +' rolled');
		if (bonus != 0) { $('#results .roll-totals').append(' + '+ bonus +' bonus'); }
		$('#results .total-result').append('<span class="total">'+ rollResults +'</span><br> total successes');
		if ($(clicked).hasClass('double-attack')) {
			$('#modal').empty().append('<div class="double-result main-hand-result"><h4>'+$(clicked).children('.sub-row').children('h3').first().text()+'</h4></div><div class="double-result off-hand-result"><h4>'+$(clicked).children('.sub-row').children('h3').last().text()+'</h4></div>');
			$('#modal .main-hand-result').append($('#results').html());
			roll($(clicked).children('.off-hand'), false, false, event);
		} else if ($(clicked).hasClass('off-hand')) {
			$('#modal .off-hand-result').append($('#results').html());
			$('#modal, #modal-shade').fadeIn(100);
		} else {
			$('#results, #modal-shade').fadeIn(100);
		}
	} else if (clicked.id === 'evocation-attack' || clicked.id === 'entropic-attack' || clicked.id === 'photonic-attack' || clicked.id === 'kinetic-attack') {
		$('#results h4').remove();
		if (clicked.id) {$('#results').removeClass().addClass('results-'+clicked.id);}
		$('#results .die-results').before('<h4>'+$(clicked).children('.attack-name').text()+'</h4>');
		$('#results .total-result').css('display', 'none')
		if (parseInt($('#crisis-mon .labels .current').text()) <= 0) {
			$('#results .no-speed').append('<div class="no-entanglement">Not enough Entanglement!</div>');
		} else {
			$('.no-entanglement').remove();
			$('#crisis-mon .labels .current').text(parseInt($('#crisis-mon .labels .current').text()) - 1);
		}
		$('#results, #modal-shade').fadeIn(100);
	} else if (currentAmmo !== 'empty' && explode) {
		explosiveRoll(clicked, dice, bonus);
	} else {
		$('#modal').empty().append('Out of ammo!');
		$('#modal, #modal-shade').show();
	}
}

function attackRoll(clicked, event) {
	var damDice = parseInt($(clicked).children('.damage-row').children().children('.dice').html()),
		damBonus = parseInt($(clicked).children('.damage-row').children().children('.bonus').html()),
		rolledLocation,
		criticalLevel = 0,
		damRolledSuccesses = 0,
		damRollResults = 0,
		damReroll = false;
	
	$('.total-result .tohit').remove();
	$('.total-result').prepend('<span class="icon tohit"></span>');

	//check if we're aimed and if ranged + style bonus applies
	if ($(clicked).find('#aim-bonus').length > 0 && character.styles.classes.Perception.spec3[1] > 1 && styledPer > damDice) {
		damDice = styledPer-techPer;
		damBonus = damBonus+techPer;
		$('#results').append('<p class="action-roll-result">Your damage roll while aiming was improved by the style <em>Ranged +</em>.</p>');
	}

	// roll damage dice and append values to results container
	for (var i = 1; i <= damDice; i++) {
		var damDieResult = Math.floor(Math.random()* 6)+1;
		
		$('#results .dam-die-results').append('<span class="dice-result-icon die-value-'+ damDieResult +'"></span>');
		if (damDieResult > 3) {
			damRolledSuccesses++;
		}
		//did a 6 explode
		if (damDieResult === 6) {
			damReroll = true;
		}
		//it's the last die and we earned a reroll, add another die and disable reroll
		if (i === damDice && damReroll) {
			if ($('#results .dam-die-results hr').length === -0) {
				$('#results .dam-die-results').append('<hr class="reroll-rule"><span class="reroll-label">Rerolls:</span>');
			}
			damDice++;
			damReroll = false;
		}
	}

	//populate damage results container
	damRollResults = damRolledSuccesses + damBonus;
	$('#results .dam-roll-totals').append(damRolledSuccesses +' rolled');
	if (damBonus != 0) { 
		$('#results .dam-roll-totals').append(' + '+ damBonus +' bonus'); 
	}
	if ($(event.target).parents('.attack-row').children('.attack-keyword-list').children('#stunning-desc-taphold').length === 1) {
		//if it's a stunner show different damage results
		if (damRollResults === 0) {
			$('#results .dam-total-result').append('<span class="total">0</span><br> Target not stunned.');
		} else if (damRollResults === 1) {
			$('#results .dam-total-result').append('<span class="total">1</span><br> Target stunned for this round.');
		} else {
			$('#results .dam-total-result').append('Target stunned for <span class="total">'+ damRollResults +'</span><br> rounds.');
		}
	} else {
		//otherwise show normal damage results
		if (damRollResults === 0) {
			$('#results .dam-total-result').append('<span class="total">1</span><br> minimum damage');
		} else {
			$('#results .dam-total-result').append('<span class="total">'+ damRollResults +'</span><br> total damage');
		}
	}

	// roll for location/critical and append to results, but not if evocation attack
	if (clicked.id !== 'evocation-attack' && clicked.id !== 'entropic-attack' && clicked.id !== 'photonic-attack' && clicked.id !== 'kinetic-attack') {
		$('.damage-results').addClass('bordered');
		locationRoll(criticalLevel, damRollResults, event);
	}
	
	if (clicked.id === 'entropic-attack') {
		$('.damage-results').hide().after('<div class="action-roll-result">Deal 1 damage after each turn for <span class="alert">'+character.styles.arcane.chromodynamism+'</span> turns.</span>');
	}
} 

function locationRoll(criticalLevel, damRollResults, event) {
	var rolledLocation = 0,
		locationReroll = true;
	
	while (locationReroll === true) {
		locationReroll = false;
		rolledLocation = Math.floor(Math.random()* 6)+1;
		
		if (rolledLocation === 1) {
			rolledLocation = "Legs";
		} else if (rolledLocation === 2) {
			rolledLocation = "Off Arm";
		} else if (rolledLocation === 3) {
			rolledLocation = "Main Arm";
		} else if (rolledLocation === 4) {
			rolledLocation = "Lower Body";
		} else if (rolledLocation === 5) {
			rolledLocation = "Upper Body";
		} else if (rolledLocation === 6) {
			criticalLevel++;
			locationReroll = true;
		}
	}
	$('#results .location-hit, #results .critical').empty();
	$('#results .location-hit').append('to hit <strong>'+ rolledLocation +'</strong>');
	if (criticalLevel > 0 && $(event.target).parents('.attack-row').children('.attack-keyword-list').children('#stunning-desc-taphold').length === 0) { 
		$('#results .dam-roll-totals').append('<br><span class="critical">+ '+ criticalLevel +' critical</span>');
		damRollResults = damRollResults + criticalLevel;
		$('#results .dam-total-result').empty().append('<span class="total">'+ damRollResults +'</span><br> total damage');
	}
}

function explosiveRoll(clicked, dice, bonus) {
	var light = false, 
		damageDice = parseInt($(clicked).children('.damage-row').children().children('.dice').text()),
		damageBonus = parseInt($(clicked).children('.damage-row').children().children('.bonus').text()),
		normalToHitResult = bonus,
		normalDamResult = damageBonus,
		normalReroll = false,
		normalDamReroll = false,
		splashDice = dice + bonus,
		splashDamage =  damageDice + damageBonus,
		splashToHitResult = 0,
		splashDamResult = 0,
		splashReroll = false,
		splashDamReroll = false;
	if ($(clicked).children('.attack-keyword-list').children('#light-explosive-desc-taphold').length > 0) {light = true;}
	$('#modal').empty().append('<div id="explode-results"></div>');
	//set up full zone if needed
	if (!light) {
		$('#modal #explode-results').append('<div id="full-damage-zone" class="zone-wrapper"><h3>Full Damage Zone</h3><span class="full-dam-total-result full-zone"><span class="total">'+splashDamage+'</span> damage</span></div>');
	}
	//compute rolls
	for (var i = 1; i <= dice; i++) {
		var thisRollResult = Math.floor(Math.random()* 6)+1;
		if (thisRollResult > 3) {
			normalToHitResult++;
		}
		if (thisRollResult === 6) {
			normalReroll = true;
		}
		if (i === dice && normalReroll) {
			dice++;
			normalReroll = false;
		}
	}
	for (var i = 1; i <= damageDice; i++) {	
		var thisRollResult = Math.floor(Math.random()* 6)+1;
		if (thisRollResult > 3) {
			normalDamResult++;
		}
		if (thisRollResult === 6) {
			normalDamReroll = true;
		}
		if (i === damageDice && normalDamReroll) {
			damageDice++;
			normalDamReroll = false;
		}
	}
	for (var i = 1; i <= splashDice; i++) {	
		var thisRollResult = Math.floor(Math.random()* 6)+1;
		if (thisRollResult > 3) {
			splashToHitResult++;
		}
		if (thisRollResult === 6) {
			splashReroll = true;
		}
		if (i === splashDice && splashReroll) {
			splashDice++;
			splashReroll = false;
		}
	}
	for (var i = 1; i <= splashDamage; i++) {	
		var thisRollResult = Math.floor(Math.random()* 6)+1;
		if (thisRollResult > 3) {
			splashDamResult++;
		}
		if (thisRollResult === 6) {
			splashDamReroll = true;
		}
		if (i === splashDamage && splashDamReroll) {
			splashDamage++;
			splashDamReroll = false;
		}
	}
	//append results
	$('#modal #explode-results').append('<div id="normal-zone" class="zone-wrapper"><h3>Normal Zone</h3></div><div id="splash-zone" class="zone-wrapper"><h3>Splash Zone</h3></div>');
	$('#modal #normal-zone').append('<div class="to-hit-total-result normal-zone"><span class="total">'+normalToHitResult+'</span> to hit</div><div class="dam-total-result normal-zone"><span class="total">'+normalDamResult+'</span> damage</div><div class="clear"></div>');
	$('#modal #splash-zone').append('<div class="to-hit-total-result splash-zone"><span class="total">'+splashToHitResult+'</span> to hit</div><div class="dam-total-result splash-zone"><span class="total">'+splashDamResult+'</span> damage</div><div class="clear"></div>');
	$('#modal').append($('#results .no-speed'));
	$('#modal, #modal-shade').show();
}

function attHold(event) {
	var artifactBonus = 0,
		armorPenalty = 0;
	
	$('#att-unmodal').remove();
	$('.attribute-row').removeClass('description-open');
	if (event.currentTarget.id === 'Strength' || event.currentTarget.id === 'Finesse' || event.currentTarget.id === 'Perception') {
		$('#Perception.attribute-row').after('<div class="unmodal '+event.currentTarget.className+'" id="att-unmodal" style="display:none;"></div>');
	} else if (event.currentTarget.id === 'Stamina' || event.currentTarget.id === 'Agility' || event.currentTarget.id === 'Wits') {
		$('#Wits.attribute-row').after('<div class="unmodal '+event.currentTarget.className+'" id="att-unmodal" style="display:none;"></div>');
	} else {
		$('#Charisma.attribute-row').after('<div class="unmodal '+event.currentTarget.className+'" id="att-unmodal" style="display:none;"></div>');	
	}
	$(event.currentTarget).addClass('description-open');
	$('#att-unmodal').removeClass('attribute-row');

	//calculate etymology
	if (armorAugment[0] === event.currentTarget.id) {artifactBonus = armorAugment[1];}
	if (character.artifacts.cast.bio_interface && character.artifacts.cast.bio_interface.augmentTrait === event.currentTarget.id) {artifactBonus = character.artifacts.cast.bio_interface.augment}
	if (character.artifacts.cast.noo_interface && character.artifacts.cast.noo_interface.augmentTrait === event.currentTarget.id) {artifactBonus = character.artifacts.cast.noo_interface.augment}
	if (event.currentTarget.id === 'Perception' && character.status.body.upper.armor[1] === 3) {armorPenalty = 1;}
	if (event.currentTarget.id === 'Agility' && character.status.body.lower.armor[1] === 3) {armorPenalty = 1;}
	if (event.currentTarget.id === 'Finesse' && character.status.body.main.armor[1] === 3) {armorPenalty = 1;}

	//populate etymology
	if ((character.styles.classes[event.currentTarget.id].core > 0 || artifactBonus > 0 || armorPenalty > 0) && (character.coreAttributes[event.currentTarget.id] + character.styles.classes[event.currentTarget.id].core + artifactBonus - armorPenalty) >= 0) {
		$('#att-unmodal').empty().append('<p class="trait-description etymology">Base Value: '+ character.coreAttributes[event.currentTarget.id] +'</p>');
		if (character.styles.classes[event.currentTarget.id].core > 0) {$('#att-unmodal .etymology').append(' + Styles: ' + character.styles.classes[event.currentTarget.id].core);}
		if (artifactBonus > 0) {$('#att-unmodal .etymology').append(' + Artifacts: '+ artifactBonus);}
		if (armorPenalty > 0) {$('#att-unmodal .etymology').append(' - Armor Penalty: '+ armorPenalty);}
		$('#att-unmodal .etymology').append(' = <strong>'+ (character.coreAttributes[event.currentTarget.id] + character.styles.classes[event.currentTarget.id].core + artifactBonus - armorPenalty) +'</strong>');
	}

	//populate description and close button
	$('#att-unmodal').append('<p class="trait-description">'+taxonomy.attributes[event.currentTarget.id]+'</p>');
	$('#att-unmodal').append('<a id="cancel-att-options" class="button cancel close-options long">Hide Description</a>');
	$('#cancel-att-options').off().tap(function(){
		$('#att-unmodal').slideToggle();
		$('.attribute-row').removeClass('description-open');
	});
	$('#att-unmodal').slideDown();
}

function skillHold(skill) {
	var isCombat = false,
		technAtt = 0;
	if (!$(skill.currentTarget).hasClass('unskill-row')) {
		if (skill.currentTarget.id === 'Ballistics' || skill.currentTarget.id === 'Defense' || skill.currentTarget.id === 'Firearms' || skill.currentTarget.id === 'Initiative' || skill.currentTarget.id === 'Melee' || skill.currentTarget.id === 'Unarmed') {isCombat = true;}
		if (isCombat) {
			technAtt = window['tech' + character.combatSkills[skill.currentTarget.id][1].substring(0, 1) + character.combatSkills[skill.currentTarget.id][1].substring(1, 3).toLowerCase()];
		} else {
			technAtt = window['tech' + character.skills[skill.currentTarget.id][1].substring(0, 1) + character.skills[skill.currentTarget.id][1].substring(1, 3).toLowerCase()];
		}
	}	
	//scroll calculation
	if ($('#skill-unmodal').is(':visible') && $('#skill-unmodal').position().top < $(skill.currentTarget).position().top) {
		var height = $(window).scrollTop() - $('#skill-unmodal').height();
		$('#skill-unmodal').remove();
		window.scrollTo(0, height);
		$('html, body').animate({ scrollTop: $(skill.currentTarget).offset().top - 150}, 300);
	} else {
		$('html, body').animate({ scrollTop: $(skill.currentTarget).offset().top - 150}, 300);
		$('#skill-unmodal').remove();
	}
	if (!$('#monitor').hasClass('hidden')) {
		toggleMonitor();
	}

	//reset
	$('.skill-row').removeClass('description-open');
	$(skill.currentTarget).after('<div class="unmodal '+skill.currentTarget.className+'" id="skill-unmodal" style="display:none;"></div>').addClass('description-open');
	$('#skill-unmodal').removeClass('skill-row');
	
	//populate etymology
	if (isCombat) {
		if (styledSkills.comSkills[skill.currentTarget.id] > 0) {
			$('#skill-unmodal').empty().append('<p class="trait-description etymology">Base Value: '+ character.combatSkills[skill.currentTarget.id][2] +'</p>');
			if (styledSkills.comSkills[skill.currentTarget.id] > 0) {$('#skill-unmodal .etymology').append(' + Styles: ' + styledSkills.comSkills[skill.currentTarget.id]);}
			$('#skill-unmodal .etymology').append(' = <strong>'+ (character.combatSkills[skill.currentTarget.id][2] + styledSkills.comSkills[skill.currentTarget.id]) +'</strong>');
		}
		if (technAtt > 0) {
			$('#skill-unmodal').append('<p class="trait-description etymology">Due to your high '+ character.combatSkills[skill.currentTarget.id][0] +' score, rolls made with this attribute trade '+ technAtt +' dice for '+ technAtt +' successes.</p>');
		}
	} else {
		if (styledSkills.skills[skill.currentTarget.id] > 0) {
			$('#skill-unmodal').empty().append('<p class="trait-description etymology">Base Value: '+ character.skills[skill.currentTarget.id][2] +'</p>');
			if (styledSkills.skills[skill.currentTarget.id] > 0) {$('#skill-unmodal .etymology').append(' + Styles: ' + styledSkills.skills[skill.currentTarget.id]);}
			$('#skill-unmodal .etymology').append(' = <strong>'+ (character.skills[skill.currentTarget.id][2] + styledSkills.skills[skill.currentTarget.id]) +'</strong>');
		}
		if (skill.currentTarget.id === 'Alertness' && character.styles.classes.Perception.spec1[1] > 0) {
			$('#skill-unmodal').append('<p class="trait-description etymology"> The style <em>Super Senses</em> has added '+ character.styles.classes.Perception.spec1[1] +' dice to rolls with this skill.');
		}
		if (technAtt > 0) {
			$('#skill-unmodal').append('<p class="trait-description etymology">Due to your high '+ character.skills[skill.currentTarget.id][0] +' score, rolls made with this attribute trade '+ technAtt +' dice for '+ technAtt +' successes.</p>');
		}
	}	

	//populate
	if (taxonomy.skills[skill.currentTarget.id]) {
		$('#skill-unmodal').append('<p class="trait-description">'+taxonomy.skills[skill.currentTarget.id]+'</p>');
	} else {
		$('#skill-unmodal').append('<p>A custom skill.</p>');
	}
	if (skill.currentTarget.id === 'Initiative' && character.styles.classes.Wits.spec1[1] > 0) {
		$('#skill-unmodal').append('<a id="priority-initiative" class="row color Wits-primary">Use Priority Initiative<span class="detail-row">Uses 1 Entanglement to gain multiple improved initiatives.</span></a>');
		$('#priority-initiative').click(function(){
			if (character.status.currentEntanglement > 0) {
				updateMonitor('manualEntMinus');
				$(skill.currentTarget).find('.dice').text((parseInt($(skill.currentTarget).find('.dice').text())+character.styles.classes.Wits.spec1[1]));
				if (character.styles.classes.Wits.spec1[1] === 1) {
					roll($('#Initiative').first(), 0, 0, skill);
					$('#modal').empty().append('<div class="initiative-result first-init">'+$('#results').html()+'</div>');
					roll($('#Initiative').first(), 0, 0, skill);
					if ($('#results .total-result .total').text() !== $('#modal .total-result .total').text()) {
						$('#results').hide();
						$('#modal h4').first().append(' 1');
						$('#modal').append('<div class="initiative-result second-init">'+$('#results').html()+'</div>').show();
						$('#modal h4').last().append(' 2');
						$('#modal').append('<span class="action-roll-result">You get an initiative slot at each number indicated by these two rolls.</span>');
					} else {
						$('#results').append('<span class="action-roll-result">Initiative rolls were the same, you only get one initiative slot.</span>');
					}
				} else if (character.styles.classes.Wits.spec1[1] === 2) {
					roll($('#Initiative').first(), 0, 0, skill);
					$('#results').append('<span class="action-roll-result">In addition to this result, choose any number to be your other initiative slot.</span>');
				} else if (character.styles.classes.Wits.spec1[1] === 3) {
					roll($('#Initiative').first(), 0, 0, skill);
					$('#modal').empty().append('<div class="initiative-result first-init">'+$('#results').html()+'</div>');
					roll($('#Initiative').first(), 0, 0, skill);
					if ($('#results .total-result .total').text() !== $('#modal .total-result .total').text()) {
						$('#results').hide();
						$('#modal h4').first().append(' 1');
						$('#modal').append('<div class="initiative-result second-init">'+$('#results').html()+'</div>').show();
						$('#modal h4').last().append(' 2');
						$('#modal').append('<span class="action-roll-result">You get an initiative slot at each number indicated by these two rolls and a third slot at a number of your choosing.</span>');
					} else {
						$('#results').append('<span class="action-roll-result">Initiative rolls were the same, you get one initiative slot at this number plus another one at a number you choose.</span>');
					}
				}
				$(skill.currentTarget).find('.dice').text((parseInt($(skill.currentTarget).find('.dice').text())-character.styles.classes.Wits.spec1[1]))
			} else {
				$('#modal').empty().append('<span class="alert">Not enough Entanglement!</span>');
				$('#modal, #modal-shade').show();
			}
			$('#skill-unmodal').slideUp();
			$(skill.currentTarget).removeClass('description-open');
		});
	}
	if (!$(skill.currentTarget).hasClass('unskill-row')) {
		$('#skill-unmodal').append('<h4>Roll with other attribute:</h4>');
		$.each(character.coreAttributes, function( key, value ) {
			var styledAtt = 'styled'+key.substr(0,3),
				techAtt = 'tech'+key.substr(0,3),
				roll = 0,
				bonus = 0,
				defaultAtt = false;
			if (key === 'Stamina') {
				styledAtt = 'styledStm';
				techAtt = 'techStm';
			}
			roll = window[styledAtt];
			if (isCombat) {
				bonus = window[techAtt] + character.combatSkills[skill.currentTarget.id][2];
				if (styledSkills.comSkills[skill.currentTarget.id]) {
					bonus = bonus + styledSkills.comSkills[skill.currentTarget.id];
				}
				if (character.combatSkills[skill.currentTarget.id][0] === key) {
					defaultAtt = true;
				}
			} else {
				bonus = window[techAtt] + character.skills[skill.currentTarget.id][2];
				if (styledSkills.skills[skill.currentTarget.id]) {
					bonus = bonus + styledSkills.skills[skill.currentTarget.id];
				}
				if (character.skills[skill.currentTarget.id][0] === key) {
					defaultAtt = true;
				}
			}
			if (defaultAtt) {
				$('#skill-unmodal').append('<a class="row third modal-att-row invisible-att-row '+key+'-primary color '+key+'"><div class="manual-key">'+ key +'</div><div class="skillhold-roll">'+ roll +' + '+ bonus +'</div></a>');
			} else {
				$('#skill-unmodal').append('<a class="row third modal-att-row '+key+'-primary color '+key+'"><div class="manual-key">'+ key +'</div><div class="skillhold-roll">'+ roll +' + '+ bonus +'</div></a>');
			}
		});
		$('#skill-unmodal').append('<h4>Roll disadvantaged with:</h4>');
		$.each(character.coreAttributes, function( key, value ) {
			var styledAtt = 'styled'+key.substr(0,3),
				techAtt = 'tech'+key.substr(0,3),
				roll = 0,
				bonus = 0,
				defaultAtt = false;
			if (key === 'Stamina') {
				styledAtt = 'styledStm';
				techAtt = 'techStm';
			}
			roll = window[styledAtt];
			if (isCombat) {
				bonus = window[techAtt] + character.combatSkills[skill.currentTarget.id][2];
				if (styledSkills.comSkills[skill.currentTarget.id]) {
					bonus = bonus + styledSkills.comSkills[skill.currentTarget.id];
				}
				if (character.combatSkills[skill.currentTarget.id][0] === key) {
					defaultAtt = true;
				}
			} else {
				bonus = window[techAtt] + character.skills[skill.currentTarget.id][2];
				if (styledSkills.skills[skill.currentTarget.id]) {
					bonus = bonus + styledSkills.skills[skill.currentTarget.id];
				}
				if (character.skills[skill.currentTarget.id][0] === key) {
					defaultAtt = true;
				}
			}
			roll = roll + bonus;
			bonus = 0;
			$('#skill-unmodal').append('<a class="row third modal-att-row '+key+'-tint color '+key+'"><div class="manual-key">'+ key +'</div><div class="skillhold-roll">'+ roll +' + '+ bonus +'</div></a>');
		});
		$('.modal-att-row').click(function(event){
			$('#skill-unmodal').hide();
			$('#results h4').remove();
			$('#results').prepend('<h4>'+$(this).find('.manual-key').text()+' + '+$(this).parent().prev().find('.skill-name').text()+'</h4>');
			roll('manual', parseInt($(this).children('.skillhold-roll').text().split(' + ')[0]), parseInt($(this).children('.skillhold-roll').text().split(' + ')[1]), event);
		});
	}
	$('#skill-unmodal').append('<a id="cancel-skill-options" class="button cancel long close-options">Hide <span class="teeny-tiny-hide">Skill</span> Options</a>');
	$('#cancel-skill-options').off().tap(function(){
		$('#skill-unmodal').slideToggle();
		$(skill.currentTarget).removeClass('description-open');
		$('html, body').animate({ scrollTop: $(skill.currentTarget).offset().top - 150}, 300);
	});
	$('.invisible-att-row').off();
	$('#skill-unmodal').slideDown();
}

function defHold(event) {
	var attString = '',
		styledAtt = 0,
		techAtt = 0;
	if (character.styles.classes.Finesse.spec1[1] >= 2 && styledFin > styledAgi && event.currentTarget.id === 'melee-dodge') {
		attString = 'Finesse'
		styledAtt = styledFin;
		techAtt = techFin;
	} else if (event.currentTarget.id === 'melee-dodge') {
		attString = 'Agility';
		styledAtt = styledAgi;
		techAtt = techAgi;
	} else if (event.currentTarget.id === 'ranged-dodge') {
		attString = 'Wits';
		styledAtt = styledWit;
		techAtt = techWit;
	}

	//scroll calculation
	if ($('#def-unmodal').is(':visible') && $('#def-unmodal').position().top < $(event.currentTarget).position().top) {
		var height = $(window).scrollTop() - $('#def-unmodal').height();
		$('#def-unmodal').remove();
		window.scrollTo(0, height);
		$('html, body').animate({ scrollTop: $(event.currentTarget).offset().top - 150}, 300);
	} else {
		$('html, body').animate({ scrollTop: $(event.currentTarget).offset().top - 150}, 300);
		$('#def-unmodal').remove();
	}
	if (!$('#monitor').hasClass('hidden')) {
		toggleMonitor();
	}

	//reset
	$('.defense-row').removeClass('description-open');
	$(event.currentTarget).after('<div class="unmodal '+event.currentTarget.className+'" id="def-unmodal" style="display:none;"></div>').addClass('description-open');
	$('#def-unmodal').removeClass('defense-row');
	
	//start to populate
	$('#def-unmodal').empty().append('<div class="trait-description">'+taxonomy.defenses[this.id.split('-')[0]]+'</div>');
	
	//populate etymology
	if (event.currentTarget.id === 'passive-defense' && character.styles.classes.Wits.spec2[1] > 0) {
		$('#def-unmodal').prepend('<p class="etymology"><strong>Defense</strong> skill: '+$('#Defense').first().find('.point').not('.empty').length+' + <em>Passive Defense</em> style: '+character.styles.classes.Wits.spec2[1]+' = </strong>'+ ($('#Defense').first().find('.point').not('.empty').length + character.styles.classes.Wits.spec2[1]) +'</strong></p>');
	} else if (event.currentTarget.id !== 'passive-defense') {
		$('#def-unmodal').prepend('<p class="etymology"><strong>'+attString+'</strong>: ('+(styledAtt-techAtt)+'+'+techAtt+') + <strong>Defense</strong> skill: (0+'+$('#Defense').first().find('.point').not('.empty').length+')');
		if (character.styles.classes.Agility.spec3[1] > 0) {$('#def-unmodal .etymology').append(' + <em>Active Defense</em> style: (0+'+character.styles.classes.Agility.spec3[1]+')');}
		$('#def-unmodal .etymology').append(' = <strong>'+$(event.currentTarget).find('.roll').text().trim()+'</strong></p>');
	}
	
	//list if zone def
	if (attString === 'Finesse') {
		$('#def-unmodal .trait-description').append('<p>Due to your ranks in the style <em>Deft Combat</em>, the normal Agility portion of this roll has been replace by your superior Finesse score.</p>');
	}
	
	//add disadvantaged roll button
	if (event.currentTarget.id !== 'passive-defense') {
		$('#def-unmodal').append('<div id="'+this.id+'-actions-list" class="defense-actions-list"><h4>Special Actions</h4><a id="'+this.id+'-disadvantaged-roll" class="row color '+event.currentTarget.className.split('-shade')[0].slice(-3)+'-primary defense-action">Roll Disadvantaged</a></div>');
	}
	$('.defense-action').click(function(){
		var diceReset = parseInt($('#'+this.id.split('-disadvantaged-roll')[0]+' .roll .dice').text()),
			bonusReset = parseInt($('#'+this.id.split('-disadvantaged-roll')[0]+' .roll .bonus').text());
		$('#def-unmodal').slideUp();
		$('#'+this.id.split('-disadvantaged-roll')[0]+' .roll .dice').text((diceReset + bonusReset));
		$('#'+this.id.split('-disadvantaged-roll')[0]+' .roll .bonus').text('0');
		roll($('#'+this.id.split('-disadvantaged-roll')[0]), false, false, event);
		$('#'+this.id.split('-disadvantaged-roll')[0]+' .roll .dice').text(diceReset);
		$('#'+this.id.split('-disadvantaged-roll')[0]+' .roll .bonus').text(bonusReset);
	});

	$('#def-unmodal').append('<a id="cancel-def-options" class="button cancel long close-options">Hide Options</a>');
	$('#cancel-def-options').off().tap(function(){
		$('#def-unmodal').slideToggle();
		$(event.currentTarget).removeClass('description-open');
	});
	$('#def-unmodal').slideDown();
}

function statHold(event) {

	//scroll calculation
	if ($('#stat-unmodal').is(':visible') && $('#stat-unmodal').position().top < $(event.target).position().top) {
		var height = $(window).scrollTop() - $('#stat-unmodal').height();
		$('#stat-unmodal').remove();
		window.scrollTo(0, height);
		$('html, body').animate({ scrollTop: $(event.target).offset().top - 175}, 300);
	} else {
		$('html, body').animate({ scrollTop: $(event.target).offset().top - 175}, 300);
		$('#stat-unmodal').remove();
	}
	if (!$('#monitor').hasClass('hidden')) {
		toggleMonitor();
	}

	//pupulate
	$('.body-row, #status .row').removeClass('description-open');
	if ($(event.target).hasClass('armor-title') || $(event.target).hasClass('armor-value-row') || $(event.target).hasClass('penalty')) {
		//show basic armor description
		$(event.currentTarget).find('.detail-row.penalty').after('<div class="unmodal" id="stat-unmodal" style="display:none;"></div>').addClass('description-open');
		$('#stat-unmodal').append('<p>Each point of armor deducts a point of damage from all incoming attacks.</p><p>Heavy armor may have a penalty. If so, it will be listed with the stat it is deducting a point from.</p>');
	} else if ($(event.target).hasClass('artifact-function')) {
		//load artifact description
		$(event.target).append('<div class="unmodal" id="stat-unmodal" style="display:none;"></div>').addClass('description-open');
		$('#stat-unmodal').empty().append('<img src="images/spin-large.gif">');
		if ($(event.target).hasClass('primary')) {
			$('#stat-unmodal').load('rulebook/equipment-chapter.html .artifact-garment-primary-desc', function(){
				$('#stat-unmodal h4').remove();
				$('#stat-unmodal').append('<a id="cancel-stat-options" class="button cancel long close-options">Hide Description</a>');
				$('#cancel-stat-options').off().tap(function(){
					$('#stat-unmodal').slideUp();
				});
			});
		} else if ($(event.target).hasClass('augment')) {
			$('#stat-unmodal').load('rulebook/equipment-chapter.html #garment-augment', function(){
				$('#stat-unmodal h4').remove();
				$('#stat-unmodal').append('<a id="cancel-stat-options" class="button cancel long close-options">Hide Description</a>');
				$('#cancel-stat-options').off().tap(function(){
					$('#stat-unmodal').slideUp();
				});
			});
		} else if ($(event.target).hasClass('harden')) {
			$('#stat-unmodal').load('rulebook/equipment-chapter.html #garment-harden', function(){
				$('#stat-unmodal h4').remove();
				$('#stat-unmodal').append('<a id="cancel-stat-options" class="button cancel long close-options">Hide Description</a>');
				$('#cancel-stat-options').off().tap(function(){
					$('#stat-unmodal').slideUp();
				});
			});
		} else if ($(event.target).hasClass('store')) {
			$('#stat-unmodal').load('rulebook/equipment-chapter.html #garment-store', function(){
				$('#stat-unmodal h4').remove();
				$('#stat-unmodal').append('<a id="cancel-stat-options" class="button cancel long close-options">Hide Description</a>');
				$('#cancel-stat-options').off().tap(function(){
					$('#stat-unmodal').slideUp();
				});
			});
		}
	} else {
		//basic description
		if ($(event.currentTarget).hasClass('body-row')) {
			$(event.currentTarget).children('.wound-dots').after('<div class="unmodal" id="stat-unmodal" style="display:none;"></div>').addClass('description-open');
		} else {
			$(event.currentTarget).after('<div class="unmodal '+event.currentTarget.classList+' row" id="stat-unmodal" style="display:none;"></div>').addClass('description-open');
		}
		$('#stat-unmodal').empty().append(taxonomy.status[this.id.split('-')[0]]);
	}
	
	//etymology
	if (event.currentTarget.id === 'woundmax') {
		if (character.styles.classes.Stamina.spec1[1] > 0) {
			$('#stat-unmodal').prepend('<p class="etymology">Stamina: '+styledStm+' + Toughness: '+$('#Toughness').first().find('.point').not('.empty').length+' + <em>Resilience</em> Style: '+character.styles.classes.Stamina.spec1[1]+' + 3 = '+$('#woundmax .detail').text()+'</p>');	
		} else {
			$('#stat-unmodal').prepend('<p class="etymology">Stamina: '+styledStm+' + Toughness: '+$('#Toughness').first().find('.point').not('.empty').length+' + 3 = '+$('#woundmax .detail').text()+'</p>');
		}
	} else if (event.currentTarget.id === 'endurance') {
		if (character.styles.classes.Stamina.spec2[1] > 0) {
			$('#stat-unmodal').prepend('<p class="etymology">Stamina: '+styledStm+' + Even Athletics Points: '+athEndurance+' + <em>Endurance</em> Style: '+(character.styles.classes.Stamina.spec2[1]*3)+' + 3 = '+$('#endurance .detail .max-regen').text()+'</p>');
		} else { 
			$('#stat-unmodal').prepend('<p class="etymology">Stamina: '+styledStm+' + Even Athletics Points: '+athEndurance+' + 3 = '+$('#endurance .detail .max-regen').text()+'</p>');
		}
	}
	
	//show
	$('#stat-unmodal').removeClass('body-row, regen, wound-max');
	$('#stat-unmodal').slideDown();
	$('#stat-unmodal').append('<a id="cancel-stat-options" class="button cancel long close-options">Hide Description</a>');
	$('#cancel-stat-options').off().tap(function(){
		$('#stat-unmodal').slideUp();
	});
}

function monHold(event) {
	$('#modal').empty().append(taxonomy.status[this.id.split('-')[0]]);
	if (event.currentTarget.id === 'speed-mon') {
		var speedTotalShown = styledAgi + athSpeed + (character.styles.classes.Agility.spec1[1]*3) + 3;
		if (character.styles.classes.Agility.spec1[1] > 0) {
			$('#modal h3').after('<p class="etymology">Agility: '+styledAgi+' + Odd Athletics Points: '+athSpeed+' + <em>Super Speed</em> Style: '+(character.styles.classes.Agility.spec1[1]*3)+'+ 3 = '+speedTotalShown+'</p>');
		} else {
			$('#modal h3').after('<p class="etymology">Agility: '+styledAgi+' + Odd Athletics Points: '+athSpeed+' + 3 = '+speedTotalShown+'</p>');
		}
		if (speedTotalShown < 3) {
			$('#modal .etymology').after('<p>Your speed total is below the minimum value, because of this it has been set to the minimum of 3.</p>')
		}
	} else if (event.currentTarget.id === 'crisis-mon') {
		if (character.styles.classes.Willpower.spec1[1] > 0) {
			//character has Entanglement+
			if (character.styles.classes.Charisma.spec1[1] > 1) {
				//character has Analyze Cascade 2
				$('#modal h3').after('<p class="etymology">Charisma: '+styledCha+' + Guts: '+$('#Guts').first().find('.point').not('.empty').length+' + <em>Entanglement</em> Style: '+(character.styles.classes.Willpower.spec1[1]*3)+'+ 3 = '+$('#crisis-mon .total').text()+'</p>');			
			} else {
				$('#modal h3').after('<p class="etymology">Willpower: '+styledWil+' + Guts: '+$('#Guts').first().find('.point').not('.empty').length+' + <em>Entanglement</em> Style: '+(character.styles.classes.Willpower.spec1[1]*3)+'+ 3 = '+$('#crisis-mon .total').text()+'</p>');
			}			
		} else {
			if (character.styles.classes.Charisma.spec1[1] > 1) {
				//character has Analyze Cascade 2
				$('#modal h3').after('<p class="etymology">Charisma: '+styledCha+' + Guts: '+$('#Guts').first().find('.point').not('.empty').length+' + 3 = '+$('#crisis-mon .total').text()+'</p>');
			} else {
				$('#modal h3').after('<p class="etymology">Willpower: '+styledWil+' + Guts: '+$('#Guts').first().find('.point').not('.empty').length+' + 3 = '+$('#crisis-mon .total').text()+'</p>');
			}
		}
	}
	$('#modal, #modal-shade').show();
}

function editArmorHold(event) {

	//scroll calculation
	if ($('#stat-unmodal').is(':visible') && $('#stat-unmodal').position().top < $(event.target).position().top) {
		var height = $(window).scrollTop() - $('#stat-unmodal').height();
		$('#stat-unmodal').remove();
		window.scrollTo(0, height);
		$('html, body').animate({ scrollTop: $(event.target).offset().top - 175}, 300);
	} else {
		$('html, body').animate({ scrollTop: $(event.target).offset().top - 175}, 300);
		$('#stat-unmodal').remove();
	}
	if (!$('#monitor').hasClass('hidden')) {
		toggleMonitor();
	}

	$('.body-row, #status .row').removeClass('description-open');
	$(event.currentTarget).append('<div class="unmodal" id="stat-unmodal" style="display:none;"></div>').addClass('description-open');
	if ($(event.currentTarget).hasClass('edit-armor-title-row')) {
		$('#stat-unmodal').empty().append('<p>Enter a name or short description for this garment or armor set.</p>');
	} else if ($(event.currentTarget).hasClass('edit-armor-value-row')) {
		$('#stat-unmodal').empty().append('<p>Each point of protection deducts a point of incoming damage when this location is hit.</p><p>High protection values may also impose a penalty due to their bulk.</p>');
	} else {
		$('#stat-unmodal').empty().append('<img src="images/spin-large.gif">');
		if ($(event.currentTarget).hasClass('primary-function')) {
			$('#stat-unmodal').load('rulebook/equipment-chapter.html .artifact-garment-primary-desc');
		} else if ($(event.currentTarget).hasClass('secondary1')) {
			$('#stat-unmodal').load('rulebook/equipment-chapter.html #garment-augment', function() {$('#stat-unmodal').remove('h4');});
		} else if ($(event.currentTarget).hasClass('secondary2')) {
			$('#stat-unmodal').load('rulebook/equipment-chapter.html #garment-harden', function() {$('#stat-unmodal').remove('h4');});
		} else if ($(event.currentTarget).hasClass('secondary3')) {
			$('#stat-unmodal').load('rulebook/equipment-chapter.html #garment-store', function() {$('#stat-unmodal').remove('h4');});
		}
	}
	$('#stat-unmodal').append('<a id="cancel-stat-options" class="button cancel long close-options">Hide Description</a>');
	$('#cancel-stat-options').off().tap(function(){
		$('#stat-unmodal').slideUp();
	});
	$('#stat-unmodal').slideDown();
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
	} else if ($(event.target).hasClass('arcane')) {
		//arcane style row
		descriptionId = '#'+event.target.id;
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

function castHold(event) {
	
	//scroll calculation
	if ($('#tech-unmodal').is(':visible') && $('#tech-unmodal').position().top < $(event.target).position().top) {
		var height = $(window).scrollTop() - $('#tech-unmodal').height();
		$('#tech-unmodal').remove();
		window.scrollTo(0, height);
		$('html, body').animate({ scrollTop: $(event.target).offset().top - 160}, 300);
	} else {
		$('html, body').animate({ scrollTop: $(event.target).offset().top - 160}, 300);
		$('#tech-unmodal').remove();
	}
	if (!$('#monitor').hasClass('hidden')) {
		toggleMonitor();
	}
	
	$('#artifacts-view .description-open').removeClass('description-open');
	$(event.currentTarget).append('<div class="unmodal" id="tech-unmodal" style="display:none;"></div>').addClass('description-open');
	if ($(event.currentTarget).parents('#cast-unmodal').length > 0) {
		$('#tech-unmodal').empty().append('<img src="images/spin-large.gif">');
		$('#tech-unmodal').load('rulebook/equipment-chapter.html #'+event.currentTarget.id.split('edit-')[1], function(){
			$('#tech-unmodal h4').remove();
			$('#tech-unmodal').append('<a id="cancel-tech-options" class="button cancel long close-options">Hide Options</a>');
				$('#cancel-tech-options').off().tap(function(){
					$('#tech-unmodal').slideUp();
					$('html, body').animate({ scrollTop: $(event.currentTarget).offset().top - 160}, 300);
				});
		});
	} else {
		$('#tech-unmodal').empty().append('<img src="images/spin-large.gif">');
		if ($(event.currentTarget).hasClass('detail-row')) {
			$('#tech-unmodal').load('rulebook/equipment-chapter.html #'+event.currentTarget.id+'-desc', function() {
				$('#tech-unmodal h4').remove();
				$('#tech-unmodal').append('<a id="cancel-tech-options" class="button cancel long close-options">Hide Options</a>');
				$('#cancel-tech-options').off().tap(function(){
					$('#tech-unmodal').slideUp();
					$('html, body').animate({ scrollTop: $(event.currentTarget).offset().top - 160}, 300);
				});
			});
		} else if ($(event.currentTarget).hasClass('row-label')) {
			$('#tech-unmodal').load('rulebook/equipment-chapter.html #'+$(event.currentTarget).parent().attr('id')+'-desc', function() {
				$('#tech-unmodal h4').remove();
				$('#tech-unmodal').append('<a id="cancel-tech-options" class="button cancel long close-options">Hide Options</a>');
				$('#cancel-tech-options').off().tap(function(){
					$('#tech-unmodal').slideUp();
					$('html, body').animate({ scrollTop: $(event.currentTarget).offset().top - 160}, 300);
				});
			});
		}
	}
	$('#tech-unmodal').slideDown();
}

function executeAction (event) {
	var attack = $('#attacks #'+$(event.currentTarget).parent().attr('id').split('-actions-list')[0]),
		manualDice = 0,
		manualBonus = 0,
		speedCost = 0,
		speedRest = 0,
		entCost = 0,
		currentAmmo = 0,
		newAmmo = 0,
		ammoCost = 0,
		misc = [],
		resultsTitle;
		
	$(event.currentTarget).children('.detail-row').remove();
	$(event.currentTarget).find('.action-unmodal').remove();
	resultsTitle = $(event.currentTarget).text();
	if ($(event.currentTarget).text() !== 'Power Attack' && $(event.currentTarget).text() !== 'Use Lower Rank' && $(event.currentTarget).text() !== 'Extend Damage') {
		$('#attacks .attack-row').not('#attk-unmodal').slideDown();
		//$('#attk-unmodal').slideUp();
	}
	$('.action-roll-result').remove();
	
	//check what the selected action is and roll it
	if ($(event.currentTarget).text() === 'Disarm' || $(event.currentTarget).text() === 'Trip') {
		//handle trip and disarm actions
		speedCost = 6;
		manualDice = parseInt($('#skill-view #attributes #Finesse .attribute-value').text()) - parseInt($('#skill-view #attributes #Finesse .technique-level').text());
		manualBonus = parseInt($('#skill-view #attributes #Finesse .technique-level').text());
		if ($(event.currentTarget).parent().attr('id').split('-actions-list')[0] === 'unarmed' || character.attacks[$(event.currentTarget).parent().attr('id').split('-actions-list')[0]].skill === 'Unarmed') {
			manualBonus = manualBonus + (6 - $('#combat-view #combat-skills #Unarmed .point.empty').length);
		} else {
			manualBonus = manualBonus + (6 - $('#combat-view #combat-skills #Melee .point.empty').length);
		}
		if ($(event.currentTarget).text() === 'Trip') {
			if (character.attacks[$(event.currentTarget).parent().attr('id').split('-actions-list')[0]] && character.attacks[$(event.currentTarget).parent().attr('id').split('-actions-list')[0]].keywords && character.attacks[$(event.currentTarget).parent().attr('id').split('-actions-list')[0]].keywords.indexOf('Trip') !== -1) {
				manualDice = parseInt($('#attacks #'+$(event.currentTarget).parent().attr('id').split('-actions-list')[0]+' .attack-roll .dice').text());
				manualBonus = parseInt($('#attacks #'+$(event.currentTarget).parent().attr('id').split('-actions-list')[0]+' .attack-roll .bonus').text());
				roll('manual', manualDice, manualBonus, event);
				$('#results').append('<p class="action-roll-result">Compare this result to the target\'s <strong>Agility + Athletics</strong> roll results.</p>');
			} else {
				roll('manual', manualDice, manualBonus, event);
				$('#results').append('<p class="action-roll-result">Compare this result to the sum of target\'s <strong>Agility + Athletics</strong> scores.</p>');
			}
		} else {
			roll('manual', manualDice, manualBonus, event);
			$('#results').append('<p class="action-roll-result">Compare this result to the sum of target\'s <strong>Strength + Melee</strong> scores.</p>');
		}
	} else if ($(event.currentTarget).text() === 'Point Blank Shot') {
		//handle point blank shot action
		speedCost = 4;
		manualDice = parseInt($('#skill-view #attributes #Finesse .attribute-value').text()) - parseInt($('#skill-view #attributes #Finesse .technique-level').text());
		manualBonus = parseInt($('#skill-view #attributes #Finesse .technique-level').text());
		manualBonus = manualBonus + (6 - $('#combat-view #combat-skills #Melee .point.empty').length);
		if (!$(attack).find('.ammo-row').hasClass('infinite-ammo')) {
			ammoCost = 1;
			if (character.attacks[$(event.currentTarget).parent().attr('id').split('-actions-list')[0]].keywords && character.attacks[$(event.currentTarget).parent().attr('id').split('-actions-list')[0]].keywords.indexOf('Automatic') !== -1) {
				ammoCost = 3;
			}
		}
		if (character.attacks[$(event.currentTarget).parent().attr('id').split('-actions-list')[0]].keywords && character.attacks[$(event.currentTarget).parent().attr('id').split('-actions-list')[0]].keywords.indexOf('Sawn') !== -1) {
			//is sawn, check which roll to use and change roll if needed
			misc.push(parseInt($(attack).children('.attack-roll').children('.dice').text()), parseInt($(attack).children('.attack-roll').children('.bonus').text()));
			if ((misc[0]/2+misc[1]) > (manualDice/2+manualBonus)) {
				//the firearm roll is better, use it
				manualDice = misc[0];
				manualBonus = misc[1];
			}
		}
		misc = parseInt($('#attacks #'+$(event.currentTarget).parent().attr('id').split('-actions-list')[0]+' .damage-row .dice').text()) + parseInt($('#attacks #'+$(event.currentTarget).parent().attr('id').split('-actions-list')[0]+' .damage-row .bonus').text());
		roll('manual', manualDice, manualBonus, event);
		$('.dam-total-result').append('<span class="total">'+ misc +'</span> total damage');
		locationRoll(0, misc, event);
	} else if ($(event.currentTarget).text() === 'Stealth Attack') {
		//handle stealth attacks
		speedReset = parseInt($(attack).children('.speed-row').children('.detail').text());
		$(attack).children('.speed-row').children('.detail').text((speedReset + 2));
		if (!$(attack).find('.ammo-row').hasClass('infinite-ammo')) {
			if (!$(attack).attr('id') === 'unarmed' && character.attacks[attack.attr('id')].keywords && character.attacks[attack.attr('id')].keywords.indexOf('Automatic') !== -1) {
				ammoCost = 3;
			} else if (!$(attack).attr('id') === 'unarmed' && (character.attacks[attack.attr('id')].skill === 'Firearms' || character.attacks[attack.attr('id')].skill === 'Ballistics')) {
				ammoCost = 1;
			}
		}
		if (auxStyleList.Stealth_percent_20Attacks && auxStyleList.Stealth_percent_20Attacks === 1) {
			misc = [2,1];
		} else if (auxStyleList.Stealth_percent_20Attacks && auxStyleList.Stealth_percent_20Attacks === 2) {
			misc = [2,2];
		} else if (auxStyleList.Stealth_percent_20Attacks && auxStyleList.Stealth_percent_20Attacks === 3) {
			misc = [3,3];
		} else {
			misc = [1,1];
		}
		$(attack).children('.damage-row').children('.detail').children('.dice').text(parseInt($(attack).children('.damage-row').children('.detail').children('.dice').text()) + misc[0]);
		$(attack).children('.damage-row').children('.detail').children('.bonus').text(parseInt($(attack).children('.damage-row').children('.detail').children('.bonus').text()) + misc[1]);
		roll(attack, false, false, event);
		$(attack).children('.damage-row').children('.detail').children('.dice').text(parseInt($(attack).children('.damage-row').children('.detail').children('.dice').text()) - misc[0]);
		$(attack).children('.damage-row').children('.detail').children('.bonus').text(parseInt($(attack).children('.damage-row').children('.detail').children('.bonus').text()) - misc[1]);
		$(attack).children('.speed-row').children('.detail').text(speedReset);
	} else if  ($(event.currentTarget).text() === 'Auto Fire') {
		//handle auto fire
		speedReset = parseInt($(attack).children('.speed-row').children('.detail').text());
		$(attack).children('.speed-row').children('.detail').text('8');
		if (!$(attack).find('.ammo-row').hasClass('infinite-ammo')) {
			ammoCost = character.attacks[attack.attr('id')].ammoCurrent;
		}
		$(attack).children('.damage-row').children('.detail').children('.dice').text(parseInt($(attack).children('.damage-row').children('.detail').children('.dice').text()) + 9);
		$(attack).children('.attack-roll').children('.dice').text(parseInt($(attack).children('.attack-roll').children('.dice').text()) + 9);
		roll(attack, false, false, event);
		$(attack).children('.damage-row').children('.detail').children('.dice').text(parseInt($(attack).children('.damage-row').children('.detail').children('.dice').text()) - 9);
		$(attack).children('.attack-roll').children('.dice').text(parseInt($(attack).children('.attack-roll').children('.dice').text()) - 9);
		$(attack).children('.speed-row').children('.detail').text(speedReset);
		if ($('#results .location-hit strong').text() === 'Upper Body') {
			$('#results').append('<p class="action-roll-result">Deal <span class="critical">'+Math.floor(parseInt($('#results .dam-total-result .total').text())/2)+'</span> damage to <strong>Upper Body</strong> and <strong>Lower Body</strong>.</p>');
		} else if ($('#results .location-hit strong').text() === 'Legs') {
			$('#results').append('<p class="action-roll-result">Deal <span class="critical">'+Math.floor(parseInt($('#results .dam-total-result .total').text())/2)+'</span> damage to <strong>Legs</strong> and <strong>Off Arm</strong>.</p>');
		} else {
			$('#results').append('<p class="action-roll-result">Deal <span class="critical">'+Math.floor(parseInt($('#results .dam-total-result .total').text())/3)+'</span> damage to <strong>'+$('#results .location-hit strong').text()+' and both adjacent locations</strong>.</p>');
		}
		$('#results .location-hit strong').text(' for');
	} else if  ($(event.currentTarget).text() === 'Spray') {
		misc = [0,0,0];
		speedReset = parseInt($(attack).children('.speed-row').children('.detail').text());
		$(attack).children('.speed-row').children('.detail').text('8');
		if (!$(attack).find('.ammo-row').hasClass('infinite-ammo')) {
			ammoCost = character.attacks[attack.attr('id')].ammoCurrent;
		}
		$(attack).children('.attack-roll').children('.dice').text(parseInt($(attack).children('.attack-roll').children('.dice').text()) + 3);
		roll(attack, false, false, event);
		$(attack).children('.attack-roll').children('.dice').text(parseInt($(attack).children('.attack-roll').children('.dice').text()) - 3);
		$(attack).children('.speed-row').children('.detail').text(speedReset);
		$('#results .dam-roll-totals .critical, #results .location-hit').empty();
		$('#results').append('<span class="action-roll-result spray-results"></span>');
		while (misc[0] < 6) {
			//misc is used here as [counter, location hit, critical level]
			misc[0]++;
			misc[1] = Math.floor(Math.random()* 6)+1;
			if (misc[1] === 1) {
				misc[1] = "Legs";
			} else if (misc[1] === 2) {
				misc[1] = "Off Arm";
			} else if (misc[1] === 3) {
				misc[1] = "Main Arm";
			} else if (misc[1] === 4) {
				misc[1] = "Lower Body";
			} else if (misc[1] === 5) {
				misc[1] = "Upper Body";
			} else if (misc[1] === 6) {
				misc[0]--; //backtrack counter
				misc[2]++; //crit up
			}
			if (misc[1] !== 6) {
				$('#results .action-roll-result').append('<p>Target '+misc[0]+' hit on <strong>'+misc[1]+'</strong>.</p>');
				if (misc[2] > 0) {
					$('#results .action-roll-result p').last().append('<br><span class="critical"> +'+misc[2]+' Critical!</span>');
					misc[2] = 0;
				}
			}
		}
	} else if  ($(event.currentTarget).text() === 'Disadvantaged Attack') {
		//handle disadvantaged attack
		misc[0] = parseInt($(attack).children('.attack-roll').children('.dice').text());
		misc[1] =  parseInt($(attack).children('.attack-roll').children('.bonus').text());
		$(attack).children('.attack-roll').children('.dice').text((misc[0] + misc[1]));
		$(attack).children('.attack-roll').children('.bonus').text('0');
		roll(attack, false, false, event);
		$(attack).children('.attack-roll').children('.dice').text(misc[0]);
		$(attack).children('.attack-roll').children('.bonus').text(misc[1]);
	} else if  ($(event.currentTarget).text() === 'Whirlwind Strike') {
		//handle whirlwind
		roll(attack, false, false, event);
		$('#results').append('<p class="action-roll-result">Hit all selected targets with this attack roll. Manually roll other locations hit as needed.</p>');
	} else if  ($(event.currentTarget).text() === 'Aim') {
		//handle aim actions
		speedCost = 2;
		manualDice = parseInt($('#skill-view #attributes #Perception .attribute-value').text()) - parseInt($('#skill-view #attributes #Perception .technique-level').text());
		manualBonus = parseInt($('#skill-view #attributes #Perception .technique-level').text());
		manualBonus = manualBonus + (6 - $('#combat-view #combat-skills #Ballistics .point.empty').length);
		roll('manual-aim', manualDice, manualBonus, event);
		$('#results').append('<p class="action-roll-result">This result has been added to your next attack roll with this weapon.<br><br>Any action other than aiming or firing this weapon will remove this bonus.</p>');
		misc = parseInt($('#results .total-result .total').text());
		if ($(attack).children('#aim-bonus').length === 0) {
			$('#aim-bonus').remove();
			$(attack).addClass('aimed');
			$(attack).children('.damage-row').before('<span id="aim-bonus" class="detail-row color Perception-tint aim-row"><span class="crosshair"></span>Aim +<span class="detail">'+misc+'</span><span class="hidden aim-counter" style="display:none!important;">1</span></span>');
		} else {
			misc = misc + parseInt($(attack).children('#aim-bonus').children('.detail').text());
			$(attack).children('#aim-bonus').children('.detail').text(misc);
			$(attack).children('#aim-bonus').children('.aim-counter').text((parseInt($(attack).children('#aim-bonus').children('.aim-counter').text()) + 1));
		}
	} else if ($(event.currentTarget).text() === 'Aim: Remove Bonus') {
		$('#aim-bonus').remove();
		$('.aimed').removeClass('aimed');
	} else if ($(event.currentTarget).text() === 'Fire Both Barrels') {
		//special action for attacks with Double keyword
		misc[0] = parseInt($(attack).children('.damage-row').find('.dice').text());
		misc[1] =  parseInt($(attack).children('.damage-row').find('.bonus').text());
		speedReset = parseInt($(attack).children('.speed-row').children('.detail').text());
		if (!$(attack).find('.ammo-row').hasClass('infinite-ammo')) {
			if (character.attacks[attack.attr('id')].keywords && character.attacks[attack.attr('id')].keywords.indexOf('Automatic') !== -1) {
				ammoCost = 3;
			} else {
				ammoCost = 1;
			}
		}
		$(attack).children('.speed-row').children('.detail').text((speedReset + 1));
		$(attack).children('.damage-row').find('.dice').text((misc[0] + misc[0]));
		$(attack).children('.damage-row').find('.bonus').text((misc[1] + misc[1]));
		roll(attack, false, false, event);
		$(attack).children('.damage-row').find('.dice').text(misc[0]);
		$(attack).children('.damage-row').find('.bonus').text(misc[1]);
		$(attack).children('.speed-row').children('.detail').text(speedReset);
	} else if ($(event.currentTarget).text() === 'Power Attack') {
		//execute power attack
		misc[0] = parseInt($(attack).children('.attack-roll').find('.dice').text());  //attack dice
		misc[1] = parseInt($(attack).children('.attack-roll').find('.bonus').text()); //attack bonus
		misc[2] = parseInt($(attack).children('.damage-row').find('.dice').text());   //damage dice
		misc[3] = parseInt($(attack).children('.damage-row').find('.bonus').text());  //damage bonus
		misc[4] = parseInt($(attack).children('.speed-row').find('.detail').text());  //speed cost

		$('#attk-unmodal').empty().append('<h3>Power Attack with '+$(attack).find('.attack-name').text()+'</h3><p>Choose power attack potency level.</p><div class="power-attack-list"></div>');
		for (var i = 0; i < misc[0]; i++) {
			if (character.styles.classes.Strength.spec2[1] > 1) {
				$('#attk-unmodal .power-attack-list').append('<a id="power-attack-level-'+(i+1)+'" class="row color STR-primary power-attack-level">To Hit: '+(misc[0]-(i+1))+'+'+misc[1]+' / Damage: '+misc[2]+'+'+(misc[3]+(i+1))+'</a>');
			} else {
				$('#attk-unmodal .power-attack-list').append('<a id="power-attack-level-'+(i+1)+'" class="row color STR-primary power-attack-level">To Hit: '+(misc[0]-(i+1))+'+'+misc[1]+' / Damage: '+(misc[2]+(i+1))+'+'+misc[3]+'</a>');
			}
		}
		$('#attk-unmodal').append('<a id="cancel-action-options" class="button cancel long">Cancel</a>');
		$('#cancel-action-options').off().tap(function(){$('#attk-unmodal').slideUp();$('.attack-row').not(('#skill-unmodal, #attk-unmodal, #dattack-unmodal, .unmodal')).slideDown();});
		$('html, body').animate({
	    	scrollTop: $("#attk-unmodal").offset().top - 70
		}, 300);
		$('#attk-unmodal .power-attack-level').off().click(function() {			
			misc[5] = parseInt(this.id.split('power-attack-level-')[1]);
			$('#attacks .attack-row').not('#attk-unmodal').slideDown();
			$(attack).children('.speed-row').children('.detail').text((misc[4]+1));
			$(attack).children('.attack-roll').find('.dice').text(misc[0]-misc[5]);
			if (character.styles.classes.Strength.spec2[1] > 1) {
				$(attack).children('.damage-row').find('.bonus').text((misc[3]+misc[5]));
			} else {
				$(attack).children('.damage-row').find('.dice').text((misc[2]+misc[5]));
			}
			roll(attack, false, false, event);
			$(attack).children('.speed-row').children('.detail').text(misc[4]);
			$(attack).children('.attack-roll').find('.dice').text(misc[0]);
			$(attack).children('.damage-row').find('.dice').text(misc[2]);
			$(attack).children('.damage-row').find('.bonus').text(misc[3]);
		});
	} else if ($(event.currentTarget).text() === 'Focus Strike') {
		misc[0] = auxStyleList.Focus_percent_20Strike; //ranks in focus strike style
		misc[1] = parseInt($(attack).children('.damage-row').find('.dice').text()); //damage dice
		misc[2] = parseInt($(attack).children('.damage-row').find('.bonus').text()); //damage bonus
		if ($(attack).hasClass('STR-shade')) {
			$(attack).children('.damage-row').find('.bonus').text(misc[2]+misc[0]);
		} else {
			$(attack).children('.damage-row').find('.dice').text(misc[1]+misc[0]);
		}
		roll(attack, false, false, event);
		if (parseInt($('#crisis-mon .labels .current').text()) <= 0) {
			$('#results .no-speed').append('<div class="no-entanglement">Not enough Entanglement!</div>');
		} else {
			$('.no-entanglement').remove();
			$('#crisis-mon .labels .current').text(parseInt($('#crisis-mon .labels .current').text()) - 1);
			updateMonitor('manual');
		}
		$(attack).children('.damage-row').find('.dice').text(misc[1]);
		$(attack).children('.damage-row').find('.bonus').text(misc[2]);
	} else if ($(event.currentTarget).text() === 'Use Lower Rank') {
		//execute reduced evocation
		misc[0] = parseInt($(attack).children('.damage-row').find('.dice').text());   //damage dice
		misc[1] = parseInt($(attack).children('.damage-row').find('.bonus').text());  //damage bonus

		$('#attk-unmodal').empty().append('<h3>Reduced Evocation</h3><p>You can use evocation more discretely by reducing the damage output to lower ranks. Normally your Evocation attacks deal '+misc[0]+' + '+misc[1]+' damage, choose which rank to use instead below.</p><div class="reduced-evocation-list"></div>');
		for (var i = 0; i < (character.styles.arcane.evocation - 1); i++) {
			if (i < 3) {
				$('#attk-unmodal .reduced-evocation-list').append('<a id="evocation-level-'+(i+1)+'" class="row color WIL-primary evocation-level">Damage: <span class="dice">'+(i+1)+'</span> + <span class="bonus">0</span></a>');
			} else if (i < 6) {
				$('#attk-unmodal .reduced-evocation-list').append('<a id="evocation-level-'+(i+1)+'" class="row color WIL-primary evocation-level">Damage: <span class="dice">3</span> + <span class="bonus">'+(i-2)+'</span></a>');
			} else if (i === 6) {
				//do nothing, this rank has the same damage as the previous rank
			} else if (i === 7) {
				$('#attk-unmodal .reduced-evocation-list').append('<a id="evocation-level-'+(i+1)+'" class="row color WIL-primary evocation-level">Damage: <span class="dice">'+(styledWil - techWil)+'</span> + <span class="bonus">'+(3 + techWil)+'</span></a>');
			}
		}
		$('#attk-unmodal').append('<a id="cancel-action-options" class="button cancel long">Cancel</a>');
		$('#cancel-action-options').off().tap(function(){$('#attk-unmodal').slideUp();$('.attack-row').not(('#skill-unmodal, #attk-unmodal, #dattack-unmodal, .unmodal')).slideDown();});
		$('html, body').animate({
	    	scrollTop: $("#attk-unmodal").offset().top - 70
		}, 300);
		$('#attk-unmodal .evocation-level').off().click(function() {			
			misc[2] = parseInt($(this).find('.dice').text());
			misc[3] = parseInt($(this).find('.bonus').text());
			$('#modal, #modal-shade').hide();
			$(attack).children('.damage-row').find('.dice').text(misc[2]);
			$(attack).children('.damage-row').find('.bonus').text(misc[3]);
			attack.id = 'evocation-attack';
			roll(attack, false, false, event);
			$(attack).children('.damage-row').find('.dice').text(misc[0]);
			$(attack).children('.damage-row').find('.bonus').text(misc[1]);
			$('#attacks .attack-row').not('#attk-unmodal').slideDown();
		});
	} else if ($(event.currentTarget).text() === 'Extend Damage') {
		//execute extended evocation
		misc[0] = parseInt($(attack).children('.damage-row').find('.dice').text());   //damage dice
		misc[1] = parseInt($(attack).children('.damage-row').find('.bonus').text());  //damage bonus

		$('#attk-unmodal').empty().append('<h3>Extend Evocation Damage</h3><p>Normally your Evocation attacks deal '+misc[0]+' + '+misc[1]+' damage, but you can use <em>Evocation Extensibility</em> to increase it by spending Entanglement. Choose the amount of Entanglement you want to spend on increasing damage below. if you also wish to spend Entanglement to increase the range or radius, deduct it manually.</p><div class="extend-evocation-list"></div>');
		for (var i = 0; i < character.status.currentEntanglement && i < (styledWil + techWil); i++) {
			$('#attk-unmodal .extend-evocation-list').append('<a id="evocation-level-'+(i+1)+'" class="row color WIL-primary evocation-level">+'+(i+1)+' Entanglement / <span class="dice">'+(misc[0]+((i+1)*auxStyleList.Evocation_percent_20Extensibility))+'</span> + <span class="bonus">'+(misc[1]+((i+1)*auxStyleList.Evocation_percent_20Extensibility))+'</span> Damage</a>');
		}
		$('#attk-unmodal').append('<a id="cancel-action-options" class="button cancel long">Cancel</a>');
		$('#cancel-action-options').off().tap(function(){$('#attk-unmodal').slideUp();$('.attack-row').not(('#skill-unmodal, #attk-unmodal, #dattack-unmodal, .unmodal')).slideDown();});
		$('html, body').animate({
	    	scrollTop: $("#attk-unmodal").offset().top - 70
		}, 300);
		$('#attk-unmodal .evocation-level').off().click(function() {			
			misc[2] = parseInt($(this).find('.dice').text());
			misc[3] = parseInt($(this).find('.bonus').text());
			entCost = parseInt($(this).attr('id').split('evocation-level-')[1]);
			$('#modal, #modal-shade').hide();
			$(attack).children('.damage-row').find('.dice').text(misc[2]);
			$(attack).children('.damage-row').find('.bonus').text(misc[3]);
			attack.id = 'evocation-attack';
			$('#crisis-mon .current').text(parseInt($('#crisis-mon .current').text()) - entCost);
			roll(attack, false, false, event);
			$(attack).children('.damage-row').find('.dice').text(misc[0]);
			$(attack).children('.damage-row').find('.bonus').text(misc[1]);
			$('#attacks .attack-row').not('#attk-unmodal').slideDown();
		});
	}
	
	//results title change
	$('#results h4').remove();
	$('#results').prepend('<h4>'+resultsTitle+'</h4>');
	
	//handle ammo if needed
	if (ammoCost > 0 && $(attack).children('.ammo-row').length === 1) {
		currentAmmo = $(attack).children('.ammo-row').children('.detail').text().split(' / ');
		if (parseInt(currentAmmo[0]) === 0) {
			currentAmmo = 'empty';
		} else {
			if (ammoCost > 3) {
				if (character.attacks[$(attack).attr('id')].keywords.indexOf('Extended Magazine') !== -1) {
					newAmmo = Math.floor(currentAmmo[0]/2)+' / '+currentAmmo[1];
					character.attacks[$(attack).attr('id')].ammoCurrent = Math.floor(currentAmmo[0]/2);
					$(attack).children('.ammo-meter').children('.ammo-pip.full').addClass('empty').removeClass('full');
					$(attack).children('.ammo-meter').children('.ammo-pip').slice(0,character.attacks[$(attack).attr('id')].ammoCurrent).addClass('full').removeClass('empty');
				} else {
					newAmmo = '0 / '+currentAmmo[1];
					character.attacks[$(attack).attr('id')].ammoCurrent = 0;
					$(attack).children('.ammo-meter').children('.ammo-pip.full').addClass('empty').removeClass('full');
				}
			} else if (ammoCost === 3) {
				//it's automatic, deduct burst
				if (parseInt(currentAmmo[0]) < 3) {
					newAmmo = '0 / '+currentAmmo[1];
				} else {
					newAmmo = (parseInt(currentAmmo[0]) - 3)+' / '+currentAmmo[1];
				}
				character.attacks[$(attack).attr('id')].ammoCurrent = parseInt(currentAmmo[0]) - 3;
				if (character.attacks[$(attack).attr('id')].ammoCurrent < 0) {character.attacks[$(attack).attr('id')].ammoCurrent = 0}
				$(attack).children('.ammo-meter').children('.ammo-pip.full').last().addClass('empty').removeClass('full');
				$(attack).children('.ammo-meter').children('.ammo-pip.full').last().addClass('empty').removeClass('full');
			} else if ($(attack).children('.attack-keyword-list').children('#bow-desc-taphold').length === 1) {
				//it's a bow, only show current column
				newAmmo = (parseInt(currentAmmo[0]) - 1);
				character.attacks[$(attack).attr('id')].ammoCurrent = parseInt(currentAmmo[0]) - 1;
			} else {
				//it's regular, deduct one
				newAmmo = (parseInt(currentAmmo[0]) - 1)+' / '+currentAmmo[1];
				character.attacks[$(attack).attr('id')].ammoCurrent = parseInt(currentAmmo[0]) - 1;
			}
			$(attack).find('.ammo-row').first().children('.detail').text(newAmmo);
			$(attack).children('.ammo-meter').children('.ammo-pip.full').last().addClass('empty').removeClass('full');
			$('#double-attacks #'+$(attack).attr('id')+'-sub-row .ammo-row').empty().append($(attack).children('.ammo-row').html());
		}
	}
	
	//deal with speed/ent costs if there are any and the automatic attack roll didn't handle them
	if (speedCost) {
		if (speedCost > parseInt($('#speed-mon .current').text())) {
			$('#results .no-speed').text('Not enough speed!');
		}
		$('#speed-mon .current').text(parseInt($('#speed-mon .current').text()) - speedCost);
		$('#speed-mon .notice').text('-'+ speedCost).finish().fadeIn(200).delay(1000).fadeOut(1000);
		updateMonitor('manual');
	}
}