function onload(){
    document.getElementById("congraduation").innerHTML = "Congratulations "+ localStorage.getItem('username') +"! You Guessed the correct number in " + localStorage.getItem('cnt') + " question(s)!";
    const Username = localStorage.getItem('username');
    const Score =  localStorage.getItem('cnt');
    
    const data = {Score, Username};
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };
    fetch('/api', options);

}  