var swim = exercise("swimming");
var run = exercise("running");

function exercise(run, swim) {
  if ((swim = "swimming")) {
    return function swim() {
      return "Today's exercise: swimming";
    };
  } else if ((run = "running")) {
    return function run() {
      return "Today's exercise: running";
    };
  } else return "No Workout Today";
}
console.log(run());
