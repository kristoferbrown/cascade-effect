var counter,
	settings,
	characters,
	character,
	timer,
	sheetTimer,
	slideTimer,
	modalTimer,
	styledSkills = {'skills': {}, 'comSkills': {}},
	auxStyleList = {},
	armorAugment = ['', 0],
	styledStr = 0,
	styledFin = 0,
	styledPer = 0,
	styledStm = 0,
	styledAgi = 0,
	styledWit = 0,
	styledWil = 0,
	styledCha = 0,
	styledInt = 0,
	techStr = 0,
	techFin = 0,
	techPer = 0,
	techStm = 0,
	techAgi = 0,
	techWit = 0,
	techWil = 0,
	techCha = 0,
	techInt = 0,
	athSpeed = 0,
	athEndurance = 0;

$.event.special.tap.emitTapOnTaphold = false;

function rootPrep() {
	
	//hashchange to root menu
	window.location.hash = 'main-menu';

	//check settings and make necessary adjustments
	if (localStorage.settings) {
		settings = JSON.parse(localStorage.settings);
	} else {
		settings = {
			firstRun: true,
			charFirstRun: true,
			colorful: true,
			skewed: 'partial',
			tiered: true,
			iconic: true,
			skillorder: 'attribute',
			comskilllocation: 'combat-view',
			theme: 'paper'
		};
		localStorage.settings = JSON.stringify(settings);
	}
	if (settings.colorful) {$('body').addClass('colorful');}
	if (settings.skewed === 'partial') {$('body').addClass('semiskewed');$('#setting-skewed .detail').addClass('partial').removeClass('true false');} else if (settings.skewed === true) {$('body').addClass('skewed');$('#setting-skewed .detail').addClass('true').removeClass('partial false');}
	if (settings.firstRun && settings.charFirstRun) {$('#setting-first-run .detail').toggleClass('true false');}
	if (settings.colorful) {$('#setting-colorful .detail').toggleClass('true false');}
	if (settings.skewed) {$('#setting-skewed .detail').toggleClass('true false');}
	if (settings.tiered) {$('#setting-tiered .detail').toggleClass('true false');}
	if (settings.iconic) {$('body').addClass('iconic');$('#setting-iconic .detail').toggleClass('true false');}

	//skillorder audit, remove all but the first if statement after beta
	if (settings.skillorder) {
		if (settings.skillorder === 'alphabetical') {$('#setting-skillorder .detail').toggleClass('alphabetical attribute');}	
	} else if (settings.skillorder === undefined) {
		settings.skillorder = 'attribute';
		localStorage.settings = JSON.stringify(settings);	
	}
	//comskilllocation audit, remove all but the first if statement after beta
	if (settings.comskilllocation) {
		if (settings.comskilllocation === 'skill-view') {
			$('#setting-comskilllocation .detail').addClass('skill-view').removeClass('combat-view');
		} else if (settings.comskilllocation === 'both') {
			$('#setting-comskilllocation .detail').addClass('both').removeClass('combat-view');
		}
	} else if (settings.comskilllocation === undefined) {
		settings.comskilllocation = 'combat-view';
		localStorage.settings = JSON.stringify(settings);
	}	
	//theme audit, remove all but the first if statement after beta
	if (settings.theme) {
		if (settings.theme === 'paper') {$('body').addClass('paper');} else {$('#setting-theme .detail').toggleClass('paper slate');}
	} else if (settings.theme === undefined) {
		settings.theme = 'paper';
		localStorage.settings = JSON.stringify(settings);	
	}
	
	//list characters
	if (localStorage.characters) {
		characters = JSON.parse(localStorage.characters);
		$.each(characters, function(key, value) {
			if (value.meta.deleted) {
			} else {
				counter = key;
				$('#character-list').append('<a id="'+ key +'" class="row character-row"><div class="nonogram"><span class="nonogram-attribute color Strength-primary"></span><span class="nonogram-attribute color Finesse-primary"></span><span class="nonogram-attribute color Perception-primary"></span><span class="nonogram-attribute color Stamina-primary"></span><span class="nonogram-attribute color Agility-primary"></span><span class="nonogram-attribute color Wits-primary"></span><span class="nonogram-attribute color Willpower-primary"></span><span class="nonogram-attribute color Intelligence-primary"></span><span class="nonogram-attribute color Charisma-primary"></span></div><span class="character-row-name">'+ value.meta.name +'</span><span class="concept-row detail-row">'+ value.meta.concept +'</span></a>');
				for (var prop in value.styles.classes) {
					var quotient = value.coreAttributes[prop] + value.styles.classes[prop].core + value.styles.classes[prop].spec1[1] + value.styles.classes[prop].spec2[1] + value.styles.classes[prop].spec3[1] + value.styles.classes[prop].aux1.value + value.styles.classes[prop].aux2.value + value.styles.classes[prop].aux3.value,
						opacityNumber = quotient/27;
						if (prop === 'Willpower') {
							quotient = quotient + value.styles.arcane.abjuration + value.styles.arcane.evocation + value.styles.arcane.sublimation;
							opacityNumber = quotient/30;
						} else if (prop === 'Intelligence') {
							quotient = quotient + value.styles.arcane.chromodynamism + value.styles.arcane.electromagnetism + value.styles.arcane.gravitonertia;
							opacityNumber = quotient/30;
						} else if (prop === 'Charisma') {
							quotient = quotient + value.styles.arcane.pneumaplegia + value.styles.arcane.schizosomata + value.styles.arcane.telethesia;
							opacityNumber = quotient/30;
						}
						$('#character-list #'+key+' .nonogram .'+prop+'-primary').css('opacity', opacityNumber);
				}
			}
		});
	}
	$('#character-list .character-row').bind('taphold', function(event){
		charHold(event);
	});

	//rulebook prep
	$.each(rulebook, function(key, value) {
		var chapter = this;
		$('#rulebook-chapters').append('<div id="'+value.id+'" class="chapter-container"></div>');
		$('#'+value.id).append('<a id="'+value.id+'-title" class="row chapter-title">'+value.title+'</a>');
		$('#'+value.id).append('<div id="'+value.id+'-text" class="chapter-text"></div>');
		$('#'+value.id).children('.chapter-title').tap(function() {
			toggleChapter(chapter);
		});
	});
	if ($('body').hasClass('semiskewed')) {
		$('#rulebook-chapters').append('<a href="rulebook/print.html" target="_blank" class="row">Printable Rulebook<span class="detail"></span></a>');
	}
	if ($('body').hasClass('print')) {
		$('#rulebook-chapters').append('<div id="view-all"><a id="view-all-title" class="row chapter-title">View All</a><div id="all-text" class="chapter-text"></div></div>');
		$('#view-all a').tap(function() {
			viewAll();
		});
	}
	
	//show help modal if first run
	if (settings.firstRun) {
		$('#modal').empty().append('<h3>Getting Started</h3><p>PLEASE NOTE: in this testing version of the app characters are saved to your browser history. CLEARING YOUR HISTORY WILL DELETE YOUR CHARACTERS.</p><p class="tap help">Tap "Create a new character..." to get started with a new character, or just browse the rules by tapping a rulebook section.</p><p class="taphold help">Press and hold on an existing character to export or delete it.</p>');
		$('#modal').append('<a id="first-gotit" class="button long finish next">Got it</a>');
		$('#modal #first-gotit').tap(function(){
			settings.firstRun = false;
			localStorage.settings = JSON.stringify(settings);
			$('#modal, #modal-shade').fadeOut();
		});
		$('#modal, #modal-shade').show();
	}
}

