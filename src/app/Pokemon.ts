
/* Models information about a single pokemon */
export interface Pokemon{
    name: string,
    height: number,
    weight: number,
    order: number,
    abilities: {
        ability: {
            name: string,
            link: string
        }  
    }[],
    sprites:{
        front_default: string
    }
}