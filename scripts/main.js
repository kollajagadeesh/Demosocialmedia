let form=document.getElementById(bmi-form);
form.addEventListener("submit",bmi)
function bmi(e){

    e.preventDefault();
    let height=document.getElementById("height").value;
    let weight=document.getElementById("weight").value;
    let bmi=getBMI(height,weight);
    let healthstate=gethealthsate(bmi);
    let p=getElementById("calculation")
    p.innerHTMl=``

}
function getBMI(height,weight){
    return(weight*703)/height**2;
}
function gethealthstate(bmi){
    if(bmi<18.5){
        console.log("underweight");

    }
    else if(bmi<25){
        return "normal";

    }
    else if(bmi>30{
        return "obesse";
    } else{
        return "normal";
    }
}
