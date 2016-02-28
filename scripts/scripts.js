$(document).ready(function() {
	rootPrep();
	addListeners();
	
	//extend jquery on() to listen for show()/hide()
	(function ($) {
		$.each(['show', 'hide'], function (i, ev) {
			var el = $.fn[ev];
			$.fn[ev] = function () {
				this.trigger(ev);
				return el.apply(this, arguments);
			};
		});
    })(jQuery);
	
});

//handle hash changes
window.onhashchange = function(event) {
	
	//basic return to main menu
	if (event.oldURL.indexOf('character-sheet') > -1 && event.newURL.indexOf('main-menu') > -1 && !$('#root-menu').is(':visible')) {
		location.reload();
	}

	//return from settings to main menu
	if (event.oldURL.indexOf('settings') > -1 && event.newURL.indexOf('main-menu') > -1) {
		location.reload();
	}
	
	//we're in the modal loop but modal is closed, go to main menu
	if (!$('#modal').is(':visible') && !$('#results').is(':visible') && (event.newURL.indexOf('modal') > -1 || event.newURL.indexOf('results') > -1)) {
		location.reload();
	}
	
	//hide modals if open
	if (event.oldURL.indexOf('modal') > -1) {
		if ($('#modal').is(':visible')) {$('#modal').hide();}
		if ($('#modal-shade').is(':visible') && !$('#results').is(':visible')) {$('#modal-shade').hide();}
	}
	if (event.oldURL.indexOf('results') > -1) {
		if ($('#results').is(':visible')) {$('#results').hide();}
		if ($('#modal-shade').is(':visible') && !$('#modal').is(':visible')) {$('#modal-shade').hide();}
	}
	
	//handle character creation steps
	if (event.oldURL.indexOf('character-creation') > -1) {
		if (event.oldURL.indexOf('character-creation') > -1 && event.newURL.indexOf('main-menu') > -1) {
			location.reload();
		} else if (event.oldURL.indexOf('step2') > -1 && event.newURL.indexOf('step1') > -1) {
			createStepOne();
		} else if (event.oldURL.indexOf('step3') > -1 && event.newURL.indexOf('step2') > -1) {
			createStepTwo();
		} else if (event.oldURL.indexOf('step4') > -1 && event.newURL.indexOf('step3') > -1) {
			createStepThree();
		} else if (event.oldURL.indexOf('step5') > -1 && event.newURL.indexOf('step4') > -1) {
			createStepFour();
		} else if (event.oldURL.indexOf('step1') > -1 && event.newURL.indexOf('step2') > -1) {
			createStepTwo();
		} else if (event.oldURL.indexOf('step2') > -1 && event.newURL.indexOf('step3') > -1) {
			createStepThree();
		} else if (event.oldURL.indexOf('step3') > -1 && event.newURL.indexOf('step4') > -1) {
			createStepFour();
		} else if (event.oldURL.indexOf('step4') > -1 && event.newURL.indexOf('step5') > -1) {
			createFinal();
		}
	}
}

