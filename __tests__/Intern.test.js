const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialization', () => {
      it('should create an object with a name, ID, email and school if provided valid arguments', () => {
        const intern = new Intern('John Smith', 123, 'test@test.com' , 'school')
  
        expect(intern.name).toEqual('John Smith');
        expect(intern.id).toEqual(123);
        expect(intern.email).toEqual('test@test.com');
        expect(intern.school).toEqual('school');
      });
  
      it('should throw an error if provided no arguments', () => {
        const cb = () => new Intern();
  
        expect(cb).toThrow();
      });
  
      it('should throw an error if not provided an ID', () => {
        const cb = () => new Intern('Sarah');
        const err = new Error(
          "Expected parameter 'ID' to be a not blank"
        );
  
        expect(cb).toThrowError(err);
      });

      it('should throw an error if not provided an email address', () => {
        const cb = () => new Intern('Sarah', 1);
        const err = new Error(
          "Invalid email"
        );
  
        expect(cb).toThrowError(err);
      });

      it('should throw an error if not provided a school name', () => {
        const cb = () => new Intern('Sarah', 1, 'test@test.com');
        const err = new Error(
          "Invalid school info"
        );
  
        expect(cb).toThrowError(err);
      });

    });
});