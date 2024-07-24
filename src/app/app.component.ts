import { AfterViewChecked, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { SpinnerService } from './core/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit ,AfterViewChecked{
  title = 'marvel';
  private cdRef = inject(ChangeDetectorRef);
  spinnerService = inject(SpinnerService);

  isLoading: boolean = false;

  ngOnInit(): void {
    this.isLoading = this.spinnerService.isLoading;
  }

  ngAfterViewChecked(): void {
    if (this.isLoading !== this.spinnerService.isLoading) {
      this.isLoading = this.spinnerService.isLoading;
      this.cdRef.detectChanges();
    }
  }
}
