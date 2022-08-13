var searchInp = document.querySelector(".search-inp");
var searchsIcon = document.getElementById("searchs-icon");
var pokeNames = document.querySelectorAll(".poke-name");

searchInp.addEventListener("keyup", () => {
  if (searchInp.value == "") {
    searchsIcon.className = "bi bi-search navs-icon";
  } else {
    searchsIcon.className = "bi bi-x-lg navs-icon";
  }
});

searchsIcon.addEventListener("click", () => {
  searchInp.value = "";
  searchInp.focus();
  searchsIcon.className = "bi bi-search navs-icon";
  document.querySelector("title").textContent = "Anasayfa";

  pokeNames.forEach((pokeName) => {
    pokeName.parentElement.style.display = "block";
  });
});

searchInp.addEventListener("input", () => {
  if (searchInp.value == "") {
    document.querySelector("title").textContent = "Anasayfa";
  } else {
    document.querySelector("title").textContent = searchInp.value;
  }
  pokeNames.forEach((pokeName) => {
    pokeName.parentElement.style.display = "block";
    if (
      !pokeName.innerHTML.toLowerCase().includes(searchInp.value.toLowerCase())
    ) {
      pokeName.parentElement.style.display = "none";
    }
  });
});
