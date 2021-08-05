export interface IPersonajeDTO{

    id:number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: string,
    location: {
      name: string,
      url: string
    },
    image: string,
    episode: string[],
    url: string,
    created: Date,
    capitulos: ICapituloPersonajeDTO[];

}

export interface ICapituloPersonajeDTO{

    url: string,
    name: string

}