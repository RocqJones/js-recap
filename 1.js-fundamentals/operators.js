// remainder % - 1, a remainder of 5 divided by 2
alert(5%2);

// Exponentiation operator - a ** b multiplies a by itself b times
alert(2 ** 3);
alert(8 ** (1 / 3)); // (power of 1/3 is the same as a cubic root)

// Numeric conversion - Both values converted to numbers before the binary plus
let apples = "2";
let oranges = "3";
alert(+apples + +oranges);

// increamental/decremental
/**
 * When the operator goes after the variable, it is in “postfix form”: counter++.
 * The “prefix form” is when the operator goes before the variable: ++counter.
 */
let counter = 3;
counter++;
alert(counter);

let counter = 3;
counter--;
alert(counter);

let counter = 1;
alert(2 * ++counter); // 4

let counter = 1;
alert(2 * counter++); // 2