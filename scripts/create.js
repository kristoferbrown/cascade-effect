var validator = 'valid',
	bonusMode = false,
	characterPrototype = {
	meta: {
		id: '',
		name: '',
		concept: ''
	},
	coreAttributes: {
		Strength:	 1,
		Finesse:	  1,
		Perception:   1,
		Stamina:	  1,
		Agility:	  1,
		Wits:		 1,
		Willpower:	1,
		Intelligence: 1,
		Charisma:	 1
	},
	skills: {},
	unrolledSkills: {},
	combatSkills: {},
	attacks: {},
	status: {},
	styles: {},
	artifacts: {
		cast: {},
		components: []
	},
	addenda: {
		customSkills: {
			Strength:	 [],
			Finesse:	  [],
			Perception:   [],
			Stamina:	  [],
			Agility:	  [],
			Wits:		 [],
			Willpower:	[],
			Intelligence: [],
			Charisma:	 []
		},
		auxSet: []
	},
	notes: {
		skillNotes: '',
		combatNotes: '',
		statusNotes: '',
		styleNotes: '',
		artifactNotes: ''
	}
},
	newCharacter;

characterPrototype.skills = {
	Stealth:	['Finesse', 'FIN', 0],
	Alertness:  ['Perception', 'PER', 0],
	Investigate:['Perception', 'PER', 0],
	Toughness:  ['Stamina', 'STM', 0],
	Athletics:  ['Agility', 'AGI', 0],
	Drive:	  ['Wits', 'WIT', 0],
	Survival:   ['Wits', 'WIT', 0],
	Guts:	   ['Willpower', 'WIL', 0],
	Hardware:   ['Intelligence', 'INT', 0],
	Humanities: ['Intelligence', 'INT', 0],
	Medicine:   ['Intelligence', 'INT', 0],
	Science:	['Intelligence', 'INT', 0],
	Software:   ['Intelligence', 'INT', 0],
	Charm:	  ['Charisma', 'CHA', 0],
	Manipulate: ['Charisma', 'CHA', 0]
};
characterPrototype.unrolledSkills = {
	Contacts:   0,
	Languages:  0,
	Resources:  0
};
characterPrototype.combatSkills = {
	Unarmed:	['Strength', 'STR', 0],
	Melee:	  ['Finesse', 'FIN', 0],
	Firearms:   ['Perception', 'PER', 0],
	Ballistics: ['Perception', 'PER', 0],
	Defense:	['Agility', 'AGI', 0],
	Initiative: ['Wits', 'WIT', 0]
};
characterPrototype.status = {
	currentEndurance: 0,
	currentSpeed: 0,
	currentEntanglement: 0,
	body: {
		upper: {
			wounds: 0,
			armor: ['', 0],
			functions: {
				primary: 0,
				augment: 0,
				augmentTrait: '',
				harden: 0,
				store: 0
			}
		},
		lower: {
			wounds: 0,
			armor: ['', 0],
			functions: {
				primary: 0,
				augment: 0,
				augmentTrait: '',
				harden: 0,
				store: 0
			}
		},
		main: {
			wounds: 0,
			armor: ['', 0],
			functions: {
				primary: 0,
				augment: 0,
				augmentTrait: '',
				harden: 0,
				store: 0
			}
		},
		off: {
			wounds: 0,
			armor: ['', 0],
			functions: {
				primary: 0,
				augment: 0,
				augmentTrait: '',
				harden: 0,
				store: 0
			}
		},
		legs: {
			wounds: 0,
			armor: ['', 0],
			functions: {
				primary: 0,
				augment: 0,
				augmentTrait: '',
				harden: 0,
				store: 0
			}
		},
	}
};
characterPrototype.styles = {
	available: 0,
	classes: {
		Strength: {},
		Finesse:	  {},
		Perception:   {},
		Stamina:	  {},
		Agility:	  {},
		Wits:		 {},
		Willpower:	{},
		Intelligence: {},
		Charisma:	 {}
	}
};
$.each(characterPrototype.styles.classes, function(key, value) {
	characterPrototype.styles.classes[key] = {
		core: 0,
		spec1: ['title', 0],
		spec2: ['title', 0],
		spec3: ['title', 0],
		aux1: {
			skill: false,
			name: '',
			value: 0
		},
		aux2: {
			skill: false,
			name: '',
			value: 0
		},
		aux3: {
			skill: false,
			name: '',
			value:0
		}
	}
});
characterPrototype.styles.classes.Strength.spec1[0] = 'Super Strength';
characterPrototype.styles.classes.Strength.spec2[0] = 'Power Attack';
characterPrototype.styles.classes.Strength.spec3[0] = 'Damage +';

