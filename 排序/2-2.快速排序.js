var swap = function (arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

// 双路快排
var quickSort = function (arr, left = 0, right = arr.length - 1) {
    // 定义递归边界，当数组只有一个元素的时候，直接返回数组
    if (arr.length > 1) {
        const lineInx = partition(arr, left, right);

        // 左子数组的长度不小于1,则继续递归快排
        if (left < lineInx - 1) {
            quickSort(arr, left, lineInx - 1);
        }
        // 右子数组的长度不小于1,则继续递归快排
        if (right > lineInx) {
            quickSort(arr, lineInx, right);
        }
    }
    return arr;
}

var partition = function (arr, left, right) {
    let pivotValue = arr[Math.floor(left + (right - left) / 2)];
    // 初始化左右指针
    let i = left;
    let j = right;

    while (i <= j) {
        while (arr[i] < pivotValue)
            i++;
        while (arr[j] > pivotValue)
            j--;

        // i <= j说明基准值左边存在较大元素或右边存在较小元素,需要交换两元素
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }

    // 左指针左边的元素一定是小于基准值的
    return i;
}

// 单路快排
var quickSort = function (arr, left = 0, right = arr.length - 1) {
    // 当数组只有一个元素的时候，直接返回数组
    if (left >= right) return;

    const lineInx = partition(arr, left, right);

    quickSort(arr, left, lineInx - 1);
    quickSort(arr, lineInx+1, right);
}

var partition = function (arr, left, right) {
    let pivot = Math.floor(left + (right - left) / 2);
    swap(arr,pivot,right);
    let pivotValue = arr[right];

    // 初始化指针
    // i 指针之前的数都比基准值小,而j指针则用于遍历数组
    let i = j = left;

    for (; j <right; j++) {
        if (arr[j] > pivotValue) {
            swap(arr,i,j);
            i++;
        }
    }
    swap(arr,i,right);
    // 左指针左边的元素一定是小于基准值的
    return i;
}

let arr = [8, 3, 2, 7, 4, 9, 5, 1, 6]
quickSort(arr);