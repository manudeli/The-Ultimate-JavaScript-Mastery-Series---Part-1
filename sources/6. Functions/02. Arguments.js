// Arguments === 전달인자 :: 함수 호출할 때 사용하는 값
// Parameters === 매개변수 :: 함수 정의할 때 인자를 받아온 값

{
  // Arguments Object
  function sum() {
    let total = 0;
    for (let value of arguments) {
      total += value;
      console.log("internal", total);
    }
    return total;
  }

  console.log(sum(1, 2, 3, 4, 5));
}
{
  // The Rest Operator (last parameter of function ...args)
  function sum(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
  }

  console.log(sum(0.1, 20, 30, 40, 50));
}
