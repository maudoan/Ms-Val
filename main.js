// let btn1 = document.getElementById("btnNo");
function noHover(){
    document.getElementById("btnNo").value = "CÓ";

}
function out(){
    document.getElementById("btnNo").value = "KHÔNG";
}

function yesClick(){
  location.href = "love.html";
}
function NoClick(){
    alert(" Đừng dối lòng thế, hãy sống thật với bản thân đi!!!");
}
let hide = document.getElementsByClassName(".hide");
var run = function ()
{
    $("[data-form=typing]").removeClass("hide").t({
        speed: 50,                    
        pause_on_tab_switch: true,
        pause_on_click: true,
        beep: true,
        fin: function () { run(); }
    });
}
run();