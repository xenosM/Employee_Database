//*SHOW THE LIST AT THE BEGINNING
showEmployeeList();

//*ADD EMPLOYEE
modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addEmployee();
  clearInput();
});

//*FUNCTION
function addEmployee() {
  employeeInfo.push({
    firstName: modalInput[0].value,
    lastName: modalInput[1].value,
    image: modalInput[2].value,
    email: modalInput[3].value,
    contact: modalInput[4].value,
    salary: modalInput[5].value,
    address: modalInput[6].value,
    DOB: modalInput[7].value,
  });
  updateView();
  showInfo(employeeInfo.length - 1);
}

function deleteEmployee(index) {
  employeeInfo.splice(index, 1);
  updateView();

  showInfo(index - 1);
}

function showEmployeeList() {
  list.innerHTML = employeeInfo
    .map(
      (item, index) =>
        `
      <li class="employee_info_element"  data-index="${index}">
        <div>${item.firstName}</div>
        <div class="delete_employee_btn"">❌</div>
        </li>`
    )
    .join("");
  //*DELETE EMPLOYEE
  document
    .querySelectorAll(".delete_employee_btn")
    .forEach((item) =>
      item.addEventListener("click", (e) =>
        deleteEmployee(e.target.closest("li").dataset.index)
      )
    );
  //*ADD EVENT LISTENER TO THE LI ELEMENT
  document.querySelectorAll(".employee_info_element").forEach((item) => {
    item.addEventListener("click", (e) => {
      console.log("hello");
      showInfo(e.target.closest("li").dataset.index);
    });
  });
}

//* UTILS
function updateView() {
  showEmployeeList();
  setLocalStorage();
}
function setLocalStorage() {
  localStorage.setItem("employeeInfo", JSON.stringify(employeeInfo));
}

function clearInput() {
  modalInput.forEach((item) => (item.value = ""));
}
