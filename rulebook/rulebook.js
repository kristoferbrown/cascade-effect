var rulebook = {
	Intro: {title: '1: Introduction', id: 'introduction-chapter'},
	Characters: {title: '2: Characters', id: 'characters-chapter'},
	Systems: {title: '3: Systems', id: 'systems-chapter'},
	Combat: {title: '4: Combat', id: 'combat-chapter'},
	Actions: {title: '5: Actions', id: 'actions-chapter'},
	Styles: {title: '6: Styles', id: 'styles-chapter'},
	Gear: {title: '7: Equipment & Artifacts', id: 'equipment-chapter'},
	Gamemastering:  {title: '8: Gamemastering', id: 'gamemastering-chapter'},
	Setting:  {title: '9: Setting', id: 'setting-chapter'},
},
taxonomy = {
	attributes: {
		Strength:     'Deal more damage in combat, move more weight, and win grapples.',
		Finesse:      'Coordination, manual dexterity, and proficiency with melee weapons.',
		Perception:   'Sharp senses, alertness, and good aim with ranged weapons.',
		Stamina:      'Ability to continue acting despite exhaustion and injuries.',
		Agility:      'Quickness when moving your entire body or dodging melee attacks.',
		Wits:         'Think fast and react under pressure or avoid ranged attacks.',
		Willpower:    'Resist coercion and fear, or comprehend the supernatural.',
		Intelligence: 'Learn, comprehend, research, and recall.',
		Charisma:     'Social skills, self confidence, and likabilty.'
	},
	skills: {
		Toughness:    'Resist stress, exhaustion, and injury.',
		Stealth:      'Hide, move silently, avoid detection, and circumvent security.',
		Alertness:    'Avoid surprise, notice details, remain aware of your surroundings.',
		Investigate:  'Search, sense motives, find clues, and solve mysteries.',
		Athletics:    'Move quickly and skillfully to excel in physical tasks and sports.',
		Drive:        'Proficiency with operating motor vehicles.',
		Survival:     'Navigate or provide food and shelter in hostile environments.',
		Guts:         'Courage and comprehension of the supernatural.',
		Hardware:     'Make and repair crafts, computer hardware, and machines.',
		Humanities:   'Knowledge of academia, arts, culture, history, law, and philosophy.',
		Medicine:     'Knowledge of anatomy, diagnosis, first aid, and medical equipment.',
		Science:      'Knowledge of hard science and research equipment.',
		Software:     'Hack or program computers and navigate virtual environments.',
		Charm:        'Befriend, persuade, and gain the favor of others.',
		Manipulate:   'Coerce, threaten, deceive, and frighten others.',

		Unarmed:      'Combat Skill<br>Land punches, win grapples, and disarm opponents.',
		Defense:      'Combat Skill<br>Block or dodge incoming melee and ranged attacks.',
		Melee:        'Combat Skill<br>Close combat armed with knives, swords, clubs, or other weapons.',
		Firearms:     'Combat Skill<br>Proficiency with handguns, shotguns, or rifles.',
		Ballistics:   'Combat Skill<br>Accuracy with thrown weapons, archery, or grenade launchers.',
		Initiative:   'Combat Skill<br>Reflexes and reaction time. Determines the order of turns in combat.',

		Contacts:     'Unrolled Skill<br>Social standing, fame, contacts, or friends in high places.',
		Languages:    'Unrolled Skill<br>A point makes you bilingual, 2 means means 4 languages, and 3 means 6 languages.',
		Resources:    'Unrolled Skill<br>A point makes you upper-middle class, 2 means millionaire, 3 means billionaire.'
	},
	defenses: {
		passive:      '<p>How well you can avoid attacks without rolling.</p><p>An attack roll only needs to tie this number to hit you.</p>',
		melee:        '<p>How effective your dodge actions are in close combat.</p><p>When using an action to dodge a melee or unarmed attack, the attack roll must beat the results of this roll by at least 1 to hit you.</p>',
		ranged:       '<p>How effective your dodge actions are against ranged attacks.</p><p>When using an action to dodge a firearms or ballistics attack, the attack roll must beat the results of this roll by at least 1 to hit you.</p>'
	},
	status: {
		woundmax:     '<p>The maximum amount of damage a bodily location can take before it is disabled. A location that takes more damage than double this number is destroyed.</p>',
		endurance:    '<p>The number of points of speed you regain at the end of each round.</p><p>This number can be lowered by injury, if it is below 0 you are unconscious, if it drops below the negative of its normal value you die.</p>',
		upper:        '<p>Disabling this location knocks you unconscious, destroying it kills you.</p><p>Heavy armor on this location imposes a Perception penalty.</p>',
		lower:        '<p>Disabling this location knocks you unconscious, destroying it kills you.</p><p>Heavy armor on this location imposes an Agility penalty.</p>',
		main:         '<p>Disabling this location means you cannot use this arm, destroying it knocks you unconscious.</p><p>Heavy armor on this location imposes a Finesse penalty.</p>',
		off:          '<p>Disabling this location means you cannot use this arm, destroying it knocks you unconscious.</p><p>Heavy armor on this location imposes a Finesse penalty, but only when using this arm, this penalty is not automatically added to your character sheet.</p>',
		legs:         '<p>Disabling this location means you can only crawl a single space per round, destroying it knocks you unconscious.</p><p>Heavy armor on this location imposes a Speed penalty.</p>',
		speed:        '<h3>Speed</h3><p>More Speed lets you take more actions in a single round in combat.</p>',
		crisis:       '<h3>Entanglement</h3><p>Represents your ability to activate styles and your resistance to certain styles and cascade events.</p>',
		dice:         '<h3>Dice Roller</h3><p>Just a simple dice roller. Tap it to roll a sigle die.<p>',
		shield:       '<p>An energy shield provided by the function <em>shield( )</em>. Attacks that hit you deal damage to the shield instead of you.</p>'
	}
};

