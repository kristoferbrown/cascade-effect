function updateMonitor(clicked) {
	var currentValue;
		
	//operate +/-/new round buttons
	if ($(clicked).attr('class') === 'speed-minus button') {
		$('#speed-mon .current').text(parseInt($('#speed-mon .current').text()) - 1);
		$('#speed-mon .notice').text('-1').finish().fadeIn(200).delay(1000).fadeOut(1000);
	} else if ($(clicked).attr('class') === 'speed-plus button') {
		$('#speed-mon .current').text(parseInt($('#speed-mon .current').text()) + 1);
		$('#speed-mon .notice').text('+1').finish().fadeIn(200).delay(1000).fadeOut(1000);
	} else if ($(clicked).attr('id') === 'new-round') {
		$('#speed-mon .current').text(parseInt($('#speed-mon .current').text()) + parseInt($('#status .regen .current-regen').text()));
		$('#speed-mon .notice').text($('#status .regen .current-regen').text()).finish().fadeIn(200).delay(1000).fadeOut(1000);
	} else if ($(clicked).attr('class') === 'crisis-minus button' || clicked === 'manualEntMinus') {
		$('#crisis-mon .current').text(parseInt($('#crisis-mon .current').text()) - 1);
	} else if ($(clicked).attr('class') === 'crisis-plus button') {
		$('#crisis-mon .current').text(parseInt($('#crisis-mon .current').text()) + 1);
	} else if ($(clicked).hasClass('reload-button')) {
		if ($(clicked).parent().children('.attack-keyword-list').children('#slow-load-desc-taphold').length > 0) {
			$('#speed-mon .current').text(parseInt($('#speed-mon .current').text()) - (8 - character.styles.classes.Finesse.spec2[1]));
			$('#speed-mon .notice').text('-'+(8-character.styles.classes.Finesse.spec2[1])).finish().fadeIn(200).delay(1000).fadeOut(1000);
		} else {
			$('#speed-mon .current').text(parseInt($('#speed-mon .current').text()) - (6 - character.styles.classes.Finesse.spec2[1]));
			$('#speed-mon .notice').text('-'+(6-character.styles.classes.Finesse.spec2[1])).finish().fadeIn(200).delay(1000).fadeOut(1000);
		}
	}
	
	//handle negative or over max speed numbers
	if (parseInt($('#speed-mon .current').text()) >= parseInt($('#speed-mon .total').text())) {
		$('#speed-mon .current').text($('#speed-mon .total').text());
		$('#speed-mon .speed-plus').addClass('dim');
		$('#speed-mon .speed-minus').removeClass('dim');
	} else if (parseInt($('#speed-mon .current').text()) <= 0) {
		$('#speed-mon .current').text('0')
		$('#speed-mon .speed-plus').removeClass('dim');
		$('#speed-mon .speed-minus').addClass('dim');
	} else {
		$('#speed-mon .speed-plus').removeClass('dim');
		$('#speed-mon .speed-minus').removeClass('dim');
	}
	
	//handle negative or over limit numbers
	if (parseInt($('#crisis-mon .current').text()) > parseInt($('#crisis-mon .total').text())) {
		$('#crisis-mon .labels').addClass('alert');
	} else if (parseInt($('#crisis-mon .current').text()) <= 0) {
		$('#crisis-mon .current').text(0);
		$('#crisis-mon .crisis-minus').addClass('dim');
	} else {
		$('#crisis-mon .labels').removeClass('alert');
		$('#crisis-mon .crisis-minus').removeClass('dim');
	}
	
	//add alerts for defenses and attacks with speed costs too high
	$('#attacks').children('a').each(function() {
		speedAlert(this);
	})
	$('#defenses').children('a').each(function() {
		speedAlert(this);
	})
	
	//update character model
	character.status.currentSpeed = parseInt($('#speed-mon .current').text());
	character.status.currentEntanglement = parseInt($('#crisis-mon .current').text());

	//reset timer to 1 seconds and save character model at the end
	clearTimeout(timer);
	timer = setTimeout(function(){
		saveCharacterObject(false);
	}, 1000);
}

function speedAlert(trait) {
	if (parseInt($(trait).children('.speed-row').children('.detail').text()) > parseInt($('#speed-mon .current').text())) {
		$(trait).children('.speed-row').addClass('alert');
	} else {
		$(trait).children('.speed-row').removeClass('alert');
	}
	if (parseInt($('#speed-mon .current').text()) < 6) {
		$(trait).children('.reload-button').addClass('alert');
	} else {
		$(trait).children('.reload-button').removeClass('alert');
	}
}

function reloadWeapon(event) {
	var currentAmmo = $(event.currentTarget).parent().children('.ammo-row').children('.detail').text().split(' / '),
		newAmmo = currentAmmo[1]+' / '+currentAmmo[1];
	if ($(event.currentTarget).parent().children('.attack-keyword-list').children('#bow-desc-taphold').length === 0) {
		$(event.currentTarget).parent().children('.ammo-row').children('.detail').text(newAmmo);
		$(event.currentTarget).parent().children('.ammo-meter').children('.ammo-pip').removeClass('empty').addClass('full');
		character.attacks[$(event.currentTarget).parent().attr('id')].ammoCurrent = parseInt($(event.currentTarget).parent().children('.ammo-row').children('.detail').text().split(' / ')[1]);
		$('#double-attacks #'+$(event.currentTarget).parent().attr('id')+'-sub-row .ammo-row').empty().append($(event.currentTarget).siblings('.ammo-row').html());
	} else {
		$(event.currentTarget).parent().children('.ammo-row').children('.detail').text(parseInt(currentAmmo[0]) + 1);
		character.attacks[$(event.currentTarget).parent().attr('id')].ammoCurrent = parseInt($(event.currentTarget).parent().children('.ammo-row').children('.detail').text());
	}
	updateMonitor(event.currentTarget);
}

function newAttack(attackId, attack) {
	if (!$('#monitor').hasClass('hidden')) {
		toggleMonitor();
	}
	$('#attk-unmodal').remove();
	$('#attacks .attack-row').slideDown();
	if (attackId) {
		$('#modal, #modal-shade').hide();
		$('#attacks #'+attackId).slideUp();
		$('#new-attack').slideToggle()
		$('#attacks #'+attackId).before('<div id="attk-unmodal" class="row" style="display:none;"></div>');
		$('#attk-unmodal').empty().append('<span id="attackid-'+attackId+'" class="unmodal-attackId" style="display:none;"></span><h3>Editing '+ attack.name +'</h3>');
	} else {
		$('#new-attack').slideToggle().before('<div id="attk-unmodal" class="row" style="display:none;"></div>');
		$('#attk-unmodal').empty().append('<h4>Create a New...</h4>');
		$('#attk-unmodal').append('<a class="row new-attack-skill-row" id="new-melee-attack">Melee Weapon<span class="detail-row">Close combat weapons like knifes, swords, clubs, or axes.</span></a>');
		$('#attk-unmodal').append('<a class="row new-attack-skill-row" id="new-firearm-attack">Firearm<span class="detail-row">Pistols, shotguns, rifles or other guns.</span></a>');
		$('#attk-unmodal').append('<a class="row new-attack-skill-row" id="new-ballistics-attack">Ballistic Weapon<span class="detail-row">Archery, thrown weapons, and other projectiles that follow an arced path.</span></a>');
		$('#attk-unmodal').append('<a class="row new-attack-skill-row" id="new-unarmed-attack">Fist Weapon<span class="detail-row">Brass knuckles, claws, or any other weapon that uses your unarmed skills.</span></a>');	
		$('#attk-unmodal').append('<a class="row new-attack-skill-row" id="new-dual-attack">Dual Wield Combo<span class="detail-row">Choose two similar existing weapons two dual wield.</span></a>');	
		$('.new-attack-skill-row').click(function() {
			attackStepTwo($(this).attr('id'), attack);
		});
	}
	$('#attk-unmodal').append('<div class="description-container" style="display:none;"></div><div class="new-attack-step-two" style="display:none;"></div>');
	$('#attk-unmodal').append('<a id="cancel-new-attack" class="button cancel long">Cancel</a>');
	$('#cancel-new-attack').tap(function() {
		//on cancel hide modal, show new button, and original attack if there is one
		$('#attk-unmodal, #new-attack').slideToggle();
		if ($('.unmodal-attackId').length > 0) {
			$('.attack-row#'+$('.unmodal-attackId').attr('id').split('-')[1]).slideToggle();
		}		
	});
	$('#attk-unmodal').slideToggle();
	if (attackId) {
		attackStepTwo(attack.skill, attackId, attack);
	}
	//wait for slides to finish then adjust view height
	clearTimeout(slideTimer);
	slideTimer = setTimeout(function(){
		$('html, body').animate({
	    	scrollTop: $("#attk-unmodal").offset().top - 90
		}, 300);
	}, 500);
}