//setting up all click handlers that can be set up on document ready
function addListeners() {
	$('.character-row').click(function(event){
		startSheetPrep(event.currentTarget);
	});
	$('#new-character').click(function(){
		beginCharacterCreation();
	});
	$('#import-character').click(function(){
		importCharacter();
	});
	$('#finish-character').click(function(){
		finishCharacter();
	});
	$('#change-settings, #semiskewed-settings').click(function(){
		showSettingsView();
	});
	$('#setting-first-run').click(function(){
		$('#setting-first-run .detail').toggleClass('true false');
		if (settings.firstRun) {settings.firstRun = false} else {settings.firstRun = true};
		if (settings.charFirstRun) {settings.charFirstRun = false} else {settings.charFirstRun = true};
	});
	$('#setting-colorful').click(function(){
		$('#setting-colorful .detail').toggleClass('true false');
		if (settings.colorful) {
			settings.colorful = false;
			$('body').removeClass('colorful');
		} else {
			settings.colorful = true;
			$('body').addClass('colorful');
		}
	});
	$('#setting-skewed').click(function(){
		if (settings.skewed === false) {
			settings.skewed = true;
			$('body').addClass('skewed').removeClass('semiskewed');
			$('#setting-skewed .detail').addClass('true').removeClass('false partial');
		} else if (settings.skewed === 'partial') {
			settings.skewed = false;
			$('body').removeClass('skewed semiskewed');
			$('#setting-skewed .detail').addClass('false').removeClass('true partial');
		} else if (settings.skewed === true) {
			settings.skewed = 'partial';
			$('body').removeClass('skewed').addClass('semiskewed');
			$('#setting-skewed .detail').addClass('partial').removeClass('false true');
		}
	});
	$('#setting-iconic').click(function(){
		$('#setting-iconic .detail').toggleClass('true false');
		if (settings.iconic) {
			settings.iconic = false;
			$('body').removeClass('iconic');
		} else {
			settings.iconic = true;
			$('body').addClass('iconic');
		}
	});
	$('#setting-tiered').click(function(){
		$('#setting-tiered .detail').toggleClass('true false');
		if (settings.tiered) {
			settings.tiered = false;
		} else {
			settings.tiered = true;
		}
	});
	$('#setting-theme').click(function(){
		$('#setting-theme .detail').toggleClass('paper slate');
		if (settings.theme === 'paper') {
			settings.theme = 'slate';
			$('body').removeClass('paper');
		} else {
			settings.theme = 'paper';
			$('body').addClass('paper');
		}
	});
	$('#setting-skillorder').click(function(){
		$('#setting-skillorder .detail').toggleClass('alphabetical attribute');
		if (settings.skillorder === 'alphabetical') {
			settings.skillorder = 'attribute';
		} else {
			settings.skillorder = 'alphabetical';
		}
	});
	$('#setting-comskilllocation').click(function(){
		if (settings.comskilllocation === 'combat-view') {
			$('#setting-comskilllocation .detail').toggleClass('combat-view skill-view');
			settings.comskilllocation = 'skill-view';
		} else if (settings.comskilllocation === 'skill-view') {
			$('#setting-comskilllocation .detail').toggleClass('skill-view both');
			settings.comskilllocation = 'both';
		} else {
			$('#setting-comskilllocation .detail').toggleClass('both combat-view');
			settings.comskilllocation = 'combat-view';
		}
	});
	$('#cancel-settings, .semiskewed-home').tap(function(){
		location.reload();
	});
	$('#save-settings').click(function(){
		localStorage.settings = JSON.stringify(settings);
		showSettingsView();
	});
	$('#show-skill-view').tap(function(){
		showSkillView();
	});
	$('#combat-view').swiperight(function(){
		showSkillView();
	});
	$('#show-combat-view').tap(function(){
		showCombatView();
	});
	$('#skill-view').swipeleft(function(){
		showCombatView();
	});
	$('#status-view').swiperight(function(){
		showCombatView();
	});
	$('#status-view').swipeleft(function(){
		showStylesView();
	});
	$('#show-status-view').tap(function(){
		showStatusView();
	});
	$('#combat-view').swipeleft(function(){
		showStatusView();
	});
	$('#show-styles-view').tap(function(){
		showStylesView();
	});
	$('#styles-view').swiperight(function(){
		showStatusView();
	});
	$('#styles-view').swipeleft(function(){
		showArtifactsView();
	});
	$('#show-artifacts-view').tap(function(){
		showArtifactsView();
	});
	$('#artifacts-view').swiperight(function(){
		showStylesView();
	});
	$('#attributes h3').click(function(){
		$(this).toggleClass('hidden');
		$('#att-unmodal').remove();
		
		$('.attribute-row').removeClass('description-open').slideToggle();
	});
	$('#results, #modal-shade').tap(function() {
		$('#modal-shade, #modal, #results').finish().fadeOut();
		$('.action-roll-result').remove();
	});
	$('.wound, .heal').tap(function(){
		woundHeal(this);
	});
	$('#edit-armor').click(function(){
		editArmorStart();
		if (!$('#monitor').hasClass('hidden')) {
			toggleMonitor();
		}
	});
	$('#earn-points').click(function(){
		earnStyles();
	});	
	$('#spend-points, #available-points .sub-controller .cancel').click(function(){
		toggleSpendMode();
	});
	$('#available-points .sub-controller .finish').click(function(){
		saveTentative();
	});
	$('#edit-cast').click(function(){
		editCast();
	});
	$('#new-artifact').click(function(){
		newArtifact();
	});
	$('.edit-notes').click(function(event){
		editNotes(event);
		if (!$('#monitor').hasClass('hidden')) {
			toggleMonitor();
		}
	});
	$('.save-notes').click(function(event){
		saveNotes(event);
	});
	$('#dice-roller').off().tap(function(event){
		diceRoller();
	});
	$('#monitor').on('swipedown', function(event){
		toggleMonitor();
	});
	$('#monitor .toggler').off().click(function(event){
		toggleMonitor();
	});
	$('#modal').on('show', function() {
		modalShown('modal');
	});
	$('#results').on('show', function() {
		modalShown('results');
	});
	$('#modal').on('hide', function() {
		modalHidden('modal');
	});
	$('#results').on('hide', function() {
		modalHidden('results');
	});
}

function showSettingsView() {
	$("html, body").animate({ scrollTop: 0 }, "200");
	$('#root-menu').fadeToggle();
	$('#settings-view').fadeToggle();
	window.location.hash = 'settings';
}

