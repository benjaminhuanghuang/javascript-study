// Array destructuring
const pizzaSizes= ["slice", "half-pie", "full-pie"];
const [slice, halfPie, fullPie] = pizzaSizes;

const [getSize2] = pizzaSizes.slices(2);

const pizzaSet = new Set();
const pizzaArray = [...pizzaSet];