window.addEventListener("DOMContentLoaded", domLoaded);


function domLoaded() {
   let button = document.querySelector("#convertButton");
  let cfield = document.querySelector("#cInput");
  let ffield = document.querySelector("#fInput");
   button.addEventListener("click", doMath);
  cfield.addEventListener("keyup", clearF);
  ffield.addEventListener("keyup", clearC);
  
}

function convertCtoF(degreesCelsius) {
   // TODO: Complete the function
  f=(degreesCelsius*9/5)+32;
  return f;
}

function convertFtoC(degreesFahrenheit) {
   c=(degreesFahrenheit-32)*5/9;
  return c;
}

function clearF(){
  document.querySelector("#fInput").value = "";
}
function clearC(){
  document.querySelector("#cInput").value = "";
}

function doMath(){
  //alert("Hi.");
  let Cel = document.querySelector("#cInput").value;//leave as string to report error
  let Fah = document.querySelector("#fInput").value;//leave as string to report error

  if(Cel!=""){
    //check if is number
    let C = parseFloat(Cel);
    //alert(C); //this one fires
    if(isNaN(C)){
      //cannot use if(var==NaN) because NaN is reserved keyword, use isNaN() instead
      //set error message to X is not a number
     // alert(C);  //check if code is entered since I don't have a runtime stepper
      document.getElementById("errorMessage").innerText = Cel+ " is not a number";
    }else{
      let rF = convertCtoF(C);
      document.querySelector("#fInput").value=rF;
    }

    
  }else if(Fah!=""){
    //checi if is number
    let F = parseFloat(Fah);
    if(isNaN(F)){
      //set error message to X is not a number
      //alert(F);  //check if code is entered since I don't have a runtime stepper
      document.getElementById("errorMessage").innerText = Fah+ " is not a number";
    }else{
      let rC = convertFtoC(F);
      document.querySelector("#cInput").value=rC;
    }

  }
  
}

//if statement of temps to change the image with image id tag thing

/*When parseFloat() returns NaN for the temperature to be converted, set errorMessage's innerHTML to the message: "X is not a number", where X is the string from the text input. When parseFloat() returns a valid number, set errorMessage's innerHTML to an empty string. The image below shows a sample error message.*/

/*When the temperature is converted, change the image to reflect the temperature in Fahrenheit. Each image is in the same directory as your .html file. To change the image, change the image's src property to the appropriate filename.*/