function attackStepTwo(attackType, attackEditId, attackToEdit) {
	var skill;
	if (!attackEditId) {
		$('.new-attack-skill-row').hide();
		$('.new-attack-step-two').append('<div class="row new-attack-name-row"><label for="new-attack-name">Name</label><input class="long" id="new-attack-name"></input></div>');
		$('#attk-unmodal').append('<a id="finish-new-attack" class="button next finish long">Create</a>');
		attackToEdit = {'skill':'none'};
	} else {
		$('.new-attack-step-two').append('<input class="long" style="display:none;" value="'+ attackToEdit.name +'" id="new-attack-name"></input>');
	}
	if (attackType === 'new-melee-attack' || attackToEdit.skill === 'Melee') {
		skill = 'Melee';
		if (!attackEditId) {
			$('#attk-unmodal h4').remove();
			$('#attk-unmodal').prepend('<h3>New Melee Weapon</h3>');
		}
		$('#attk-unmodal').addClass('color FIN-shade');
		$('.new-attack-step-two').append('<div class="row new-attack-damage-row">Damage<span class="new-attack-rolls" style="width:160px;"><select class="short" id="new-attack-dam-dice" style="display:none;"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></input> <span class="melee-dam-str-label">Strength</span> + <select class="short" id="new-attack-dam-bonus"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div>');
		$('.new-attack-step-two').append('<input id="new-attack-range" style="display:none;" value="0"></input>');
		$('.new-attack-step-two').append('<input id="new-attack-clip" style="display:none;" value="0"></input>');
		$('.new-attack-step-two').append('<div class="row new-attack-speed-row"><label for="new-attack-speed">Speed Cost</label><select class="short" id="new-attack-speed"><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></div>');
		//list traits
		$('.new-attack-step-two').append('<div class="row new-attack-keywords hidden"><div class="attack-keywords-header">Attack Traits</div></div>');
		$('.new-attack-keywords').append('<span id="attack-keyword-reach-desc-taphold-unmodal" class="detail-row attack-keyword-reach-desc-taphold keyword-row"><label for="reach">Reach</label><input type="checkbox" name="reach" id="reach" value="Reach"></span>');
		$('.new-attack-keywords').append('<span id="attack-keyword-small-desc-taphold-unmodal" class="detail-row attack-keyword-small-desc-taphold keyword-row"><label for="small">Small</label><input type="checkbox" name="small" id="small" value="Small"></span>');
		$('.new-attack-keywords').append('<span id="attack-keyword-soft-desc-taphold-unmodal" class="detail-row attack-keyword-soft-desc-taphold keyword-row"><label for="soft">Soft</label><input type="checkbox" name="soft" id="soft" value="Soft"></span>');
		$('.new-attack-keywords').append('<span id="attack-keyword-stunning-desc-taphold-unmodal" class="detail-row attack-keyword-stunning-desc-taphold keyword-row"><label for="stunning">Stunning</label><input type="checkbox" name="stunning" id="stunning" value="Stunning"></span>');
		$('.new-attack-keywords').append('<span id="attack-keyword-trip-desc-taphold-unmodal" class="detail-row attack-keyword-trip-desc-taphold keyword-row"><label for="trip">Trip</label><input type="checkbox" name="trip" id="trip" value="Trip"></span>');
		//list artifact functions
		$('.new-attack-step-two').append('<div class="row new-attack-functions hidden"><div class="functions-header">Artifact Functions</div><div class="detail-row primary-function">Primary Function<span class="detail"><select class="short" id="new-attack-primary-function"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span></div></div>');
		$('.new-attack-functions').append('<div class="detail-row secondary-function secondary1">edge( )<span class="detail"><select class="short" id="new-attack-edge-function"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span></div>');
		$('.new-attack-functions').append('<div class="detail-row secondary-function secondary2">phase( )<span class="detail"><select class="short" id="new-attack-phase-function"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span></div>');
		$('.new-attack-functions').append('<div class="detail-row secondary-function secondary3">store( )<span class="detail"><select class="short" id="new-attack-store-function"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span></div>');
	} else if (attackType === 'new-firearm-attack' || attackToEdit.skill === 'Firearms') {
		skill = 'Firearms';
		if (!attackEditId) {
			$('#attk-unmodal h4').remove();
			$('#attk-unmodal').prepend('<h3>New Firearm</h3>');
		}
		$('#attk-unmodal').addClass('color PER-shade');
		$('.new-attack-step-two').append('<div class="row new-attack-damage-row">Damage<span class="new-attack-rolls"><select class="short" id="new-attack-dam-dice"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select> + <select class="short" id="new-attack-dam-bonus"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div>');
		$('.new-attack-step-two').append('<div class="row new-attack-range-row"><label for="new-attack-range">Range</label><select class="short" id="new-attack-range"><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option></select></div>');
		$('.new-attack-step-two').append('<div class="row new-attack-clip-row"><label for="new-attack-clip">Ammo Capacity</label><select class="short" id="new-attack-clip"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option></select></div>');
		$('.new-attack-step-two').append('<div class="row new-attack-speed-row"><label for="new-attack-speed">Speed Cost</label><select class="short" id="new-attack-speed"><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></div>');
		//list traits
		$('.new-attack-step-two').append('<div class="row new-attack-keywords hidden"><div class="attack-keywords-header">Attack Traits</div></div>');
		$('.new-attack-keywords').append('<span id="attack-keyword-automatic-desc-taphold-unmodal" class="detail-row attack-keyword-automatic-desc-taphold keyword-row"><label for="automatic">Automatic</label><input type="checkbox" name="automatic" id="automatic" value="Automatic"></span>');
		$('.new-attack-keywords').append('<span id="attack-keyword-double-desc-taphold-unmodal" class="detail-row attack-keyword-double-desc-taphold keyword-row"><label for="double">Double</label><input type="checkbox" name="double" id="double" value="Double"></span>');
		$('.new-attack-keywords').append('<span id="attack-keyword-extended-magazine-desc-taphold-unmodal" class="detail-row attack-keyword-extended-magazine-desc-taphold keyword-row"><label for="extended_magazine">Extended Magazine</label><input type="checkbox" name="extended_magazine" id="extended_magazine" value="Extended Magazine"></span>');
		$('.new-attack-keywords').append('<span id="attack-keyword-laser-sight-desc-taphold-unmodal" class="detail-row attack-keyword-laser-sight-desc-taphold keyword-row"><label for="laser_sight">Laser Sight</label><input type="checkbox" name="laser_sight" id="laser_sight" value="Laser Sight"></span>');
		$('.new-attack-keywords').append('<span id="attack-keyword-mounted-desc-taphold-unmodal" class="detail-row attack-keyword-mounted-desc-taphold keyword-row"><label for="mounted">Mounted</label><input type="checkbox" name="mounted" id="mounted" value="Mounted"></span>');
		$('.new-attack-keywords').append('<span id="attack-keyword-sawn-desc-taphold-unmodal" class="detail-row attack-keyword-sawn-desc-taphold keyword-row"><label for="sawn">Sawn</label><input type="checkbox" name="sawn" id="sawn" value="Sawn"></span>');
		$('.new-attack-keywords').append('<span id="attack-keyword-scope-desc-taphold-unmodal" class="detail-row attack-keyword-scope-desc-taphold keyword-row"><label for="scope">Scope</label><input type="checkbox" name="scope" id="scope" value="Scope"></span>');
		$('.new-attack-keywords').append('<span id="attack-keyword-shells-desc-taphold-unmodal" class="detail-row attack-keyword-shells-desc-taphold keyword-row"><label for="shells">Shells</label><input type="checkbox" name="shells" id="shells" value="Shells"></span>');
		$('.new-attack-keywords').append('<span id="attack-keyword-silencer-desc-taphold-unmodal" class="detail-row attack-keyword-silencer-desc-taphold keyword-row"><label for="silencer">Silencer</label><input type="checkbox" name="silencer" id="silencer" value="Silencer"></span>');
		$('.new-attack-keywords').append('<span id="attack-keyword-slow-load-desc-taphold-unmodal" class="detail-row attack-keyword-slow-load-desc-taphold keyword-row"><label for="slow-load">Slow Load</label><input type="checkbox" name="slow-load" id="slow-load" value="Slow Load"></span>');
		$('.new-attack-keywords').append('<span id="attack-keyword-small-desc-taphold-unmodal" class="detail-row attack-keyword-small-desc-taphold keyword-row"><label for="small">Small</label><input type="checkbox" name="small" id="small" value="Small"></span>');
		$('.new-attack-keywords').append('<span id="attack-keyword-stunning-desc-taphold-unmodal" class="detail-row attack-keyword-stunning-desc-taphold keyword-row"><label for="stunning">Stunning</label><input type="checkbox" name="stunning" id="stunning" value="Stunning"></span>');
		//list artifact functions
		$('.new-attack-step-two').append('<div class="row new-attack-functions hidden"><div class="functions-header">Artifact Functions</div><div class="detail-row primary-function">Primary Function<span class="detail"><select class="short" id="new-attack-primary-function"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span></div></div>');
		$('.new-attack-functions').append('<div class="detail-row secondary-function secondary1">power( )<span class="detail"><select class="short" id="new-attack-power-function"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span></div>');
		$('.new-attack-functions').append('<div class="detail-row secondary-function secondary2">range( )<span class="detail"><select class="short" id="new-attack-range-function"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span></div>');
		$('.new-attack-functions').append('<div class="detail-row secondary-function secondary3">supply( )<span class="detail"><select class="short" id="new-attack-supply-function"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span></div>');
	} else if (attackType === 'new-ballistics-attack' || attackToEdit.skill === 'Ballistics') {
		skill = 'Ballistics';
		if (!attackEditId) {
			$('#attk-unmodal h4').remove();
			$('#attk-unmodal').prepend('<h3>New Ballistic Weapon</h3>');
		}
		$('#attk-unmodal').addClass('color PER-shade');
		$('.new-attack-step-two').append('<div class="row new-attack-damage-row">Damage<span class="new-attack-rolls"><select class="short" id="new-attack-dam-dice"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select> + <select class="short" id="new-attack-dam-bonus"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div>');
		$('.new-attack-step-two').append('<div class="row new-attack-range-row"><label for="new-attack-range">Range</label><select class="short" id="new-attack-range"><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option></select></div>');
		$('.new-attack-step-two').append('<div class="row new-attack-clip-row"><label for="new-attack-clip">Ammo Capacity</label><select class="short" id="new-attack-clip"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></div>');
		$('.new-attack-step-two').append('<div class="row new-attack-speed-row"><label for="new-attack-speed">Speed Cost</label><select class="short" id="new-attack-speed"><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></div>');
		//list traits
		$('.new-attack-step-two').append('<div class="row new-attack-keywords hidden"><div class="attack-keywords-header">Attack Traits</div></div>');
		$('.new-attack-keywords').append('<span id="attack-keyword-bow-desc-taphold-unmodal" class="detail-row attack-keyword-bow-desc-taphold keyword-row"><label for="bow">Bow</label><input type="checkbox" name="bow" id="bow" value="Bow"></span>');
		$('.new-attack-keywords').append('<span id="attack-keyword-explosive-desc-taphold-unmodal" class="detail-row attack-keyword-explosive-desc-taphold keyword-row"><label for="explosive">Explosive</label><input type="checkbox" name="explosive" id="explosive" value="Explosive"></span>');
		$('.new-attack-keywords').append('<span id="attack-keyword-high-explosive-desc-taphold-unmodal" class="detail-row attack-keyword-high-explosive-desc-taphold keyword-row"><label for="high-explosive">High Explosive</label><input type="checkbox" name="high-explosive" id="high-explosive" value="High Explosive"></span>');
		$('.new-attack-keywords').append('<span id="attack-keyword-light-explosive-desc-taphold-unmodal" class="detail-row attack-keyword-light-explosive-desc-taphold keyword-row"><label for="light-explosive">Light Explosive</label><input type="checkbox" name="light-explosive" id="light-explosive" value="Light Explosive"></span>');
		$('.new-attack-keywords').append('<span id="attack-keyword-small-desc-taphold-unmodal" class="detail-row attack-keyword-small-desc-taphold keyword-row"><label for="small">Small</label><input type="checkbox" name="small" id="small" value="Small"></span>');
		$('.new-attack-keywords').append('<span id="attack-keyword-stunning-desc-taphold-unmodal" class="detail-row attack-keyword-stunning-desc-taphold keyword-row"><label for="stunning">Stunning</label><input type="checkbox" name="stunning" id="stunning" value="Stunning"></span>');
		$('.new-attack-keywords').append('<span id="attack-keyword-thrown-desc-taphold-unmodal" class="detail-row attack-keyword-thrown-desc-taphold keyword-row"><label for="thrown">Thrown</label><input type="checkbox" name="thrown" id="thrown" value="Thrown"></span>');
		//list artifact functions
		$('.new-attack-step-two').append('<div class="row new-attack-functions hidden"><div class="functions-header">Artifact Functions</div><div class="detail-row primary-function">Primary Function<span class="detail"><select class="short" id="new-attack-primary-function"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span></div></div>');
		$('.new-attack-functions').append('<div class="detail-row secondary-function secondary1">power( )<span class="detail"><select class="short" id="new-attack-power-function"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span></div>');
		$('.new-attack-functions').append('<div class="detail-row secondary-function secondary2">range( )<span class="detail"><select class="short" id="new-attack-range-function"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span></div>');
		$('.new-attack-functions').append('<div class="detail-row secondary-function secondary3">supply( )<span class="detail"><select class="short" id="new-attack-supply-function"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span></div>');
	} else if (attackType === 'new-unarmed-attack' || attackToEdit.skill === 'Unarmed') {
		skill = 'Unarmed';
		if (!attackEditId) {
			$('#attk-unmodal h4').remove();
			$('#attk-unmodal').prepend('<h3>New Fist Weapon</h3>');
		}
		$('#attk-unmodal').addClass('color STR-shade');
		$('.new-attack-step-two').append('<div class="row new-attack-damage-row">Damage<span class="new-attack-rolls" style="width:160px;"><select class="short" id="new-attack-dam-dice" style="display:none;"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select> <span class="melee-dam-str-label">Strength</span> + <select class="short" id="new-attack-dam-bonus"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div>');
		$('.new-attack-step-two').append('<input id="new-attack-range" style="display:none;" value="0"></input>');
		$('.new-attack-step-two').append('<input id="new-attack-clip" style="display:none;" value="0"></input>');
		$('.new-attack-step-two').append('<div class="row new-attack-speed-row"><label for="new-attack-speed">Speed Cost</label><select class="short" id="new-attack-speed"><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></div>');
		//list traits
		$('.new-attack-step-two').append('<div class="row new-attack-keywords hidden"><div class="attack-keywords-header">Attack Traits</div></div>');
		$('.new-attack-keywords').append('<span id="attack-keyword-small-desc-taphold-unmodal" class="detail-row attack-keyword-small-desc-taphold keyword-row"><label for="small">Small</label><input type="checkbox" name="small" id="small" value="Small"></span>');
		$('.new-attack-keywords').append('<span id="attack-keyword-soft-desc-taphold-unmodal" class="detail-row attack-keyword-soft-desc-taphold keyword-row"><label for="soft">Soft</label><input type="checkbox" name="soft" id="soft" value="Soft"></span>');
		$('.new-attack-keywords').append('<span id="attack-keyword-stunning-desc-taphold-unmodal" class="detail-row attack-keyword-stunning-desc-taphold keyword-row"><label for="stunning">Stunning</label><input type="checkbox" name="stunning" id="stunning" value="Stunning"></span>');
		$('.new-attack-keywords').append('<span id="attack-keyword-trip-desc-taphold-unmodal" class="detail-row attack-keyword-trip-desc-taphold keyword-row"><label for="trip">Trip</label><input type="checkbox" name="trip" id="trip" value="Trip"></span>');
		//list artifact functions
		$('.new-attack-step-two').append('<div class="row new-attack-functions hidden"><div class="functions-header">Artifact Functions</div><div class="detail-row primary-function">Primary Function<span class="detail"><select class="short" id="new-attack-primary-function"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span></div></div>');
		$('.new-attack-functions').append('<div class="detail-row secondary-function secondary1">edge( )<span class="detail"><select class="short" id="new-attack-edge-function"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span></div>');
		$('.new-attack-functions').append('<div class="detail-row secondary-function secondary2">phase( )<span class="detail"><select class="short" id="new-attack-phase-function"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span></div>');
		$('.new-attack-functions').append('<div class="detail-row secondary-function secondary3">store( )<span class="detail"><select class="short" id="new-attack-store-function"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span></div>');
	} else if (attackType === 'new-dual-attack') {
		$('#attk-unmodal h4').empty().append('New Dual Wield Combo');
		$('#attk-unmodal .new-attack-step-two').append('<p class="dual-wield-desc">Select a weapon for your main hand.</p>');
		$('#attk-unmodal .new-attack-name-row').remove();
		$('#finish-new-attack').hide();
		$.each(character.attacks, function( key, value ) {
			//the classes in these rows are split and parsed later, take heed when adding or changing them
			if (!this.deleted) {
				if (value.keywords && (value.keywords.indexOf('Bow') !== -1 || value.keywords.indexOf('Mounted') !== -1 || value.keywords.indexOf('Light Explosive') !== -1 || value.keywords.indexOf('High Explosive') !== -1 || value.keywords.indexOf('Explosive') !== -1)) {
					console.log('skipping listing an attack with a keyword incompatible with dual wielding: '+value.name);
				} else {
					if (value.skill === 'Melee') {
						$('#attk-unmodal .new-attack-step-two').append('<a class="new-attack-dual-row-main row color Finesse-primary" id="mainattack-'+value.skill+'-'+ key +'"><span class="attack-name">'+ value.name +'</span></a>');
					} else if (value.skill === 'Unarmed') {
						$('#attk-unmodal .new-attack-step-two').append('<a class="new-attack-dual-row-main row color Strength-primary" id="mainattack-'+value.skill+'-'+ key +'"><span class="attack-name">'+ value.name +'</span></a>');
					} else {
						$('#attk-unmodal .new-attack-step-two').append('<a class="new-attack-dual-row-main row color Perception-primary" id="mainattack-'+value.skill+'-'+ key +'"><span class="attack-name">'+ value.name +'</span></a>');
					}
				}
			}
		});
		$('.new-attack-dual-row-main').click(function(){
			$('#attk-unmodal .dual-wield-desc').empty().append('Select a similar weapon for your off hand.');
			$(this).siblings('.new-attack-dual-row-main').remove();
			$(this).hide();
			$.each(character.attacks, function( key, value ) {
				if (!this.deleted) {
					if (value.keywords && (value.keywords.indexOf('Bow') !== -1 || value.keywords.indexOf('Mounted') !== -1 || value.keywords.indexOf('Light Explosive') !== -1 || value.keywords.indexOf('High Explosive') !== -1 || value.keywords.indexOf('Explosive') !== -1)) {
						console.log('skipping listing an attack with a keyword incompatible with dual wielding: '+value.name);
					} else {
						if (value.skill === $('.new-attack-dual-row-main').attr('id').split('-')[1] || (value.skill === 'Melee' && $('.new-attack-dual-row-main').attr('id').split('-')[1] === 'Unarmed') || (value.skill === 'Unarmed' && $('.new-attack-dual-row-main').attr('id').split('-')[1] === 'Melee')) {
							if (key === $('#attk-unmodal .new-attack-dual-row-main').attr('id').split('-')[2]) {
								$('#attk-unmodal .new-attack-step-two').append('<a class="new-attack-dual-row-off row color '+value.skill+'-skillcolor-primary" id="offattack-'+ key +'"><span class="attack-name">Duplicate of '+ value.name +'</span></a>');
							} else {
								$('#attk-unmodal .new-attack-step-two').append('<a class="new-attack-dual-row-off row color '+value.skill+'-skillcolor-primary" id="offattack-'+ key +'"><span class="attack-name">'+ value.name +'</span></a>');
							}
						}
					}
				}
			});
			$('.new-attack-dual-row-off').click(function(event){
				finalizeDualAttack(event);
			});
		});
	}
	if (attackEditId) {
		//if editing prepopulate saved values
		$('#new-attack-dam-dice').val(attackToEdit.damage[0]);
		$('#new-attack-dam-bonus').val(attackToEdit.damage[1]);
		$('#new-attack-range').val(attackToEdit.range);
		$('#new-attack-clip').val(attackToEdit.ammoMax);
		$('#new-attack-speed').val(attackToEdit.speedCost);
		if (attackToEdit.keywords && attackToEdit.keywords.length > 0) {
			$(attackToEdit.keywords).each(function(i,e){
				$('#attk-unmodal .new-attack-keywords input[value="'+attackToEdit.keywords[i]+'"]').prop('checked', true);
			});
		}
		$('#new-attack-primary-function').val(attackToEdit.functions.primary);
		$('.new-attack-functions .secondary1 select').val(attackToEdit.functions.secondary1[1]);
		$('.new-attack-functions .secondary2 select').val(attackToEdit.functions.secondary2[1]);
		$('.new-attack-functions .secondary3 select').val(attackToEdit.functions.secondary3[1]);
		//add save button
		$('.new-attack-step-two').append('<a id="finish-new-attack" class="button next finish long">Save</a>');
	} else {
		attackToEdit = false;
	}
	//now that keywords and functions are prepopulated lets handle show/hiding things based on them
	//thrown
	if ($('.new-attack-keywords #thrown').is(':checked')) {
		$('.new-attack-clip-row, .new-attack-range-row').hide();
	}
	$('#attack-keyword-thrown-desc-taphold-unmodal').tap(function(){
		$('.new-attack-clip-row, .new-attack-range-row, #attack-keyword-bow-desc-taphold-unmodal').fadeToggle();
	});
	//bow
	if ($('.new-attack-keywords #bow').is(':checked')) {
		$('.new-attack-clip-row label').text('Arrows');
	}
	$('#attack-keyword-bow-desc-taphold-unmodal').tap(function(){
		if ($('.new-attack-keywords #bow').is(':checked')) {
			$('.new-attack-clip-row label').text('Ammo Capacity');
		} else {
			$('.new-attack-clip-row label').text('Arrows');
		}
		$('#attack-keyword-thrown-desc-taphold-unmodal').fadeToggle();
	});
	//stunning
	if ($('.new-attack-keywords #stunning').is(':checked')) {
		$('#new-attack-dam-dice').show();
		$('.melee-dam-str-label').hide();
	}
	$('#attack-keyword-stunning-desc-taphold-unmodal').tap(function(){
		if ($('#attk-unmodal').hasClass('STR-shade') || $('#attk-unmodal').hasClass('FIN-shade')) {
			if ($('.new-attack-keywords #stunning').is(':checked')) {
				$('#new-attack-dam-dice').val(0).hide();
				$('.melee-dam-str-label').show();
			} else {
				$('#new-attack-dam-dice').show();
				$('.melee-dam-str-label').hide();
			}
		}
	});
	//explosives
	$('#attack-keyword-light-explosive-desc-taphold-unmodal').tap(function(){
		$('#attack-keyword-explosive-desc-taphold-unmodal, #attack-keyword-high-explosive-desc-taphold-unmodal').fadeToggle();
	});
	$('#attack-keyword-explosive-desc-taphold-unmodal').tap(function(){
		$('#attack-keyword-light-explosive-desc-taphold-unmodal, #attack-keyword-high-explosive-desc-taphold-unmodal').fadeToggle();
	});
	$('#attack-keyword-high-explosive-desc-taphold-unmodal').tap(function(){
		$('#attack-keyword-explosive-desc-taphold-unmodal, #attack-keyword-light-explosive-desc-taphold-unmodal').fadeToggle();
	});
	
	$('.new-attack-step-two .row').bind('taphold', attackDesc);
	$('#attk-unmodal .functions-header').tap(function(){
		$('#attk-unmodal .new-attack-functions').toggleClass('hidden');
		$('#attk-unmodal .new-attack-functions .detail-row').slideToggle();		
	});
	$('#attk-unmodal .attack-keywords-header').tap(function(){
		if ($('.new-attack-keywords #thrown').is(':checked')) {
			$('#attack-keyword-bow-desc-taphold-unmodal').hide();
		}
		$('#attk-unmodal .new-attack-keywords').toggleClass('hidden');
		$('#attk-unmodal .new-attack-keywords .detail-row').slideToggle();
		//wait for slides to finish then adjust view height and keyword list
		clearTimeout(slideTimer);
		slideTimer = setTimeout(function(){
			if ($('.new-attack-keywords #thrown').is(':checked')) {
				$('#attack-keyword-bow-desc-taphold-unmodal').hide();
			}
			if ($('.new-attack-keywords #bow').is(':checked')) {
				$('#attack-keyword-thrown-desc-taphold-unmodal').hide();
			}
			if ($('.new-attack-keywords #light-explosive').is(':checked')) {
				$('#attack-keyword-explosive-desc-taphold-unmodal, #attack-keyword-high-explosive-desc-taphold-unmodal').hide();
			}
			if ($('.new-attack-keywords #explosive').is(':checked')) {
				$('#attack-keyword-light-explosive-desc-taphold-unmodal, #attack-keyword-high-explosive-desc-taphold-unmodal').hide();
			}
			if ($('.new-attack-keywords #high-explosive').is(':checked')) {
				$('#attack-keyword-explosive-desc-taphold-unmodal, #attack-keyword-light-explosive-desc-taphold-unmodal').hide();
			}
		}, 300);		
	});
	$('#finish-new-attack').tap(function(){
		finishNewAttack(skill, attackEditId, attackToEdit);
	});
	$('#cancel-new-attack').tap(function(){
		$('#attk-unmodal, #attk-unmodal-shade').fadeOut();
	});
	$('.new-attack-step-two').fadeIn();
}

