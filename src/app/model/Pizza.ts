import { Month } from './Month';

export interface Pizza {
  image: string;
  months: Month[] | undefined;
  title: string;
  base: string;
  beforeCooking: string;
  afterCooking: string;
};

export const pizzas: Pizza[] = [
    {
        image: 'assets/saucisse.jpg',
        title: 'Are no pain, are no gain',
        base: 'Sauce tomate 🍅',
        beforeCooking: 'Mozarella 🧀, Saucisse crabourg 🥩',
        afterCooking: '',
        months: undefined
    },
    {
        image: 'assets/cepes_chevre.jpg',
        title: 'Incèpechèvre',
        base: 'Sauce tomate 🍅',
        beforeCooking: 'Cèpes (en boite) 🍄‍🟫, Chèvre 🧀',
        afterCooking: 'Persillade 🌿🧄',
        months: undefined
    },
    {
        image: 'assets/ail.jpg',
        title: 'Ail Hard',
        base: 'Crème d\'ail 🧄',
        beforeCooking: 'Mozarella 🧀',
        afterCooking: 'Persillade 🌿🧄',
        months: undefined
    },
    {
        image: 'assets/mortadelle_burrata.jpg',
        title: 'The Truffeman Show',
        base: 'Sauce tomate 🍅',
        beforeCooking: 'Pécorino truffé 🧀',
        afterCooking: 'Mortadelle trufée 🥩, Burrata 🧀, Pistaches 🥜',
        months: undefined
    },
    {
        image: 'assets/asperge.jpg',
        title: 'Les Lignes Vertes',
        base: 'Crème d\'asperge 🥬',
        beforeCooking: 'Guanciale 🥩, Asperges 🥬',
        afterCooking: '',
        months: [Month.AVRIL, Month.MAI]
    },
    {
        image: 'assets/aubergine.jpg',
        title: 'Aubergine mécanique',
        base: 'Sauce tomate 🍅',
        beforeCooking: 'Aubergine 🍆, Mozarella 🧀',
        afterCooking: 'Parmesan 🧀, Basilic ☘️',
        months: [Month.MAI, Month.JUIN, Month.JUILLET, Month.AOUT, Month.SEPTEMBRE]
    },
    {
        image: 'assets/burrata.jpg',
        title: 'Burrat',
        base: 'Sauce tomate 🍅',
        beforeCooking: 'Pécorino truffé 🧀',
        afterCooking: 'Burrata truffée 🧀',
        months: undefined
    },
    {
        image: 'assets/choux_rouge.jpg',
        title: 'The Shouning',
        base: 'Crème de choux rouge 🍁',
        beforeCooking: 'Pommes 🍏, Guanciale 🥩',
        afterCooking: '',
        months: undefined
    },
    {
        image: 'assets/courgette.jpg',
        title: 'Le Cinquième Ingrédient',
        base: 'Sauce tomate 🍅',
        beforeCooking: 'Courgettes 🥒, Mozarella 🧀, Tomates cerises 🍅',
        afterCooking: 'Parmesan 🧀, Basilic ☘️',
        months: undefined
    },
    {
        image: 'assets/reine_truffe.jpeg',
        title: 'La Reine Des Truffes',
        base: 'Sauce tomate 🍅',
        beforeCooking: 'Champignons 🍄‍🟫, Mozarella 🧀, Jambon truffé 🥩',
        afterCooking: '',
        months: undefined
    },
    {
        image: 'assets/reine.jpg',
        title: 'Jam Bond',
        base: 'Sauce tomate 🍅',
        beforeCooking: 'Champignons 🍄‍🟫, Mozarella 🧀, Jambon 🥩',
        afterCooking: '',
        months: undefined
    },
    {
        image: 'assets/4_fromages.jpg',
        title: 'Les 4 Fantastiques',
        base: 'Sauce tomate 🍅',
        beforeCooking: 'Pécorino truffé 🧀, Mozarella 🧀, Parmesan 🧀, Chèvre 🧀',
        afterCooking: '',
        months: undefined
    },
    {
        image: 'assets/stracciatella_truffe.jpg',
        title: 'Jambon, La Truffe et le crémeux',
        base: 'Sauce tomate 🍅',
        beforeCooking: 'Mozarella truffée 🧀',
        afterCooking: 'Jambon truffé 🥩, Stracciatella truffée 🐄',
        months: undefined
    },
    {
        image: 'assets/chevre_miel_figue.jpeg',
        title: 'Figue Club',
        base: 'Crème 🐄',
        beforeCooking: 'Chèvre 🧀, Tomarin 🌿, Figues 🌰',
        afterCooking: 'Miel 🍯',
        months: [Month.JUIN, Month.JUILLET, Month.AOUT]
    },
    {
        image: 'assets/margherita.jpg',
        title: 'Mozarella La Land',
        base: 'Sauce tomate 🍅',
        beforeCooking: 'Mozarella 🧀, Basilic ☘️',
        afterCooking: 'Parmesan 🧀, Basilic ☘️',
        months: undefined
    },
    {
        image: 'assets/poivron.jpeg',
        title: 'Poivron Pulpe Fiction',
        base: 'Crème de poivron 🌶️',
        beforeCooking: 'Chèvre 🧀',
        afterCooking: 'Parmesan 🧀',
        months: [Month.MAI, Month.JUIN, Month.JUILLET, Month.AOUT, Month.SEPTEMBRE]
    },
    {
        image: 'assets/bleue.jpg',
        title: 'La Grande Bleue',
        base: 'Sauce tomate 🍅',
        beforeCooking: 'Bleu d\'Auvergne 🧀',
        afterCooking: '',
        months: undefined
    },
    {
        image: 'assets/insolite.jpg',
        title: 'Retour vers les fruits mûrs',
        base: 'Crème 🐄',
        beforeCooking: 'Pécorino truffé 🧀, Figues 🌰, Mirabelles 🟡',
        afterCooking: '',
        months: [Month.JUIN, Month.JUILLET, Month.AOUT]
    },
    {
        image: 'assets/chevre_miel.jpg',
        title: 'Le Silence des Chèvres',
        base: 'Crème 🐄',
        beforeCooking: 'Chèvre 🧀',
        afterCooking: 'Miel 🍯',
        months: undefined
    },
    {
        image: 'assets/fourme_roquette.jpg',
        title: 'Fourme metal roquette',
        base: 'Sauce tomate 🍅',
        beforeCooking: 'Fourme 🧀, Noix 🫘',
        afterCooking: 'Roquette 🥬, Noix 🫘',
        months: undefined
    },
    {
        image: 'assets/lard_bacon.jpg',
        title: 'Jurassic Pork',
        base: 'Sauce tomate 🍅',
        beforeCooking: 'Mozarella 🧀, Lard 🥩, Bacon 🥩',
        afterCooking: '',
        months: undefined
    },
    {
        image: 'assets/mortadelle.jpg',
        title: 'La Mortadelle aux Trousses',
        base: 'Crème 🐄',
        beforeCooking: 'Mozarella 🧀, Pistaches 🥜',
        afterCooking: 'Mortadelle pistachée 🥩, Pistaches 🥜',
        months: undefined
    },
    {
        image: 'assets/chorizo.jpg',
        title: 'The Greatest Chorizo Man',
        base: 'Crème de poivron 🌶️',
        beforeCooking: 'Oignon 🧅, Chorizo 🥩, Parmesan 🧀, Piment 🌶️',
        afterCooking: '',
        months: [Month.MAI, Month.JUIN, Month.JUILLET, Month.AOUT, Month.SEPTEMBRE]
    },
    {
        image: 'assets/poulet_curry.jpg',
        title: 'Indiana Jaune',
        base: 'Crème de coco/curry 🥥🌶️',
        beforeCooking: 'Poulet 🥩, Oignon 🧅, Poivrons 🌶️, Chèvre 🧀',
        afterCooking: '',
        months: undefined
    },
    {
        image: 'assets/steak_lardons.jpg',
        title: 'Inter Steak Lard',
        base: 'Sauce tomate 🍅',
        beforeCooking: 'Mozzarella 🧀, Steak Haché 🥩, Lardons 🥩',
        afterCooking: '',
        months: undefined
    },
    {
        image: 'assets/butternut.jpg',
        title: 'Harry Potternut',
        base: 'Crème de butternut 🎃',
        beforeCooking: 'Fourme 🧀',
        afterCooking: 'Noix 🫘',
        months: [Month.SEPTEMBRE, Month.OCTOBRE, Month.NOVEMBRE, Month.DECEMBRE, Month.JANVIER, Month.FEVRIER]
    },
    {
        image: 'assets/mortadelle_tomate.jpg',
        title: 'La Mortadelle Sans La Peau',
        base: 'Sauce tomate 🍅',
        beforeCooking: 'Mozarella 🧀, Pistaches 🥜',
        afterCooking: 'Mortadelle pistachée 🥩, Pistaches 🥜',
        months: undefined
    },
    {
        image: 'assets/raclette.jpg',
        title: 'La Raclette des singes',
        base: 'Crème 🐄',
        beforeCooking: 'Pommes de terres 🥔, Raclette 🧀',
        afterCooking: 'Poivre 🧂, Bresaola 🥩',
        months: undefined
    },
];