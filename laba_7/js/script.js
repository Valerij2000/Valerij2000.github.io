let app = new Vue({
  el: '#app',
  
  // Данные
  data: {
    lang: ['JS', 'PHP', 'Python', 'Java', 'C++'],
    dev_lang: ['','Web-dev', 'Game-dev', 'Mobile-dev', 'Desktop-dev', 'Server-dev'],

    // Row Matrix:

    rowJS: [10, 8, 6, 3, 0],
    rowPHP: [10, 3, 0, 0, 10],
    rowPython: [10, 8, 8, 8, 10],
    rowJava: [8, 10, 10, 10, 10],
    rowC: [5, 10, 0, 10, 2],

    js: [],
    php: [],
    pyth: [],
    java: [],
    c: [],

    sumJS: null,
    sumPhp: null,
    sumPyth: null,
    sumJava: null,
    sumC: null,

    
  // Веса: 
  wArr: [], 

  // Коэффициенты:

  cofArr: [],

  // Min

  min: [],

  // Max

  max: [],
  nameSum: 'Summ',

  click: false,
  error: '',

  },


  // Методы
  methods: {


// Функция проверяет корректность введенных коэффициентов

  getCorrectCof () {
    let sum = 0;
      for(item of this.cofArr) {
        sum+=Number(item);
      }
      if (sum > 1 || sum < 0) {
        this.error = 'Сумма коэффициентов должна равняться 1!';
          
      } else {
        this.error = '';
      }
      // console.log(sum) 
  },

  // Функция для min

  getMinEl () {
   this.min = this.minMaxTest(Math.min);
  },

  minMaxTest (funcMinMax) {
    let temp = [];
    let res = [];
   for(let i=0; i<this.rowJS.length; i++) {
    temp.push(this.rowJS[i]);
    temp.push(this.rowPHP[i]);
    temp.push(this.rowPython[i]);
    temp.push(this.rowJava[i]);
    temp.push(this.rowC[i]);
      res.push(funcMinMax(...temp));
        temp.length = 0;
   }
   return res;
   
  },

  // Функция для max

  getMaxEl () {
    this.max = this.minMaxTest(Math.max);  
  },

// Функциональная нормировка

  getNewTable () {
    this.click = true;
    let up;
    let down;
     for(let i=0; i<this.rowJS.length; i++) {
      up = this.rowJS[i] - this.min[i];
      down = this.max[i] - this.min[i];
        this.js.push(up/down);

        up = this.rowPHP[i] - this.min[i];
      down = this.max[i] - this.min[i];
        this.php.push(up/down);

        up = this.rowPython[i] - this.min[i];
      down = this.max[i] - this.min[i];
        this.pyth.push(up/down);

        up = this.rowJava[i] - this.min[i];
      down = this.max[i] - this.min[i];
        this.java.push(up/down);

        up = this.rowC[i] - this.min[i];
      down = this.max[i] - this.min[i];
        this.c.push(up/down);
     }
// 10 - 5 / 10 + 10

  },

  getSum () {
    let arrMax = [];
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    let sum4 = 0;
    let sum5 = 0;
    for(item of this.js) {
      sum1+=item;
      
    }

    for(item of this.php) {
      sum2+=item;
      
    }


    for(item of this.pyth) {
      sum3+=item;
      
    }


    for(item of this.java) {
      sum4+=item;
      
    }

    for(item of this.c) {
      sum5+=item;
    
    }
    
    this.sumJS = sum1;
    this.sumPhp = sum2;
    this.sumPyth = sum3;
    this.sumJava = sum4;
    this.sumC = sum5;

  
  },

    
  },
})