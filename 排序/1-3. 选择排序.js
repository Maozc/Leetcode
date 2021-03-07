var selectSort = function (arr) {
    const len = arr.length;
    let minInx = 0;

    for (let i = 0; i < len - 1; i++) {
        minInx = i;
        for (let j = i; j < len; j++) {
            if (arr[j] < arr[minInx]) {
                minInx = j;
            }
        }

        if (minInx !== i) {
            [arr[i], arr[minInx]] = [arr[minInx], arr[i]]
        }
    }
    return arr;
}

let arr = [8, 3, 2, 7, 4, 9, 5, 1, 6]
selectSort(arr);