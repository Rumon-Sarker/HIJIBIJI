// utils/downloadExcel.js
export const downloadExcel = (id) => {
    if (!id) {
      alert('ID is required to download the Excel file.');
      return;
    }
    const url = `/api/export?id=${id}`;
    window.location.href = url;
  };
  