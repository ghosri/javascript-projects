const whoWon = require('../RPS.js');

describe("rps", function(){
    test("Description", function(){
        let output = whoWon("rock", "rock")
        expect(output).toEqual('TIE!')
    })
})
