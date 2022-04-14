const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialization', () => {
      it('should create an object with a name, ID, email and school if provided valid arguments', () => {
        const manager = new Manager('John Smith', 123, 'test@test.com' , '123ABC')
  
        expect(manager.name).toEqual('John Smith');
        expect(manager.id).toEqual(123);
        expect(manager.email).toEqual('test@test.com');
        expect(manager.officeNumber).toEqual('123ABC');
      });
  
      it('should throw an error if provided no arguments', () => {
        const cb = () => new Manager();
  
        expect(cb).toThrow();
      });
  
      it('should throw an error if not provided an ID', () => {
        const cb = () => new Manager('Sarah');
        const err = new Error(
          "Expected parameter 'ID' to be a not blank"
        );
  
        expect(cb).toThrowError(err);
      });

      it('should throw an error if not provided an email address', () => {
        const cb = () => new Manager('Sarah', 1);
        const err = new Error(
          "Invalid email"
        );
  
        expect(cb).toThrowError(err);
      });

      it('should throw an error if not provided an office number', () => {
        const cb = () => new Manager('Sarah', 1, 'test@test.com');
        const err = new Error(
          "Invalid office number"
        );
  
        expect(cb).toThrowError(err);
      });

    });
});