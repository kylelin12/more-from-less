var modal = document.getElementById("mydog");
var modalbtn = document.getElementById("dog-btn");
var modalspan = document.getElementsByClassName("close")[0];
var modalnew = document.getElementById("newpic");

var modalDisplay = function () {
    modal.style.display = "block";
};

var modalHide = function (e) {
    if (e.target == modal || e.target == modalspan) {
        modalReset();
        modal.style.display = "none";
    }
};

var modalReset = function () {
    console.log($("#dogimg"));
    $("#dogpic").attr("src", "");
    $("#dogpic").attr("src", "http://thecatapi.com/api/images/get?format=src&type=jpg&size=small&" + new Date().getTime());
};

modalbtn.addEventListener("click", modalDisplay);
modalspan.addEventListener("click", modalHide);
window.addEventListener("click", modalHide);
modalnew.addEventListener("click", modalReset);

var topbtn = document.getElementById("topbtn");

var toPageTop = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

topbtn.addEventListener("click", toPageTop);