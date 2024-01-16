

export const convertDateFormat = (inputDate) => {
    const [day, month, year] = inputDate.split('-');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
};

export const convertToDDMMYYYY = (inputDate) => {
    const dateParts = inputDate.split("-");
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];
    return `${day}-${month}-${year}`;
} 