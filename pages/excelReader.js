// utils/excelReader.js
const XLSX = require('xlsx');
const path = require('../pages/excelReader.js');

function readExcelData(filePath, sheetName) {
  const workbook = XLSX.readFile(path.resolve(process.cwd(), filePath));
  const targetSheetName = sheetName || workbook.SheetNames[0];
  const worksheet = workbook.Sheets[targetSheetName];
  
  return XLSX.utils.sheet_to_json(worksheet);
}

module.exports = { readExcelData };
