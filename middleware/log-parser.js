module.exports = function(fileData) {

    let lines = fileData.toString().replace(/\t/g, ' ').split(/\r?\n/);

    let parsedData = [];
    for(var i = 0; i < lines.length; i++){
        parsedData.push(lines[i].trim().split(/[ ]+/));
    }

    return parsedData;

}