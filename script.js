function calculateAverage() {
  let mark1 = parseFloat(document.getElementById("mark1").value);
  let mark2 = parseFloat(document.getElementById("mark2").value);
  let mark3 = parseFloat(document.getElementById("mark3").value);

  let result = document.getElementById("result");

  // Check if all fields are filled
  if (isNaN(mark1) || isNaN(mark2) || isNaN(mark3)) {
    result.innerHTML = "<p>Please enter marks for all three subjects.</p>";
    return;
  }

  // Calculate total and average
  let total = mark1 + mark2 + mark3;
  let average = total / 3;

  // Determine grade
  let grade = "";

  if (average >= 90) {
    grade = "A+";
  } else if (average >= 80) {
    grade = "A";
  } else if (average >= 70) {
    grade = "B";
  } else if (average >= 60) {
    grade = "C";
  } else if (average >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }

  // Display result
  result.innerHTML = `
    <h2>Result</h2>
    <p><strong>Total Marks:</strong> ${total}</p>
    <p><strong>Average Marks:</strong> ${average.toFixed(2)}</p>
    <p><strong>Grade:</strong> ${grade}</p>
  `;
}
