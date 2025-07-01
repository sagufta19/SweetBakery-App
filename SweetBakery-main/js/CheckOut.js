console.log("hello");

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let FirstName = document.getElementById("FirstName").value;
    let LastName = document.getElementById("LastName").value;
    let MobileNumber = document.getElementById("MobileNumber").value;
    let PinCode = document.getElementById("PinCode").value;
    let Address = document.getElementById("Adress").value; 
    let EmailId = document.getElementById("EmailId").value;

    
    localStorage.setItem("FirstName", FirstName);
    localStorage.setItem("LastName", LastName);
    localStorage.setItem("MobileNumber", MobileNumber);
    localStorage.setItem("PinCode", PinCode);
    localStorage.setItem("Adress", Address);
    localStorage.setItem("EmailId", EmailId);

    let params = {
        first_name: FirstName,
        last_name: LastName,
        mobile_number: MobileNumber,
        pin_code: PinCode,
        address: Address,
        email: EmailId
    };

    emailjs.send("service_7pe0j87", "template_on2feqt", params)
    .then(function(response) {
        console.log("SUCCESS!", response.status, response.text);
        window.location.href = "../html/OrderConfirm.html";
    }, function(error) {
        console.error("FAILED...", error);
        alert("Failed to send email. Please try again.");
    });
});

 
