 function p(data){
    console.log(data)
 }
 p("hi")
 p("hello")
 let z = 10
 z += 10
 if ( z>10 && z>=10) {
    p( "yess")
 } else {
    p("noo")
 }
// funsction basically means the trigger if the trigger is not pulled the gun wont fire
 //5X1=5
 let y=5
 for ( i=1; i<=10; i++) {
p(y +"x"+ i +"="+ y*i)
 } 
 // similar function but dont need to write the code manually 
 function table(){
     p("hi")
    
    let num = document.getElementById("table")
    for (i=1; i<=10; i++ ) {
     p( num.value + "x"+ i + "=" +  num.value*i )
   }
   num.value= ''
 }
 