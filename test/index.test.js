const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

describe("capitalizeWords", () => {
    it("capitalizes the first letter of a string", () => {

        const input = 'hello world'; //argument being passed

        const capitalizedWord = capitalizeWords(input);

        expect(capitalizedWord).toBe('Hello World'); //expected output of 'hello world' should be 'Hello World'
    });

    it("empty string ' ' should return empty string ' '", () => {

        const input = '';//passing empty string as an argument

        const capitalizedWord = capitalizeWords(input);

        expect(capitalizedWord).toBe(''); //expected output of an empty string should be an empty string.
    });

    it("words with special characters should return capitalized first letters", () => {

        const input = 'hello-world'; //testing words with special characters

        const capitalizedWord = capitalizeWords(input);

        expect(capitalizedWord).toBe('Hello-World');//expected output should be 'Hello-World'
    });

    it('words with one capital letter should return all first letters capitalized', () => {

        const input = 'Hello world'

        const capitalizedWord = capitalizeWords(input);

        expect(capitalizedWord).toBe('Hello World');//output should be 'Hello World'
    })
});

describe("filterActiveUsers", () => {
    it("filters active users from an array", () => {
        const usersList = [{    //array of user objects to be passed to function
            user: "user1",
            isActive: false
        }, {
            user: "user2",
            isActive: true
        }, {
            user: "user3",
            isActive: true
        }, {
            user: "user4",
            isActive: false
        }];

        const filteredUsers = filterActiveUsers(usersList);
        expect(filteredUsers).toEqual([{ user: 'user2', isActive: true }, { user: 'user3', isActive: true }]); //expected output should only have 2 users
    });

    it("an array with all inactive users should return an empty array", () => {
        const usersList = [{
            user: "user1",
            isActive: false
        }, {
            user: "user2",
            isActive: false
        }, {
            user: "user3",
            isActive: false
        }, {
            user: "user4",
            isActive: false
        }];
        const filteredUsers = filterActiveUsers(usersList);
        expect(filteredUsers).toEqual([]) //expected output should be an empty array
    });

    it("an empty array should return an empty array", () => {
        const usersList = [];

        const filteredUsers = filterActiveUsers(usersList);
        expect(filteredUsers).toEqual([]); //expected output should be an empty array
    });
});

describe("logAction", () => {
    jest
        .useFakeTimers(); //set a mock time so that timestamp variable will be correct
    it("logAction should return a string with user, action, and timestamp", () => {
        const userAction = 'saved photo';
        const userName = 'user1';
        const timeStamp = new Date().toISOString();
        const userLog = logAction(userAction, userName); //check that function works normally

        expect(userLog).toBe(`User ${userName} performed ${userAction} at ${timeStamp}`);
    });

    it("logAction should still return a statement if a parameter is an empty string", () => {
        const userAction = '';
        const userName = 'user1';
        const timeStamp = new Date().toISOString();
        const userLog = logAction(userAction, userName);

        expect(userLog).toBe(`User ${userName} performed  at ${timeStamp}`); //returned statement should still work 
    });

    it("logAction should still run if both parameters are empty strings", () => {
        const userAction = '';
        const userName = '';
        const timeStamp = new Date().toISOString();
        const userLog = logAction(userAction, userName);

        expect(userLog).toBe(`User  performed  at ${timeStamp}`); //returned statement should still work
    }) ;
});






