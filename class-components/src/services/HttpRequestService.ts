import Pokemon from "../types/Pokemon"

class HttpRequestService {
  hostApi: string = "https://pokeapi.co/api/v2";
  async getPokemon (name: string): Promise<Array<Pokemon>|null> {
    if (/^[A-Za-z]*$/.test(name)) {
      const url: URL =  new URL(`${this.hostApi}/pokemon/${name}`);
      const result = await fetch(url);
      const data: Array<Pokemon> = await result.json();
      return data || null;
    }
    return null;
  }

  async getAllPokemon(): Promise<Array<Pokemon>> {
    const url: URL =  new URL(`${this.hostApi}/pokemon/${name}`);
    const result = await fetch(url);
    const data: Array<Pokemon> = await result.json();
    return data;
  }
}

export default new HttpRequestService();
