const elements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elements.forEach((el) => observer.observe(el));


let aaa=document.querySelector(".aaa");
let par=document.querySelector(".fa-bars");

par.addEventListener("click",function(){
  aaa.classList.toggle("aaa")
})
function sendToWhatsApp() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  var myNumber = "201211077335 ";

  var url = "https://wa.me/" + myNumber + "?text="
    + "Name: " + name + "%0a"
    + "Phone: " + phone + "%0a"
    + "Message: " + message;

  window.open(url, "_blank");
}