function onload()
{
    //*
    if(localStorage.getItem('type') == 0)
        document.getElementById("question").innerHTML = "Is the number greater than :";
    else if(localStorage.getItem('type') == 1)
        document.getElementById("question").innerHTML = "Is the number less than :";
    else    
        document.getElementById("question").innerHTML = "Ready! Guess the number";
    //*/

}

function set__user_answer(){

    Guss = document.getElementById("Guss").value;
    localStorage.setItem('guss', Guss);
    var c = parseInt(localStorage.getItem('cnt')) + 1;
    localStorage.setItem('cnt', c.toString());
    
}
