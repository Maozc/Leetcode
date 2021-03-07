/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
    // 按身高降序排列,身高相同,按人数升序
    people = people.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]);
    let res = [];
    for (let i = 0; i < people.length; i++) {
        res.splice(people[i][1], 0, people[i]);
    }
};
