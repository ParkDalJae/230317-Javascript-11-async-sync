//순서대로 동작함, 콜백지옥
setTimeout(function(){                
  console.log("첫번째 함수") 
  setTimeout(function(){
    console.log("두번째 함수")
    setTimeout(function(){
      console.log("세번째 함수")
      setTimeout(function(){
        console.log("네번째 함수")
      },1000)
    },1000)
  },1000)
},1000)


//일제히 동작함
// setTimeout(function(){  console.log("첫번째 함수")},1000)
// setTimeout(function(){  console.log("두번째 함수")},1000)
// setTimeout(function(){  console.log("세번째 함수")},1000)
// setTimeout(function(){  console.log("네번째 함수")},1000)
// setTimeout(function(){  console.log(" 5번째 함수")},1000)
// setTimeout(function(){  console.log(" 6번째 함수")},1000)
// setTimeout(function(){  console.log(" 7번째 함수")},1000)
// setTimeout(function(){  console.log(" 8번째 함수")},1000)
// setTimeout(function(){  console.log(" 9번째 함수")},1000)
// setTimeout(function(){  console.log(" 0번째 함수")},1000)
setTimeout(function(){      //a
  console.log("1 함수")
  setTimeout(function(){    //b
    console.log("2 함수")
  },1000)
},1000)