import { Component } from '@angular/core';
import { getCurrentMonth, Month } from './model/Month';
import { Pizza, pizzas } from './model/Pizza';

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

  getFilteredPizzas(base: string | undefined): Pizza[] {
    return pizzas.filter(pizza => {
      const matchSelectedBase = this.selectedBase ? pizza.base === this.selectedBase : true;
      const matchBase = base === undefined || pizza.base === base;
      const matchMonth = pizza.months === undefined || pizza.months.includes(this.selectedMonth);

      return matchSelectedBase && matchBase && matchMonth;
    }).sort((pizza1, pizza2) => pizza2.base.localeCompare(pizza1.base));
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
}
