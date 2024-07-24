import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit{

  @Input() data: any;
  router = inject(Router);
  private activateRoute = inject(ActivatedRoute);

  id: string = "";
  isAll: boolean = true;

  ngOnInit(): void {
    this.getParams();
  }

  getParams(){
    this.activateRoute.params.subscribe((params) => {
      this.id = params['all'];
      this.id === 'all' ? this.isAll = true : this.isAll = false;
    });
  }

  goTo(){
    this.isAll ? this.router.navigate(['/dashboard', 'comics', this.data.id]) : this.router.navigate(['/details', this.id])
  }

}