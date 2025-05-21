var numdrum = document.querySelectorAll(".drum").length;

for (var i = 0; i < numdrum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        this.style.color = "white"
    });
}
