document
  .getElementById("togglePanelButton")
  .addEventListener("click", function () {
    const panel = document.getElementById("filterPanel");
    panel.classList.toggle("hidden");
  });

document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", function () {
    const content = this.nextElementSibling;
    const icon = this.querySelector(".accordion-icon");
    const title = this.querySelector(".accordion-header-title");

    if (content.style.display === "block") {
      content.style.display = "none";
      icon.src = "assets/down-arrow.svg";
      title.classList.remove("open");
    } else {
      content.style.display = "block";
      icon.src = "assets/up-arrow.svg";
      title.classList.add("open");
    }
  });
});

document.querySelectorAll(".filter-list").forEach((list) => {
  const items = list.querySelectorAll("li");
  const button = list.nextElementSibling;

  if (items.length > 5) {
    for (let i = 5; i < items.length; i++) {
      items[i].classList.add("hidden");
    }
    button.style.display = "inline";
  } else {
    button.style.display = "none";
  }
});

document.querySelectorAll(".view-all-button").forEach((button) => {
  button.addEventListener("click", function () {
    const hiddenItems = this.previousElementSibling.querySelectorAll(".hidden");
    const isExpanding =
      hiddenItems[0].style.display === "none" || !hiddenItems[0].style.display;

    hiddenItems.forEach((item) => {
      item.style.display = isExpanding ? "list-item" : "none";
    });

    this.textContent = isExpanding ? "Less" : "View all...";
  });
});

document
  .getElementById("clearAllButton")
  .addEventListener("click", function () {
    document
      .querySelectorAll('.filter-list input[type="checkbox"]')
      .forEach((checkbox) => {
        checkbox.checked = false;
      });
  });

document
  .getElementById("saveViewButton")
  .addEventListener("click", function () {
    const selectedFilters = [];
    document
      .querySelectorAll('.filter-list input[type="checkbox"]:checked')
      .forEach((checkbox) => {
        selectedFilters.push(checkbox.parentElement.textContent.trim());
      });
    console.log("Selected filters:", selectedFilters);
    document.getElementById("filterPanel").classList.add("hidden");
  });
