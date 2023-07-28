let notification;

function createNotification() {
  const notificationText = prompt("");
  if (!notificationText) return;

  const position = prompt(
    "مکان نمایش نوتیفیکیشن را انتخاب کنید (right یا bottom):"
  );
  if (!position || (position !== "right" && position !== "bottom")) return;

  if (notification) {
    document.body.removeChild(notification);
  }

  notification = document.getElementById("notificationContainer");
  notification.textContent = notificationText;
  notification.className = "notification";
  notification.classList.add(position);

  const notificationContainer = document.getElementById(
    "notificationContainer"
  );
  notificationContainer.appendChild(notification);

  setTimeout(() => {
    document.body.removeChild(notification);
  }, 5000);
}

function closeNotification() {
  if (notification) {
    document.body.removeChild(notification);
  }
}

// function changePosition() {
//   if (notification) {
//     const position = prompt(
//       "مکان نمایش نوتیفیکیشن را تغییر دهید (right یا bottom):"
//     );
//     if (!position || (position !== "right" && position !== "bottom")) return;

//     notification.classList.remove("right", "bottom");
//     notification.classList.add(position);
//   }
// }

createNotification();
