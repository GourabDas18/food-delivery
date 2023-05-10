window.onload=()=>{
    AOS.init();
    let menu=false;
    document.getElementById("mobileMenubtn").onclick=(e)=>{
        switch (menu) {
            case false:
                menu=true;
                console.log(e.target)
                document.getElementById('mobilemenu').style.height = "30vw";
                document.getElementById('mobilemenu').style.padding = "3vw 0";
document.getElementById("mobileMenubtnOn").style.display="none";
document.getElementById("mobileMenubtnOff").style.display="block";
                break;
            case true:
                menu=false;
                document.getElementById('mobilemenu').style.height = "0vw";
                document.getElementById('mobilemenu').style.padding = "0";
                document.getElementById("mobileMenubtnOn").style.display="block";
                document.getElementById("mobileMenubtnOff").style.display="none";
                break;
            default:
                break;
        }
    }
}

