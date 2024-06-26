const justice = [
  {
    name: 'Capt. Robert Witterel',
    number: 1,
    career: '',
    top: 380,
    left: 400,
    scenes: ['III.2', 'V.1', 'V.2', 'V.4', 'VI.7', 'IX.1', 'IX.2', 'IX.3', 'IX.4', 'X.1', 'X.2', 'X.3', 'X.4'],
    activity: [
      'Watching', 
      'Bracing self amid incoming fire', 'Dressing down 2 and 4', 'Yelling at his stew', 'Present', 'Ascending to main deck', 'Firing warning shot', 'On Deck', '', 'Killer', 'Killer', 'Killer', 'Kills himself'],
    dies: true
  },
  {
    name: 'William Hoscut (M)',
    number: 2,
    career: '',
    top: 430,
    left: 540,
    scenes: ['III.2', 'V.1', 'V.2', 'V.4', 'VI.4', 'VI.5', 'VI.7', 'IX.1', 'IX.2', 'IX.3', 'IX.4', 'IX.5', 'IX.6', 'X.1'],
    activity: [
      'Watching', 
      'Watching the carnage', 
      'Listening to the capt', 'Watching with crossed arms', 'Aiming gun upstairs', 'Reloading', 'Defending against beast', 'Exiting first mate quarters', 'Racing across deck', 'Ascending Staircase', '', '', '', 'Shot by Captain'],
    dies: true
  },
  {
    name: 'Edward Nichols',
    number: 3,
    career: '',
    top: 360,
    left: 600,
    scenes: ['III.1', 'III.2', 'III.3', 'IV.1', 'IV.2', 'IV.3', 'IV.4', 'IV.5', 'IV.6'],
    activity: ['', 'In the back listening to 3?', 'Killer', 'Watching', 'Watches monster from boat', 'Cowers in boat', 'Cowers in boat', 'Fights sahaugin', 'Shot after recovering treasure'],
    dies: true
  },
  {
    name: 'Martin Perrot',
    number: '4',
    career: 'Third Mate',
    top: 355,
    left: 385,
    scenes: ['II.2', 'III.2', 'V.I', 'V.2', 'V.4', 'VII.2', 'VII.5', 'VII.7', 'VII.8'],
    activity: ['', 'Watching', '', 'Listening to the capt', 'Guiding cargo downstairs', 'On gun deck with 10', 'Trying to offer a hand', 'Aiming shotgun', ''], 
    dies: false
  },
  {
    name: 'John Davies',
    number: 5,
    career: 'Fourth Mate',
    top: 520,
    left: 1090,
    scenes: ['III.2', 'IV.6', 'VI.3', 'VI.4', 'VII.2', 'VII.6', 'VII.7', 'IX.1', 'IX.2', 'IX.3', 'IX.4', 'IX.5'],
    activity: ['Watching', 'Watching from porthole', 'Nervously defending', 'Guarding against beast', 'Examining Lars\' corpse', 'Running up from gun deck', 'On deck watching', 'In galley consoling victim', 'In galley, head in hands', 'Below deck near blood', 'Killer', '', ],
    dies: false
  },
  {
    name: 'Alfred Klestil',
    number: 6,
    career: 'Bosun',
    top: 300,
    left: 950,
    scenes: ['III.2', 'V.1', 'V.2', 'V.4', 'VI.4', 'VI.5', 'VI.6', 'VI.7', 'VII.7', 'VII.8', 'IX.1'],
    activity: ['Observing', 'Dodging monster dart', 'Supervising on deck', 'Preparing tourniquet?', 'Running & gunning', 'Running & gunning', 'Passing gun to Winston', 'Aiming rifle', 'Tossing rifle (to Bosun mate?)', '', 'Dying in Officer\'s Mess'],
    dies: true
  },
  {
    name: 'Charles Miner',
    number: 7,
    career: 'Bosun\'s Mate',
    top: 640,
    left: 600,
    scenes: ['I.1', 'I.2', 'III.2', 'V.1', 'V.2', 'VI.1', 'VI.2', 'V.4', 'VI.4', 'VI.5', 'VI.7', 'VI.8', 'VII.7', 'VII.8'],
    activity: ['', '', 'Crowd control', 'Holding rope restraining catch', 'Standing near goat pen', 'Helping on deck?', 'Watching in horror near goat pen', 'Hauling off Capt\s stew', 'Grabbing gun from store', 'Loading rifle', 'Present - firing rifle?', 'Attacking beast from above', 'Trying to help', ''],
    dies: false
  },
  {
    name: 'Henry Evans',
    number: 8,
    career: '',
    top: 285,
    left: 510,
    scenes: ['II.2', 'II.3', 'V.1', 'V.2', 'V.4', 'VI.5', 'VI.6', 'VI.7', 'IX.2', 'IX.3', ],
    activity: ['', '', 'Guarding corpses', 'Holding a spear/stabber', 'Tending to victim', 'Watching', 'Helping victim down', 'Shouting orders?', 'On boat', 'On boat looking dead'],
    dies: false
  },
  {
    name: 'Winston Smith',
    number: '10',
    career: '',
    top: 440,
    left: 1200,
    scenes: ['III.2', 'V.3', 'V.4', 'VI.3', 'VI.4', 'VI.5', 'VI.6', 'VI.8',],
    activity: ['Observing in overalls', 'Exiting carpenter shop', 'Getting stretcher into place', 'About to take a dart to the chest', 'Bleeding out', 'Stumbling downstairs', 'Grabbing gun', ''],
    dies: true
  },
  {
    name: 'Marcus Gibbs',
    number: 11,
    career: '',
    top: 650,
    left: 1100,
    scenes: ['III.2', 'V.3', 'V.4', 'VI.3' ],
    activity: ['Watching', 'In carpenter shop', 'Getting stretcher into place', ''],
    dies: true
  },
  {
    name: 'Christian Wolff',
    number: 14,
    career: '',
    top: 405,
    left: 760,
    scenes: ['III.2', 'V.2', 'VI.4', 'VI.7', 'VII.3', 'VII.4'],
    activity: ['Fire!', 'Holding rifle, watching cargo unload', 'Handing out guns', 'In gunner\'s store', 'Tugging on tentacle', 'Dies'],
    dies: true
  },
  {
    name: 'Olus Wiater',
    number: 15,
    career: '',
    top: 385,
    left: 700,
    scenes: ['III.2', 'V.2', 'V.4', 'VI.4', 'VI.7', 'VII.6', 'VII.7', 'VII.8', 'IX.1', 'IX.2', 'IX.3', 'IX.4'],
    activity: ['Kneeling', 'Holding gun, looking at stairs to gun deck', 'Managing foot traffic', 'Opening up Orlop deck', 'In gunner\'s store', 'Falling down stairs', 'About to catch rifle toss', '', 'Watching victim die', 'In galley next to body', 'Below deck chasing 9 with a knife', ''],
    dies: true
  },
  {
    name: 'Duncan McKay',
    number: 16,
    career: '',
    top: 210,
    left: 460,
    scenes: ['V.3', 'VI.5', 'VI.6', 'VI.7', 'VII.1', 'VII.7'],
    activity: ['Watching', 'Not sure. Hiding?', 'Not sure. Hiding?', 'Present', 'In escape boat holding something tight', 'Tossed to sea'],
    dies: false
  },
  {
    name: 'Finley Dalton',
    number: 17,
    career: '',
    top: 160,
    left: 560,
    scenes: ['III.3', 'VII.8'],
    activity: ['On ground w/stab wound to leg', ''],
    dies: true
  },
  {
    name: 'Edward Spratt',
    number: 18,
    career: 'Artist',
    top: 800,
    left: 150,
    scenes: ['III.2', 'V.3', 'V.4', 'VI.4', 'VII.2'],
    activity: ['Artist', '', 'Blocked from going downstairs', '', 'Dead'],
    dies: true
  },
  {
    name: 'Paul Moss',
    number: 29,
    career: '',
    top: 255,
    left: 360,
    scenes: ['VII.2', 'VII.8', 'IX.2'],
    activity: ['Eating or meal prep', '', 'Stabbed'],
    dies: true
  },
  {
    name: 'Roderick Anderson',
    number: '31',
    career: '',
    top: 335,
    left: 335,
    scenes: ['III.2', 'V.2', 'VII.2', 'VII.5' ],
    activity: ['Watching', 'Watching', 'Following 11 with food', ''],
    dies: false
  },
  {
    name: 'Davey James',
    number: 32,
    career: '',
    top: 580,
    left: 1170,
    scenes: ['III.2', 'VI.3', 'V.2', 'VII.2', 'IX.2', 'IX.3'],
    activity: ['Covering ears', 'Cowering', 'Watching', 'On deck with lantern', 'In boat', 'Climbing out of boat'],
    dies: false
  },
  {
    name: 'Huang Lee',
    number: 38,
    career: '',
    top: 200,
    left: 840,
    scenes: ['II.1', 'III.2', 'V.1', 'V.2', 'VI.1'],
    activity: ['Sleeping', 'Observing', 'Reacting to murder', 'Loading or Pulling cargo from boat', ''],
    dies: true
  },
  {
    name: 'Li Hong',
    number: 40,
    career: '',
    top: 200,
    left: 1060,
    scenes: ['II.1', 'III.2', 'III.3', 'IV.1'],
    activity: ['Sleeping', 'Observing', 'Helping leave/board boat', 'Speared'],
    dies: true
  },
  {
    name: 'Wei Lee',
    number: 41,
    career: '',
    top: 680,
    left: 820,
    scenes: ['II.1', 'III.2', 'V.2', 'VI.1', 'VII.2', 'VII.7', 'VII.8' ],
    activity: ['Sleeping', 'Crowd control', 'Carrying cargo across deck', 'Climbing rigging to help(?)', 'Eating', 'Struggling, object in hand', ''],
    dies: true
  },
  {
    name: 'Aleksei Toporov',
    number: 47,
    career: '',
    top: 465,
    left: 930,
    scenes: ['I.1', 'I.2', 'II.1', 'III.2', 'III.3', 'IV.1', 'IV.2', 'IV.3'],
    activity: ['', '', 'Playing cards', 'Firing squad', 'Boarding boat with treasure sack', 'Rowing, smoking pipe', 'Rowing', 'Falls out of boat'],
    dies: false
  },
  {
    name: 'Lars Linde',
    number: 49,
    career: '',
    top: 350,
    left: 1080,
    scenes: ['I.1', 'I.2', 'II.1', 'III.2', 'III.3', 'V.1', 'V.2', 'V.4', 'VI.1', 'VI.2', 'VI.3', 'VII.1'],
    activity: ['', '', 'Sleeping', 'Observing from back', 'Kneeling, looking away', 'On mast wheel', '(Un)loading cargo', 'Hauling cargo', 'Helping on deck?', 'Watching in horror', 'On floor', ''],
    dies: true
  },
  {
    name: 'John Naples',
    number: '50',
    career: '',
    top: 505,
    left: 850,
    scenes: ['III.2', 'V.1', 'V.2', 'V.3', 'V.4',],
    activity: ['Firing squad', 'Witness to murder', 'Carrying cargo', 'Lost grip, stumbling downstairs - trips on corpse', 'Victim - lost foot'],
    dies: true
  },
  {
    name: 'Henry Brennan (M)',
    number: 56,
    career: '',
    top: 550,
    left: 970,
    scenes: ['I.1', 'I.2', 'II.1', 'III.2', 'V.2', 'VI.1', 'VI.2', 'VII.2', 'VII.3', 'VII.4', 'IX.2', 'IX.3', 'IX.4', 'IX.5', 'IX.6', 'X.1', 'X.2'],
    activity: ['', '', 'Sleeping', 'Killer', 'Kneeling over corpse', 'Helping on deck?', 'Watching in horror', 'Asleep?', 'Helping with cannon', 'Dodging debris', 'Racing across deck', 'Ascending staircase', '', 'Killer', '', 'Watches first mate die', '' ],
    dies: true
  },
  {
    name: 'Patrick O\'Hagan',
    number: 58,
    career: '',
    top: 480,
    left: 740,
    scenes: ['I.1', 'I.2', 'II.1', 'III.2', 'III.3', 'IV.1', 'IV.2'],
    activity: ['', '', 'Sleeping', 'Firing squad', 'Siding with the bad guys', 'Rowing', 'Speared by monster'],
    dies: true
  },
  {
    name: 'Middle-Eastern guy',
    number: '1?',
    career: '',
    top: 170,
    left: 350,
    scenes: ['V.2', 'V.3', 'V.4', 'VI.4', 'VI.5', 'VI.6', 'VI.7'],
    activity: ['Holding lantern', 'Watching from above', 'Cradling victim', 'Spike in back', 'Crawling with spike in back', 'Crawling down port walk', ''],
    dies: true
  },
  {
    name: 'Samuel Galligan',
    number: 30,
    career: '',
    top: 265,
    left: 260,
    scenes: ['III.2', 'III.3', 'IV.1', 'IV.2', 'IV.3'],
    activity: ['Whispering to Nichols 3', 'Watching over deck activity', 'Watching', 'Watching', 'Choked? Hard to say'],
    dies: true
  },
  {
    name: 'Peter Milroy',
    number: 33,
    career: '',
    top: 235,
    left: 650,
    scenes: ['II.3', 'III.3', 'V.2', 'V.3', 'VI.4', 'VI.5', 'VI.6', 'VI.7', 'VII.5', 'VII.6' ],
    activity: ['', 'Crawling on deck', 'Watching cargo transport, talking to 9', 'Watching from above', 'Fending off beast', 'Stabbing beast', 'Putting out fire', 'Present', 'Stumbling down stairs', 'Exploded'],
    dies: true
  },
  {
    name: 'Charles Hershtik',
    number: 35,
    career: '',
    top: 215,
    left: 710,
    scenes: ['II.3', 'V.2', 'VI.4', 'VI.5'],
    activity: ['', 'Watching cargo transport',  'Throwing lantern', ''],
    dies: true
  },
  {
    name: 'Midshipman?',
    number: '9?',
    career: '',
    top: 305,
    left: 755,
    scenes: ['II.3', 'V.2', 'VI.4', 'VI.5', 'VI.6', 'VI.7', 'VII.5', 'VII.6', 'VII.7', 'IX.1', 'IX.2', 'IX.3', 'IX.4', 'IX.5', 'IX.6'],
    activity: ['', 'Talking to 7', 'Knocked away by beast', 'Watchin in fear', 'Kneeling in back', 'Present', 'Descending stairs from main deck', 'Can\'t find, probably hiding', 'Holding on', 'Ascending from Orlop deck', 'Spying on the galley', 'Chased by 12', '', 'Stabbed, Crawling', 'Dead', ],
    dies: true
  },
  {
    name: 'Chioh Tan',
    number: 25,
    career: '',
    top: 670,
    left: 700,
    scenes: [''],
    dies: false
  },
  {
    name: 'It-Beng Sia',
    number: '24',
    career: '',
    top: 800,
    left: 570,
    scenes: [''],
    dies: false
  },
  {
    name: 'Bun-Lan Lim',
    number: 23,
    career: '',
    top: 800,
    left: 700,
    scenes: [''],
    dies: false
  },
  {
    name: 'Hok-Seng Lau',
    number: '23?',
    career: '',
    top: 300,
    left: 100,
    scenes: [''],
    dies: false
  }
]

export { justice };