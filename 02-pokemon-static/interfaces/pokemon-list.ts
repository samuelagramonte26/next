export interface PokemonListResponse {
    count:    number;
    next?:     string;
    previous?: string;
    results:  SmallResull[];
}

export interface SmallResull {
    name: string;
    url:  string;
    id:number;
    img:string;
}
