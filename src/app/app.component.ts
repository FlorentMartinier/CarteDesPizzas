import { Component } from '@angular/core';
import { getCurrentMonth, Month } from './model/Month';

interface Pizza {
  image: string;
  months: Month[] | undefined;
  title: string;
  base: string;
  beforeCooking: string;
  afterCooking: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {
  selectedMonth: Month = getCurrentMonth();
  months = Object.values(Month);
  baseOptions: string[] = [];
  selectedBase: string | null = null;

  pizzas: Pizza[] = [
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
      image: 'assets/reine.jpeg',
      title: 'La reine',
      base: 'Sauce tomate 🍅',
      beforeCooking: 'Champignons 🍄‍🟫, mozarella 🧀, jambon truffé 🥩',
      afterCooking: '',
      months: undefined
    },
  ];

  get filteredPizzas(): Pizza[] {
  return this.pizzas.filter(pizza => {
    const matchBase = this.selectedBase ? pizza.base === this.selectedBase : true;
    const matchMonth = pizza.months === undefined || pizza.months.includes(this.selectedMonth);

    return matchBase && matchMonth;
  });
}

  ngOnInit(): void {
    this.baseOptions = Array.from(
      new Set(this.pizzas.map(pizza => pizza.base))
    );
  }
}
