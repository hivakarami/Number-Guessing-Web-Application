
async function postJSON() {
   
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({a: 0}),
    };
    const response = await fetch('/scoreboard', options);
    const result = await response.json();
    console.log("Success:", result);
    arr = result.data;
    arr.sort(function(a, b){return a.Score - b.Score});
    arr.reverse();
    
    // 
    var table = document.getElementById("table");
    for(var i = 0; i < arr.length; i++){
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML =  (arr.length-i) + "";
        cell2.innerHTML = arr[i].Username;
        cell3.innerHTML = arr[i].Score;
      
    }
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML =  "<strong id='top'>Rank</strong>";
    cell2.innerHTML = "<strong id='top'>Username</strong>";
    cell3.innerHTML = "<strong id='top'>Score</strong>";
}


function onload(){
   
    postJSON();
}