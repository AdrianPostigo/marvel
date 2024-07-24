import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-spinner-loader',
  templateUrl: './spinner-loader.component.html',
  styleUrl: './spinner-loader.component.scss'
})
export class SpinnerLoaderComponent implements OnInit{

  @ViewChildren('character') characters!: QueryList<ElementRef>;
  private intervalId: number | undefined;

  ngOnInit(): void {
    this.intervalId = window.setInterval(() => {
      const elements = this.characters.toArray();
      const outElement = elements.find(el => el.nativeElement.classList.contains('out'));
      if (outElement) {
        this.toggleClass(outElement.nativeElement, 'out', 'remove');
        const nextElement = this.getNextSibling(outElement.nativeElement, elements) || elements[0].nativeElement;
        this.toggleClass(nextElement, 'out', 'add');
        this.setEnterClass(elements);
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private getNextSibling(element: HTMLElement, elements: ElementRef[]): HTMLElement | null {
    const index = elements.findIndex(el => el.nativeElement === element);
    return index !== -1 && index < elements.length - 1 ? elements[index + 1].nativeElement : null;
  }

  private setEnterClass(elements: ElementRef[]): void {
    const enterElement = elements.find(el => el.nativeElement.classList.contains('enter'));
    if (enterElement) {
      this.toggleClass(enterElement.nativeElement, 'enter', 'remove');
      const nextElement = this.getNextSibling(enterElement.nativeElement, elements) || elements[0].nativeElement;
      this.toggleClass(nextElement, 'enter', 'add');
    }
  }

  private toggleClass(element: HTMLElement, className: string, action: 'add' | 'remove'): void {
    if (action === 'add') {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }

}
