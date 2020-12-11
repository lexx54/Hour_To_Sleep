const d=document,
  $time=d.querySelector(".conf").children.time,
  $btn=d.querySelector(".conf").children.btn,
  $hourContainer=d.querySelectorAll(".hour-container");

d.addEventListener("click",e=>{
  if (e.target===$btn) {
    console.log("hi")
    if (!$time.value) console.log("no value entered");
    else{
      // $hourContainer[0].children[0].textContent=hourSum($time.value,6);
      // $hourContainer[1].children[0].textContent=hourSum($time.value,7,30);
      // $hourContainer[2].children[0].textContent=hourSum($time.value,9);
      givingValues($hourContainer)
    }
  }
})
// d.addEventListener("change",e=>{
//   if(e.target===$time) {
//     console.log(hourSum($time.value,6))
//     console.log(hourSum($time.value,7,30))
//     console.log(hourSum($time.value,9))
//   }
// })
function hourSum(time,hour,min=0){
  let [h,m]=time.split(":");
  
  m=`${parseInt(m)-min}`;
  if(parseInt(m)<0) m=`${parseInt(m)+60}`;
  
  for (let i=0; i<hour;i++){
    h=`${parseInt(h)-1}`;
    if(h<0) h='23';
  }
  
  return [h,":",m.padStart(2,"0")].join("");
}

function givingValues(container){
  let preTimers=[{h:6},{h:7,m:30},{h:9}];
  for (let i=0; i<container.length; i++){
    container[i].children[0].textContent=hourSum($time.value,preTimers[i].h,preTimers[i].m)
  }
}