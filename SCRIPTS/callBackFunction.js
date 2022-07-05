// callback function

function sayMyName(name) {
    console.log(name)
}

sayMyName({name: 'Daniel'})

function sayMyName(name) {
    console.log('1 - antes de executar a função callback')
    name()
    console.log('3 - depois de executar a função callback')
}

sayMyName(
    () => {
        console.log('2 - estou em uma callback')
    }
)