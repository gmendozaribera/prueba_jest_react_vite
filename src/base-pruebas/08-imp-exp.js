// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';
import {heroes} from '../data/heroes'
//devuelve el objeto heroe
export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );

// find?, filter
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

// console.log( getHeroesByOwner('Marvel') );


