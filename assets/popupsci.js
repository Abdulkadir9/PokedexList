var pokeDetailsDiv = document.querySelector(".poke-details-div");
var pokeDetailsCon = document.querySelector(".poke-details-con");
var pokeSelfB = document.querySelector(".poke-self-b");
var pokePropB = document.querySelector(".poke-prop-b");

var pokeNameB = document.querySelector(".poke-name-b");
var pokeImgB = document.querySelector(".poke-img-b");

var navsCon = document.querySelector(".navs-con");
setTimeout(() => {
  navsCon.style.transform = "translateY(0vw)";
}, 100);

var chardsCon = document.querySelectorAll(".chards-con");
chardsCon.forEach((p) => {
  setTimeout(() => {
    p.style.transform = "translateY(0px)";
    p.style.opacity = "1";
  }, 200);
  p.addEventListener("mouseenter", () => {
    p.style.transform = "scale(1.15)";
    p.style.zIndex = "3";
  });
  p.addEventListener("mouseleave", () => {
    p.style.transform = "scale(1)";
    p.style.zIndex = "0";
  });
  p.addEventListener("click", () => {
    console.log(p);

    var pokeName = p.querySelector(".poke-name").textContent;
    var pokeImg = p.querySelector(".poke-img").src;

    pokeNameB.innerHTML = pokeName;
    pokeImgB.src = pokeImg;

    console.log(pokeName);
    console.log(pokeImg);
    pokeDetailsDiv.style.display = "block";
    setTimeout(() => {
      pokeDetailsCon.style.opacity = "1";
    }, 180);
    setTimeout(() => {
      pokeSelfB.style.left = "10vw";
      pokeSelfB.style.opacity = "1";
    }, 400);
    setTimeout(() => {
      pokePropB.style.top = "50px";
      pokePropB.style.opacity = "1";
    }, 480);

    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 27) {
        popupKapat();
      }
    });
  });
});

pokeDetailsDiv.addEventListener("click", (e) => {
  if (
    !e.composedPath().includes(pokeSelfB) &&
    !e.composedPath().includes(pokePropB)
  ) {
    popupKapat();
  }
});

function popupKapat() {
  pokeDetailsDiv.style.display = "block";
  setTimeout(() => {
    pokePropB.style.top = "-2400px";
    pokePropB.style.opacity = "0";
  }, 50);
  setTimeout(() => {
    pokeSelfB.style.left = "-40vw";
    pokeSelfB.style.opacity = "0";
  }, 300);
  setTimeout(() => {
    pokeDetailsCon.style.opacity = "0";
  }, 700);
  setTimeout(() => {
    pokeDetailsDiv.style.display = "none";
  }, 750);
}
