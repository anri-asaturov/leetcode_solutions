var maxProfit = function (prices) {
  let min = prices[0];
  let max = prices[0];
  let profit = 0;
  let trend = 0; // -1 down, 0 flat, 1 up
  let i = 1;
  for (; i < prices.length; i++) {
    const current = prices[i];
    const prev = prices[i - 1];

    if (current == prev) continue;
    
    switch (trend) {
      case 0:
        if (current > prev) {
          max = current;
          trend = 1;
        } else {
          min = current;
          trend = -1;
        }

        break;
      case 1:
        if (current > prev) {
          max = current;
        } else {
          if (max - min > 0) profit += max - min;
          min = current;
          max = 0;
          trend = -1;
        }

        break;
      case -1:
        if (current > prev) {
          max = current;
          trend = 1;
        } else {
          min = current;
        }
        break;
    }
  }
  if (trend == 1 && max - min > 0) profit += max - min;
  return profit;
};
