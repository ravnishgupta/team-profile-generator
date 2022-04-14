const Engineer = require('../lib/Engineer');


describe('Engineer', () => {
    describe('Initialization', () => {
      it('should create an object with a name, ID, email and github if provided valid arguments', () => {
        const engineer = new Engineer('John Smith', 123, 'test@test.com' , 'github')
  
        expect(engineer.name).toEqual('John Smith');
        expect(engineer.id).toEqual(123);
        expect(engineer.email).toEqual('test@test.com');
        expect(engineer.github).toEqual('github');
      });
  
      it('should throw an error if provided no arguments', () => {
        const cb = () => new Engineer();
  
        expect(cb).toThrow();
      });
  
      it('should throw an error if not provided an ID', () => {
        const cb = () => new Engineer('Sarah');
        const err = new Error(
          "Expected parameter 'ID' to be a not blank"
        );
  
        expect(cb).toThrowError(err);
      });

      it('should throw an error if not provided an email address', () => {
        const cb = () => new Engineer('Sarah', 1);
        const err = new Error(
          "Invalid email"
        );
  
        expect(cb).toThrowError(err);
      });

      it('should throw an error if not provided a github account', () => {
        const cb = () => new Engineer('Sarah', 1, 'test@test.com');
        const err = new Error(
          "Invalid github account"
        );
  
        expect(cb).toThrowError(err);
      });

    });
});