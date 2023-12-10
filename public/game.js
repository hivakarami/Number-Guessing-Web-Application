
function onload()
{
    //*
    if(localStorage.getItem('type') == 0)
    {
        if(localStorage.getItem('num') > localStorage.getItem('guss'))
            document.getElementById("answer").innerHTML = "The number is greater than " + localStorage.getItem('guss');
        else    
            document.getElementById("answer").innerHTML = "The number is not greater than " + localStorage.getItem('guss');
    }
    else if(localStorage.getItem('type') == 1)
    {
        if(localStorage.getItem('num') < localStorage.getItem('guss'))
            document.getElementById("answer").innerHTML = "The number is less than " + localStorage.getItem('guss');
        else    
            document.getElementById("answer").innerHTML = "The number is not less than " + localStorage.getItem('guss');

    }
    else if(localStorage.getItem('type') == 2)
    {
        
        if(localStorage.getItem('num') != localStorage.getItem('guss'))
            document.getElementById("answer").innerHTML = "Incorrect!";
        else    
        window.location.href = "endgame.html";
    }    
    //*/

}
function set_question_type(type){
    localStorage.setItem('type', type);
}