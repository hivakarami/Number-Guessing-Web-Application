

function generateNum(upto){
    return Math.floor(Math.random() * upto);
}
  
function set_level(l){
    x = generateNum(100*(l+1));
    localStorage.setItem('num', x);
}




