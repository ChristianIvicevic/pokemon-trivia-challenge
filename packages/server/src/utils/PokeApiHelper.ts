import axios from "axios";

const apiEndpoint = "https://pokeapi.co/api/v2/";

function buildUrl(endpoint: string) {
    return `${apiEndpoint}${endpoint}`;
}

export interface PokeApiWhere {
    id?: number;
    name?: string;
}

type PokeApiEndpoint = "region" | "language";

export async function fetchPokeApi<ResponseType>(endpoint: PokeApiEndpoint, where?: PokeApiWhere) {
    const apiUrl = buildUrl(`${endpoint}/${where !== undefined ? where.id || where.name : ""}`);
    const request = await axios.get<ResponseType>(apiUrl);
    console.log(`GET ${apiUrl}`);
    return request.data;
}