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
        image: 'assets/asperge.jpg',
        title: 'Aspergeception',
        base: 'Crème d\'asperge 🥬',
        beforeCooking: 'Guanciale 🥩, asperges 🥬',
        afterCooking: '',
        months: [Month.AVRIL, Month.MAI]
    },
    {
        image: 'assets/aubergine.jpg',
        title: 'À l\'aubergine du 6ᵉ jour',
        base: 'Sauce tomate 🍅',
        beforeCooking: 'Aubergine 🍆, mozarella 🧀',
        afterCooking: 'Parmesan 🧀, basilic ☘️',
        months: [Month.MAI, Month.JUIN, Month.JUILLET, Month.AOUT, Month.SEPTEMBRE]
    },
    {
        image: 'assets/burrata.jpg',
        title: 'The Truffeman Show',
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
        beforeCooking: 'Courgettes 🥒, mozarella 🧀, tomates cerises 🍅',
        afterCooking: 'Parmesan 🧀, basilic ☘️',
        months: undefined
    },
    {
        image: 'assets/reine_truffe.jpeg',
        title: 'La Reine Des Truffes',
        base: 'Sauce tomate 🍅',
        beforeCooking: 'Champignons 🍄‍🟫, mozarella 🧀, jambon truffé 🥩',
        afterCooking: '',
        months: undefined
    },
    {
        image: 'assets/reine.jpg',
        title: 'Jam Bond',
        base: 'Sauce tomate 🍅',
        beforeCooking: 'Champignons 🍄‍🟫, mozarella 🧀, jambon 🥩',
        afterCooking: '',
        months: undefined
    },
    {
        image: 'assets/4_fromages.jpg',
        title: 'Les 4 Fantastiques',
        base: 'Sauce tomate 🍅',
        beforeCooking: 'Pécorino truffé 🧀, mozarella 🧀, parmesan 🧀, chèvre 🧀',
        afterCooking: '',
        months: undefined
    },
    {
        image: 'assets/chevre_miel_figue.jpeg',
        title: 'Le Silence des Chèvres',
        base: 'Crème 🐄',
        beforeCooking: 'Chèvre 🧀, romarin 🌿, figues 🌰',
        afterCooking: 'miel 🍯',
        months: [Month.JUIN, Month.JUILLET, Month.AOUT]
    },
    {
        image: 'assets/margherita.jpg',
        title: 'Margherita La Land',
        base: 'Sauce tomate 🍅',
        beforeCooking: 'mozarella 🧀, basilic ☘️',
        afterCooking: 'Parmesan 🧀, basilic ☘️',
        months: [Month.JUIN, Month.JUILLET, Month.AOUT]
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
        image: 'assets/insolite.jpg',
        title: 'Mirabelle Mécanique',
        base: 'Crème 🐄',
        beforeCooking: 'Pécorino truffé 🧀, figues 🌰, mirabelles 🟡',
        afterCooking: '',
        months: [Month.JUIN, Month.JUILLET, Month.AOUT]
    },
];