const maxProduct = (arr) => {
  arr.sort((a, b) => a - b);

  const n = arr.length;
  const product1 = arr[n - 1] * arr[n - 2];
  const product2 = arr[0] * arr[1];

  return Math.max(product1, product2);
};

console.log(maxProduct([1, 20, 3, 10, 5]));
console.log(maxProduct([-10, -20, 3, 5]));
