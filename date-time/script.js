const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");

function dateAndTime() {
  const date = new Date();

  const hours = date.getHours() % 12 || 12;

  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  const ampm = date.getDate() < 12 ? "PM" : "AM";

  timeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
  dateElement.textContent = date.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
dateAndTime();
setInterval(dateAndTime, 1000);
