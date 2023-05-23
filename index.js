const dayInp = document.getElementById("day");
const monthInp = document.getElementById("month");
const yearInp = document.getElementById("year");

const dayOtp = document.getElementById("DD");
const monthOtp = document.getElementById("MM");
const yearOtp = document.getElementById("YY");

const form = document.querySelector("form");

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
  const inputs = document.querySelectorAll("input");
  let validator = true;

  inputs.forEach((input) => {
    const parent = input.parentElement;

    if (!input.value) {
      input.style.borderColor = "hsl(0, 100%, 67%)";
      parent.querySelector("small").innerText = "This field is required.";
      validator = false;
    } else if (input === monthInp && (input.value < 1 || input.value > 12)) {
      input.style.borderColor = "hsl(0, 100%, 67%)";
      parent.querySelector("small").innerText = "Must be a valid Month.";
      validator = false;
    } else if (input === dayInp && (input.value < 1 || input.value > 31)) {
      input.style.borderColor = "hsl(0, 100%, 67%)";
      parent.querySelector("small").innerText = "Must be a valid day.";
      validator = false;
    }else if(input===yearInp && (input.value<0 || input.value>year)){
     input.style.borderColor="hsl(0, 100%, 67%)";
     parent.querySelector("small").innerText="Must be in past";
     validator=false;
    } else {
      input.style.borderColor = "black";
      parent.querySelector("small").innerText = "";
    }
  });

  return validator;
}

function handleSubmit(e) {
  e.preventDefault();

  if (validate()) {
    const inputDay = parseInt(dayInp.value);
    const inputMonth = parseInt(monthInp.value);
    const inputYear = parseInt(yearInp.value);

    if (inputDay > day) {
      day += months[month - 1];
      month -= 1;
    }

    if (inputMonth > month) {
      month += 12;
      year -= 1;
    }

    const d = day - inputDay;
    const m = month - inputMonth;
    const y = year - inputYear;

    dayOtp.innerHTML = d;
    monthOtp.innerHTML = m;
    yearOtp.innerHTML = y;
  }
}

form.addEventListener("submit", handleSubmit);