function finishNewAttack(skill, attackEditId, attackToEdit) {
	var attackName, 
		functionPrimary = $('.new-attack-functions .detail-row select')[0],
		functionSecondary1 = $('.new-attack-functions .detail-row select')[1],
		functionSecondary2 = $('.new-attack-functions .detail-row select')[2],
		functionSecondary3 = $('.new-attack-functions .detail-row select')[3],
		attackPrototype = {
			name:         $('#new-attack-name').val(),
			skill:        skill,
			damage:       [parseInt($('#new-attack-dam-dice').val()), parseInt($('#new-attack-dam-bonus').val())],
			range:        parseInt($('#new-attack-range').val()),
			ammoMax:      parseInt($('#new-attack-clip').val()),
			ammoCurrent:  parseInt($('#new-attack-clip').val()),
			speedCost:    parseInt($('#new-attack-speed').val()),
			functions:    {
				primary: parseInt($(functionPrimary).val()),
				secondary1: [$(functionSecondary1).attr('id').split('-')[2], parseInt($(functionSecondary1).val())],
				secondary2: [$(functionSecondary2).attr('id').split('-')[2], parseInt($(functionSecondary2).val())],
				secondary3: [$(functionSecondary3).attr('id').split('-')[2], parseInt($(functionSecondary3).val())]
			}
		};
	if ($('#attk-unmodal .new-attack-keywords input:checked').length > 0) {
		attackPrototype.keywords = [];
		for (var i = 0; i < $('#attk-unmodal .new-attack-keywords input:checked').length; i++) {
			attackPrototype.keywords.push($('#attk-unmodal .new-attack-keywords input:checked:eq('+i+')').val());
		}
	}
	if (attackEditId) {
		attackName = attackEditId;
	} else if (Object.keys(character.attacks).length) {
		attackName = 'attack' + (Object.keys(character.attacks).length + 1);
	} else {
		attackName ='attack0';
	}
	if (attackPrototype.keywords && attackPrototype.keywords.indexOf('Extended Magazine') !== -1) {
		attackPrototype.ammoCurrent = attackPrototype.ammoCurrent * 2;
	}
	if (attackPrototype.name === '') {
		attackPrototype.name = attackName;
	}
	//add attacks to character object
	character.attacks[attackName] = attackPrototype;
	saveCharacterObject(true);
	$('#attk-unmodal, #attk-unmodal-shade').hide();
}

function finalizeDualAttack(event) {
	var dAttackId = 'dAttack0',
		mainAttack = $('#attk-unmodal .new-attack-step-two .new-attack-dual-row-main').attr('id').split('-')[2],
		offAttack = $(event.currentTarget).attr('id').split('-')[1];
	if (character.doubleAttacks) {
		dAttackId = 'dAttack' + (Object.keys(character.doubleAttacks).length + 1);
	} else {
		character.doubleAttacks = {};
	}
	character.doubleAttacks[dAttackId] = [mainAttack, offAttack];
	saveCharacterObject(true);
	$('#attk-unmodal, #attk-unmodal-shade').hide();
}

function attackDesc(event) {
	$('#attk-desc-unmodal').remove();
	if ($(event.target).hasClass('detail-row')) {
		//is a function
		$(event.target).append('<div id="attk-desc-unmodal" style="display:none;"><img src="images/spin-large.gif"></div>');
		if ($(event.target).parent().parent().parent().hasClass('PER-shade')) {
			if ($(event.target).hasClass('primary-function')) {
				$('#attk-desc-unmodal').load('rulebook/equipment-chapter.html .firearms-primary-desc', function() {
					$('#attk-desc-unmodal h4').remove();
				});
			} else if ($(event.target).hasClass('secondary1')) {
				$('#attk-desc-unmodal').load('rulebook/equipment-chapter.html #firearms-power-desc', function() {
					$('#attk-desc-unmodal h4').remove();
				});
			} else if ($(event.target).hasClass('secondary2')) {
				$('#attk-desc-unmodal').load('rulebook/equipment-chapter.html #firearms-range-desc', function() {
					$('#attk-desc-unmodal h4').remove();
				});
			} else if ($(event.target).hasClass('secondary3')) {
				$('#attk-desc-unmodal').load('rulebook/equipment-chapter.html #firearms-supply-desc', function() {
					$('#attk-desc-unmodal h4').remove();
				});
			}			
		} else {
			if ($(event.target).hasClass('primary-function')) {
				$('#attk-desc-unmodal').load('rulebook/equipment-chapter.html .melee-primary-desc', function() {
					$('#attk-desc-unmodal h4').remove();
				});
			} else if ($(event.target).hasClass('secondary1')) {
				$('#attk-desc-unmodal').load('rulebook/equipment-chapter.html #melee-edge-desc', function() {
					$('#attk-desc-unmodal h4').remove();
				});
			} else if ($(event.target).hasClass('secondary2')) {
				$('#attk-desc-unmodal').load('rulebook/equipment-chapter.html #melee-phase-desc', function() {
					$('#attk-desc-unmodal h4').remove();
				});
			} else if ($(event.target).hasClass('secondary3')) {
				$('#attk-desc-unmodal').load('rulebook/equipment-chapter.html #melee-store-desc', function() {
					$('#attk-desc-unmodal h4').remove();
				});
			}			
		}
		$('#attk-desc-unmodal').slideDown();
	} else if ($(event.target).is('label') && $(event.target).parent().hasClass('keyword-row')) {
		//is a keyword
		$(event.currentTarget).find('.attack-keywords-header').after('<div id="attk-desc-unmodal" style="display:none;"><img src="images/spin-large.gif"></div>')
		$('#attk-desc-unmodal').load('rulebook/equipment-chapter.html .'+$(event.target).parent().attr('id').split('-taphold-unmodal')[0]);
		$('#attk-desc-unmodal').slideDown();
	} else {
		//is basic info
		$(event.currentTarget).append('<div id="attk-desc-unmodal" style="display:none;"></div>');
		if ($(event.target).attr('for') === 'new-attack-name' || $(event.target).hasClass('new-attack-name-row') || $(event.target).attr('id') === 'new-attack-name') {
			$('#attk-desc-unmodal').empty().append('<p>A short name or description for this attack.</p>');
		} else if ($(event.target).hasClass('new-attack-damage-row') || $(event.target).hasClass('melee-dam-str-label') || $(event.target).attr('id') === 'new-attack-dam-bonus') {
			$('#attk-desc-unmodal').empty().append('<p>The damage roll for this attack, in the form of <strong>dice + automatic successes</strong>. For melee weapons the value for the number of dice is equal to your Strength score.</p><p>This value is the base damage for the weapon, artifact functions and styles may further increase the damage roll.</p>');		
		} else if ($(event.currentTarget).hasClass('new-attack-range-row')) {
			$('#attk-desc-unmodal').empty().append('<p>Attacks to targets within this range are rolled with the normal attack roll to hit. When rolling to hit targets outside this range replace all automatic successes with dice. Damage and location rolls are not affected.</p><p>This value is the base range for the weapon, artifact functions may further increase the range.</p>');
		} else if ($(event.currentTarget).hasClass('new-attack-clip-row')) {
			$('#attk-desc-unmodal').empty().append('<p>The number of attacks this weapon can make before reloading.</p><p>This value is the base value for this attack, artifact functions can further increase ammo capacity or grant infinite capacity.</p>');
		} else if ($(event.currentTarget).hasClass('new-attack-speed-row')) {
			$('#attk-desc-unmodal').empty().append('<p>The amount of speed deducted when this attack is used.</p><p>This is the base speed cost for this attack, artifact functions can slightly improve this value, but it can never drop below 2.</p>');
		}
		$('#attk-desc-unmodal').slideDown();
	}
}

