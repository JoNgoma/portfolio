const btns = document.querySelector("#div-btn");

btns.addEventListener("click", (e) => {
  try {
    e.preventDefault();
    const btnSelect = e.target.id;
    switch (btnSelect) {
      case "btnContacts":
        location.replace("src/html/contacts.html");
        break;
      case "btnProject":
        location.replace("src/html/projets.html");
        break;
      case "btnCv":
        location.replace("src/html/cv.html");
        break;
    }
  } catch (error) {}
});
