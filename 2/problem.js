var maximumProfit = function(array) {
    let minPrice = Infinity;
    let maxP = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < minPrice) {
            minPrice = array[i];
        }
        let profit = array[i] - minPrice;
        if (profit > maxP) {
            maxP = profit;
        }
    }

    return maxP;
};

// test arrays
let test1 = [100, 80, 120, 130, 70, 60, 100, 125];
let test2 = [100, 80, 70, 65, 60, 55, 50];
let test3 = [10, 20, 30, 40, 50];
let test4 = [50, 40, 30, 20, 10];
let test5 = [5, 10, 3, 2, 7];

console.log(maximumProfit(test1)); // 65
console.log(maximumProfit(test2)); // 0
console.log(maximumProfit(test3)); //40
console.log(maximumProfit(test4)); //0
console.log(maximumProfit(test5)); // 5
