function cenaF() {
    mn = document.form.kg.value;
    k = eval(document.form.krmivo.value);
    c = k * mn;
    document.form.cena.value = c;
}
function celkF() {
    krm = eval(document.form.krmivo.value);
    mno = document.form.kg.value;
    zakKrm = krm * mno;
 
    c111 = 0; c211 = 0; c311 = 0; c411 = 0;
    if (document.form.bio.checked) {
        c111 = zakKrm * eval(document.form.bio.value) / 100;
    }
    if (document.form.prem.checked) {
        c211 = zakKrm * eval(document.form.prem.value) / 100;
    }
    if (document.form.ch.checked) {
        c311 = zakKrm * eval(document.form.ch.value) / 100;
    }
    if (document.form.d.checked) {
        c411 = eval(document.form.d.value);
    }
    v1 = zakKrm + c111 + c211 + c311 + c411;

    d111 = 0; d211 = 0; d311 = 0;
    if (document.form.dopr[0].checked) {
        d111 = 0;
    }
    if (document.form.dopr[1].checked) {
        d211 = v1 * eval(document.form.dopr[1].value) / 100;
    }
    if (document.form.dopr[2].checked) {
        d311 = eval(document.form.dopr[2].value);
    }
    v2 = d111 + d211 + d311;
    v = v1 + v2;
    document.form.celkem.value = v;
}
function okF() {
    if (parseFloat(document.form.mamPen.value) >= v) {
        document.form.mamPen.value = "Mate dost penez";
    } else {
        document.form.mamPen.value = "Mate malo penez";
    }
}

function emailKontrolaF(stringVstup) {
    znaky = /^[0-9a-zA-Z]+$/;
    if (znaky.test(stringVstup)) {
        alert('Email v poradku');
    } else {
        alert('Spatny znak - zadej email znovu');
    }
}