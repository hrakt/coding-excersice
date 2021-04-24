// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let p1 = 0;
  for (let p2 = 1; p2 < nums.length; p2++) {
    if (nums[p1] !== nums[p2]) {
      nums[p1 + 1] = nums[p2];
      p1++;
    }
  }
  return p1 + 1;
};

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

var maxProfit = function (prices) {
  if (prices.length === 0) return 0;
  let profit = 0;
  let p1 = 0;
  for (let p2 = 1; p2 < prices.length; p2++) {
    if (prices[p1] < prices[p2]) {
      profit += prices[p2] - prices[p1];
    }
    p1++;
  }

  return profit;
};
