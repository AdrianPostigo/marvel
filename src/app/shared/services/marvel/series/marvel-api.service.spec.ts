import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule, 
  HttpTestingController} from '@angular/common/http/testing'

import { MarvelApiService } from './marvel-api.service';
import { environment } from '../../../../../environments/environment';
import { HttpErrorResponse } from '@angular/common/http';

describe('MarvelApiService', () => {
  let service: MarvelApiService;
  let httpCtrl: HttpTestingController;
  let baseUrl: string = environment.baseUrl;

  const reqGuard: boolean = true;

  const reqSeries = {
    "code": 200,
    "status": "Ok",
    "copyright": "© 2024 MARVEL",
    "attributionText": "Data provided by Marvel. © 2024 MARVEL",
    "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2024 MARVEL</a>",
    "etag": "bbd98fbb1fa103d17a96d9a265b276e171c99b0b",
    "data": {
        "offset": 0,
        "limit": 2,
        "total": 14986,
        "count": 2,
        "results": [
            {
                "id": 31445,
                "title": " Fantastic Four by Dan Slott Vol. 1 (2021)",
                "description": null,
                "resourceURI": "http://gateway.marvel.com/v1/public/series/31445",
                "urls": [
                    {
                        "type": "detail",
                        "url": "http://marvel.com/comics/series/31445/_fantastic_four_by_dan_slott_vol_1_2021?utm_campaign=apiRef&utm_source=e59680f5fdc9f1a85be64ce8a6628768"
                    }
                ],
                "startYear": 2021,
                "endYear": 2021,
                "rating": "",
                "type": "collection",
                "modified": "2020-07-29T09:04:18-0400",
                "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                    "extension": "jpg"
                },
                "creators": {
                    "available": 1,
                    "collectionURI": "http://gateway.marvel.com/v1/public/series/31445/creators",
                    "items": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                            "name": "Jeff Youngquist",
                            "role": "editor"
                        }
                    ],
                    "returned": 1
                },
                "characters": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/series/31445/characters",
                    "items": [],
                    "returned": 0
                },
                "stories": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/series/31445/stories",
                    "items": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/205070",
                            "name": "cover from FANTASTIC FOUR BY DAN SLOTT VOL. 1 HC (2021) #1",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/205071",
                            "name": "story from FANTASTIC FOUR BY DAN SLOTT VOL. 1 HC (2021) #1",
                            "type": "interiorStory"
                        }
                    ],
                    "returned": 2
                },
                "comics": {
                    "available": 1,
                    "collectionURI": "http://gateway.marvel.com/v1/public/series/31445/comics",
                    "items": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/91992",
                            "name": " Fantastic Four by Dan Slott Vol. 1 (Trade Paperback)"
                        }
                    ],
                    "returned": 1
                },
                "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/series/31445/events",
                    "items": [],
                    "returned": 0
                },
                "next": null,
                "previous": null
            },
            {
                "id": 26024,
                "title": " Superior Spider-Man Vol. 2: Otto-matic (2019)",
                "description": null,
                "resourceURI": "http://gateway.marvel.com/v1/public/series/26024",
                "urls": [
                    {
                        "type": "detail",
                        "url": "http://marvel.com/comics/series/26024/_superior_spider-man_vol_2_otto-matic_2019?utm_campaign=apiRef&utm_source=e59680f5fdc9f1a85be64ce8a6628768"
                    }
                ],
                "startYear": 2019,
                "endYear": 2019,
                "rating": "",
                "type": "collection",
                "modified": "2019-12-13T16:23:45-0500",
                "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                    "extension": "jpg"
                },
                "creators": {
                    "available": 4,
                    "collectionURI": "http://gateway.marvel.com/v1/public/series/26024/creators",
                    "items": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/creators/11765",
                            "name": "Christos Gage",
                            "role": "writer"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/creators/942",
                            "name": "Mike Hawthorne",
                            "role": "penciller (cover)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/creators/437",
                            "name": "Lan Medina",
                            "role": "penciller"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                            "name": "Jeff Youngquist",
                            "role": "editor"
                        }
                    ],
                    "returned": 4
                },
                "characters": {
                    "available": 1,
                    "collectionURI": "http://gateway.marvel.com/v1/public/series/26024/characters",
                    "items": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                            "name": "Spider-Man (Peter Parker)"
                        }
                    ],
                    "returned": 1
                },
                "stories": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/series/26024/stories",
                    "items": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/158776",
                            "name": "cover from SUPERIOR SPIDER-MAN VOL. 2 TPB (2020) #2",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/158777",
                            "name": "story from SUPERIOR SPIDER-MAN VOL. 2 TPB (2020) #2",
                            "type": "interiorStory"
                        }
                    ],
                    "returned": 2
                },
                "comics": {
                    "available": 1,
                    "collectionURI": "http://gateway.marvel.com/v1/public/series/26024/comics",
                    "items": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/71400",
                            "name": " Superior Spider-Man Vol. 2: Otto-matic (Trade Paperback)"
                        }
                    ],
                    "returned": 1
                },
                "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/series/26024/events",
                    "items": [],
                    "returned": 0
                },
                "next": null,
                "previous": null
            }
        ]
    }
}

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MarvelApiService);
    httpCtrl = TestBed.inject(HttpTestingController);
  });
  //------------------------------checkRequestSuccess------------------------------
  it('should be checked', () => {
    service.checkRequestSuccess().subscribe({
        next: (response) => {
            expect(response).toBeTruthy();
            expect(response).toBe(true);
        }
    })
    const mockHttp = httpCtrl.expectOne(`${baseUrl}v1/public/series`);
    mockHttp.flush(reqGuard);
  })
  it('should be GET method', () => {
    service.checkRequestSuccess().subscribe({
      next: (response) => {
        expect(response).toBeTruthy();
        expect(response).toBe(true);
      }
    })
    const mockHttp = httpCtrl.expectOne(`${baseUrl}v1/public/series`);
    const httpRequest = mockHttp.request;
    expect(httpRequest.method).toEqual("GET");
    mockHttp.flush(reqGuard);
  });
  //-------------------------------------------------------------------------------
  //------------------------------getSeries----------------------------------------
  it('should be success', () => {
    // expect(service).toBeTruthy();
    service.getSeries().subscribe({
      next: (response) => {
        expect(response).toBeTruthy();
        expect(response.data.results.length).toBeGreaterThan(1);
      }
    })
    const mockHttp = httpCtrl.expectOne(`${baseUrl}v1/public/series?offset=0`);
    // const httpRequest = mockHttp.request;
    mockHttp.flush(reqSeries);
  });
  it('should be GET method', () => {
    // expect(service).toBeTruthy();
    service.getSeries().subscribe({
      next: (response) => {
        expect(response).toBeTruthy();
        expect(response.data.results.length).toBeGreaterThan(1);
      }
    })
    const mockHttp = httpCtrl.expectOne(`${baseUrl}v1/public/series?offset=0`);
    const httpRequest = mockHttp.request;
    expect(httpRequest.method).toEqual("GET");
    mockHttp.flush(reqSeries);
  });
  it('should be error', () => {
    service.getSeries().subscribe({
      error: (error: HttpErrorResponse) => {
        console.log('log', error);
        expect(error).toBeTruthy();
        expect(error.message).toEqual('Http failure response for https://gateway.marvel.com/v1/public/series?offset=0: 409 conflict');
      }
    });
    const mockHttp = httpCtrl.expectOne(`${baseUrl}v1/public/series?offset=0`);
    mockHttp.flush({code: 409, status: 'You must pass at least one valid format type if you set the contains filter.'}, {status: 409, statusText: 'conflict'});
  });
//----------------------------------------------------------------------------
});


