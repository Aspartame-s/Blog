
const fs = require('fs')
const path = require('path')
// function getFileContent(fileName, callback) {
//     const fullFileName = path.resolve(__dirname, 'files', fileName)
//     fs.readFile(fullFileName, (err, data) => {
//         if(err) {
//             console.error(err)
//             return
//         }
//         callback(
//             JSON.parse(data.toString())
//         )
//     })
// }
// getFileContent('a.json', aData => {
//     console.log('a data:', aData)
//     getFileContent(aData.next, bData => {
//         console.log('b data:', bData)
//         getFileContent(bData.next, cData => {
//             console.log('c data', cData)
//         })
//     })
// })

// 用promise 获取文件内容
function getFileContent(fileName) {
    const promise = new Promise((reslove, reject) => {
        const fullFileName = path.resolve(__dirname, 'files', fileName)
        fs.readFile(fullFileName, (err, data) => {
            if(err) {
                reject(err)
                return
            }
            reslove(
                JSON.parse(data.toString())
            )
        })
    })
    return promise
}

getFileContent('a.json').then(aData => {
    console.log(aData)
    return getFileContent(aData.next)
}).then(bData => {
    console.log(bData)
})
// --------------------
