// alert("PIN is:" + num);

document.querySelector(".generate-pin").addEventListener("click", function() {
    var num = Math.floor(Math.random() * 10000);
    if (num < 10) {
        num = "000" + num;
    } else if (num < 100) {
        num = "00" + num;
    } else if (num < 1000) {
        num = "0" + num;
    }
    buttonAnimation();
    document.querySelector(".pin").innerHTML = num;
});

function buttonAnimation() {
    document.querySelector(".generate-pin").classList.add("pressed");
    setTimeout(function() {
        document.querySelector(".generate-pin").classList.remove("pressed");
    }, 200)
}