characterPrototype.styles.classes.Finesse.spec1[0] = 'Deft Combat';
characterPrototype.styles.classes.Finesse.spec2[0] = 'Ambidexterity';
characterPrototype.styles.classes.Finesse.spec3[0] = 'Melee +';

characterPrototype.styles.classes.Perception.spec1[0] = 'Super Senses';
characterPrototype.styles.classes.Perception.spec2[0] = 'Precision';
characterPrototype.styles.classes.Perception.spec3[0] = 'Ranged +';

characterPrototype.styles.classes.Stamina.spec1[0] = 'Resilience';
characterPrototype.styles.classes.Stamina.spec2[0] = 'Endurance';
characterPrototype.styles.classes.Stamina.spec3[0] = 'Regeneration';

characterPrototype.styles.classes.Agility.spec1[0] = 'Super Speed';
characterPrototype.styles.classes.Agility.spec2[0] = 'Mobility';
characterPrototype.styles.classes.Agility.spec3[0] = 'Active Defense';

characterPrototype.styles.classes.Wits.spec1[0] = 'Priority';
characterPrototype.styles.classes.Wits.spec2[0] = 'Passive Defense';
characterPrototype.styles.classes.Wits.spec3[0] = 'Precognition';

characterPrototype.styles.classes.Willpower.spec1[0] = 'Entanglement +';
characterPrototype.styles.classes.Willpower.spec2[0] = 'Persistence';
characterPrototype.styles.classes.Willpower.spec3[0] = 'Extropy';

characterPrototype.styles.classes.Intelligence.spec1[0] = 'Analyze Cascade';
characterPrototype.styles.classes.Intelligence.spec2[0] = 'Episemiotics';
characterPrototype.styles.classes.Intelligence.spec3[0] = 'Polymath';

characterPrototype.styles.classes.Charisma.spec1[0] = 'Induce Cascade';
characterPrototype.styles.classes.Charisma.spec2[0] = 'Healing';
characterPrototype.styles.classes.Charisma.spec3[0] = 'Combat Healing';

