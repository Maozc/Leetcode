/* 浏览器缓存策略: FIFO先进先出、LFU最少使用、LRU最近最少使用
    核心思想:如果数据最近被访问过, 那么将来的被访问的几率也更高的
    代码调用:
        var obj = new LRUCache(capacity)
        var param_1 = obj.get(key)
        obj.put(key,value)
    
    思路:
    + 数据被读取了，所在的位置要刷新，移动到“顶部”。
    + 写入数据时：
        之前就有的，更新数据，刷新位置。
        之前没有的，有位置就直接写入，没有位置，就先删掉最久没有使用的条目，再写入。
*/

/* @param { number } capacity */
var LRUCache = function (capacity) {
    this.cache = new Map();
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.cache.has(key)) {
        // 存在即更新
        let temp = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, temp);
        return temp;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.cache.has(key)) {
        // 存在即更新
        this.cache.delete(key);
    } else if (this.cache.size > this.capacity) {
        // 缓存超过最大值,移除最近未用过的
        this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
};




// /* @param { number } capacity */
// var LRUCache = function (capacity) {
//     this.keys = []; // 存储缓存key的地方,控制缓存的位置
//     this.cache = Object.create(null);   // 缓存:{key:value}
//     this.capacity = capacity;
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function (key) {
//     if (this.cache[key] != null) {
//         removeKey(this.keys, key);
//         this.keys.push(key);
//         return this.cache[key];
//     }
//     return -1;
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function (key, value) {
//     if (this.cache[key]) {
//         // 存在缓存,更新
//         this.cache[key] = value;
//         removeKey(this.keys, key);
//         this.keys.push(key);
//     } else {
//         // 不存在缓存
//         this.keys.push(key);
//         this.cache[key] = value;
//         // 判断是否超过最大缓存
//         if (this.keys.length > this.capacity) {
//             removeCache(this.cache, this.keys, this.keys[0]);
//         }
//     }
// };

// // 移除key
// function removeKey(arr, key) {
//     if (arr.length) {
//         const index = arr.indexOf(key);
//         if (index > -1) {
//             return arr.splice(index, 1);
//         }
//     }
// }

// function removeCache(cache, keys, lastedKey) {
//     cache[lastedKey] = null;
//     removeKey(keys, lastedKey);
// }





