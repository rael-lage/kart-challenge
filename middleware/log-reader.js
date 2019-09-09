module.exports = function(filePath) {

    const fs = require('fs');

    let fileData = fs.readFileSync(filePath.toString(), 'utf-8', function(err, data) {
        if(err) throw err;

        return data;
    })

    return fileData;
    
}
