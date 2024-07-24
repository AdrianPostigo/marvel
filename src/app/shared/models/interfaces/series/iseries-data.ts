import { ISerieResults } from "./iserie-results";

export interface ISeriesResponseData {
    count: number;
    limit: number;
    offset: number;
    results: [ISerieResults];
    total: number;
}
