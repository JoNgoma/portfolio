const mainForm = document.querySelector("#main_right");
let emailChecked

function validateEmail(email) {
  var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  return re.test(email);
}

function selectData(oneSelect, indexSelect) {
  if (oneSelect === "") {
    switch (indexSelect) {
      case 0:
        console.log("Veuillez saisir votre prénom");
        break;
      case 1:
        console.log("Veuillez saisir votre adresse mail");
        break;
      case 2:
        console.log("Veuillez saisir votre message");
        break;
      case 3:
        console.log("Veuillez saisir votre nom");
        break;
      case 4:
        console.log("Veuillez saisir l'objet de votre message");
        break;
    }
  } else {
    if (oneSelect !== "" && indexSelect === 1) {
      oneSelect = oneSelect.toLowerCase();
      emailChecked = validateEmail(oneSelect);
      console.log(`Etat email : ${emailChecked}`)
      if (!emailChecked) {
        console.log("Adresse mail incorrecte");
      }
    }
    if ((indexSelect === 4) && (emailChecked)) console.log("Envoie du fichier encours");
  }
}

mainForm.addEventListener("submit", (e) => {
  try {
    e.preventDefault();
    let fields = e.target.querySelectorAll(".field");
    for (let i = 0; i < 5; i++) {
      selectData(fields[i].value, i);
    }
  } catch (error) {}
});
