const d=document,
  $time=d.querySelector(".conf").children[1].children.time,
  $btn=d.querySelector(".conf").children[1].children.btn,
  $hourContainer=d.querySelectorAll(".hour-container");
  console.log($time)

d.addEventListener("click",e=>{
  if (e.target===$btn) {
    console.log("hi")
    if (!$time.value) console.log("no value entered");
    else givingValues($hourContainer);
  }
})

function hourSum(time,hour,min=0){
  let [h,m]=time.split(":");
  
  m=`${parseInt(m)-min}`;
  if(parseInt(m)<0) m=`${parseInt(m)+60}`;
  
  for (let i=0; i<hour;i++){
    h=`${parseInt(h)-1}`;
    if(h<0) h='23';
  }
  
  return [h.padStart(2,"0"),":",m.padStart(2,"0")].join("");
}

function givingValues(container){
  let timers=[{h:6},{h:7,m:30},{h:9}];
  for (let i=0; i<container.length; i++){
    container[i].children[0].textContent=hourSum($time.value,timers[i].h,timers[i].m);
    container[i].children[1].style.visibility="visible";
  }
}