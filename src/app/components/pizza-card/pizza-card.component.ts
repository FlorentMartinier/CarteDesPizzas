import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.css'],
  standalone: false
})
export class PizzaCardComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() base!: string;
  @Input() beforeCooking!: string;
  @Input() afterCooking!: string;
  @Output() cardFlipped = new EventEmitter<PizzaCardComponent>();


  flipped: boolean = false;

  emitFlip() {
    this.cardFlipped.emit(this);
  }

  flip() {
    this.flipped = !this.flipped;
  }

  resetFlip() {
    this.flipped = false;
  }
}
