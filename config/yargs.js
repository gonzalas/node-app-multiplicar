const caracteristicas = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', caracteristicas)
    .command('crear', 'Crea archivo de tabla de una base al límite introducido', caracteristicas)
    .help()
    .argv



module.exports = {
    argv
}