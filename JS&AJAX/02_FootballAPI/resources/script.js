let urlTeams = "https://api.football-data.org/v2/competitions/2002/teams";

fetch(urlTeams, {
    method: "GET",
    headers: {
        "x-auth-token": "ff7827f5d19145c2961ff978a4f1f2fd"
    }
})
    .then(response => response.json())
    .then(function (data) {
        let html = "";
        data.teams.forEach(element => {
            html += "<li><img src = '" + element.crestUrl + "'/>" + element.name + "</li>";
        });
        document.getElementById("teams").innerHTML = html;
    })