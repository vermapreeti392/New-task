let physicsMarks = document.getElementById("physics").value
let chemistryMarks = document.getElementById("chemistry").value
let mathMarks = document.getElementById("math").value
let computersMarks = document.getElementById("computer").value
let englishMarks = document.getElementById("english").value
let total = document.getElementById("total")
let final = document.getElementById("final")
let grades = document.getElementById("grades")


function findGrade(num){

    if(num > 90){
        return "A"
    }
    if(num >= 80 || num < 90){
        return "B"
    }
    if(num >= 70 || num < 80){
        return "C"
    }
    if(num >= 60 || num < 70){
        return "D"
    }
    if(num < 60){
        return "F"
    }

}

function calculateGrades(){
   
    if(physicsMarks == "")
   physicsMarks = 0
   if(chemistryMarks == "")
   chemistryMarks = 0
   if(mathMarks == "")
   mathMarks = 0
   if(computersMarks == "")
   computersMarks = 0
   if(englishMarks == "")
   englishMarks = 0
     
    physicsMarks = parseInt(physicsMarks)
    chemistryMarks = parseInt(chemistryMarks)
    mathMarks = parseInt(mathMarks)
    computersMarks = parseInt(computersMarks)
    englishMarks = parseInt(englishMarks)

   if( physicsMarks > 100  || physicsMarks < 0 )
   {
       window.alert("Enter Marks Between 0 - 100")
       return
   }
   if( chemistryMarks > 100  || chemistryMarks < 0 )
   {
    window.alert("Enter Marks Between 0 - 100")
    return
}
   if( mathMarks > 100  || mathMarks < 0 )
   {
    window.alert("Enter Marks Between 0 - 100")
    return
}
   if( computersMarks > 100  || computersMarks < 0 )
   {
    window.alert("Enter Marks Between 0 - 100")
    return
}
   if( englishMarks > 100  || englishMarks < 0 )
   {
    window.alert("Enter Marks Between 0 - 100")
    return
}
   

   

 
   
   let average = ( physicsMarks + chemistryMarks + mathMarks + computersMarks + englishMarks)
   let percent = average/5
   console.log(average)
   console.log(percent)
   let grad = findGrade(percent)
   total.innerHTML = `Total Marks is : ${average}`

   final.innerHTML = `Your Average Marks is : ${percent}`
   
   if(physicsMarks <= 35 || chemistryMarks <= 35 || mathMarks <= 35 || computersMarks <= 35 || englishMarks <= 35 ){

       grades.innerHTML = `You Got F Grade`
   }else{

       grades.innerHTML = `You Got ${grad} Grade`
   }
   
}