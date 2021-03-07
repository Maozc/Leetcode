/* 插入排序和冒泡排序是基础 */

function swap(arr,i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

/* 
    i:控制遍历的轮数
    j:控制每一轮遍历的个数
    flag:判断是否已经是顺序，是的话，退出循环
*/
var bubbleSort = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        // 提前退出冒泡排序的标志位
        let sortedFlag = false;

        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr,j, j + 1)
                sortedFlag = true;
            }
        }
        // 提前退出
        if (!sortedFlag) break;
    }
    return arr;
};

let arr = [8, 3, 2, 7, 4, 9, 5, 1, 6]

bubbleSort(arr);