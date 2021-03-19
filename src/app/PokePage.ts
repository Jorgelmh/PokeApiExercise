/* Models data for a pokemon in the search page */
export interface PokePage{
    name: string,
    url: string,
    count: number,
    results: {
        name: string,
        url: string
    }[]
}