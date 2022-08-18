const readXlsxFile = require('read-excel-file/node')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

readXlsxFile('lab.xlsx').then((rows) => {
    const index = 22
    var nama = rows[index][0]
    var satuan = rows[index][4]
    //var min = rows[index][5]
    //var max = rows[index][6]
    var nilai_normal = rows[index][3]
    prisma.nilai_normal.create({
        data: {
            name: nama,
            nilai_normal: nilai_normal,
            //min: min,
            //max: max,
            satuan: satuan,
            groupPemeriksaan: 7
        }
    })
})