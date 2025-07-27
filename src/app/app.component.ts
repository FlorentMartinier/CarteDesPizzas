import { Component } from '@angular/core';

interface Pizza {
  image: string;
  description: string;
  months: string[] | undefined;
  title: string;
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
      title: 'L\'asperge',
      months: ['Avril', 'Mai']
    },
    {
      image: 'assets/aubergine.jpg',
      description: 'Sauce tomate, aubergine, mozarella, parmesan, basilic',
      title: 'L\'aubergine',
      months: ['Mai', 'Juin', 'Juillet', 'Août', 'Septembre']
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
