/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
import { isValidPassword } from "./password-validator.js";


describe("Valid password checks", () => {
    test("password has at least 5 characters", () => {
    const password = "Hello!42";
    const result = isValidPassword(password);
    expect(result).toEqual(true)
    });

    test("password has at least one English uppercase letter (A-Z)", () => {
        const password = "FrankOceanluvr26*";
        const result = isValidPassword(password);
        expect(result).toEqual(true);
    });

    test("password has at least one English lowercase letter (a-z)", () => {
        const password = "jaegerMeister#29";
        const result = isValidPassword(password);
        expect(result).toEqual(true);
    });

    test("password has at least one number (0-9)", () => {
        const password = "1738!Aye";
        const result = isValidPassword(password);
        expect(result).toEqual(true);
    });

    test("password has at least one of the following non-alphanumeric symbols: ('!', '#', '$', '%', '.', '*', '&')", () => {
        const password = "Sleepy&Eepy26";
        const result = isValidPassword(password);
        expect(result).toEqual(true);
    });

    test("password must not be any previous password in the passwords array", () => {
        const password = "One1Two2Three!!!";
        let result = isValidPassword(password);
        result = isValidPassword(password);
        expect(result).toEqual(false);
    });//  
});

describe("Invalid password: Less than 5 characters", () => {
    test("Invalid password: 1234", () => {
        const password = 1234;
        const result = isValidPassword(password);
        expect(result).toEqual(false);
    });

    test("Invalid password: hey", () => {
        const password = "hey";
        const result = isValidPassword(password);
        expect(result).toEqual(false);
    });

    test("Invalid password: !!!", () => {
        const password = "!!!";
        const result = isValidPassword(password);
        expect(result).toEqual(false);
    });
});


describe("Invalid password: Does not have an uppercase English letter (A-Z)", () => {
    test("Invalid password: aaaaa", () => {
        const password = "aaaaa";
        const result = isValidPassword(password);
        expect(result).toEqual(false);
    });
    test("Invalid password: qwerty", () => {
        const password = "qwerty";
        const result = isValidPassword(password);
        expect(result).toEqual(false);
    });

    test("Invalid password: 12345", () => {
        const password = "12345";
        const result = isValidPassword(password);
        expect(result).toEqual(false);
    });
});


describe("Invalid password: Does not have a lowercase English letter (a-z)", () => {
    test("Invalid password: AAAAA", () => {
        const password = "AAAAA";
        const result = isValidPassword(password);
        expect(result).toEqual(false);
    });

    test("Invalid password: QWERTY", () => {
        const password = "QWERTY";
        const result = isValidPassword(password);
        expect(result).toEqual(false);
    });

    test("Invalid password: 12345", () => {
        const password = "12345";
        const result = isValidPassword(password);
        expect(result).toEqual(false);
    });
});


describe("Invalid password: Does not have a number (0-9", () => {
    test("Invalid password: Hello", () => {
        const password = "Hello";
        const result = isValidPassword(password);
        expect(result).toEqual(false);
    })
});


describe("Invalid password: Does not have at least one of the following non-alphanumeric symbols: ('!', '#', '$', '%', '.', '*', '&')", () => {
    test("Invalid password: Hello1", () => {
        const password = "Hello1";
        const result = isValidPassword(password);
        expect(result).toEqual(false);
    });
});

describe("Invalid password: Matches a previous password in the array", () => {
    test("Invalid password: Hello1!", () => {
        const password = "Hello1!";
        let result = isValidPassword(password);
        result = isValidPassword(password);
        expect(result).toEqual(false);
    });
});

