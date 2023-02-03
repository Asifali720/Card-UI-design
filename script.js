const minusBtn = document.getElementById('minusbtn')
const addBtn = document.getElementById('addbtn')

// 0
// -1
minusBtn.addEventListener('click', () =>{
  // minusValue()
// console.log( minusValue())
  const currentNum = document.getElementById("num").innerHTML
  const updatedNum = currentNum - 1;

   if(updatedNum <= 0){
    return
  }

  document.getElementById("num").innerHTML = updatedNum;
})

addBtn.addEventListener('click', () => {
  //  addValue()
  //  console.log(addValue())
  const currentNum = document.getElementById("num").innerHTML
  const updatedNum = Number(currentNum) + 1

  if(updatedNum >= 11){
    return
  }

  document.getElementById("num").innerHTML = updatedNum;
})