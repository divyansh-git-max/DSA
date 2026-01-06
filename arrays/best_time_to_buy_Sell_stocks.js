// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/


var maxProfit = function (p) {
    let min = p[0];
    let maxP = 0;
    for (let i = 1; i < p.length; i++) {
        if (p[i] - min > maxP) {
            maxP = p[i] - min;
        } else if (min > p[i]) {
            min = p[i];
        }
    }
    return maxP
};


