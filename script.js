var selectedRow = null;

function onSubmitForm() {
    var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateUser(formData);
    resetForm();
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
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                        <a onClick="onDelete(this)">Delete</a>`
}

function resetForm() {
    document.getElementById('fullName').value = '';
    document.getElementById('city').value = '';
    document.getElementById('empCode').value = '';
    document.getElementById('salary').value = '';
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('fullName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('city').value = selectedRow.cells[1].innerHTML;
    document.getElementById('empCode').value = selectedRow.cells[2].innerHTML;
    document.getElementById('salary').value = selectedRow.cells[3].innerHTML;
}

function updateUser(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.city;
    selectedRow.cells[2].innerHTML = formData.empCode;
    selectedRow.cells[3].innerHTML = formData.salary;
}

function onDelete(td) {
    if (confirm('Delete User?')) {
        row = td.parentElement.parentElement;
        document.getElementById('employeeList').deleteRow(row.rowIndex);
        resetForm();
    }
}