export async function getPokemon(){
    const response = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex');
    return await response.json();
} 