const notificationBtn = document.querySelector(".btn");
const notification = document.getElementById("notification");
const container = document.querySelector(".container");

notificationBtn.addEventListener("click", function () {
  const x = parseInt(prompt("مختصات افقی (x) را از 0 تا300  وارد کنید:"));
  const y = parseInt(prompt("مختصات عمودی (y) را از 0 تا 300 وارد کنید:"));
  const message = prompt("متن نوتیفیکیشن را وارد کنید:");

  if (x >= 0 && x <= 300 && y >= 0 && y <= 300) {
    notification.style.top = `${y}px`; // تغییر اندازه به 300px
    notification.style.left = `${x}px`; // تغییر اندازه به 300px
    notification.innerText = message;
    notification.style.visibility = "visible";

    setTimeout(function () {
      notification.style.visibility = "hidden";
    }, 5000);
  } else {
    alert("مختصات وارد شده باید بین 0 تا 300 باشد."); // تغییر اندازه به 299
  }
});
