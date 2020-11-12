function validate() {

  let a = document.getElementById("pass1");
  let b = document.getElementById("pass2");

  document.getElementById("pass1").classList.remove("red","green");
  document.getElementById("pass2").classList.remove("red","green");

  if (a.value != b.value) {
      alert("Les mots de passe ne correspondent pas.");
      a.classList.add("red");
      b.classList.add("red");

      return false;
  } else {
      alert("Les mots de passe correspondent.");
      a.classList.add("green");
      b.classList.add("green");
      return true;
  }
}