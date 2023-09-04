var carList = [];


var onLoad = () => {
    loadData();
    createTable();
}

var postCar = () => {
    var carManufacturer = document.getElementById("carManufacturer").value;
    var carModel = document.getElementById("carModel").value;
    var yearManufacture = document.getElementById("yearManufacture").value;
    var carURL = document.getElementById("carURL").value;
    var ownedBY = document.getElementById("ownedBY").value;
    var sunRoof = document.getElementById("sunRoof").value;
    var monthPay = document.getElementById("monthPay").value;

    var data = new Object();
    data.carManufacturer = carManufacturer;
    data.carModel = carModel;
    data.yearManufacture = yearManufacture;
    data.carURL = carURL;
    data.ownedBY = ownedBY;
    data.sunRoof = sunRoof;
    data.monthPay = monthPay;

    carList.push(data);

    createTable();
    saveData();
    document.getElementById("carForm").reset();
}

var createTable = () => {
    var dataTable = document.getElementById("dataTable");
    var table = "";

    for (var index = 0; index < carList.length; index++) {
        table += `
        <tr>
            <td>${carList[index].carManufacturer}</td>
            <td>${carList[index].carModel}</td>
            <td>${carList[index].yearManufacture}</td>
            <td><img src ="${carList[index].carURL}"/></td>
            <td>${carList[index].ownedBY}</td>
            <td>${carList[index].sunRoof}</td>
            <td>${carList[index].monthPay}</td>
            <td><button onclick="removeCar (${index})">Del</button></td>
        </tr>
        `
    }

    dataTable.innerHTML = table;
    saveData();
}

var removeCar = (index) => {
    carList.splice(index, 1);
    saveData();
    createTable();
}

var clearTable = () => {
    document.getElementById("dataTable").innerHTML = "";
    carList = [];
    saveData();
}

const saveData = () => {
    localStorage.setItem("carsData", JSON.stringify(carList));
}
const loadData = () => {
    carList = JSON.parse(localStorage.getItem("carsData")) || [];
    console.log(carList);
}
