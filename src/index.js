(function (window) {
  console.log('Hello, console!');
  var a = 1;
  const b = 2;
  let s1 = '123';
  let s2 = '123';

  const f1 = () => null;

  const f2 = function () {};

  function f3() {}

  f3();

  const THE_SOME_MOST_VERY_IMPORTANT_CONST_EVER_IN_THE_WORLD =
    'THE_SOME_MOST_VERY_IMPORTANT_CONST_EVER_IN_THE_WORLD THE_SOME_MOST_VERY_IMPORTANT_CONST_EVER_IN_THE_WORLD';

  console.log(THE_SOME_MOST_VERY_IMPORTANT_CONST_EVER_IN_THE_WORLD);
})(window);