function beginCharacterCreation() {
	$('#root-menu').hide();
	$('#character-creation #create-step-1 input').val('');
	window.location.hash = 'character-creation/step1';
	
	//populate creation divs
	$.each(characterPrototype.coreAttributes, function( key, value ) {	
		$('#create-attributes').append('<span class="row color '+key+'-primary c-att-row"><span class="row-title">'+key+'</span><span class="detail"><input value="1" class="hidden" style="display:none!important;" id="create-'+key+'"><a class="trait-minus button">-</a><span class="point one"></span><span class="point empty two"></span><span class="point empty three"></span><a class="trait-plus button">+</a></span></span>');
	});
	$.each(characterPrototype.skills, function( key, value ) {	
		$('#create-skills').append('<span class="row color '+value[1]+'-shade c-skill-row"><span class="row-title">'+key+'</span><span class="detail"><input value="0" class="hidden" style="display:none!important;" id="create-'+key+'"><a class="trait-minus dim button">-</a><span class="point empty one"></span><span class="point empty two"></span><span class="point empty three"></span><a class="trait-plus button">+</a></span><span class="detail-row">'+taxonomy.skills[key]+'</span></span>');
	});
	$.each(characterPrototype.combatSkills, function( key, value ) {	
		$('#create-skills').append('<span class="row color '+value[1]+'-shade c-comskill-row"><span class="row-title">'+key+'</span><span class="detail"><input value="0" class="hidden" style="display:none!important;" id="create-'+key+'"><a class="trait-minus dim button">-</a><span class="point empty one"></span><span class="point empty two"></span><span class="point empty three"></span><a class="trait-plus button">+</a></span><span class="detail-row">'+taxonomy.skills[key]+'</span></span>');
	});
	$.each(characterPrototype.unrolledSkills, function( key, value ) {	
		$('#create-skills').append('<span class="row c-unskill-row"><span class="row-title">'+key+'</span><span class="detail"><input value="0" class="hidden" style="display:none!important;" id="create-'+key+'"><a class="trait-minus dim button">-</a><span class="point empty one"></span><span class="point empty two"></span><span class="point empty three"></span><a class="trait-plus button">+</a></span><span class="detail-row">'+taxonomy.skills[key]+'</span></span>');
	});

	//append descriptions to traits, this is a hacky way to do this, but it's fiiiiiiiiiinnnnnnnnne
	$('.c-att-row.Strength-primary').append('<span class="clear"></span><div class="descriptor-container"><div class="top-descriptor">Offensive</div><div class="bottom-descriptor">Unarmed</div></div><span class="detail-row">Ability to move weight and deal damage in combat.</span>');
	$('.c-att-row.Finesse-primary').append('<span class="clear"></span><div class="descriptor-container"><div class="top-descriptor">Offensive</div><div class="bottom-descriptor">Melee</div></div><span class="detail-row">Coordination, manual dexterity, and abilty to land a hit in close combat.</span>');
	$('.c-att-row.Perception-primary').append('<span class="clear"></span><div class="descriptor-container"><div class="top-descriptor">Offensive</div><div class="bottom-descriptor">Ranged</div></div><span class="detail-row">Sharp senses, alertness, and good aim with ranged weapons.</span>');
	$('.c-att-row.Stamina-primary').append('<span class="clear"></span><div class="descriptor-container"><div class="top-descriptor">Defensive</div><div class="bottom-descriptor">Unarmed</div></div><span class="detail-row">Ability to continue acting despite exhaustion and injuries.</span>');
	$('.c-att-row.Agility-primary').append('<span class="clear"></span><div class="descriptor-container"><div class="top-descriptor">Defensive</div><div class="bottom-descriptor">Melee</div></div><span class="detail-row">Quickness and skill when moving your entire body or dodge melee attacks.</span>');
	$('.c-att-row.Wits-primary').append('<span class="clear"></span><div class="descriptor-container"><div class="top-descriptor">Defensive</div><div class="bottom-descriptor">Ranged</div></div><span class="detail-row">How fast you can think and react under pressure or avoid ranged attacks.</span>');
	$('.c-att-row.Willpower-primary').append('<span class="clear"></span><div class="descriptor-container"><div class="top-descriptor">Mental</div><div class="bottom-descriptor">Extropy</div></div><span class="detail-row">Ability to ignore coercion, temptation, and fear.</span>');
	$('.c-att-row.Intelligence-primary').append('<span class="clear"></span><div class="descriptor-container"><div class="top-descriptor">Mental</div><div class="bottom-descriptor">Avatar</div></div><span class="detail-row">Ability to learn, comprehend, research, and recall.</span>');
	$('.c-att-row.Charisma-primary').append('<span class="clear"></span><div class="descriptor-container"><div class="top-descriptor">Mental</div><div class="bottom-descriptor">Proxy</div></div><span class="detail-row">Social skills, self confidence, and likabilty.</span>');
	
	//rig the buttons to work
	$('#create-finish-step-1').show();
	$('#finish-character').hide();
	$('#cancel-create').tap(function(){
		location.reload();
	});
	$('#create-step-2-prev').tap(function(){
		createStepOne();
	});
	$('#create-step-3-prev').tap(function(){
		createStepTwo();
	});
	$('#create-step-4-prev').tap(function(){
		createStepThree();
	});
	$('#create-fin-prev').tap(function(){
		createStepFour();
	});
	$('#create-finish-step-1').tap(function(){
		createStepTwo();
	});
	$('#create-finish-step-2').tap(function(){
		createStepThree();
	});
	$('#create-finish-step-3').tap(function(){
		createStepFour();
	});
	$('#create-finish-step-4').tap(function(){
		createFinal();
	});
	$('#create-custom-skill').click(function(){
		createSkill(false);
	});
	
	//rig the plus/minus buttons
	$('.trait-plus').tap(function(event){
		traitPlus(event);
	});
	$('.trait-minus').tap(function(event){
		traitMinus(event);
	});
	
	//show the first step
	$('#create-step-1 .starting').show();
	$('#create-step-1 .ending').hide();
	$('#character-creation').show();
	$('#create-step-1').show();
}

