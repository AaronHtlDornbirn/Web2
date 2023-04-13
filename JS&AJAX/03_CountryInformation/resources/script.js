function registerEvents() {
    document.getElementById("searchfield").addEventListener("change", function (event) {
        loadCountry(event.target.value);
    })
}

urlCountry = "https://api.api-ninjas.com/v1/country?name="

function loadCountry(name) {
    fetch(urlCountry + name, {
        method: "GET",
        headers: {
            "X-Api-Key": "UKaHmfCPq4PfJkrTdXO7fQ==oJIkTNu1SLqx6738"
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            return showCountry(data);
        })
        .catch(function (err) {
            console.log(err);
        })
}

function showCountry(data) {
    let html = "";
    data.forEach(element => {
        html += "<div onClick='(\"" + element.name + "\")'>" + "Name: " + element.name + "</div>";
        html += "<div onClick='(\"" + element.capital + "\")'>" + "Capital: " + element.capital + "</div>";
        html += "<div onClick='(\"" + element.region + "\")'>" + "Region: " + element.region + "</div>";
        html += "<div onClick='(\"" + element.surface_area + "\")'>" + "Surfacearea: " + element.surface_area + " km²" + "</div>";
        html += "<div onClick='(\"" + element.population + "\")'>" + "Population: " + (element.population * 1000) + " People" + "</div>";
        html += "<div onClick='(\"" + element.unemployment + "\")'>" + "Unemployment: " + element.unemployment + " %" + "</div>";     
    });
    document.getElementById("list").innerHTML = html;
}

registerEvents();





