function x(y){
    y();
}
x(function y(){
    console.log("sahil")
} )



let fruits=["apple","banana","kiwi"];


const animatedAll=(animate)=>{
    // calll backhell
    setTimeout (()=>{
      animate(fruits[0]);
      setTimeout (()=>{
          animate(fruits[1]);
          setTimeout(()=>{
              animate(fruits[2]);
          }) 
      })
    },1000)
}

const animate=(fruits)=>{
    console.log(fruits);
}
animatedAll(animate);
