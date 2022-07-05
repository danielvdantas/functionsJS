// function() constructor

function Person(name) {
    this.name = name
    this.walk = function () {
        return this.name + " está andando"
    }
}

const daniel = new Person("Daniel")
const joao = new Person("João")
console.log(daniel.walk())
console.log(joao.walk())

let date = new Date("2020-12-01")

console.log(date);