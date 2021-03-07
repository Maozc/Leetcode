var mergeSort = function (arr) {
    const len = arr.length;

    if (len <= 1)
        return arr;

    const midInx = Math.floor(len / 2);
    // 分割左半部分数组，同时合并为有序数组
    const leftArr = mergeSort(arr.slice(0, midInx));
    // 分割右半部分数组，同时合并为有序数组
    const rightArr = mergeSort(arr.slice(midInx, len));

    arr = mergeArr(leftArr, rightArr);
    return arr;
}

var mergeArr = function (arr1, arr2) {
    let res = [],
        lLen = arr1.length,
        rLen = arr2.length,
        i = j = 0;

    while (i < lLen && j < rLen) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i]);
            i++;
        } else {
            res.push(arr2[j]);
            j++;
        }
    }

    console.log(res);

    // 若其中一个子数组首先被合并完全，则直接拼接另一个子数组的剩余部分
    // concat() 方法用于合并数组。此方法不会更改现有数组，而是返回一个新数组。
    if (i < lLen) {
        return res.concat(arr1.slice(i));
    } else {
        return res.concat(arr2.slice(j));
    }

    return res;
}

let arr = [8, 3, 2, 7, 4, 9, 5, 1, 6]
mergeSort(arr);