function attackHold(attack) {
	var attackId = $(attack.target).closest('.attack-row').attr('id'),
		attackToEdit = character.attacks[$(attack.target).closest('.attack-row').attr('id')],
		descriptionId;
		
	//scroll calculation
	if ($('#attk-unmodal').is(':visible') && $('#attk-unmodal').position().top < $(attack.currentTarget).position().top) {
		var height = $(window).scrollTop() - $('#attk-unmodal').height() + $('#attacks .attack-row:hidden').height();
		$('#attacks .attack-row').show();
		$('#attk-unmodal').remove();
		window.scrollTo(0, height);
		$('html, body').animate({ scrollTop: $(attack.currentTarget).offset().top - 150}, 300);
	} else {
		$('html, body').animate({ scrollTop: $(attack.currentTarget).offset().top - 150}, 300);
		$('#attk-unmodal').remove();
		$('#attacks .attack-row').slideDown();
	}
	if (!$('#monitor').hasClass('hidden')) {
		toggleMonitor();
	}
	
	//populate	
	$('#attacks #'+attackId).slideToggle();
	$('#attacks #'+attackId).before('<div id="attk-unmodal" class="'+$('#attacks #'+attackId).attr('class')+'" style="display:none;"></div>');
	if (attackToEdit !== undefined) {
		if ($(attack.target).hasClass('attk-function-taphold')) {
			$('#attk-unmodal').empty().append('<div class="description-container"><img src="images/spin-large.gif"></div>').slideDown();
			descriptionId = attack.target.className.split('-desc')[0].split(' ')[attack.target.className.split('-desc')[0].split(' ').length-1];
			if ($(attack.currentTarget).hasClass('PER-shade')) {
				descriptionId = 'firearms-'+descriptionId+'-desc';
			} else {
				descriptionId = 'melee-'+descriptionId+'-desc';
			}
			$('#attk-unmodal .description-container').load('rulebook/equipment-chapter.html .'+descriptionId, function() {
				$('#attk-unmodal .description-container').first().before('<h4>'+ attackToEdit.name +'</h4><p>A '+attackToEdit.skill+' attack.<p>');
				attackHoldActions(attack, attackId, attackToEdit);
				attackHoldOptions(attack, attackId, attackToEdit);
				$('#attk-unmodal .cancel').remove();
				$('#attk-unmodal').append('<a id="cancel-attack-options" class="button cancel long close-options">Hide Attack Options</a>');
				$('#cancel-attack-options').off().tap(function(){
					$('#attk-unmodal').slideToggle();
					$('#attacks #'+attackId).slideToggle();
					$('html, body').animate({ scrollTop: $(attack.currentTarget).offset().top - $('#attk-unmodal').height() - 200}, 300);
				});
			});
		} else if ($(attack.target).hasClass('attack-keyword')) {
			$('#attk-unmodal').empty().append('<div class="description-container"><img src="images/spin-large.gif"></div>').slideDown();
			descriptionId = attack.target.id.split('-taphold')[0];
			$('#attk-unmodal .description-container').load('rulebook/equipment-chapter.html .attack-keyword-'+descriptionId, function() {
				$('#attk-unmodal .description-container').first().before('<h4>'+ attackToEdit.name +'</h4><p>A '+attackToEdit.skill+' attack.<p>');
				attackHoldActions(attack, attackId, attackToEdit);
				attackHoldOptions(attack, attackId, attackToEdit);
				$('#attk-unmodal .cancel').remove();
				$('#attk-unmodal').append('<a id="cancel-attack-options" class="button cancel long close-options">Hide Attack Options</a>');
				$('#cancel-attack-options').off().tap(function(){
					$('#attk-unmodal').slideToggle();
					$('#attacks #'+attackId).slideToggle();
					$('html, body').animate({ scrollTop: $(attack.currentTarget).offset().top - $('#attk-unmodal').height() - 200}, 300);
				});
			});
		} else {
			$('#attk-unmodal').empty().append('<h4>'+ attackToEdit.name +'</h4><p>A '+attackToEdit.skill+' attack.<p>');
			$('#attk-unmodal').append('<div class="description-container"></div>');
			attackEtymology(attack, attackId, attackToEdit);
			attackHoldActions(attack, attackId, attackToEdit);
			attackHoldOptions(attack, attackId, attackToEdit);
			$('#attk-unmodal').append('<a id="cancel-attack-options" class="button cancel long close-options">Hide Attack Options</a>');
			$('#cancel-attack-options').off().tap(function(){
				$('#attk-unmodal').slideToggle();
				$('#attacks #'+attackId).slideToggle();
				$('html, body').animate({ scrollTop: $(attack.currentTarget).offset().top - $('#attk-unmodal').height() - 200}, 300);
			});
			$('#attk-unmodal').slideDown();
		}
	} else {
		if (attackId === 'evocation-attack') {
			$('#attk-unmodal').empty().append('<h4>Evocation Attack</h4><p class="trait-description">This attack is granted by your ranks in the arcane style <em>Evocation</em>. Evocation attacks cost a point of Entanglment, can only target anything within range, and always hit in the location of your choice.</p><div class="description-container" style="display:none;"></div>');
			attackHoldActions(attack, attackId, attackToEdit);
			$('#attk-unmodal').slideDown();
		} else if (attackId === 'entropic-attack') {
			$('#attk-unmodal').empty().append('<h4>Entropic Attack</h4><p class="trait-description">This attack is granted by your ranks in the arcane style <em>Chromodynamism</em>. Entropic attacks cost a point of Entanglement and can only target anything within a short range and always hit. The target of this attack will be dealt a point of damage to every location after each turn they take for a set number of turns.</p><div class="description-container" style="display:none;"></div>');
			attackHoldActions(attack, attackId, attackToEdit);
			$('#attk-unmodal').slideDown();
		} else if (attackId === 'kinetic-attack') {
			$('#attk-unmodal').empty().append('<h4>Kinetic Attack</h4><p class="trait-description">This attack is granted by your ranks in the arcane style <em>Gravitonertia</em>. Kinetic attacks cost a point of Entanglement, can only target anything within range, and automatically hit in the location of your choice.</p><div class="description-container" style="display:none;"></div>');
			attackHoldActions(attack, attackId, attackToEdit);
			$('#attk-unmodal').slideDown();
		} else if (attackId === 'photonic-attack') {
			$('#attk-unmodal').empty().append('<h4>Photonic Attack</h4><p class="trait-description">This attack is granted by your ranks in the arcane style <em>Electromagnetism</em>. Photonic attacks cost a point of Entanglement, can only target anything within range.</p><div class="description-container" style="display:none;"></div>');
			if (character.styles.arcane.electromagnetism < 3) {
				$('#attk-unmodal').append('<p>At this rank this attack automatically deals damage to the location of your choice.</p>');
			} else if (character.styles.arcane.electromagnetism < 5) {
				$('#attk-unmodal').append('<p>At this rank this attack automatically deals damage to the location of your choice and both adjacent locations.</p>');
			} else if (character.styles.arcane.electromagnetism < 7) {
				$('#attk-unmodal').append('<p>At this rank this attack deals damage to the location all bodily locations on the target.</p>');
			} else if (character.styles.arcane.electromagnetism < 9) {
				$('#attk-unmodal').append('<p>At this rank this attack deals damage to everything in a radius of 1.</p>');
			} else if (character.styles.arcane.electromagnetism === 9) {
				$('#attk-unmodal').append('<p>At this rank this attack deals damage to everything in a radius of 2.</p>');
			}
			$('#attk-unmodal').append('<div class="description-container" style="display:none;"></div>');
			attackHoldActions(attack, attackId, attackToEdit);
			$('#attk-unmodal').slideDown();
		} else {
			$('#attk-unmodal').empty().append('<h4>Unarmed Attack</h4><p class="trait-description">Your basic unarmed attack. Cannot be edited or deleted.</p><div class="description-container"></div>');
			attackEtymology(attack, attackId, 'unarmed');
			attackHoldActions(attack, attackId, attackToEdit);
			$('#attk-unmodal').slideDown();
		}
		$('#attk-unmodal').append('<a id="cancel-attack-options" class="button cancel long close-options">Hide Attack Options</a>');
		$('#cancel-attack-options').off().tap(function(){
			$('#attk-unmodal').slideToggle();
			$('#attacks #'+attackId).slideToggle();
			$('html, body').animate({ scrollTop: $(attack.currentTarget).offset().top - $('#attk-unmodal').height() - 200}, 300);
		});
	}
}

function attackEtymology(attack, attackId, attackToEdit) {
	var attString,
		styledAtt,
		techAtt,
		skillString,
		skillVal,
		styleVal,
		techVal = 0,
		techDamDie = 0,
		techDamBonus = 0;

	//calculate
	if (attackToEdit === 'unarmed' || attackToEdit.skill === 'Unarmed') {
		attString = 'Strength'; styledAtt = styledStr; techAtt = techStr; skillString = 'Unarmed'; styleVal = character.styles.classes.Finesse.spec3[1];
		if (attackToEdit && attackToEdit.functions && attackToEdit.functions.primary > 1) {techVal++;}
		if (attackToEdit && attackToEdit.functions && attackToEdit.functions.secondary1[1] > 0) {techDamBonus = attackToEdit.functions.secondary1[1];}
		if (attackToEdit && attackToEdit.functions && attackToEdit.functions.primary > 2) {techDamDie++;}
	} else if (attackToEdit.skill === 'Melee') {
		attString = 'Finesse'; styledAtt = styledFin; techAtt = techFin; skillString = attackToEdit.skill; styleVal = character.styles.classes.Finesse.spec3[1];
		if (attackToEdit.functions && attackToEdit.functions.primary > 1) {techVal++;}
		if (attackToEdit.functions && attackToEdit.functions.secondary1[1] > 0) {techDamBonus = attackToEdit.functions.secondary1[1];}
		if (attackToEdit.functions && attackToEdit.functions.primary > 2) {techDamDie++;}
	} else {
		attString = 'Perception'; styledAtt = styledPer; techAtt = techPer; skillString = attackToEdit.skill; styleVal = character.styles.classes.Perception.spec3[1];
		if (attackToEdit.functions && attackToEdit.functions.primary > 0) {techVal++;}
		if (attackToEdit.functions && attackToEdit.functions.secondary1[1] > 0) {techDamDie = attackToEdit.functions.secondary1[1];}
		if (attackToEdit.functions && attackToEdit.functions.primary > 1) {techDamDie++;}
	}
	if (styledSkills.comSkills[skillString]) {
		skillVal = styledSkills.comSkills[skillString] + character.combatSkills[skillString][2];
	} else {
		skillVal = character.combatSkills[skillString][2]
	}
	
	//populate
	$('#attk-unmodal .description-container').append('<h4>To Hit</h4><p>'+attString+': ('+(styledAtt-techAtt)+'+'+techAtt+') + '+skillString+': (0+'+skillVal+') + Styles: (0+'+styleVal+') + Functions: ('+techVal+'+0) = <strong>'+$(attack.currentTarget).find('.attack-roll').text()+'</strong></p>');
	if (attackToEdit.keywords && attackToEdit.keywords.indexOf('Stunning') !== -1) {
		$('#attk-unmodal .description-container').append('<h4>Damage</h4><p>Weapon Damage: ('+attackToEdit.damage[0]+'+'+attackToEdit.damage[1]+') + Functions: ('+techDamDie+'+'+techDamBonus+') = <strong>'+$(attack.currentTarget).find('.damage-row .roll').text()+'</strong></p>');
	} else if (attackToEdit === 'unarmed'){
		$('#attk-unmodal .description-container').append('<h4>Damage</h4><p>Strength: ('+(styledStr-techStr)+'+'+techStr+') + Styles: (0+'+character.styles.classes.Strength.spec3[1]+') = <strong>'+$(attack.currentTarget).find('.damage-row .roll').text()+'</strong></p>');
	} else if (attString === 'Finesse' && character.styles.classes.Finesse.spec3[1] >= 1 && styledFin > styledStr && attackToEdit.speedCost < 4) {
		$('#attk-unmodal .description-container').append('<h4>Damage</h4><p>*Finesse: ('+(styledFin-techFin)+'+'+techFin+') + Weapon Damage: ('+attackToEdit.damage[0]+'+'+attackToEdit.damage[1]+') + Styles: (0+'+character.styles.classes.Strength.spec3[1]+') + Functions: ('+techDamDie+'+'+techDamBonus+') = <strong>'+$(attack.currentTarget).find('.damage-row .roll').text()+'</strong></p>');
	} else if (attString !== 'Perception') {
		$('#attk-unmodal .description-container').append('<h4>Damage</h4><p>Strength: ('+(styledStr-techStr)+'+'+techStr+') + Weapon Damage: ('+attackToEdit.damage[0]+'+'+attackToEdit.damage[1]+') + Styles: (0+'+character.styles.classes.Strength.spec3[1]+') + Functions: ('+techDamDie+'+'+techDamBonus+') = <strong>'+$(attack.currentTarget).find('.damage-row .roll').text()+'</strong></p>');
	} else {
		$('#attk-unmodal .description-container').append('<h4>Damage</h4><p>Weapon Damage: ('+attackToEdit.damage[0]+'+'+attackToEdit.damage[1]+') + Functions: ('+techDamDie+'+'+techDamBonus+') = <strong>'+$(attack.currentTarget).find('.damage-row .roll').text()+'</strong></p>');
	}
}

