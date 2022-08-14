const { average } = require("../utils/for_testing");

describe("average", () => {
  test("of one value its the value itself", () => {
    expect(average([1])).toBe(1);
  });

  test("the real average", () => {
    let promedio = 0;
    let suma = [1, 2, 3, 4, 5];
    suma.map((num) => {
      promedio += num;
    });
    expect(average(suma)).toBe(promedio / suma.length);
  });

  test("empty array", () => {
    expect(average([])).toBe(0);
  });
});
