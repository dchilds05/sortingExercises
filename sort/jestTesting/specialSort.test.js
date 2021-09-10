const specialSort = require("./specialSort.js");

it("works", () => {
    expect(1).toBe(1);
})

it("Test 1", () => {
    expect(JSON.stringify(specialSort([1,4,5,8,3,2,6,9,7,10]))).toBe(JSON.stringify([10,1,9,2,8,3,7,4,6,5]));
})

it("Test 2", () => {
    expect(JSON.stringify(specialSort([1,4,5,8,3,2,6,9,7]))).toBe(JSON.stringify([9,1,8,2,7,3,6,4,5]));
})
