var meds = []

function addMed() {
    event.preventDefault();
    let med = {
        "medName": document.getElementById("fname").value,
        "medQuant": document.getElementById("fquant").value,
        "medClass": document.getElementById("fclass").value
    }

    document.getElementById("fname").value = "",
    document.getElementById("fquant").value = "",
    document.getElementById("fclass").value = "",

    meds.push(med);

    renderTable();
}

function renderTable() {
    let table = document.getElementById("dataTable")
    table.innerHTML = `<tr>
    <th>ID</th>
    <th>Medicamento</th>
    <th>Quantidade</th>
    <th>Classe de Medicamento</th>
    <th>Remover</th>
    </tr>`

    for (i = 0; i < meds.length; i++) {
        table.innerHTML = table.innerHTML + `<tr>
        <td> ${i} </td>
        <td> ${meds[i].medName} </td>
        <td> ${meds[i].medQuant} </td>
        <td> ${meds[i].medClass} </td>
        <td><img src="remove.png" width="25px" height="25px" onclick="removeMed(${i})"></td>
        </tr>`
    }
}

function removeMed(index) {
    meds.splice(index,1);
    renderTable();
}