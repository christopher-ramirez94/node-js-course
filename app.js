const { createFile, listTable } = require('./multiplicar/multiply');
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');


let command = argv._[0];

switch(command) {

    case 'listar':
    listTable(argv.base, argv.limit);
    break;
    case 'crear':
    createFile(argv.base, argv.limit).then(res => {
        console.log('Created:', colors.green(res));
    }).catch(err => console.log(err));
    break;
    console.log('Comando no reconocido');
}


 