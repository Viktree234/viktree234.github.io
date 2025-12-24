/* 💌 Typed letter animation */
const text = `This year was better because of you.
Thank you for being my safe place,
my laughter, and my constant 🫶`;

let index = 0;
const speed = 40;
const messageEl = document.querySelector(".message");

messageEl.textContent = "";

function typeText() {
  if (index < text.length) {
    messageEl.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, speed);
  }
}

typeText();

/* 🎁 Memories + Confetti */
function toggleMemories() {
  const mem = document.getElementById("memories");
  mem.style.display = "block";
  launchConfetti();
}

/* 🌟 Confetti */
function launchConfetti() {
  for (let i = 0; i < 40; i++) {
    const conf = document.createElement("div");
    conf.style.position = "fixed";
    conf.style.width = "6px";
    conf.style.height = "6px";
    conf.style.background = ["#ffd700", "#ff4d4d", "#ffffff"][Math.floor(Math.random()*3)];
    conf.style.left = Math.random() * 100 + "vw";
    conf.style.top = "-10px";
    conf.style.zIndex = 3;
    conf.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
    document.body.appendChild(conf);

    setTimeout(() => conf.remove(), 4000);
  }
}

/* ❄️ Snow animation */
function createSnow() {
  const snow = document.createElement("div");
  snow.classList.add("snowflake");
  snow.textContent = "❄";
  snow.style.left = Math.random() * 100 + "vw";
  snow.style.fontSize = Math.random() * 10 + 10 + "px";
  snow.style.animationDuration = Math.random() * 5 + 5 + "s";

  document.body.appendChild(snow);

  setTimeout(() => snow.remove(), 10000);
}

setInterval(createSnow, 300);
