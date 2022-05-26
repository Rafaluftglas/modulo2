var g = 10
function clicar() {
    var v0 = document.getElementById("vel").value;
    var tempo = parseFloat(v0) / parseFloat(g);
    document.querySelector(".resultado").innerHTML = tempo;
}
function clicar2() {
    var v = document.getElementById("vell").value;
    var hmax = (v ** 2);
    var alturamax = parseFloat(hmax) / 20;
    document.querySelector(".resultadoo").innerHTML = alturamax;
}