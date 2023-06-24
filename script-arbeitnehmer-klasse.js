class Arbeitnehmer {
    // Setup the object
    constructor(vorname, nachname, username, email, passwort) {

        console.log("Der Mitarbeiter wurde erstellt");

        this.vorname = vorname
        this.nachname = nachname
        this.username = username
        this.email = email
        this.passwort = passwort
    }
}

function neuerArbeitnehmer() {

    let myArbeitnehmer1 = new Arbeitnehmer(document.getElementById("Vorname").value, document.getElementById("Nachname").value, document.getElementById("Username").value, document.getElementById("E-Mail").value, document.getElementById("Passwort").value);
    console.log(myArbeitnehmer1);
    window.location.replace("index-user-profile-arbeitnehmer.html");
    document.getElementById("profilVorname").innerHTML = myArbeitnehmer1.vorname;
}

ausgabeAttribute() {
    const ausgabe = `Vorname: ${this.vorname}<br>Nachname: ${this.nachname}`;
    return ausgabe;
  }