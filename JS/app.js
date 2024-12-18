//* Variable declaration
let employeeInfo = JSON.parse(localStorage.getItem("employeeInfo")) || [];

let modalSection = document.querySelector("#modal_section");
let modalCloseBtn = document.querySelector("#modal_close_btn");
let modalForm = document.querySelector("#modal_form");

let mainSection = document.querySelector("#main_section");
let addEmployeeBtn = document.querySelector("#add_employee_btn");
let employeeList = document.querySelector("#employee_list");
let list = document.querySelector("#list");
let employeeInfoContainer = document.querySelector("#employee_info");
let employeeImage = document.querySelector("#employee_image");
let employeeNameAge = document.querySelector("#employee_name-age");
let employeeAddress = document.querySelector("#employee_address");
let employeeEmail = document.querySelector("#employee_email");
let employeeMobile = document.querySelector("#employee_mobile");
let employeeDOB = document.querySelector("#employee_dob");

let modalInput = document.querySelectorAll(".modal_input");

//* Function declaration
function toggleHidden(element) {
  element.classList.toggle("hidden");
}
function toggleBlur(element) {
  element.classList.toggle("blur_filter");
}
//------------------------------------------------------------//
