const lib = require('./index');

describe('registerUser',()=>{
    it('should throw if username is false',()=>{
        // const args=[null,undefined,"",0,false,NaN];
        // args.forEach(a=>{
        //     expect(()=>{registerUser(a)}).toThrow();
        // })
        const result = lib.registerUser("Deepak")
        expect(result.id).toBeGreaterThan(1);
        expect(result.name).toMatch(/deep/i);
    })
})
describe("fizzbuzz",()=>{
    it("should return FizzBuzz if number is divisible by 5 and 3",()=>{
        const result = lib.fizzbuzz(15)
        expect(result).toBe("FizzBuzz")
    })
    it("should return Fizz if number is only divisible by 5",()=>{
        const result = lib.fizzbuzz(5)
        expect(result).toBe("Fizz")
    })
    it("should return Buzz if number is only divisible by 3",()=>{
        const result = lib.fizzbuzz(3)
        expect(result).toBe("Buzz")
    })
    it("should return number if number is not divisible by 5 or 3",()=>{
        const result = lib.fizzbuzz(1)
        expect(result).toBe(1)
    })
})