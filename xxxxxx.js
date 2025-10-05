let x, y, correctAnswer;

// Generate random numbers and display the question
function generateQuestion() {
    x = Math.floor(Math.random() * 50) + 1; // 1–50
    y = Math.floor(Math.random() * 50) + 1; // 1–50
    correctAnswer = x + y;
    document.getElementById("question").textContent = 
    `To see email please solve: ${x} + ${y}`;
}

function revealEmail() {
    const email = "zxavocad0xz" + "@" + "gmail.com";
    document.getElementById("email").textContent = email;
    document.getElementById("email").style.display = "block";
    document.getElementById("captchaBox").style.display = "none";
  }

function checkCaptcha() {
    const answer = document.getElementById("captchaInput").value;
    if(parseInt(answer, 10) === correctAnswer) {
      //document.getElementById("email").style.display = "block";
      revealEmail()
    } else {
      alert("Wrong answer! Try again.");
      generateQuestion();
    }
  }

  generateQuestion();