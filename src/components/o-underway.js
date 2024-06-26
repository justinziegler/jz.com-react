const underway = [
  {
    name: 'James Wallace',
    number: '9',
    career: '',
    top: 275,
    left: 695,
    scenes: ['II.2', 'II.3', 'V.1', 'V.2', 'V.4', 'VI.4'],
    activity: ['', '', 'Observing new corpses with Dr.\'s bag', 'Standing by corpse near goat pen', 'Tending to victim\s severed leg', ''],
    dies: true
  },
  {
    name: 'Thomas Sefton',
    number: 12,
    career: 'Cook',
    top: 230,
    left: 205,
    scenes: ['III.2', 'V.2'],
    activity: ['Holding fork in back', ''],
    dies: true
  },
  {
    name: 'Emil O\'\Farrell',
    number: 13,
    career: 'Butcher',
    top: 165,
    left: 55,
    scenes: ['II.3', 'III.2', 'V.3', 'V.4', 'VI.4', 'VI.5', 'VI.6'],
    activity: ['', 'Observing near goat pen', 'Watching', 'Trying to descend to Orlop', 'Fending off monster', 'Stabbed', ''],
    dies: true
  },
  {
    name: 'Abigail Witterel',
    number: 19,
    career: 'Passenger',
    top: 180,
    left: 800,
    scenes: ['VII.8'],
    dies: true
  },
  {
    name: 'Nunzio Pasqua',
    number: 20,
    career: 'Passenger',
    top: 250,
    left: 580,
    scenes: ['III.1'],
    dies: true
  },
  {
    name: 'Emily Jackson',
    number: '21',
    career: '',
    top: 195,
    left: 1010,
    scenes: ['VII.8', 'IX.2', 'IX.3'],
    activity: ['', 'On boat', 'Killer on Boat'],
    dies: false
  },
  {
    name: 'Miss Jane Bird',
    number: 22,
    career: '',
    top: 155,
    left: 915,
    scenes: ['VII.8', 'IX.2', 'IX.3'],
    activity: ['', 'On boat', 'On Boat'],
    dies: false
  },
  {
    name: 'Omid Gul',
    number: '36',
    career: '',
    top: 110,
    left: 540,
    scenes: ['II.1', 'VI.1', 'VI.4', 'VI.7', 'VI.8', 'VII.2', 'VII.6'],
    activity: ['Sleeping', 'Looks dead to me. On mast.', 'Running with sword', 'Attacking beast', 'Attacking from above   ', 'On deck looking out at water', 'Tossed overboard'],
    dies: false
  },
  {
    name: 'Timothy Butement',
    number: 37,
    career: '',
    top: 135,
    left: 620,
    scenes: ['II.1', 'III.3'],
    activity: ['Sleeping', 'Dies'],
    dies: true
  },
  {
    name: 'Jie Zhang',
    number: '39',
    career: '',
    top: 570,
    left: 860,
    scenes: ['II.1', 'V.2', 'VI.1', 'VI.4'],
    activity: ['', 'Helping unload cargo', 'Climbing up rigging to help', ''],
    dies: true
  },
  {
    name: 'Nicholas Botterill',
    number: 42,
    career: '',
    top: 60,
    left: 380,
    scenes: ['II.1', 'V.2', 'VI.1', 'VI.2',],
    activity: ['', 'Watching over deck activity', 'Helping on deck?', ''],
    dies: true
  },
  {
    name: 'Maba',
    number: '43',
    career: '',
    top: 140,
    left: 480,
    scenes: ['II.1', 'VI.1', 'VI.8', 'VII.2', 'VII.3', 'VII.4', 'VII.6', 'VII.7'],
    activity: ['Sleeping', 'Sitting casually on mast', 'Moving to attack', 'Asleep', 'Picking up cannon plunger', 'Stumbling', 'Bracing self on deck', 'Torn apart'],
    dies: false
  },
  {
    name: 'Lewis Walker',
    number: '44',
    career: '',
    top: 100,
    left: 700,
    scenes: ['II.1', 'VI.1', 'VII.2', 'VII.3', 'VII.4', 'VII.7', 'VII.8', 'IX.2', 'IX.3', 'IX.4', 'IX.6', 'X.1', 'X.2', 'X.3' ],
    activity: ['Sleeping', 'Way up in the rigging', 'Asleep', 'Lighting cannon', 'Stumbling', 'Climbing mast ropes', '', 'Climbing side of ship', 'Climbing up side toward captain', '', '', 'Heading to top deck', 'Dropping from top deck into Capt Qtrs', 'Clubbed'],
    dies: true
  },
  {
    name: 'Leonid Volkov',
    number: '45',
    career: '',
    top: 450,
    left: 462,
    scenes: ['I.1', 'I.2', 'II.1', 'VI.1', 'VII.2', 'VII.3', 'VII.4', 'VII.5', 'VII.7', 'IX.2', 'IX.3'],
    activity: ['', '', 'Playing cards', 'Way up in the rigging', 'Asleep', 'Struggling with cannon', 'On floor', 'Holding a bloody pike?', 'Spears kraken', 'Killer', 'Shot in Self Defense'],
    dies: true
  },
  {
    name: 'Alarcus Nikishin',
    number: 46,
    career: '',
    top: 420,
    left: 240,
    scenes: ['II.1', 'III.3', 'IV.1', 'IV.2'],
    activity: ['Playing cards', 'Helping Formosans into(?) boat', 'Rowing', 'Pulled from boat'],
    dies: false
  },
  {
    name: 'Nathan Peters',
    number: '48',
    career: 'Seaman',
    top: 305,
    left: 150,
    scenes: ['I.1', 'I.2', 'II.1', 'V.1', 'V.2', 'V.3', 'VI.1', 'VI.2', 'VI.3', 'VI.4', 'VI.5', 'VI.6','VI.8', 'VII.1', 'VII.7' ],
    activity: ['', '', 'Sleeping', 'On mast wheel', 'Carrying cargo', 'Intentionally letting go of cargo?', 'Helping on deck?', 'Watching in horror', 'Cowering', 'Hiding w/Winston', 'Opening hatch', 'Opening hatch', 'Attacking from under stairwell', ' Clubbing', 'Tossed out to sea'],
    dies: false
  },
  {
    name: 'Renfred Rajub',
    number: 51,
    career: 'Seaman',
    top: 265,
    left: 400,
    scenes: ['I.1', 'I.2', 'II.1', 'II.2'],
    activity: ['', '', 'Sick in bed', 'Dies'],
    dies: true
  },
  {
    name: 'Abraham Akbar',
    number: 52,
    career: 'Seaman',
    top: 200,
    left: 340,
    scenes: ['II.1', 'II.2', 'II.3', 'V.1', 'V.2', 'V.3', 'V.4', 'VI.1', 'VI.2', 'VI.3', 'VII.2', 'VII.3'],
    activity: ['Watching victims', '', '', 'On mast wheel', 'Carrying cargo', 'Dropping cargo', 'Attending to William Wasim, deceased', 'Helping on deck?', 'Watching in horror', 'Hiding on deck', 'Asleep, I think', ''],
    dies: true
  },
  {
    name: 'William Wasim',
    number: 53,
    career: 'Seaman',
    top: 290,
    left: 462,
    scenes: ['II.1', 'II.2', 'II.3', 'V.1', 'V.2', 'V.3'],
    activity: ['Holding lantern over victim', '', '', 'On mast wheel', 'Carrying cargo', 'Dropping cargo'],
    dies: true
  },
  {
    name: 'Solomon Syed',
    number: 54,
    career: 'Butcher',
    top: 275,
    left: 250,
    scenes: ['I.1', 'I.2', 'II.1'],
    dies: true
  },
  {
    name: 'Hamadou Diom',
    number: '55',
    career: '',
    top: 600,
    left: 50,
    scenes: ['I.1', 'I.2', 'II.1', 'V.1'],
    activity: ['', '', '', 'Cradling victim. Dies as well.'],
    dies: false
  },
  {
    name: 'Alexander Booth',
    number: 57,
    career: '',
    top: 540,
    left: 650,
    scenes: ['I.1', 'I.2', 'II.1', 'V.1', 'V.2', 'V.4', 'VI.1', 'VI.2', 'VI.8', 'VII.1', 'VII.7', ],
    activity: ['', '', '', 'In boat helping', '(Un)loading cargo', 'Hauling cargo', 'Helping on deck?', 'Watching in horror', 'Attacking beast', 'Watching in surprise from escape boat', 'Tossed overboard(?)'],
    dies: true
  },
  {
    name: 'George Shirley',
    number: 59,
    career: '',
    top: 640,
    left: 450,
    scenes: ['II.1', 'V.1', 'V.2', 'V.4', 'VI.1', 'VI.2', 'VII.2', 'VII.3', 'VII.4'],
    activity: ['', 'In escape boat with treasure', '(Un)loading cargo', 'Hauling cargo', 'Helping on deck?', 'Watching in horror', 'Eating', 'Tugging on tentacle', ''],
    dies: true
  },
  {
    name: 'Samuel Peters',
    number: 60,
    career: '',
    top: 400,
    left: 62,
    scenes: ['I.1'],
    dies: true
  },
  {
    name: 'Clapping guy',
    number: '9?',
    career: '',
    top: 220,
    left: 1080,
    scenes: ['IV.6', 'V.2', 'V.4'],
    activity: ['Watching from deck', 'Running toward gun deck galley', ''],
    dies: false
  }
]

export { underway };