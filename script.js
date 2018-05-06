function openCity(cityName,elmnt,hex) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(cityName).style.display = "block";
    elmnt.style.backgroundColor = hex;


}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function check(form) { /*function to check userid & password*/
/*the following code checkes whether the entered userid and password are matching*/
    if(form.userid.value == "myuserid" && form.pswrd.value == "mypswrd") {
    window.open('target.html')/*opens the target page while Id & password matches*/
    }
    else {
    alert("Error Password or Username")/*displays error message*/
    }
}





