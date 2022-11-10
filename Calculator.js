class Calculator {
    sum(nums, delimiter = ",") {
        if (!nums) return 0;
        if (Number(nums) < 0) throw new Error(`negatives not allowed: ${Number(nums)}`);
        if (Number(nums) > -1) return Number(nums);

        if (nums.indexOf("//") === 0) {
            delimiter = nums[2];
            nums = nums.slice(2);
        }

        if (nums.length > 1) {
            const tempDelimiter = nums.includes(delimiter) ? delimiter : "\n";

            return nums.split(tempDelimiter).reduce((a, b) => a += this.sum(b), 0);
        }

        // let delimiter = ",";
        // if (nums.indexOf("//") === 0) {
        //     delimiter = nums[2];
        //     nums = nums.split("\n")[1];
        // }

        // const valuesArray = nums.split(delimiter).map((numString) => {
        //     const resultNum = Number(numString);

        //     if (resultNum < 0) throw new Error(`negatives not allowed: ${resultNum}`);

        //     if (numString.includes("\n")) {
        //         return Number(numString.split("\n").map((valStr) => Number(valStr)).reduce((a, b) => a + b));
        //     }


        //     return Number(numString);
        // });

        // return valuesArray.reduce((a, b) => a + b);
    }
}
module.exports = Calculator;