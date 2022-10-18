const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base para la tabla de multiplicar'

                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'


                })    

                .check( (argv, options) => {
                    if( isNaN( argv.b )) { // tambien puede ser b en lugar de base
                        throw 'La base tiene que ser un número'
                    }
                    return true; 
                })
                .argv;

module.exports = argv;                 