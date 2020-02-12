import { obtenerRobots } from './arreglos';


xdescribe('Pruebas de arreglos', () => {


    it('Debe de retornar al menos tres robots', () => {

        const res = obtenerRobots();

        expect(res.length).toBeGreaterThanOrEqual(3); //Que sea mayor o igual a res
        
    });

    it('Debe de existir megaman y optimus', () => {

        const res = obtenerRobots();
        expect(res).toContain('Megaman');
        expect(res).toContain('Optimus');
        
    });

});