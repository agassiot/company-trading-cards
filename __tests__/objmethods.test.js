var {Employee} = require('../lib/classes.mjs');
var {Engineer} = require('../lib/classes.mjs');
var {Intern} = require('../lib/classes.mjs');
var {Manager} = require('../lib/classes.mjs');

describe('Employee.setInfo()', () => {
    test('gives object `test` a name, id, and email property', ()=>{
let test = Object.create(Employee);
test.setInfo('name','id','email');

    expect(test.name).toEqual('name')
    expect(test.id).toEqual('id')
    expect(test.email).toEqual('email')
})
})

describe('Employee.setRole()', () => {
    test('gives object `test` the property role: `Employee`', ()=>{
let test = Object.create(Employee);
test.setRole();

    expect(test.role).toEqual('Employee')
})
})

describe('Manager.setOffice()', () => {
    test('gives object `test` the property officeNum: `42`', ()=>{
let test = Object.create(Manager);
test.setOffice(42);

    expect(test.officeNum).toEqual(42)
})
})

describe('Manager.setRole()', () => {
    test('gives object `test` the property role: `Team Manager`', ()=>{
let test = Object.create(Manager);
test.setRole();

    expect(test.role).toEqual('Team Manager')
})
})

describe('Intern.setSchool()', () => {
    test('gives object `test` the property school: `Real University`', ()=>{
let test = Object.create(Intern);
test.setSchool('Real University');

    expect(test.school).toEqual('Real University')
})
})

describe('Intern.setRole()', () => {
    test('gives object `test` the property role: `Intern`', ()=>{
let test = Object.create(Intern);
test.setRole();

    expect(test.role).toEqual('Intern')
})
})

describe('Engineer.setGit()', () => {
    test('gives object `test` the property github: `github.com`', ()=>{
let test = Object.create(Engineer);
test.setGit('github.com');

    expect(test.github).toEqual('github.com')
})
})

describe('Engineer.setRole()', () => {
    test('gives object `test` the property role: `Engineer`', ()=>{
let test = Object.create(Engineer);
test.setRole();

    expect(test.role).toEqual('Engineer')
})
})
