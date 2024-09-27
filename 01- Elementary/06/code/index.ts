const numbers: Array<string | number> = ["un", "deux", "trois", 4, 5];

console.log(numbers);

const nums: [string, number, string] = ["un", 2, "trois"];
nums.push("quatre"); // <------------ **

console.log(nums);
