import { getSaludo, getUser, getUsuarioActivo } from "../bases/17-funciones";

describe('Pruebas en 17-funciones', () => { 
    test('getSaludo debe de retornar "Hola German"', () => {
        const name='Fernando';
        const message=getSaludo(name);

        expect(message).toBe(`Hola ${name}`);
    });

    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'jh123',
            nombre: 'german'
        }

        const user = getUser();

        expect(testUser).toEqual(user);

    });

    test('getUsuarioActivo debe retornar un objeto con parametro', () => {

        const name = 'German'
        const usuario = getUsuarioActivo(name);
        expect(usuario).toEqual({
            nombre: name,
            apellido: 'Perez'
        });
    });
 })