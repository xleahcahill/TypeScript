var i = 0, len;
displayTreatments(i);

function displayTreatments(i) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            viewFunction(this, i);
        }
    };
    xmlhttp.open("GET", "treatments.xml", true);
    xmlhttp.send();
}

function viewFunction(xml, i) {
    var xmlDoc = xml.responseXML;
    var notetext = xmlDoc.getElementsByTagName("treatments");
    len = notetext.length;
    document.getElementById("showT").innerHTML =
        "Treatment: " +
        notetext[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
        "<br>Brief Description: " +
        notetext[i].getElementsByTagName("description")[0].childNodes[0].nodeValue +
        "<br>Price: " +
        notetext[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
        "<br><br><br>Page:" +
        notetext[i].getElementsByTagName("pagenum")[0].childNodes[0].nodeValue;
}

function forward() {
    if (i < len - 1) {
        i++;
        displayTreatments(i);
    }
}

function back() {
    if (i > 0) {
        i--;
        displayTreatments(i);
    }
}