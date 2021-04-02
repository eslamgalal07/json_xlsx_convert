const fs =require('fs')
const xlsx=require('xlsx')


module.exports= function to_xlsx(json,fileName) {
    
const ws= xlsx.utils.json_to_sheet(json)
const wb = xlsx.utils.book_new();
 xlsx.utils.book_append_sheet(wb,ws,fileName)
// make export_xlsx directory 
if(!fs.existsSync(`${process.cwd()}/export_xlsx`)){
    fs.mkdirSync(`${process.cwd()}/export_xlsx`)
}
const buf  = xlsx.write(wb,{bookType:'xlsx',type:'buffer'}) // generate js buffer 
const str = xlsx.write(wb,{bookType:'xlsx',type:'binary'}) // generate string for web browser

fs.writeFile(`${process.cwd()}/export_xlsx/${fileName}.xlsx`,buf,(erro)=>{
    console.log(erro);
})
}