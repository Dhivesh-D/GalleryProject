document.querySelectorAll('figure').forEach(fig => {
  fig.onmousedown = function(event) {
      let shiftX = event.clientX - fig.getBoundingClientRect().left;
      let shiftY = event.clientY - fig.getBoundingClientRect().top;

      fig.style.position = 'absolute';
      fig.style.zIndex = 1000;
      document.body.append(fig);

      function moveAt(pageX, pageY) {
        fig.style.left = pageX - shiftX + 'px';
        fig.style.top = pageY - shiftY + 'px';
      }

      moveAt(event.pageX, event.pageY);

      function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
      }

      document.addEventListener('mousemove', onMouseMove);

      fig.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          fig.onmouseup = null;
      };
  };

  fig.ondragstart = function() {
      return false;
  };
});
document.addEventListener('mouseup', function() {
  document.querySelectorAll('figure').forEach(fig => {
      fig.onmouseup && fig.onmouseup();
  });
});

//Code for making the images scatter
window.addEventListener("load", () => {

  const container = document.querySelector(".drag");
  const photos = document.querySelectorAll("figure");

  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  photos.forEach((photo, index) => {

    const photoWidth = photo.offsetWidth;
    const photoHeight = photo.offsetHeight;

    
    const padding = 60;

    const maxX = containerWidth - photoWidth - padding;
    const maxY = containerHeight - photoHeight - padding;

    
    const x = Math.random() * maxX + padding / 2;
    const y = Math.random() * maxY + padding / 2;

    
    setTimeout(() => {

      photo.style.left = `${x}px`;
      photo.style.top = `${y}px`;
      photo.style.transition = "left 0.8s ease-out, top 0.8s ease-out";

    }, index * 120);

  });

});

document.addEventListener("DOMContentLoaded", () => {

  const openBtn = document.getElementById("openCardBtn");
  const card = document.getElementById("greetingCard");
  const closeBtn = document.getElementById("closeCard");

  // Safety check
  if (!openBtn || !card || !closeBtn) {
    console.error("Card elements not found");
    return;
  }

  // Open Card
  openBtn.addEventListener("click", () => {

    // Make visible
    card.classList.remove("hidden");

    // Move to center
    setTimeout(() => {
      card.classList.add("centered");
    }, 50);

    // Open animation
    setTimeout(() => {
      card.classList.add("open");
    }, 850);

  });

  // Close Card
  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    // Close animation
    card.classList.remove("open");

    // Move away
    setTimeout(() => {
      card.classList.remove("centered");
    }, 400);

    // Hide
    setTimeout(() => {
      card.classList.add("hidden");
    }, 1000);

  });

});

const noBtn = document.getElementById("noBtn");
const card = document.getElementById("greetingCard");

if (noBtn) {

  noBtn.addEventListener("mouseenter", () => {
    moveButton();
  });

  noBtn.addEventListener("mouseover", () => {
    moveButton();
  });

}

function moveButton() {

  const cardRect = card.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  // Max positions inside card
  const maxX = cardRect.width - btnRect.width - 20;
  const maxY = cardRect.height - btnRect.height - 20;

  // Random position
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  // Move button
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
  noBtn.style.transition = "all 0.2s ease";

}


const yesBtn = document.querySelector(".btn-success");
const yesModal = document.getElementById("yesModal");
const closeYesModal = document.getElementById("closeYesModal");

if (yesBtn && yesModal && closeYesModal) {

  yesBtn.addEventListener("click", () => {
    yesModal.classList.remove("hidden");
  });

  closeYesModal.addEventListener("click", () => {
    yesModal.classList.add("hidden");
  });

}

const heartsContainer = document.getElementById("heartsContainer");
const loveMusic = document.getElementById("loveMusic");

let heartsInterval;

// Create Hearts
function startHearts() {

  heartsInterval = setInterval(() => {

    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    // Random position
    heart.style.left = Math.random() * 100 + "%";

    // Random size
    heart.style.fontSize = (16 + Math.random() * 20) + "px";

    heartsContainer.appendChild(heart);

    // Remove after animation
    setTimeout(() => {
      heart.remove();
    }, 4000);

  }, 300);

}

// Stop Hearts
function stopHearts() {
  clearInterval(heartsInterval);
  heartsContainer.innerHTML = "";
}

const whatsappNumber = "9080238963";
// Update YES button click
yesBtn.addEventListener("click", () => {

  // Show modal
  yesModal.classList.remove("hidden");

  // Start hearts
  startHearts();

  // Play music
  loveMusic.currentTime = 0;
  loveMusic.play().catch(() => {});

  // WhatsApp message
  const message = encodeURIComponent(
    "She said YES 😍💖🎉\nBest Valentine ever 💌"
  );

  //sendYesEmail()

});



// Update modal close
closeYesModal.addEventListener("click", () => {

  yesModal.classList.add("hidden");

  // Stop effects
  stopHearts();
  loveMusic.pause();

});

(function(){
  emailjs.init("FAKIXmTcMBn8g5W6G");
})();

function sendYesEmail() {

  const templateParams = {
    message: "She said YES 😍💖🎉",
    time: new Date().toLocaleString()
  };

  emailjs.send(
    "service_ubtbvb8",
    "template_fnw2yy9",
    templateParams
  )
  .then(() => {
    console.log("Email sent ❤️");
  })
  .catch((err) => {
    console.error("Email failed:", err);
  });

}

const openBtn = document.getElementById("openCardBtn");

if (openBtn) {

  openBtn.addEventListener("mouseenter", () => {
    createSparkles(openBtn);
  });

}

function createSparkles(btn) {

  for (let i = 0; i < 6; i++) {

    const sparkle = document.createElement("span");
    sparkle.classList.add("sparkle");
    sparkle.innerHTML = "✨";

    // Random position
    sparkle.style.left = Math.random() * 100 + "%";
    sparkle.style.top = Math.random() * 100 + "%";

    btn.appendChild(sparkle);

    // Animate
    sparkle.animate([
      { transform: "translateY(0) scale(0.5)", opacity: 0 },
      { transform: "translateY(-15px) scale(1.2)", opacity: 1 },
      { transform: "translateY(-25px) scale(0.8)", opacity: 0 }
    ], {
      duration: 800,
      easing: "ease-out"
    });

    // Cleanup
    setTimeout(() => sparkle.remove(), 800);

  }

}

