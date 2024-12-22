const countDown = document.querySelector("#countdown");
const targetDate = new Date("2025-01-01");
function updateCountdown() {
  const Today = Date.now();
  let sub = targetDate - Today;
  const days = Math.floor(sub / (1000 * 60 * 60 * 24));
  const hours = Math.floor((sub % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((sub % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((sub % (1000 * 60)) / 1000);

  countDown.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  if (sub <= 0) {
    clearInterval(intervalId);
    countDown.textContent = "BKL GAAND MARA";
  }
}
const intervalId = setInterval(updateCountdown, 1000);
updateCountdown();
