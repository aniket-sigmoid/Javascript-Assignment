// Get the table and form elements by ID
var userTable = document.getElementById("userTable");
var userForm = document.getElementById("userForm");

// Add an event listener to the form's submit button
userForm.addEventListener("submit", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Get the form inputs
  var name = userForm.elements["name"].value;
  var gender = userForm.elements["gender"].value;
  var country = userForm.elements["country"].value;
  var email = userForm.elements["email"].value;
  var dob = userForm.elements["dob"].value;
  var age = userForm.elements["age"].value;
  
  // Create a new table row element
  var newRow = userTable.insertRow(-1);
  
  // Create new table cells for each input
  var nameCell = newRow.insertCell(0);
  var genderCell = newRow.insertCell(1);
  var countryCell = newRow.insertCell(2);
  var emailCell = newRow.insertCell(3);
  var dobCell = newRow.insertCell(4);
  var ageCell = newRow.insertCell(5);
  var deleteCell = newRow.insertCell(6);
  
  // Set the innerHTML of each cell to the input value
  nameCell.innerHTML = name;
  genderCell.innerHTML = gender;
  countryCell.innerHTML = country;
  emailCell.innerHTML = email;
  dobCell.innerHTML = dob;
  ageCell.innerHTML = age;
  //deleteCell.innerHTML = "<button onclick='deleteRow(this.parentNode.parentNode)'>Delete</button>";
  
  // Clear the form inputs
  userForm.reset();
});

// Function to delete a table row
function deleteRow(row) {
  row.parentNode.removeChild(row);
}