function toggleChapter(chapter, event) {
	if ($('#'+chapter.id).attr('class') === 'open' && $('body').hasClass('print')) {
		location.reload();
	} else if ($('#'+chapter.id).attr('class') === 'open') {
		$('#'+chapter.id+' .chapter-text').finish().slideToggle(400, function(){
			$('#'+chapter.id+' .chapter-text').empty();
		});
	} else if ($('body').hasClass('print')) {
		$('#'+chapter.id+' .chapter-text').finish().empty().load('../rulebook/'+chapter.id+'.html');
		$('body').removeClass('skewed');
		$('.chapter-text').show();
		$(event.target).parent().siblings().remove();
		$('.print-guide').remove();
	} else {
		$('#'+chapter.id+' .chapter-title').addClass('loading');
		$('#'+chapter.id+' .chapter-text').finish().empty().load('rulebook/'+chapter.id+'.html', function() {
			$('#'+chapter.id+' .chapter-text').slideToggle();
			$('.section h4').off().tap(function() {
				toggleSection(this);
			});
			$('#'+chapter.id+' .chapter-title').removeClass('loading');
			if ($(window).width() > 400) {
				$('#'+chapter.id+' .visible-small').remove();
			} else {
				$('#'+chapter.id+' .visible-large').remove();
			}
		});
	}
	$('#'+chapter.id).toggleClass('open');
}

function toggleSection(section) {
		$(section).parent().children('p, ul, ol, table, h5, img, .rule-append, .section').slideToggle();
		$(section).parent().toggleClass('open');
}

function viewAll() {
	$.each($('#rulebook-chapters').children(), function(){
		var chapterId = $(this).attr('id');
		$('#'+chapterId+' .chapter-text').finish().empty().load('../rulebook/'+chapterId+'.html');
	});
	$('body').removeClass('skewed');
	$('.chapter-text').show();
	$('.print-guide').remove();
	$('#view-all').remove();
}