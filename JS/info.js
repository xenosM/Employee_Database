//* SHOW INFO AT START
showInfo(0);

function showInfo(index) {
  // employeeImage.setAttribute("src", `${employee.image || "images/image.png"}`);
  // employeeNameAge.innerText = `${employee.firstName} ${
  //   employee.lastName
  // }(${getAge(employee.DOB)})`;
  // employeeAddress.innerText = `${employee.address}`;
  // employeeEmail.innerText = `${employee.email}`;
  // employeeMobile.innerText = `mobile: ${employee.contact}`;
  // employeeDOB.innerText = `DOB: ${employee.DOB}`;
  let employee = employeeInfo[index];
  if (employee) {
    employeeInfoContainer.innerHTML = `
      <img id="employee_image" src= ${employee.image || "images/image.png"} />
      <h4 id="employee_name-age">${employee.firstName} ${
      employee.lastName
    }(${getAge(employee.DOB)})</h4>
      <div id="employee_address">${employee.address};</div>
      <div id="employee_email">${employee.email}</div>
      <div id="employee_mobile">mobile: ${employee.contact}</div>
      <div id="employee_dob">DOB: ${employee.DOB}</div>
  `;
  } else {
    employeeInfoContainer.innerHTML = "";
  }
}
function getAge(dob) {
  let ageDate = new Date(Date.now() - new Date(dob).getTime());
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
