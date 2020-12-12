const d=document,
  $time=d.querySelector(".conf").children[1].children.time,
  $btn=d.querySelector(".conf").children[1].children.btn,
  $show=d.querySelector(".show");

d.addEventListener("click",e=>{
  if (e.target===$btn) {
    console.log("hi")
    if (!$time.value) console.log("no value entered");
    else givingValues();
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

function givingValues(){
  let timers=[{h:6},{h:7,m:30},{h:9}];
  
  reset($show);

  const $hContainer=d.querySelectorAll(".hour-container");

  for (let i=0; i<$hContainer.length; i++){
    $hContainer[i].children[0].textContent=hourSum($time.value,timers[i].h,timers[i].m);
    $hContainer[i].children[1].style.visibility="visible";
  }
}
function reset(element){
  element.innerHTML='';
  element.innerHTML=`<div class="hour-container hour1">
  <p></p>
  <p>
    If you go to sleep at this hour,<br />You'll sleep
    <span class="hl">6 hour</span>
  </p>
</div>
<div class="hour-container hour2">
  <p></p>
  <p>
    If you go to sleep at this hour,<br />You'll sleep
    <span class="hl">7:30 hour</span>
  </p>
</div>
<div class="hour-container hour3">
  <p></p>
  <p>
    If you go to sleep at this hour,<br />You'll sleep
    <span class="hl">9 hour</span>
  </p>
</div>`;
}