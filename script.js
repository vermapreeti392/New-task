let total = document.getElementById("total");
let average = document.getElementById("average");
let grade = document.getElementById("grade");
let sum =0;

function CalculateGrade(){
    let english = parseInt(document.getElementById("english").value)
    let maths = parseInt(document.getElementById("maths").value) 
    let computer = parseInt(document.getElementById("computer").value) 
    let physics = parseInt(document.getElementById("physics").value) 
    let chemistry =parseInt( document.getElementById("chemistry").value)
    if((english>100||maths>100||computer>100||physics>100||chemistry>100) || (english||maths||computer||physics||chemistry)<0){
       return alert("enter marks between 0 to 100")
    }
    if(english<35||maths<35||computer<35||physics<35||chemistry<35){
        console.log("less");
        let sum = english+maths+computer+physics+chemistry
        total.innerText = "Total Marks = " +sum
        let overAllGrade = (sum/500)*100;
        average.innerText ="Your average marks are = "+overAllGrade
       grade.innerText = "failed"
       return
    }
    else if(!english||!maths||!computer||!physics||!chemistry){
        if(!english){
            sum = maths+computer+physics+chemistry
        }
        if(!maths){
           sum = english+computer+physics+chemistry
        }
        if(!computer){
            sum = english+maths+physics+chemistry
        }
        if(!physics){
            sum = english+maths+computer+chemistry
        }
        if(!chemistry){
            sum = english+maths+computer+physics
        }
        total.innerText = "Total Marks = " +sum
        let overAllGrade = (sum/500)*100;
        average.innerText ="Your average marks are = "+overAllGrade
        grade.innerText = "failed"
        return;
    }
    else{
         sum = english+maths+computer+physics+chemistry
        total.innerText = "Total Marks = " +sum

        let overAllGrade = (sum/500)*100;
        average.innerText ="Your average marks are = "+overAllGrade
        if(overAllGrade>=90){
            grade.innerText ="You got A Grade"
        }
        else if(overAllGrade>=80 && overAllGrade<90){
            grade.innerText ="You got B Grade"
        }
        else if(overAllGrade>=70 && overAllGrade<80){
            grade.innerText ="You got C Grade"
        }
        else if(overAllGrade>=60 && overAllGrade<70){
            grade.innerText ="You got D Grade"
        }
        else if(overAllGrade>=50 && overAllGrade<60){
            grade.innerText ="You got E Grade"
        }
        else if(overAllGrade<50){
            grade.innerText ="You got F Grade"
        }
    }
}