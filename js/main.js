//open and close sidebar
function openSidebar() {
  document.getElementById("Sidebar").style.display = "block";
  document.getElementById("coverSidebar").style.display = "block";
}

function closeSidebar() {
  document.getElementById("Sidebar").style.display = "none";
  document.getElementById("coverSidebar").style.display = "none";
}

// Form Validation

const elInputName = document.getElementById("name");
const elInputEmail = document.getElementById("email");
const elInputMessage = document.getElementById("msg");
const elSubmitButton = document.getElementById("submitButton");

// let el1IsValid = false;
// let el2IsValid = false;
// let el3IsValid = false;

elInputName.addEventListener("change", function (e) {
  console.log(e.target.value);

//   if (e.target.value == "") elInputName.style.borderColor = "red";
//   else elInputName.style.borderColor = "green";

  CheckButton();
});

elInputEmail.addEventListener("change", function (e) {
  // if (e.target.value != "") el2IsValid = true;
  CheckButton();
  console.log(e.target.value);
});

elInputMessage.addEventListener("change", function (e) {
  console.log(e.target.value);
  // if (e.target.value != "") el3IsValid = true;
  CheckButton();
});

const CheckButton = () => {
  elSubmitButton.disabled =
    elInputName.value.length > 0 &&
    elInputEmail.value.length > 0 &&
    elInputMessage.value.length > 0
      ? false
      : true;
};