function createStepOne() {
	if (window.location.hash.indexOf('step1') === -1) {
		window.location.hash = 'character-creation/step1';
	}
	bonusMode = false;
	$('#create-step-2').fadeOut(200);
	$('#create-fin-prev').hide();
	$('#create-step-1 .ending').hide();
	$('#create-step-1 .starting, #create-step-1 #cancel-create, #create-step-1 .next').delay(210).show();
	$('#create-step-1').delay(220).fadeIn();
	$("html, body").animate({ scrollTop: 0 }, "300");
}

function createStepTwo() {
	if (window.location.hash.indexOf('step2') === -1) {
		window.location.hash = 'character-creation/step2';
	}
	bonusMode = false;
	$('#create-step-1, #create-step-3').fadeOut(200);
	$('#create-step-2 p, #create-step-2 .button').delay(210).show();
	$('#create-step-2').delay(220).fadeIn();
	if ($('#create-step-2 .indicator').text() !== '0') {
		$('#create-step-2 .trait-plus').delay(220).removeClass('counter-dim');
	}
	$("html, body").animate({ scrollTop: 0 }, "300");	
}

function createStepThree() {
	if (window.location.hash.indexOf('step3') === -1) {
		window.location.hash = 'character-creation/step3';
	}
	bonusMode = false;
	$('#character-creation').delay(210).removeClass('bonus-mode');
	$('#create-step-1, #create-step-2, .create-step-4').fadeOut(200);
	$('#create-step-3 p, #create-step-3 .button').delay(210).fadeIn();
	$('#character-creation .detail-row').delay(210).fadeIn();
	$('#create-attributes .counter, #create-skills .counter').delay(220).fadeIn();
	$('#create-custom-skill').delay(200).fadeIn();
	$('#create-step-3').delay(220).fadeIn();
	if ($('#create-step-3 .indicator').text() !== '0') {
		$('#create-step-3 .trait-plus').delay(220).removeClass('counter-dim');
	}
	$("html, body").animate({ scrollTop: 0 }, "300");	
}

function createStepFour() {
	if (window.location.hash.indexOf('step4') === -1) {
		window.location.hash = 'character-creation/step4';
	}
	bonusMode = true;
	$('#character-creation').delay(210).addClass('bonus-mode');
	$('#create-step-1').fadeOut(200);
	$('#finish-character').fadeOut(200);
	$('#create-attributes .counter, #create-skills .counter').fadeOut(200);
	$('#create-step-2 p, #create-step-2 .button.previous, #create-step-2 .button.next').fadeOut(200);
	$('#create-step-3 p, #create-step-3 .button.previous, #create-step-3 .button.next').fadeOut(200);
	//$('#create-step-3').fadeOut(200);
	$('#create-custom-skill').fadeOut(200);
	$('#character-creation .detail-row').fadeOut(200);
	$('.counter-dim').delay(220).removeClass('counter-dim');
	$('#create-step-2, #create-step-3, .create-step-4').delay(220).fadeIn();	
	$("html, body").animate({ scrollTop: 0 }, "300");	
}

