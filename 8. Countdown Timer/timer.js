let interval;

function startTimer() {
  clearInterval(interval);
  let min = parseInt(document.getElementById("minutes").value) || 0;
  let sec = parseInt(document.getElementById("seconds").value) || 0;
  let total = min * 60 + sec;

  interval = setInterval(() => {
    if (total <= 0) {
      clearInterval(interval);
      alert("Time's up!");
      document.getElementById("display").textContent = "00:00";
      return;
    }

    total--;
    let m = Math.floor(total / 60);
    let s = total % 60;
    document.getElementById("display").textContent =
      String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
  }, 1000);
}
