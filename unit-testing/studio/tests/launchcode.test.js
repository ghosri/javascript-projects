// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test("wrong company", function(){
    let output = launchcode.organization
    expect(output).toEqual("nonprofit")
  })
  test("wrong CEO", function(){
    let output = launchcode.executiveDirector
    expect(output).toEqual("Jeff")
  })
  test("not enough cool employees", function(){
    let output = launchcode.percentageCoolEmployees
    expect(output).toEqual(100)
  })
  test("programs offered is not complete", function(){
    let output = launchcode.programsOffered
    expect(output[0]).toEqual("Web Development")
    expect(output[1]).toEqual("Data Analysis")
    expect(output[2]).toEqual("Liftoff")
    expect(output.length).toEqual(3)
  })
  
});

describe("testing the launchcode method", function(){
  test("divisible by 2", function(){
    let output = launchcode.launchOutput(2)
    expect(output).toEqual("Launch!")
  })
  test("divisible by 3", function(){
    let output = launchcode.launchOutput(9)
    expect(output).toEqual("Code!")
  })
  test("divisible by 5", function(){
    let output = launchcode.launchOutput(25)
    expect(output).toEqual("Rocks!")
  })
  test("divisible by 2 and 3", function(){
    let output = launchcode.launchOutput(12)
    expect(output).toEqual("LaunchCode!")
  })
  test("divisible by 3 and 5", function(){
    let output = launchcode.launchOutput(15)
    expect(output).toEqual("Code Rocks!")
  })
  test("divisible by 2 and 5", function(){
    let output = launchcode.launchOutput(10)
    expect(output).toEqual("Launch Rocks! (CRASH!!!!)")
  })
  test("divisible by 2, 3 and 5", function(){
    let output = launchcode.launchOutput(30)
    expect(output).toEqual("LaunchCode Rocks!")
  })
  test("not a number divisible by 2, 3 and 5", function(){
    let output = launchcode.launchOutput(31)
    expect(output).toEqual("Rutabagas! That doesn't work.")
  })
})