function createFinal() {
	if (window.location.hash.indexOf('step5') === -1) {
		window.location.hash = 'character-creation/step5';
	}
	bonusMode = false;
	$('#character-creation').delay(210).removeClass('bonus-mode');
	$('#create-step-1 .starting').hide();
	$('#create-finish-step-1').hide();
	$('#create-step-1 #cancel-create').hide();
	$('#create-step-1 .ending').show();
	$('#create-fin-prev').show();
	$('#finish-character').delay(210).fadeIn();
	$('#create-step-2, #create-step-3, .create-step-4').fadeOut(200);
	$('#character-creation .detail-row').delay(210).fadeIn();
	$('#create-step-1').delay(220).fadeIn();
	$("html, body").animate({ scrollTop: 0 }, "300");
}

function traitPlus(event) {
	var currentVal = parseInt($(event.target).parent().children('input.hidden').val()),
		newVal = currentVal + 1,
		currentCounter = parseInt($(event.target).parent().parent().parent().children('.counter').children('.indicator').text()),
		newCounter = currentCounter,
		counterMax = currentCounter;

	//set counterMax to correct values for the step and engage bonus mode if necessary
	if (bonusMode === true) {
		counterMax = 3;
		currentCounter = parseInt($(event.target).parent().parent().parent().parent().parent().children('.create-step-4').children('.counter').children('.indicator').text());
	} else if ($(event.target).parent().parent().parent().parent().children('h3').text() === 'Attributes') {
		counterMax = 12;
	} else if ($(event.target).parent().parent().parent().parent().children('h3').text() === 'Skills') {
		counterMax =  6;
	}
	
	if (currentCounter > 0 && currentVal < 3) {
		//update counter
		newCounter = currentCounter - 1;
		if (bonusMode) {
			$(event.target).parent().parent().parent().parent().parent().children('.create-step-4').children('.counter').children('.indicator').text(newCounter);
		} else {
			$(event.target).parent().parent().parent().children('.counter').children('.indicator').text(newCounter);
		}
		//adjust point dots
		if (newVal >= 3) {
			newVal = 3;
			$(event.target).addClass('dim');
			$(event.target).parent().children('.one, .two, .three').removeClass('empty');
		} else if (newVal === 2) {
			$(event.target).removeClass('dim');
			$(event.target).parent().children('.one, .two').removeClass('empty');
		} else if (newVal === 1) {
			$(event.target).removeClass('dim');
			$(event.target).parent().children('.trait-minus').removeClass('dim');
			$(event.target).parent().children('.one').removeClass('empty');
		}
		
		//change hidden input to match new value
		$(event.target).parent().children('input.hidden').val(newVal);
	}
	
	if (newCounter <= 0) {
		if (bonusMode) {
			$('.trait-plus').addClass('counter-dim');
			$('#create-finish-step-4').removeClass('dim');
		} else {
			$(event.target).parent().parent().parent().children('.row').children('.detail').children('.trait-plus').addClass('counter-dim');
			$(event.target).parent().parent().parent().parent().children('.next').removeClass('dim');
		}
	} else {
		$(event.target).parent().parent().parent().children('.row').children('.detail').children('.trait-plus').removeClass('counter-dim');
	}
	
	if (newCounter < counterMax) {
		$(event.target).parent().parent().parent().children('.row').children('.detail').children('.trait-minus').removeClass('counter-dim');
	}
}

