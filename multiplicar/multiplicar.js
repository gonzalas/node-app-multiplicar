const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    if (!Number(base) || !Number(limite)) {
        console.log('Error: Ha introducido valores inválidos.');
        return;
    }


    console.log('==========='.rainbow);
    console.log(`Tabla del ${base}`.inverse);
    console.log('==========='.rainbow);


    for (let i = 1; i <= limite; i++) {
        console.log(`${base} X ${i} = ${base * i}`);
    }
}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject('Error: Ha introducido valores inválidos.');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} X ${i} = ${base * i}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}-del-1-al-${limite}.txt`, data, (err) => {

            if (err) {
                reject(err);
            } else
                resolve(`tabla-${base}-del-1-al-${limite}.txt`);
        });


    })
}

module.exports = {
    crearArchivo,
    listarTabla
}