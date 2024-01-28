

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


export const getTodaysDate = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0');
    const currentDay = String(currentDate.getDate()).padStart(2, '0');
    return `${currentYear}-${currentMonth}-${currentDay}`;
}

export const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};