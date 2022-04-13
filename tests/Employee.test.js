const Employee = require('../lib/Employee');


describe('Employee', () => {
    describe('Initialization', () => {
      it('should create an object with a name, ID, and email if provided valid arguments', () => {
        const employee = new Employee('John Smith', 123, 'test@test.com')
        //Child('Sarah', 3);
  
        expect(employee.name).toEqual('John Smith');
        expect(employee.id).toEqual(123);
        expect(employee.email).toEqual('test@test.com');
      });
  
      it('should throw an error if provided no arguments', () => {
        const cb = () => new Employee();
  
        expect(cb).toThrow();
      });
  
      it('should throw an error if not provided an ID', () => {
        const cb = () => new Employee('Sarah');
        const err = new Error(
          "Expected parameter 'ID' to be a not blank"
        );
  
        expect(cb).toThrowError(err);
      });

      it('should throw an error if not provided an email address', () => {
        const cb = () => new Employee('Sarah', 1);
        const err = new Error(
          "Expected parameter 'email address' to be a not blank"
        );
  
        expect(cb).toThrowError(err);
      });
    });
});
  
    //   it("should throw an error if 'name' is not a string", () => {
    //     const cb = () => new Employee(3, 2);
    //     const err = new Error(
    //       "Expected parameter 'name' to be a non-empty string"
    //     );
  
    //     expect(cb).toThrowError(err);
    //   });
  
    //   it("should throw an error if 'email' is not a number", () => {
    //     const cb = () => new Child('Sarah', '2');
    //     const err = new Error(
    //       "Expected parameter 'age' to be a non-negative number"
    //     );
  
    //     expect(cb).toThrowError(err);
    //   });
  
    //   it("should throw an error if 'age' is less than 0", () => {
    //     const cb = () => new Child('Sarah', -1);
    //     const err = new Error(
    //       "Expected parameter 'age' to be a non-negative number"
    //     );
  
//         expect(cb).toThrowError(err);
//       });
//     });
//  });
  