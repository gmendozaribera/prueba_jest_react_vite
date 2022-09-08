import { render, screen } from "@testing-library/react";
import { CounterApp } from "../CounterApp";

describe('Prueba en CounterApp', () => {


    const initialValue = 10;

    test('Debe de hacer match con el snapshot', () => {

        const { container } = render(<CounterApp value={initialValue}/>);
        expect(container).toMatchSnapshot();

    });

    test('Debe de mostrar el valor inicial de 100', () => {
       render(<CounterApp value={100}/>);
       expect(screen.getByText(100)).toBeTruthy();
    });

    test('debe de incrementar con el botón +1', () => {
        
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('+1') )
        expect( screen.getByText('11') ).toBeTruthy();

    });

    test('debe de decrementar con el botón -1', () => {
        
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('-1') );   //El evento fireEvent va simular el click al button -1
        expect( screen.getByText('9') ).toBeTruthy();   //Esperando que el valor inicial se transforme a 9

    });

    test('debe de funcionar el botón de reset', () => {
        
        render( <CounterApp value={ 355 } /> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        // fireEvent.click( screen.getByText('Reset') );
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

        expect( screen.getByText( 355 ) ).toBeTruthy();

    });
});