function sheetPrep(characterClicked) {
	var characterToLoad;
	
	//check if first load or sheet reset and then populate character object
	if (characterClicked === 'reset') {
		console.log ('resetting character sheet');
	} else {
		characterToLoad = $(characterClicked).attr('id');
		character = characters[characterToLoad];	
	}
	
	//hashchange to character
	window.location.hash = 'character-sheet/'+character.meta.id;
	
	$('#root-menu').hide();
	$('#character-sheet').show();
	$('#title-name').text(character.meta.name);
	
	//test if character is deprecated, update character to current model if possible. delete these if statements when we go to beta
	if (!character.status.body.upper.functions) {
		alert('Womp womp, the character you loaded is deprecated and will no longer work properly. Reload the app and create a new character.');
	}
	if (character.skills.Toughness[0] === 'Strength') {
		character.skills.Toughness[0] = 'Stamina';
		character.skills.Toughness[1] = 'STM';
		character.combatSkills.Defense[0] = 'Agility'
		character.combatSkills.Defense[1] = 'AGI'
		saveCharacterObject(false);
	}
	if (character.styles.classes.Willpower.spec2[0] === 'Unlock Arcana') {
		//still has deprecated unlock arcana nodes, remove them
		character.styles.classes.Willpower.spec2[0] = 'Sustain Extropy';
		character.styles.classes.Willpower.spec3[0] = 'Cohesion Extropy';
		character.styles.classes.Charisma.spec2[0] = 'Surrogate Proxy';
		character.styles.classes.Charisma.spec3[0] = 'Delegate Proxy';
		character.styles.classes.Intelligence.spec2[0] = 'Coalesce Avatar';
		character.styles.classes.Intelligence.spec3[0] = 'Propagate Avatar';
		saveCharacterObject(false);
	}
	if (character.styles.arcane.paradigm >= 0 || character.styles.arcane.mitigate >= 0) {
		if (character.styles.arcane.paradigm >= 0) {
			character.styles.arcane.pneumaplegia = character.styles.arcane.paradigm;
			delete character.styles.arcane.paradigm;
		} else {
			character.styles.arcane.pneumaplegia = character.styles.arcane.mitigate;
			delete character.styles.arcane.mitigate;
		}
		character.styles.arcane.schizosomata = character.styles.arcane.shift;
		character.styles.arcane.telethesia = character.styles.arcane.telepathy;
		delete character.styles.arcane.shift;
		delete character.styles.arcane.telepathy;
		saveCharacterObject(false);
	}
	if (character.styles.classes.Wits.spec1[0] === 'Stealth Attacks') {
		character.styles.classes.Wits.spec1[0] = 'Priority';
	}
	
	//create styled attribute vars for later use
	styledStr = character.coreAttributes.Strength + character.styles.classes.Strength.core;
	styledFin = character.coreAttributes.Finesse + character.styles.classes.Finesse.core;
	styledPer = character.coreAttributes.Perception + character.styles.classes.Perception.core;
	styledStm = character.coreAttributes.Stamina + character.styles.classes.Stamina.core;
	styledAgi = character.coreAttributes.Agility + character.styles.classes.Agility.core;
	styledWit = character.coreAttributes.Wits + character.styles.classes.Wits.core;
	styledWil = character.coreAttributes.Willpower + character.styles.classes.Willpower.core;
	styledCha = character.coreAttributes.Charisma + character.styles.classes.Charisma.core;
	styledInt = character.coreAttributes.Intelligence + character.styles.classes.Intelligence.core;
		
	//sift through cast artifacts for att bonuses
	if (character.artifacts.cast.bio_interface) {
		if (character.artifacts.cast.bio_interface.augment > 0) {
			if (character.artifacts.cast.bio_interface.augmentTrait === 'Perception') {
				styledPer = styledPer + character.artifacts.cast.bio_interface.augment;
			} else if (character.artifacts.cast.bio_interface.augmentTrait === 'Stamina') {
				styledStm = styledStm + character.artifacts.cast.bio_interface.augment;
			} else if (character.artifacts.cast.bio_interface.augmentTrait === 'Wits') {
				styledWit = styledWit + character.artifacts.cast.bio_interface.augment;
			}
		}
		if (character.artifacts.cast.noo_interface.augment > 0) {
			if (character.artifacts.cast.noo_interface.augmentTrait === 'Willpower') {
				styledWil = styledWil + character.artifacts.cast.noo_interface.augment;
			} else if (character.artifacts.cast.noo_interface.augmentTrait === 'Intelligence') {
				styledInt = styledInt + character.artifacts.cast.noo_interface.augment;
			} else if (character.artifacts.cast.noo_interface.augmentTrait === 'Charisma') {
				styledCha = styledCha + character.artifacts.cast.noo_interface.augment;
			}
		}
	}
	
	//sift through armor for artifact att bonuses and then att penalties
	$.each(character.status.body, function(key, value){
		if (this.functions.primary > 0 && this.functions.augment > armorAugment[1]) {
			armorAugment = [this.functions.augmentTrait, this.functions.augment, key]
		}
	});
	if (armorAugment[0] === 'Strength') {
		styledStr = styledStr + armorAugment[1];
	} else if (armorAugment[0] === 'Finesse') {
		styledFin = styledFin + armorAugment[1];
	} else if (armorAugment[0] === 'Agility') {
		styledAgi = styledAgi + armorAugment[1];
	}
	if (character.status.body.upper.armor[1] === 3 && character.status.body.upper.functions.primary < 3) {styledPer--;}
	if (character.status.body.lower.armor[1] === 3 && character.status.body.lower.functions.primary < 3) {styledAgi--;}
	if (character.status.body.main.armor[1] === 3 && character.status.body.main.functions.primary < 3) {styledFin--;}
	
	//finalize att values
	if (styledStr > 9) {techStr = styledStr - 9;styledStr = 9;}
	if (styledFin > 9) {techFin = styledFin - 9;styledFin = 9;}
	if (styledPer > 9) {techPer = styledPer - 9;styledPer = 9;}
	if (styledStm > 9) {techStm = styledStm - 9;styledStm = 9;}
	if (styledAgi > 9) {techAgi = styledAgi - 9;styledAgi = 9;}
	if (styledWit > 9) {techWit = styledWit - 9;styledWit = 9;}
	if (styledWil > 9) {techWil = styledWil - 9;styledWil = 9;}
	if (styledCha > 9) {techCha = styledCha - 9;styledCha = 9;}
	if (styledInt > 9) {techInt = styledInt - 9;styledInt = 9;}
	
	//sift through aux styles and set up styled skills object
	$.each(character.styles.classes, function(key, value) {
		$.each(value, function(auxKey, auxValue) {
			if (auxKey === 'aux1' || auxKey === 'aux2' || auxKey === 'aux3') {
				if (auxValue.skill === 'skill') { 
					styledSkills.skills[auxValue.name] = auxValue.value;
				} else if (auxValue.skill === 'combatSkill') {
					styledSkills.comSkills[auxValue.name] = auxValue.value;
				} else if (auxValue.name.length > 0) {
					auxStyleList[auxValue.name] = auxValue.value;
				}			
			}
		});
	});
	
	// create attribute rolls
	$.each(character.coreAttributes, function( key, value ) {
		var styledValue = value + character.styles.classes[key].core,
			techniqueLevel,
			penalty = false;
			if (character.artifacts.cast.bio_interface) {
				if (character.artifacts.cast.bio_interface.augmentTrait === key && character.artifacts.cast.bio_interface.augment > 0) {
					styledValue = styledValue + character.artifacts.cast.bio_interface.augment;
				} else if (character.artifacts.cast.noo_interface.augmentTrait === key && character.artifacts.cast.noo_interface.augment > 0) {
					styledValue = styledValue + character.artifacts.cast.noo_interface.augment;
				}
			}
			if (armorAugment[0] === key && character.status.body[armorAugment[2]].functions.primary > 0) {
				styledValue = styledValue + armorAugment[1];
			}
			if (key === 'Perception' && character.status.body.upper.armor[1] === 3) {styledValue--;penalty = true;}
			if (key === 'Agility' && character.status.body.lower.armor[1] === 3) {styledValue--;penalty = true;}
			if (key === 'Finesse' && character.status.body.main.armor[1] === 3) {styledValue--;penalty = true;}
		techniqueLevel = styledValue - 9;
		if (styledValue > 9) {
			styledValue = 9;
		}
		if (techniqueLevel < 0) {
			techniqueLevel = 0;
		}
		$('#attributes').append('<a style="display:none;" class="attribute-row '+ key +'-primary color" id="'+ key +'"><span class="attribute-name">'+ key + '</span><br><span class="attribute-value">'+ styledValue +'</span><span class="technique-level">'+ techniqueLevel +'</span></a>');
		$('.attribute-row#'+key).append('<span class="attribute-dots '+ key +'"></span>');
		for (var i = 0; i < 9; i++) {
			if (i < styledValue) {
				if (i < techniqueLevel) {
					$('.attribute-dots.'+key).append('<span class="point technique"></span>');
				} else {
					$('.attribute-dots.'+key).append('<span class="point"></span>');
				}
			} else {
				if (penalty === true) {
					$('.attribute-dots.'+key).append('<span class="point empty penalty"></span>');
					penalty = false;
				} else {
					$('.attribute-dots.'+key).append('<span class="empty point"></span>');
				}
			}
		}
	});
	
	// create skill rows
	$.each(character.skills, function(key, value) {
		var skillAttributeValue = character.coreAttributes[value[0]] + character.styles.classes[value[0]].core,
			difference,
			techniqueLevel,
			skillBonus = value[2],
			auxSkill,
			styledBonus = skillBonus,
			techSkillBonus;
		if (character.artifacts.cast.bio_interface) {
			if (character.artifacts.cast.bio_interface.augmentTrait === value[0] && character.artifacts.cast.bio_interface.augment > 0) {
				skillAttributeValue = skillAttributeValue + character.artifacts.cast.bio_interface.augment;
			} else if (character.artifacts.cast.noo_interface.augmentTrait === value[0] && character.artifacts.cast.noo_interface.augment > 0) {
				skillAttributeValue = skillAttributeValue + character.artifacts.cast.noo_interface.augment;
			}
		}
		if (armorAugment[0] === value[0] && character.status.body[armorAugment[2]].functions.primary > 0) {
			skillAttributeValue = skillAttributeValue + armorAugment[1];
		}
		if (value[0] === 'Perception' && character.status.body.upper.armor[1] === 3) {skillAttributeValue--;}
		if (value[0] === 'Agility' && character.status.body.lower.armor[1] === 3) {skillAttributeValue--;}
		if (value[0] === 'Finesse' && character.status.body.main.armor[1] === 3) {skillAttributeValue--;}
		techniqueLevel = skillAttributeValue - 9;
		if (skillAttributeValue > 9) {
			difference = skillAttributeValue - 9;
			skillAttributeValue = 9 - difference;
		}
		if(styledSkills.skills[key]){
			auxSkill = styledSkills.skills[key];
			styledBonus = skillBonus + auxSkill;
		}
		if (techniqueLevel < 0) {
			techniqueLevel = 0;
		}
		techSkillBonus = styledBonus + techniqueLevel;
		
		//check for style adjustments
		if (key === 'Alertness') {
			skillAttributeValue = skillAttributeValue + character.styles.classes.Perception.spec1[1];
		}
		
		//pupulate the skill row
		$('#skills').append('<a class="skill-row row '+ value[1] +'-shade color" id="'+ key +'"><span class="skill-name">'+ decodeInput(key) + '</span></a>');
		$('.skill-row#'+key).append('<span class="skill-dots '+ key +'"></span>');
		for (var i = 0; i < 6; i++) {
			if (i < styledBonus) {
				$('.skill-dots.'+key).append('<span class="point"></span>');
			} else {
				$('.skill-dots.'+key).append('<span class="empty point"></span>');
			}
		}
		$('.skill-row#'+key).append('<span class="roll"><span class="dice">'+ skillAttributeValue +'</span><span class="skill-attribute-label '+ value[1] +'-primary color"></span></span>');
		$('.skill-row#'+key+' .skill-attribute-label').append(value[1]);
		$('.skill-row#'+key+' .roll').append(' + <span class="bonus">'+ techSkillBonus +'</span>');
	});
	
	// create unrolled skill rows
	$.each(character.unrolledSkills, function( key, value ) {	
		$('#skills').append('<div class="unskill-row color row" id="'+ key +'"><span class="skill-name">'+ decodeInput(key) + '</span></div>');
		$('.unskill-row#'+key).append('<span class="skill-dots '+ key +'"></span>');
		for (var i = 0; i < 3; i++) {
			if (i < value) {
				$('.skill-dots.'+key).append('<span class="point"></span>');
			} else {
				$('.skill-dots.'+key).append('<span class="empty point"></span>');
			}
		}
	});

	//sort skill liste if set to	
	if (settings.skillorder === 'alphabetical') {
		tinysort('div#skills>.row');
	}
	
	// populate notes
	var skillNotes = character.notes.skillNotes.replace(/\n\r/g,"<hr>"),
		combatNotes = character.notes.combatNotes.replace(/\n\r/g,"<hr>"),
		statusNotes = character.notes.statusNotes.replace(/\n\r/g,"<hr>"),
		styleNotes = character.notes.styleNotes.replace(/\n\r/g,"<hr>"),
		artifactNotes = character.notes.artifactNotes.replace(/\n\r/g,"<hr>");
	skillNotes = skillNotes.replace(/\n/g,"<hr>");
	combatNotes = combatNotes.replace(/\n/g,"<hr>");
	statusNotes = statusNotes.replace(/\n/g,"<hr>");
	styleNotes = styleNotes.replace(/\n/g,"<hr>");
	artifactNotes = artifactNotes.replace(/\n/g,"<hr>");
	$('#skillNotes .notes-wrap').html(skillNotes);
	$('#combatNotes .notes-wrap').html(combatNotes);
	$('#statusNotes .notes-wrap').html(statusNotes);
	$('#styleNotes .notes-wrap').html(styleNotes);
	$('#artifactNotes .notes-wrap').html(artifactNotes);
	$('#skillNotes .notes-input').text(character.notes.skillNotes);
	$('#combatNotes .notes-input').text(character.notes.combatNotes);
	$('#statusNotes .notes-input').text(character.notes.statusNotes);
	$('#styleNotes .notes-input').text(character.notes.styleNotes);
	$('#artifactNotes .notes-input').text(character.notes.artifactNotes);
	
	// create defense rolls
	if (styledSkills.comSkills.Defense) {
		$('.passive-row .roll').append(character.combatSkills.Defense[2] + styledSkills.comSkills.Defense + character.styles.classes.Wits.spec2[1]);
		if (character.styles.classes.Finesse.spec1[1] >= 2 && styledFin > styledAgi) {
			$('#melee-dodge .bonus').append(techFin + character.combatSkills.Defense[2] + styledSkills.comSkills.Defense + character.styles.classes.Agility.spec3[1]);
		} else {
			$('#melee-dodge .bonus').append(techAgi + character.combatSkills.Defense[2] + styledSkills.comSkills.Defense + character.styles.classes.Agility.spec3[1]);
		}
		$('#ranged-dodge .bonus').append(techWit + character.combatSkills.Defense[2] + styledSkills.comSkills.Defense + character.styles.classes.Agility.spec3[1]);
	} else {
		$('.passive-row .roll').append(character.combatSkills.Defense[2] + character.styles.classes.Wits.spec2[1]);
		if ($('.passive-row .roll').text() === '0') {
			$('.passive-row .roll').empty().append('1');
		}
		if (character.styles.classes.Finesse.spec1[1] >= 2 && styledFin > styledAgi) {
			$('#melee-dodge .bonus').append(techFin + character.combatSkills.Defense[2] + character.styles.classes.Agility.spec3[1]);
		} else {
			$('#melee-dodge .bonus').append(techAgi + character.combatSkills.Defense[2] + character.styles.classes.Agility.spec3[1]);
		}
		$('#ranged-dodge .bonus').append(techWit + character.combatSkills.Defense[2] + character.styles.classes.Agility.spec3[1]);
	}
	if (character.styles.classes.Finesse.spec1[1] >= 2 && styledFin > styledAgi) {
		$('#melee-dodge').removeClass('AGI-shade').addClass('FIN-shade');
		$('#melee-dodge .dice').append(styledFin - techFin);
	} else {
		$('#melee-dodge .dice').append(styledAgi - techAgi);
	}
	$('#ranged-dodge .dice').append(styledWit - techWit);
	if (character.styles.classes.Agility.spec3[1] === 3) {
		$('#defenses .speed-row .detail').text('2');
	}
	
	//create unarmed attack
	$('#attacks').append('<a class="attack-row row STR-shade color" id="unarmed"><span class="attack-name">Unarmed</span><span class="roll attack-roll"><span class="icon tohit"></span></span></a>');
	if (styledSkills.comSkills.Unarmed) {
		$('.attack-row#unarmed .roll').append('<span class="dice">'+ (styledStr - techStr) +'</span> + <span class="bonus">'+ (techStr + character.combatSkills.Unarmed[2] + styledSkills.comSkills.Unarmed + character.styles.classes.Finesse.spec3[1]) +'</span>');
	} else {
		$('.attack-row#unarmed .roll').append('<span class="dice">'+ (styledStr - techStr) +'</span> + <span class="bonus">'+ (techStr + character.combatSkills.Unarmed[2] + character.styles.classes.Finesse.spec3[1]) +'</span>');
	}
	$('.attack-row#unarmed').append('<span class="detail-row damage-row">Damage<span class="detail roll"><span class="dice">'+ (styledStr - techStr) +'</span> + <span class="bonus">'+ (techStr + character.styles.classes.Strength.spec3[1]) +'</span></span></span>');
	$('.attack-row#unarmed').append('<span class="detail-row speed-row"><span class="icon speed-icon"></span>Speed cost<span class="detail">2</span></span>');

	//create evocation attack, if necessary
	if (character.styles.arcane.evocation > 0) {
		$('#attacks').append('<a class="attack-row row WIL-shade color" id="evocation-attack"><span class="attack-name">Evocation</span><span class="detail dot-row"></span></a>');
		$('.attack-row#evocation-attack').append('<span class="detail-row damage-row">Damage<span class="detail roll"><span class="dice"></span> + <span class="bonus"></span></span></span><span class="detail-row speed-row"><span class="icon speed-icon"></span>Speed cost<span class="detail">8</span></span><span class="detail-row range-row">Maximum Range<span class="detail">3</span></span>');
		//evocation dot loop
		for (var i = 0; i < 9; i++) {
			if (i < character.styles.arcane.evocation) {
				$('#evocation-attack .dot-row').append('<span class="point filled"></span>');
			} else {
				$('#evocation-attack .dot-row').append('<span class="point empty"></span>');
			}
		}
		//overly complicated if then statements to update evocation damage
		if (character.styles.arcane.evocation < 4) {
			$('#evocation-attack .damage-row .dice').append(character.styles.arcane.evocation);
			$('#evocation-attack .damage-row .bonus').append('0');	
		} else if (character.styles.arcane.evocation < 7) {
			$('#evocation-attack .damage-row .dice').append('3');
			$('#evocation-attack .damage-row .bonus').append(character.styles.arcane.evocation - 3);
			$('#evocation-attack .speed-row .detail').empty().append('6');
		} else if (character.styles.arcane.evocation === 7) {
			$('#evocation-attack .damage-row .dice').append('3');
			$('#evocation-attack .damage-row .bonus').append('3');
			$('#evocation-attack .speed-row .detail').empty().append('4');
			$('#evocation-attack .range-row .detail').empty().append('6');
		} else if (character.styles.arcane.evocation === 8) {
			if ((styledWil - techWil) > 3) {
				$('#evocation-attack .damage-row .dice').append(styledWil - techWil);
			} else {
				$('#evocation-attack .damage-row .dice').append('3');
			}
			$('#evocation-attack .damage-row .bonus').append((3 + techWil));
			$('#evocation-attack .speed-row .detail').empty().append('4');
			$('#evocation-attack .range-row .detail').empty().append('6');
		} else if (character.styles.arcane.evocation === 9) {
			if ((styledWil - techWil) > 3) {
				$('#evocation-attack .damage-row .dice').append(styledWil - techWil);
			} else {
				$('#evocation-attack .damage-row .dice').append('3');
			}
			if (styledSkills.skills.Guts) {
				if ((character.skills.Guts[2] + styledSkills.skills.Guts) > 3) {
					$('#evocation-attack .damage-row .bonus').append(character.skills.Guts[2] + styledSkills.skills.Guts + techWil);
				} else {
					$('#evocation-attack .damage-row .bonus').append((3 + techWil));
				}
			} else {
				$('#evocation-attack .damage-row .bonus').append((3 + techWil));
			}
			$('#evocation-attack .speed-row .detail').empty().append('4');
			$('#evocation-attack .range-row .detail').empty().append('6');
		}
	}
	
	//create intelligence arcana attacks if needed
	if (character.styles.arcane.chromodynamism > 0 || character.styles.arcane.electromagnetism > 0 || character.styles.arcane.gravitonertia > 0) {
		if (character.styles.arcane.chromodynamism > 0) {
			$('#attacks').append('<a class="attack-row row INT-shade color" id="entropic-attack"><span class="attack-name">Entropic Attack</span><span class="detail dot-row"></span></a>');
			$('.attack-row#entropic-attack').append('<span class="detail-row damage-row">Damage for '+character.styles.arcane.chromodynamism+' turns</span><span class="detail-row speed-row"><span class="icon speed-icon"></span>Speed cost<span class="detail">8</span></span><span class="detail-row range-row">Maximum Range<span class="detail">Touch</span></span>');
			if (character.styles.arcane.chromodynamism >= 3) {
				$('#entropic-attack .range-row .detail').empty().append('2');
			}
			if (character.styles.arcane.chromodynamism >= 7) {
				$('#entropic-attack .range-row .detail').empty().append('3');
			}
			for (var i = 0; i < 9; i++) {
				if (i < character.styles.arcane.chromodynamism) {
					$('#entropic-attack .dot-row').append('<span class="point filled"></span>');
				} else {
					$('#entropic-attack .dot-row').append('<span class="point empty"></span>');
				}
			}
		}
		if (character.styles.arcane.electromagnetism > 0) {
			if (character.styles.arcane.electromagnetism > 0) {
				$('#attacks').append('<a class="attack-row row INT-shade color" id="photonic-attack"><span class="attack-name">Photonic Attack</span><span class="detail dot-row"></span></a>');
				$('.attack-row#photonic-attack').append('<span class="detail-row damage-row">Damage<span class="detail roll"><span class="dice">0</span> + <span class="bonus">1</span></span></span><span class="detail-row speed-row"><span class="icon speed-icon"></span>Speed cost<span class="detail">6</span></span><span class="detail-row range-row">Maximum Range<span class="detail">'+character.styles.arcane.electromagnetism+'</span></span>');
				if (character.styles.arcane.electromagnetism >= 4) {
					$('#photonic-attack .damage-row .detail .bonus').empty().append('2');
				}
				if (character.styles.arcane.electromagnetism >= 7) {
					$('#photonic-attack .damage-row .detail .bonus').empty().append('3');
				}
				for (var i = 0; i < 9; i++) {
					if (i < character.styles.arcane.electromagnetism) {
						$('#photonic-attack .dot-row').append('<span class="point filled"></span>');
					} else {
						$('#photonic-attack .dot-row').append('<span class="point empty"></span>');
					}
				}
			}
		}
		if (character.styles.arcane.gravitonertia > 0) {
			if (character.styles.arcane.gravitonertia > 0) {
				$('#attacks').append('<a class="attack-row row INT-shade color" id="kinetic-attack"><span class="attack-name">Kinetic Attack</span><span class="detail dot-row"></span></a>');
				$('.attack-row#kinetic-attack').append('<span class="detail-row damage-row">Damage<span class="detail roll"><span class="dice">'+character.styles.arcane.gravitonertia+'</span> + <span class="bonus">0</span></span></span><span class="detail-row speed-row"><span class="icon speed-icon"></span>Speed cost<span class="detail">6</span></span><span class="detail-row range-row">Maximum Range<span class="detail">'+(character.styles.arcane.gravitonertia*2)+'</span></span>');
				for (var i = 0; i < 9; i++) {
					if (i < character.styles.arcane.gravitonertia) {
						$('#kinetic-attack .dot-row').append('<span class="point filled"></span>');
					} else {
						$('#kinetic-attack .dot-row').append('<span class="point empty"></span>');
					}
				}
			}
		}
	}
	
	// create other attack rolls
	$.each(character.attacks, function( key, value ) {
		var diceTotal,
			bonusTotal,
			damDiceTotal,
			damBonusTotal,
			speedDeductionS = 0,
			ammoValues,
			rangeValue,
			reloadSpeed = 6;
		if (this.deleted) {
			console.log('skipping deleted attack');
		} else {
			$('#attacks').append('<a class="attack-row row" id="'+ key +'"><span class="attack-name">'+ value.name +'</span><span class="roll attack-roll"><span class="icon tohit"></span></span></a>');
			if (value.skill === "Melee") {
				diceTotal = styledFin - techFin;
				if (styledSkills.comSkills.Melee) {
					bonusTotal = techFin + character.combatSkills.Melee[2] + styledSkills.comSkills.Melee + character.styles.classes.Finesse.spec3[1];
				} else {
					bonusTotal = techFin + character.combatSkills.Melee[2] + character.styles.classes.Finesse.spec3[1];
				}
				if (character.styles.classes.Finesse.spec3[1] >= 1 && styledFin > styledStr && value.speedCost < 4) {
					damDiceTotal = (styledFin - techFin);
					damBonusTotal = techFin + value.damage[1] + character.styles.classes.Strength.spec3[1];
				} else {
					damDiceTotal = (styledStr - techStr);
					damBonusTotal = techStr + value.damage[1] + character.styles.classes.Strength.spec3[1];
				}
				//artifact adjustments
				if (value.functions) {
					if (value.functions.primary >= 2) {diceTotal++;}
					if (value.functions.primary === 3) {damDiceTotal++;}
					if (value.functions.secondary1[1] >= 1) {damBonusTotal++;}
					if (value.functions.secondary1[1] >= 2) {damBonusTotal++;}
					if (value.functions.secondary1[1] === 3) {damBonusTotal++;}
				}
				//extra trait adjustments for stunners
				if (value.keywords && value.keywords.indexOf('Stunning') !== -1) {
					damDiceTotal = value.damage[0];
					damBonusTotal = value.damage[1];
				}
				//artifact speed deduction calculation
				if (value.functions) {
					if (value.functions.primary > 0 && (value.speedCost - speedDeductionS) > 2) {
						speedDeductionS++;
					}
				}
				$('.attack-row#'+key).addClass('FIN-shade color');
				$('.attack-row#'+key+' .roll').append('<span class="dice">'+ diceTotal +'</span> + <span class="bonus">'+ bonusTotal +'</span>');
				$('.attack-row#'+key).append('<span class="detail-row damage-row">Damage<span class="detail roll"></span></span>');
				$('.attack-row#'+key+' .damage-row .roll').append('<span class="dice">'+ damDiceTotal +'</span> + <span class="bonus">'+ damBonusTotal +'</span>');
				$('.attack-row#'+key).append('<span class="detail-row speed-row"><span class="icon speed-icon"></span>Speed cost<span class="detail">'+ (value.speedCost - speedDeductionS) +'</span></span>');
			} else if (value.skill === "Firearms") {
				diceTotal = styledPer - techPer;
				if (styledSkills.comSkills.Firearms) {
					bonusTotal = techPer + character.combatSkills.Firearms[2] + styledSkills.comSkills.Firearms + character.styles.classes.Perception.spec3[1];
				} else {
					bonusTotal = techPer + character.combatSkills.Firearms[2] + character.styles.classes.Perception.spec3[1];
				}
				damDiceTotal = value.damage[0];
				damBonusTotal = value.damage[1];
				ammoValues = [value.ammoCurrent, value.ammoMax];
				rangeValue = value.range;
				//trait adjustments
				if (value.keywords && value.keywords.indexOf('Extended Magazine') !== -1) {ammoValues = [value.ammoCurrent, (value.ammoMax * 2)];}
				if (value.keywords && value.keywords.indexOf('Laser Sight') !== -1) {bonusTotal++;}
				if (value.keywords && value.keywords.indexOf('Sawn') !== -1) {rangeValue--; rangeValue--;}
				//artifact adjustments
				if (value.functions) {
					if (value.functions.primary >= 1) {diceTotal++;}
					if (value.functions.primary >= 2) {damDiceTotal++;}
					if (value.functions.secondary1[1] >= 1) {damDiceTotal++;}
					if (value.functions.secondary1[1] >= 2) {damDiceTotal++;}
					if (value.functions.secondary1[1] === 3) {damDiceTotal++;}
					if (value.functions.secondary2[1] === 1) {rangeValue = rangeValue + 3;}
					if (value.functions.secondary2[1] === 2) {rangeValue = rangeValue + 6;}
					if (value.functions.secondary2[1] === 3) {rangeValue = rangeValue + 9;}
					if (value.functions.secondary3[1] === 1) {ammoValues = [99, 99];}
				}
				//extra post arifact calculation trait adjustments for stunners
				if (value.keywords && value.keywords.indexOf('Stunning') !== -1) {damDiceTotal = value.damage[0];}
				//artifact speed deduction calculation
				if (value.functions) {
					if (value.functions.primary === 3 && (value.speedCost - speedDeductionS) > 2) {
						speedDeductionS++;
					}
				}
				//reload speed calculation
				reloadSpeed = reloadSpeed - character.styles.classes.Finesse.spec2[1];
				if (value.keywords && value.keywords.indexOf('Slow Load') !== -1) {
					reloadSpeed = reloadSpeed + 2;
				}
				if (rangeValue < 1) {rangeValue = 1;}
				$('.attack-row#'+key).addClass('PER-shade color');
				$('.attack-row#'+key+' .roll').append('<span class="dice">'+ diceTotal +'</span> + <span class="bonus">'+ bonusTotal +'</span>');
				$('.attack-row#'+key).append('<span class="detail-row damage-row">Damage<span class="detail roll"></span></span>');
				$('.attack-row#'+key+' .damage-row .roll').append('<span class="dice">'+ damDiceTotal +'</span> + <span class="bonus">'+ damBonusTotal +'</span>');
				$('.attack-row#'+key).append('<span class="detail-row speed-row"><span class="icon speed-icon"></span>Speed cost<span class="detail">'+ (value.speedCost - speedDeductionS) +'</span></span>');
				$('.attack-row#'+key).append('<span class="detail-row range-row">Range<span class="detail">'+ rangeValue +'</span></span>');
				if (value.functions.secondary3[1] >= 2) {
					$('.attack-row#'+key).append('<span class="detail-row infinite-ammo ammo-row">Ammo<span class="detail">&infin;</span></span>');
				} else {
					$('.attack-row#'+key).append('<span class="detail-row ammo-row">Ammo<span class="detail">'+ ammoValues[0] +' / '+ ammoValues[1] +'</span></span>');
					$('.attack-row#'+key).append('<a class="button reload-button detail no-ammometer has-sub extra-long">Reload<span class="button-sub-row">Speed Cost: '+reloadSpeed+'</span></a>');
					if (ammoValues[0] < 31) {
						$('.attack-row#'+key+' .reload-button').removeClass('no-ammometer');
						$('.attack-row#'+key).append('<span class="detail-row ammo-meter"></span>');
						for (var i = 0; i < ammoValues[1]; i++) {
							if (i < ammoValues[0]) {
								$('.attack-row#'+key+' .ammo-meter').append('<span class="ammo-pip full"></span>');
							} else {
								$('.attack-row#'+key+' .ammo-meter').append('<span class="ammo-pip empty"></span>');
							}
						}
					}
				}
			} else if (value.skill === "Ballistics") {
				diceTotal = styledPer - techPer;
				if (styledSkills.comSkills.Ballistics) {
					bonusTotal = techPer + character.combatSkills.Ballistics[2] + styledSkills.comSkills.Ballistics + character.styles.classes.Perception.spec3[1];
				} else {
					bonusTotal = techPer + character.combatSkills.Ballistics[2] + character.styles.classes.Perception.spec3[1];
				}
				damDiceTotal = value.damage[0];
				damBonusTotal = value.damage[1];
				ammoValues = [value.ammoCurrent, value.ammoMax];
				rangeValue = value.range;
				//trait adjustments
				if (value.keywords && value.keywords.indexOf('Thrown') !== -1) {rangeValue = styledStr;}
				//artifact adjustments
				if (value.functions) {
					if (value.functions.primary >= 1) {diceTotal++;}
					if (value.functions.primary >= 2) {damDiceTotal++;}
					if (value.functions.secondary1[1] >= 1) {damDiceTotal++;}
					if (value.functions.secondary1[1] >= 2) {damDiceTotal++;}
					if (value.functions.secondary1[1] === 3) {damDiceTotal++;}
					if (value.functions.secondary2[1] === 1) {rangeValue = rangeValue + 3;}
					if (value.functions.secondary2[1] === 2) {rangeValue = rangeValue + 6;}
					if (value.functions.secondary2[1] === 3) {rangeValue = rangeValue + 9;}
					if (value.functions.secondary3[1] === 1) {ammoValues = [99, 99];}
				}
				//extra post arifact calculation trait adjustments for stunners
				if (value.keywords && value.keywords.indexOf('Stunning') !== -1) {damDiceTotal = value.damage[0];}
				//artifact speed deduction calculation
				if (value.functions) {
					if (value.functions.primary === 3 && (value.speedCost - speedDeductionS) > 2) {
						speedDeductionS++;
					}
				}
				//reload speed calc
				reloadSpeed = reloadSpeed - character.styles.classes.Finesse.spec2[1];
				if (value.keywords && value.keywords.indexOf('Slow Load') !== -1) {
					reloadSpeed = reloadSpeed + 2;
				}
				$('.attack-row#'+key).addClass('PER-shade color');
				$('.attack-row#'+key+' .roll').append('<span class="dice">'+ diceTotal +'</span> + <span class="bonus">'+ bonusTotal +'</span>');
				$('.attack-row#'+key).append('<span class="detail-row damage-row">Damage<span class="detail roll"></span></span>');
				$('.attack-row#'+key+' .damage-row .roll').append('<span class="dice">'+ damDiceTotal +'</span> + <span class="bonus">'+ damBonusTotal +'</span>');
				$('.attack-row#'+key).append('<span class="detail-row speed-row"><span class="icon speed-icon"></span>Speed cost<span class="detail">'+ (value.speedCost - speedDeductionS) +'</span></span>');
				$('.attack-row#'+key).append('<span class="detail-row range-row">Range<span class="detail">'+ rangeValue +'</span></span>');
				if (value.functions.secondary3[1] >= 2) {
					$('.attack-row#'+key).append('<span class="detail-row infinite-ammo">Ammo<span class="detail">&infin;</span></span>');
				} else {
					$('.attack-row#'+key).append('<span class="detail-row ammo-row">Ammo<span class="detail">'+ ammoValues[0] +' / '+ ammoValues[1] +'</span></span>');
					if (value.keywords && value.keywords.indexOf('Bow') !== -1) {
						$('.attack-row#'+key).append('<a class="button reload-button arrow-button detail no-ammometer extra-long">Add Arrow</a>');
					} else if (!value.keywords || (value.keywords && value.keywords.indexOf('Thrown') === -1)) {
						$('.attack-row#'+key).append('<a class="button reload-button detail has-sub no-ammometer extra-long">Reload<span class="button-sub-row">Speed Cost: '+reloadSpeed+'</span></a>');
					}
					if (value.keywords && value.keywords.indexOf('Thrown') !== -1) {
						$('.attack-row#'+key+' .ammo-row').remove();
					} else if (value.keywords && value.keywords.indexOf('Bow') !== -1) {
						$('.attack-row#'+key+' .ammo-row').empty().append('Arrows<span class="detail">'+ammoValues[0]+'</span>');
					} else {
						if (ammoValues[0] < 31) {
							$('.attack-row#'+key+' .reload-button').removeClass('no-ammometer');
							$('.attack-row#'+key).append('<span class="detail-row ammo-meter"></span>');
							for (var i = 0; i < ammoValues[1]; i++) {
								if (i < ammoValues[0]) {
									$('.attack-row#'+key+' .ammo-meter').append('<span class="ammo-pip full"></span>');
								} else {
									$('.attack-row#'+key+' .ammo-meter').append('<span class="ammo-pip empty"></span>');
								}
							}
						}
					}
				}
			} else if (value.skill === "Unarmed") {
				diceTotal = styledStr - techStr;
				if (styledSkills.comSkills.Unarmed) {
					bonusTotal = techStr + character.combatSkills.Unarmed[2] + styledSkills.comSkills.Unarmed + character.styles.classes.Finesse.spec3[1];
				} else {
					bonusTotal = techStr + character.combatSkills.Unarmed[2] + character.styles.classes.Finesse.spec3[1];
				}
				damDiceTotal = styledStr - techStr;
				damBonusTotal = techStr + value.damage[1] + character.styles.classes.Strength.spec3[1];
				//artifact adjustments
				if (value.functions) {
					if (value.functions.primary >= 2) {diceTotal++;}
					if (value.functions.primary === 3) {damDiceTotal++;}
					if (value.functions.secondary1[1] >= 1) {damBonusTotal++;}
					if (value.functions.secondary1[1] >= 2) {damBonusTotal++;}
					if (value.functions.secondary1[1] === 3) {damBonusTotal++;}
				}
				//extra post arifact calculation trait adjustments for stunners
				if (value.keywords && value.keywords.indexOf('Stunning') !== -1) {damDiceTotal = value.damage[0];}
				//artifact/style speed deduction calculation
				if (value.functions.primary > 0 && (value.speedCost - speedDeductionS) > 2) {
					speedDeductionS++;
				}
				if (value.functions) {
					if (value.functions.primary > 0 && (value.speedCost - speedDeductionS) > 2) {
						speedDeductionS++;
					}
				}
				$('.attack-row#'+key).addClass('STR-shade color');
				$('.attack-row#'+key+' .roll').append('<span class="dice">'+ diceTotal +'</span> + <span class="bonus">'+ bonusTotal +'</span>');
				$('.attack-row#'+key).append('<span class="detail-row damage-row">Damage<span class="detail roll"></span></span>');
				$('.attack-row#'+key+' .damage-row .roll').append('<span class="dice">'+ damDiceTotal +'</span> + <span class="bonus">'+ damBonusTotal +'</span>');
				$('.attack-row#'+key).append('<span class="detail-row speed-row"><span class="icon speed-icon"></span>Speed cost<span class="detail">'+ (value.speedCost - speedDeductionS) +'</span></span>');
			}
			//list keywords
			if (value.keywords) {
				$('.attack-row#'+key).append('<span class="detail-row attack-keyword-list"><span class="detail-row-header">Traits</span></span>');
				$(value.keywords).each(function(){
					$('.attack-row#'+key+' .attack-keyword-list').append('<span class="attack-keyword" id="'+this.replace(' ','-').toLowerCase()+'-desc-taphold">'+this+'</span>');
				});
			}
			//list functions
			if (value.functions.primary > 0) {
				 $('.attack-row#'+key).append('<span class="detail-row artifacts-list-row attk-function-taphold"><span class="detail-row attk-function-taphold primary-desc"><span class="detail-row-header attk-function-taphold primary-desc">Primary Function</span><span class="detail header-detail attk-function-taphold"><span class="hidden trait-value" style="display:none;">'+value.functions.primary+'</span></span></span></span>');
				if (value.functions.secondary1[1] > 0) {$('.attack-row#'+key+' .artifacts-list-row').append('<span class="detail-row attk-function-taphold '+value.functions.secondary1[0]+'-desc">'+value.functions.secondary1[0]+'( )<span class="detail attk-function-taphold"><span class="hidden trait-value" style="display:none;">'+value.functions.secondary1[1]+'</span></span></span>');}
				if (value.functions.secondary2[1] > 0) {$('.attack-row#'+key+' .artifacts-list-row').append('<span class="detail-row attk-function-taphold '+value.functions.secondary2[0]+'-desc">'+value.functions.secondary2[0]+'( )<span class="detail attk-function-taphold"><span class="hidden trait-value" style="display:none;">'+value.functions.secondary2[1]+'</span></span></span>');}
				if (value.functions.secondary3[1] > 0) {$('.attack-row#'+key+' .artifacts-list-row').append('<span class="detail-row attk-function-taphold '+value.functions.secondary3[0]+'-desc">'+value.functions.secondary3[0]+'( )<span class="detail attk-function-taphold"><span class="hidden trait-value" style="display:none;">'+value.functions.secondary3[1]+'</span></span></span>');}
			}
		}
	});
	$('#attacks').append('<a class="row" id="new-attack"><span class="attack-name">Add a new attack...</span></a>');
	$('#new-attack').click(function(){newAttack(false, false);});
	
	//add dots attack functions
	$('#attacks .artifacts-list-row .detail-row').each(function(){
		for (var i = 0; i < 3; i++) {
			if (i < parseInt($(this).children().children('.hidden').text())) {
				$(this).children('.detail').append('<span class="point filled"></span>');
			} else {
				$(this).children('.detail').append('<span class="empty point"></span>');
			}
		}
	});
	
	//list double attacks, if any
	if (character.doubleAttacks) {
		doubleAttackLength = 0;
		$.each(character.doubleAttacks, function() {
			if (!this.deleted) {
				doubleAttackLength++;
			}
		});
		if (doubleAttackLength > 0) {
			$('#combat-view #attacks').after('<div id="double-attacks" class="sheet-section"><h3>Dual Wield Combos</h3></div>');
		}
		$.each(character.doubleAttacks, function( key, value ) {
			if (!this.deleted) {
				$('#combat-view #double-attacks').append('<a id="'+key+'" class="attack-row double-attack row color '+character.attacks[value[0]].skill+'-skillcolor-primary"></a>');
				//main hand
				$('#double-attacks #'+key).append('<div id="'+value[0]+'-sub-row" class="row sub-row main-hand color '+character.attacks[value[0]].skill+'-skillcolor-shade""><p class="hand-identifier">Main Hand</p><h3>'+character.attacks[value[0]].name+'</h3></div>');
				if (character.styles.classes.Finesse.spec2[1] > 0) {
					$('#double-attacks #'+key+' .main-hand').append('<p class="attack-roll">To Hit<span class="detail">'+$('#'+value[0]+' .attack-roll').html()+'</span></p>');
				} else {
					$('#double-attacks #'+key+' .main-hand').append('<p class="attack-roll">To Hit<span class="detail"><span class="dice">'+(parseInt($('#'+value[0]+' .attack-roll .dice').text()) + parseInt($('#'+value[0]+' .attack-roll .bonus').text()))+'</span> + <span class="bonus">0</span></span></p>');				
				}
				$('#double-attacks #'+key+' .main-hand').append('<p class="damage-row">Damage<span class="detail">'+$('#'+value[0]+' .damage-row .roll').html()+'</span></p>');
				if ($('#'+value[0]+' .ammo-row').length > 0) {
					$('#double-attacks #'+key+' .main-hand').append('<span class="ammo-row">'+$('#'+value[0]+' .ammo-row').html()+'</span>');
					if ($('#'+value[0]+' .ammo-row').hasClass('infinite-ammo')) {
						$('#double-attacks #'+key+' .main-hand .ammo-row').addClass('infinite-ammo');
					}
				}
				//off hand
				$('#double-attacks #'+key).append('<div id="'+value[1]+'-sub-row" class="row sub-row off-hand color '+character.attacks[value[1]].skill+'-skillcolor-shade""><p class="hand-identifier">Off Hand</p><h3>'+character.attacks[value[1]].name+'</h3></div>');
				if (character.styles.classes.Finesse.spec2[1] === 3) {
					$('#double-attacks #'+key+' .off-hand').append('<p class="attack-roll">To Hit<span class="detail">'+$('#'+value[1]+' .attack-roll').html()+'</span></p>');
				} else {
					$('#double-attacks #'+key+' .off-hand').append('<p class="attack-roll">To Hit<span class="detail"><span class="dice">'+(parseInt($('#'+value[1]+' .attack-roll .dice').text()) + parseInt($('#'+value[1]+' .attack-roll .bonus').text()))+'</span> + <span class="bonus">0</span></span></p>');				
				}
				$('#double-attacks #'+key+' .off-hand').append('<p class="damage-row">Damage<span class="detail">'+$('#'+value[1]+' .damage-row .roll').html()+'</span></p>');
				if ($('#'+value[1]+' .ammo-row').length > 0) {
					$('#double-attacks #'+key+' .off-hand').append('<span class="ammo-row">'+$('#'+value[1]+' .ammo-row').html()+'</span>');
					if ($('#'+value[1]+' .ammo-row').hasClass('infinite-ammo')) {
						$('#double-attacks #'+key+' .off-hand .ammo-row').addClass('infinite-ammo');
					}
				}
				//both
				$('#double-attacks #'+key).append('<div class="clear mutual-stats"></div>');
				if (character.styles.classes.Finesse.spec2[1] === 2) {
					if (parseInt($('#'+value[0]+' .speed-row .detail').text()) > parseInt($('#'+value[1]+' .speed-row .detail').text()) || parseInt($('#'+value[0]+' .speed-row .detail').text()) == parseInt($('#'+value[1]+' .speed-row .detail').text())) {
						$('#double-attacks #'+key+' .mutual-stats').append('<div class="mutual-item"><span class="mutual-row speed-row"><span class="icon speed-icon"></span>Speed Cost <span class="detail">'+(parseInt($('#'+value[0]+' .speed-row .detail').text()) + 2)+'</span></span></div>');					
					} else {
						$('#double-attacks #'+key+' .mutual-stats').append('<div class="mutual-item"><span class="mutual-row speed-row"><span class="icon speed-icon"></span>Speed Cost <span class="detail">'+(2 + parseInt($('#'+value[1]+' .speed-row .detail').text()))+'</span></span></div>');
					}
				} else if (character.styles.classes.Finesse.spec2[1] === 3) {
					if (parseInt($('#'+value[0]+' .speed-row .detail').text()) > parseInt($('#'+value[1]+' .speed-row .detail').text()) || parseInt($('#'+value[0]+' .speed-row .detail').text()) == parseInt($('#'+value[1]+' .speed-row .detail').text())) {
						$('#double-attacks #'+key+' .mutual-stats').append('<div class="mutual-item"><span class="mutual-row speed-row"><span class="icon speed-icon"></span>Speed Cost <span class="detail">'+parseInt($('#'+value[0]+' .speed-row .detail').text())+'</span></span></div>');					
					} else {
						$('#double-attacks #'+key+' .mutual-stats').append('<div class="mutual-item"><span class="mutual-row speed-row"><span class="icon speed-icon"></span>Speed Cost <span class="detail">'+parseInt($('#'+value[1]+' .speed-row .detail').text())+'</span></span></div>');
					}			
				} else {
					$('#double-attacks #'+key+' .mutual-stats').append('<div class="mutual-item"><span class="mutual-row speed-row"><span class="icon speed-icon"></span>Speed Cost <span class="detail">'+(parseInt($('#'+value[0]+' .speed-row .detail').text()) + parseInt($('#'+value[1]+' .speed-row .detail').text()))+'</span></span></div>');
				}
				if (character.attacks[value[0]].skill === 'Firearms' || character.attacks[value[0]].skill === 'Ballistics') {
					if (parseInt($('#'+value[0]+' .range-row .detail').text()) < parseInt($('#'+value[1]+' .range-row .detail').text())) {
						$('#double-attacks #'+key+' .mutual-stats').append('<div class="mutual-item range-wrap"><span class="mutual-row range-row">Range <span class="detail">'+$('#'+value[0]+' .range-row .detail').text()+'</span></span></div>');
					} else {
						$('#double-attacks #'+key+' .mutual-stats').append('<div class="mutual-item range-wrap"><span class="mutual-row range-row">Range <span class="detail">'+$('#'+value[1]+' .range-row .detail').text()+'</span></span></div>');
					}
				}
			}
		});
		$('#double-attacks .icon.tohit').remove();
		$('#double-attacks .attack-roll').prepend('<span class="icon tohit"></span>');
		
	}
	
	// create combat skill rows
	$.each(character.combatSkills, function( key, value ) {
		var skillAttributeValue = character.coreAttributes[value[0]] + character.styles.classes[value[0]].core,
			difference,
			techniqueLevel,
			skillBonus = value[2],
			auxSkill,
			styledBonus = skillBonus,
			techSkillBonus;
		if (character.artifacts.cast.bio_interface) {
			if (character.artifacts.cast.bio_interface.augmentTrait === value[0] && character.artifacts.cast.bio_interface.augment > 0) {
				skillAttributeValue = skillAttributeValue + character.artifacts.cast.bio_interface.augment;
			} else if (character.artifacts.cast.noo_interface.augmentTrait === value[0] && character.artifacts.cast.noo_interface.augment > 0) {
				skillAttributeValue = skillAttributeValue + character.artifacts.cast.noo_interface.augment;
			}
		}
		if (armorAugment[0] === value[0] && character.status.body[armorAugment[2]].functions.primary > 0) {
			skillAttributeValue = skillAttributeValue + armorAugment[1];
		}
		if (value[0] === 'Perception' && character.status.body.upper.armor[1] === 3) {skillAttributeValue--;}
		if (value[0] === 'Agility' && character.status.body.lower.armor[1] === 3) {skillAttributeValue--;}
		if (value[0] === 'Finesse' && character.status.body.main.armor[1] === 3) {skillAttributeValue--;}
		techniqueLevel = skillAttributeValue - 9;
		if (skillAttributeValue > 9) {
			difference = skillAttributeValue - 9;
			skillAttributeValue = 9 - difference;
		}
		if(styledSkills.comSkills[key]){
			auxSkill = styledSkills.comSkills[key];
			styledBonus = skillBonus + auxSkill;
		}
		if (techniqueLevel < 0) {
			techniqueLevel = 0;
		}
		techSkillBonus = styledBonus + techniqueLevel;

		//check for style adjustments
		if (key === 'Initiative') {
			skillBonus = value[2] + character.styles.classes.Wits.spec3[1];
		}
		//populate
		if (settings.comskilllocation === 'skill-view' || settings.comskilllocation === 'both'){
			$('#skills').append('<a class="skill-row row  '+ value[1] +'-shade color" id="'+ key +'"><span class="skill-name">'+ key + '</span></a>');
		}
		if (settings.comskilllocation === 'combat-view' || settings.comskilllocation === 'both'){
			$('#combat-skills').append('<a class="skill-row row  '+ value[1] +'-shade color" id="'+ key +'"><span class="skill-name">'+ key + '</span></a>');
		}
		$('.skill-row#'+key).append('<span class="skill-dots '+ key +'"></span>');
		for (var i = 0; i < 6; i++) {
			if (i < styledBonus) {
				$('.skill-dots.'+key).append('<span class="point"></span>');
			} else {
				$('.skill-dots.'+key).append('<span class="empty point"></span>');
			}
		}
		$('.skill-row#'+key).append('<span class="roll"><span class="dice">'+ skillAttributeValue +'</span><span class="skill-attribute-label"></span></span>');
		$('.skill-row#'+key+' .skill-attribute-label').append(value[1]);
		$('.skill-row#'+key+' .roll').append(' + <span class="bonus">'+ techSkillBonus +'</span>');
	});
	
	//sort comskills if set to
	if (settings.skillorder === 'alphabetical') {
		if (settings.comskilllocation === 'combat-view' || settings.comskilllocation === 'both') {
			tinysort('div#combat-skills>.skill-row');
		}
		if (settings.comskilllocation === 'skill-view' || settings.comskilllocation === 'both') {
			tinysort('div#skills>.row');
		}
	} else if (settings.comskilllocation === 'skill-view' || settings.comskilllocation === 'both') {
		$('#skills #Unarmed').insertBefore('#skills #Stealth');
		$('#skills #Melee').insertBefore('#skills #Stealth');
		$('#skills #Ballistics').insertAfter('#skills #Alertness');
		$('#skills #Firearms').insertBefore('#skills #Investigate');
		$('#skills #Defense').insertAfter('#skills #Athletics');
		$('#skills #Initiative').insertAfter('#skills #Drive');
	}
	if (settings.comskilllocation === 'skill-view') {
		$('#combat-skills').hide();
	}
	
	
	// append custom skill link
	$('#skills').append('<a id="create-skill-insitu" class="row">Create a new skill...</a>');
	$('#skills #create-skill-insitu').click(function(){
		createSkill(true);
	});
	
	//populate status 
	var styledToughness = character.skills.Toughness[2],
		styledAthletics = character.skills.Athletics[2];
	if (styledSkills.skills.Toughness) {styledToughness = character.skills.Toughness[2] + styledSkills.skills.Toughness;}
	if (styledSkills.skills.Athletics) {styledAthletics = character.skills.Athletics[2] + styledSkills.skills.Athletics;}
	if (styledAthletics === 2 || styledAthletics === 3) {athEndurance = 1} else if (styledAthletics === 4 || styledAthletics === 5) {athEndurance = 2} else if (styledAthletics === 6) {athEndurance = 3} else {athEndurance = 0}
	$('.wound-max .detail').text(styledStm + styledToughness + 3 + character.styles.classes.Stamina.spec1[1]);
	$('.regen .max-regen').text(styledStm + athEndurance + (character.styles.classes.Stamina.spec2[1] * 3) + 3);
	if (character.status.currentEndurance >= parseInt($('.regen .max-regen').text())) {
		character.status.currentEndurance = parseInt($('.regen .max-regen').text());
		$('#regen-plus').addClass('dim');
	} else if (character.status.currentEndurance < 0) {
		$('.row.regen').addClass('unconscious');
	}
	$('.regen .current-regen').text(character.status.currentEndurance);
	
	//shields up!
	if (filteredShield(character.artifacts.components)) {
		var shieldObject = filteredShield(character.artifacts.components),
			maxShield = shieldObject.primary[1]+parseInt(shieldObject.secondary1[1]),
			currentShieldValue = maxShield;
		$('#status-view #status').append('<div id="shield-id-'+shieldObject.id+'" class="row color INT-tint shield-monitor"><span class="desc-title">Shield</span><span class="detail"><a class="button" id="shield-minus-button">-</a><span id="shield-monitor-dots"></span><a class="button" id="shield-plus-button">+</a></span></div>');
		if (!isNaN(character.status.currentShield)) {
			currentShieldValue = character.status.currentShield;
		}
		if (currentShieldValue === maxShield) {
			$('#shield-plus-button').addClass('dim');
		}
		for (var i = 0; i < maxShield; i++) {
			if (i < currentShieldValue) {
				$('#shield-monitor-dots').append('<span class="point filled"></span>');
			} else {
				$('#shield-monitor-dots').append('<span class="empty point"></span>');
			}
		}
		$('.shield-monitor .button').off().tap(function(event){
			if (this.id === 'shield-plus-button') {
				if ($('#shield-monitor-dots .point.filled').length >= $('#shield-monitor-dots .point').length) {
					$('#shield-plus-button').addClass('dim');
					$('#shield-minus-button').removeClass('dim');	
				} else if ($('#shield-monitor-dots .point.empty').length >= $('#shield-monitor-dots .point').length) {
					$('#shield-minus-button').removeClass('dim');
					$(this).siblings().children('.point.empty').first().removeClass('empty').addClass('filled');
					if ($('#shield-monitor-dots .point.filled').length >= $('#shield-monitor-dots .point').length) {
						$('#shield-plus-button').addClass('dim');
					}
				} else {
					$(this).siblings().children('.point.empty').first().removeClass('empty').addClass('filled');
					$('#shield-minus-button').removeClass('dim');
					if ($('#shield-monitor-dots .point.filled').length >= $('#shield-monitor-dots .point').length) {
						$('#shield-plus-button').addClass('dim');
					}
				}
			} else {
				if ($('#shield-monitor-dots .point.filled').length >= $('#shield-monitor-dots .point').length) {
					$(this).siblings().children('.point.filled').last().removeClass('filled').addClass('empty');
					$('#shield-plus-button').removeClass('dim');
					if ($('#shield-monitor-dots .point.empty').length >= $('#shield-monitor-dots .point').length) {
						$('#shield-minus-button').addClass('dim');
					}
				} else if ($('#shield-monitor-dots .point.empty').length >= $('#shield-monitor-dots .point').length) {
					$('#shield-minus-button').addClass('dim');
					$('#shield-plus-button').removeClass('dim');	
				} else {
					$(this).siblings().children('.point.filled').last().removeClass('filled').addClass('empty');
					$('#shield-plus-button').removeClass('dim');
					if ($('#shield-monitor-dots .point.empty').length >= $('#shield-monitor-dots .point').length) {
						$('#shield-minus-button').addClass('dim');
					}
				}
			}
			//add shield status to character object and save after a second of no actions
			character.status.currentShield = $('#shield-monitor-dots .point.filled').length;
			clearTimeout(timer);
			timer = setTimeout(function(){
				saveCharacterObject(false);
			}, 1000);
		});
	}
	
	//populate body and wounds
	$('#wounds').children('.body-row').each(function() {
		var woundMax = styledStm + styledToughness + 3 + character.styles.classes.Stamina.spec1[1],
			counter = 1;
		$(this).children('.current-wounds').text(character.status.body[$(this).attr('id')].wounds);
		
		//show armor, if any
		if (character.status.body[$(this).attr('id')].armor[1] > 0 || character.status.body[$(this).attr('id')].functions.primary > 0) {
			if (character.status.body[$(this).attr('id')].armor[0].length > 0) {$(this).children('.armor-row').children('.armor-title').addClass('detail-row-header').append(character.status.body[$(this).attr('id')].armor[0]);}
			if (character.status.body[$(this).attr('id')].armor[1] > 0 || character.status.body[$(this).attr('id')].functions.harden > 0) {$(this).children('.armor-row').children().children('.armor-value').text((character.status.body[$(this).attr('id')].armor[1] + character.status.body[$(this).attr('id')].functions.harden));}
			if (character.status.body[$(this).attr('id')].functions.primary > 0) {$(this).children('.armor-row').append('<div class="detail-row armor-functions"></span>');}
			if (character.status.body[$(this).attr('id')].functions.primary > 0) {$(this).children('.armor-row').children('.armor-functions').append('<div class="detail-row artifact-function primary">Primary Function<span class="armor-primary detail"><span class="hidden trait-value" style="display:none;">'+character.status.body[$(this).attr('id')].functions.primary+'</span></span></div>');}
			if (character.status.body[$(this).attr('id')].functions.augment > 0) {$(this).children('.armor-row').children('.armor-functions').append('<div class="detail-row artifact-function secondary augment">augment(<span class="augment-trait '+character.status.body[$(this).attr('id')].functions.augmentTrait+'-primary color">'+character.status.body[$(this).attr('id')].functions.augmentTrait+'</span>)<span class="augment-value detail"><span class="hidden trait-value" style="display:none;">'+character.status.body[$(this).attr('id')].functions.augment+'</span></span></div>');}
			if (character.status.body[$(this).attr('id')].functions.harden > 0) {$(this).children('.armor-row').children('.armor-functions').append('<div class="detail-row artifact-function secondary harden">harden( )<span class="harden-value detail"><span class="hidden trait-value" style="display:none;">'+character.status.body[$(this).attr('id')].functions.harden+'</span></span></div>');}
			if (character.status.body[$(this).attr('id')].functions.store > 0) {$(this).children('.armor-row').children('.armor-functions').append('<div class="detail-row artifact-function secondary store">store( )<span class="storage-value detail"><span class="hidden trait-value" style="display:none;">'+character.status.body[$(this).attr('id')].functions.store+'</span></span></div>');}
			
			if ($(this).attr('id') !== 'legs' && character.status.body[$(this).attr('id')].armor[1] === 3) {
				$(this).children('.armor-row').children('.penalty').show();
			} else if ($(this).attr('id') === 'legs' && character.status.body[$(this).attr('id')].armor[1] === 2) {
				$(this).children('.armor-row').children('.penalty').show();
			} else if ($(this).attr('id') === 'legs' && character.status.body[$(this).attr('id')].armor[1] === 3) {
				$(this).children('.armor-row').children('.penalty').empty().append('Speed Penalty 2').show();
			}
			
			$(this).children('.armor-row').show();
		}
		
		if (character.status.body[$(this).attr('id')].wounds > woundMax) {
			$(this).addClass('disabled-location')
		}
		
		//create first row of wounds
		while (woundMax > 0) {
			if (counter <= character.status.body[$(this).attr('id')].wounds) {
				$(this).children('.wound-dots').children('.wounded').append('<span class="point '+ counter +'"></span>');
			} else {
				$(this).children('.wound-dots').children('.wounded').append('<span class="point empty '+ counter +'"></span>');
			}
			woundMax--;
			counter++;
		}
		
		//create disabled row of wounds
		woundMax = styledStm + styledToughness + 3 + character.styles.classes.Stamina.spec1[1];
		while (woundMax > 0) {
			if (counter <= character.status.body[$(this).attr('id')].wounds) {
				$(this).children('.wound-dots').children('.disabled').append('<span class="point '+ counter +'""></span>');
			} else {
				$(this).children('.wound-dots').children('.disabled').append('<span class="point empty '+ counter +'""></span>');
			}
			woundMax--;
			counter++;
		}
	});

	//add dots armor functions
	$('#wounds .armor-functions .detail-row').each(function(){
		for (var i = 0; i < 3; i++) {
			if (i < parseInt($(this).children().children('.hidden').text())) {
				$(this).children('.detail').append('<span class="point filled"></span>');
			} else {
				$(this).children('.detail').append('<span class="empty point"></span>');
			}
		}
	});

	//populate the style view
	$('#available-points .available-value').empty().append(character.styles.available);
	if (character.styles.available === 0) {
		$('#spend-points').hide();
	}
	$.each(character.styles.classes, function( key, value ) {
		$('#style-class-list').append('<div id="'+key+'-style-class" class="row style-class-core color '+key+'-primary"><span class="style-class-title">'+key+'</span><span class="detail core-detail"></span></div>');
		
		//fill dots for core value and add hidden controllers
		$('#'+key+'-style-class .detail').append('<div class="hidden trait-value" style="display:none;">'+value.core+'</div>');
		$('#'+key+'-style-class .detail').append('<a class="button minus dead-slide">-</a>');
		for (var i = 0; i < 9; i++) {
			if (i < value.core) {
				$('#'+key+'-style-class .detail').append('<span class="filled point"></span>');
			} else {
				$('#'+key+'-style-class .detail').append('<span class="empty point"></span>');
			}
		}
		$('#'+key+'-style-class .detail').append('<a class="button plus dead-slide">+</a>');
		$('#'+key+'-style-class').append('<div class="clear"></div>');

		//list specialties or aux if available
		if (value.core >= 1) {
			listSpec('spec1', key, value, false);
		}
		if (value.core >= 4) {
			listSpec('spec2', key, value, false);
		}
		if (value.core >= 7) {
			listSpec('spec3', key, value, false);
		}
	});

	//list available arcana
	listArcana(true, 'none', 'nonEvent');
	
	//list enstylization quotient
	styleAudit();

	//list cast
	if (character.artifacts.cast.bio_interface) {
		$('#artifacts-view #edit-cast').before('<div style="display:none;" class="row cast-primary color INT-tint" id="bio_interface"></div><div style="display:none;" id="cpu_interface" class="row cast-primary color INT-tint"></div><div style="display:none;" id="noo_interface" class="row cast-primary color INT-tint"></div>');
		if (character.artifacts.cast.bio_interface.core > 0) {
			$('#artifacts-view #bio_interface').append('<span class="row-label primary">bio_interface( )</span><span class="detail floatright"><span class="hidden trait-value" style="display:none;">'+character.artifacts.cast.bio_interface.core+'</span></span>');
			if (character.artifacts.cast.bio_interface.assembly > 0) {$('#artifacts-view #bio_interface').append('<span class="detail-row" id="bio_assemble"><span class="row-label">assemble( )</span><span class="detail floatright"><span class="hidden trait-value" style="display:none;">'+character.artifacts.cast.bio_interface.assembly+'</span></span></span>');}
			if (character.artifacts.cast.bio_interface.augment > 0) {$('#artifacts-view #bio_interface').append('<span class="detail-row" id="bio_augment"><span class="row-label">augment(<span class="augment-trait '+character.artifacts.cast.bio_interface.augmentTrait+'-primary color">'+character.artifacts.cast.bio_interface.augmentTrait+'</span>)</span><span class="detail floatright"><span class="hidden trait-value" style="display:none;">'+character.artifacts.cast.bio_interface.augment+'</span></span></span>');}
			if (character.artifacts.cast.bio_interface.exo_supply > 0) {$('#artifacts-view #bio_interface').append('<span class="detail-row" id="bio_exo_supply"><span class="row-label">exo_supply( )</span><span class="detail floatright"><span class="hidden trait-value" style="display:none;">'+character.artifacts.cast.bio_interface.exo_supply+'</span></span></span>');}
			$('#artifacts-view #bio_interface').show( );
		}
		if (character.artifacts.cast.cpu_interface.core > 0) {
			$('#artifacts-view #cpu_interface').append('<span class="row-label primary">cpu_interface( )</span><span class="detail floatright"><span class="hidden trait-value" style="display:none;">'+character.artifacts.cast.cpu_interface.core+'</span></span>');
			if (character.artifacts.cast.cpu_interface.cortex > 0) {$('#artifacts-view #cpu_interface').append('<span class="detail-row" id="cpu_cortex"><span class="row-label">cortex( )</span><span class="detail floatright"><span class="hidden trait-value" style="display:none;">'+character.artifacts.cast.cpu_interface.cortex+'</span></span></span>');}
			if (character.artifacts.cast.cpu_interface.drive > 0) {$('#artifacts-view #cpu_interface').append('<span class="detail-row" id="cpu_drive"><span class="row-label">drive( )</span><span class="detail floatright"><span class="hidden trait-value" style="display:none;">'+character.artifacts.cast.cpu_interface.drive+'</span></span></span>');}
			if (character.artifacts.cast.cpu_interface.simulation > 0) {$('#artifacts-view #cpu_interface').append('<span class="detail-row" id="cpu_simulation"><span class="row-label">simulation( )</span><span class="detail floatright"><span class="hidden trait-value" style="display:none;">'+character.artifacts.cast.cpu_interface.simulation+'</span></span></span>');}
			$('#artifacts-view #cpu_interface').show( );
		}
		if (character.artifacts.cast.noo_interface.core > 0) {
			$('#artifacts-view #noo_interface').append('<span class="row-label primary">noo_interface( )</span><span class="detail floatright"><span class="hidden trait-value" style="display:none;">'+character.artifacts.cast.noo_interface.core+'</span></span>');
			if (character.artifacts.cast.noo_interface.inhibit > 0) {$('#artifacts-view #noo_interface').append('<span class="detail-row" id="noo_inhibit"><span class="row-label">inhibit( )</span><span class="detail floatright"><span class="hidden trait-value" style="display:none;">'+character.artifacts.cast.noo_interface.inhibit+'</span></span></span>');}
			if (character.artifacts.cast.noo_interface.augment > 0) {$('#artifacts-view #noo_interface').append('<span class="detail-row" id="noo_augment"><span class="row-label">augment(<span class="augment-trait '+character.artifacts.cast.noo_interface.augmentTrait+'-primary color">'+character.artifacts.cast.noo_interface.augmentTrait+'</span>)</span><span class="detail floatright"><span class="hidden trait-value" style="display:none;">'+character.artifacts.cast.noo_interface.augment+'</span></span></span>');}
			if (character.artifacts.cast.noo_interface.connect_to > 0) {$('#artifacts-view #noo_interface').append('<span class="detail-row" id="noo_connect_to"><span class="row-label">connect_to( )</span><span class="detail floatright"><span class="hidden trait-value" style="display:none;">'+character.artifacts.cast.noo_interface.connect_to+'</span></span></span>');}
			$('#artifacts-view #noo_interface').show();
		}
	}

	//list components
	$.each(character.artifacts.components, function(){
		if (this.deleted) {
			console.log('skipping deleted component');
		} else {
			$('#artifacts-view #component-list').append('<div id="component-'+this.id+'" class="row color INT-tint"><span id="'+this.id+'-'+this.primary[0]+'" class="row-label primary">'+this.primary[0]+'( )</span><span class="detail"><span class="hidden trait-value" style="display:none;">'+this.primary[1]+'</span></span></div>');
			if (this.secondary1[1] > 0) {$('#artifacts-view #component-'+this.id).append('<span id="'+this.id+'-'+this.secondary1[0]+'" class="detail-row">'+this.secondary1[0]+'( )<span class="detail floatright"><span class="hidden trait-value" style="display:none;">'+this.secondary1[1]+'</span></span></span>');}
			if (this.secondary2[1] > 0) {$('#artifacts-view #component-'+this.id).append('<span id="'+this.id+'-'+this.secondary2[0]+'" class="detail-row">'+this.secondary2[0]+'( )<span class="detail floatright"><span class="hidden trait-value" style="display:none;">'+this.secondary2[1]+'</span></span></span>');}
			if (this.secondary3[1] > 0) {$('#artifacts-view #component-'+this.id).append('<span id="'+this.id+'-'+this.secondary3[0]+'" class="detail-row">'+this.secondary3[0]+'( )<span class="detail floatright"><span class="hidden trait-value" style="display:none;">'+this.secondary3[1]+'</span></span></span>');}
			if (this.primary[2] !== '') {$('#artifacts-view #component-'+this.id).append('<span class="detail-row"><span class="notes">'+this.primary[2]+'<span></span>');}
		}
	});
	
	//add dots to casts & components
	$('#artifacts-view .detail').each(function(){
		for (var i = 0; i < 3; i++) {
			if (i < parseInt($(this).children('.hidden').text())) {
				$(this).append('<span class="point filled"></span>');
			} else {
				$(this).append('<span class="empty point"></span>');
			}
		}
	});

	// create speed and entanglement resource monitor
	var styledAthletics = character.skills.Athletics[2],
		styledGuts = character.skills.Guts[2];
	if (styledSkills.skills.Guts){styledGuts = character.skills.Guts[2] + styledSkills.skills.Guts}
	if (styledSkills.skills.Athletics){styledAthletics = character.skills.Athletics[2] + styledSkills.skills.Athletics}
	if (styledAthletics === 1 || styledAthletics === 2) {athSpeed = 1} else if (styledAthletics === 3 || styledAthletics === 4) {athSpeed = 2} else if (styledAthletics > 4) {athSpeed = 3} else {athSpeed = 0}
	if (character.status.body.legs.armor[1] >= 2 && character.status.body.legs.functions.primary < 3) {styledAthletics--;}
	if (character.status.body.legs.armor[1] === 3 && character.status.body.legs.functions.primary < 3) {styledAthletics--;}
	$('#speed-mon .total').empty().append(styledAgi + (character.styles.classes.Agility.spec1[1] * 3) + athSpeed + 3);
	if (parseInt($('#speed-mon .total').text()) < 3) {$('#speed-mon .total').empty().append('3')}
	if (character.status.currentSpeed >= parseInt($('#speed-mon .total').text())) {
		character.status.currentSpeed = parseInt($('#speed-mon .total').text());
		$('#speed-mon .speed-plus').addClass('dim');
	}
	$('#speed-mon .current').empty().append(character.status.currentSpeed);
	if (character.styles.classes.Charisma.spec1[1] > 1) {
		//cha/wil entanglement swap from Analyze Cascade rank 2
		$('#crisis-mon .total').empty().append(styledCha + (character.styles.classes.Willpower.spec1[1] * 3) + styledGuts + 3);
	} else {
		$('#crisis-mon .total').empty().append(styledWil + (character.styles.classes.Willpower.spec1[1] * 3) + styledGuts + 3);
	}
	$('#crisis-mon .current').empty().append(character.status.currentEntanglement);
	if (character.status.currentEntanglement > parseInt($('#crisis-mon .total').text())) {
		$('#crisis-mon .labels').addClass('alert');
	}

	//show help modal if first time a character has been viewed
	if (settings.charFirstRun) {
		$('#modal').empty().append('<h3>Getting Started</h3><p class="swipe help">Swipe left or right to switch views.</p><p class="tap help">Tap any rollable trait to roll it automatically. Tap any button to adjust that trait.</p><p class="taphold help">Press and hold on any trait for more options and information.</p>');
		$('#modal').append('<a id="char-gotit" class="button long finish next">Got it</a>');
		$('#modal #char-gotit').tap(function(){
			settings.charFirstRun = false;
			localStorage.settings = JSON.stringify(settings);
			$('#modal, #modal-shade').fadeOut();
		});
		$('#modal, #modal-shade').show();
	}
	
	
	
	//wait a few milliseconds before setting up tap handlers and other listeners
	clearTimeout(sheetTimer);
	sheetTimer = setTimeout(function(){
	
		//add view resize listener
		$('#container').height($('#skill-view').height()+90);
		$('#skill-view, #combat-view, #status-view, #styles-view, #artifacts-view').resize(function(event) {
			$('#container').height($(event.currentTarget).height()+90);
		});
	
		$('.attribute-row, .skill-row, .defense-row, .attack-row').off().tap(function(e) {
			if ($(e.target).hasClass('button') || $(e.target).hasClass('button-sub-row')) {
				return
			} else {
				e.preventDefault();
				roll(this, 0, 0, e);		
			}
		});
		$('#monitor a').tap(function(){
			updateMonitor(this);
		});
		$('#status .regen a').tap(function(){
			updateRegen(this);
		});
		$('#reload').tap(function(){
			location.reload();
		});
		$('#attacks .reload-button').off().tap(function(event){
			reloadWeapon(event);
		});
		$('#styles-view .button.dead-slide').tap(function(event){
			adjustStyle(event);
		});
		$('.aux-customize').click(function(event){
			customizeAux(event);
		});
		//taphold handlers
		$('#attributes .attribute-row').bind('taphold', attHold);
		$('#skills .skill-row, #combat-skills .skill-row, #skills .unskill-row').bind('taphold', skillHold);
		$('#defenses .row').bind('taphold', defHold);
		$('#status .row, #wounds .body-row').bind('taphold', statHold);
		$('#monitor-inner .monitor-row, #dice-roller').bind('taphold', monHold);
		$('#attacks .attack-row').bind('taphold', attackHold);
		$('#double-attacks .attack-row').bind('taphold', doubleHold);
		$('#style-class-list .style-class-core, #arcane .row,  #extension .row').bind('taphold', styleHold);
		$('#cast .detail-row, #cast .row-label.primary').bind('taphold', castHold);
		$('#component-list .detail-row, #component-list .row-label.primary').bind('taphold', componentHold);	
	}, 200);
}

function filteredShield (componentArray) {
	var comparator = 0,
		theShield;
	if (componentArray.length > 0) {
		$.each(componentArray, function() {
			if (!this.deleted && this.primary[0] === 'shield') {
				if ((this.primary[1] + parseInt(this.secondary1[1]) + parseInt(this.secondary2[1]) + parseInt(this.secondary3[1])) > comparator) {
					comparator = this.primary[1] + parseInt(this.secondary1[1]) + parseInt(this.secondary2[1]) + parseInt(this.secondary3[1]);
					theShield = this;
				}
			}
		});
		if (theShield) {
			return theShield;
		} else {
			return false;
		}
	} else {
		return false;
	}
}