function doubleHold(event) {
	$('#doubele-attacks .attack-row').slideDown();
	$('#double-attacks #'+$(this).attr('id')).slideToggle();
	$('#dattk-unmodal').remove();
	$('#double-attacks #'+$(this).attr('id')).before('<div id="dattk-unmodal" class="'+$('#double-attacks #'+$(this).attr('id')).attr('class')+'" style="display:none;"></div>');
	$('#dattk-unmodal').empty().append('<h4>Combo #'+$(this).attr('id').split('dAttack')[1]+'</h4>')
	$('#dattk-unmodal').append('<p>A dual wielding combo of <strong>'+$(this).find('.main-hand h3').text()+'</strong> and <strong>'+$(this).find('.off-hand h3').text()+'</strong>.</p>');
	$('#dattk-unmodal').append('<a class="row color '+$(this).attr('class').split(' ')[$(this).attr('class').split(' ').length-1].split('-')[0]+'-skillcolor-tint remove-this-combo" id="remove-combo-'+$(this).attr('id')+'">Remove this Combo</a>');
	$('#dattk-unmodal').append('<a id="cancel-dattack-options" class="button cancel long">Cancel</a>');
	$('#cancel-dattack-options').off().click(function(){
		$('#double-attacks .attack-row').slideDown();
		$('#dattk-unmodal').slideUp();
	});
	$('#dattk-unmodal .remove-this-combo').off().click(function() {
		character.doubleAttacks[$(this).attr('id').split('-')[2]] = {'deleted':true};
		saveCharacterObject(false);
		$('#'+$(this).attr('id').split('-')[2]).addClass('to-delete').slideUp();
		if ($('#double-attacks').children('.attack-row').not('#'+$(this).attr('id').split('-')[2]).filter(':visible').length === 0) {
			$('#double-attacks').fadeOut();
		}
		$('#dattk-unmodal').slideUp();
		//wait for slides to finish then adjust view height
		clearTimeout(slideTimer);
		slideTimer = setTimeout(function(){
			$('#double-attacks .to-delete').remove();
		}, 200);
	});
	$('#dattk-unmodal').slideToggle();
}

function attackHoldActions(attack, attackId, attackToEdit) {
	var actionsList = [],
		attackSkill,
		attackSkillValue;
	if (attackId === 'unarmed' || (attackToEdit && attackToEdit.skill === 'Unarmed')) {
		attackSkill = 'Unarmed';
	} else if (attackToEdit) {
		attackSkill = attackToEdit.skill;
	}
	if (attackSkill && styledSkills.comSkills[attackSkill]) {
		attackSkillValue = character.combatSkills[attackSkill][2]+styledSkills.comSkills[attackSkill];
	} else if (attackSkill) {
		attackSkillValue = character.combatSkills[attackSkill][2];
	}
		
	if (attackId === 'evocation-attack') {
		actionsList.push(['Use Lower Rank','Tap to select which rank...']);
		if (character.addenda.auxSet.indexOf('Evocation_percent_20Extensibility') !== -1) {
			actionsList.push(['Extend Damage','Tap to select amount...']);
		}
	} else if ($(attack.currentTarget).hasClass('FIN-shade') || $(attack.currentTarget).hasClass('STR-shade')) {
		//melee or unarmed attack
		actionsList.push(['Disarm','<strong>'+(styledFin-techFin)+' + '+(attackSkillValue+techFin)+'</strong> vs. target\'s <strong> Strength + Melee</strong> sum.</span><span class="detail-row">Speed Cost: 6']);
		if (attackToEdit && attackToEdit.keywords && attackToEdit.keywords.indexOf('Trip') !== -1) {
			actionsList.push(['Trip','<strong>'+parseInt($(attack.currentTarget).find('.attack-roll .dice').text())+' + '+parseInt($(attack.currentTarget).find('.attack-roll .bonus').text())+'</strong> vs. target\'s <strong>Agility + Athletics</strong> roll. </span><span class="detail-row">Speed Cost: 6']);
		} else {
			actionsList.push(['Trip','<strong>'+(styledFin-techFin)+' + '+(attackSkillValue+techFin)+'</strong> vs. target\'s <strong>Agility + Athletics</strong> sum. </span><span class="detail-row">Speed Cost: 6']);
		}
		if (character.styles.classes.Strength.spec2[1] > 0) {
			actionsList.push(['Power Attack','Tap to choose power level...</span><span class="detail-row">Speed Cost: '+(parseInt($(attack.currentTarget).find('.speed-row .detail').text())+1)]);
		}
		if (character.addenda.auxSet.indexOf('Focus_percent_20Strike') !== -1) {
			if ($(attack.currentTarget).hasClass('STR-shade')) {
				actionsList.push(['Focus Strike','Costs 1 Entanglement, does <strong>'+(parseInt($(attack.currentTarget).find('.damage-row .dice').text()))+' + '+(parseInt($(attack.currentTarget).find('.damage-row .bonus').text())+auxStyleList.Focus_percent_20Strike)+'</strong> damage.</span><span class="detail-row">Speed Cost: '+parseInt($(attack.currentTarget).find('.speed-row .detail').text())]);
			} else {
				actionsList.push(['Focus Strike','Costs 1 Entanglement, does <strong>'+(parseInt($(attack.currentTarget).find('.damage-row .dice').text())+auxStyleList.Focus_percent_20Strike)+' + '+(parseInt($(attack.currentTarget).find('.damage-row .bonus').text()))+'</strong> damage.</span><span class="detail-row">Speed Cost: '+parseInt($(attack.currentTarget).find('.speed-row .detail').text())]);
			}
		}
		if ($(attack.currentTarget).hasClass('FIN-shade') && character.styles.classes.Finesse.spec2[1] === 3 && character.styles.classes.Finesse.spec1[1] > 0 && character.styles.classes.Finesse.spec1[1] < 3) {
			actionsList.push(['Whirlwind Strike','Hit up to 3 targets with a single attack.</span><span class="detail-row">Speed Cost: '+parseInt($(attack.currentTarget).find('.speed-row .detail').text())]);		
		} else if ($(attack.currentTarget).hasClass('FIN-shade') && character.styles.classes.Finesse.spec2[1] === 3 && character.styles.classes.Finesse.spec1[1] === 3) {
			actionsList.push(['Whirlwind Strike','Hit all adjacent targets with a single attack.</span><span class="detail-row">Speed Cost: '+parseInt($(attack.currentTarget).find('.speed-row .detail').text())]);		
		}
	} else if ($(attack.currentTarget).hasClass('PER-shade')) {
		//firearm or ballistic attack
		if ($(attack.currentTarget).children('#aim-bonus').length === 0) {
			actionsList.push(['Aim','Rolls '+$('#Ballistics').first().find('.dice').text()+' + '+$('#Ballistics').first().find('.bonus').text()+' and adds results to the next attack with this weapon.</span><span class="detail-row">Speed Cost: 2']);
		} else if ((9 - $('#attributes #Perception .attribute-dots .point.empty').length) > parseInt($(attack.currentTarget).children('#aim-bonus').children('.aim-counter').text())) {
			actionsList.push(['Aim','Rolls '+$('#Ballistics').first().find('.dice').text()+' + '+$('#Ballistics').first().find('.bonus').text()+' and adds results to the next attack with this weapon.</span><span class="detail-row">Speed Cost: 2']);
			actionsList.push(['Aim: Remove Bonus','Manually removes your aim bonus.']);
		} else if ((9 - $('#attributes #Perception .attribute-dots .point.empty').length) <= parseInt($(attack.currentTarget).children('#aim-bonus').children('.aim-counter').text())) {
			actionsList.push(['Aim: Remove Bonus','Manually removes your aim bonus.']);
		}
		if (attackToEdit && attackToEdit.skill === 'Firearms') {
			//firearms only
			if (attackToEdit.keywords && (attackToEdit.keywords.indexOf('Small') !== -1 || attackToEdit.keywords.indexOf('Sawn') !== -1)) {
				actionsList.push(['Point Blank Shot','To Hit: <strong>'+$('#Melee').first().find('.dice').text()+' + '+$('#Melee').first().find('.bonus').text()+'</strong> | Damage: <strong>0 + '+(parseInt($(attack.currentTarget).find('.damage-row .dice').text())+parseInt($(attack.currentTarget).find('.damage-row .bonus').text()))+'</strong></span><span class="detail-row">Speed Cost: 4']);
			}
			if (attackToEdit.keywords && attackToEdit.keywords.indexOf('Automatic') !== -1) {
				if ((attackToEdit.keywords.indexOf('Extended Magazine') !== -1 && attackToEdit.ammoCurrent/(attackToEdit.ammoMax * 2) >= 0.75) || (attackToEdit.keywords.indexOf('Extended Magazine') === -1 && attackToEdit.ammoCurrent/attackToEdit.ammoMax >= 0.75)) {
					actionsList.push(['Auto Fire','To Hit: <strong>'+(parseInt($(attack.currentTarget).find('.attack-roll .dice').text())+9)+' + '+(parseInt($(attack.currentTarget).find('.attack-roll .dice').text()))+'</strong> | Damage: <strong>'+(parseInt($(attack.currentTarget).find('.damage-row .dice').text())+9)+' + '+(parseInt($(attack.currentTarget).find('.attack-roll .bonus').text()))+'</strong> divided between all locations.</span><span class="detail-row">Full Action Speed Cost: 8']);
					actionsList.push(['Spray','To Hit: <strong>'+(parseInt($(attack.currentTarget).find('.attack-roll .dice').text())+3)+' + '+(parseInt($(attack.currentTarget).find('.attack-roll .dice').text()))+'</strong> | Damage: <strong>'+(parseInt($(attack.currentTarget).find('.damage-row .dice').text()))+' + '+(parseInt($(attack.currentTarget).find('.attack-roll .bonus').text()))+'</strong> on up to 6 targets.</span><span class="detail-row">Full Action Speed Cost: 8']);
				}
			}
			if (attackToEdit.keywords && attackToEdit.keywords.indexOf('Double') !== -1) {
				actionsList.push(['Fire Both Barrels','Damage: <strong>'+(parseInt($(attack.currentTarget).find('.damage-row .dice').text())*2)+' + '+(parseInt($(attack.currentTarget).find('.attack-roll .bonus').text())*2)+'</strong></span><span class="detail-row">Speed Cost: '+(parseInt($(attack.currentTarget).find('.speed-row .detail').text())+1)]);
			}
		}
	}
	if ($(attack.currentTarget).hasClass('FIN-shade') || $(attack.currentTarget).hasClass('STR-shade') || $(attack.currentTarget).hasClass('PER-shade')) {
		//list for any		
		if (auxStyleList.Stealth_percent_20Attacks && auxStyleList.Stealth_percent_20Attacks === 1) {
			actionsList.push(['Stealth Attack','Do <strong>'+(parseInt($(attack.currentTarget).find('.damage-row .dice').text())+2)+' + '+(parseInt($(attack.currentTarget).find('.damage-row .bonus').text())+1)+'</strong> damage to chosen location.</span><span class="detail-row">Speed Cost: '+(parseInt($(attack.currentTarget).find('.speed-row .detail').text())+2)]);
		} else if (auxStyleList.Stealth_percent_20Attacks && auxStyleList.Stealth_percent_20Attacks === 2) {
			actionsList.push(['Stealth Attack','Automatically hit for <strong>'+(parseInt($(attack.currentTarget).find('.damage-row .dice').text())+2)+' + '+(parseInt($(attack.currentTarget).find('.damage-row .bonus').text())+2)+'</strong> damage to chosen location.</span><span class="detail-row">Speed Cost: '+(parseInt($(attack.currentTarget).find('.speed-row .detail').text())+2)]);
		} else if (auxStyleList.Stealth_percent_20Attacks && auxStyleList.Stealth_percent_20Attacks === 3) {
			actionsList.push(['Stealth Attack','Automatically hit for <strong>'+(parseInt($(attack.currentTarget).find('.damage-row .dice').text())+3)+' + '+(parseInt($(attack.currentTarget).find('.damage-row .bonus').text())+3)+'</strong> damage to chosen location and ignore armor.</span><span class="detail-row">Speed Cost: '+(parseInt($(attack.currentTarget).find('.speed-row .detail').text())+2)]);
		} else {
			actionsList.push(['Stealth Attack','Damage: <strong>'+(parseInt($(attack.currentTarget).find('.damage-row .dice').text())+1)+' + '+(parseInt($(attack.currentTarget).find('.damage-row .bonus').text())+1)+'</strong></span><span class="detail-row">Speed Cost: '+(parseInt($(attack.currentTarget).find('.speed-row .detail').text())+2)]);
		}
		actionsList.push(['Disadvantaged Attack','To Hit: <strong>'+(parseInt($(attack.currentTarget).find('.attack-roll .dice').text())+parseInt($(attack.currentTarget).find('.attack-roll .bonus').text()))+' + 0</strong></span><span class="detail-row">Speed Cost: '+parseInt($(attack.currentTarget).find('.speed-row .detail').text())]);
	}
	if (attackToEdit && attackToEdit.keywords && (attackToEdit.keywords.indexOf('Explosive') !== -1 || attackToEdit.keywords.indexOf('Light Explosive') !== -1 ||  attackToEdit.keywords.indexOf('High Explosive') !== -1)) {
		//clear list for exploders
		actionsList = [];
	}
	if (actionsList.length > 0) {
		actionsList.sort();
		$('#attk-unmodal').append('<div id="'+attackId+'-actions-list" class="attack-actions-list"><h4>Special Actions</h4></div>');
		$.each(actionsList, function() {
			if (this[1].length > 1) {
				$('.attack-actions-list').append('<a id="'+this[0].toLowerCase().split(' ').join('-')+'-desc" class="row color '+$('#attk-unmodal').attr('class').split(' ')[2].split('-')[0]+'-primary attack-action">'+this[0]+'<span class="detail-row">'+this[1]+'</span></a>');
			} else {
				$('.attack-actions-list').append('<a id="'+this[0].toLowerCase().split(' ').join('-')+'-desc" class="row color '+$('#attk-unmodal').attr('class').split(' ')[2].split('-')[0]+'-primary attack-action">'+this[0]+'</a>');
			}
		});
		$('#attk-unmodal .attack-action').tap(function(event) {
			$('#results, #modal-shade').unbind('tap');
			clearTimeout(modalTimer);
			modalTimer = setTimeout(function(){
				$('#results, #modal-shade').tap(function() {
					$('#modal-shade, #modal, #results').finish().fadeOut();
					$('.action-roll-result').remove();
				});
			}, 300);
			executeAction(event);
		});
		$('#attk-unmodal .attack-action').bind('taphold', actionHold);
	}
}

