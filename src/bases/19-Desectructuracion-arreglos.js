const usarStados = ( valor ) => {
    return [valor, () => {console.log('Hola Mundo')}];
}

const arr = usarStados('Goku');

const [valor, funcion] = arr;
funcion();

console.log(valor);