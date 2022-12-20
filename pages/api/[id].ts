import type { NextApiRequest, NextApiResponse } from 'next'
import pokemons from "../../data/pokemons.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<(typeof pokemons[number] & { image: string})| undefined>
) {
  const requestedPokemon = pokemons.find(pokemon => pokemon.id === Number(req.query.id));
  res.status(200).json(requestedPokemon ?
    {
      ...requestedPokemon,
      image: `/pokemons/pokemon-${requestedPokemon.id}.jpg`
    } : undefined);
}
