//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150

function maxProfit(prices) {
    let profit = 0;
    let min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (min > prices[i]) min = prices[i];
        if (prices[i] - min > profit) profit = prices[i] - min;
    }

    return profit;
}
