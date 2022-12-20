"use client";

import Image from "next/image";
import { use, useState } from 'react';
import styles from "./page.module.css";
import { makeQueryClient } from '../../utils/makeQueryClient';

type TPokemon = {
  id: number;
  name: string;
  image: string;
}
const queryClient = makeQueryClient()

export default function Pokemons() {
  const [selectedPokemon, setSelectedPokemon] = useState<TPokemon| undefined>();
  
  const pokemons = use(
    queryClient("pokemons",
    () => fetch('http://localhost:3000/api/pokemons')
        .then((res) => res.json()) as Promise<TPokemon[]>));
  
  const pokemonDetails = selectedPokemon ? use(
    queryClient(`pokemon-${selectedPokemon.id}`,
      () => fetch(`http://localhost:3000/api/${selectedPokemon.id}`)
        .then(res => res.json()) as Promise<TPokemon>
    )
  ) : null;

  return (
    <div className={styles.containerA}>
      <h2 className={styles.title}>Pokemons</h2>
      <div className={styles.buttonsWrapper}>{pokemons.map(pokemon => 
        <button className={styles.pokemonBtn} key={pokemon.id} onClick={() => setSelectedPokemon(pokemon)}>
          {pokemon.name}
        </button>
        )}
      </div>
      {pokemonDetails &&
        <div className={styles.pokemonImg}>
          <Image
            width={300} 
            height={300} 
            alt="Pokemon image" 
            src={pokemonDetails.image} 
          />
        </div>
      }
    </div>
  )
}