function calculateAverage() {
  let mark1 = parseFloat(document.getElementById("mark1").value);
  let mark2 = parseFloat(document.getElementById("mark2").value);
  let mark3 = parseFloat(document.getElementById("mark3").value);

  if (isNaN(mark1) || isNaN(mark2) || isNaN(mark3)) {
    document.getElementById("result").innerHTML = "Please enter all marks.";
    return;
  }

  let average = (mark1 + mark2 + mark3) / 3;

  document.getElementById("result").innerHTML =
    "Average Marks: " + average.toFixed(2);
}
