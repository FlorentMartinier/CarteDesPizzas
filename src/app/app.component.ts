import { Component } from '@angular/core';
import { getCurrentMonth, Month } from './model/Month';

interface Pizza {
  image: string;
  description: string;
  months: Month[] | undefined;
  title: string;
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

  pizzas: Pizza[] = [
    {
      image: 'assets/asperge.jpg',
      description: 'Crème d\'asperge, guanciale, asperges',
      title: 'L\'asperge',
      months: [Month.AVRIL, Month.MAI]
    },
    {
      image: 'assets/aubergine.jpg',
      description: 'Sauce tomate, aubergine, mozarella, parmesan, basilic',
      title: 'L\'aubergine',
      months: [Month.MAI, Month.JUIN, Month.JUILLET, Month.AOUT, Month.SEPTEMBRE]
    },
    {
      image: 'assets/burrata.jpg',
      description: 'Sauce tomate, pécorino truffé, burrata truffée',
      title: 'La truffée',
      months: undefined
    },
    {
      image: 'assets/choux_rouge.jpg',
      description: 'Crème de choux rouge, pommes, guanciale',
      title: 'L\'automnale',
      months: undefined
    },
    {
      image: 'assets/courgette.jpg',
      description: 'Sauce tomate, courgette, mozarella',
      title: 'La courgette',
      months: undefined
    },
    {
      image: 'assets/reine.jpeg',
      description: 'Sauce tomate, mozarella, champignons, jambon truffé',
      title: 'La reine',
      months: undefined
    },
  ];

  get filteredPizzas() {
    return this.pizzas.filter(p => p.months === undefined || p.months.includes(this.selectedMonth));
  }
}