function traitMinus(event) {
	var currentVal = parseInt($(event.target).parent().children('input.hidden').val()),
		newVal = currentVal - 1,
		currentCounter = parseInt($(event.target).parent().parent().parent().children('.counter').children('.indicator').text()),
		newCounter = currentCounter,
		counterMax = currentCounter;

	//set counterMax to correct values for the step and engage bonus mode if necessary
	if (bonusMode === true) {
		counterMax = 3;
		currentCounter = parseInt($(event.target).parent().parent().parent().parent().parent().children('.create-step-4').children('.counter').children('.indicator').text());
	} else if ($(event.target).parent().parent().parent().parent().children('h3').text() === 'Attributes') {
		counterMax = 12;
	} else if ($(event.target).parent().parent().parent().parent().children('h3').text() === 'Skills') {
		counterMax =  6;
	}

	if (currentCounter < counterMax && currentVal > 0) {
		//update counter
		newCounter = currentCounter + 1;
		if (bonusMode) {
			$(event.target).parent().parent().parent().parent().parent().children('.create-step-4').children('.counter').children('.indicator').text(newCounter);
		} else {
			$(event.target).parent().parent().parent().children('.counter').children('.indicator').text(newCounter);
		}
		
		//adjust dots
		if (newVal === 2) {
			$(event.target).removeClass('dim');
			$(event.target).parent().children('.trait-plus').removeClass('dim');
			$(event.target).parent().children('.three').addClass('empty');
		} else if (newVal === 1) {
			$(event.target).removeClass('dim');
			$(event.target).parent().children('.two, .three').addClass('empty');
		} else if (newVal <= 0) {
			newVal = 0;
			$(event.target).addClass('dim');
			$(event.target).parent().children('.one, .two, .three').addClass('empty');
		}
		
		//change hidden input
		$(event.target).parent().children('input.hidden').val(newVal);
	}
	
	if (newCounter >= counterMax) {
		if (bonusMode) {
			$('.trait-plus').addClass('counter-dim');
		} else {
			$(event.target).parent().parent().parent().children('.row').children('.detail').children('.trait-minus').addClass('counter-dim');
		}
	} else {
		$(event.target).parent().parent().parent().children('.row').children('.detail').children('.trait-minus').removeClass('counter-dim');
		$(event.target).parent().parent().parent().parent().children('.next').addClass('dim');
		$('#create-finish-step-4').addClass('dim');
	}
	
	if (newCounter > 0) {
		if (bonusMode) {
			$('.trait-plus').removeClass('counter-dim');
		} else {
			$(event.target).parent().parent().parent().children('.row').children('.detail').children('.trait-plus').removeClass('counter-dim');
		}
	}
}

