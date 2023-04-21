function generate() {
    console.log("clicked");
    let num1 = document.getElementById("minwert").value;
    let num2 = document.getElementById("maxwert").value;

    console.log(num1 + " : " + num2)

    let amountofrandomnums = parseInt(num2) - parseInt(num1) + 1;

    let randomnum = Math.floor(Math.random() * amountofrandomnums) + parseInt(num1);

    document.getElementById("randomnumausgabe").innerHTML = randomnum;
}