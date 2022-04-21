/*

* 커피원두 : 20000
* 우유 : 30000
* 물 :100
* 시럽 : 200
* 설탕 :3000
* 시나몬 : 500
* 빨대 : 1000
* 머그컵 : 300000
* 플라스틱컵 : 1000000
* 얼음 : 200000

*/

const materialOj = {
  coffebean : 20000,
  milk : 30000,
  water : 100,
  sugar : 3000,
  syrub : 200,
  cinamon : 500,
  mugcup : 300000,
  takeoutCup : 1000000,
  ice : 200000
}


const americano = {
  one : materialOj.coffebean,
  two : materialOj.water,
  three : materialOj.takeoutCup
}

const cafeLatte = {
  bean : materialOj.coffebean,
  milk : materialOj.milk,
  cup : materialOj.takeoutCup,
  ice : materialOj.ice
}


let cafeLattePrice = cafeLatte.bean + cafeLatte.milk + cafeLatte.cup + cafeLatte.ice ;

console.log(cafeLattePrice);




console.log(materialOj);

let americanoPrice = americano.one + americano.two + americano.three;
console.log(americanoPrice);
console.log(americanoPrice + materialOj.ice);

if(americanoPrice > 1000000){
  console.log(`아메리카노 값은 ${americanoPrice} 원 입니다. 사시겠습니까?`)
} else {
  console.log(`${americanoPrice} 원 입니다. 사세요`)
}


