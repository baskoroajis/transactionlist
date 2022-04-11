export const getFullDateString = date => {
  const createdDate = new Date(date.replace(' ', 'T'));
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const fullDateInfo =
    createdDate.getDate() +
    ' ' +
    monthNames[createdDate.getMonth()] +
    ' ' +
    createdDate.getFullYear();
  return fullDateInfo;
};

export const filterData = (searchString, arrayData) => {
  const filteredDataResult = arrayData.filter(
    obj =>
      obj.amount.toString().includes(searchString) ||
      obj.beneficiary_name.toLowerCase().includes(searchString) ||
      obj.sender_bank.toLowerCase().includes(searchString) ||
      obj.beneficiary_bank.toLowerCase().includes(searchString),
  );

  return filteredDataResult;
};

export const sortData = (field, method, arrayData) => {
  if (field === 'name') {
    if (method === 'asc') {
      arrayData.sort((a, b) =>
        a.beneficiary_name > b.beneficiary_name
          ? 1
          : b.beneficiary_name > a.beneficiary_name
          ? -1
          : 0,
      );
    } else {
      arrayData.sort((a, b) =>
        a.beneficiary_name < b.beneficiary_name
          ? 1
          : b.beneficiary_name < a.beneficiary_name
          ? -1
          : 0,
      );
    }
  } else if (field === 'date') {
    if (method === 'asc') {
      arrayData.sort((a, b) => {
        var aDate = new Date(a.created_at.replace(' ', 'T'));
        var bDate = new Date(b.created_at.replace(' ', 'T'));
        return aDate - bDate;
      });
    } else {
      arrayData.sort((a, b) => {
        var aDate = new Date(a.created_at.replace(' ', 'T'));
        var bDate = new Date(b.created_at.replace(' ', 'T'));
        return bDate - aDate;
      });
    }
  }
  return arrayData;
};

export function capitalize(string) {
  if (!string) {
    return '';
  }
  if (string.length <= 4) {
    return '' + string.toUpperCase();
  } else {
    return '' + string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
}

export const numberToDecimal = string => {
  var newNumber = string;
  if (string.length > 3 && string.length < 7) {
    newNumber =
      string.slice(0, string.length - 3) +
      '.' +
      string.slice(string.length - 3, string.length);
  } else {
    newNumber =
      string.slice(0, string.length - 6) +
      '.' +
      string.slice(string.length - 6, string.length - 3) +
      '.' +
      string.slice(string.length - 3, string.length);
  }

  return newNumber;
};
