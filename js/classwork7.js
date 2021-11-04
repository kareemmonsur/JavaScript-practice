function a (num, bodmas) {
    let x = num;
    for ( let y=1; y <=12; y++){
        bodmas(x,y)
    }
        
}
function multiply(x,y){
    let result = x * y
    console.log(`${x} * ${y} = ${result}`)   
}

function addition(x,y){
    let result = x + y
    console.log(`${x} + ${y} = ${result}`)   
}

for (i=0; i<=12; i++){
    a (i, multiply)
}    

for (i=0; i<=12; i++){
    a (i, addition)
}   
 
