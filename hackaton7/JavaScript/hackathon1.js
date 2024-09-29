function concatenateArray(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
      result += arr[i].toString();
    }
    return result;
  }