export interface ISerieResults {
    characters: {},
    collectedIssues: [],
    creators: {},
    dates: [
        {
            type: string, 
            date: string
        }
    ],
    description: string,
    diamondCode: string,
    digitalId: string,
    ean: string,
    events: {},
    format: string,
    id: number,
    images:[],
    isbn: string,
    issn: string,
    issueNumber: number,
    modified: string,
    pageCount: number,
    prices: [],
    resourceURI: string,
    series: {},
    stories: {},
    textObjects: [],
    thumbnail: {
        extension: string,
        path: string
    },
    title: string,
    upc: string,
    urls: [],
    variantDescription: string,
    variants: []
}
