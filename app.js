const argv = require('./config/yargs').argv;

//las llaves despues de la palabra let o const significa que es una destructuración
//Con la destructuración nos permite usar los objetos de otros lados
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//console.log(argv.limite);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err))
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    default:
        console.log('Comando no reconocido');
}