import { getHeroeByIdAsync } from "../base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {

    test('getHeroeByIdAsync debe retornar un heroe', (done) => {
        const id = 1;
        getHeroeByIdAsync(id).then(
            hero => {
                console.log(hero);
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done();
            }
        );
    });

    test('getHeroesByIdAsync debe de obtener un error si heroe no se encuentra', (done) => {
        const id = 100;
        getHeroeByIdAsync(id).catch(
            error => {
                expect(error).toEqual(`No se pudo encontrar el héroe ${id}`);
                done();
            }
        );
    });
});

