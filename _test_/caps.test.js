'use strict';


const events = require('../events');


let order = {
    store: 'FLOWER',
    orderID: '97bd2008-f257-439e-b4b0-e06046eebc96',
    customer: 'Dwayne Schuster PhD',
    address: '461 Jabari Park'
};



describe('testing event handlers', () => {
    let consoleSpy;

    beforeAll(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });
      
    it('pickup event Work', async () => {
        events.emit('pick up', order);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });

    it('in-transit event Work ', async () => {
        events.emit('in-transit', order);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });

    it('delivered event Work  ', async () => {
        events.emit('delivered', order);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });


    afterAll(() => {
        consoleSpy.mockRestore();
    });

});