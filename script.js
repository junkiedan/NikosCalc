document.getElementById("result").addEventListener("click", function(){
    var x = parseFloat(document.getElementById("xNum").value);
    var y = parseFloat(document.getElementById("yNum").value);
    var z = parseFloat(document.getElementById("zNum").value);
    var res = (100/x) + (100/y) + (100/z);
    // var fixedRes = parseFloat(Math.round(res * 100) / 100).toFixed(2);
    document.getElementById("resultText").innerHTML = res;
    // document.getElementById("test").innerHTML = res;
});

document.body.addEventListener("keypress", function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
        var x = parseFloat(document.getElementById("xNum").value);
        var y = parseFloat(document.getElementById("yNum").value);
        var z = parseFloat(document.getElementById("zNum").value);
        var res = (100/x) + (100/y) + (100/z);
        // var fixedRes = parseFloat(Math.round(res * 100) / 100).toFixed(2);
        document.getElementById("resultText").innerHTML = res;
        // document.getElementById("test").innerHTML = res;
    }
});
