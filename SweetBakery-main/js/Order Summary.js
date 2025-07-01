// Product Detail
document.getElementById("ProductName").innerText=localStorage.getItem("cakename");
document.getElementById("CakeType").innerText=localStorage.getItem("CakeType");
document.getElementById("CakeWeight").innerText=localStorage.getItem("Weight");
document.getElementById("Quantity").innerText=localStorage.getItem("ProductQuantity");


// Price Detail
document.getElementById("CakeWeightPrice").innerText=localStorage.getItem("Weight");
document.getElementById("WeightPrice").innerText=localStorage.getItem("WeightPrice");
document.getElementById("TotalQuantity").innerText=localStorage.getItem("ProductQuantity");
document.getElementById("SubTotal").innerText=localStorage.getItem("SubTotal");
document.getElementById("Total").innerText=localStorage.getItem("TotalPrice");