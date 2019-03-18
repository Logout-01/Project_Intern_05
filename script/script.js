console.log("Start");
var decimal = parseInt( document.getElementById("decimal").value );  
var hexa = parseInt(document.getElementById("hexa").value);  
var octal = parseInt(document.getElementById("octal").value);  
var binary = parseInt(document.getElementById("binary").value);  
var result = "", remainD, newResult = "";
while (decimal != 0) {
    var i = 0;
    var remainD = decimal % 2;
    if(remainD != 0){
        var result = result + "1";
    }else{
        var result = result + "0";
    }
    decimal = (decimal - remainD)/2;
}
var preResult = parseInt(result);


console.log(result);
console.log("End");