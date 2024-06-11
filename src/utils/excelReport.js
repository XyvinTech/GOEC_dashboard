import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export const generateExcel = (headers, body, name) => {
  // Create a new workbook and a worksheet
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet([]);

  // Adding headers to the worksheet
  XLSX.utils.sheet_add_aoa(worksheet, [headers.map(header => header.header)]);
  // Map the body to match headers' keys for columns
  const data = body.map(row => 
    headers.reduce((acc, cur) => ({ ...acc, [cur.header]: row[cur.key] }), {})
  );
  // Adding data to the worksheet below the headers
  XLSX.utils.sheet_add_json(worksheet, data, { origin: 'A2', skipHeader: true });

  // Add the worksheet to the workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Report');

  // Generate a buffer
  const buffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });

  // Create a Blob and use FileSaver to save it
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  saveAs(blob, `${name}_report.xlsx`);
};

