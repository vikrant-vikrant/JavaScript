//ONclick,ondblclick,onmouseenter
btn.onclick = (function(){
  console.log('Button was clicked')
})
btn.ondblclick = (function(){
  console.log('Button was clicked two times')
})
btn.onmouseenter = (function(){
  console.log('Something move')
})

//eventListener
//obj.eventListener(event,callback)
btn.addEventListener("onclick",function(){
  console.log("event listener works")
})