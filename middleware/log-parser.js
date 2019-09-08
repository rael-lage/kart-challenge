module.exports = function(fileData) {

    var lines = fileData.toString().replace(/\t/g, ' ').split(/\r?\n/);

    var parsedData = [];
    for(var i = 0; i < lines.length; i++){
        parsedData.push(lines[i].trim().split(/[ ]+/));
    }
    return parsedData;

}