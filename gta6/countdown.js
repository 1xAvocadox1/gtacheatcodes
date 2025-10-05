const targetDate = new Date("May 26, 2026 00:00:00").getTime();

// Update countdown every second
const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display result
  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s " + "\nUntil Release Date!";

  // If countdown is over
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "Finding Cheats Now!";
  }
}, 1000);