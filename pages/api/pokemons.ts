import type { NextApiRequest, NextApiResponse } from 'next'
import pokemons from "../../data/pokemons.json"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<typeof pokemons>
) {
  res.status(200).json((pokemons))
}
