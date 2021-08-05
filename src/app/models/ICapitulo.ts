export interface ICapituloDTO{

    id: number;
    name: string,
    air_date: Date,
    episode: string,
    characters: string[],
    url: string,
    created: Date
    personajes: IPersonajeCapituloDTO[],
}


export interface IPersonajeCapituloDTO{

    url: string,
    name: string
}

