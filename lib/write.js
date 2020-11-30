const fs = require('fs');
module.exports = {

    write: (text) => {


        fs.stat(`./${text}`, function (err, stats) {
            if (err.code === 'ENOENT') {
                console.log('El directorio no existe');
                
                fs.mkdir(`./${text}`, {  recursive: false}, (err) => {
                    if (err) throw err;
                    console.log(`Directorio ${text} creado`);

                    fs.writeFile(`./${text}/${text}.txt`, 'Archivo listo', (err) => {
                        if (err) throw err;
                        console.log('Archivo creado con éxito');
                      });
                });
                

            } else {
                console.log('El directorio ya existe');
            }

        });



    }

}