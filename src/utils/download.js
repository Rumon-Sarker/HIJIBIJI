// utils/downloadExcel.js
export const downloadExcel = (id,type) => {
    if (!id) {
      alert('ID is required to download the Excel file.');
      return;
    }
    const url = `/api/export?id=${id}&type=${type}`;
    window.location.href = url;
  };
  