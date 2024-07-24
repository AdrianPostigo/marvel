import { Component, HostListener, inject, OnInit } from '@angular/core';
import { MarvelApiService } from '../../../../shared/services/marvel/series/marvel-api.service';
import { ISeriesResponse } from '../../../../shared/models/interfaces/series/iseries-response';
import { LocalStorageService } from '../../../../shared/utils/storage/local-storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{

  private marvelService = inject(MarvelApiService);
  private localStorage = inject(LocalStorageService);
  private activateRoute = inject(ActivatedRoute);

  reqResult!: ISeriesResponse;
  typeParam: string = "";
  id: string = "";
  offset: number = 0;


  ngOnInit(): void {
    this.getParams();
  }

  getParams(){
    this.activateRoute.params.subscribe((params) => {
      this.typeParam = params['type'];
      this.id = params['all'];
      this.checkStorageForInfo(this.typeParam);
    });
  }

  checkStorageForInfo(type: string){
    switch(type){
      case 'series': {
        if (this.offset === 0) {
          const result = this.localStorage.getItem<ISeriesResponse>('seriesArray');
          if (result) this.reqResult = result;
          else this.getSeries();
        }else this.getSeries();

        break;
      }
      case 'comics': {
        this.getComicsBySerieId();

        break;
      }
    }
  }

  getSeries(){
    this.marvelService.getSeries(this.offset).subscribe(response => {
      if (this.offset === 0) {
        this.reqResult = response;
        this.localStorage.setItem('seriesArray', this.reqResult)
      } else {
        response.data.results.forEach(serie => this.reqResult.data.results.push(serie))
        console.log(this.reqResult)
      }
    });
  }

  getComicsBySerieId(){
    this.marvelService.getSeriesComics(this.id).subscribe(response => {
      this.reqResult = response;
      console.log(this.reqResult)
    });
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    console.log('llego aqui', pos, max)
    if(pos >= max )   {
      console.log('toco bottom') 
      this.offset += 20;
      this.getSeries();
      console.log('window scroll',this.reqResult)
    }
  }

  // pagination(position: string){
  //   console.log(position)
  //   if (position === 'next') {
  //     this.offset += 10;
  //     this.marvelService.getSeries(this.offset).subscribe(response => {
  //         this.reqResult = response;
  //         // this.localStorage.setItem('seriesArray', this.reqResult);
  //     });
  //   }else{
  //     this.offset >= 0 ? this.offset = 0 : this.offset -= 10
  //     this.marvelService.getSeries(this.offset).subscribe(response => {
  //         this.reqResult = response;
  //         // this.localStorage.setItem('seriesArray', this.reqResult);
  //     });
  //   }
  // }

}
