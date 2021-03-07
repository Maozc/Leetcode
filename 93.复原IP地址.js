/**
 * @param {string} s
 * @return {string[]}
 * 
 * 有效的 IP 地址 
 * 正好由四个整数（每个整数位于 0 到 255 之间组成）
 * 整数之间用 '.' 分隔
 * 
 * 回溯法，未剪枝
 */
var restoreIpAddresses = function (s) {
    let res = [];

    let dfs = (subRes, start) => {
        // 第一步：判读递归是否应当结束?
        if (subRes.length === 4 && start === s.length) {
            res.push(subRes.join('.'));
            return;
        }

        // 第二步：判断输入或者状态是否非法？
        if (subRes.length === 4 && start < s.length) {
            return;
        }

        // 遍历所有可能出现的情况
        for (let len = 1; len <= 3; len++) {
            // 第三步: 排除不符合条件的可能性
            if (start + len - 1 >= s.length) return;    // 指针越界
            if (len !== 1 && s[start] === '0') return;  // 不能以0x或0xx开头

            const str = s.substring(start, start + len);
            if (len === 3 && +str > 255) return;        // 不能超过255


            subRes.push(str);
            // 递归
            dfs(subRes, start + len);

            // 第四步：回溯到上一步
            subRes.pop();
        }
    }
    dfs([], 0);
    return res;
};

