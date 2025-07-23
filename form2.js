function calculateMarks() {
  // Get Student Info
  var name = document.getElementById("name").value || "--";
  var regno = document.getElementById("regno").value || "--";
  var dob = document.getElementById("dob").value || "--";

  // Output Student Info
  document.getElementById("outName").innerText = name;
  document.getElementById("outReg").innerText = regno;
  document.getElementById("outDob").innerText = dob;

  // Get Subject Marks
  var s1 = parseInt(document.getElementById("sub1").value) || 0;
  var s2 = parseInt(document.getElementById("sub2").value) || 0;
  var s3 = parseInt(document.getElementById("sub3").value) || 0;
  var s4 = parseInt(document.getElementById("sub4").value) || 0;
  var s5 = parseInt(document.getElementById("sub5").value) || 0;

  var total = s1 + s2 + s3 + s4 + s5;
  var average = total / 5;
  var percentage = (total / 500) * 100;

  // Display marks details
  document.getElementById("total").innerText = total;
  document.getElementById("average").innerText = average.toFixed(2);
  document.getElementById("percentage").innerText = percentage.toFixed(2) + "%";

  // Grade logic
  var grade = "";
  if (percentage >= 90) grade = "A+";
  else if (percentage >= 80) grade = "A";
  else if (percentage >= 70) grade = "B";
  else if (percentage >= 60) grade = "C";
  else if (percentage >= 50) grade = "D";
  else grade = "Fail";
  document.getElementById("grade").innerText = grade;

  // Pass/Fail result
  var result = (s1 >= 35 && s2 >= 35 && s3 >= 35 && s4 >= 35 && s5 >= 35) ? "Pass" : "Fail";
  document.getElementById("result").innerText = result;
}
