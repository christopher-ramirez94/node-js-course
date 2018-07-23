const opts = {
    base:{
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
                    .command('list', 'print in console the multiply table', opts)
                    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
                    .help()
                    .argv;



module.exports = {
    argv
}