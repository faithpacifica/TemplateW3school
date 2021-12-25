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

let el1IsValid = false;
let el2IsValid = false;
let el3IsValid = false;

elInputName.addEventListener("change", function (e) {
  if(e.target.value.length > 0 ) el1IsValid = true;
  CheckButton();
});

elInputEmail.addEventListener("change", function (e) {
  if(e.target.value.length > 0 ) el2IsValid = true;
  CheckButton();
});

elInputMessage.addEventListener("change", function (e) {
 if( e.target.value.length > 0 ) el3IsValid = true;
  CheckButton();
});

const CheckButton = () => {
  elSubmitButton.disabled =
  el1IsValid && el3IsValid && el2IsValid
      ? false
      : true;
};

elSubmitButton.addEventListener('click', (e) =>{
  e.preventDefault();
 console.log(elInputName.value);
  console.log(elInputEmail.value);
  console.log(elInputMessage.value);
})
