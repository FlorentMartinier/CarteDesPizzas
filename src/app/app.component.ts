import { Component } from '@angular/core';
import { getCurrentMonth, Month } from './model/Month';
import { Pizza, pizzas } from './model/Pizza';
import { PizzaCardComponent } from './components/pizza-card/pizza-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false
})
export class AppComponent {
  selectedMonth: Month = getCurrentMonth();
  months = Object.values(Month);
  baseOptions: string[] = [];
  selectedBase: string | null = null;
  openedBaseIndices = new Set<number>();
  flippedCard?: PizzaCardComponent;

  getFilteredPizzas(base: string | undefined): Pizza[] {
    const filteredPizzas = pizzas.filter(pizza => {
      const matchSelectedBase = this.selectedBase ? pizza.base === this.selectedBase : true;
      const matchBase = base === undefined || pizza.base === base;
      const matchMonth = pizza.months === undefined || pizza.months.includes(this.selectedMonth);

      return matchSelectedBase && matchBase && matchMonth;
    })

    // Tri par base, et par fréquence de base (les plus nombreuses apparaissent en premier)
    const counts = filteredPizzas.reduce<Record<string, number>>((acc, pizza) => {
      acc[pizza.base] = (acc[pizza.base] || 0) + 1;
      return acc;
    }, {});

    return filteredPizzas.sort((pizza1, pizza2) => {
      const diff = counts[pizza2.base] - counts[pizza1.base];
      return diff !== 0 
        ? diff 
        : pizza2.base.localeCompare(pizza1.base);
    });
  }

  onSelectedMonthChange(): void {
    this.selectedBase = null;
    this.updateBases()
  }

  ngOnInit(): void {
    this.updateBases();
    this.baseOptions.forEach((_, index) => this.openedBaseIndices.add(index));
  }

  updateBases(): void {
    const filteredPizzas = this.getFilteredPizzas(undefined);
    const uniqueBases = new Set(filteredPizzas.map(pizza => pizza.base));
    this.baseOptions = Array.from(uniqueBases);
  }

  handleFlip(card: PizzaCardComponent) {
    if (this.flippedCard && this.flippedCard !== card) {
      this.flippedCard.resetFlip();
    }
    card.flip();
    this.flippedCard = card;
  }
}