function actionHold(event) {
	event.preventDefault();
	$('#attk-unmodal .action-unmodal').remove();
	$(event.currentTarget).append('<div class="action-unmodal" style="display:none;"><img src="images/spin-large.gif"></div>');
	if (event.currentTarget.id === 'disadvantaged-attack-desc') {
		$('#attk-unmodal .action-unmodal').empty().append('<p>Use this action if you are using this action at a disadvantge, such as attacking outside of weapon range or in poor visibility. In this action all automatic successes on the attack roll are instead treated as dice.</p>');
	} else if (event.currentTarget.id === 'aim:-remove-bonus-desc') {
		$('#attk-unmodal .action-unmodal').empty().append('<p>Tapping this removes any aim bonus you have gained with this weapon without using them.</p>');
	} else if (event.currentTarget.id === 'fire-both-barrels-desc') {
		$('#attk-unmodal .action-unmodal').empty().append('<p>This action allows you to fire both barrels of a double barreled firearm as a single action. This attack will have its speed cost increased by one, uses up two ammunition, and deals two attacks worth of damage to a single location.</p>');
	} else if (event.currentTarget.id === 'use-lower-rank-desc') {
		$('#attk-unmodal .action-unmodal').empty().append('<p>This action lets you execute an evocation attack at a lower rank than normal in an attempt to be more discrete.</p>');
	} else if (event.currentTarget.id === 'extend-damage-desc') {
		$('#attk-unmodal .action-unmodal').empty().append('<p>This action lets you spend more Entanglement to increase the damage of your evocation attacks as per the style <em>Evocation Extensibility</em>. Each rank you have in this style increase damage by 1+1 per extra point you spend.</p>');
	} else if (event.currentTarget.id === 'power-attack-desc') {
		$('#attk-unmodal .action-unmodal').empty().append('<p>This action allows you to to sacrifice attack accuracy in exhange for more damage as per the style <em>Power Attack</em>. After tapping this action choose how much accuracy you want to sacrifice.</p>');
	} else if (event.currentTarget.id === 'focus-strike-desc') {
		$('#attk-unmodal .action-unmodal').empty().append('<p>This action lets you deal increased damage by spending Entanglement as per the style <em>Focus Strike</em>. Each rank you have in that style adds either a die of damage to melee attacks or a success of damage to unarmed attacks.</p>');
	} else if (event.currentTarget.id === 'whirlwind-strike-desc') {
		$('#attk-unmodal .action-unmodal').empty().append('<p>This action lets you target everyone that is in a space that you could designate as a <em>Zone of Denial</em> (meaning 3 adjacent spaces at rank 1 and all adjacent spaces at rank 3) with a single attack. Make a normal attack roll with its normal speed cost, every selected target must defend against this roll or be dealt its damage to a random location.</p>');
	} else {
		$('#attk-unmodal .action-unmodal').load('rulebook/actions-chapter.html #'+event.currentTarget.id.split('-desc')[0]+' p' );
	}
	$('#attk-unmodal .action-unmodal').slideDown();
}

function attackHoldOptions(attack, attackId, attackToEdit) {
	$('#attk-unmodal').append('<div class="attack-options"><h4>Attack Options</h4><a class="row attack-option color '+$('#attk-unmodal').attr('class').split(' ')[2].split('-')[0]+'-primary" id="edit-attack">Edit '+attackToEdit.name+'</a><a class="row attack-option delete-attack color '+$('#attk-unmodal').attr('class').split(' ')[2].split('-')[0]+'-primary" id="'+ attackId +'">Delete '+attackToEdit.name+'</a><div>');
	$('#edit-attack').click(function() {
		newAttack(attackId, attackToEdit);
	});
	$('.delete-attack').click(function(attackToDelete) {
		$('.delete-attack').text('Are you sure?').append('<span class="armed-button">Delete</span>');
		$('.delete-attack .armed-button').off().click(function(attackToDelete) {
			//delete attack
			character.attacks[$(attackToDelete.target).parent().attr('id')] = {'deleted':true};
			//check for invalidated double attacks
			if (character.doubleAttacks) {
				$.each(character.doubleAttacks, function(key, value) {
					if (value[0] === $(attackToDelete.target).parent().attr('id') || value[1] === $(attackToDelete.target).parent().attr('id')) {
						character.doubleAttacks[key] = {'deleted':true};
					}
				});
			}
			//save character
			characters[character.meta.id] = character;
			localStorage.characters = JSON.stringify(characters);
			resetSheet();
			$('#attk-unmodal, #attk-unmodal-shade').hide();
		});
	});
}

function updateRegen(trait) {
	var currentRegen = parseInt($('#status .regen .current-regen').text()),
		styledAthletics = character.skills.Athletics[2],
		athEndurance,
		minRegen,
		maxRegen;	
	if (styledSkills.skills.Athletics) {styledAthletics = character.skills.Athletics[2] + styledSkills.skills.Athletics;}
	if (styledAthletics === 2 || styledAthletics === 3) {athEndurance = 1} else if (styledAthletics === 4 || styledAthletics === 5) {athEndurance = 2} else if (styledAthletics === 6) {athEndurance = 3} else {athEndurance = 0}	
	minRegen = 0 - (character.coreAttributes.Stamina + athEndurance + character.styles.classes.Stamina.core + (character.styles.classes.Stamina.spec2[1] * 3) + 3);
	maxRegen = parseInt($('#endurance .detail .max-regen').text());
		
	//in/decrement current value, write it to .current-regen and flash the notification icon
	if ($(trait).attr('id') === 'regen-minus' || trait === 'regenMinus') {
		currentRegen--;
		$('#status .regen .current-regen').text(currentRegen);
		$('.regen-alert').finish().text('-1').fadeIn(200).delay(1000).fadeOut(1000);
	} else if ($(trait).attr('id') === 'regen-plus' || trait === 'regenPlus') {
		currentRegen++;
		$('#status .regen .current-regen').text(currentRegen);
		$('.regen-alert').finish().text('+1').fadeIn(200).delay(1000).fadeOut(1000);
	}
	
	//check for and display consciousness or death
	if (parseInt($('#status .regen .current-regen').text()) >= maxRegen) {
		currentRegen = maxRegen;
		$('#status .regen .current-regen').text(currentRegen);
		$('#regen-plus').addClass('dim');
		$('#status .regen').removeClass('unconscious');
		$('#status .regen').removeClass('dead');
	} else if (parseInt($('#status .regen .current-regen').text()) < maxRegen && parseInt($('#status .regen .current-regen').text()) > 0) {
		$('#regen-plus').removeClass('dim');
		$('#status .regen').removeClass('unconscious');
		$('#status .regen').removeClass('dead');
	} else if (parseInt($('#status .regen .current-regen').text()) < 0 && parseInt($('#status .regen .current-regen').text()) > minRegen) {
		$('#regen-plus').removeClass('dim');
		$('#status .regen').addClass('unconscious');
		$('#status .regen').removeClass('dead');
	} else if (parseInt($('#status .regen .current-regen').text()) <= minRegen) {
		$('#regen-plus').removeClass('dim');
		$('#status .regen').removeClass('unconscious');
		$('#status .regen').addClass('dead');
	}
	
	//update character model
	character.status.currentEndurance = parseInt($('#status .regen .current-regen').text());

	//reset timer to 1 seconds and save character model at the end
	clearTimeout(timer);
	timer = setTimeout(function(){
		saveCharacterObject(false);
	}, 1000);
}

function woundHeal(clicked) {
	var location = $(clicked).parent().parent().attr('id'),
		currentWounds = parseInt($(clicked).parent().parent().children('.current-wounds').text()),
		woundMax = parseInt($('.wound-max .detail').text());
	
	if ($(clicked).text() === "Wound")  {
		currentWounds++;
		$(clicked).parent().parent().children('.current-wounds').text(currentWounds);
		$(clicked).parent().parent().children('.wound-dots').children().children('.'+currentWounds).removeClass('empty');
		$(clicked).parent().parent().children('.wound-dots').children().children('.'+currentWounds).addClass("highlight").delay(300).queue(function(){$(this).removeClass("highlight").dequeue();});
		if (currentWounds > woundMax && currentWounds <= woundMax * 2) {
			$(clicked).parent().parent().addClass('disabled-location');
			updateRegen('regenMinus');
		} else if (currentWounds > woundMax * 2 ) {
			$(clicked).parent().parent().addClass('destroyed-location');
			$(clicked).parent().parent().removeClass('disabled-location');
			updateRegen('regenMinus');
		}
	} else {
		$(clicked).parent().parent().children('.wound-dots').children().children('.'+currentWounds).addClass('empty');
		if (currentWounds > 0) {
			currentWounds--;
			$(clicked).parent().parent().children('.current-wounds').text(currentWounds);
			if (currentWounds < woundMax) {
				$(clicked).parent().parent().removeClass('disabled-location');
			} else if (currentWounds < woundMax * 2 && currentWounds >= woundMax) {
				$(clicked).parent().parent().addClass('disabled-location');
				$(clicked).parent().parent().removeClass('destroyed-location');
				updateRegen('regenPlus');
			} else if (currentWounds >= woundMax * 2) {
				updateRegen('regenPlus');
			}
		}
	}
		
	//update character model
	character.status.body.upper.wounds = parseInt($('#wounds #upper .current-wounds').text());
	character.status.body.lower.wounds = parseInt($('#wounds #lower .current-wounds').text());
	character.status.body.main.wounds = parseInt($('#wounds #main .current-wounds').text());
	character.status.body.off.wounds = parseInt($('#wounds #off .current-wounds').text());
	character.status.body.legs.wounds = parseInt($('#wounds #legs .current-wounds').text());
	
	//reset timer to 1 seconds and save character model at the end
	clearTimeout(timer);
	timer = setTimeout(function(){
		saveCharacterObject(false);
	}, 1000);
}

function editArmorStart() {
	//populate location selection unmodal
	$('#armor-unmodal').remove();
	$('#edit-armor').slideToggle().before('<div id="armor-unmodal" class="row" style="display:none;"></div>');
	$('#armor-unmodal').empty().append('<h4>Edit armor for...</h4>');
	$('#armor-unmodal').append('<a class="row edit-armor-location" id="edit-armor-all">All Locations</a>');
	$('#armor-unmodal').append('<a class="row edit-armor-location" id="edit-armor-upper">Upper Body</a>');
	$('#armor-unmodal').append('<a class="row edit-armor-location" id="edit-armor-lower">Lower Body</a>');
	$('#armor-unmodal').append('<a class="row edit-armor-location" id="edit-armor-main">Main Arm</a>');
	$('#armor-unmodal').append('<a class="row edit-armor-location" id="edit-armor-off">Off Arm</a>');
	$('#armor-unmodal').append('<a class="row edit-armor-location" id="edit-armor-legs">Legs</a>');
	$('.edit-armor-location').click(function(event) {
		editArmorFinish($(this).attr('id'));
	});
	$('#armor-unmodal').slideToggle();
}

