const xlsx = require('xlsx');
const fs = require('fs');


// file must be string.xlsx
module.exports=function to_json(file) { 

    const workBook = xlsx.readFile(file, { cellDates: true })
    const sheetNames = workBook.SheetNames; // array of sheet names
    for (let i = 0; i < sheetNames.length; i++) {
        const workSheet = workBook.Sheets[sheetNames[i]]
        const data = JSON.stringify(xlsx.utils.sheet_to_json(workSheet))
        // mak export directory 
        const dir=process.cwd()+'/export_json'
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        fs.writeFile(`${process.cwd()}/export_json/${sheetNames[i]}.json`, data, (error) => {
            console.log(error)
        })
    }
}

