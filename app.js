const readXlsxFile = require('read-excel-file/node')
readXlsxFile('lab.xlsx').then((rows) => {
    var nama = rows[22][0]
})