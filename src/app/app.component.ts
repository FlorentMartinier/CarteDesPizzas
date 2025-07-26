import { Component } from '@angular/core';

interface Pizza {
  image: string;
  description: string;
  months: string[] | undefined;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent {
  months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];
  
  selectedMonth: string = this.months[new Date().getMonth()];

  pizzas: Pizza[] = [
    {
      image: 'assets/asperge.jpg',
      description: 'Crème d\'asperge, guanciale, asperges',
      months: ['Avril', 'Mai']
    },
    {
      image: 'assets/aubergine.jpg',
      description: 'Sauce tomate, aubergine, mozarella, parmesan, basilic',
      months: undefined
    },
    {
      image: 'assets/burrata.jpg',
      description: 'Sauce tomate, pécorino truffé, burrata truffée',
      months: undefined
    },
    {
      image: 'assets/choux_rouge.jpg',
      description: 'Crème de choux rouge, pommes, guanciale',
      months: undefined
    },
    {
      image: 'assets/courgette.jpg',
      description: 'Sauce tomate, courgette, mozarella',
      months: undefined
    },
    {
      image: 'assets/reine.jpeg',
      description: 'Sauce tomate, mozarella, champignons, jambon truffé',
      months: undefined
    },
  ];

  get filteredPizzas() {
    return this.pizzas.filter(p => p.months === undefined || p.months.includes(this.selectedMonth));
  }
}
