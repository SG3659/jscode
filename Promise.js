const promise= new Promise((res,rej)=>{
    res("hello");
})
promise.then((val)=>console.log(val))



let fruits=["apple","banana","kiwi"];

const animatepromise=(fruits, animate)=>{
    return new Promise((res,rej)=>{
        setTimeout (()=>{
            animate(fruits);
            res (true);
        },1000)
        
    })
}

const animatedAll=(animate)=>{
    animatepromise(fruits[0], animate).
    then(()=> animatepromise(fruits[1], animate))
    .then(()=> animatepromise(fruits[2], animate))
}

const animate=(fruits)=>{
    console.log(fruits);
}
animatedAll(animate);
