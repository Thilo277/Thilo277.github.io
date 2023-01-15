/* var selected; */ // not needed anymore because the selected customer gets stored in localStorage, to prevent resetting variable when loading main.html
var back = 0; // Back button, warn-variable in case of misclick
var hide = 0; // Hide/Export button, warn-variable in case of misclick
const firmen = ["Firma1", "Firma2", "Firma3", "Firma4"]; // Customers Array
const text = ["Text1", "Text2", "Text3", "Text4", "Text5", "Text6", "Text7", "Text8", "Text9"]; // First Text array
const text2 = ["Text1-2", "Text2-2", "Text3-2", "Text4-2", "Text5-2", "Text6-2", "Text7-2", "Text8-2", "Text9-2"]; // Second Text array

var num = 1.0; // Number

function start() {
    var selected = customerselector.selectedIndex; // look up which customer is selected
    localStorage.setItem("selected", selected); // Write to local storage
    console.log('Ausgewählte Firma: ' + firmen[selected]); // Write selected customer to log
}

function addrow1(number) {
    tbody.innerHTML += `
    <td>${num.toFixed(1)}</td>
    <td><input type="date"></td>
    <td><textarea>${text[number]}</textarea></td>
    <td><textarea></textarea></td>
    <td><input type="checkbox"></td>
    <td id="id${num.toFixed(1)}"><input onclick="makered('id${num.toFixed(1)}')" type="radio" name="class${num.toFixed(1)}"><input onclick="makeyellow('id${num.toFixed(1)}')" type="radio" name="class${num.toFixed(1)}"><input onclick="makegreen('id${num.toFixed(1)}')" type="radio" name="class${num.toFixed(1)}"></td>
    <td><textarea>${text2[number]}</textarea></td>
    <td><img id="image${num.toFixed(1)}" width="100%"><input id="fileinput" type="file" onchange="document.getElementById('image${num.toFixed(1)}').src = window.URL.createObjectURL(this.files[0])"></td>
    <td><input type="month"></td>
    <td><input type="date"><textarea></textarea></td>
    `; // add row to table
    num = num + 0.1; // count number up
}

function makered(id) {
    document.getElementById(id).style.backgroundColor = "red"; // function to make Priorität red
}

function makeyellow(id) {
    document.getElementById(id).style.backgroundColor = "yellow"; // function to make Priorität yellow
}

function makegreen(id) {
    document.getElementById(id).style.backgroundColor = "green"; // function to make Priorität green
}


function load() {
    console.log('Starting... Standby'); // initialize the table
    setTimeout(function () {
        var selected = localStorage.getItem("selected"); // get selected customer from localStorage
        customerlogo.innerHTML = '<h1>' + firmen[selected] + '</h1>'; // Write Customer on top, can be replaced with Adresse/Name etc., for that, edit the firmen array
        mtitle.innerHTML = firmen[selected] + ' - Ecochart - Einfaches Gefahrentabellen Tool'; // Edit the document title
        starting.innerHTML = ''; // remove the starting h1
        if(selected == null){
            alert('Error code -10, siehe log für mehr Informationen');
            console.error('Bitte führen sie dieses Programm über einen Server und nicht Lokal aus. Error Code -10'); // in case of lokal run
            console.error('Bitte führen sie dieses Programm über einen Server und nicht Lokal aus. Error Code -10');
            console.error('Bitte führen sie dieses Programm über einen Server und nicht Lokal aus. Error Code -10');
            console.error('Bitte führen sie dieses Programm über einen Server und nicht Lokal aus. Error Code -10'); 
            console.error('Bitte führen sie dieses Programm über einen Server und nicht Lokal aus. Error Code -10');             
            console.warn('Bitte führen sie dieses Programm über einen Server und nicht Lokal aus. Error Code -10');
            console.warn('Bitte führen sie dieses Programm über einen Server und nicht Lokal aus. Error Code -10');
            console.warn('Bitte führen sie dieses Programm über einen Server und nicht Lokal aus. Error Code -10');
            console.warn('Bitte führen sie dieses Programm über einen Server und nicht Lokal aus. Error Code -10');
            console.warn('Bitte führen sie dieses Programm über einen Server und nicht Lokal aus. Error Code -10');
            hbody.innerHTML = '';
            hbody.innerHTML = `<img src="pics/error.ico">
                                <h1 style="color:red; font-size:1000%">undefined</h1>
                                <h2 style="color:grey; font-size:500%">Error code -10, siehe log für mehr Informationen</h2>`;
            mtitle.innerHTML = 'Error code= -10'; // in case of lokal run
        }
        else {
            console.log('Started, have fun'); // in case of successful run
        }
    }, 1000);
    
}


function zuruck() {
    if (back == 0) {
        alert('Sind sie sicher, dass sie zurück zum Hauptmenü wollen? Alle nicht exportierten Änderungen gehen verlohren! Falls ja, nochmal auf zurück drücken.'); // go back, ask in case of misclick
        back++;
    }
    else if (back > 0) {
        back = 0;
        hbody.innerHTML = '<h1>Kehre Zurück...</h1>';
        setTimeout(function () { window.location.replace("index.html"); }, 500); // go back
    }

}

function hidebuttons() {
    if (hide == 0) {
        alert('Sind sie sicher, dass sie die Steuerflächen ausblenden und diese Tabelle Exportieren wollen? Diese werden erst in 1min wieder eingeblendet! Falls ja, nochmal auf Knöpfe ausblenden und Exportieren drücken.');
        hide++; // hide and export, ask in case of misclick
    }
    else if (hide > 0) {
        hide = 0;
        btns.innerHTML = '';
        print();
        setTimeout(function () {
            btns.innerHTML = `<button onclick="zuruck()">Zurück</button><button onclick="hidebuttons()">Knöpfe ausblenden und Exportieren</button>
            <br>
            <br>
            <br>
            <button onclick="addrow1(0)">Text1</button><button onclick="addrow1(2)">Text2</button><button onclick="addrow1(3)">Text3</button><button onclick="addrow1(4)">Text4</button>`;
        }, 60000); // go hide and export
    }

}


