/* 插入排序和冒泡排序是基础 */
var insertSort = function (arr) {
    for (let i = 1; i < arr.length; i++) {
        let cur = arr[i],
            j = i - 1;

        for (; j >= 0; --j) {
             // 只要这里条件不成立，说明此轮cur的正确位置已找到，不需要继续遍历
            if (arr[j] > cur)         
                arr[j + 1] = arr[j];
            else
                break;
            }
        arr[j+1] = cur;
    }
}

let arr = [8, 3, 2, 7, 4, 9, 5, 1, 6]
insertSort(arr);