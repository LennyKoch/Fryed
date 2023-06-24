function getInfo() {

  var vorname = document.getElementById("Vorname").value
  var nachname = document.getElementById("Nachname").value
  var username = document.getElementById("Username").value
  var email = document.getElementById("E-Mail").value
  var passwort = document.getElementById("Passwort").value
  var geburtstag = document.getElementById("Geburtstag").value
  var geschlechtMännlich = document.getElementById("Männlich").value
  var geschlechtWeiblich = document.getElementById("Weiblich").value
  var geschlechtDivers = document.getElementById("Divers").value


  console.log("the following datas where loaded succesfully " + vorname + nachname + username + email + passwort + geburtstag + geschlechtMännlich + geschlechtWeiblich + geschlechtDivers)

}