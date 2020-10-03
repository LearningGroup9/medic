{
  let crse=document.querySelector("#course").value;

  setInterval(function(){
    let course=document.querySelector("#course").value;
    if(crse!=course){
      crse=course;
      let arr=document.getElementsByClassName("hide");
      for(let i=0;i<arr.length;i+=1){
        arr[i].style.display="none";
      }
    }
    if(crse=="btech"||crse=="mtech"){
      document.getElementById(course).style.display="block";
    }
  }, 1000);
  

  let sem= document.getElementById("sem");

  sem.addEventListener("keydown",function(e){
    if(crse=="btech"){
      if((e.keyCode>49&&e.keyCode<57)||(e.keyCode>97&&e.keyCode<105)){
        document.getElementById("prev-sem").style.display="block";
      }
      else{
        document.getElementById("prev-sem").style.display="none";
      }
    }
    else if(crse=="mba"||crse=="mca"||crse=="mtech"){
      if((e.keyCode>49&&e.keyCode<53)||(e.keyCode>97&&e.keyCode<101)){
        document.getElementById("prev-sem").style.display="block";
      }
      else{
        document.getElementById("prev-sem").style.display="none";
      }
    }
    else{
      if((e.keyCode>49&&e.keyCode<55)||(e.keyCode>97&&e.keyCode<103)){
        document.getElementById("prev-sem").style.display="block";
      }
      else{
        document.getElementById("prev-sem").style.display="none";
      }
    }
  });

  function show_scholarship(){
    document.getElementById("show").style.display="block";
  }
  
 function validation(){
 var x= document.getElementById('10th').value;
 var y= document.getElementById('12th').value
 if(x==""){
   document.getElementById('10th').innerHTML = "Please fill the percentage box";
   return false;
    }
 if((x.length<0) || (x.length >100) || isNaN(x){

    document.getElementById('10th').innerHTML ="**Invalid Entry";
    return false;
   } 
 if(y==""){
   document.getElementById('12th').innerHTML = "Please fill the percentage box";
   return false;
   }
 if((y.length<0) || (y.length >100) || isNaN(y){
    document.getElementById('12th').innerHTML ="**Invalid Entry";
    return false;
   } 
 }

}
