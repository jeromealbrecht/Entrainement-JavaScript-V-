function validate() {

  //créer les variables name, email et age
  let name = document.getElementById("name");
  let mail = document.getElementById("mail");
  let age = document.getElementById("age");

  //créer la condition name avec la regex
  if (name.value) {
    const regexName = /^[a-zA-Z-]+$/;
    let namereg = regexName.test(name.value);

    if (namereg != true) {
      document.getElementById("messageName").innerHTML = "les caractères spéciaux ne sont pas acceptés";
      name.style.borderColor = "red";
    } else {
      document.getElementById("messageName").innerHTML = "ok";
      name.style.borderColor = "green";
    }
  } else {
    document.getElementById("messageName").innerHTML = "-";
  }

  //créer la condition email avec la regex
  if (mail.value) {
    const regexMail = /^[\w\.-]+@[a-zA-Z]+\.[a-zA-Z]{2,5}$/;
    let mailreg = regexMail.test(mail.value);

    if (mailreg != true) {
      document.getElementById("messageMail").innerHTML = "certains caractères sont interdits";
      mail.style.borderColor = "red";
    } else {
      document.getElementById("messageMail").innerHTML = "ok";
      mail.style.borderColor = "green";
    }
  } else {
    document.getElementById("messageMail").innerHTML = "-";
  }

  //créer la condition age avec la regex
  if (age.value) {
    const regexAge = /^\d{1,3}$/;
    let agereg = regexAge.test(age.value);

    if (agereg != true) {
      document.getElementById("messageAge").innerHTML = "certains caractères sont interdits";
      age.style.borderColor = "red";
    } else {
      document.getElementById("messageAge").innerHTML = "ok";
      age.style.borderColor = "green";
    }
  } else {
    document.getElementById("messageAge").innerHTML = "-";
  }

  return true;
}