import { Observable } from "rxjs";
import { ISeriesResponse } from "../../interfaces/series/iseries-response";

export interface ISeriesService {
    getSeries(offset: number): Observable <ISeriesResponse>;
    getSeriesComics(id: string): Observable <ISeriesResponse>;
}
