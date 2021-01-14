
function calculate(num){
   const getValue = document.getElementById("input").value;
   const    getNUmber = getValue + num;
      const showValue = document.getElementById("input").value=getNUmber;
      return showValue;
}
const equalBtn = document.getElementById("btnEqual");
    equalBtn.addEventListener("click", function(){
    const getTotalValue = document.getElementById("input").value;
    let getTotalResult = eval(getTotalValue);
    const showTotal = document.getElementById("input").value=getTotalResult; 
})
const clearBtn = document.getElementById("btnClear");
   clearBtn.addEventListener("click",function(){
      document.getElementById("input").value="";
   })