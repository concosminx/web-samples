function sumOfArray(arr) {
    let tempArr = arr.sort((a, b) => {
        return a - b;
    });

    console.log("Sorted array: ", tempArr)

    let largest = tempArr.pop();
    console.log("Largest number: ", largest)
    let number = 0;

    tempArr.forEach((item) => {
        number += item;
    });

    if (largest === number) {
        return "Sum = Largest number ? true";
    }
    return "Sum = Largest number ? false";
}

// keep this function call here
console.log(sumOfArray([1, 2, 4, 6, 13]));
console.log(sumOfArray([1, 2, 4, 6, 34, 22]));