//form validation for enquiry page
document.getElementById("enquiryForm")?.addEventListener("submit", function(e)){
    e.preventDefault();
    const name = document.getElementById("name").value;
    alert("Thank you" + name + "!Your enquiry was recieved. ");
    this.reset();
});