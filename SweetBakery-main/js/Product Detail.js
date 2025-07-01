console.log("hello welcome to sweet bakery")

let price = 400;
let add;
add = parseFloat(price) + 0;
document.getElementById("price").innerText = add;

function WeightChange() {
    let kg = document.getElementById("kg");
    let kg1 = document.getElementById("kg1");
    let kg2 = document.getElementById("kg2");
    let kg3 = document.getElementById("kg3");
    let kg4 = document.getElementById("kg4");
    let WeightIdentifier;
    let WeightPrice;

    if (kg.checked == true) {
        
        WeightIdentifier="0.5 KG";
        WeightPrice="Default Weight"

        price = 400;
        valueCount = 1;
        document.getElementById("quantity").value = valueCount;
        add = parseFloat(price) + 0;
        document.getElementById("price").innerText = add;

        localStorage.removeItem("Weight");
        localStorage.removeItem("WeightPrice");
        localStorage.setItem("Weight", WeightIdentifier);
        localStorage.setItem("WeightPrice",WeightPrice);
        localStorage.setItem("SubTotal",add);
        PriceCalculation();
    }
    else if (kg1.checked == true) {

         WeightIdentifier=" 1 KG";
         WeightPrice="₹ 200";

        price = 400;
        valueCount = 1;
        document.getElementById("quantity").value = valueCount;
        add = parseFloat(price) + 200;
        console.log(typeof (price));
        document.getElementById("price").innerText = add;
        console.log("b1");
        
        localStorage.removeItem("Weight");
        localStorage.removeItem("WeightPrice");
        localStorage.setItem("Weight", WeightIdentifier);
        localStorage.setItem("WeightPrice",WeightPrice);
        localStorage.setItem("SubTotal",add);
        PriceCalculation();

    }
    else if (kg2.checked == true) {

         WeightIdentifier=" 2 KG";
         WeightPrice="₹ 400";
        price = 400;
        valueCount = 1;
        document.getElementById("quantity").value = valueCount;
        add = parseFloat(price) + 400;
        document.getElementById("price").innerText = add;
        localStorage.setItem("SubTotal",add);
        
        localStorage.removeItem("Weight");
        localStorage.removeItem("WeightPrice");
        localStorage.setItem("Weight", WeightIdentifier);
        localStorage.setItem("WeightPrice",WeightPrice);

        PriceCalculation();
    }
    else if (kg3.checked == true) {

         WeightIdentifier=" 3 KG";
         WeightPrice="₹ 600";
        price = 400;
        valueCount = 1;
        document.getElementById("quantity").value = valueCount;
        add = parseFloat(price) + 600;
        document.getElementById("price").innerText = add;
        
        localStorage.removeItem("Weight");
        localStorage.removeItem("WeightPrice");
        localStorage.setItem("Weight", WeightIdentifier);
        localStorage.setItem("WeightPrice",WeightPrice);
        localStorage.setItem("SubTotal",add);
        PriceCalculation();
    }
    else if (kg4.checked == true) {

        WeightIdentifier=" 4 KG";
        WeightPrice="₹ 800";
        price = 400;
        valueCount = 1;
        document.getElementById("quantity").value = valueCount;
        add = parseFloat(price) + 800;
        document.getElementById("price").innerText = add;
       
        localStorage.removeItem("Weight");
        localStorage.removeItem("WeightPrice");
        localStorage.setItem("Weight", WeightIdentifier);
        localStorage.setItem("WeightPrice",WeightPrice);
        localStorage.setItem("SubTotal",add);
        PriceCalculation();
    }
    else {
        return false;

    }
}


document.querySelector(".minusBtn").setAttribute("disabled", "disabled")

let valueCount;

document.querySelector(".plusBtn").addEventListener("click", function () {
    valueCount = document.getElementById("quantity").value;
    valueCount++;

    if (valueCount > 10) {

        alert("Quantity more than 10 is not allowed");
        valueCount--;
    }
    document.getElementById("quantity").value = valueCount;
    if (valueCount > 1) {
        document.querySelector(".minusBtn").removeAttribute("disabled");
        document.querySelector(".minusBtn").classList.remove("disabled");

    }
    PriceCalculation();
});

document.querySelector(".minusBtn").addEventListener("click", function () { 
    valueCount = document.getElementById("quantity").value;
    valueCount--;

    if (valueCount < 1) {
        alert("qunatity less than 1 is not allowed");
        valueCount++;
    }
    document.getElementById("quantity").value = valueCount;

    if (valueCount == 1) {
        document.querySelector(".minusBtn").setAttribute("disabled", "disabled");

    }
    PriceCalculation();
});


function PriceCalculation() {

    let total = valueCount * add;                            
    console.log(valueCount);
    price = document.getElementById("price").innerText = total;     
    localStorage.removeItem("TotalPrice");                            
    localStorage.setItem("TotalPrice", price);                         

    localStorage.removeItem("ProductQuantity");                        
    localStorage.setItem("ProductQuantity", valueCount);               
}


localStorage.setItem("CakeType", "With Egg");
function EglessOrNot() {
    let VegNonveg = document.getElementById("eggless")
    if (VegNonveg.checked == true) {
        localStorage.removeItem("CakeType");
        localStorage.setItem("CakeType", "Egless Cake");
    }
    else {
        localStorage.setItem("CakeType", "With Egg");
    }

}

function FormValidation() {
    let kg = document.getElementById("kg");
    let kg1 = document.getElementById("kg1");
    let kg2 = document.getElementById("kg2");
    let kg3 = document.getElementById("kg3");
    let kg4 = document.getElementById("kg4");

    if(kg.checked == true || kg1.checked==true || kg2.checked==true || kg3.checked==true || kg4.checked==true){
       
       window.open("../html/Order Summary.html");
        
        return true;
    }
    else {
        alert("Please Select Cake Weight Option")
        document.getElementById("WeightErrorMessage").innerHTML="Please Select Any one Option"
        return false;
    }


}


let count1 = localStorage.getItem("flag1");
let count2 = localStorage.getItem("flag2");
let count3 = localStorage.getItem("flag3");

let srcval;
if (count1 == "true") {
    document.querySelector("div.productid p").innerHTML = localStorage.getItem("cakename");
    srcval = localStorage.getItem("cakeimg1");
    document.getElementById("ProductImage").setAttribute("src", srcval)

} else if (count2 == "true") {
    document.querySelector("div.productid p").innerHTML = localStorage.getItem("cakename");
    srcval = localStorage.getItem("cakeimg2");
    document.getElementById("ProductImage").setAttribute("src", srcval)
} else if (count3 == "true") {
    document.querySelector("div.productid p").innerHTML = localStorage.getItem("cakename");
    srcval = localStorage.getItem("cakeimg3");
    document.getElementById("ProductImage").setAttribute("src", srcval)
}
else {
    console.log("hello");
}