function editArmorFinish(location) {
	var parsedLocation = location.split('-')[2];
	
	//populate modal correct title and with correct values in form
	if (parsedLocation === 'all') {
		$('#armor-unmodal').empty().append('<h4>Edit Armor Set</h4>');
	} else if (parsedLocation === 'upper') {
		$('#armor-unmodal').empty().append('<h4>Edit Upper Body Armor</h4>');
	} else if (parsedLocation === 'lower') {
		$('#armor-unmodal').empty().append('<h4>Edit Lower Body Armor</h4>');
	} else if (parsedLocation === 'main') {
		$('#armor-unmodal').empty().append('<h4>Edit Main Arm Armor</h4>');
	} else if (parsedLocation === 'off') {
		$('#armor-unmodal').empty().append('<h4>Edit Off Arm Armor</h4>');
	} else if (parsedLocation === 'legs') {
		$('#armor-unmodal').empty().append('<h4>Edit Leg Armor</h4>');
	}
	$('#armor-unmodal').append('<div class="row edit-armor-title-row"><label for="edit-armor-title">Armor Name</label><input class="edit-armor-title" id="edit-armor-title"></div>');
	$('#armor-unmodal').append('<div class="row edit-armor-value-row"><label for="edit-armor-value">Protection</label><select class="short edit-armor-value" id="edit-armor-value"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></div>');
	
	//list artifact functions
	$('#armor-unmodal').append('<div class="row new-armor-functions hidden"><div class="functions-header">Artifact Functions</div><div class="detail-row primary-function">Primary Function<span class="detail"><select class="short" id="new-armor-primary-function"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span></div></div>');
	$('.new-armor-functions').append('<div class="detail-row secondary-function secondary1">augment( )<span class="detail"><select class="short" id="new-armor-augment-function"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select> <select class="semi-short" id="edit-armor-augment-att"><option value="Strength">Strength</option><option value="Finesse">Finesse</option><option value="Agility">Agility</option></select></span></div>');
	$('.new-armor-functions').append('<div class="detail-row secondary-function secondary2">harden( )<span class="detail"><select class="short" id="new-armor-harden-function"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span></div>');
	$('.new-armor-functions').append('<div class="detail-row secondary-function secondary3">store( )<span class="detail"><select class="short" id="new-armor-store-function"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span></div>');
	$('#armor-unmodal .functions-header').tap(function(){
		$('#armor-unmodal .new-armor-functions').toggleClass('hidden');
		$('#armor-unmodal .new-armor-functions .detail-row').slideToggle();
	});

	if (parsedLocation !== 'all') {
		$('#armor-unmodal .edit-armor-title').val(character.status.body[parsedLocation].armor[0]);
		$('#armor-unmodal .edit-armor-value').val(character.status.body[parsedLocation].armor[1]);
		$('#armor-unmodal #new-armor-primary-function').val(character.status.body[parsedLocation].functions.primary);
		$('#armor-unmodal #new-armor-augment-function').val(character.status.body[parsedLocation].functions.augment);
		if (character.status.body[parsedLocation].functions.augmentTrait.length > 0) {
			$('#armor-unmodal #edit-armor-augment-att').val(character.status.body[parsedLocation].functions.augmentTrait);
		}
		$('#armor-unmodal #new-armor-harden-function').val(character.status.body[parsedLocation].functions.harden);
		$('#armor-unmodal #new-armor-store-function').val(character.status.body[parsedLocation].functions.store);
	}
	
	//setup tapholds
	$('#armor-unmodal .detail-row, #armor-unmodal .edit-armor-title-row, #armor-unmodal .edit-armor-value-row').bind('taphold', editArmorHold);
	
	//create cancel and save buttons
	$('#armor-unmodal').append('<a id="cancel-edit-armor" class="button cancel long">Cancel</a>');
	$('#cancel-edit-armor').tap(function(){
		$('#armor-unmodal').slideToggle();
		$('#edit-armor').slideToggle();
	});
	$('#armor-unmodal').append('<a id="save-armor" class="button next finish long">Save</a>');
	
	//save button edits and saves character object
	$('#save-armor').tap(function(){
		if (parsedLocation === 'all') {
			$.each(character.status.body, function() {
				this.armor = [$('#armor-unmodal input.edit-armor-title').val(), parseInt($('#armor-unmodal select.edit-armor-value').val())];
				this.functions.primary = parseInt($('#armor-unmodal #new-armor-primary-function').val());
				this.functions.augment = parseInt($('#armor-unmodal #new-armor-augment-function').val());
				this.functions.augmentTrait = $('#armor-unmodal #edit-armor-augment-att').val();
				this.functions.harden = parseInt($('#armor-unmodal #new-armor-harden-function').val());
				this.functions.store = parseInt($('#armor-unmodal #new-armor-store-function').val());
			});			
		} else {
			character.status.body[parsedLocation].armor = [$('#armor-unmodal input.edit-armor-title').val(), parseInt($('#armor-unmodal select.edit-armor-value').val())];
			character.status.body[parsedLocation].functions.primary = parseInt($('#armor-unmodal #new-armor-primary-function').val());
			character.status.body[parsedLocation].functions.augment = parseInt($('#armor-unmodal #new-armor-augment-function').val());
			character.status.body[parsedLocation].functions.augmentTrait = $('#armor-unmodal #edit-armor-augment-att').val();
			character.status.body[parsedLocation].functions.harden = parseInt($('#armor-unmodal #new-armor-harden-function').val());
			character.status.body[parsedLocation].functions.store = parseInt($('#armor-unmodal #new-armor-store-function').val());
		}
		saveCharacterObject(true);
		$('#armor-unmodal, #armor-unmodal-shade').hide();
	});
}

function charHold(event) {
	event.stopPropagation();
	var charID = event.currentTarget.id,
		characterToEdit = characters[charID];
	$('#char-unmodal').remove();
	$('#modal').empty();
	$('#character-list #'+charID).append('<div class="unmodal" id="char-unmodal" style="display:none;"></div>');
	$('#char-unmodal').append('<a class="row export-character" id="export-' + charID + '">Export Character</a>');
	$('#char-unmodal').append('<a class="row delete-character" id="delete-' + charID + '">Delete Character</a>');
	$('#char-unmodal').append('<a class="cancel-char-taphold button cancel close-options bottom-corners long">Hide Options</a>');
	$('#modal').append('<a class="cancel-char-taphold button cancel long">Close</a>');
	$('.cancel-char-taphold').click(function(event){
		event.stopPropagation();
		$('#char-unmodal').slideUp();
		$('#modal').empty().hide();
	});
	
	$('#char-unmodal .delete-character').click(function(event){
		event.stopPropagation();
		$('#char-unmodal .delete-character').empty().append('Are you sure?<p>Click the Delete button to erase this character. You cannot undo this.</p>').append('<a class="button armed long really-delete floatright">Delete</a>');
		$('#char-unmodal .delete-character .armed.really-delete').click(function(event){
			deleteCharacter(charID);
		});
	});
	
	$('#char-unmodal .export-character').click(function(event){
		event.stopPropagation();
		$('#char-unmodal').slideUp();
		$('#modal .cancel-char-taphold').before('<textarea rows="8" cols="39" id="exported-character">' + JSON.stringify(characterToEdit) + '</textarea>');
		$('#modal, #modal-shade').show();
	});
		
	$('#char-unmodal').slideDown();
}

function deleteCharacter(charID) {
	characters[charID] = {meta: {id: parseInt(charID), deleted: true}};
	localStorage.characters = JSON.stringify(characters);
	$('#character-list #' + charID + ', #modal, #modal-shade').css({ opacity: 0, transition: 'opacity 0.5s'}).slideUp();
}

function editNotes(event) {
	$(event.target).hide();
	$(event.target).parent().children('.notes-wrap').hide();
	$(event.target).parent().children('.save-notes').show();
	$(event.target).parent().children('.notes-input').show().focus();
	$("html, body").animate({ scrollTop: $(document).height() }, "500");
}

function saveNotes(event) {
	var newString = $(event.target).parent().children('.notes-input').val(),
		brString = newString.replace(/\n\r/g,"<hr>"),
		view = $(event.target).parent().attr('id');
	brString = brString.replace(/\n/g,"<hr>");

	$(event.target).parent().children('.notes-wrap').html(brString);
	character.notes[view] = newString;
	saveCharacterObject(false);

	$(event.target).hide();
	$(event.target).parent().children('.notes-input').hide();
	$(event.target).parent().children('.edit-notes').show();
	$(event.target).parent().children('.notes-wrap').show();
}

function editCast() {
	$('#cast-unmodal, #tech-unmodal').remove();
	$('.cast-primary, #edit-cast').slideUp();
	$('#edit-cast').before('<div class="row color INT-tint" id="cast-unmodal" style="display:none;"></div>');
	$('#cast-unmodal').empty().append('<h4>Editing Cast</h4>');
	$('#cast-unmodal').append('<div class="row"><label class="row-label primary" id="edit-bio_interface-desc" for="edit-cast-bio">bio_interface( )</label><select class="short" id="edit-cast-bio"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select> <span id="edit-bio_assemble-desc" class="detail-row"><label for="edit-cast-bio-assembly">assemble( )</label><select class="short" id="edit-cast-bio-assembly"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span> <span id="edit-bio_augment-desc" class="detail-row"><label for="edit-cast-bio-augment">augment( )</label> <select class="short" id="edit-cast-bio-augment"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select> <select class="semi-short" id="edit-cast-bio-augment-att"><option value="Perception">Perception</option><option value="Stamina">Stamina</option><option value="Wits">Wits</option></select> </span> <span id="edit-bio_exo_supply-desc" class="detail-row"><label for="edit-cast-bio-exo">exo_supply( )</label><select class="short" id="edit-cast-bio-exo"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span></div>');
	$('#cast-unmodal').append('<div class="row"><label class="row-label primary" id="edit-cpu_interface-desc" for="edit-cast-cpu">cpu_interface( )</label><select class="short" id="edit-cast-cpu"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select> <span id="edit-cpu_cortex-desc" class="detail-row"><label for="edit-cast-cpu-cortex">exo_cortex( )</label><select class="short" id="edit-cast-cpu-cortex"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span> <span id="edit-cpu_drive-desc" class="detail-row"><label for="edit-cast-cpu-drive">drive( )</label><select class="short" id="edit-cast-cpu-drive"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span> <span id="edit-cpu_simulation-desc" class="detail-row"><label for="edit-cast-cpu-simulation">simulation( )</label><select class="short" id="edit-cast-cpu-simulation"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span></div>');
	$('#cast-unmodal').append('<div class="row"><label class="row-label primary" id="edit-noo_interface-desc" for="edit-cast-noo">noo_interface( )</label><select class="short" id="edit-cast-noo"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select> <span id="edit-noo_inhibit-desc" class="detail-row"><label for="edit-cast-noo-inhibit">inhibit( )</label><select class="short" id="edit-cast-noo-inhibit"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span> <span id="edit-noo_augment-desc" class="detail-row"><label for="edit-cast-noo-augment">augment( )</label><select class="short" id="edit-cast-noo-augment"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select> <select class="semi-short" id="edit-cast-noo-augment-att"><option value="Willpower">Willpower</option><option value="Intelligence">Intelligence</option><option value="Charisma">Charisma</option></select> </span> <span id="edit-noo_connect_to-desc" class="detail-row"><label for="edit-cast-noo-connect">connect_to( )</label><select class="short" id="edit-cast-noo-connect"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span></div>');
	if (character.artifacts.cast.bio_interface) {
		$('#cast-unmodal #edit-cast-bio').val(character.artifacts.cast.bio_interface.core);
		$('#cast-unmodal #edit-cast-bio-assembly').val(character.artifacts.cast.bio_interface.assembly);
		$('#cast-unmodal #edit-cast-bio-augment').val(character.artifacts.cast.bio_interface.augment);
		$('#cast-unmodal #edit-cast-bio-augment-att').val(character.artifacts.cast.bio_interface.augmentTrait);
		$('#cast-unmodal #edit-cast-bio-exo').val(character.artifacts.cast.bio_interface.exo_supply);
		$('#cast-unmodal #edit-cast-cpu').val(character.artifacts.cast.cpu_interface.core);
		$('#cast-unmodal #edit-cast-cpu-cortex').val(character.artifacts.cast.cpu_interface.cortex);
		$('#cast-unmodal #edit-cast-cpu-drive').val(character.artifacts.cast.cpu_interface.drive);
		$('#cast-unmodal #edit-cast-cpu-simulation').val(character.artifacts.cast.cpu_interface.simulation);
		$('#cast-unmodal #edit-cast-noo').val(character.artifacts.cast.noo_interface.core);
		$('#cast-unmodal #edit-cast-noo-inhibit').val(character.artifacts.cast.noo_interface.inhibit);
		$('#cast-unmodal #edit-cast-noo-augment').val(character.artifacts.cast.noo_interface.augment);
		$('#cast-unmodal #edit-cast-noo-augment-att').val(character.artifacts.cast.noo_interface.augmentTrait);
		$('#cast-unmodal #edit-cast-noo-connect').val(character.artifacts.cast.noo_interface.connect_to);		
	}
	$('#cast-unmodal').append('<a id="cancel-edit-cast" class="button cancel long">Cancel</a>');
	$('#cast-unmodal').append('<a id="save-cast" class="button next finish long">Save</a>');
	$('#cast-unmodal #cancel-edit-cast').click(function(){$('#cast-unmodal').slideUp();$('.cast-primary, #edit-cast').slideDown();$('.cast-primary:not(:has(*))').hide();});
	$('#cast-unmodal #save-cast').click(function(){
		var castObject = {
			bio_interface: {
				core: parseInt($('#edit-cast-bio').val()),
				assembly: parseInt($('#edit-cast-bio-assembly').val()),
				augment: parseInt($('#edit-cast-bio-augment').val()),
				augmentTrait: $('#edit-cast-bio-augment-att').val(),
				exo_supply: parseInt($('#edit-cast-bio-exo').val())
			},
			cpu_interface: {
				core: parseInt($('#edit-cast-cpu').val()),
				cortex: parseInt($('#edit-cast-cpu-cortex').val()),
				drive: parseInt($('#edit-cast-cpu-drive').val()),
				simulation: parseInt($('#edit-cast-cpu-simulation').val())
			},
			noo_interface: {
				core: parseInt($('#edit-cast-noo').val()),
				inhibit: parseInt($('#edit-cast-noo-inhibit').val()),
				augment: parseInt($('#edit-cast-noo-augment').val()),
				augmentTrait: $('#edit-cast-noo-augment-att').val(),
				connect_to: parseInt($('#edit-cast-noo-connect').val())
			}
		};
		character.artifacts.cast = castObject;
		saveCharacterObject(true);
	});
	$('#cast-unmodal .detail-row, #cast-unmodal .row-label').bind('taphold', castHold);
	$('#cast-unmodal').slideDown();
}

