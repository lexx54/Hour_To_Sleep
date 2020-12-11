const d=document,
  $time=d.querySelector(".conf").children.time,
  $btn=d.querySelector(".conf").children.btn,
  $hourContainer=d.querySelectorAll(".hour-container");

d.addEventListener("click",e=>{
  if (e.target===$btn) {
    console.log("hi")
    $hourContainer[0].children[0].textContent=hourSum($time.value,6);
    $hourContainer[1].children[0].textContent=hourSum($time.value,7,30);
    $hourContainer[2].children[0].textContent=hourSum($time.value,9);
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
  
  m=`${parseInt(m)+min}`;
  if(parseInt(m)>=60) m=`${parseInt(m)-60}`;
  
  for (let i=0; i<hour;i++){
    h=`${parseInt(h)+1}`;
    if(h==24) h='0';
  }
  
  return [h,":",m.padStart(2,"0")].join("");
}