function random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)

}
let misol = +prompt('matematik musollarni yechish uchun 1-ni bosing!')

for (let i = 0; i < misol; i++){
    let son1 = random(100,200)
    let son2 = random(10,50)
    let son3 = random(10,200)
    let son4 = random(5,100)
    let son5 = random(1,10)
    let son6 = random(5,10)
    let son7 = random(5,10)
    let son8 = random(1,5)
    let javob = prompt(`misolni yeching: ${son1} - ${son2} = ?`)
    let javob2 = prompt(`misolni yeching: ${son3} + ${son4} = ?`)
    let javob3 = prompt(`misolni yeching: ${son5} * ${son6} = ?`)
    let javob4 = prompt(`misolni yeching: ${son7} % ${son8} = ?`)

if (javob == (son1 - son2)) {
    console.log(`sizning javobingiz togri: ${javob}, ${son1} - ${son2} = ${javob}`);
    
}else{
    console.log(`sizning javobingiz notogri: ${javob}, ${son1} - ${son2} = ${son1 - son2}`);
    
}
if (javob2 == (son3 + son4)) {
    console.log(`sizning javobingiz togri: ${javob2}, ${son3} + ${son4} = ${javob2}`);
    
}else{
    console.log(`sizning javobingiz notogri: ${javob2}, ${son3} + ${son4} = ${son3 + son4}`);
    
}
if (javob3 == (son5 * son6)) {
    console.log(`sizning javobingiz togri: ${javob3}, ${son5} * ${son6} = ${javob3}`);
    
}else{
    console.log(`sizning javobingiz notogri: ${javob3}, ${son5} * ${son6} = ${son5 * son6}`);
    
}
if (javob4 == (son7 / son8)) {
    console.log(`sizning javobingiz togri: ${javob4}, ${son7} % ${son8} = ${javob4}`);
    
}else{
    console.log(`sizning javobingiz notogri: ${javob4}, ${son7} % ${son8} = ${son7 % son8}`);
    
}

}