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
        title: 'L\'asperge',
        base: 'Crème d\'asperge 🥬',
        beforeCooking: 'Guanciale 🥩, asperges 🥬',
        afterCooking: '',
        months: [Month.AVRIL, Month.MAI]
    },
    {
        image: 'assets/aubergine.jpg',
        title: 'L\'aubergine',
        base: 'Sauce tomate 🍅',
        beforeCooking: 'Aubergine 🍆, mozarella 🧀',
        afterCooking: 'Parmesan 🧀, basilic ☘️',
        months: [Month.MAI, Month.JUIN, Month.JUILLET, Month.AOUT, Month.SEPTEMBRE]
    },
    {
        image: 'assets/burrata.jpg',
        title: 'La truffée',
        base: 'Sauce tomate 🍅',
        beforeCooking: 'Pécorino truffé 🧀',
        afterCooking: 'Burrata truffée 🧀',
        months: undefined
    },
    {
        image: 'assets/choux_rouge.jpg',
        title: 'L\'automnale',
        base: 'Crème de choux rouge 🍁',
        beforeCooking: 'Pommes 🍏, Guanciale 🥩',
        afterCooking: '',
        months: undefined
    },
    {
        image: 'assets/courgette.jpg',
        title: 'La courgette',
        base: 'Sauce tomate 🍅',
        beforeCooking: 'Courgettes 🥒, mozarella 🧀, tomates cerises 🍅',
        afterCooking: 'Parmesan 🧀, basilic ☘️',
        months: undefined
    },
    {
        image: 'assets/reine_truffe.jpeg',
        title: 'La reine de truffe',
        base: 'Sauce tomate 🍅',
        beforeCooking: 'Champignons 🍄‍🟫, mozarella 🧀, jambon truffé 🥩',
        afterCooking: '',
        months: undefined
    },
    {
        image: 'assets/reine.jpg',
        title: 'La reine',
        base: 'Sauce tomate 🍅',
        beforeCooking: 'Champignons 🍄‍🟫, mozarella 🧀, jambon 🥩',
        afterCooking: '',
        months: undefined
    },
    {
        image: 'assets/4_fromages.jpg',
        title: 'La 4 fromages',
        base: 'Sauce tomate 🍅',
        beforeCooking: 'Pécorino truffé 🧀, mozarella 🧀, parmesan 🧀, chèvre 🧀',
        afterCooking: '',
        months: undefined
    },
    {
        image: 'assets/chevre_miel_figue.jpeg',
        title: 'La chèvre miel figues',
        base: 'Crème 🤍',
        beforeCooking: 'Chèvre 🧀, romarin 🌿, figues 🌰',
        afterCooking: 'miel 🍯',
        months: [Month.JUIN, Month.JUILLET, Month.AOUT]
    },
    {
        image: 'assets/margherita.jpg',
        title: 'La Margherita',
        base: 'Sauce tomate 🍅',
        beforeCooking: 'mozarella 🧀, basilic ☘️',
        afterCooking: 'Parmesan 🧀, basilic ☘️',
        months: [Month.JUIN, Month.JUILLET, Month.AOUT]
    },
    {
        image: 'assets/poivron.jpeg',
        title: 'La Poivronnée',
        base: 'Crème de poivron 🫑',
        beforeCooking: 'Chèvre 🧀',
        afterCooking: 'Parmesan 🧀',
        months: [Month.JUIN, Month.JUILLET, Month.AOUT]
    },
];