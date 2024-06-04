// Cycle While Excercise
let i = 1;
while (i < 1000) {
  i = i + 1;
  if (i % 2 == 0 && i % 4 == 0 && i % 6 == 0) {
    console.log(i);
  }
}