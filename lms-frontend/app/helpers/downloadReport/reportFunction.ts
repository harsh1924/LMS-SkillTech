import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export const downloadExcel = (data: any[], fileName: string) => {
  // Create a new workbook and worksheet
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  // Convert workbook to binary Excel data
  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

  // Create a Blob and trigger the download
  const blob = new Blob([wbout], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  saveAs(blob, fileName);
};
