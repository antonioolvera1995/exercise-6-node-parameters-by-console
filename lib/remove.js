const fs = require('fs');
module.exports = {

    remove: (text) => {

        fs.stat(`./${text}`, function (err, stats) {
            if (err) {
                console.log('El directorio no existe');
            } else  {
                console.log('El directorio ya existe');

                console.log('borrando archivo...');
                fs.unlink(`./${text}/${text}.txt`, (err) => {
                    if (err) {
                        console.log(err.code); ;
                        console.log('borrando directorio...');
                        fs.rmdir(`./${text}`, (err) => {
                            if (err) throw err;
                            console.log('Directorio eliminado');
                        });
                    }
                    else{
                        console.log('archivo eliminado');
                        console.log('borrando directorio...');
                        fs.rmdir(`./${text}`, (err) => {
                            if (err) throw err;
                            console.log('Directorio eliminado');
                        });

                    }
                    
                });


            }

        });



    }

}