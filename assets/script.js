const notifications = document.querySelector(".notifications");
const countNotification = document.querySelector(".notifications__count");

const readAllMark = () => {
  const items = document.querySelectorAll(".not-read");
  items.forEach((el) => {
    el.classList.remove("not-read");
  });
  countNotification.innerHTML = 0;
};

if (notifications) {
  notifications.addEventListener("click", (e) => {
    let target = e.target;
    if (target && target.closest(".notification-item.not-read")) {
      target.closest(".notification-item").classList.remove("not-read");
      countNotification.innerHTML = parseInt(countNotification.innerHTML - 1);
    }
    if (target && target.closest(".notifications__link")) {
      readAllMark();
    }
  });
}
