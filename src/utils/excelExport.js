import  * as FileSaver from 'file-saver';
import XLSX from 'sheetjs-style';


const dataHeader = [{
   rfidTag:'',
   SerialNumber:'',
   expiry:''
}]

const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset-UTF-8'
const fileExtention = '.xlsx'


export const exportRFIDSampleFile = async ()=>{
   const ws =XLSX.utils.json_to_sheet(dataHeader)
   const wb = {Sheets: {'data':ws},SheetNames: ['data']}
   const excelBuffer = XLSX.write(wb,{bookType:'xlsx',type:'array'})
   const data = new Blob([excelBuffer],{type:fileType})
   FileSaver.saveAs(data, `sampleRFIDList${fileExtention}`)
}