function createSkill(insitu) {
	var name,
		att;
	
	$('#create-custom-skill, #create-skill-insitu').slideUp();
	if (insitu) {
		$('#create-skill-insitu').before('<div class="unmodal" id="custom-unmodal" style="display:none;"></div>');
	} else {
		$('#create-custom-skill').before('<div class="unmodal" id="custom-unmodal" style="display:none;"></div>');
	}
	$('#custom-unmodal').empty().append('<h3>Create a Custom Skill</h3>');
	$('#custom-unmodal').append('<div class="row"><label for="custom-s-name">Name</label><input class="long" id="custom-s-name"><div class="detail-row">A skill with this name will be added to your character sheet, whether you put points in it or not. Decide with your GM exactly what scenarios will use this skill.</div></div>');
	$('#custom-unmodal').append('<div class="row"><label for="custom-s-att">Attribute</label><select class="long" id="custom-s-att"><option value="Strength-STR">Strength</option><option value="Finesse-FIN">Finesse</option><option value="Perception-PER">Perception</option><option value="Stamina-STM">Stamina</option><option value="Agility-AGI">Agility</option><option value="Wits-WIT">Wits</option><option value="Willpower-WIL">Willpower</option><option value="Charisma-CHA">Charisma</option><option value="Intelligence-INT">Intelligence</option><option value="Unrolled">Unrolled (No Attribute)</option></select><div class="detail-row">Choose the attribute most commonly rolled with this skill.</div></div>');	
	$('#custom-unmodal').append('<a id="cancel-custom-s" class="button cancel long">Cancel</a>');
	$('#custom-unmodal').append('<a id="save-custom-s" class="button next finish extra-long">Add Skill</a><div class="clear"></div>');
	$('#cancel-custom-s').click(function(){
		$('#custom-unmodal').slideUp();
		$('#create-custom-skill, #create-skill-insitu').slideDown();
	});
	
	$('#save-custom-s').off().click(function(){
		$('#create-custom-skill, create-skill-insitu').slideDown();
		name = encodeInput($('#custom-s-name').val());
		att = $('#custom-s-att').val();
		if (att === 'Unrolled') {
			if (insitu) {
				character.unrolledSkills[name] = 0;
			} else {
				characterPrototype.unrolledSkills[name] = 0;
				$('#create-skills').append('<span class="row c-unskill-row"><span class="row-title">'+decodeInput(name)+'</span><span class="detail"><input value="0" class="hidden" style="display:none!important;" id="create-'+name+'"><a class="trait-minus custom dim button">-</a><span class="point empty one"></span><span class="point empty two"></span><span class="point empty three"></span><a class="trait-plus custom button">+</a></span><span class="detail-row">Unrolled Skill</span></span>');
			}
		} else {
			att = att.split('-');
			if (insitu) {
				character.skills[name] = [att[0],att[1],0];
				character.addenda.customSkills[att[0]] = character.addenda.customSkills[att[0]].concat(name);
			} else {
				characterPrototype.skills[name] = [att[0],att[1],0];
				characterPrototype.addenda.customSkills[att[0]] = characterPrototype.addenda.customSkills[att[0]].concat(name);
				$('#create-skills').append('<span class="row color '+att[0]+'-shade c-skill-row"><span class="row-title">'+decodeInput(name)+'</span><span class="detail"><input value="0" class="hidden" style="display:none!important;" id="create-'+name+'"><a class="trait-minus custom dim button">-</a><span class="point empty one"></span><span class="point empty two"></span><span class="point empty three"></span><a class="trait-plus custom button">+</a></span></span>');
			}
		}
		$('#custom-unmodal').slideUp();
		if (insitu) {
			saveCharacterObject(true);
		} else {
			$('.trait-plus.custom').off().tap(function(event){
				traitPlus(event);
			});
			$('.trait-minus.custom').off().tap(function(event){
				traitMinus(event);
			});
		}
	});

	$('#custom-unmodal').slideDown();
}

function finishCharacter() {
	var existingCharacters,
		appendedCharacters;
	newCharacter = characterPrototype;
	
	//check if stored characters object exists and set new character id
	if (localStorage.characters) {
		existingCharacters = JSON.parse(localStorage.characters);
		newCharacter.meta.id = Object.keys(existingCharacters).length + 1;
	} else {
		existingCharacters = {};
		newCharacter.meta.id = 1;
	}
	
	//populate character meta
	newCharacter.meta.name = $('#create-name').val();
	newCharacter.meta.concept = $('#create-concept').val();
	//newCharacter.addenda.crisisAttribute = $('#create-crisis-attribute').val();
	
	//populate attributes and skills
	$('#create-attributes .c-att-row').each(function(){
		var attributeName = $(this).children().children('input.hidden').attr('id').replace('create-',''),
			attributeValue = parseInt($(this).children().children('input.hidden').val());
		newCharacter.coreAttributes[attributeName] = attributeValue;
	});
	$('.c-skill-row').each(function(){
		var skillName = $(this).children().children('input.hidden').attr('id').replace('create-',''),
			skillValue = parseInt($(this).children().children('input.hidden').val());
		newCharacter.skills[skillName][2] = skillValue;
	});
	$('.c-unskill-row').each(function(){
		var unSkillName = $(this).children().children('input.hidden').attr('id').replace('create-',''),
			unSkillValue = parseInt($(this).children().children('input.hidden').val());
		newCharacter.unrolledSkills[unSkillName] = unSkillValue;
	});
	$('.c-comskill-row').each(function(){
		var comSkillName = $(this).children().children('input.hidden').attr('id').replace('create-',''),
			comSkillValue = parseInt($(this).children().children('input.hidden').val());
		newCharacter.combatSkills[comSkillName][2] = comSkillValue;
	});
	
	//set status values to default
	newCharacter.status.currentEndurance = characterPrototype.coreAttributes.Stamina + 3;
	newCharacter.status.currentSpeed = characterPrototype.coreAttributes.Agility + characterPrototype.skills.Athletics[2] + 3;
	newCharacter.status.currentEntanglement = characterPrototype.coreAttributes.Willpower + characterPrototype.skills.Guts[2] + 3;
	
	localStorage.characters = {};
	existingCharacters[newCharacter.meta.id] = newCharacter;
	appendedCharacters = JSON.stringify(existingCharacters);
	localStorage.characters = appendedCharacters;
	location.reload();
}

