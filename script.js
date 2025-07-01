// 1. Welcome alert on load
window.onload = function () {
  alert("Welcome to MakeMyTrip Clone!");
  updateDateTime(); // call time once on load
};

// 2. Live date and time update every second
function updateDateTime() {
  const now = new Date();
  const dtString = now.toLocaleString();
  document.getElementById("datetime").textContent = "Current Date & Time: " + dtString;
}
setInterval(updateDateTime, 1000);

// 3. Dark mode toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
}
