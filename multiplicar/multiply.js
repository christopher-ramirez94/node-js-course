const fs = require('fs');
var colors = require('colors');

let createFile = async(base, limit) => {

    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject(`The value ${base} is not a number`);
            return;
        }

        let data = '';

        for(let i=1; i<=limit;i++){
            data += `${base} * ${i} = ${base * i}\n`;
        }
    
        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) 
                reject(err);   
            else 
                resolve( `table-${base}.txt`);     
        });
    }); 
};

let listTable = (base, limit) => {

    console.log('=============='.green);
    console.log(`tabla del ${base}`.green);
    console.log('=============='.green);
    for(let i=1; i <= limit; i++){
        console.log(`${base} * ${i} = ${base * i}`);
    }
};


module.exports = {
    createFile,
    listTable
}

