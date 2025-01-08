const ADJECTIVES = [
    'animated',
    'automatic',
    'bookish',
    'bug-free',
    'cautious',
    'congenial',
    'crispy',
    'cuddly',
    'curly',
    'didactic',
    'effective',
    'expert',
    'fantastic',
    'fictional',
    'fluffy',
    'friendly',
    'fuzzy',
    'glorious',
    'glowing',
    'humble',
    'ideal',
    'improved',
    'jubilant',
    'laughing',
    'legendary',
    'literate',
    'miniature',
    'musical',
    'obscure',
    'ominous',
    'opulent',
    'orange',
    'organic',
    'potential',
    'probable',
    'psychic',
    'redesigned',
    'refactored',
    'reimagined',
    'scaling',
    'shiny',
    'silver',
    'solid',
    'special',
    'studious',
    'stunning',
    'sturdy',
    'super',
    'super-duper',
    'supreme',
    'symmetrical',
    'turbo',
    'ubiquitous',
    'upgraded',
    'urban',
    'verbose',
    'vigilant',
    'zany'
];


const NOUNS = [
    'acorn',
    'adventure',
    'barnacle',
    'bassoon',
    'broccoli',
    'capybara',
    'carnival',
    'chainsaw',
    'cod',
    'computing-machine',
    'couscous',
    'disco',
    'dollop',
    'doodle',
    'engine',
    'enigma',
    'eureka',
    'fiesta',
    'fishstick',
    'fortnight',
    'funicular',
    'garbanzo',
    'giggle',
    'goggles',
    'goldfish',
    'guacamole',
    'guide',
    'halibut',
    'happiness',
    'invention',
    'journey',
    'lamp',
    'meme',
    'memory',
    'orbit',
    'palm-tree',
    'pancake',
    'parakeet',
    'potato',
    'robot',
    'rotary-phone',
    'sniffle',
    'spoon',
    'spork',
    'succotash',
    'system',
    'telegram',
    'train',
    'tribble',
    'trout',
    'umbrella',
    'waddle',
    'waffle',
    'winner',
    'xylophone',
    'yodel',
    'zebra'
];

export function generateName(maxLength: number = 48): string {
    const prefix = Math.random() < 0.25 ? 'octo-' : '';

    let name: string;
    let counter = 0;
    do {
        name = `${adjective()}-${prefix}${noun()}`;

        if (counter++ > 100) {
            throw new Error('Unable to generate a name within the length limit.');
        }
    } while (name.length > maxLength);

    return name;
}

function noun() {
    return NOUNS[Math.floor(Math.random() * NOUNS.length)]
}

function adjective() {
    return ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)]
}