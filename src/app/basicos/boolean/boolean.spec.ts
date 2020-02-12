import { usuarioLogeado } from "./boolean"


describe('Pruebas de booleanos', () => {


    it('Debe de retornar true', () => {

        const res = usuarioLogeado();

        expect(res).toBeTruthy();
        // expect(res).toBeFalsy();
        // expect(res).not.toBeTruthy();

    });
});