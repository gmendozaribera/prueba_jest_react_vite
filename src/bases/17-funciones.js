
export const getUser = () => ({
        uid: 'jh123',
        nombre: 'german'
});


export const getUsuarioActivo = ( nombre ) => ({
        nombre,
        apellido: 'Perez'
})

// const usuarioActivo = getUsuarioActivo('Diego');

// console.log(usuarioActivo);

export function getSaludo(nombre){
        return 'Hola ' + nombre;
}

// console.log(`Este es un texto: ${getSaludo(nombre)}`);
