(() =>{
  const $doc =document;
  const $avg_tem =$doc.getElementById("avg_tem");
  const $days =$doc.getElementById("days");
  const $dayNumber =$doc.getElementsByTagName("td")
  const $Impersonation_tem =$doc.getElementsByTagName("th")
  const $outPut =$doc.getElementsByTagName("button");

  //平熱に値を足す
  const Tem =["-0.5", "-0.4", "-0.3", "-0.2", "-0.1", "0.0", "0.1", "0.2", "0.3",]
  let choose=[1,1,1,1,1,1,1,1,1]
  const makeTem = () => {
    let choose_addTem = Math.floor(Math.random()*choose.length);
    const addTem= Tem[choose_addTem];
    return addTem
  }
  console.log(Number(makeTem()))

  //平熱を読み取る
  const ABG_TEM = () => {
        const avg_num =$avg_tem.value
        return avg_num;
}
  //何日分か
  const selectedDays = () =>{
    const Day =$days.value
    return Day;
  }
    //表をリセット
    const reset_gra= () =>{
      let all =0;
      while(all < $dayNumber.length){
        $dayNumber[all].style.display="none"
        $Impersonation_tem[all].style.display="none"
        all++;
      }
    }



  selectedDays();
  const makeGraph = () => {
    window.addEventListener("DOMContentLoaded",() => {
      $outPut[0].addEventListener("click",() => {
        reset_gra();
        let graph =0;
        while(graph <= selectedDays()){
          graph++
          $dayNumber[graph].style.display="inline"
          $dayNumber[graph].textContent=(graph)
          $Impersonation_tem[graph].style.display="inline"
          $Impersonation_tem[graph].textContent=((Number(ABG_TEM())*10 + Number(makeTem())*10) /10)
        }
      })
    })
  }
  makeGraph();
})();
