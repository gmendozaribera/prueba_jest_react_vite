import { getHeroeById, getHeroesByOwner } from "../base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => { 
    
    test('getHeroeById debe retornar un heroe por ID', () => {
        const id = 100;
        const hero = getHeroeById(id);

        console.log(hero);

        expect(hero).toBeFalsy();
    });

    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const hero = getHeroesByOwner(owner);

        expect(hero.length).toEqual(3);
    });
 })