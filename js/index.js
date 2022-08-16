function ol(){
    let qiymat = document.getElementById("selekt").value;
    
    if(qiymat==="Uzbekistan"){
        document.getElementById("input1").value = "+998";
    
    }else if(qiymat==="Afghanistan"){
        document.getElementById("input1").value = "+93";
    }else if(qiymat==="Argentina"){
        document.getElementById("input1").value = "+54";
    }else if(qiymat==="Australia"){
        document.getElementById("input1").value = "+61";
    }else if(qiymat==="Azerbaijan"){
        document.getElementById("input1").value = "+994";
    }else if(qiymat==="Brazil"){
        document.getElementById("input1").value = "+55";
    }else if(qiymat==="Russian Federation"){
        document.getElementById("input1").value = "+7";
    }else if(qiymat==="USA"){
        document.getElementById("input1").value = "+1";
    }else if(qiymat===""){
        document.getElementById("input1").value = "+";
    }else if(qiymat===""){
        document.getElementById("input1").value = "+";
    }else if(qiymat===""){
        document.getElementById("input1").value = "+";
    }else if(qiymat===""){
        document.getElementById("input1").value = "+";
    }
    
}

function uzunlik(){
    let qiymati = document.getElementById("write").value;
    let uzunligi = qiymati.length;
    if(uzunligi>=1){
        document.getElementById("rasm").src = "img/plane.png";
    }else{
        document.getElementById("rasm").src = "img/microphone.png";
    }
}



// function myFunction() {
//     const x = document.getElementById("myInput").value;
//     document.getElementById("demo").innerHTML = x;
// }



function smile(){
    document.querySelector(".smiles-menu").addClass("d-block");
}
