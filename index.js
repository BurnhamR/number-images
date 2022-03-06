const fs = require('fs');

const folder = './images';

fs.readdir(folder, (err, files) => {
    let i = 0;
    files.forEach(file => {
        i++;
        fs.rename(folder+"/"+file, folder+"/"+i+".jpg", () => {console.log(file + " -> " + i);});
    });
});
