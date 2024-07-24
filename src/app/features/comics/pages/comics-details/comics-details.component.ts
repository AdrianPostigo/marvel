import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicsMarvelApiService } from '../../../../shared/services/marvel/comics/comics-marvel-api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ISeriesResponse } from '../../../../shared/models/interfaces/series/iseries-response';

@Component({
  selector: 'app-comics-details',
  templateUrl: './comics-details.component.html',
  styleUrl: './comics-details.component.scss'
})
export class ComicsDetailsComponent implements OnInit{

  private activateRoute = inject(ActivatedRoute);

  id: string = "";
  detailsComic!: ISeriesResponse;
  comicsService = inject(ComicsMarvelApiService);

  detailsForm = new FormGroup({
    name: new FormControl('', []),
    description: new FormControl('', []),
    date: new FormControl('', []),
  });

  ngOnInit(): void {
    this.getParams();
  }

  getParams(){
    this.activateRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.getComicDetailsById(this.id);
    });
  }

  getComicDetailsById(id: string){
    const req = this.comicsService.getComicById(id).subscribe(response => {
      this.detailsComic = response;
      this.setValuesInsideForm();
      console.log(this.detailsComic.data.results)
    });
  }

  setValuesInsideForm(){
    this.detailsForm.patchValue({
      name: this.detailsComic.data.results[0].title,
      description: this.detailsComic.data.results[0].description,
      date: this.detailsComic.data.results[0].dates[0].date
    })
  }
}
