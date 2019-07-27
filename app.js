const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
// const { listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.grey.italic(archivo)}`))
            .catch(err => console.log(err));
        break;

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    default:
        console.log('Comando no reconocido.');
}




// console.log(arg.base);
// console.log(arg.limite);


// let parametro = process.argv[2];
// let base = parametro.split('=')[1];