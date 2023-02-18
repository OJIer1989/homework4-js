

const  userWallet={
  amountUsa : 820,
  amountEuro : 500,
  amountUa : 2000
}
console.log(userWallet);

const bank =[
  {
   buy:40,
   sell:41,
   name:'usa'
  },
  {
    buy: 38,
    sell: 39,
    name: 'euro'
  },
  {
    buy: 35,
    sell: 40,
    name:'ua'
  }
];


function Buy(cash, bank) {
  for (let b = 0; b < bank.length; b++) {
    if (bank[b].name === 'usa' && cash >= bank[b].sell) {
      console.log(`Вы можете купить ${(cash / bank[b].sell).toFixed(2)} USD`);
    }
    
    else if (bank[b].name === 'euro' && cash >= bank[b].sell){
      console.log(`Вы можете купить ${(cash / bank[b].sell).toFixed(2)} EURO `);
    }
  else{

  }
  };
  
}
Buy(userWallet.amountUa, bank)

function sell(amountUsa,amountEuro ,b) {
  // let cash = 0;
  for ( b = 0; b < bank.length; b++)
  if(bank[b].name === 'usa' && amountUsa >= bank[b].buy  ){
    console.log(`Вы можете купить ${amountUsa * bank[b].buy} UA`);
  }
  else if(bank[b].name === 'euro' && amountEuro >= bank[b].buy){
    console.log(`Вы можете купить ${amountEuro * bank[b].buy} UA`);
  }
 else{

 }
}
sell(userWallet.amountUsa,bank);
sell(userWallet.amountEuro, bank);



let move =(number) => `на ${number} шагов`

function moveUser(north,move,ss) {
  console.log(`Юзер переместился на ${north} ${move(ss)}   `);
}
moveUser('north', move,10);


const Keep = ["Keep", "Remove", "Keep", "Remove", "Keep", 'a' , 'b' , 'c' , 'd']


function KeepResult(arr) {
  for (let i = 0; i<arr.length; i++) {
  Keep.splice(i + 1 ,1);
  }
if(Keep == 0){
  alert('Ошибка')
}
else{

}
}
KeepResult(Keep);
console.log(Keep);




let Numbers = [2,3,5,4,8,9,10];
let EvenNumbers = [];

function names(b) {
  for ( b = 0; b < Numbers.length; b++) {
    
    if ((Numbers[b] % 2) == 1) {
      EvenNumbers.push(Numbers[b]);
    }
    else if ((Numbers[b] % 2) == 0) {
      EvenNumbers.push(Numbers[b] * 4);
    }
     else{

    }
  }
};

names(EvenNumbers);
console.log(EvenNumbers);



let a= 2;

let figurs = [
  {
  figure: "circle",
  radius: 10
  },
  {
    figure: "Squar",
    sizeA: 4,
    sizeB: 4
  },
  {
    figure: "Rectangle",
    sizeA: 4,
    sizeB: 8
  }
];

function figure(i) {
 for(let i = 0;  i<figurs.length; i++){
    if (figurs[i].figure === 'circle') {
      console.log(`Радиус фигуры ` + figurs[i].figure + ` будет  ` + Math.PI*Math.pow(figurs[i].radius,2) )
    }
    else if( figurs[i].figure === 'Squar' || figurs[i].figure === 'Rectangle'){
      console.log(`Площадь фигуры ` + figurs[i].sizeA * figurs[i].sizeB + 'см');
    }
    
  }
}
figure(figurs);





const NotWholeNumber = [2.5,3.2,5.4,4.6,8.3,7.1,9.5,10.02];

function numbers() {
  for (let a = 0; a<NotWholeNumber.length;a++){
    NotWholeNumber[a] = Math.ceil(NotWholeNumber[a])
  }
}
numbers()
console.log(NotWholeNumber);




function random() {

  console.log( `Ваше число ` + Math.ceil(Math.random()*100));
}

random();