function showSkillView() {
	var viewHeight = $('#skill-view').height()+90;
	$('#modal').hide();
	$('#show-skill-view').addClass('current');
	$('#show-combat-view, #show-status-view, #show-styles-view, #show-artifacts-view').removeClass('current');
	$('#available-points').finish().slideUp();
	$('#container').css({left:'0'}).height(viewHeight);
	$("html, body").animate({ scrollTop: 0 }, "500");
}

function showCombatView() {
	var viewHeight = $('#combat-view').height()+90;
	$('#modal, #modal-shade').hide();
	$('#show-combat-view').addClass('current');
	$('#show-skill-view, #show-status-view, #show-styles-view, #show-artifacts-view').removeClass('current');
	$('#available-points').finish().slideUp();
	$('#container').css({left:'-150%'}).height(viewHeight);
	$("html, body").animate({ scrollTop: 0 }, "500");
}

function showStatusView() {
	var viewHeight = $('#status-view').height()+90;
	$('#modal, #modal-shade').hide();
	$('#show-status-view').addClass('current');
	$('#show-skill-view, #show-combat-view, #show-styles-view, #show-artifacts-view').removeClass('current');
	$('#available-points').finish().slideUp();
	$('#container').css({left:'-300%'}).height(viewHeight);
	$("html, body").animate({ scrollTop: 0 }, "500");
}

function showStylesView() {
	var viewHeight = $('#styles-view').height()+90;
	$('#modal, #modal-shade').hide();
	$('#show-styles-view').addClass('current');
	$('#show-skill-view, #show-combat-view, #show-status-view, #show-artifacts-view').removeClass('current');
	$('#available-points').finish().slideDown();
	$('#container').css({left:'-450%'}).height(viewHeight);
	$("html, body").animate({ scrollTop: 0 }, "500");
	if (!$('#monitor').hasClass('hidden')) {
		toggleMonitor();
	}
}

function showArtifactsView() {
	var viewHeight = $('#artifacts-view').height()+90;
	$('#modal, #modal-shade').hide();
	$('#show-artifacts-view').addClass('current');
	$('#show-skill-view, #show-combat-view, #show-status-view, #show-styles-view').removeClass('current');
	$('#available-points').finish().slideUp();
	$('#container').css({left:'-600%'}).height(viewHeight);
	$("html, body").animate({ scrollTop: 0 }, "500");
}

function saveCharacterObject(reset) {
	//add modified character object to character list object
	characters[character.meta.id] = character;
	//save stringified character list and reset sheet
	localStorage.characters = JSON.stringify(characters);
	if (reset === true) {
		resetSheet();
	}
	console.log('character saved');
}

function resetSheet() {
	$('#character-sheet').empty().append('<p id="reloading">Reloading character sheet...</p>').load('scripts/blank-sheet.html', function() {
		$('#reloading').remove;
		sheetPrep('reset');
		addListeners();
	});
}

function toggleMonitor() {
	$('#monitor-inner').slideToggle();
	$('#monitor').toggleClass('hidden');
}

function diceRoller() {
	var dieResult = Math.floor(Math.random()* 6)+1;
	$('#dice-roller').removeClass().hide().delay(100).queue(function() {
		$(this).addClass('die'+dieResult).show();
		$(this).dequeue();
	});;
}

function encodeInput(string) {
	var encoded = encodeURIComponent(string).replace(/%/g,"_percent_").replace(/~/g,"_tilde_").replace(/!/g,"_chik_").replace(/\*/g,"_aster_").replace(/\(/g,"_oparen_").replace(/\)/g,"_cloparen_").replace(/\'/g,"_apos_");
	return encoded;
}

function decodeInput(string) {
	var toDecode = string.replace(/_percent_/g,"%");
	var toReplace = decodeURIComponent(toDecode);
	var decoded = toReplace.replace(/_tilde_/g,"~").replace(/_chik_/g,"!").replace(/_aster_/g,"*").replace(/_oparen_/g,"(").replace(/_cloparen_/g,")").replace(/_apos_/g,"'");
	return decoded;
}

function modalShown(which) {
	if (which === 'modal' && window.location.hash.indexOf('/modal') === -1) {
		window.location.hash = window.location.hash+'/modal';
	} else if (which === 'results' && window.location.hash.indexOf('/results') === -1) {
		window.location.hash = window.location.hash+'/results';
	}
}

function modalHidden(which) {
	if (which === 'modal' && window.location.hash.indexOf('/modal') > 0) {
		window.location.hash = window.location.hash.substr(0, window.location.hash.lastIndexOf("/modal"));
	} else if (which === 'results' && window.location.hash.indexOf('/results') > 0) {
		window.location.hash = window.location.hash.substr(0, window.location.hash.lastIndexOf("/results"));
	}
}

function startSheetPrep(clicked) {
	$("#character-sheet").css("pointer-events", "none");
	sheetPrep(clicked);
	clearTimeout(modalTimer);
	modalTimer = setTimeout(function(){
		$("#character-sheet").css("pointer-events", "auto");
	}, 200);
}