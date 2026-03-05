export default [
	{
		index: "barbarian",
		name: "Barbarian",
		hit_die: 12,
		proficiency_choices: [
			{
				desc: "Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival",
				choose: 2,
				type: "skills",
				from: {
					option_set_type: "options_array",
					options: [
						{
							index: "animal-handling",
							name: "Animal Handling",
						},
						{
							index: "athletics",
							name: "Athletics",
						},
						{
							index: "intimidation",
							name: "Intimidation",
						},
						{
							index: "nature",
							name: "Nature",
						},
						{
							index: "perception",
							name: "Perception",
						},
						{
							index: "survival",
							name: "Survival",
						},
					],
				},
			},
		],
		proficiencies: [
			{
				index: "light-armor",
				name: "Light Armor",
				url: "/api/2014/proficiencies/light-armor",
			},
			{
				index: "medium-armor",
				name: "Medium Armor",
				url: "/api/2014/proficiencies/medium-armor",
			},
			{
				index: "shields",
				name: "Shields",
				url: "/api/2014/proficiencies/shields",
			},
			{
				index: "simple-weapons",
				name: "Simple Weapons",
				url: "/api/2014/proficiencies/simple-weapons",
			},
			{
				index: "martial-weapons",
				name: "Martial Weapons",
				url: "/api/2014/proficiencies/martial-weapons",
			},
		],
		saving_throws: [
			{
				index: "str",
				name: "STR",
				url: "/api/2014/ability-scores/str",
			},
			{
				index: "con",
				name: "CON",
				url: "/api/2014/ability-scores/con",
			},
		],
		starting_equipment: [
			{
				equipment: {
					index: "explorers-pack",
					name: "Explorer's Pack",
					url: "/api/2014/equipment/explorers-pack",
				},
				quantity: 1,
			},
			{
				equipment: {
					index: "javelin",
					name: "Javelin",
					url: "/api/2014/equipment/javelin",
				},
				quantity: 4,
			},
		],
		starting_equipment_options: [
			{
				desc: "(a) a greataxe or (b) any martial melee weapon",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "greataxe",
								name: "Greataxe",
								url: "/api/2014/equipment/greataxe",
							},
						},
						{
							option_type: "choice",
							choice: {
								desc: "any martial melee weapon",
								choose: 1,
								type: "equipment",
								from: {
									option_set_type: "equipment_category",
									equipment_category: {
										index: "martial-melee-weapons",
										name: "Martial Melee Weapons",
										url: "/api/2014/equipment-categories/martial-melee-weapons",
									},
								},
							},
						},
					],
				},
			},
			{
				desc: "(a) two handaxes or (b) any simple weapon",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "counted_reference",
							count: 2,
							of: {
								index: "handaxe",
								name: "Handaxe",
								url: "/api/2014/equipment/handaxe",
							},
						},
						{
							option_type: "choice",
							choice: {
								desc: "any simple weapon",
								choose: 1,
								type: "equipment",
								from: {
									option_set_type: "equipment_category",
									equipment_category: {
										index: "simple-weapons",
										name: "Simple Weapons",
										url: "/api/2014/equipment-categories/simple-weapons",
									},
								},
							},
						},
					],
				},
			},
		],
		class_levels: [
			{
				level: 1,
				ability_score_bonuses: 0,
				prof_bonus: 2,
				features: [
					{
						index: "rage",
						name: "Rage",
						level: 1,
						prerequisites: [],
						desc: [
							{
								body: "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, you gain the following benefits if you aren't wearing heavy armor:",
							},
							{
								body: "- You have advantage on Strength checks and Strength saving throws.",
							},
							{
								body: "- When you make a melee weapon Attack using Strength, you gain a +2 bonus to the damage roll. This bonus increases as you level.",
							},
							{
								body: "- You have Resistance to bludgeoning, piercing, and slashing damage.",
							},
							{
								body: "If you are able to cast Spells, you can't cast them or concentrate on them while raging.",
							},
							{
								body: "Your rage lasts for 1 minute. It ends early if you are knocked Unconscious or if Your Turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on Your Turn as a Bonus Action.",
							},
							{
								body: "Once you have raged the maximum number of times for your barbarian level, you must finish a Long Rest before you can rage again. You may rage 2 times at 1st level, 3 at 3rd, 4 at 6th, 5 at 12th, and 6 at 17th.",
							},
						],
					},
					{
						index: "barbarian-unarmored-defense",
						name: "Unarmored Defense",
						level: 1,
						prerequisites: [],
						desc: [
							{
								body: "While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.",
							},
						],
					},
				],
				class_specific: {
					rage_count: 2,
					rage_damage_bonus: 2,
					brutal_critical_dice: 0,
				},
			},
			{
				level: 2,
				ability_score_bonuses: 0,
				prof_bonus: 2,
				features: [
					{
						index: "reckless-attack",
						name: "Reckless Attack",
						level: 2,
						prerequisites: [],
						desc: [
							{
								body: "Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.",
							},
						],
					},
					{
						index: "danger-sense",
						name: "Danger Sense",
						level: 2,
						prerequisites: [],
						desc: [
							{
								body: "At 2nd level, you gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated.",
							},
						],
					},
				],
				class_specific: {
					rage_count: 2,
					rage_damage_bonus: 2,
					brutal_critical_dice: 0,
				},
			},
			{
				level: 3,
				ability_score_bonuses: 0,
				prof_bonus: 2,
				features: [
					{
						index: "primal-path",
						name: "Primal Path",
						level: 3,
						prerequisites: [],
						desc: [
							{
								body: "At 3rd level, you choose a path that shapes the nature of your rage. Choose the Path of the Berserker or the Path of the Totem Warrior, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels.",
							},
						],
					},
				],
				class_specific: {
					rage_count: 3,
					rage_damage_bonus: 2,
					brutal_critical_dice: 0,
				},
			},
			{
				level: 4,
				ability_score_bonuses: 1,
				prof_bonus: 2,
				features: [
					{
						index: "barbarian-ability-score-improvement-1",
						name: "Ability Score Improvement",
						level: 4,
						prerequisites: [],
						desc: [
							{
								body: "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
							},
						],
					},
				],
				class_specific: {
					rage_count: 3,
					rage_damage_bonus: 2,
					brutal_critical_dice: 0,
				},
				index: "barbarian-4",
			},
			{
				level: 5,
				ability_score_bonuses: 1,
				prof_bonus: 3,
				features: [
					{
						index: "barbarian-extra-attack",

						name: "Extra Attack",
						level: 5,
						prerequisites: [],
						desc: [
							{
								body: "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.",
							},
						],
					},
					{
						index: "fast-movement",
						name: "Fast Movement",
						level: 5,
						prerequisites: [],
						desc: [
							{
								body: "Starting at 5th level, your speed increases by 10 feet while you aren't wearing heavy armor.",
							},
						],
					},
				],
				class_specific: {
					rage_count: 3,
					rage_damage_bonus: 2,
					brutal_critical_dice: 0,
				},
				index: "barbarian-5",
			},
			{
				level: 6,
				ability_score_bonuses: 1,
				prof_bonus: 3,
				features: [
					{
						index: "primal-path-improvement-1",
						name: "Path feature",
						level: 6,
						prerequisites: [],
						desc: [
							{
								body: "At 3rd level, you choose a path that shapes the nature of your rage. Choose the Path of the Berserker or the Path of the Totem Warrior, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels.",
							},
						],
					},
				],
				class_specific: {
					rage_count: 4,
					rage_damage_bonus: 2,
					brutal_critical_dice: 0,
				},
			},
			{
				level: 7,
				ability_score_bonuses: 1,
				prof_bonus: 3,
				features: [
					{
						index: "feral-instinct",
						name: "Feral Instinct",
						level: 7,
						prerequisites: [],
						desc: [
							{
								body: "By 7th level, your instincts are so honed that you have advantage on initiative rolls.",
							},
							{
								body: "Additionally, if you are surprised at the beginning of combat and aren't incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn.",
							},
						],
					},
				],
				class_specific: {
					rage_count: 4,
					rage_damage_bonus: 2,
					brutal_critical_dice: 0,
				},
			},
			{
				level: 8,
				ability_score_bonuses: 2,
				prof_bonus: 3,
				features: [
					{
						index: "barbarian-ability-score-improvement-2",
						name: "Ability Score Improvement",
						level: 8,
						prerequisites: [],
						desc: [
							{
								body: "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
							},
						],
					},
				],
				class_specific: {
					rage_count: 4,
					rage_damage_bonus: 2,
					brutal_critical_dice: 0,
				},
			},
			{
				level: 9,
				ability_score_bonuses: 2,
				prof_bonus: 4,
				features: [
					{
						index: "brutal-critical-1-die",
						name: "Brutal Critical (1 die)",
						level: 9,
						prerequisites: [],
						desc: [
							{
								body: "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level.",
							},
						],
					},
				],
				class_specific: {
					rage_count: 4,
					rage_damage_bonus: 3,
					brutal_critical_dice: 1,
				},
			},
			{
				level: 10,
				ability_score_bonuses: 2,
				prof_bonus: 4,
				features: [
					{
						index: "primal-path-improvement-2",
						name: "Path feature",
						level: 10,
						prerequisites: [],
						desc: [
							{
								body: "At 3rd level, you choose a path that shapes the nature of your rage. Choose the Path of the Berserker or the Path of the Totem Warrior, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels.",
							},
						],
					},
				],
				class_specific: {
					rage_count: 4,
					rage_damage_bonus: 3,
					brutal_critical_dice: 1,
				},
			},
			{
				level: 11,
				ability_score_bonuses: 2,
				prof_bonus: 4,
				features: [
					{
						index: "relentless-rage",
						name: "Relentless Rage",
						level: 11,
						prerequisites: [],
						desc: [
							{
								body: "Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you're raging and don't die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead.",
							},
							{
								body: "Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10.",
							},
						],
					},
				],
				class_specific: {
					rage_count: 4,
					rage_damage_bonus: 3,
					brutal_critical_dice: 1,
				},
				index: "barbarian-11",
			},
			{
				level: 12,
				ability_score_bonuses: 3,
				prof_bonus: 4,
				features: [
					{
						index: "barbarian-ability-score-improvement-3",
						name: "Ability Score Improvement",
						level: 12,
						prerequisites: [],
						desc: [
							{
								body: "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
							},
						],
					},
				],
				class_specific: {
					rage_count: 5,
					rage_damage_bonus: 3,
					brutal_critical_dice: 1,
				},
			},
			{
				level: 13,
				ability_score_bonuses: 3,
				prof_bonus: 5,
				features: [
					{
						index: "brutal-critical-2-dice",
						name: "Brutal Critical (2 dice)",
						level: 13,
						prerequisites: [],
						desc: [
							{
								body: "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level.",
							},
						],
					},
				],
				class_specific: {
					rage_count: 5,
					rage_damage_bonus: 3,
					brutal_critical_dice: 2,
				},
			},
			{
				level: 14,
				ability_score_bonuses: 3,
				prof_bonus: 5,
				features: [
					{
						index: "primal-path-improvement-3",
						name: "Path feature",
						level: 14,
						prerequisites: [],
						desc: [
							{
								body: "At 3rd level, you choose a path that shapes the nature of your rage. Choose the Path of the Berserker or the Path of the Totem Warrior, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels.",
							},
						],
					},
				],
				class_specific: {
					rage_count: 5,
					rage_damage_bonus: 3,
					brutal_critical_dice: 2,
				},
			},
			{
				level: 15,
				ability_score_bonuses: 3,
				prof_bonus: 5,
				features: [
					{
						index: "persistent-rage",
						name: "Persistent Rage",
						level: 15,
						prerequisites: [],
						desc: [
							{
								body: "Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it.",
							},
						],
					},
				],
				class_specific: {
					rage_count: 5,
					rage_damage_bonus: 3,
					brutal_critical_dice: 2,
				},
			},
			{
				level: 16,
				ability_score_bonuses: 4,
				prof_bonus: 5,
				features: [
					{
						index: "barbarian-ability-score-improvement-4",
						name: "Ability Score Improvement",
						level: 16,
						prerequisites: [],
						desc: [
							{
								body: "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
							},
						],
					},
				],
				class_specific: {
					rage_count: 5,
					rage_damage_bonus: 4,
					brutal_critical_dice: 2,
				},
			},
			{
				level: 17,
				ability_score_bonuses: 4,
				prof_bonus: 6,
				features: [
					{
						index: "brutal-critical-3-dice",
						name: "Brutal Critical (3 dice)",
						level: 17,
						prerequisites: [],
						desc: [
							{
								body: "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level.",
							},
						],
					},
				],
				class_specific: {
					rage_count: 6,
					rage_damage_bonus: 4,
					brutal_critical_dice: 3,
				},
			},
			{
				level: 18,
				ability_score_bonuses: 4,
				prof_bonus: 6,
				features: [
					{
						index: "indomitable-might",
						name: "Indomitable Might",
						level: 18,
						prerequisites: [],
						desc: [
							{
								body: "Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total.",
							},
						],
					},
				],
				class_specific: {
					rage_count: 6,
					rage_damage_bonus: 4,
					brutal_critical_dice: 3,
				},
				index: "barbarian-18",
			},
			{
				level: 19,
				ability_score_bonuses: 5,
				prof_bonus: 6,
				features: [
					{
						index: "barbarian-ability-score-improvement-5",
						name: "Ability Score Improvement",
						level: 19,
						prerequisites: [],
						desc: [
							{
								body: "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
							},
						],
					},
				],
				class_specific: {
					rage_count: 6,
					rage_damage_bonus: 4,
					brutal_critical_dice: 3,
				},
			},
			{
				level: 20,
				ability_score_bonuses: 5,
				prof_bonus: 6,
				features: [
					{
						index: "primal-champion",
						name: "Primal Champion",
						level: 20,
						prerequisites: [],
						desc: [
							{
								body: "At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24.",
							},
						],
						url: "/api/2014/features/primal-champion",
						updated_at: "2025-10-24T20:42:13.150Z",
					},
				],
				class_specific: {
					rage_count: 9999,
					rage_damage_bonus: 4,
					brutal_critical_dice: 3,
				},
			},
		],
		multi_classing: {
			prerequisites: [
				{
					ability_score: {
						index: "str",
						name: "STR",
						url: "/api/2014/ability-scores/str",
					},
					minimum_score: 13,
				},
			],
			proficiencies: [
				{
					index: "shields",
					name: "Shields",
					url: "/api/2014/proficiencies/shields",
				},
				{
					index: "simple-weapons",
					name: "Simple Weapons",
					url: "/api/2014/proficiencies/simple-weapons",
				},
				{
					index: "martial-weapons",
					name: "Martial Weapons",
					url: "/api/2014/proficiencies/martial-weapons",
				},
			],
		},
		subclasses: [
			{
				index: "berserker",
				name: "Berserker",
				subclass_flavor: "Primal Path",
				desc: [
					"For some barbarians, rage is a means to an end--that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker's rage, you thrill in the chaos of battle, heedless of your own health or well-being.",
				],
				subclass_levels: [
					{
						level: 3,
						features: [
							{
								index: "frenzy",
								name: "Frenzy",
								prerequisites: [],
								desc: [
									{
										body: "Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion (as described in appendix A).",
									},
								],
							},
						],
					},
					{
						level: 6,
						features: [
							{
								index: "mindless-rage",
								name: "Mindless Rage",
								level: 6,
								prerequisites: [],
								desc: [
									{
										body: "Beginning at 6th level, you can't be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage.",
									},
								],
							},
						],
					},
					{
						level: 10,
						features: [
							{
								index: "intimidating-presence",
								name: "Intimidating Presence",
								level: 10,
								prerequisites: [],
								desc: [
									{
										body: "Beginning at 10th level, you can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you.",
									},
									{
										body: " If the creature succeeds on its saving throw, you can't use this feature on that creature again for 24 hours.",
									},
								],
							},
						],
					},
					{
						level: 14,
						features: [
							{
								index: "retaliation",
								name: "Retaliation",
								level: 14,
								prerequisites: [],
								desc: [
									{
										body: "Starting at 14th level, when you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon Attack against that creature.",
									},
								],
							},
						],
					},
				],
				spells: [],
			},
			{
				index: "path-of-the-totem-warrior",
				name: "Path of the Totem Warrior",
				subclass_flavor: "Primal Path",
				desc: [
					"The Path of the Totem Warrior is a spiritual journey, as the barbarian accepts a spirit animal as guide, protector, and inspiration. In battle, your totem spirit fills you with supernatural might, adding magical fuel to your barbarian rage.",
					"Most barbarian tribes consider a totem animal to be kin to a particular clan. In such cases, it is unusual for an individual to have more than one totem animal spirit, though exceptions exist.",
				],
				subclass_levels: [
					{
						level: 3,
						features: [
							{
								index: "spirit-seeker",
								name: "Spirit Seeker",
								prerequisites: [],
								desc: [
									{
										body: "Yours is a path that seeks attunement with the natural world, giving you a kinship with beasts. At 3rd level when you adopt this path, you gain the ability to cast the beast sense and speak with animals spells, but only as rituals, as described in chapter 10.",
									},
								],
							},
							{
								index: "totem-spirit",
								name: "Totem Spirit",
								prerequisites: [],
								desc: [
									{
										body: "At 3rd level, when you adopt this path, you choose a totem spirit and gain its feature. You must make or acquire a physical totem object—an amulet or similar adornment—that incorporates fur or feathers, claws, teeth, or bones of the totem animal. At your option, you also gain minor physical attributes that are reminiscent of your totem spirit. For example, if you have a bear totem spirit, you might be unusually hairy and thick-skinned, or if your totem is the eagle, your eyes turn bright yellow.",
									},
									{
										body: "Your totem animal might be an animal related to those listed here but more appropriate to your homeland. For example, you could choose a hawk or vulture in place of an eagle.",
									},
									{
										index: "bear",
										name: "Bear. ",
										desc: "While raging, you have resistance to all damage except psychic damage. The spirit of the bear makes you tough enough to stand up to any punishment.",
									},
									{
										index: "eagle",
										name: "Eagle. ",
										body: "While you're raging and aren't wearing heavy armor, other creatures have disadvantage on opportunity attack rolls against you, and you can use the Dash action as a bonus action on your turn. The spirit of the eagle makes you into a predator who can weave through the fray with ease.",
									},
									{
										index: "elk",
										name: "Elk. ",
										body: "While you're raging and aren't wearing heavy armor, your walking speed increases by 15 feet. The spirit of the elk makes you extraordinarily swift.",
									},
									{
										index: "tiger",
										name: "Tiger. ",
										body: "While raging, you can add 10 feet to your long jump distance and 3 feet to your high jump distance. The spirit of the tiger empowers your leaps.",
									},
									{
										index: "wolf",
										name: "Wolf.",
										body: "While you're raging, your friends have advantage on melee attack rolls against any creature within 5 feet of you that is hostile to you. The spirit of the wolf makes you a leader of hunters.",
									},
								],
							},
						],
					},
					{
						level: 6,
						features: [
							{
								index: "aspect-of-the-beast",
								name: "Aspect of the Beast",
								desc: [
									{
										body: "At 6th level, you gain a magical benefit based on the totem animal of your choice. You can choose the same animal you selected at 3rd level or a different one.",
									},
									{
										index: "bear",
										name: "Bear.",
										body: "You gain the might of a bear. Your carrying capacity (including maximum load and maximum lift) is doubled, and you have advantage on Strength checks made to push, pull, lift, or break objects.",
									},
									{
										index: "eagle",
										name: "Eagle.",
										body: "You gain the eyesight of an eagle. You can see up to 1 mile away with no difficulty, able to discern even fine details as though looking at something no more than 100 feet away from you. Additionally, dim light doesn't impose disadvantage on your Wisdom (Perception) checks.",
									},
									{
										index: "elk",
										name: "Elk.",
										body: "Whether mounted or on foot, your travel pace is doubled, as is the travel pace of up to ten companions while they're within 60 feet of you and you're not incapacitated. The elk spirit helps you roam far and fast.",
									},
									{
										index: "tiger",
										name: "Tiger.",
										body: "You gain proficiency in two skills from the following list: Athletics, Acrobatics, Stealth, and Survival. The cat spirit hones your survival instincts.",
									},
									{
										index: "wolf",
										name: "Wolf.",
										body: "You gain the hunting sensibilities of a wolf. You can track other creatures while traveling at a fast pace, and you can move stealthily while traveling at a normal pace.",
									},
								],
							},
						],
					},
					{
						level: 10,
						features: [
							{
								index: "spirit-walker",
								name: "Spirit Walker",
								desc: [
									{
										body: "At 10th level, you can cast the commune with nature spell, but only as a ritual. When you do so, a spiritual version of one of the animals you chose for Totem Spirit or Aspect of the Beast appears to you to convey the information you seek.",
									},
								],
							},
						],
					},
					{
						level: 14,
						features: [
							{
								index: "totemic-attunement",
								name: "Totemic Attunement",
								desc: [
									{
										body: "At 14th level, you gain a magical benefit based on a totem animal of your choice. You can choose the same animal you selected previously or a different one.",
									},
									{
										index: "bear",
										name: "Bear.",
										body: "Bear. While you're raging, any creature within 5 feet of you that's hostile to you has disadvantage on attack rolls against targets other than you or another character with this feature. An enemy is immune to this effect if it can't see or hear you or if it can't be frightened.",
									},
									{
										index: "eagle",
										name: "Eagle.",
										body: "While raging, you have a flying speed equal to your current walking speed. This benefit works only in short bursts; you fall if you end your turn in the air and nothing else is holding you aloft.",
									},
									{
										index: "elk",
										name: "Elk.",
										body: "While raging, you can use a bonus action during your move to pass through the space of a Large or smaller creature. That creature must succeed on a Strength saving throw (DC 8 + your Strength bonus + your proficiency bonus) or be knocked prone and take bludgeoning damage equal to 1d12 + your Strength modifier.",
									},
									{
										index: "tiger",
										name: "Tiger.",
										body: "While you're raging, if you move at least 20 feet in a straight line toward a Large or smaller target right before making a melee weapon attack against it, you can use a bonus action to make an additional melee weapon attack against it.",
									},
									{
										index: "wolf",
										name: "Wolf.",
										body: "While you're raging, you can use a bonus action on your turn to knock a Large or smaller creature prone when you hit it with melee weapon attack.",
									},
								],
							},
						],
					},
				],
			},
		],
	},
	{
		index: "bard",
		name: "Bard",
		hit_die: 8,
		proficiency_choices: [
			{
				desc: "Choose any three",
				choose: 3,
				type: "proficiencies",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "reference",
							item: {
								index: "skill-acrobatics",
								name: "Skill: Acrobatics",
								url: "/api/2014/proficiencies/skill-acrobatics",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-animal-handling",
								name: "Skill: Animal Handling",
								url: "/api/2014/proficiencies/skill-animal-handling",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-arcana",
								name: "Skill: Arcana",
								url: "/api/2014/proficiencies/skill-arcana",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-athletics",
								name: "Skill: Athletics",
								url: "/api/2014/proficiencies/skill-athletics",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-deception",
								name: "Skill: Deception",
								url: "/api/2014/proficiencies/skill-deception",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-history",
								name: "Skill: History",
								url: "/api/2014/proficiencies/skill-history",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-insight",
								name: "Skill: Insight",
								url: "/api/2014/proficiencies/skill-insight",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-intimidation",
								name: "Skill: Intimidation",
								url: "/api/2014/proficiencies/skill-intimidation",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-investigation",
								name: "Skill: Investigation",
								url: "/api/2014/proficiencies/skill-investigation",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-medicine",
								name: "Skill: Medicine",
								url: "/api/2014/proficiencies/skill-medicine",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-nature",
								name: "Skill: Nature",
								url: "/api/2014/proficiencies/skill-nature",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-perception",
								name: "Skill: Perception",
								url: "/api/2014/proficiencies/skill-perception",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-performance",
								name: "Skill: Performance",
								url: "/api/2014/proficiencies/skill-performance",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-persuasion",
								name: "Skill: Persuasion",
								url: "/api/2014/proficiencies/skill-persuasion",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-religion",
								name: "Skill: Religion",
								url: "/api/2014/proficiencies/skill-religion",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-sleight-of-hand",
								name: "Skill: Sleight of Hand",
								url: "/api/2014/proficiencies/skill-sleight-of-hand",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-stealth",
								name: "Skill: Stealth",
								url: "/api/2014/proficiencies/skill-stealth",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-survival",
								name: "Skill: Survival",
								url: "/api/2014/proficiencies/skill-survival",
							},
						},
					],
				},
			},
			{
				desc: "Three musical instruments of your choice",
				choose: 3,
				type: "proficiencies",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "reference",
							item: {
								index: "bagpipes",
								name: "Bagpipes",
								url: "/api/2014/proficiencies/bagpipes",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "drum",
								name: "Drum",
								url: "/api/2014/proficiencies/drum",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "dulcimer",
								name: "Dulcimer",
								url: "/api/2014/proficiencies/dulcimer",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "flute",
								name: "Flute",
								url: "/api/2014/proficiencies/flute",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "lute",
								name: "Lute",
								url: "/api/2014/proficiencies/lute",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "lyre",
								name: "Lyre",
								url: "/api/2014/proficiencies/lyre",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "horn",
								name: "Horn",
								url: "/api/2014/proficiencies/horn",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "pan-flute",
								name: "Pan flute",
								url: "/api/2014/proficiencies/pan-flute",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "shawm",
								name: "Shawm",
								url: "/api/2014/proficiencies/shawm",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "viol",
								name: "Viol",
								url: "/api/2014/proficiencies/viol",
							},
						},
					],
				},
			},
		],
		proficiencies: [
			{
				index: "light-armor",
				name: "Light Armor",
				url: "/api/2014/proficiencies/light-armor",
			},
			{
				index: "simple-weapons",
				name: "Simple Weapons",
				url: "/api/2014/proficiencies/simple-weapons",
			},
			{
				index: "longswords",
				name: "Longswords",
				url: "/api/2014/proficiencies/longswords",
			},
			{
				index: "rapiers",
				name: "Rapiers",
				url: "/api/2014/proficiencies/rapiers",
			},
			{
				index: "shortswords",
				name: "Shortswords",
				url: "/api/2014/proficiencies/shortswords",
			},
			{
				index: "hand-crossbows",
				name: "Hand crossbows",
				url: "/api/2014/proficiencies/hand-crossbows",
			},
		],
		saving_throws: [
			{
				index: "dex",
				name: "DEX",
				url: "/api/2014/ability-scores/dex",
			},
			{
				index: "cha",
				name: "CHA",
				url: "/api/2014/ability-scores/cha",
			},
		],
		starting_equipment: [
			{
				equipment: {
					index: "leather-armor",
					name: "Leather Armor",
					url: "/api/2014/equipment/leather-armor",
				},
				quantity: 1,
			},
			{
				equipment: {
					index: "dagger",
					name: "Dagger",
					url: "/api/2014/equipment/dagger",
				},
				quantity: 1,
			},
		],
		starting_equipment_options: [
			{
				desc: "(a) a rapier, (b) a longsword, or (c) any simple weapon",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "rapier",
								name: "Rapier",
								url: "/api/2014/equipment/rapier",
							},
						},
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "longsword",
								name: "Longsword",
								url: "/api/2014/equipment/longsword",
							},
						},
						{
							option_type: "choice",
							choice: {
								desc: "any simple weapon",
								choose: 1,
								type: "equipment",
								from: {
									option_set_type: "equipment_category",
									equipment_category: {
										index: "simple-weapons",
										name: "Simple Weapons",
										url: "/api/2014/equipment-categories/simple-weapons",
									},
								},
							},
						},
					],
				},
			},
			{
				desc: "(a) a diplomat’s pack or (b) an entertainer’s pack",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "diplomats-pack",
								name: "Diplomat's Pack",
								url: "/api/2014/equipment/diplomats-pack",
							},
						},
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "entertainers-pack",
								name: "Entertainer's Pack",
								url: "/api/2014/equipment/entertainers-pack",
							},
						},
					],
				},
			},
			{
				desc: "(a) a lute or (b) any other musical instrument",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "lute",
								name: "Lute",
								url: "/api/2014/equipment/lute",
							},
						},
						{
							option_type: "choice",
							choice: {
								desc: "any other musical instrument",
								choose: 1,
								type: "equipment",
								from: {
									option_set_type: "equipment_category",
									equipment_category: {
										index: "musical-instruments",
										name: "Musical Instruments",
										url: "/api/2014/equipment-categories/musical-instruments",
									},
								},
							},
						},
					],
				},
			},
		],
		class_levels: "",
		multi_classing: {
			prerequisites: [
				{
					ability_score: {
						index: "cha",
						name: "CHA",
						url: "/api/2014/ability-scores/cha",
					},
					minimum_score: 13,
				},
			],
			proficiencies: [
				{
					index: "light-armor",
					name: "Light Armor",
					url: "/api/2014/proficiencies/light-armor",
				},
			],
			proficiency_choices: [
				{
					desc: "skill",
					choose: 1,
					type: "proficiencies",
					from: {
						option_set_type: "options_array",
						options: [
							{
								option_type: "reference",
								item: {
									index: "skill-acrobatics",
									name: "Skill: Acrobatics",
									url: "/api/2014/proficiencies/skill-acrobatics",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-animal-handling",
									name: "Skill: Animal Handling",
									url: "/api/2014/proficiencies/skill-animal-handling",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-arcana",
									name: "Skill: Arcana",
									url: "/api/2014/proficiencies/skill-arcana",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-athletics",
									name: "Skill: Athletics",
									url: "/api/2014/proficiencies/skill-athletics",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-deception",
									name: "Skill: Deception",
									url: "/api/2014/proficiencies/skill-deception",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-history",
									name: "Skill: History",
									url: "/api/2014/proficiencies/skill-history",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-insight",
									name: "Skill: Insight",
									url: "/api/2014/proficiencies/skill-insight",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-intimidation",
									name: "Skill: Intimidation",
									url: "/api/2014/proficiencies/skill-intimidation",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-investigation",
									name: "Skill: Investigation",
									url: "/api/2014/proficiencies/skill-investigation",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-medicine",
									name: "Skill: Medicine",
									url: "/api/2014/proficiencies/skill-medicine",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-nature",
									name: "Skill: Nature",
									url: "/api/2014/proficiencies/skill-nature",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-perception",
									name: "Skill: Perception",
									url: "/api/2014/proficiencies/skill-perception",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-performance",
									name: "Skill: Performance",
									url: "/api/2014/proficiencies/skill-performance",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-persuasion",
									name: "Skill: Persuasion",
									url: "/api/2014/proficiencies/skill-persuasion",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-religion",
									name: "Skill: Religion",
									url: "/api/2014/proficiencies/skill-religion",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-sleight-of-hand",
									name: "Skill: Sleight of Hand",
									url: "/api/2014/proficiencies/skill-sleight-of-hand",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-stealth",
									name: "Skill: Stealth",
									url: "/api/2014/proficiencies/skill-stealth",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-survival",
									name: "Skill: Survival",
									url: "/api/2014/proficiencies/skill-survival",
								},
							},
						],
					},
				},
				{
					desc: "musical instrument",
					choose: 1,
					type: "proficiencies",
					from: {
						option_set_type: "options_array",
						options: [
							{
								option_type: "reference",
								item: {
									index: "bagpipes",
									name: "Bagpipes",
									url: "/api/2014/proficiencies/bagpipes",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "drum",
									name: "Drum",
									url: "/api/2014/proficiencies/drum",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "dulcimer",
									name: "Dulcimer",
									url: "/api/2014/proficiencies/dulcimer",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "flute",
									name: "Flute",
									url: "/api/2014/proficiencies/flute",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "lute",
									name: "Lute",
									url: "/api/2014/proficiencies/lute",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "lyre",
									name: "Lyre",
									url: "/api/2014/proficiencies/lyre",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "horn",
									name: "Horn",
									url: "/api/2014/proficiencies/horn",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "pan-flute",
									name: "Pan flute",
									url: "/api/2014/proficiencies/pan-flute",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "shawm",
									name: "Shawm",
									url: "/api/2014/proficiencies/shawm",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "viol",
									name: "Viol",
									url: "/api/2014/proficiencies/viol",
								},
							},
						],
					},
				},
			],
		},
		subclasses: [
			{
				index: "lore",
				name: "Lore",
				subclass_flavor: "Bard College",
				desc: [
					"Bards of the College of Lore know something about most things, collecting bits of knowledge from sources as diverse as scholarly tomes and peasant tales. Whether singing folk ballads in taverns or elaborate compositions in royal courts, these bards use their gifts to hold audiences spellbound. When the applause dies down, the audience members might find themselves questioning everything they held to be true, from their faith in the priesthood of the local temple to their loyalty to the king. The loyalty of these bards lies in the pursuit of beauty and truth, not in fealty to a monarch or following the tenets of a deity. A noble who keeps such a bard as a herald or advisor knows that the bard would rather be honest than politic. The college's members gather in libraries and sometimes in actual colleges, complete with classrooms and dormitories, to share their lore with one another. They also meet at festivals or affairs of state, where they can expose corruption, unravel lies, and poke fun at self-important figures of authority.",
				],
				subclass_levels: [
					{
						level: 3,
						features: [
							{
								index: "bonus-proficiencies",
								name: "Bonus Proficiencies",
								level: 3,
								prerequisites: [],
								desc: [
									{
										body: "When you join the College of Lore at 3rd level, you gain proficiency with three skills of your choice.",
									},
								],
							},
							{
								index: "cutting-words",
								name: "Cutting Words",
								level: 3,
								prerequisites: [],
								desc: [
									{
										body: "Also at 3rd level, you learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others.",
									},
									{
										body: "When a creature that you can see within 60 feet of you makes an attack roll, an ability check, or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and subtracting the number rolled from the creature's roll.",
									},
									{
										body: "You can choose to use this feature after the creature makes its roll, but before the GM determines whether the attack roll or ability check succeeds or fails, or before the creature deals its damage. The creature is immune if it can't hear you or if it's immune to being charmed.",
									},
								],
								url: "/api/2014/features/cutting-words",
								updated_at: "2025-10-24T20:42:13.150Z",
							},
						],
						subclass_specific: { additional_magical_secrets_max_lvl: 0 },
					},
					{
						level: 6,
						features: [
							{
								index: "additional-magical-secrets",
								name: "Additional Magical Secrets",
								level: 6,
								prerequisites: [],
								desc: [
									{
										body: "At 6th level, you learn two spells of your choice from any class. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen spells count as bard spells for you but don't count against the number of bard spells you know.",
									},
								],
							},
						],
						subclass_specific: { additional_magical_secrets_max_lvl: 3 },
					},
					{
						level: 14,
						features: [
							{
								index: "peerless-skill",
								name: "Peerless Skill",
								level: 14,
								prerequisites: [],
								desc: [
									{
										body: "Starting at 14th level, when you make an ability check, you can expend one use of Bardic Inspiration. Roll a Bardic Inspiration die and add the number rolled to your ability check. You can choose to do so after you roll the die for the ability check, but before the GM tells you whether you succeed or fail.",
									},
								],
							},
						],

						subclass_specific: { additional_magical_secrets_max_lvl: 3 },
					},
				],
				spells: [],
			},
			{
				index: "valor",
				name: "Valor",
				subclass_flavor: "Bard College",
				desc: [
					"Bards of the College of Valor are daring skalds whose tales keep alive the memory of the great heroes of the past, and thereby inspire a new generation of heroes. These bards gather in mead halls or around great bonfires to sing the deeds of the mighty, both past and present. They travel the land to witness great events firsthand and to ensure that the memory of those events doesn't pass from the world. With their songs, they inspire others to reach the same heights of accomplishment as the heroes of old.",
				],
				subclass_levels: [
					{
						level: 3,
						features: [
							{
								index: "bonus-proficiencies",
								name: "Bonus Proficiencies",
								level: 3,
								prerequisites: [],
								desc: [
									{
										body: "When you join the College of Valor at 3rd level, you gain proficiency with medium armor, shields, and martial weapons.",
									},
								],
							},
							{
								index: "combat-inspiration",
								name: "Combat Inspiration",
								level: 3,
								prerequisites: [],
								desc: [
									{
										body: "Also at 3rd level, you learn to inspire others in battle. A creature that has a Bardic Inspiration die from you can roll that die and add the number rolled to a weapon damage roll it just made. Alternatively, when an attack roll is made against the creature, it can use its reaction to roll the Bardic Inspiration die and add the number rolled to its AC against that attack, after seeing the roll but before knowing whether it hits or misses.",
									},
								],
							},
						],
					},
					{
						level: 6,
						features: [
							{
								index: "extra-attack",
								name: "Extra Attack",
								level: 6,
								prerequisites: [],
								desc: [
									{
										body: "Starting at 6th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.",
									},
								],
							},
						],
					},
					{
						level: 14,
						features: [
							{
								index: "battle-magic",
								name: "Battle Magic",
								level: 14,
								prerequisites: [],
								desc: [
									{
										body: "At 14th level, you have mastered the art of weaving spellcasting and weapon use into a single harmonious act. When you use your action to cast a bard spell, you can make one weapon attack as a bonus action.",
									},
								],
							},
						],
					},
				],
				spells: [],
			},
		],
		spellcasting: {
			level: 1,
			spellcasting_ability: {
				index: "cha",
				name: "CHA",
				url: "/api/2014/ability-scores/cha",
			},
			info: [
				{
					name: "Cantrips",
					desc: [
						"You know two cantrips of your choice from the bard spell list. You learn additional bard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Bard table.",
					],
				},
				{
					name: "Spell Slots",
					desc: [
						"The Bard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
						"For example, if you know the 1st-level spell cure wounds and have a 1st-level and a 2nd-level spell slot available, you can cast cure wounds using either slot.",
					],
				},
				{
					name: "Spells Known of 1st Level and Higher",
					desc: [
						"You know four 1st-level spells of your choice from the bard spell list.",
						"The Spells Known column of the Bard table shows when you learn more bard spells of your choice.",
						"Each of these spells must be of a level for which you have spell slots, as shown on the table. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.",
						"Additionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots.",
					],
				},
				{
					name: "Spellcasting Ability",
					desc: [
						"Charisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one.",
						"Spell save DC = 8 + your proficiency bonus + your Charisma modifier.",
						"Spell attack modifier = your proficiency bonus + your Charisma modifier.",
					],
				},
				{
					name: "Ritual Casting",
					desc: [
						"You can cast any bard spell you know as a ritual if that spell has the ritual tag.",
					],
				},
				{
					name: "Spellcasting Focus",
					desc: [
						"You can use a musical instrument (see Equipment) as a spellcasting focus for your bard spells.",
					],
				},
			],
		},
		spells: "/api/2014/classes/bard/spells",
		url: "/api/2014/classes/bard",
		updated_at: "2025-10-24T20:42:12.459Z",
	},
	{
		index: "cleric",
		name: "Cleric",
		hit_die: 8,
		proficiency_choices: [
			{
				desc: "Choose two from History, Insight, Medicine, Persuasion, and Religion",
				choose: 2,
				type: "proficiencies",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "reference",
							item: {
								index: "skill-history",
								name: "Skill: History",
								url: "/api/2014/proficiencies/skill-history",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-insight",
								name: "Skill: Insight",
								url: "/api/2014/proficiencies/skill-insight",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-medicine",
								name: "Skill: Medicine",
								url: "/api/2014/proficiencies/skill-medicine",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-persuasion",
								name: "Skill: Persuasion",
								url: "/api/2014/proficiencies/skill-persuasion",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-religion",
								name: "Skill: Religion",
								url: "/api/2014/proficiencies/skill-religion",
							},
						},
					],
				},
			},
		],
		proficiencies: [
			{
				index: "light-armor",
				name: "Light Armor",
				url: "/api/2014/proficiencies/light-armor",
			},
			{
				index: "medium-armor",
				name: "Medium Armor",
				url: "/api/2014/proficiencies/medium-armor",
			},
			{
				index: "shields",
				name: "Shields",
				url: "/api/2014/proficiencies/shields",
			},
			{
				index: "simple-weapons",
				name: "Simple Weapons",
				url: "/api/2014/proficiencies/simple-weapons",
			},
		],
		saving_throws: [
			{
				index: "wis",
				name: "WIS",
				url: "/api/2014/ability-scores/wis",
			},
			{
				index: "cha",
				name: "CHA",
				url: "/api/2014/ability-scores/cha",
			},
		],
		starting_equipment: [
			{
				equipment: {
					index: "shield",
					name: "Shield",
					url: "/api/2014/equipment/shield",
				},
				quantity: 1,
			},
		],
		starting_equipment_options: [
			{
				desc: "(a) a mace or (b) a warhammer (if proficient)",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "mace",
								name: "Mace",
								url: "/api/2014/equipment/mace",
							},
						},
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "warhammer",
								name: "Warhammer",
								url: "/api/2014/equipment/warhammer",
							},
							prerequisites: [
								{
									type: "proficiency",
									proficiency: {
										index: "warhammers",
										name: "Warhammers",
										url: "/api/2014/proficiencies/warhammers",
									},
								},
							],
						},
					],
				},
			},
			{
				desc: "(a) scale mail, (b) leather armor, or (c) chain mail (if proficient)",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "scale-mail",
								name: "Scale Mail",
								url: "/api/2014/equipment/scale-mail",
							},
						},
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "leather-armor",
								name: "Leather Armor",
								url: "/api/2014/equipment/leather-armor",
							},
						},
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "chain-mail",
								name: "Chain Mail",
								url: "/api/2014/equipment/chain-mail",
							},
							prerequisites: [
								{
									type: "proficiency",
									proficiency: {
										index: "chain-mail",
										name: "Chain Mail",
										url: "/api/2014/proficiencies/chain-mail",
									},
								},
							],
						},
					],
				},
			},
			{
				desc: "(a) a light crossbow and 20 bolts or (b) any simple weapon",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "multiple",
							items: [
								{
									option_type: "counted_reference",
									count: 1,
									of: {
										index: "crossbow-light",
										name: "Crossbow, light",
										url: "/api/2014/equipment/crossbow-light",
									},
								},
								{
									option_type: "counted_reference",
									count: 20,
									of: {
										index: "crossbow-bolt",
										name: "Crossbow bolt",
										url: "/api/2014/equipment/crossbow-bolt",
									},
								},
							],
						},
						{
							option_type: "choice",
							choice: {
								desc: "any simple weapon",
								choose: 1,
								type: "equipment",
								from: {
									option_set_type: "equipment_category",
									equipment_category: {
										index: "simple-weapons",
										name: "Simple Weapons",
										url: "/api/2014/equipment-categories/simple-weapons",
									},
								},
							},
						},
					],
				},
			},
			{
				desc: "(a) a priest’s pack or (b) an explorer’s pack",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "priests-pack",
								name: "Priest's Pack",
								url: "/api/2014/equipment/priests-pack",
							},
						},
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "explorers-pack",
								name: "Explorer's Pack",
								url: "/api/2014/equipment/explorers-pack",
							},
						},
					],
				},
			},
			{
				desc: "holy symbol",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "equipment_category",
					equipment_category: {
						index: "holy-symbols",
						name: "Holy Symbols",
						url: "/api/2014/equipment-categories/holy-symbols",
					},
				},
			},
		],
		class_levels: "/api/2014/classes/cleric/levels",
		multi_classing: {
			prerequisites: [
				{
					ability_score: {
						index: "wis",
						name: "WIS",
						url: "/api/2014/ability-scores/wis",
					},
					minimum_score: 13,
				},
			],
			proficiencies: [
				{
					index: "light-armor",
					name: "Light Armor",
					url: "/api/2014/proficiencies/light-armor",
				},
				{
					index: "medium-armor",
					name: "Medium Armor",
					url: "/api/2014/proficiencies/medium-armor",
				},
				{
					index: "shields",
					name: "Shields",
					url: "/api/2014/proficiencies/shields",
				},
			],
		},
		subclasses: [
			{
				index: "life",
				name: "Life",
				subclass_flavor: "Divine Domain",
				desc: [
					"The Life domain focuses on the vibrant positive energy--one of the fundamental forces of the universe--that sustains all life. The gods of life promote vitality and health through healing the sick and wounded, caring for those in need, and driving away the forces of death and undeath. Almost any non-evil deity can claim influence over this domain, particularly agricultural deities, sun gods, gods of healing or endurance, and gods of home and community.",
				],
				spells: [
					{
						prerequisites: [
							{
								index: "cleric-1",
								type: "level",
								name: "Cleric 1",
								url: "/api/2014/classes/cleric/levels/1",
							},
						],
						spell: {
							index: "bless",
							name: "Bless",
							url: "/api/2014/spells/bless",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-1",
								type: "level",
								name: "Cleric 1",
								url: "/api/2014/classes/cleric/levels/1",
							},
						],
						spell: {
							index: "cure-wounds",
							name: "Cure Wounds",
							url: "/api/2014/spells/cure-wounds",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-3",
								type: "level",
								name: "Cleric 3",
								url: "/api/2014/classes/cleric/levels/3",
							},
						],
						spell: {
							index: "lesser-restoration",
							name: "Lesser Restoration",
							url: "/api/2014/spells/lesser-restoration",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-3",
								type: "level",
								name: "Cleric 3",
								url: "/api/2014/classes/cleric/levels/3",
							},
						],
						spell: {
							index: "spiritual-weapon",
							name: "Spiritual Weapon",
							url: "/api/2014/spells/spiritual-weapon",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-5",
								type: "level",
								name: "Cleric 5",
								url: "/api/2014/classes/cleric/levels/5",
							},
						],
						spell: {
							index: "beacon-of-hope",
							name: "Beacon of Hope",
							url: "/api/2014/spells/beacon-of-hope",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-5",
								type: "level",
								name: "Cleric 5",
								url: "/api/2014/classes/cleric/levels/5",
							},
						],
						spell: {
							index: "revivify",
							name: "Revivify",
							url: "/api/2014/spells/revivify",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-7",
								type: "level",
								name: "Cleric 7",
								url: "/api/2014/classes/cleric/levels/7",
							},
						],
						spell: {
							index: "death-ward",
							name: "Death Ward",
							url: "/api/2014/spells/death-ward",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-9",
								type: "level",
								name: "Cleric 9",
								url: "/api/2014/classes/cleric/levels/9",
							},
						],
						spell: {
							index: "mass-cure-wounds",
							name: "Mass Cure Wounds",
							url: "/api/2014/spells/mass-cure-wounds",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-9",
								type: "level",
								name: "Cleric 9",
								url: "/api/2014/classes/cleric/levels/9",
							},
						],
						spell: {
							index: "raise-dead",
							name: "Raise Dead",
							url: "/api/2014/spells/raise-dead",
						},
					},
				],
				subclass_levels: [
					{
						level: 1,
						features: [
							{
								index: "bonus-proficiency",
								name: "Bonus Proficiency",
								desc: [
									{
										body: "When you choose this domain at 1st level, you gain proficiency with heavy armor.",
									},
								],
							},
							{
								index: "disciple-of-life",
								name: "Disciple of Life",
								desc: [
									{
										body: "Also starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell's level.",
									},
								],
							},
						],
					},
					{
						level: 2,
						features: [
							{
								index: "channel-divinity-preserve-life",
								name: "Channel Divinity: Preserve Life",
								desc: [
									{
										body: "Starting at 2nd level, you can use your Channel Divinity to heal the badly injured.",
									},
									{
										body: "As an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level. Choose any creatures within 30 feet of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can't use this feature on an undead or a construct.",
									},
								],
							},
						],
					},
					{
						level: 6,
						features: [
							{
								index: "blessed-healer",
								name: "Blessed Healer",
								desc: [
									{
										body: "Beginning at 6th level, the healing spells you cast on others heal you as well. When you cast a spell of 1st level or higher that restores hit points to a creature other than you, you regain hit points equal to 2 + the spell's level.",
									},
								],
							},
						],
					},
					{
						level: 8,
						features: [
							{
								index: "divine-strike",
								name: "Divine Strike",
								desc: [
									{
										body: "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8.",
									},
								],
							},
						],
					},
					{
						level: 17,
						features: [
							{
								index: "supreme-healing",
								name: "Supreme Healing",
								desc: [
									{
										body: "Starting at 17th level, when you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die.",
									},
								],
							},
						],
					},
				],
			},
			{
				index: "knowledge",
				name: "Knowledge",
				subclass_flavor: "Divine Domain",
				desc: [
					"The gods of knowledge—including Oghma, Boccob, Gilean, Aureon, and Thoth—value learning and understanding above all. Some teach that knowledge is to be gathered and shared in libraries and universities, or promote the practical knowledge of craft and invention. Some deities hoard knowledge and keep its secrets to themselves. And some promise their followers that they will gain tremendous power if they unlock the secrets of the multiverse. Followers of these gods study esoteric lore, collect old tomes, delve into the secret places of the earth, and learn all they can. Some gods of knowledge promote the practical knowledge of craft and invention, including smith deities like Gond, Reorx, Onatar, Moradin, Hephaestus, and Goibhniu.",
				],
				spells: [
					{
						prerequisites: [
							{
								index: "cleric-1",
								type: "level",
								name: "Cleric 1",
								url: "/api/2014/classes/cleric/levels/1",
							},
						],
						spell: {
							index: "command",
							name: "Command",
							url: "/api/2014/spells/command",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-1",
								type: "level",
								name: "Cleric 1",
								url: "/api/2014/classes/cleric/levels/1",
							},
						],
						spell: {
							index: "identify",
							name: "Identify",
							url: "/api/2014/spells/identify",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-3",
								type: "level",
								name: "Cleric 3",
								url: "/api/2014/classes/cleric/levels/3",
							},
						],
						spell: {
							index: "augury",
							name: "Augury",
							url: "/api/2014/spells/augury",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-3",
								type: "level",
								name: "Cleric 3",
								url: "/api/2014/classes/cleric/levels/3",
							},
						],
						spell: {
							index: "suggestion",
							name: "Suggestion",
							url: "/api/2014/spells/suggestion",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-5",
								type: "level",
								name: "Cleric 5",
								url: "/api/2014/classes/cleric/levels/5",
							},
						],
						spell: {
							index: "nondetection",
							name: "Nondetection",
							url: "/api/2014/spells/nondetection",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-5",
								type: "level",
								name: "Cleric 5",
								url: "/api/2014/classes/cleric/levels/5",
							},
						],
						spell: {
							index: "speak-with-dead",
							name: "Speak with Dead",
							url: "/api/2014/spells/speak-with-dead",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-7",
								type: "level",
								name: "Cleric 7",
								url: "/api/2014/classes/cleric/levels/7",
							},
						],
						spell: {
							index: "arcane-eye",
							name: "Arcane Eye",
							url: "/api/2014/spells/arcane-eye",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-7",
								type: "level",
								name: "Cleric 7",
								url: "/api/2014/classes/cleric/levels/7",
							},
						],
						spell: {
							index: "confusion",
							name: "Confusion",
							url: "/api/2014/spells/confusion",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-9",
								type: "level",
								name: "Cleric 9",
								url: "/api/2014/classes/cleric/levels/9",
							},
						],
						spell: {
							index: "legend-lore",
							name: "Legend Lore",
							url: "/api/2014/spells/legend-lore",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-9",
								type: "level",
								name: "Cleric 9",
								url: "/api/2014/classes/cleric/levels/9",
							},
						],
						spell: {
							index: "scrying",
							name: "Scrying",
							url: "/api/2014/spells/scrying",
						},
					},
				],
				subclass_levels: [
					{
						level: 1,
						features: [
							{
								index: "blessings-of-knowledge",
								name: "Blessings of Knowledge",
								desc: [
									{
										body: "At 1st level, you learn two languages of your choice. You also become proficient in your choice of two of the following skills: Arcana, History, Nature, or Religion.",
									},
									{
										body: "Your proficiency bonus is doubled for any ability check you make that uses either of those skills.",
									},
								],
							},
						],
					},
					{
						level: 2,
						features: [
							{
								index: "channel-divinity-knowledge-of-the-ages",
								name: "Channel Divinity: Knowledge of the Ages",
								desc: [
									{
										body: "Starting at 2nd level, you can use your Channel Divinity to tap into a divine well of knowledge. As an action, you choose one skill or tool. For 10 minutes, you have proficiency with the chosen skill or tool.",
									},
								],
							},
							{
								index: "channel-divinity-read-thoughts",
								name: "Channel Divinity: Read Thoughts",
								desc: [
									{
										body: "At 6th level, you can use your Channel Divinity to read a creature's thoughts. You can then use your access to the creature's mind to command it.",
									},
									{
										body: "As an action, choose one creature that you can see within 60 feet of you. That creature must make a Wisdom saving throw. If the creature succeeds on the saving throw, you can't use this feature on it again until you finish a long rest.",
									},
									{
										body: "If the creature fails its save, you can read its surface thoughts (those foremost in its mind, reflecting its current emotions and what it is actively thinking about) when it is within 60 feet of you. This effect lasts for 1 minute.",
									},
									{
										body: "During that time, you can use your action to end this effect and cast the suggestion spell on the creature without expending a spell slot. The target automatically fails its saving throw against the spell.",
									},
								],
							},
						],
					},
					{
						level: 6,
						features: [
							{
								index: "potent-spellcasting",
								name: "Potent Spellcasting",
								desc: [
									{
										body: "Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.",
									},
								],
							},
						],
					},
					{
						level: 17,
						features: [
							{
								index: "visions-of-the-past",
								name: "Visions of the Past",
								desc: [
									{
										body: "Starting at 17th level, you can call up visions of the past that relate to an object you hold or your immediate surroundings. You spend at least 1 minute in meditation and prayer, then receive dreamlike, shadowy glimpses of recent events. You can meditate in this way for a number of minutes equal to your Wisdom score and must maintain concentration during that time, as if you were casting a spell.",
									},
									{
										body: "Once you use this feature, you can't use it again until you finish a short or long rest.",
									},
									{
										body: "Object Reading. Holding an object as you meditate, you can see visions of the object's previous owner. After meditating for 1 minute, you learn how the owner acquired and lost the object, as well as the most recent significant event involving the object and that owner. If the object was owned by another creature in the recent past (within a number of days equal to your Wisdom score), you can spend 1 additional minute for each owner to learn the same information about that creature.",
									},
									{
										body: "Area Reading. As you meditate, you see visions of recent events in your immediate vicinity (a room, street, tunnel, clearing, or the like, up to a 50-foot cube), going back a number of days equal to your Wisdom score. For each minute you meditate, you learn about one significant event, beginning with the most recent. Significant events typically involve powerful emotions, such as battles and betrayals, marriages and murders, births and funerals. However, they might also include more mundane events that are nevertheless important in your current situation.",
									},
								],
							},
						],
					},
				],
			},
			{
				index: "war",
				name: "War",
				subclass_flavor: "Divine Domain",
				desc: [
					"War has many manifestations. It can make heroes of ordinary people. It can be desperate and horrifying, with acts of cruelty and cowardice eclipsing instances of excellence and courage. In either case, the gods of war watch over warriors and reward them for their great deeds. The gods of war include champions of honor and chivalry (such as Torm, Heironeous, and Kiri-Jolith) as well as gods of destruction and pillage (such as Erythnul, the Fury, Gruumsh, and Ares) and gods of conquest and domination (such as Bane, Hextor, and Maglubiyet). Other war gods (such as Tempus, Nike, and Nuada) take a more neutral stance, promoting war in all its manifestations and supporting warriors in any circumstance.",
				],
				spells: [
					{
						prerequisites: [
							{
								index: "cleric-1",
								type: "level",
								name: "Cleric 1",
								url: "/api/2014/classes/cleric/levels/1",
							},
						],
						spell: {
							index: "divine-favor",
							name: "Divine Favor",
							url: "/api/2014/spells/divine-favor",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-1",
								type: "level",
								name: "Cleric 1",
								url: "/api/2014/classes/cleric/levels/1",
							},
						],
						spell: {
							index: "shield-of-faith",
							name: "Shield of Faith",
							url: "/api/2014/spells/shield-of-faith",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-3",
								type: "level",
								name: "Cleric 3",
								url: "/api/2014/classes/cleric/levels/3",
							},
						],
						spell: {
							index: "magic-weapon",
							name: "Magic Weapon",
							url: "/api/2014/spells/magic-weapon",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-3",
								type: "level",
								name: "Cleric 3",
								url: "/api/2014/classes/cleric/levels/3",
							},
						],
						spell: {
							index: "spiritual-weapon",
							name: "Spiritual Weapon",
							url: "/api/2014/spells/spiritual-weapon",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-5",
								type: "level",
								name: "Cleric 5",
								url: "/api/2014/classes/cleric/levels/5",
							},
						],
						spell: {
							index: "crusaders-mantle",
							name: "Crusader's Mantle",
							url: "/api/2014/spells/crusaders-mantle",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-5",
								type: "level",
								name: "Cleric 5",
								url: "/api/2014/classes/cleric/levels/5",
							},
						],
						spell: {
							index: "spirit-guardians",
							name: "Spirit Guardians",
							url: "/api/2014/spells/spirit-guardians",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-7",
								type: "level",
								name: "Cleric 7",
								url: "/api/2014/classes/cleric/levels/7",
							},
						],
						spell: {
							index: "freedom-of-movement",
							name: "Freedom of Movement",
							url: "/api/2014/spells/freedom-of-movement",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-7",
								type: "level",
								name: "Cleric 7",
								url: "/api/2014/classes/cleric/levels/7",
							},
						],
						spell: {
							index: "stoneskin",
							name: "Stoneskin",
							url: "/api/2014/spells/stoneskin",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-9",
								type: "level",
								name: "Cleric 9",
								url: "/api/2014/classes/cleric/levels/9",
							},
						],
						spell: {
							index: "flame-strike",
							name: "Flame Strike",
							url: "/api/2014/spells/flame-strike",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-9",
								type: "level",
								name: "Cleric 9",
								url: "/api/2014/classes/cleric/levels/9",
							},
						],
						spell: {
							index: "hold-monster",
							name: "Hold Monster",
							url: "/api/2014/spells/hold-monster",
						},
					},
				],
				subclass_levels: [
					{
						level: 1,
						features: [
							{
								index: "bonus-proficiencies",
								name: "Bonus Proficiencies",
								desc: [
									{
										body: "At 1st level, you gain proficiency with martial weapons and heavy armor.",
									},
								],
							},
							{
								index: "war-priest",
								name: "War Priest",
								desc: [
									{
										body: "From 1st level, your god delivers bolts of inspiration to you while you are engaged in battle. When you use the Attack action, you can make one weapon attack as a bonus action.",
									},
									{
										body: "You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.",
									},
								],
							},
						],
						url: "/api/2014/subclasses/war/levels/1",
						index: "war-1",
						updated_at: "2025-10-24T20:42:13.397Z",
					},
					{
						level: 2,
						features: [
							{
								index: "channel-divinity-guided-strike",
								name: "Channel Divinity: Guided Strike",
								desc: [
									{
										body: "Starting at 2nd level, you can use your Channel Divinity to strike with supernatural accuracy. When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the attack hits or misses.",
									},
								],
							},
							{
								index: "channel-divinity-war-gods-blessing",
								name: "Channel Divinity: War God's Blessing",
								desc: [
									{
										body: "At 6th level, you can use your Channel Divinity to grant the same benefit to another creature. When a creature within 30 feet of you makes an attack roll, you can use your reaction to grant that creature a +10 bonus to the roll, using your Channel Divinity. You make this choice after you see the roll, but before the DM says whether the attack hits or misses.",
									},
								],
							},
						],
					},
					{
						level: 8,
						features: [
							{
								index: "divine-strike",
								name: "Divine Strike",
								desc: [
									{
										body: "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 damage of the same type dealt by the weapon to the target. When you reach 14th level, the extra damage increases to 2d8.",
									},
								],
							},
						],
					},
					{
						level: 17,
						features: [
							{
								index: "avatar-of-battle",
								name: "Avatar of Battle",
								desc: [
									{
										body: "At 17th level, you gain resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons.",
									},
								],
							},
						],
					},
				],
			},
			{
				index: "light",
				name: "Light",
				subclass_flavor: "Divine Domain",
				desc: [
					"The Light domain is concerned with illumination, both literal and metaphorical. Gods of light—including Helm, Lathander, Pholtus, Branchala, the Silver Flame, Belenus, Apollo, and Ra—are patrons of rebirth and renewal, truth, vigilance, and beauty, often using the symbol of the sun. Some are deities of healing, creativity, and vitality, and some are gods of the forge and crafting who value metalwork and the beauty of finished work. Clerics of a god of light are enlightened souls infused with radiance and the power of their deities’ discerning vision, charged with chasing away lies and burning away darkness.",
				],
				spells: [
					{
						prerequisites: [
							{
								index: "cleric-1",
								type: "level",
								name: "Cleric 1",
								url: "/api/2014/classes/cleric/levels/1",
							},
						],
						spell: {
							index: "burning-hands",
							name: "Burning Hands",
							url: "/api/2014/spells/burning-hands",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-1",
								type: "level",
								name: "Cleric 1",
								url: "/api/2014/classes/cleric/levels/1",
							},
						],
						spell: {
							index: "faerie-fire",
							name: "Faerie Fire",
							url: "/api/2014/spells/faerie-fire",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-3",
								type: "level",
								name: "Cleric 3",
								url: "/api/2014/classes/cleric/levels/3",
							},
						],
						spell: {
							index: "flaming-sphere",
							name: "Flaming Sphere",
							url: "/api/2014/spells/flaming-sphere",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-3",
								type: "level",
								name: "Cleric 3",
								url: "/api/2014/classes/cleric/levels/3",
							},
						],
						spell: {
							index: "scorching-ray",
							name: "Scorching Ray",
							url: "/api/2014/spells/scorching-ray",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-5",
								type: "level",
								name: "Cleric 5",
								url: "/api/2014/classes/cleric/levels/5",
							},
						],
						spell: {
							index: "daylight",
							name: "Daylight",
							url: "/api/2014/spells/daylight",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-5",
								type: "level",
								name: "Cleric 5",
								url: "/api/2014/classes/cleric/levels/5",
							},
						],
						spell: {
							index: "fireball",
							name: "Fireball",
							url: "/api/2014/spells/fireball",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-7",
								type: "level",
								name: "Cleric 7",
								url: "/api/2014/classes/cleric/levels/7",
							},
						],
						spell: {
							index: "guardian-of-faith",
							name: "Guardian of Faith",
							url: "/api/2014/spells/guardian-of-faith",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-7",
								type: "level",
								name: "Cleric 7",
								url: "/api/2014/classes/cleric/levels/7",
							},
						],
						spell: {
							index: "wall-of-fire",
							name: "Wall of Fire",
							url: "/api/2014/spells/wall-of-fire",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-9",
								type: "level",
								name: "Cleric 9",
								url: "/api/2014/classes/cleric/levels/9",
							},
						],
						spell: {
							index: "flame-strike",
							name: "Flame Strike",
							url: "/api/2014/spells/flame-strike",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-9",
								type: "level",
								name: "Cleric 9",
								url: "/api/2014/classes/cleric/levels/9",
							},
						],
						spell: {
							index: "scrying",
							name: "Scrying",
							url: "/api/2014/spells/scrying",
						},
					},
				],
				subclass_levels: [
					{
						level: 1,
						features: [
							{
								index: "bonus-cantrip",
								name: "Bonus Cantrip",
								desc: [
									{
										body: "When you choose this domain at 1st level, you gain the light cantrip if you don’t already know it.",
									},
								],
							},
							{
								index: "warding-flare",
								name: "Warding Flare",
								desc: [
									{
										body: "Also at 1st level, you can interpose divine light between yourself and an attacking enemy.",
									},
									{
										body: "When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll.",
									},
									{
										body: "An attacker that can’t be blinded is immune to this feature.",
									},
									{
										body: "You can use this feature a number of times equal to your Wisdom modifier (minimum once). You regain expended uses after a long rest.",
									},
								],
							},
						],
					},
					{
						level: 2,
						features: [
							{
								index: "channel-divinity-radiance-of-the-dawn",
								name: "Channel Divinity: Radiance of the Dawn",
								desc: [
									{
										body: "Starting at 2nd level, you can use your Channel Divinity to harness sunlight.",
									},
									{
										body: "As an action, you present your holy symbol, and dispel magical darkness within 30 feet.",
									},
									{
										body: "Each hostile creature within 30 feet must make a Constitution saving throw, taking radiant damage equal to 2d10 + your cleric level on a failed save, half on success.",
									},
								],
							},
						],
					},
					{
						level: 6,
						features: [
							{
								index: "improved-warding-flare",
								name: "Improved Warding Flare",
								desc: [
									{
										body: "Starting at 6th level, you can use Warding Flare to protect other creatures within 30 feet.",
									},
								],
							},
						],
					},
					{
						level: 8,
						features: [
							{
								index: "potent-spellcasting",
								name: "Potent Spellcasting",
								desc: [
									{
										body: "Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.",
									},
								],
							},
						],
					},
					{
						level: 17,
						features: [
							{
								index: "corona-of-light",
								name: "Corona of Light",
								desc: [
									{
										body: "Starting at 17th level, you can use your action to activate an aura of sunlight for 1 minute.",
									},
									{
										body: "Bright light shines 60 feet, dim light 30 more.",
									},
									{
										body: "Enemies in bright light have disadvantage on saves against fire or radiant spells you cast.",
									},
								],
							},
						],
					},
				],
			},
			{
				index: "nature",
				name: "Nature",
				subclass_flavor: "Divine Domain",
				desc: [
					"Gods of nature are as varied as the natural world itself, from mysterious gods of deep forests (such as Silvanus, Obad-Hai, Chislev, Balinor, and Pan) to friendly deities associated with particular springs and groves (such as Eldath). Druids revere nature as a whole and might serve one of these deities, practicing mysterious rites and reciting all-but-forgotten prayers in their own secret tongue. But many of these gods have clerics as well, champions who take a more active role in advancing the interests of a particular god of nature. These clerics might hunt the evil monstrosities that threaten the woodlands, bless the harvest of the faithful, or wither the crops of those who anger their gods.",
				],
				spells: [
					{
						prerequisites: [
							{
								index: "cleric-1",
								type: "level",
								name: "Cleric 1",
								url: "/api/2014/classes/cleric/levels/1",
							},
						],
						spell: {
							index: "animal-friendship",
							name: "Animal Friendship",
							url: "/api/2014/spells/animal-friendship",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-1",
								type: "level",
								name: "Cleric 1",
								url: "/api/2014/classes/cleric/levels/1",
							},
						],
						spell: {
							index: "speak-with-animals",
							name: "Speak with Animals",
							url: "/api/2014/spells/speak-with-animals",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-3",
								type: "level",
								name: "Cleric 3",
								url: "/api/2014/classes/cleric/levels/3",
							},
						],
						spell: {
							index: "barkskin",
							name: "Barkskin",
							url: "/api/2014/spells/barkskin",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-3",
								type: "level",
								name: "Cleric 3",
								url: "/api/2014/classes/cleric/levels/3",
							},
						],
						spell: {
							index: "spike-growth",
							name: "Spike Growth",
							url: "/api/2014/spells/spike-growth",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-5",
								type: "level",
								name: "Cleric 5",
								url: "/api/2014/classes/cleric/levels/5",
							},
						],
						spell: {
							index: "plant-growth",
							name: "Plant Growth",
							url: "/api/2014/spells/plant-growth",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-5",
								type: "level",
								name: "Cleric 5",
								url: "/api/2014/classes/cleric/levels/5",
							},
						],
						spell: {
							index: "wind-wall",
							name: "Wind Wall",
							url: "/api/2014/spells/wind-wall",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-7",
								type: "level",
								name: "Cleric 7",
								url: "/api/2014/classes/cleric/levels/7",
							},
						],
						spell: {
							index: "dominate-beast",
							name: "Dominate Beast",
							url: "/api/2014/spells/dominate-beast",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-7",
								type: "level",
								name: "Cleric 7",
								url: "/api/2014/classes/cleric/levels/7",
							},
						],
						spell: {
							index: "grasping-vine",
							name: "Grasping Vine",
							url: "/api/2014/spells/grasping-vine",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-9",
								type: "level",
								name: "Cleric 9",
								url: "/api/2014/classes/cleric/levels/9",
							},
						],
						spell: {
							index: "insect-plague",
							name: "Insect Plague",
							url: "/api/2014/spells/insect-plague",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-9",
								type: "level",
								name: "Cleric 9",
								url: "/api/2014/classes/cleric/levels/9",
							},
						],
						spell: {
							index: "tree-stride",
							name: "Tree Stride",
							url: "/api/2014/spells/tree-stride",
						},
					},
				],
				subclass_levels: [
					{
						level: 1,
						features: [
							{
								index: "acolyte-of-nature",
								name: "Acolyte of Nature",
								desc: [
									{
										body: "At 1st level, you learn one druid cantrip of your choice. You also gain proficiency in one of the following skills of your choice: Animal Handling, Nature, or Survival.",
									},
								],
							},
							{
								index: "bonus-proficiency",
								name: "Bonus Proficiency",
								desc: [
									{
										body: "Also at 1st level, you gain proficiency with heavy armor.",
									},
								],
							},
						],
					},
					{
						level: 2,
						features: [
							{
								index: "channel-divinity-charm-animals-and-plants",
								name: "Channel Divinity: Charm Animals and Plants",
								desc: [
									{
										body: "Starting at 2nd level, you can use your Channel Divinity to charm animals and plants.",
									},
									{
										body: "As an action, you present your holy symbol and invoke the name of your deity. Each beast or plant creature within 30 feet of you that can see you must make a Wisdom saving throw. If the creature fails its saving throw, it is charmed by you for 1 minute or until it takes damage.",
									},
									{
										body: "While it is charmed by you, the creature is friendly to you and other creatures you designate.",
									},
								],
							},
						],
					},
					{
						level: 6,
						features: [
							{
								index: "dampen-elements",
								name: "Dampen Elements",
								desc: [
									{
										body: "Starting at 6th level, when you or a creature within 30 feet of you takes acid, cold, fire, lightning, or thunder damage, you can use your reaction to grant resistance to the creature against that instance of the damage.",
									},
								],
							},
						],
					},
					{
						level: 8,
						features: [
							{
								index: "divine-strike",
								name: "Divine Strike",
								desc: [
									{
										body: "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 cold, fire, or lightning damage (your choice) to the target. When you reach 14th level, the extra damage increases to 2d8.",
									},
								],
							},
						],
					},
					{
						level: 17,
						features: [
							{
								index: "master-of-nature",
								name: "Master of Nature",
								desc: [
									{
										body: "At 17th level, you gain the ability to command animals and plants. While creatures are charmed by your Channel Divinity: Charm Animals and Plants feature, you can take a bonus action on your turn to verbally command what each of those creatures will do on its next turn.",
									},
								],
							},
						],
					},
				],
			},
			{
				index: "tempest",
				name: "Tempest",
				subclass_flavor: "Divine Domain",
				desc: [
					"Gods whose portfolios include the Tempest domain—including Talos, Umberlee, Kord, Zeboim, the Devourer, Zeus, and Thor—govern storms, sea, and sky. They include gods of lightning and thunder, gods of earthquakes, some fire gods, and certain gods of violence, physical strength, and courage. In some pantheons, a god of this domain rules over other deities and is known for swift justice delivered by thunderbolt. In other pantheons, gods of this domain are fierce, wild, and destructive. Clerics of these gods delight in the power of the storm, and they harness that power to punish those who offend their gods.",
				],
				spells: [
					{
						prerequisites: [
							{
								index: "cleric-1",
								type: "level",
								name: "Cleric 1",
								url: "/api/2014/classes/cleric/levels/1",
							},
						],
						spell: {
							index: "fog-cloud",
							name: "Fog Cloud",
							url: "/api/2014/spells/fog-cloud",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-1",
								type: "level",
								name: "Cleric 1",
								url: "/api/2014/classes/cleric/levels/1",
							},
						],
						spell: {
							index: "thunderwave",
							name: "Thunderwave",
							url: "/api/2014/spells/thunderwave",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-3",
								type: "level",
								name: "Cleric 3",
								url: "/api/2014/classes/cleric/levels/3",
							},
						],
						spell: {
							index: "gust-of-wind",
							name: "Gust of Wind",
							url: "/api/2014/spells/gust-of-wind",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-3",
								type: "level",
								name: "Cleric 3",
								url: "/api/2014/classes/cleric/levels/3",
							},
						],
						spell: {
							index: "shatter",
							name: "Shatter",
							url: "/api/2014/spells/shatter",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-5",
								type: "level",
								name: "Cleric 5",
								url: "/api/2014/classes/cleric/levels/5",
							},
						],
						spell: {
							index: "call-lightning",
							name: "Call Lightning",
							url: "/api/2014/spells/call-lightning",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-5",
								type: "level",
								name: "Cleric 5",
								url: "/api/2014/classes/cleric/levels/5",
							},
						],
						spell: {
							index: "sleet-storm",
							name: "Sleet Storm",
							url: "/api/2014/spells/sleet-storm",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-7",
								type: "level",
								name: "Cleric 7",
								url: "/api/2014/classes/cleric/levels/7",
							},
						],
						spell: {
							index: "control-water",
							name: "Control Water",
							url: "/api/2014/spells/control-water",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-7",
								type: "level",
								name: "Cleric 7",
								url: "/api/2014/classes/cleric/levels/7",
							},
						],
						spell: {
							index: "ice-storm",
							name: "Ice Storm",
							url: "/api/2014/spells/ice-storm",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-9",
								type: "level",
								name: "Cleric 9",
								url: "/api/2014/classes/cleric/levels/9",
							},
						],
						spell: {
							index: "destructive-wave",
							name: "Destructive Wave",
							url: "/api/2014/spells/destructive-wave",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-9",
								type: "level",
								name: "Cleric 9",
								url: "/api/2014/classes/cleric/levels/9",
							},
						],
						spell: {
							index: "insect-plague",
							name: "Insect Plague",
							url: "/api/2014/spells/insect-plague",
						},
					},
				],
				subclass_levels: [
					{
						level: 1,
						features: [
							{
								index: "bonus-proficiencies",
								name: "Bonus Proficiencies",
								desc: [
									{
										body: "When you choose this domain at 1st level, you gain proficiency with martial weapons and heavy armor.",
									},
								],
							},
							{
								index: "wrath-of-the-storm",
								name: "Wrath of the Storm",
								desc: [
									{
										body: "Also at 1st level, you can thunderously rebuke attackers.",
									},
									{
										body: "When a creature within 5 feet of you that you can see hits you with an attack, you can use your reaction to cause the creature to make a Dexterity saving throw. The creature takes 2d8 lightning or thunder damage (your choice) on a failed save, and half as much damage on a successful one.",
									},
									{
										body: "You can use this feature a number of times equal to your Wisdom modifier (minimum once). You regain expended uses when you finish a long rest.",
									},
								],
							},
						],
					},
					{
						level: 2,
						features: [
							{
								index: "channel-divinity-destructive-wrath",
								name: "Channel Divinity: Destructive Wrath",
								desc: [
									{
										body: "Starting at 2nd level, you can use your Channel Divinity to wield the power of the storm with unchecked ferocity.",
									},
									{
										body: "When you roll lightning or thunder damage, you can use your Channel Divinity to deal maximum damage, instead of rolling.",
									},
								],
							},
						],
					},
					{
						level: 6,
						features: [
							{
								index: "thunderbolt-strike",
								name: "Thunderbolt Strike",
								desc: [
									{
										body: "At 6th level, when you deal lightning damage to a Large or smaller creature, you can also push it up to 10 feet away from you.",
									},
								],
							},
						],
					},
					{
						level: 8,
						features: [
							{
								index: "divine-strike",
								name: "Divine Strike",
								desc: [
									{
										body: "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 thunder damage to the target. When you reach 14th level, the extra damage increases to 2d8.",
									},
								],
							},
						],
					},
					{
						level: 17,
						features: [
							{
								index: "stormborn",
								name: "Stormborn",
								desc: [
									{
										body: "At 17th level, you have a flying speed equal to your current walking speed whenever you are not underground or indoors.",
									},
								],
							},
						],
					},
				],
			},
			{
				index: "trickery",
				name: "Trickery",
				subclass_flavor: "Divine Domain",
				desc: [
					"Gods of trickery—such as Tymora, Beshaba, Olidammara, the Traveler, Garl Glittergold, and Loki—are mischief-makers and instigators who stand as a constant challenge to the accepted order among both gods and mortals. They embody the forces of change and social upheaval, and they delight in deception, sabotage, and subterfuge. Clerics of the Trickery domain are a disruptive force in the world, puncturing pride, mocking tyrants, stealing from the rich, freeing captives, and flouting hollow traditions. They prefer subterfuge, pranks, deception, and theft rather than direct confrontation.",
				],
				spells: [
					{
						prerequisites: [
							{
								index: "cleric-1",
								type: "level",
								name: "Cleric 1",
								url: "/api/2014/classes/cleric/levels/1",
							},
						],
						spell: {
							index: "charm-person",
							name: "Charm Person",
							url: "/api/2014/spells/charm-person",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-1",
								type: "level",
								name: "Cleric 1",
								url: "/api/2014/classes/cleric/levels/1",
							},
						],
						spell: {
							index: "disguise-self",
							name: "Disguise Self",
							url: "/api/2014/spells/disguise-self",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-3",
								type: "level",
								name: "Cleric 3",
								url: "/api/2014/classes/cleric/levels/3",
							},
						],
						spell: {
							index: "mirror-image",
							name: "Mirror Image",
							url: "/api/2014/spells/mirror-image",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-3",
								type: "level",
								name: "Cleric 3",
								url: "/api/2014/classes/cleric/levels/3",
							},
						],
						spell: {
							index: "pass-without-trace",
							name: "Pass without Trace",
							url: "/api/2014/spells/pass-without-trace",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-5",
								type: "level",
								name: "Cleric 5",
								url: "/api/2014/classes/cleric/levels/5",
							},
						],
						spell: {
							index: "blink",
							name: "Blink",
							url: "/api/2014/spells/blink",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-5",
								type: "level",
								name: "Cleric 5",
								url: "/api/2014/classes/cleric/levels/5",
							},
						],
						spell: {
							index: "dispel-magic",
							name: "Dispel Magic",
							url: "/api/2014/spells/dispel-magic",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-7",
								type: "level",
								name: "Cleric 7",
								url: "/api/2014/classes/cleric/levels/7",
							},
						],
						spell: {
							index: "dimension-door",
							name: "Dimension Door",
							url: "/api/2014/spells/dimension-door",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-7",
								type: "level",
								name: "Cleric 7",
								url: "/api/2014/classes/cleric/levels/7",
							},
						],
						spell: {
							index: "polymorph",
							name: "Polymorph",
							url: "/api/2014/spells/polymorph",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-9",
								type: "level",
								name: "Cleric 9",
								url: "/api/2014/classes/cleric/levels/9",
							},
						],
						spell: {
							index: "dominate-person",
							name: "Dominate Person",
							url: "/api/2014/spells/dominate-person",
						},
					},
					{
						prerequisites: [
							{
								index: "cleric-9",
								type: "level",
								name: "Cleric 9",
								url: "/api/2014/classes/cleric/levels/9",
							},
						],
						spell: {
							index: "modify-memory",
							name: "Modify Memory",
							url: "/api/2014/spells/modify-memory",
						},
					},
				],
				subclass_levels: [
					{
						level: 1,
						features: [
							{
								index: "blessing-of-the-trickster",
								name: "Blessing of the Trickster",
								desc: [
									{
										body: "Starting when you choose this domain at 1st level, you can use your action to touch a willing creature other than yourself to give it advantage on Dexterity (Stealth) checks.",
									},
									{
										body: "This blessing lasts for 1 hour or until you use this feature again.",
									},
								],
							},
						],
					},
					{
						level: 2,
						features: [
							{
								index: "channel-divinity-invoke-duplicity",
								name: "Channel Divinity: Invoke Duplicity",
								desc: [
									{
										body: "Starting at 2nd level, you can use your Channel Divinity to create an illusory duplicate of yourself.",
									},
									{
										body: "As an action, you create a perfect illusion of yourself that lasts for 1 minute, or until you lose your concentration (as if you were concentrating on a spell). The illusion appears in an unoccupied space within 30 feet of you that you can see.",
									},
									{
										body: "As a bonus action on your turn, you can move the illusion up to 30 feet to a space you can see, but it must remain within 120 feet of you.",
									},
									{
										body: "For the duration, you can cast spells as though you were in the illusion’s space, but you must use your own senses.",
									},
									{
										body: "Additionally, when both you and your illusion are within 5 feet of a creature that can see the illusion, you have advantage on attack rolls against that creature.",
									},
								],
							},
						],
					},
					{
						level: 6,
						features: [
							{
								index: "channel-divinity-cloak-of-shadows",
								name: "Channel Divinity: Cloak of Shadows",
								desc: [
									{
										body: "Starting at 6th level, you can use your Channel Divinity to vanish.",
									},
									{
										body: "As an action, you become invisible until the end of your next turn. You become visible if you attack or cast a spell.",
									},
								],
							},
						],
					},
					{
						level: 8,
						features: [
							{
								index: "divine-strike",
								name: "Divine Strike",
								desc: [
									{
										body: "At 8th level, you gain the ability to infuse your weapon strikes with poison. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 poison damage to the target. When you reach 14th level, the extra damage increases to 2d8.",
									},
								],
							},
						],
					},
					{
						level: 17,
						features: [
							{
								index: "improved-duplicity",
								name: "Improved Duplicity",
								desc: [
									{
										body: "At 17th level, you can create up to four duplicates of yourself, instead of one, when you use Invoke Duplicity.",
									},
									{
										body: "As a bonus action on your turn, you can move any number of them up to 30 feet, to a maximum range of 120 feet.",
									},
								],
							},
						],
					},
				],
			},
		],
		spellcasting: {
			level: 1,
			spellcasting_ability: {
				index: "wis",
				name: "WIS",
				url: "/api/2014/ability-scores/wis",
			},
			info: [
				{
					name: "Cantrips",
					desc: [
						"At 1st level, you know three cantrips of your choice from the cleric spell list. You learn additional cleric cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Cleric table.",
					],
				},
				{
					name: "Preparing and Casting Spells",
					desc: [
						"The Cleric table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
						"You prepare the list of cleric spells that are available for you to cast, choosing from the cleric spell list. When you do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The spells must be of a level for which you have spell slots.",
						"For example, if you are a 3rd-level cleric, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
						"You can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.",
					],
				},
				{
					name: "Spellcasting Ability",
					desc: [
						"Wisdom is your spellcasting ability for your cleric spells. The power of your spells comes from your devotion to your deity. You use your Wisdom whenever a cleric spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a cleric spell you cast and when making an attack roll with one.",
						"Spell save DC = 8 + your proficiency bonus + your Wisdom modifier",
						"Spell attack modifier = your proficiency bonus + your Wisdom modifier",
					],
				},
				{
					name: "Ritual Casting",
					desc: [
						"You can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared.",
					],
				},
				{
					name: "Spellcasting Focus",
					desc: [
						"You can use a holy symbol (see Equipment) as a spellcasting focus for your cleric spells.",
					],
				},
			],
		},
		spells: "/api/2014/classes/cleric/spells",
		url: "/api/2014/classes/cleric",
		updated_at: "2025-10-24T20:42:12.459Z",
	},
	{
		index: "druid",
		name: "Druid",
		hit_die: 8,
		proficiency_choices: [
			{
				desc: "Choose two from Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, and Survival",
				choose: 2,
				type: "proficiencies",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "reference",
							item: {
								index: "skill-arcana",
								name: "Skill: Arcana",
								url: "/api/2014/proficiencies/skill-arcana",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-animal-handling",
								name: "Skill: Animal Handling",
								url: "/api/2014/proficiencies/skill-animal-handling",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-insight",
								name: "Skill: Insight",
								url: "/api/2014/proficiencies/skill-insight",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-medicine",
								name: "Skill: Medicine",
								url: "/api/2014/proficiencies/skill-medicine",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-nature",
								name: "Skill: Nature",
								url: "/api/2014/proficiencies/skill-nature",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-perception",
								name: "Skill: Perception",
								url: "/api/2014/proficiencies/skill-perception",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-religion",
								name: "Skill: Religion",
								url: "/api/2014/proficiencies/skill-religion",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-survival",
								name: "Skill: Survival",
								url: "/api/2014/proficiencies/skill-survival",
							},
						},
					],
				},
			},
		],
		proficiencies: [
			{
				index: "light-armor",
				name: "Light Armor",
				url: "/api/2014/proficiencies/light-armor",
			},
			{
				index: "medium-armor",
				name: "Medium Armor",
				url: "/api/2014/proficiencies/medium-armor",
			},
			{
				index: "shields",
				name: "Shields",
				url: "/api/2014/proficiencies/shields",
			},
			{
				index: "clubs",
				name: "Clubs",
				url: "/api/2014/proficiencies/clubs",
			},
			{
				index: "daggers",
				name: "Daggers",
				url: "/api/2014/proficiencies/daggers",
			},
			{
				index: "javelins",
				name: "Javelins",
				url: "/api/2014/proficiencies/javelins",
			},
			{
				index: "maces",
				name: "Maces",
				url: "/api/2014/proficiencies/maces",
			},
			{
				index: "quarterstaffs",
				name: "Quarterstaffs",
				url: "/api/2014/proficiencies/quarterstaffs",
			},
			{
				index: "sickles",
				name: "Sickles",
				url: "/api/2014/proficiencies/sickles",
			},
			{
				index: "spears",
				name: "Spears",
				url: "/api/2014/proficiencies/spears",
			},
			{
				index: "darts",
				name: "Darts",
				url: "/api/2014/proficiencies/darts",
			},
			{
				index: "slings",
				name: "Slings",
				url: "/api/2014/proficiencies/slings",
			},
			{
				index: "scimitars",
				name: "Scimitars",
				url: "/api/2014/proficiencies/scimitars",
			},
			{
				index: "herbalism-kit",
				name: "Herbalism Kit",
				url: "/api/2014/proficiencies/herbalism-kit",
			},
		],
		saving_throws: [
			{
				index: "int",
				name: "INT",
				url: "/api/2014/ability-scores/int",
			},
			{
				index: "wis",
				name: "WIS",
				url: "/api/2014/ability-scores/wis",
			},
		],
		starting_equipment: [
			{
				equipment: {
					index: "leather-armor",
					name: "Leather Armor",
					url: "/api/2014/equipment/leather-armor",
				},
				quantity: 1,
			},
			{
				equipment: {
					index: "explorers-pack",
					name: "Explorer's Pack",
					url: "/api/2014/equipment/explorers-pack",
				},
				quantity: 1,
			},
		],
		starting_equipment_options: [
			{
				desc: "(a) a wooden shield or (b) any simple weapon",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "shield",
								name: "Shield",
								url: "/api/2014/equipment/shield",
							},
						},
						{
							option_type: "choice",
							choice: {
								desc: "any simple weapon",
								choose: 1,
								type: "equipment",
								from: {
									option_set_type: "equipment_category",
									equipment_category: {
										index: "simple-weapons",
										name: "Simple Weapons",
										url: "/api/2014/equipment-categories/simple-weapons",
									},
								},
							},
						},
					],
				},
			},
			{
				desc: "(a) a scimitar or (b) any simple melee weapon",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "scimitar",
								name: "Scimitar",
								url: "/api/2014/equipment/scimitar",
							},
						},
						{
							option_type: "choice",
							choice: {
								desc: "any simple melee weapon",
								choose: 1,
								type: "equipment",
								from: {
									option_set_type: "equipment_category",
									equipment_category: {
										index: "simple-melee-weapons",
										name: "Simple Melee Weapons",
										url: "/api/2014/equipment-categories/simple-melee-weapons",
									},
								},
							},
						},
					],
				},
			},
			{
				desc: "druidic focus",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "equipment_category",
					equipment_category: {
						index: "druidic-foci",
						name: "Druidic Foci",
						url: "/api/2014/equipment-categories/druidic-foci",
					},
				},
			},
		],
		class_levels: "/api/2014/classes/druid/levels",
		multi_classing: {
			prerequisites: [
				{
					ability_score: {
						index: "wis",
						name: "WIS",
						url: "/api/2014/ability-scores/wis",
					},
					minimum_score: 13,
				},
			],
			proficiencies: [
				{
					index: "light-armor",
					name: "Light Armor",
					url: "/api/2014/proficiencies/light-armor",
				},
				{
					index: "medium-armor",
					name: "Medium Armor",
					url: "/api/2014/proficiencies/medium-armor",
				},
				{
					index: "shields",
					name: "Shields",
					url: "/api/2014/proficiencies/shields",
				},
			],
		},
		subclasses: [
			{
				index: "land",
				name: "Land",
				subclass_flavor: "Druid Circle",
				desc: [
					"The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle's wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle's mysterious rites.",
				],
				spells: [
					{
						prerequisites: [
							{
								index: "druid-3",
								type: "level",
								name: "Druid 3",
								url: "/api/2014/classes/druid/levels/3",
							},
							{
								index: "circle-of-the-land-arctic",
								type: "feature",
								name: "Circle of the Land: Arctic",
								url: "/api/2014/features/circle-of-the-land-arctic",
							},
						],
						spell: {
							index: "hold-person",
							name: "Hold Person",
							url: "/api/2014/spells/hold-person",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-3",
								type: "level",
								name: "Druid 3",
								url: "/api/2014/classes/druid/levels/3",
							},
							{
								index: "circle-of-the-land-arctic",
								type: "feature",
								name: "Circle of the Land: Arctic",
								url: "/api/2014/features/circle-of-the-land-arctic",
							},
						],
						spell: {
							index: "spike-growth",
							name: "Spike Growth",
							url: "/api/2014/spells/spike-growth",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-5",
								type: "level",
								name: "Druid 5",
								url: "/api/2014/classes/druid/levels/5",
							},
							{
								index: "circle-of-the-land-arctic",
								type: "feature",
								name: "Circle of the Land: Arctic",
								url: "/api/2014/features/circle-of-the-land-arctic",
							},
						],
						spell: {
							index: "sleet-storm",
							name: "Sleet Storm",
							url: "/api/2014/spells/sleet-storm",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-5",
								type: "level",
								name: "Druid 5",
								url: "/api/2014/classes/druid/levels/5",
							},
							{
								index: "circle-of-the-land-arctic",
								type: "feature",
								name: "Circle of the Land: Arctic",
								url: "/api/2014/features/circle-of-the-land-arctic",
							},
						],
						spell: {
							index: "slow",
							name: "Slow",
							url: "/api/2014/spells/slow",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-7",
								type: "level",
								name: "Druid 7",
								url: "/api/2014/classes/druid/levels/7",
							},
							{
								index: "circle-of-the-land-arctic",
								type: "feature",
								name: "Circle of the Land: Arctic",
								url: "/api/2014/features/circle-of-the-land-arctic",
							},
						],
						spell: {
							index: "freedom-of-movement",
							name: "Freedom of Movement",
							url: "/api/2014/spells/freedom-of-movement",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-7",
								type: "level",
								name: "Druid 7",
								url: "/api/2014/classes/druid/levels/7",
							},
							{
								index: "circle-of-the-land-arctic",
								type: "feature",
								name: "Circle of the Land: Arctic",
								url: "/api/2014/features/circle-of-the-land-arctic",
							},
						],
						spell: {
							index: "ice-storm",
							name: "Ice Storm",
							url: "/api/2014/spells/ice-storm",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-9",
								type: "level",
								name: "Druid 9",
								url: "/api/2014/classes/druid/levels/9",
							},
							{
								index: "circle-of-the-land-arctic",
								type: "feature",
								name: "Circle of the Land: Arctic",
								url: "/api/2014/features/circle-of-the-land-arctic",
							},
						],
						spell: {
							index: "commune-with-nature",
							name: "Commune With Nature",
							url: "/api/2014/spells/commune-with-nature",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-9",
								type: "level",
								name: "Druid 9",
								url: "/api/2014/classes/druid/levels/9",
							},
							{
								index: "circle-of-the-land-arctic",
								type: "feature",
								name: "Circle of the Land: Arctic",
								url: "/api/2014/features/circle-of-the-land-arctic",
							},
						],
						spell: {
							index: "cone-of-cold",
							name: "Cone of Cold",
							url: "/api/2014/spells/cone-of-cold",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-3",
								type: "level",
								name: "Druid 3",
								url: "/api/2014/classes/druid/levels/3",
							},
							{
								index: "circle-of-the-land-coast",
								type: "feature",
								name: "Circle of the Land: Coast",
								url: "/api/2014/features/circle-of-the-land-coast",
							},
						],
						spell: {
							index: "mirror-image",
							name: "Mirror Image",
							url: "/api/2014/spells/mirror-image",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-3",
								type: "level",
								name: "Druid 3",
								url: "/api/2014/classes/druid/levels/3",
							},
							{
								index: "circle-of-the-land-coast",
								type: "feature",
								name: "Circle of the Land: Coast",
								url: "/api/2014/features/circle-of-the-land-coast",
							},
						],
						spell: {
							index: "misty-step",
							name: "Misty Step",
							url: "/api/2014/spells/misty-step",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-5",
								type: "level",
								name: "Druid 5",
								url: "/api/2014/classes/druid/levels/5",
							},
							{
								index: "circle-of-the-land-coast",
								type: "feature",
								name: "Circle of the Land: Coast",
								url: "/api/2014/features/circle-of-the-land-coast",
							},
						],
						spell: {
							index: "water-breathing",
							name: "Water Breathing",
							url: "/api/2014/spells/water-breathing",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-5",
								type: "level",
								name: "Druid 5",
								url: "/api/2014/classes/druid/levels/5",
							},
							{
								index: "circle-of-the-land-coast",
								type: "feature",
								name: "Circle of the Land: Coast",
								url: "/api/2014/features/circle-of-the-land-coast",
							},
						],
						spell: {
							index: "water-walk",
							name: "Water Walk",
							url: "/api/2014/spells/water-walk",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-7",
								type: "level",
								name: "Druid 7",
								url: "/api/2014/classes/druid/levels/7",
							},
							{
								index: "circle-of-the-land-coast",
								type: "feature",
								name: "Circle of the Land: Coast",
								url: "/api/2014/features/circle-of-the-land-coast",
							},
						],
						spell: {
							index: "control-water",
							name: "Control Water",
							url: "/api/2014/spells/control-water",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-7",
								type: "level",
								name: "Druid 7",
								url: "/api/2014/classes/druid/levels/7",
							},
							{
								index: "circle-of-the-land-coast",
								type: "feature",
								name: "Circle of the Land: Coast",
								url: "/api/2014/features/circle-of-the-land-coast",
							},
						],
						spell: {
							index: "freedom-of-movement",
							name: "Freedom of Movement",
							url: "/api/2014/spells/freedom-of-movement",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-9",
								type: "level",
								name: "Druid 9",
								url: "/api/2014/classes/druid/levels/9",
							},
							{
								index: "circle-of-the-land-coast",
								type: "feature",
								name: "Circle of the Land: Coast",
								url: "/api/2014/features/circle-of-the-land-coast",
							},
						],
						spell: {
							index: "conjure-elemental",
							name: "Conjure Elemental",
							url: "/api/2014/spells/conjure-elemental",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-9",
								type: "level",
								name: "Druid 9",
								url: "/api/2014/classes/druid/levels/9",
							},
							{
								index: "circle-of-the-land-coast",
								type: "feature",
								name: "Circle of the Land: Coast",
								url: "/api/2014/features/circle-of-the-land-coast",
							},
						],
						spell: {
							index: "scrying",
							name: "Scrying",
							url: "/api/2014/spells/scrying",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-3",
								type: "level",
								name: "Druid 3",
								url: "/api/2014/classes/druid/levels/3",
							},
							{
								index: "circle-of-the-land-desert",
								type: "feature",
								name: "Circle of the Land: Desert",
								url: "/api/2014/features/circle-of-the-land-desert",
							},
						],
						spell: {
							index: "blur",
							name: "Blur",
							url: "/api/2014/spells/blur",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-3",
								type: "level",
								name: "Druid 3",
								url: "/api/2014/classes/druid/levels/3",
							},
							{
								index: "circle-of-the-land-desert",
								type: "feature",
								name: "Circle of the Land: Desert",
								url: "/api/2014/features/circle-of-the-land-desert",
							},
						],
						spell: {
							index: "silence",
							name: "Silence",
							url: "/api/2014/spells/silence",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-5",
								type: "level",
								name: "Druid 5",
								url: "/api/2014/classes/druid/levels/5",
							},
							{
								index: "circle-of-the-land-desert",
								type: "feature",
								name: "Circle of the Land: Desert",
								url: "/api/2014/features/circle-of-the-land-desert",
							},
						],
						spell: {
							index: "create-food-and-water",
							name: "Create Food and Water",
							url: "/api/2014/spells/create-food-and-water",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-5",
								type: "level",
								name: "Druid 5",
								url: "/api/2014/classes/druid/levels/5",
							},
							{
								index: "circle-of-the-land-desert",
								type: "feature",
								name: "Circle of the Land: Desert",
								url: "/api/2014/features/circle-of-the-land-desert",
							},
						],
						spell: {
							index: "protection-from-energy",
							name: "Protection From Energy",
							url: "/api/2014/spells/protection-from-energy",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-7",
								type: "level",
								name: "Druid 7",
								url: "/api/2014/classes/druid/levels/7",
							},
							{
								index: "circle-of-the-land-desert",
								type: "feature",
								name: "Circle of the Land: Desert",
								url: "/api/2014/features/circle-of-the-land-desert",
							},
						],
						spell: {
							index: "blight",
							name: "Blight",
							url: "/api/2014/spells/blight",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-7",
								type: "level",
								name: "Druid 7",
								url: "/api/2014/classes/druid/levels/7",
							},
							{
								index: "circle-of-the-land-desert",
								type: "feature",
								name: "Circle of the Land: Desert",
								url: "/api/2014/features/circle-of-the-land-desert",
							},
						],
						spell: {
							index: "hallucinatory-terrain",
							name: "Hallucinatory Terrain",
							url: "/api/2014/spells/hallucinatory-terrain",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-9",
								type: "level",
								name: "Druid 9",
								url: "/api/2014/classes/druid/levels/9",
							},
							{
								index: "circle-of-the-land-desert",
								type: "feature",
								name: "Circle of the Land: Desert",
								url: "/api/2014/features/circle-of-the-land-desert",
							},
						],
						spell: {
							index: "insect-plague",
							name: "Insect Plague",
							url: "/api/2014/spells/insect-plague",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-9",
								type: "level",
								name: "Druid 9",
								url: "/api/2014/classes/druid/levels/9",
							},
							{
								index: "circle-of-the-land-desert",
								type: "feature",
								name: "Circle of the Land: Desert",
								url: "/api/2014/features/circle-of-the-land-desert",
							},
						],
						spell: {
							index: "wall-of-stone",
							name: "Wall of Stone",
							url: "/api/2014/spells/wall-of-stone",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-3",
								type: "level",
								name: "Druid 3",
								url: "/api/2014/classes/druid/levels/3",
							},
							{
								index: "circle-of-the-land-forest",
								type: "feature",
								name: "Circle of the Land: Forest",
								url: "/api/2014/features/circle-of-the-land-forest",
							},
						],
						spell: {
							index: "barkskin",
							name: "Barkskin",
							url: "/api/2014/spells/barkskin",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-3",
								type: "level",
								name: "Druid 3",
								url: "/api/2014/classes/druid/levels/3",
							},
							{
								index: "circle-of-the-land-forest",
								type: "feature",
								name: "Circle of the Land: Forest",
								url: "/api/2014/features/circle-of-the-land-forest",
							},
						],
						spell: {
							index: "spider-climb",
							name: "Spider Climb",
							url: "/api/2014/spells/spider-climb",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-5",
								type: "level",
								name: "Druid 5",
								url: "/api/2014/classes/druid/levels/5",
							},
							{
								index: "circle-of-the-land-forest",
								type: "feature",
								name: "Circle of the Land: Forest",
								url: "/api/2014/features/circle-of-the-land-forest",
							},
						],
						spell: {
							index: "call-lightning",
							name: "Call Lightning",
							url: "/api/2014/spells/call-lightning",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-5",
								type: "level",
								name: "Druid 5",
								url: "/api/2014/classes/druid/levels/5",
							},
							{
								index: "circle-of-the-land-forest",
								type: "feature",
								name: "Circle of the Land: Forest",
								url: "/api/2014/features/circle-of-the-land-forest",
							},
						],
						spell: {
							index: "plant-growth",
							name: "Plant Growth",
							url: "/api/2014/spells/plant-growth",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-7",
								type: "level",
								name: "Druid 7",
								url: "/api/2014/classes/druid/levels/7",
							},
							{
								index: "circle-of-the-land-forest",
								type: "feature",
								name: "Circle of the Land: Forest",
								url: "/api/2014/features/circle-of-the-land-forest",
							},
						],
						spell: {
							index: "divination",
							name: "Divination",
							url: "/api/2014/spells/divination",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-7",
								type: "level",
								name: "Druid 7",
								url: "/api/2014/classes/druid/levels/7",
							},
							{
								index: "circle-of-the-land-forest",
								type: "feature",
								name: "Circle of the Land: Forest",
								url: "/api/2014/features/circle-of-the-land-forest",
							},
						],
						spell: {
							index: "freedom-of-movement",
							name: "Freedom of Movement",
							url: "/api/2014/spells/freedom-of-movement",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-9",
								type: "level",
								name: "Druid 9",
								url: "/api/2014/classes/druid/levels/9",
							},
							{
								index: "circle-of-the-land-forest",
								type: "feature",
								name: "Circle of the Land: Forest",
								url: "/api/2014/features/circle-of-the-land-forest",
							},
						],
						spell: {
							index: "commune-with-nature",
							name: "Commune With Nature",
							url: "/api/2014/spells/commune-with-nature",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-9",
								type: "level",
								name: "Druid 9",
								url: "/api/2014/classes/druid/levels/9",
							},
							{
								index: "circle-of-the-land-forest",
								type: "feature",
								name: "Circle of the Land: Forest",
								url: "/api/2014/features/circle-of-the-land-forest",
							},
						],
						spell: {
							index: "tree-stride",
							name: "Tree Stride",
							url: "/api/2014/spells/tree-stride",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-3",
								type: "level",
								name: "Druid 3",
								url: "/api/2014/classes/druid/levels/3",
							},
							{
								index: "circle-of-the-land-grassland",
								type: "feature",
								name: "Circle of the Land: Grassland",
								url: "/api/2014/features/circle-of-the-land-grassland",
							},
						],
						spell: {
							index: "invisibility",
							name: "Invisibility",
							url: "/api/2014/spells/invisibility",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-3",
								type: "level",
								name: "Druid 3",
								url: "/api/2014/classes/druid/levels/3",
							},
							{
								index: "circle-of-the-land-grassland",
								type: "feature",
								name: "Circle of the Land: Grassland",
								url: "/api/2014/features/circle-of-the-land-grassland",
							},
						],
						spell: {
							index: "pass-without-trace",
							name: "Pass Without Trace",
							url: "/api/2014/spells/pass-without-trace",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-5",
								type: "level",
								name: "Druid 5",
								url: "/api/2014/classes/druid/levels/5",
							},
							{
								index: "circle-of-the-land-grassland",
								type: "feature",
								name: "Circle of the Land: Grassland",
								url: "/api/2014/features/circle-of-the-land-grassland",
							},
						],
						spell: {
							index: "daylight",
							name: "Daylight",
							url: "/api/2014/spells/daylight",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-5",
								type: "level",
								name: "Druid 5",
								url: "/api/2014/classes/druid/levels/5",
							},
							{
								index: "circle-of-the-land-grassland",
								type: "feature",
								name: "Circle of the Land: Grassland",
								url: "/api/2014/features/circle-of-the-land-grassland",
							},
						],
						spell: {
							index: "haste",
							name: "Haste",
							url: "/api/2014/spells/haste",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-7",
								type: "level",
								name: "Druid 7",
								url: "/api/2014/classes/druid/levels/7",
							},
							{
								index: "circle-of-the-land-grassland",
								type: "feature",
								name: "Circle of the Land: Grassland",
								url: "/api/2014/features/circle-of-the-land-grassland",
							},
						],
						spell: {
							index: "divination",
							name: "Divination",
							url: "/api/2014/spells/divination",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-7",
								type: "level",
								name: "Druid 7",
								url: "/api/2014/classes/druid/levels/7",
							},
							{
								index: "circle-of-the-land-grassland",
								type: "feature",
								name: "Circle of the Land: Grassland",
								url: "/api/2014/features/circle-of-the-land-grassland",
							},
						],
						spell: {
							index: "freedom-of-movement",
							name: "Freedom of Movement",
							url: "/api/2014/spells/freedom-of-movement",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-9",
								type: "level",
								name: "Druid 9",
								url: "/api/2014/classes/druid/levels/9",
							},
							{
								index: "circle-of-the-land-grassland",
								type: "feature",
								name: "Circle of the Land: Grassland",
								url: "/api/2014/features/circle-of-the-land-grassland",
							},
						],
						spell: {
							index: "dream",
							name: "Dream",
							url: "/api/2014/spells/dream",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-9",
								type: "level",
								name: "Druid 9",
								url: "/api/2014/classes/druid/levels/9",
							},
							{
								index: "circle-of-the-land-grassland",
								type: "feature",
								name: "Circle of the Land: Grassland",
								url: "/api/2014/features/circle-of-the-land-grassland",
							},
						],
						spell: {
							index: "insect-plague",
							name: "Insect Plague",
							url: "/api/2014/spells/insect-plague",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-3",
								type: "level",
								name: "Druid 3",
								url: "/api/2014/classes/druid/levels/3",
							},
							{
								index: "circle-of-the-land-mountain",
								type: "feature",
								name: "Circle of the Land: Mountain",
								url: "/api/2014/features/circle-of-the-land-mountain",
							},
						],
						spell: {
							index: "spider-climb",
							name: "Spider Climb",
							url: "/api/2014/spells/spider-climb",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-3",
								type: "level",
								name: "Druid 3",
								url: "/api/2014/classes/druid/levels/3",
							},
							{
								index: "circle-of-the-land-mountain",
								type: "feature",
								name: "Circle of the Land: Mountain",
								url: "/api/2014/features/circle-of-the-land-mountain",
							},
						],
						spell: {
							index: "spike-growth",
							name: "Spike Growth",
							url: "/api/2014/spells/spike-growth",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-5",
								type: "level",
								name: "Druid 5",
								url: "/api/2014/classes/druid/levels/5",
							},
							{
								index: "circle-of-the-land-mountain",
								type: "feature",
								name: "Circle of the Land: Mountain",
								url: "/api/2014/features/circle-of-the-land-mountain",
							},
						],
						spell: {
							index: "lightning-bolt",
							name: "Lightning Bolt",
							url: "/api/2014/spells/lightning-bolt",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-5",
								type: "level",
								name: "Druid 5",
								url: "/api/2014/classes/druid/levels/5",
							},
							{
								index: "circle-of-the-land-mountain",
								type: "feature",
								name: "Circle of the Land: Mountain",
								url: "/api/2014/features/circle-of-the-land-mountain",
							},
						],
						spell: {
							index: "meld-into-stone",
							name: "Meld Into Stone",
							url: "/api/2014/spells/meld-into-stone",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-7",
								type: "level",
								name: "Druid 7",
								url: "/api/2014/classes/druid/levels/7",
							},
							{
								index: "circle-of-the-land-mountain",
								type: "feature",
								name: "Circle of the Land: Mountain",
								url: "/api/2014/features/circle-of-the-land-mountain",
							},
						],
						spell: {
							index: "stone-shape",
							name: "Stone Shape",
							url: "/api/2014/spells/stone-shape",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-7",
								type: "level",
								name: "Druid 7",
								url: "/api/2014/classes/druid/levels/7",
							},
							{
								index: "circle-of-the-land-mountain",
								type: "feature",
								name: "Circle of the Land: Mountain",
								url: "/api/2014/features/circle-of-the-land-mountain",
							},
						],
						spell: {
							index: "stoneskin",
							name: "Stoneskin",
							url: "/api/2014/spells/stoneskin",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-9",
								type: "level",
								name: "Druid 9",
								url: "/api/2014/classes/druid/levels/9",
							},
							{
								index: "circle-of-the-land-mountain",
								type: "feature",
								name: "Circle of the Land: Mountain",
								url: "/api/2014/features/circle-of-the-land-mountain",
							},
						],
						spell: {
							index: "passwall",
							name: "Passwall",
							url: "/api/2014/spells/passwall",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-9",
								type: "level",
								name: "Druid 9",
								url: "/api/2014/classes/druid/levels/9",
							},
							{
								index: "circle-of-the-land-mountain",
								type: "feature",
								name: "Circle of the Land: Mountain",
								url: "/api/2014/features/circle-of-the-land-mountain",
							},
						],
						spell: {
							index: "wall-of-stone",
							name: "Wall of Stone",
							url: "/api/2014/spells/wall-of-stone",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-3",
								type: "level",
								name: "Druid 3",
								url: "/api/2014/classes/druid/levels/3",
							},
							{
								index: "circle-of-the-land-swamp",
								type: "feature",
								name: "Circle of the Land: Swamp",
								url: "/api/2014/features/circle-of-the-land-swamp",
							},
						],
						spell: {
							index: "acid-arrow",
							name: "Acid Arrow",
							url: "/api/2014/spells/acid-arrow",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-3",
								type: "level",
								name: "Druid 3",
								url: "/api/2014/classes/druid/levels/3",
							},
							{
								index: "circle-of-the-land-swamp",
								type: "feature",
								name: "Circle of the Land: Swamp",
								url: "/api/2014/features/circle-of-the-land-swamp",
							},
						],
						spell: {
							index: "darkness",
							name: "Darkness",
							url: "/api/2014/spells/darkness",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-5",
								type: "level",
								name: "Druid 5",
								url: "/api/2014/classes/druid/levels/5",
							},
							{
								index: "circle-of-the-land-swamp",
								type: "feature",
								name: "Circle of the Land: Swamp",
								url: "/api/2014/features/circle-of-the-land-swamp",
							},
						],
						spell: {
							index: "water-walk",
							name: "Water Walk",
							url: "/api/2014/spells/water-walk",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-5",
								type: "level",
								name: "Druid 5",
								url: "/api/2014/classes/druid/levels/5",
							},
							{
								index: "circle-of-the-land-swamp",
								type: "feature",
								name: "Circle of the Land: Swamp",
								url: "/api/2014/features/circle-of-the-land-swamp",
							},
						],
						spell: {
							index: "stinking-cloud",
							name: "Stinking Cloud",
							url: "/api/2014/spells/stinking-cloud",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-7",
								type: "level",
								name: "Druid 7",
								url: "/api/2014/classes/druid/levels/7",
							},
							{
								index: "circle-of-the-land-swamp",
								type: "feature",
								name: "Circle of the Land: Swamp",
								url: "/api/2014/features/circle-of-the-land-swamp",
							},
						],
						spell: {
							index: "freedom-of-movement",
							name: "Freedom of Movement",
							url: "/api/2014/spells/freedom-of-movement",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-7",
								type: "level",
								name: "Druid 7",
								url: "/api/2014/classes/druid/levels/7",
							},
							{
								index: "circle-of-the-land-swamp",
								type: "feature",
								name: "Circle of the Land: Swamp",
								url: "/api/2014/features/circle-of-the-land-swamp",
							},
						],
						spell: {
							index: "locate-creature",
							name: "Locate Creature",
							url: "/api/2014/spells/locate-creature",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-9",
								type: "level",
								name: "Druid 9",
								url: "/api/2014/classes/druid/levels/9",
							},
							{
								index: "circle-of-the-land-swamp",
								type: "feature",
								name: "Circle of the Land: Swamp",
								url: "/api/2014/features/circle-of-the-land-swamp",
							},
						],
						spell: {
							index: "insect-plague",
							name: "Insect Plague",
							url: "/api/2014/spells/insect-plague",
						},
					},
					{
						prerequisites: [
							{
								index: "druid-9",
								type: "level",
								name: "Druid 9",
								url: "/api/2014/classes/druid/levels/9",
							},
							{
								index: "circle-of-the-land-swamp",
								type: "feature",
								name: "Circle of the Land: Swamp",
								url: "/api/2014/features/circle-of-the-land-swamp",
							},
						],
						spell: {
							index: "scrying",
							name: "Scrying",
							url: "/api/2014/spells/scrying",
						},
					},
				],
				subclass_levels: [
					{
						level: 2,
						features: [
							{
								index: "bonus-cantrip",
								name: "Bonus Cantrip",
								level: 2,
								prerequisites: [],
								desc: [
									{
										body: "When you choose this circle at 2nd level, you learn one additional druid cantrip of your choice.",
									},
								],
							},
							{
								index: "natural-recovery",
								name: "Natural Recovery",
								level: 2,
								prerequisites: [],
								desc: [
									{
										body: "Starting at 2nd level, you can regain some of your magical energy by sitting in meditation and communing with nature. During a short rest, you choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your druid level (rounded up), and none of the slots can be 6th level or higher. You can't use this feature again until you finish a long rest.",
									},
									{
										body: "For example, when you are a 4th-level druid, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level slot or two 1st-level slots.",
									},
								],
							},
						],
					},
					{
						level: 6,
						features: [
							{
								index: "druid-lands-stride",
								name: "Land's Stride",
								level: 6,
								prerequisites: [],
								desc: [
									{
										body: "Starting at 6th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.",
									},
									{
										body: "In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell.",
									},
								],
							},
						],
					},
					{
						level: 10,
						features: [
							{
								index: "natures-ward",
								name: "Nature's Ward",
								level: 10,
								prerequisites: [],
								desc: [
									{
										body: "When you reach 10th level, you can't be charmed or frightened by elementals or fey, and you are immune to poison and disease.",
									},
								],
							},
						],
						index: "land-10",
						updated_at: "2025-10-24T20:42:13.397Z",
					},
					{
						level: 14,
						features: [
							{
								index: "natures-sanctuary",
								name: "Nature's Sanctuary",
								level: 14,
								prerequisites: [],
								desc: [
									{
										body: "When you reach 14th level, creatures of the natural world sense your connection to nature and become hesitant to attack you. When a beast or plant creature attacks you, that creature must make a Wisdom saving throw against your druid spell save DC. On a failed save, the creature must choose a different target, or the attack automatically misses. On a successful save, the creature is immune to this effect for 24 hours. The creature is aware of this effect before it makes its attack against you.",
									},
								],
							},
						],
					},
				],
			},
		],
		spellcasting: {
			level: 1,
			spellcasting_ability: {
				index: "wis",
				name: "WIS",
				url: "/api/2014/ability-scores/wis",
			},
			info: [
				{
					name: "Cantrips",
					desc: [
						"At 1st level, you know two cantrips of your choice from the druid spell list. You learn additional druid cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Druid table.",
					],
				},
				{
					name: "Preparing and Casting Spells",
					desc: [
						"The Druid table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these druid spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
						"You prepare the list of druid spells that are available for you to cast, choosing from the druid spell list. When you do so, choose a number of druid spells equal to your Wisdom modifier + your druid level (minimum of one spell). The spells must be of a level for which you have spell slots.",
						"For example, if you are a 3rd-level druid, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
						"You can also change your list of prepared spells when you finish a long rest. Preparing a new list of druid spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.",
					],
				},
				{
					name: "Spellcasting Ability",
					desc: [
						"Wisdom is your spellcasting ability for your druid spells, since your magic draws upon your devotion and attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a druid spell you cast and when making an attack roll with one.",
						"Spell save DC = 8 + your proficiency bonus + your Wisdom modifier.",
						"Spell attack modifier = your proficiency bonus + your Wisdom modifier.",
					],
				},
				{
					name: "Ritual Casting",
					desc: [
						"You can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared.",
					],
				},
				{
					name: "Spellcasting Focus",
					desc: [
						'You can use a druidic focus (see chapter 5, "Equipment") as a spellcasting focus for your druid spells.',
					],
				},
			],
		},
		spells: "/api/2014/classes/druid/spells",
		url: "/api/2014/classes/druid",
		updated_at: "2025-10-24T20:42:12.459Z",
	},
	{
		index: "fighter",
		name: "Fighter",
		hit_die: 10,
		proficiency_choices: [
			{
				desc: "Choose two skills from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival",
				choose: 2,
				type: "proficiencies",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "reference",
							item: {
								index: "skill-acrobatics",
								name: "Skill: Acrobatics",
								url: "/api/2014/proficiencies/skill-acrobatics",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-animal-handling",
								name: "Skill: Animal Handling",
								url: "/api/2014/proficiencies/skill-animal-handling",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-athletics",
								name: "Skill: Athletics",
								url: "/api/2014/proficiencies/skill-athletics",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-history",
								name: "Skill: History",
								url: "/api/2014/proficiencies/skill-history",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-insight",
								name: "Skill: Insight",
								url: "/api/2014/proficiencies/skill-insight",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-intimidation",
								name: "Skill: Intimidation",
								url: "/api/2014/proficiencies/skill-intimidation",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-perception",
								name: "Skill: Perception",
								url: "/api/2014/proficiencies/skill-perception",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-survival",
								name: "Skill: Survival",
								url: "/api/2014/proficiencies/skill-survival",
							},
						},
					],
				},
			},
		],
		proficiencies: [
			{
				index: "all-armor",
				name: "All armor",
				url: "/api/2014/proficiencies/all-armor",
			},
			{
				index: "shields",
				name: "Shields",
				url: "/api/2014/proficiencies/shields",
			},
			{
				index: "simple-weapons",
				name: "Simple Weapons",
				url: "/api/2014/proficiencies/simple-weapons",
			},
			{
				index: "martial-weapons",
				name: "Martial Weapons",
				url: "/api/2014/proficiencies/martial-weapons",
			},
		],
		saving_throws: [
			{
				index: "str",
				name: "STR",
				url: "/api/2014/ability-scores/str",
			},
			{
				index: "con",
				name: "CON",
				url: "/api/2014/ability-scores/con",
			},
		],
		starting_equipment: [],
		starting_equipment_options: [
			{
				desc: "(a) chain mail or (b) leather armor, longbow, and 20 arrows",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "chain-mail",
								name: "Chain Mail",
								url: "/api/2014/equipment/chain-mail",
							},
						},
						{
							option_type: "multiple",
							items: [
								{
									option_type: "counted_reference",
									count: 1,
									of: {
										index: "leather-armor",
										name: "Leather Armor",
										url: "/api/2014/equipment/leather-armor",
									},
								},
								{
									option_type: "counted_reference",
									count: 1,
									of: {
										index: "longbow",
										name: "Longbow",
										url: "/api/2014/equipment/longbow",
									},
								},
								{
									option_type: "counted_reference",
									count: 20,
									of: {
										index: "arrow",
										name: "Arrow",
										url: "/api/2014/equipment/arrow",
									},
								},
							],
						},
					],
				},
			},
			{
				desc: "(a) a martial weapon and a shield or (b) two martial weapons",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "multiple",
							items: [
								{
									option_type: "choice",
									choice: {
										desc: "a martial weapon",
										choose: 1,
										type: "equipment",
										from: {
											option_set_type: "equipment_category",
											equipment_category: {
												index: "martial-weapons",
												name: "Martial Weapons",
												url: "/api/2014/equipment-categories/martial-weapons",
											},
										},
									},
								},
								{
									option_type: "counted_reference",
									count: 1,
									of: {
										index: "shield",
										name: "Shield",
										url: "/api/2014/equipment/shield",
									},
								},
							],
						},
						{
							option_type: "choice",
							choice: {
								desc: "two martial weapons",
								choose: 2,
								type: "equipment",
								from: {
									option_set_type: "equipment_category",
									equipment_category: {
										index: "martial-weapons",
										name: "Martial Weapons",
										url: "/api/2014/equipment-categories/martial-weapons",
									},
								},
							},
						},
					],
				},
			},
			{
				desc: "(a) a light crossbow and 20 bolts or (b) two handaxes",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "multiple",
							items: [
								{
									option_type: "counted_reference",
									count: 1,
									of: {
										index: "crossbow-light",
										name: "Crossbow, light",
										url: "/api/2014/equipment/crossbow-light",
									},
								},
								{
									option_type: "counted_reference",
									count: 20,
									of: {
										index: "crossbow-bolt",
										name: "Crossbow bolt",
										url: "/api/2014/equipment/crossbow-bolt",
									},
								},
							],
						},
						{
							option_type: "counted_reference",
							count: 2,
							of: {
								index: "handaxe",
								name: "Handaxe",
								url: "/api/2014/equipment/handaxe",
							},
						},
					],
				},
			},
			{
				desc: "(a) a dungeoneer’s pack or (b) an explorer’s pack",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "dungeoneers-pack",
								name: "Dungeoneer's Pack",
								url: "/api/2014/equipment/dungeoneers-pack",
							},
						},
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "explorers-pack",
								name: "Explorer's Pack",
								url: "/api/2014/equipment/explorers-pack",
							},
						},
					],
				},
			},
		],
		class_levels: "/api/2014/classes/fighter/levels",
		multi_classing: {
			prerequisite_options: {
				type: "ability-scores",
				choose: 1,
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "score_prerequisite",
							ability_score: {
								index: "str",
								name: "STR",
								url: "/api/2014/ability-scores/str",
							},
							minimum_score: 13,
						},
						{
							option_type: "score_prerequisite",
							ability_score: {
								index: "dex",
								name: "DEX",
								url: "/api/2014/ability-scores/dex",
							},
							minimum_score: 13,
						},
					],
				},
			},
			proficiencies: [
				{
					index: "light-armor",
					name: "Light Armor",
					url: "/api/2014/proficiencies/light-armor",
				},
				{
					index: "medium-armor",
					name: "Medium Armor",
					url: "/api/2014/proficiencies/medium-armor",
				},
				{
					index: "shields",
					name: "Shields",
					url: "/api/2014/proficiencies/shields",
				},
				{
					index: "simple-weapons",
					name: "Simple Weapons",
					url: "/api/2014/proficiencies/simple-weapons",
				},
				{
					index: "martial-weapons",
					name: "Martial Weapons",
					url: "/api/2014/proficiencies/martial-weapons",
				},
			],
		},
		subclasses: [
			{
				index: "champion",
				name: "Champion",
				url: "/api/2014/subclasses/champion",
			},
		],
		url: "/api/2014/classes/fighter",
		updated_at: "2025-10-24T20:42:12.459Z",
	},
	{
		index: "monk",
		name: "Monk",
		hit_die: 8,
		proficiency_choices: [
			{
				desc: "Choose two from Acrobatics, Athletics, History, Insight, Religion, and Stealth",
				choose: 2,
				type: "proficiencies",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "reference",
							item: {
								index: "skill-acrobatics",
								name: "Skill: Acrobatics",
								url: "/api/2014/proficiencies/skill-acrobatics",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-athletics",
								name: "Skill: Athletics",
								url: "/api/2014/proficiencies/skill-athletics",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-history",
								name: "Skill: History",
								url: "/api/2014/proficiencies/skill-history",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-insight",
								name: "Skill: Insight",
								url: "/api/2014/proficiencies/skill-insight",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-religion",
								name: "Skill: Religion",
								url: "/api/2014/proficiencies/skill-religion",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-stealth",
								name: "Skill: Stealth",
								url: "/api/2014/proficiencies/skill-stealth",
							},
						},
					],
				},
			},
			{
				desc: "Choose one type of artisan’s tools or one musical instrument",
				type: "proficiencies",
				choose: 1,
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "choice",
							choice: {
								desc: "artisan's tools",
								type: "proficiencies",
								choose: 1,
								from: {
									option_set_type: "options_array",
									options: [
										{
											option_type: "reference",
											item: {
												index: "alchemists-supplies",
												name: "Alchemist's Supplies",
												url: "/api/2014/proficiencies/alchemists-supplies",
											},
										},
										{
											option_type: "reference",
											item: {
												index: "brewers-supplies",
												name: "Brewer's Supplies",
												url: "/api/2014/proficiencies/brewers-supplies",
											},
										},
										{
											option_type: "reference",
											item: {
												index: "calligraphers-supplies",
												name: "Calligrapher's Supplies",
												url: "/api/2014/proficiencies/calligraphers-supplies",
											},
										},
										{
											option_type: "reference",
											item: {
												index: "carpenters-tools",
												name: "Carpenter's Tools",
												url: "/api/2014/proficiencies/carpenters-tools",
											},
										},
										{
											option_type: "reference",
											item: {
												index: "cartographers-tools",
												name: "Cartographer's Tools",
												url: "/api/2014/proficiencies/cartographers-tools",
											},
										},
										{
											option_type: "reference",
											item: {
												index: "cobblers-tools",
												name: "Cobbler's Tools",
												url: "/api/2014/proficiencies/cobblers-tools",
											},
										},
										{
											option_type: "reference",
											item: {
												index: "cooks-utensils",
												name: "Cook's utensils",
												url: "/api/2014/proficiencies/cooks-utensils",
											},
										},
										{
											option_type: "reference",
											item: {
												index: "glassblowers-tools",
												name: "Glassblower's Tools",
												url: "/api/2014/proficiencies/glassblowers-tools",
											},
										},
										{
											option_type: "reference",
											item: {
												index: "jewelers-tools",
												name: "Jeweler's Tools",
												url: "/api/2014/proficiencies/jewelers-tools",
											},
										},
										{
											option_type: "reference",
											item: {
												index: "leatherworkers-tools",
												name: "Leatherworker's Tools",
												url: "/api/2014/proficiencies/leatherworkers-tools",
											},
										},
										{
											option_type: "reference",
											item: {
												index: "masons-tools",
												name: "Mason's Tools",
												url: "/api/2014/proficiencies/masons-tools",
											},
										},
										{
											option_type: "reference",
											item: {
												index: "painters-supplies",
												name: "Painter's Supplies",
												url: "/api/2014/proficiencies/painters-supplies",
											},
										},
										{
											option_type: "reference",
											item: {
												index: "potters-tools",
												name: "Potter's Tools",
												url: "/api/2014/proficiencies/potters-tools",
											},
										},
										{
											option_type: "reference",
											item: {
												index: "smiths-tools",
												name: "Smith's Tools",
												url: "/api/2014/proficiencies/smiths-tools",
											},
										},
										{
											option_type: "reference",
											item: {
												index: "tinkers-tools",
												name: "Tinker's Tools",
												url: "/api/2014/proficiencies/tinkers-tools",
											},
										},
										{
											option_type: "reference",
											item: {
												index: "weavers-tools",
												name: "Weaver's Tools",
												url: "/api/2014/proficiencies/weavers-tools",
											},
										},
										{
											option_type: "reference",
											item: {
												index: "woodcarvers-tools",
												name: "Woodcarver's Tools",
												url: "/api/2014/proficiencies/woodcarvers-tools",
											},
										},
										{
											option_type: "reference",
											item: {
												index: "disguise-kit",
												name: "Disguise Kit",
												url: "/api/2014/proficiencies/disguise-kit",
											},
										},
										{
											option_type: "reference",
											item: {
												index: "forgery-kit",
												name: "Forgery Kit",
												url: "/api/2014/proficiencies/forgery-kit",
											},
										},
									],
								},
							},
						},
						{
							option_type: "choice",
							choice: {
								desc: "musical instrument",
								type: "proficiencies",
								choose: 1,
								from: {
									option_set_type: "options_array",
									options: [
										{
											option_type: "reference",
											item: {
												index: "bagpipes",
												name: "Bagpipes",
												url: "/api/2014/proficiencies/bagpipes",
											},
										},
										{
											option_type: "reference",
											item: {
												index: "drum",
												name: "Drum",
												url: "/api/2014/proficiencies/drum",
											},
										},
										{
											option_type: "reference",
											item: {
												index: "dulcimer",
												name: "Dulcimer",
												url: "/api/2014/proficiencies/dulcimer",
											},
										},
										{
											option_type: "reference",
											item: {
												index: "flute",
												name: "Flute",
												url: "/api/2014/proficiencies/flute",
											},
										},
										{
											option_type: "reference",
											item: {
												index: "lute",
												name: "Lute",
												url: "/api/2014/proficiencies/lute",
											},
										},
										{
											option_type: "reference",
											item: {
												index: "lyre",
												name: "Lyre",
												url: "/api/2014/proficiencies/lyre",
											},
										},
										{
											option_type: "reference",
											item: {
												index: "horn",
												name: "Horn",
												url: "/api/2014/proficiencies/horn",
											},
										},
										{
											option_type: "reference",
											item: {
												index: "pan-flute",
												name: "Pan flute",
												url: "/api/2014/proficiencies/pan-flute",
											},
										},
										{
											option_type: "reference",
											item: {
												index: "shawm",
												name: "Shawm",
												url: "/api/2014/proficiencies/shawm",
											},
										},
										{
											option_type: "reference",
											item: {
												index: "viol",
												name: "Viol",
												url: "/api/2014/proficiencies/viol",
											},
										},
									],
								},
							},
						},
					],
				},
			},
		],
		proficiencies: [
			{
				index: "simple-weapons",
				name: "Simple Weapons",
				url: "/api/2014/proficiencies/simple-weapons",
			},
			{
				index: "shortswords",
				name: "Shortswords",
				url: "/api/2014/proficiencies/shortswords",
			},
		],
		saving_throws: [
			{
				index: "str",
				name: "STR",
				url: "/api/2014/ability-scores/str",
			},
			{
				index: "dex",
				name: "DEX",
				url: "/api/2014/ability-scores/dex",
			},
		],
		starting_equipment: [
			{
				equipment: {
					index: "dart",
					name: "Dart",
					url: "/api/2014/equipment/dart",
				},
				quantity: 10,
			},
		],
		starting_equipment_options: [
			{
				desc: "(a) a shortsword or (b) any simple weapon",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "shortsword",
								name: "Shortsword",
								url: "/api/2014/equipment/shortsword",
							},
						},
						{
							option_type: "choice",
							choice: {
								desc: "any simple weapon",
								choose: 1,
								type: "equipment",
								from: {
									option_set_type: "equipment_category",
									equipment_category: {
										index: "simple-weapons",
										name: "Simple Weapons",
										url: "/api/2014/equipment-categories/simple-weapons",
									},
								},
							},
						},
					],
				},
			},
			{
				desc: "(a) a dungeoneer’s pack or (b) an explorer’s pack",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "dungeoneers-pack",
								name: "Dungeoneer's Pack",
								url: "/api/2014/equipment/dungeoneers-pack",
							},
						},
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "explorers-pack",
								name: "Explorer's Pack",
								url: "/api/2014/equipment/explorers-pack",
							},
						},
					],
				},
			},
		],
		class_levels: "/api/2014/classes/monk/levels",
		multi_classing: {
			prerequisites: [
				{
					ability_score: {
						index: "dex",
						name: "DEX",
						url: "/api/2014/ability-scores/dex",
					},
					minimum_score: 13,
				},
				{
					ability_score: {
						index: "wis",
						name: "WIS",
						url: "/api/2014/ability-scores/wis",
					},
					minimum_score: 13,
				},
			],
			proficiencies: [
				{
					index: "simple-weapons",
					name: "Simple Weapons",
					url: "/api/2014/proficiencies/simple-weapons",
				},
				{
					index: "shortswords",
					name: "Shortswords",
					url: "/api/2014/proficiencies/shortswords",
				},
			],
		},
		subclasses: [
			{
				index: "open-hand",
				name: "Open Hand",
				url: "/api/2014/subclasses/open-hand",
			},
		],
		url: "/api/2014/classes/monk",
		updated_at: "2025-10-24T20:42:12.459Z",
	},
	{
		index: "paladin",
		name: "Paladin",
		hit_die: 10,
		proficiency_choices: [
			{
				desc: "Choose two from Athletics, Insight, Intimidation, Medicine, Persuasion, and Religion",
				choose: 2,
				type: "proficiencies",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "reference",
							item: {
								index: "skill-athletics",
								name: "Skill: Athletics",
								url: "/api/2014/proficiencies/skill-athletics",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-insight",
								name: "Skill: Insight",
								url: "/api/2014/proficiencies/skill-insight",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-intimidation",
								name: "Skill: Intimidation",
								url: "/api/2014/proficiencies/skill-intimidation",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-medicine",
								name: "Skill: Medicine",
								url: "/api/2014/proficiencies/skill-medicine",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-persuasion",
								name: "Skill: Persuasion",
								url: "/api/2014/proficiencies/skill-persuasion",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-religion",
								name: "Skill: Religion",
								url: "/api/2014/proficiencies/skill-religion",
							},
						},
					],
				},
			},
		],
		proficiencies: [
			{
				index: "all-armor",
				name: "All armor",
				url: "/api/2014/proficiencies/all-armor",
			},
			{
				index: "shields",
				name: "Shields",
				url: "/api/2014/proficiencies/shields",
			},
			{
				index: "simple-weapons",
				name: "Simple Weapons",
				url: "/api/2014/proficiencies/simple-weapons",
			},
			{
				index: "martial-weapons",
				name: "Martial Weapons",
				url: "/api/2014/proficiencies/martial-weapons",
			},
		],
		saving_throws: [
			{
				index: "wis",
				name: "WIS",
				url: "/api/2014/ability-scores/wis",
			},
			{
				index: "cha",
				name: "CHA",
				url: "/api/2014/ability-scores/cha",
			},
		],
		starting_equipment: [
			{
				equipment: {
					index: "chain-mail",
					name: "Chain Mail",
					url: "/api/2014/equipment/chain-mail",
				},
				quantity: 1,
			},
		],
		starting_equipment_options: [
			{
				desc: "(a) a martial weapon and a shield or (b) two martial weapons",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "multiple",
							items: [
								{
									option_type: "choice",
									choice: {
										desc: "a martial weapon",
										choose: 1,
										type: "equipment",
										from: {
											option_set_type: "equipment_category",
											equipment_category: {
												name: "Martial Weapons",
												index: "martial-weapons",
												url: "/api/2014/equipment-categories/martial-weapons",
											},
										},
									},
								},
								{
									option_type: "counted_reference",
									count: 1,
									of: {
										index: "shield",
										name: "Shield",
										url: "/api/2014/equipment/shield",
									},
								},
							],
						},
						{
							option_type: "choice",
							choice: {
								desc: "two martial weapons",
								choose: 2,
								type: "equipment",
								from: {
									option_set_type: "equipment_category",
									equipment_category: {
										index: "martial-weapons",
										name: "Martial Weapons",
										url: "/api/2014/equipment-categories/martial-weapons",
									},
								},
							},
						},
					],
				},
			},
			{
				desc: "(a) five javelins or (b) any simple melee weapon",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "counted_reference",
							count: 5,
							of: {
								index: "javelin",
								name: "Javelin",
								url: "/api/2014/equipment/javelin",
							},
						},
						{
							option_type: "choice",
							choice: {
								desc: "any simple weapon",
								choose: 1,
								type: "equipment",
								from: {
									option_set_type: "equipment_category",
									equipment_category: {
										index: "simple-weapons",
										name: "Simple Weapons",
										url: "/api/2014/equipment-categories/simple-weapons",
									},
								},
							},
						},
					],
				},
			},
			{
				desc: "(a) a priest’s pack or (b) an explorer’s pack",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "priests-pack",
								name: "Priest's Pack",
								url: "/api/2014/equipment/priests-pack",
							},
						},
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "explorers-pack",
								name: "Explorer's Pack",
								url: "/api/2014/equipment/explorers-pack",
							},
						},
					],
				},
			},
			{
				desc: "holy symbol",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "equipment_category",
					equipment_category: {
						index: "holy-symbols",
						name: "Holy Symbols",
						url: "/api/2014/equipment-categories/holy-symbols",
					},
				},
			},
		],
		class_levels: "/api/2014/classes/paladin/levels",
		multi_classing: {
			prerequisites: [
				{
					ability_score: {
						index: "str",
						name: "STR",
						url: "/api/2014/ability-scores/str",
					},
					minimum_score: 13,
				},
				{
					ability_score: {
						index: "cha",
						name: "CHA",
						url: "/api/2014/ability-scores/cha",
					},
					minimum_score: 13,
				},
			],
			proficiencies: [
				{
					index: "light-armor",
					name: "Light Armor",
					url: "/api/2014/proficiencies/light-armor",
				},
				{
					index: "medium-armor",
					name: "Medium Armor",
					url: "/api/2014/proficiencies/medium-armor",
				},
				{
					index: "shields",
					name: "Shields",
					url: "/api/2014/proficiencies/shields",
				},
				{
					index: "simple-weapons",
					name: "Simple Weapons",
					url: "/api/2014/proficiencies/simple-weapons",
				},
				{
					index: "martial-weapons",
					name: "Martial Weapons",
					url: "/api/2014/proficiencies/martial-weapons",
				},
			],
		},
		subclasses: [
			{
				index: "devotion",
				name: "Devotion",
				url: "/api/2014/subclasses/devotion",
			},
		],
		spellcasting: {
			level: 2,
			spellcasting_ability: {
				index: "cha",
				name: "CHA",
				url: "/api/2014/ability-scores/cha",
			},
			info: [
				{
					name: "Preparing and Casting Spells",
					desc: [
						"The Paladin table shows how many spell slots you have to cast your spells. To cast one of your paladin spells of 1st level or higher, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
						"You prepare the list of paladin spells that are available for you to cast, choosing from the paladin spell list. When you do so, choose a number of paladin spells equal to your Charisma modifier + half your paladin level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots.",
						"For example, if you are a 5th-level paladin, you have four 1st-level and two 2nd-level spell slots. With a Charisma of 14, your list of prepared spells can include four spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or a 2nd- level slot. Casting the spell doesn't remove it from your list of prepared spells.",
						"You can change your list of prepared spells when you finish a long rest. Preparing a new list of paladin spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.",
					],
				},
				{
					name: "Spellcasting Ability",
					desc: [
						"Charisma is your spellcasting ability for your paladin spells, since their power derives from the strength of your convictions. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a paladin spell you cast and when making an attack roll with one.",
						"Spell save DC = 8 + your proficiency bonus + your Charisma modifier.",
						"Spell attack modifier = your proficiency bonus + your Charisma modifier.",
					],
				},
				{
					name: "Spellcasting Focus",
					desc: [
						"You can use a holy symbol as a spellcasting focus for your paladin spells.",
					],
				},
			],
		},
		spells: "/api/2014/classes/paladin/spells",
		url: "/api/2014/classes/paladin",
		updated_at: "2025-10-24T20:42:12.459Z",
	},
	{
		index: "ranger",
		name: "Ranger",
		hit_die: 10,
		proficiency_choices: [
			{
				desc: "Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival",
				choose: 3,
				type: "proficiencies",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "reference",
							item: {
								index: "skill-animal-handling",
								name: "Skill: Animal Handling",
								url: "/api/2014/proficiencies/skill-animal-handling",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-athletics",
								name: "Skill: Athletics",
								url: "/api/2014/proficiencies/skill-athletics",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-insight",
								name: "Skill: Insight",
								url: "/api/2014/proficiencies/skill-insight",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-investigation",
								name: "Skill: Investigation",
								url: "/api/2014/proficiencies/skill-investigation",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-nature",
								name: "Skill: Nature",
								url: "/api/2014/proficiencies/skill-nature",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-perception",
								name: "Skill: Perception",
								url: "/api/2014/proficiencies/skill-perception",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-stealth",
								name: "Skill: Stealth",
								url: "/api/2014/proficiencies/skill-stealth",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-survival",
								name: "Skill: Survival",
								url: "/api/2014/proficiencies/skill-survival",
							},
						},
					],
				},
			},
		],
		proficiencies: [
			{
				index: "light-armor",
				name: "Light Armor",
				url: "/api/2014/proficiencies/light-armor",
			},
			{
				index: "medium-armor",
				name: "Medium Armor",
				url: "/api/2014/proficiencies/medium-armor",
			},
			{
				index: "shields",
				name: "Shields",
				url: "/api/2014/proficiencies/shields",
			},
			{
				index: "simple-weapons",
				name: "Simple Weapons",
				url: "/api/2014/proficiencies/simple-weapons",
			},
			{
				index: "martial-weapons",
				name: "Martial Weapons",
				url: "/api/2014/proficiencies/martial-weapons",
			},
		],
		saving_throws: [
			{
				index: "str",
				name: "STR",
				url: "/api/2014/ability-scores/str",
			},
			{
				index: "dex",
				name: "DEX",
				url: "/api/2014/ability-scores/dex",
			},
		],
		starting_equipment: [
			{
				equipment: {
					index: "longbow",
					name: "Longbow",
					url: "/api/2014/equipment/longbow",
				},
				quantity: 1,
			},
			{
				equipment: {
					index: "arrow",
					name: "Arrow",
					url: "/api/2014/equipment/arrow",
				},
				quantity: 20,
			},
		],
		starting_equipment_options: [
			{
				desc: "(a) scale mail or (b) leather armor",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "scale-mail",
								name: "Scale Mail",
								url: "/api/2014/equipment/scale-mail",
							},
						},
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "leather-armor",
								name: "Leather Armor",
								url: "/api/2014/equipment/leather-armor",
							},
						},
					],
				},
			},
			{
				desc: "(a) two shortswords or (b) two simple melee weapons",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "counted_reference",
							count: 2,
							of: {
								index: "shortsword",
								name: "Shortsword",
								url: "/api/2014/equipment/shortsword",
							},
						},
						{
							option_type: "choice",
							choice: {
								desc: "two simple melee weapons",
								choose: 2,
								type: "equipment",
								from: {
									option_set_type: "equipment_category",
									equipment_category: {
										index: "simple-melee-weapons",
										name: "Simple Melee Weapons",
										url: "/api/2014/equipment-categories/simple-melee-weapons",
									},
								},
							},
						},
					],
				},
			},
			{
				desc: "(a) a dungeoneer’s pack or (b) an explorer’s pack",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "dungeoneers-pack",
								name: "Dungeoneer's Pack",
								url: "/api/2014/equipment/dungeoneers-pack",
							},
						},
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "explorers-pack",
								name: "Explorer's Pack",
								url: "/api/2014/equipment/explorers-pack",
							},
						},
					],
				},
			},
		],
		class_levels: "/api/2014/classes/ranger/levels",
		multi_classing: {
			prerequisites: [
				{
					ability_score: {
						index: "dex",
						name: "DEX",
						url: "/api/2014/ability-scores/dex",
					},
					minimum_score: 13,
				},
				{
					ability_score: {
						index: "wis",
						name: "WIS",
						url: "/api/2014/ability-scores/wis",
					},
					minimum_score: 13,
				},
			],
			proficiencies: [
				{
					index: "light-armor",
					name: "Light Armor",
					url: "/api/2014/proficiencies/light-armor",
				},
				{
					index: "medium-armor",
					name: "Medium Armor",
					url: "/api/2014/proficiencies/medium-armor",
				},
				{
					index: "shields",
					name: "Shields",
					url: "/api/2014/proficiencies/shields",
				},
				{
					index: "simple-weapons",
					name: "Simple Weapons",
					url: "/api/2014/proficiencies/simple-weapons",
				},
				{
					index: "martial-weapons",
					name: "Martial Weapons",
					url: "/api/2014/proficiencies/martial-weapons",
				},
			],
			proficiency_choices: [
				{
					choose: 1,
					type: "proficiencies",
					from: {
						option_set_type: "options_array",
						options: [
							{
								option_type: "reference",
								item: {
									index: "skill-animal-handling",
									name: "Skill: Animal Handling",
									url: "/api/2014/proficiencies/skill-animal-handling",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-athletics",
									name: "Skill: Athletics",
									url: "/api/2014/proficiencies/skill-athletics",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-insight",
									name: "Skill: Insight",
									url: "/api/2014/proficiencies/skill-insight",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-investigation",
									name: "Skill: Investigation",
									url: "/api/2014/proficiencies/skill-investigation",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-nature",
									name: "Skill: Nature",
									url: "/api/2014/proficiencies/skill-nature",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-perception",
									name: "Skill: Perception",
									url: "/api/2014/proficiencies/skill-perception",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-stealth",
									name: "Skill: Stealth",
									url: "/api/2014/proficiencies/skill-stealth",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-survival",
									name: "Skill: Survival",
									url: "/api/2014/proficiencies/skill-survival",
								},
							},
						],
					},
				},
			],
		},
		subclasses: [
			{
				index: "hunter",
				name: "Hunter",
				url: "/api/2014/subclasses/hunter",
			},
		],
		spellcasting: {
			level: 2,
			spellcasting_ability: {
				index: "wis",
				name: "WIS",
				url: "/api/2014/ability-scores/wis",
			},
			info: [
				{
					name: "Spell Slots",
					desc: [
						"The Ranger table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
						"For example, if you know the 1st-level spell animal friendship and have a 1st-level and a 2nd-level spell slot available, you can cast animal friendship using either slot.",
					],
				},
				{
					name: "Spells Known of 1st Level and Higher",
					desc: [
						"You know two 1st-level spells of your choice from the ranger spell list.",
						"The Spells Known column of the Ranger table shows when you learn more ranger spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 5th level in this class, you can learn one new spell of 1st or 2nd level.",
						"Additionally, when you gain a level in this class, you can choose one of the ranger spells you know and replace it with another spell from the ranger spell list, which also must be of a level for which you have spell slots.",
					],
				},
				{
					name: "Spellcasting Ability",
					desc: [
						"Wisdom is your spellcasting ability for your ranger spells, since your magic draws on your attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a ranger spell you cast and when making an attack roll with one.",
						"Spell save DC = 8 + your proficiency bonus + your Wisdom modifier.",
						"Spell attack modifier = your proficiency bonus + your Wisdom modifier.",
					],
				},
			],
		},
		spells: "/api/2014/classes/ranger/spells",
		url: "/api/2014/classes/ranger",
		updated_at: "2025-10-24T20:42:12.459Z",
	},
	{
		index: "rogue",
		name: "Rogue",
		hit_die: 8,
		proficiency_choices: [
			{
				desc: "Choose four from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, and Stealth",
				choose: 4,
				type: "proficiencies",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "reference",
							item: {
								index: "skill-acrobatics",
								name: "Skill: Acrobatics",
								url: "/api/2014/proficiencies/skill-acrobatics",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-athletics",
								name: "Skill: Athletics",
								url: "/api/2014/proficiencies/skill-athletics",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-deception",
								name: "Skill: Deception",
								url: "/api/2014/proficiencies/skill-deception",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-insight",
								name: "Skill: Insight",
								url: "/api/2014/proficiencies/skill-insight",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-intimidation",
								name: "Skill: Intimidation",
								url: "/api/2014/proficiencies/skill-intimidation",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-investigation",
								name: "Skill: Investigation",
								url: "/api/2014/proficiencies/skill-investigation",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-perception",
								name: "Skill: Perception",
								url: "/api/2014/proficiencies/skill-perception",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-performance",
								name: "Skill: Performance",
								url: "/api/2014/proficiencies/skill-performance",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-persuasion",
								name: "Skill: Persuasion",
								url: "/api/2014/proficiencies/skill-persuasion",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-sleight-of-hand",
								name: "Skill: Sleight of Hand",
								url: "/api/2014/proficiencies/skill-sleight-of-hand",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-stealth",
								name: "Skill: Stealth",
								url: "/api/2014/proficiencies/skill-stealth",
							},
						},
					],
				},
			},
		],
		proficiencies: [
			{
				index: "light-armor",
				name: "Light Armor",
				url: "/api/2014/proficiencies/light-armor",
			},
			{
				index: "simple-weapons",
				name: "Simple Weapons",
				url: "/api/2014/proficiencies/simple-weapons",
			},
			{
				index: "longswords",
				name: "Longswords",
				url: "/api/2014/proficiencies/longswords",
			},
			{
				index: "rapiers",
				name: "Rapiers",
				url: "/api/2014/proficiencies/rapiers",
			},
			{
				index: "shortswords",
				name: "Shortswords",
				url: "/api/2014/proficiencies/shortswords",
			},
			{
				index: "hand-crossbows",
				name: "Hand crossbows",
				url: "/api/2014/proficiencies/hand-crossbows",
			},
			{
				index: "thieves-tools",
				name: "Thieves' Tools",
				url: "/api/2014/proficiencies/thieves-tools",
			},
		],
		saving_throws: [
			{
				index: "dex",
				name: "DEX",
				url: "/api/2014/ability-scores/dex",
			},
			{
				index: "int",
				name: "INT",
				url: "/api/2014/ability-scores/int",
			},
		],
		starting_equipment: [
			{
				equipment: {
					index: "leather-armor",
					name: "Leather Armor",
					url: "/api/2014/equipment/leather-armor",
				},
				quantity: 1,
			},
			{
				equipment: {
					index: "dagger",
					name: "Dagger",
					url: "/api/2014/equipment/dagger",
				},
				quantity: 2,
			},
			{
				equipment: {
					index: "thieves-tools",
					name: "Thieves' Tools",
					url: "/api/2014/equipment/thieves-tools",
				},
				quantity: 1,
			},
		],
		starting_equipment_options: [
			{
				desc: "(a) a rapier or (b) a shortsword",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "rapier",
								name: "Rapier",
								url: "/api/2014/equipment/rapier",
							},
						},
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "shortsword",
								name: "Shortsword",
								url: "/api/2014/equipment/shortsword",
							},
						},
					],
				},
			},
			{
				desc: "(a) a shortbow and quiver of 20 arrows or (b) a shortsword",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "multiple",
							items: [
								{
									option_type: "counted_reference",
									count: 1,
									of: {
										index: "shortbow",
										name: "Shortbow",
										url: "/api/2014/equipment/shortbow",
									},
								},
								{
									option_type: "counted_reference",
									count: 20,
									of: {
										index: "arrow",
										name: "Arrow",
										url: "/api/2014/equipment/arrow",
									},
								},
							],
						},
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "shortsword",
								name: "Shortsword",
								url: "/api/2014/equipment/shortsword",
							},
						},
					],
				},
			},
			{
				desc: "(a) a burglar’s pack, (b) a dungeoneer’s pack, or (c) an explorer’s pack",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "burglars-pack",
								name: "Burglar's Pack",
								url: "/api/2014/equipment/burglars-pack",
							},
						},
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "dungeoneers-pack",
								name: "Dungeoneer's Pack",
								url: "/api/2014/equipment/dungeoneers-pack",
							},
						},
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "explorers-pack",
								name: "Explorer's Pack",
								url: "/api/2014/equipment/explorers-pack",
							},
						},
					],
				},
			},
		],
		class_levels: "/api/2014/classes/rogue/levels",
		multi_classing: {
			prerequisites: [
				{
					ability_score: {
						index: "dex",
						name: "DEX",
						url: "/api/2014/ability-scores/dex",
					},
					minimum_score: 13,
				},
			],
			proficiencies: [
				{
					index: "light-armor",
					name: "Light Armor",
					url: "/api/2014/proficiencies/light-armor",
				},
				{
					index: "thieves-tools",
					name: "Thieves' Tools",
					url: "/api/2014/proficiencies/thieves-tools",
				},
			],
			proficiency_choices: [
				{
					choose: 1,
					type: "proficiencies",
					from: {
						option_set_type: "options_array",
						options: [
							{
								option_type: "reference",
								item: {
									index: "skill-acrobatics",
									name: "Skill: Acrobatics",
									url: "/api/2014/proficiencies/skill-acrobatics",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-athletics",
									name: "Skill: Athletics",
									url: "/api/2014/proficiencies/skill-athletics",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-deception",
									name: "Skill: Deception",
									url: "/api/2014/proficiencies/skill-deception",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-insight",
									name: "Skill: Insight",
									url: "/api/2014/proficiencies/skill-insight",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-intimidation",
									name: "Skill: Intimidation",
									url: "/api/2014/proficiencies/skill-intimidation",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-investigation",
									name: "Skill: Investigation",
									url: "/api/2014/proficiencies/skill-investigation",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-perception",
									name: "Skill: Perception",
									url: "/api/2014/proficiencies/skill-perception",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-performance",
									name: "Skill: Performance",
									url: "/api/2014/proficiencies/skill-performance",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-persuasion",
									name: "Skill: Persuasion",
									url: "/api/2014/proficiencies/skill-persuasion",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-sleight-of-hand",
									name: "Skill: Sleight of Hand",
									url: "/api/2014/proficiencies/skill-sleight-of-hand",
								},
							},
							{
								option_type: "reference",
								item: {
									index: "skill-stealth",
									name: "Skill: Stealth",
									url: "/api/2014/proficiencies/skill-stealth",
								},
							},
						],
					},
				},
			],
		},
		subclasses: [
			{
				index: "thief",
				name: "Thief",
				url: "/api/2014/subclasses/thief",
			},
		],
		url: "/api/2014/classes/rogue",
		updated_at: "2025-10-24T20:42:12.459Z",
	},
	{
		index: "sorcerer",
		name: "Sorcerer",
		hit_die: 6,
		proficiency_choices: [
			{
				desc: "Choose two from Arcana, Deception, Insight, Intimidation, Persuasion, and Religion",
				choose: 2,
				type: "proficiencies",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "reference",
							item: {
								index: "skill-arcana",
								name: "Skill: Arcana",
								url: "/api/2014/proficiencies/skill-arcana",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-deception",
								name: "Skill: Deception",
								url: "/api/2014/proficiencies/skill-deception",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-insight",
								name: "Skill: Insight",
								url: "/api/2014/proficiencies/skill-insight",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-intimidation",
								name: "Skill: Intimidation",
								url: "/api/2014/proficiencies/skill-intimidation",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-persuasion",
								name: "Skill: Persuasion",
								url: "/api/2014/proficiencies/skill-persuasion",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-religion",
								name: "Skill: Religion",
								url: "/api/2014/proficiencies/skill-religion",
							},
						},
					],
				},
			},
		],
		proficiencies: [
			{
				index: "daggers",
				name: "Daggers",
				url: "/api/2014/proficiencies/daggers",
			},
			{
				index: "darts",
				name: "Darts",
				url: "/api/2014/proficiencies/darts",
			},
			{
				index: "slings",
				name: "Slings",
				url: "/api/2014/proficiencies/slings",
			},
			{
				index: "quarterstaffs",
				name: "Quarterstaffs",
				url: "/api/2014/proficiencies/quarterstaffs",
			},
			{
				index: "crossbows-light",
				name: "Crossbows, light",
				url: "/api/2014/proficiencies/crossbows-light",
			},
		],
		saving_throws: [
			{
				index: "con",
				name: "CON",
				url: "/api/2014/ability-scores/con",
			},
			{
				index: "cha",
				name: "CHA",
				url: "/api/2014/ability-scores/cha",
			},
		],
		starting_equipment: [
			{
				equipment: {
					index: "dagger",
					name: "Dagger",
					url: "/api/2014/equipment/dagger",
				},
				quantity: 2,
			},
		],
		starting_equipment_options: [
			{
				desc: "(a) a light crossbow and 20 bolts or (b) any simple weapon",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "multiple",
							items: [
								{
									option_type: "counted_reference",
									count: 1,
									of: {
										index: "crossbow-light",
										name: "Crossbow, light",
										url: "/api/2014/equipment/crossbow-light",
									},
								},
								{
									option_type: "counted_reference",
									count: 20,
									of: {
										index: "crossbow-bolt",
										name: "Crossbow bolt",
										url: "/api/2014/equipment/crossbow-bolt",
									},
								},
							],
						},
						{
							option_type: "choice",
							choice: {
								desc: "any simple weapon",
								choose: 1,
								type: "equipment",
								from: {
									option_set_type: "equipment_category",
									equipment_category: {
										index: "simple-weapons",
										name: "Simple Weapons",
										url: "/api/2014/equipment-categories/simple-weapons",
									},
								},
							},
						},
					],
				},
			},
			{
				desc: "(a) a component pouch or (b) an arcane focus",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "component-pouch",
								name: "Component pouch",
								url: "/api/2014/equipment/component-pouch",
							},
						},
						{
							option_type: "choice",
							choice: {
								desc: "arcane focus",
								choose: 1,
								type: "equipment",
								from: {
									option_set_type: "equipment_category",
									equipment_category: {
										index: "arcane-foci",
										name: "Arcane Foci",
										url: "/api/2014/equipment-categories/arcane-foci",
									},
								},
							},
						},
					],
				},
			},
			{
				desc: "(a) a dungeoneer’s pack or (b) an explorer’s pack",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "dungeoneers-pack",
								name: "Dungeoneer's Pack",
								url: "/api/2014/equipment/dungeoneers-pack",
							},
						},
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "explorers-pack",
								name: "Explorer's Pack",
								url: "/api/2014/equipment/explorers-pack",
							},
						},
					],
				},
			},
		],
		class_levels: "/api/2014/classes/sorcerer/levels",
		multi_classing: {
			prerequisites: [
				{
					ability_score: {
						index: "cha",
						name: "CHA",
						url: "/api/2014/ability-scores/cha",
					},
					minimum_score: 13,
				},
			],
			proficiencies: [],
		},
		subclasses: [
			{
				index: "draconic",
				name: "Draconic",
				url: "/api/2014/subclasses/draconic",
			},
		],
		spellcasting: {
			level: 1,
			spellcasting_ability: {
				index: "cha",
				name: "CHA",
				url: "/api/2014/ability-scores/cha",
			},
			info: [
				{
					name: "Cantrips",
					desc: [
						"At 1st level, you know four cantrips of your choice from the sorcerer spell list. You learn additional sorcerer cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Sorcerer table.",
					],
				},
				{
					name: "Spell Slots",
					desc: [
						"The Sorcerer table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these sorcerer spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
						"For example, if you know the 1st-level spell burning hands and have a 1st-level and a 2nd-level spell slot available, you can cast burning hands using either slot.",
					],
				},
				{
					name: "Spells Known of 1st Level and Higher",
					desc: [
						"You know two 1st-level spells of your choice from the sorcerer spell list.",
						"The Spells Known column of the Sorcerer table shows when you learn more sorcerer spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level. ",
						"Additionally, when you gain a level in this class, you can choose one of the sorcerer spells you know and replace it with another spell from the sorcerer spell list, which also must be of a level for which you have spell slots.",
					],
				},
				{
					name: "Spellcasting Ability",
					desc: [
						"Charisma is your spellcasting ability for your sorcerer spells, since the power of your magic relies on your ability to project your will into the world. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a sorcerer spell you cast and when making an attack roll with one.",
						"Spell save DC = 8 + your proficiency bonus + your Charisma modifier.",
						"Spell attack modifier = your proficiency bonus + your Charisma modifier.",
					],
				},
				{
					name: "Spellcasting Focus",
					desc: [
						"You can use an arcane focus as a spellcasting focus for your sorcerer spells.",
					],
				},
			],
		},
		spells: "/api/2014/classes/sorcerer/spells",
		url: "/api/2014/classes/sorcerer",
		updated_at: "2025-10-24T20:42:12.459Z",
	},
	{
		index: "warlock",
		name: "Warlock",
		hit_die: 8,
		proficiency_choices: [
			{
				desc: "Choose two skills from Arcana, Deception, History, Intimidation, Investigation, Nature, and Religion",
				choose: 2,
				type: "proficiencies",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "reference",
							item: {
								index: "skill-arcana",
								name: "Skill: Arcana",
								url: "/api/2014/proficiencies/skill-arcana",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-deception",
								name: "Skill: Deception",
								url: "/api/2014/proficiencies/skill-deception",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-history",
								name: "Skill: History",
								url: "/api/2014/proficiencies/skill-history",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-intimidation",
								name: "Skill: Intimidation",
								url: "/api/2014/proficiencies/skill-intimidation",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-investigation",
								name: "Skill: Investigation",
								url: "/api/2014/proficiencies/skill-investigation",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-nature",
								name: "Skill: Nature",
								url: "/api/2014/proficiencies/skill-nature",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-religion",
								name: "Skill: Religion",
								url: "/api/2014/proficiencies/skill-religion",
							},
						},
					],
				},
			},
		],
		proficiencies: [
			{
				index: "light-armor",
				name: "Light Armor",
				url: "/api/2014/proficiencies/light-armor",
			},
			{
				index: "simple-weapons",
				name: "Simple Weapons",
				url: "/api/2014/proficiencies/simple-weapons",
			},
		],
		saving_throws: [
			{
				index: "wis",
				name: "WIS",
				url: "/api/2014/ability-scores/wis",
			},
			{
				index: "cha",
				name: "CHA",
				url: "/api/2014/ability-scores/cha",
			},
		],
		starting_equipment: [
			{
				equipment: {
					index: "dagger",
					name: "Dagger",
					url: "/api/2014/equipment/dagger",
				},
				quantity: 2,
			},
			{
				equipment: {
					index: "leather-armor",
					name: "Leather Armor",
					url: "/api/2014/equipment/leather-armor",
				},
				quantity: 1,
			},
		],
		starting_equipment_options: [
			{
				desc: "(a) a light crossbow and 20 bolts or (b) any simple weapon",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "multiple",
							items: [
								{
									option_type: "counted_reference",
									count: 1,
									of: {
										index: "crossbow-light",
										name: "Crossbow, light",
										url: "/api/2014/equipment/crossbow-light",
									},
								},
								{
									option_type: "counted_reference",
									count: 20,
									of: {
										index: "crossbow-bolt",
										name: "Crossbow bolt",
										url: "/api/2014/equipment/crossbow-bolt",
									},
								},
							],
						},
						{
							option_type: "choice",
							choice: {
								desc: "any simple weapon",
								choose: 1,
								type: "equipment",
								from: {
									option_set_type: "equipment_category",
									equipment_category: {
										index: "simple-weapons",
										name: "Simple Weapons",
										url: "/api/2014/equipment-categories/simple-weapons",
									},
								},
							},
						},
					],
				},
			},
			{
				desc: "(a) a component pouch or (b) an arcane focus",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "component-pouch",
								name: "Component pouch",
								url: "/api/2014/equipment/component-pouch",
							},
						},
						{
							option_type: "choice",
							choice: {
								desc: "arcane focus",
								choose: 1,
								type: "equipment",
								from: {
									option_set_type: "equipment_category",
									equipment_category: {
										index: "arcane-foci",
										name: "Arcane Foci",
										url: "/api/2014/equipment-categories/arcane-foci",
									},
								},
							},
						},
					],
				},
			},
			{
				desc: "(a) a scholar’s pack or (b) a dungeoneer’s pack",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "scholars-pack",
								name: "Scholar's Pack",
								url: "/api/2014/equipment/scholars-pack",
							},
						},
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "dungeoneers-pack",
								name: "Dungeoneer's Pack",
								url: "/api/2014/equipment/dungeoneers-pack",
							},
						},
					],
				},
			},
			{
				desc: "any simple weapon",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "equipment_category",
					equipment_category: {
						index: "simple-weapons",
						name: "Simple Weapons",
						url: "/api/2014/equipment-categories/simple-weapons",
					},
				},
			},
		],
		class_levels: "/api/2014/classes/warlock/levels",
		multi_classing: {
			prerequisites: [
				{
					ability_score: {
						index: "cha",
						name: "CHA",
						url: "/api/2014/ability-scores/cha",
					},
					minimum_score: 13,
				},
			],
			proficiencies: [
				{
					index: "light-armor",
					name: "Light Armor",
					url: "/api/2014/proficiencies/light-armor",
				},
				{
					index: "simple-weapons",
					name: "Simple Weapons",
					url: "/api/2014/proficiencies/simple-weapons",
				},
			],
		},
		subclasses: [
			{
				index: "fiend",
				name: "Fiend",
				url: "/api/2014/subclasses/fiend",
			},
		],
		spellcasting: {
			level: 1,
			spellcasting_ability: {
				index: "cha",
				name: "CHA",
				url: "/api/2014/ability-scores/cha",
			},
			info: [
				{
					name: "Cantrips",
					desc: [
						"You know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table.",
					],
				},
				{
					name: "Spell Slots",
					desc: [
						"The Warlock table shows how many spell slots you have. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest.",
						"For example, when you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell thunderwave, you must spend one of those slots, and you cast it as a 3rd-level spell.",
					],
				},
				{
					name: "Spells Known of 1st Level and Higher",
					desc: [
						"At 1st level, you know two 1st-level spells of your choice from the warlock spell list.",
						"The Spells Known column of the Warlock table shows when you learn more warlock spells of your choice of 1st level and higher. ",
						"A spell you choose must be of a level no higher than what's shown in the table's Slot Level column for your level. When you reach 6th level, for example, you learn a new warlock spell, which can be 1st, 2nd, or 3rd level.",
						"Additionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots.",
					],
				},
				{
					name: "Spellcasting Ability",
					desc: [
						"Charisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell you cast and when making an attack roll with one.",
						"Spell save DC = 8 + your proficiency bonus + your Charisma modifier.",
						"Spell attack modifier = your proficiency bonus + your Charisma modifier.",
					],
				},
				{
					name: "Spellcasting Focus",
					desc: [
						"You can use an arcane focus as a spellcasting focus for your warlock spells.",
					],
				},
			],
		},
		spells: "/api/2014/classes/warlock/spells",
		url: "/api/2014/classes/warlock",
		updated_at: "2025-10-24T20:42:12.459Z",
	},
	{
		index: "wizard",
		name: "Wizard",
		hit_die: 6,
		proficiency_choices: [
			{
				desc: "Choose two from Arcana, History, Insight, Investigation, Medicine, and Religion",
				choose: 2,
				type: "proficiencies",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "reference",
							item: {
								index: "skill-arcana",
								name: "Skill: Arcana",
								url: "/api/2014/proficiencies/skill-arcana",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-history",
								name: "Skill: History",
								url: "/api/2014/proficiencies/skill-history",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-insight",
								name: "Skill: Insight",
								url: "/api/2014/proficiencies/skill-insight",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-investigation",
								name: "Skill: Investigation",
								url: "/api/2014/proficiencies/skill-investigation",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-medicine",
								name: "Skill: Medicine",
								url: "/api/2014/proficiencies/skill-medicine",
							},
						},
						{
							option_type: "reference",
							item: {
								index: "skill-religion",
								name: "Skill: Religion",
								url: "/api/2014/proficiencies/skill-religion",
							},
						},
					],
				},
			},
		],
		proficiencies: [
			{
				index: "daggers",
				name: "Daggers",
				url: "/api/2014/proficiencies/daggers",
			},
			{
				index: "darts",
				name: "Darts",
				url: "/api/2014/proficiencies/darts",
			},
			{
				index: "slings",
				name: "Slings",
				url: "/api/2014/proficiencies/slings",
			},
			{
				index: "quarterstaffs",
				name: "Quarterstaffs",
				url: "/api/2014/proficiencies/quarterstaffs",
			},
			{
				index: "crossbows-light",
				name: "Crossbows, light",
				url: "/api/2014/proficiencies/crossbows-light",
			},
		],
		saving_throws: [
			{
				index: "int",
				name: "INT",
				url: "/api/2014/ability-scores/int",
			},
			{
				index: "wis",
				name: "WIS",
				url: "/api/2014/ability-scores/wis",
			},
		],
		starting_equipment: [
			{
				equipment: {
					index: "spellbook",
					name: "Spellbook",
					url: "/api/2014/equipment/spellbook",
				},
				quantity: 1,
			},
		],
		starting_equipment_options: [
			{
				desc: "(a) a quarterstaff or (b) a dagger",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "quarterstaff",
								name: "Quarterstaff",
								url: "/api/2014/equipment/quarterstaff",
							},
						},
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "dagger",
								name: "Dagger",
								url: "/api/2014/equipment/dagger",
							},
						},
					],
				},
			},
			{
				desc: "(a) a component pouch or (b) an arcane focus",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "component-pouch",
								name: "Component pouch",
								url: "/api/2014/equipment/component-pouch",
							},
						},
						{
							option_type: "choice",
							choice: {
								desc: "arcane focus",
								choose: 1,
								type: "equipment",
								from: {
									option_set_type: "equipment_category",
									equipment_category: {
										index: "arcane-foci",
										name: "Arcane Foci",
										url: "/api/2014/equipment-categories/arcane-foci",
									},
								},
							},
						},
					],
				},
			},
			{
				desc: "(a) a scholar’s pack or (b) an explorer’s pack",
				choose: 1,
				type: "equipment",
				from: {
					option_set_type: "options_array",
					options: [
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "scholars-pack",
								name: "Scholar's Pack",
								url: "/api/2014/equipment/scholars-pack",
							},
						},
						{
							option_type: "counted_reference",
							count: 1,
							of: {
								index: "explorers-pack",
								name: "Explorer's Pack",
								url: "/api/2014/equipment/explorers-pack",
							},
						},
					],
				},
			},
		],
		class_levels: "/api/2014/classes/wizard/levels",
		multi_classing: {
			prerequisites: [
				{
					ability_score: {
						index: "int",
						name: "INT",
						url: "/api/2014/ability-scores/int",
					},
					minimum_score: 13,
				},
			],
			proficiencies: [],
		},
		subclasses: [
			{
				index: "evocation",
				name: "Evocation",
				url: "/api/2014/subclasses/evocation",
			},
		],
		spellcasting: {
			level: 1,
			spellcasting_ability: {
				index: "int",
				name: "INT",
				url: "/api/2014/ability-scores/int",
			},
			info: [
				{
					name: "Cantrips",
					desc: [
						"At 1st level, you know three cantrips of your choice from the wizard spell list. You learn additional wizard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Wizard table.",
					],
				},
				{
					name: "Spellbook",
					desc: [
						"At 1st level, you have a spellbook containing six 1st- level wizard spells of your choice. Your spellbook is the repository of the wizard spells you know, except your cantrips, which are fixed in your mind.",
					],
				},
				{
					name: "Preparing and Casting Spells",
					desc: [
						"The Wizard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
						"You prepare the list of wizard spells that are available for you to cast. To do so, choose a number of wizard spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be of a level for which you have spell slots.",
						"For example, if you're a 3rd-level wizard, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination, chosen from your spellbook. If you prepare the 1st-level spell magic missile, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
						"You can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantations and gestures you must make to cast the spell: at least 1 minute per spell level for each spell on your list.",
					],
				},
				{
					name: "Spellcasting Ability",
					desc: [
						"Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.",
						"Spell save DC = 8 + your proficiency bonus + your Intelligence modifier.",
						"Spell attack modifier = your proficiency bonus + your Intelligence modifier.",
					],
				},
				{
					name: "Ritual Casting",
					desc: [
						"You can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don't need to have the spell prepared.",
					],
				},
				{
					name: "Spellcasting Focus",
					desc: [
						"You can use an arcane focus as a spellcasting focus for your wizard spells.",
					],
				},
			],
		},
		spells: "/api/2014/classes/wizard/spells",
		url: "/api/2014/classes/wizard",
		updated_at: "2025-10-24T20:42:12.459Z",
	},
];