function importCharacter() {
	var characterToImport;
	
	$('#import-character').after('<div class="unmodal" id="import-unmodal" style="display:none;"></div>').slideUp();
	$('#import-unmodal').empty().append('<h3>Import a Character</h3><p>Paste character data in this field.</p><textarea rows="8" cols="50" id="character-to-import"></textarea>');
	$('#import-unmodal').append('<a id="really-import" class="button next finish long">Import</a><a id="cancel-char-taphold" class="button cancel long">Cancel</a><div class="clear"></div>');
	
	$('#cancel-char-taphold').click(function(){
		$('#import-unmodal').slideUp();
		$('#import-character').slideDown();
	});
	
	$('#really-import').click(function(){
		characterToImport = $('#character-to-import').val();
		parseCharacter(characterToImport);
	});
	
	$('#import-unmodal').slideDown();
}

function parseCharacter(characterToImport) {
	var parsedCharacter;

	try {
		parsedCharacter = JSON.parse(characterToImport);
		parsedCharacter.meta.id = Object.keys(characters).length + 1;
		characters[parsedCharacter.meta.id] = parsedCharacter;
		
		validateCharacterObject(parsedCharacter.coreAttributes, 'an attribute', 0, 3);
		validateCharacterObject(parsedCharacter.skills, 'a skill', 0, 3);
		validateCharacterObject(parsedCharacter.combatSkills, 'a combat skill', 0, 3);
		validateCharacterObject(parsedCharacter.unrolledSkills, 'an unrolled skill', 0, 3);
		validateCharacterObject(parsedCharacter.attacks, 'a value in an attack', 0, 9);
		validateCharacterObject(parsedCharacter.styles, 'a style', 0, 3);
	}
	catch(error) {
		validator = 'the syntax did not parse correctly.';
	}

	//save character if global validator is true, otherwise reset it
	if (validator === 'valid') {
		localStorage.characters = JSON.stringify(characters);
		location.reload();
	} else {
		$('#modal p.error').remove();
		$('#modal').append('<p class="error">Your character data is invalid because ' + validator + ' Please edit it and try again.</p>');
		validator = 'valid';
	}
}

function validateCharacterObject(object, errorDesc, min, max) {
	//if global validator is true loops through all non inherited properties in object, if any property is an invalid number set global validator to false

	if (validator === 'valid') {
		for (prop in object) {
			if (object.hasOwnProperty(prop)) {
	 
				// if this property is an object, get recursively call this function on it
				if (typeof object[prop] == 'object' && typeof object[prop] !== null) {
					validateCharacterObject(object[prop], errorDesc, min, max);
				} else {

					// if it's not an object or array check if it is a number
					if (typeof object[prop] == 'number') {

					if (object[prop] < min) {
							validator = errorDesc + ' is too low.';
						}
						if (prop === 'core' || prop === 'permanence' || prop === 'avatar' || prop === 'proxy' || prop === 'pneumaplegia' || prop === 'telethesia' || prop === 'schizosomata' || prop === 'chromodynamism' || prop === 'electromagnetism' || prop === 'gravitonertia' || prop === 'abjuration' || prop === 'evocation' || prop === 'sublimation') {
							if (object[prop] > 9) {
								validator = errorDesc + ' is too high.';
							}
						} else if (prop !== 'range' && prop !== 'ammoCurrent' && prop !== 'ammoMax' && prop !== 'available') {
							if (object[prop] > max) {
								validator = errorDesc + ' is too high.';
							}
						}
					}
				}
			}
		}
	}
}