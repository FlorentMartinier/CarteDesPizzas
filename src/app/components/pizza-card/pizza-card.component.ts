import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

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

  constructor(private el: ElementRef) {}

  visible = false;
  loaded = false;
  private observer?: IntersectionObserver;

  flipped: boolean = false;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.visible = true;
          this.observer?.disconnect(); // On arrête d’observer après le premier affichage
        }
      });
    });
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  emitFlip() {
    this.cardFlipped.emit(this);
  }

  flip() {
    this.flipped = !this.flipped;
  }

  resetFlip() {
    this.flipped = false;
  }

  onImageLoad() {
    this.loaded = true;
  }
}
