import { ISeriesResponseData } from "./iseries-data";


export interface ISeriesResponse {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    data: ISeriesResponseData;
    etag: string;
}