function newArtifact() {
	$('#comp-unmodal, #tech-unmodal').remove();
	$('#new-artifact').before('<div id="comp-unmodal" class="row color INT-tint" style="display:none;"></div>');
	$('#comp-unmodal').empty().append('<h4>New Component</h4>');
	$('#comp-unmodal').append('<div id="artifact-type"><p>Select a primary function.</p></div><div id="artifact-details"></div>');
	
	$('#comp-unmodal #artifact-type').append('<a id="aperture-select" class="color INT-primary row">aperture( )<p>Allows you to store items and equipment in extradimensional space.</p></a><a id="program-select" class="color INT-primary row">program( )<p>Allows you to store Entanglement and emulate styles.</p></a><a id="shield-select" class="color INT-primary row">shield( )<p>Gives you an energy shield to protect you from damage.</p></a>');
	$('#comp-unmodal #artifact-type a').click(function(){
		$('#comp-unmodal #artifact-details').addClass($(this).attr('id').split('-')[0]);
		$('#comp-unmodal #artifact-type').hide();
		$('#comp-unmodal #artifact-details #'+$(this).attr('id').split('-')[0]+'-details').show();
		$('#comp-unmodal h3').text('New Component Functions');
		$('#comp-unmodal #save-artifact').show();
	});

	$('#comp-unmodal #artifact-details').append('<div id="aperture-details" style="display:none;"><span id="edit-aperture-rowlabel" class="row-label">aperture( )</span><span class="detail"><select class="primary-select short" id="edit-aperture"><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span> <span id="edit-index-detailrow" class="detail-row"><label for="edit-aperture-index">index( )</label><select class="short" id="edit-aperture-index"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span> <span id="edit-range-detailrow" class="detail-row"><label for="edit-aperture-range">range( )</label> <select class="short" id="edit-aperture-range"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span> <span id="edit-volume-detailrow" class="detail-row"><label for="edit-aperture-volume">volume( )</label><select class="short" id="edit-aperture-volume"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span></div>');
	$('#comp-unmodal #artifact-details').append('<div id="program-details" style="display:none;"><span id="edit-program-rowlabel" class="row-label">program( )</span><span class="detail"><select class="primary-select short" id="edit-program"><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span> <span id="edit-capacity-detailrow" class="detail-row"><label for="edit-program-capacity">capacity( )</label><select class="short" id="edit-program-capacity"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span> <span id="edit-complexity-detailrow" class="detail-row"><label for="edit-program-complexity">complexity( )</label><select class="short" id="edit-program-complexity"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span> <span id="edit-usability-detailrow" class="detail-row"><label for="edit-program-usability">usability( )</label><select class="short" id="edit-program-usability"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span> <span id="edit-notes-detailrow" class="detail-row"><label for="edit-program-notes">Program Notes</label><input id="edit-program-notes"></span></div>');
	$('#comp-unmodal #artifact-details').append('<div id="shield-details" style="display:none;"><span id="edit-shield-rowlabel" class="row-label">shield( )</span><span class="detail"><select class="primary-select short" id="edit-shield"><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span> <span id="edit-durability-detailrow" class="detail-row"><label for="edit-shield-durability">durability( )</label><select class="short" id="edit-shield-durability"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select> </span> <span id="edit-recharge-detailrow" class="detail-row"><label for="edit-shield-recharge">recharge( )</label><select class="short" id="edit-shield-recharge"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span> <span id="edit-susability-detailrow" class="detail-row"><label for="edit-shield-usability">usability( )</label><select class="short" id="edit-shield-usability"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span></div>');

	$('#comp-unmodal').append('<a id="cancel-new-artifact" class="button cancel long">Cancel</a>');
	$('#comp-unmodal').append('<a id="save-artifact" style="display:none;" class="button next finish long">Save</a>');
	$('#comp-unmodal #cancel-new-artifact').click(function(){$('#comp-unmodal').slideUp();$('#new-artifact').slideDown();});
	$('#comp-unmodal #save-artifact').click(function(){
		var componentType = $('#comp-unmodal #artifact-details').attr('class'),
			artifactObject = {
			id: character.artifacts.components.length + 1,
			primary: [componentType, parseInt($('#comp-unmodal #'+componentType+'-details #edit-'+componentType).val()), ''],
			secondary1: [$('#comp-unmodal #'+componentType+'-details .detail-row').eq(0).children('select').attr('id').split('-')[2], $('#comp-unmodal #'+componentType+'-details .detail-row').eq(0).children('select').val()],
			secondary2: [$('#comp-unmodal #'+componentType+'-details .detail-row').eq(1).children('select').attr('id').split('-')[2], $('#comp-unmodal #'+componentType+'-details .detail-row').eq(1).children('select').val()],
			secondary3: [$('#comp-unmodal #'+componentType+'-details .detail-row').eq(2).children('select').attr('id').split('-')[2], $('#comp-unmodal #'+componentType+'-details .detail-row').eq(2).children('select').val()]
		};
		if (componentType === 'program') {
			artifactObject.primary[2] = $('#comp-unmodal #'+componentType+'-details .detail-row').children('#edit-program-notes').val();
		}
		character.artifacts.components.push(artifactObject);
		saveCharacterObject(true);
	});	
	$('#comp-unmodal .detail-row, #comp-unmodal .row-label').bind('taphold', componentHold);
	$('#comp-unmodal').slideDown();
	$('#new-artifact').slideUp();
}

function componentHold(component) {
	var componentId = $(component.currentTarget).parents('.row').attr('id').split('-')[1],
		componentToEdit = character.artifacts.components[componentId - 1],
		descriptionId = component.target.id.split('-')[1]+'-desc',
		editing = false;

	//scroll calculation
	if ($('#tech-unmodal').is(':visible') && $('#tech-unmodal').position().top < $(component.target).position().top) {
		var height = $(window).scrollTop() - $('#tech-unmodal').height();
		$('#tech-unmodal').remove();
		window.scrollTo(0, height);
		$('html, body').animate({ scrollTop: $(component.target).offset().top - 160}, 300);
	} else {
		$('html, body').animate({ scrollTop: $(component.target).offset().top - 160}, 300);
		$('#tech-unmodal').remove();
	}
	if (!$('#monitor').hasClass('hidden')) {
		toggleMonitor();
	}
	
	//popalate
	if ($(component.currentTarget).parents('#comp-unmodal').length > 0) {
		editing = true;
		componentToEdit = true;
		if ($(component.currentTarget).hasClass('row')) {
			descriptionId = component.currentTarget.id.split('-')[0]+'-desc';
		} else if ($(component.currentTarget).hasClass('detail-row')) {
			descriptionId = component.currentTarget.id.split('-')[1]+'-desc';
			if (descriptionId === 'usability-desc' && $(component.currentTarget).siblings('#edit-durability-detailrow').length === 1) {
				descriptionId = 's-usability-desc';
			}
		}
	} else {
		if ($(component.currentTarget).hasClass('row')) {
			descriptionId = $(component.currentTarget).children('.row-label').attr('id').split('-')[1]+'-desc';
		} else if (component.currentTarget.id.split('-')[1] === 'usability' && componentToEdit.primary[0] === 'shield') {
			descriptionId = 's-usability-desc';
		}
	}
	if (componentToEdit !== undefined) {
		$('#tech-unmodal').remove();
		$('#artifacts-view .description-open').removeClass('description-open');
		$(component.currentTarget).append('<div class="unmodal" id="tech-unmodal" style="display:none;"></div>').addClass('description-open');
		if (descriptionId === 'notes-desc' || descriptionId === 'undefined-desc') {
			$('#tech-unmodal').empty().append('<h4>Program Notes</h4><p>Use the program notes field to keep track of what is currently stored in the program.</p>');
		} else {
			$('#tech-unmodal').empty().append('<img src="images/spin-large.gif">');
			$('#tech-unmodal').load('rulebook/equipment-chapter.html #'+descriptionId, function() {
				$('#tech-unmodal h4').remove();
				if (!editing) {
					$('#tech-unmodal').append('<h4>'+ componentToEdit.primary[0] +'( ) Options</h4>');
					$('#tech-unmodal').append('<a class="row color INT-primary" id="edit-component">Edit this '+componentToEdit.primary[0]+'( )</a>');
					$('#tech-unmodal').append('<a class="row color INT-primary delete-component" id="'+ componentId +'">Delete this '+componentToEdit.primary[0]+'( )</a>');
				}
				$('#tech-unmodal').append('<a id="cancel-component-options" class="button cancel long close-options">Hide Options</a>');
				$('#cancel-component-options').tap(function(){
					$('#tech-unmodal').slideUp();
					$('html, body').animate({ scrollTop: $(component.currentTarget).offset().top - 160}, 300);
				});
				$('#edit-component').click(function() {
					editComponent(componentId, componentToEdit);
				});
				$('.delete-component').click(function(componentToDelete) {
					character.artifacts.components[componentToDelete.currentTarget.id - 1] = {'deleted':true};
					$('#component-list #component-'+componentToDelete.currentTarget.id).remove();
					$('#modal, #modal-shade').fadeOut();
					saveCharacterObject(false);
				});
			});
			$('#tech-unmodal').slideDown();
		}
	}
}

function editComponent(componentId, componentToEdit) {
	$('#modal, #modal-shade').hide();
	$('#comp-unmodal, #tech-unmodal').remove();
	$('#components #component-'+componentId+'').slideUp();
	$('#components #component-'+componentId+'').after('<div id="comp-unmodal" class="row color INT-tint" style="display:none;"></div>');
	$('#comp-unmodal').empty().append('<h4>Editing Component</h4>');
	$('#comp-unmodal h4').after('<div class="primary"><span id="edit-'+componentToEdit.primary[0]+'-rowlabel" class="row-label">'+componentToEdit.primary[0]+'( )</span><span class="detail"><select class="primary-select short"><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span></div>');
	$('#comp-unmodal .primary').append('<div id="edit-'+componentToEdit.secondary1[0]+'-detailrow" class="detail-row secondary1">'+componentToEdit.secondary1[0]+'( )<span class="detail"><select class="short"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span></div>');
	$('#comp-unmodal .primary').append('<div id="edit-'+componentToEdit.secondary2[0]+'-detailrow" class="detail-row secondary2">'+componentToEdit.secondary2[0]+'( )<span class="detail"><select class="short"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span></div>');
	$('#comp-unmodal .primary').append('<div id="edit-'+componentToEdit.secondary3[0]+'-detailrow" class="detail-row secondary3">'+componentToEdit.secondary3[0]+'( )<span class="detail"><select class="short"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></span></div>');
	if (componentToEdit.primary[0] === 'program') {
		$('#comp-unmodal .primary').append('<div id="edit-notes-detailrow" class="detail-row notes">Program Notes<span class="detail"><input id="edit-program-notes" value="'+componentToEdit.primary[2]+'"></span></div>');
	}
	$('#comp-unmodal .primary .primary-select').val(componentToEdit.primary[1]);
	$('#comp-unmodal .secondary1 select').val(componentToEdit.secondary1[1]);
	$('#comp-unmodal .secondary2 select').val(componentToEdit.secondary2[1]);
	$('#comp-unmodal .secondary3 select').val(componentToEdit.secondary3[1]);
	$('#comp-unmodal').append('<a id="cancel-edit-artifact" class="button cancel long">Cancel</a>');
	$('#comp-unmodal #cancel-edit-artifact').click(function(){$('#comp-unmodal').slideUp();$('#new-artifact').slideDown();$('#components #component-'+componentId+'').slideDown();});
	$('#comp-unmodal').append('<a id="save-component" class="button next finish long">Save</a>');
	$('#comp-unmodal #save-component').click(function(){
		character.artifacts.components[componentToEdit.id - 1].primary[1] = parseInt($('#comp-unmodal .primary .primary-select').val());
		character.artifacts.components[componentToEdit.id - 1].secondary1[1] = parseInt($('#comp-unmodal .secondary1 select').val());
		character.artifacts.components[componentToEdit.id - 1].secondary2[1] = parseInt($('#comp-unmodal .secondary2 select').val());
		character.artifacts.components[componentToEdit.id - 1].secondary3[1] = parseInt($('#comp-unmodal .secondary3 select').val());
		if (componentToEdit.primary[0] === 'program') {
			character.artifacts.components[componentToEdit.id - 1].primary[2] = $('#comp-unmodal #edit-program-notes').val();
		}
		saveCharacterObject(true);
		$('#modal, #modal-shade').hide();
	});
	$('#comp-unmodal .detail-row, #comp-unmodal .primary .row-label').bind('taphold', componentHold);
	$('#comp-unmodal').slideDown();
	$('#new-artifact').slideUp();
}