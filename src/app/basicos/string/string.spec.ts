import { mensaje } from './string';
// //Sirve para agrupar pruebas
// describe('Puebas de string');
// //Son las pruebas
// it('Debe de regresar un string');


describe('Pruebas de string', () => {

    it('Debe regresar un string', () => {

       const resp =  mensaje('Mario');

       expect( typeof resp ).toBe('string');

    });

    it('Debe de regresar un saludo con el nombre enviado', () => {

        const nombre = 'Juan'
        const resp =  mensaje(nombre);
        expect( resp ).toContain(nombre);
 
     });

});