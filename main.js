
function zakladni_cena() {
    const vyber = document.querySelector("#vyber_krmiva").value;
    const hmotnost = parseInt(document.querySelector("#vaha").value);
    let zaklad = vyber * hmotnost;

    document.querySelector("#zakl_cena").value = zaklad;
}


function celkova_cena() {
    let zakladni = parseInt(document.querySelector("#zakl_cena").value)
    let total = zakladni

    if (document.querySelector("#bio").checked)
        total += zakladni * document.querySelector("#bio").value;
    if (document.querySelector("#premium").checked)
        total += zakladni * document.querySelector("#premium").value;
    if (document.querySelector("#nekvalita").checked)
        total -= zakladni * document.querySelector("#nekvalita").value;
    if (document.querySelector("#darkove").checked)
        total += parseInt(document.querySelector("#darkove").value);

    if (document.querySelector("#osobni").checked)
        total += parseInt(document.querySelector("#osobni").value);
    if (document.querySelector("#firemni").checked)
        total *= document.querySelector("#firemni").value;
    if (document.querySelector("#posta").checked)
        total += parseInt(document.querySelector("#posta").value);

    document.querySelector("#celk_cena").value = total.toFixed(0)
}


function kontrolni_cena() {
    let zadano = parseInt(document.querySelector("#odhad_cena").value);
    let celkova = parseInt(document.querySelector("#celk_cena").value);

    if (celkova <= zadano && celkova > 0)
        document.querySelector("#zaver").textContent = "Máš na to."
    else if (celkova > zadano)
        document.querySelector("#zaver").textContent = "Nemáš na to."
    else if (celkova = " " || celkova == 0)
        document.querySelector("#zaver").textContent = "Zadej částku a objednej zboží!"
    else
        document.querySelector("#zaver").textContent = "Zadej částku!"
}



$("#mail").keypress(function (event) {
    let znak = event.which;
    let overZnak = false;

    if (znak == 32) { overZnak = true; }
    else if (48 <= znak && znak <= 57) { overZnak = true; }
    else if (65 <= znak && znak <= 90) { overZnak = true; }
    else if (97 <= znak && znak <= 122) { overZnak = true; }
    return overZnak;
});

