function onSubmitForm() {
    var formData = readFormData();
    insertNewRecord(formData);
}

function readFormData() {
    var formData = {};
    formData['fullName'] = document.getElementById('fullName').value;
    formData['city'] = document.getElementById('city').value;
    formData['empCode'] = document.getElementById('empCode').value;
    formData['salary'] = document.getElementById('salary').value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById('employeeList').getElementsByTagName('tbody')[0];
    var createRow = table.insertRow(table.length);
    cell = createRow.insertCell(0);
    cell.innerHTML = data.fullName;
    cell1 = createRow.insertCell(1);
    cell1.innerHTML = data.city;
    cell2 = createRow.insertCell(2);
    cell2.innerHTML = data.empCode;
    cell3 = createRow.insertCell(3);
    cell3.innerHTML = data.salary;
    cell4 = createRow.insertCell(4);
    cell4.innerHTML = `<a>Edit</a>
                        <a>Delete</a>`
}