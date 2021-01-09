/**
 * 
 * plus and minus button 
 * 
 * gooods section list function
 * 
 * 
 */


let counter = document.querySelectorAll('.counter');
let plus = document.querySelectorAll('.plus');
let minus = document.querySelectorAll('.minus');



for(let i=0; i<counter.length; i++) {
  counter[i].innerHTML = 14;
    plus[i].addEventListener('click', function () {
      counter[i].innerHTML++;
    })
    minus[i].addEventListener('click', function () {
     
      if (counter[i].innerHTML > 0) {
        counter[i].innerHTML--;
      }
    })
}


// validation form:

let send = document.querySelector('#send');
let nameInp = document.querySelector('#name');
let lastname = document.querySelector('#lastname');
let email = document.querySelector('#email');


// out:

let nameOut = document.querySelector('#nameOut');
let lastnameOut = document.querySelector('#lastnameOut');
let emailOut = document.querySelector('#emailOut');




send.addEventListener('click', function () {
  let search = email.value.indexOf('@');
  let val = 0;

  if (nameInp.value === '') {
    nameOut.innerHTML = 'Введите имя !';
  } else {
    nameOut.innerHTML = '';
      val++;
  }

  if (lastname.value === '') {
    lastnameOut.innerHTML = 'Введите фамилию!';
  } else {
    lastnameOut.innerHTML = '';
      val++;
  }

  if (email.value === '') {
    emailOut.innerHTML = 'Введите email!';
  } else if (search === -1) {
    emailOut.innerHTML = 'Введите корректный email адресс!';
  } else {
    emailOut.innerHTML = '';
      val++;
  }

  if (val == 3) {
    location.reload();
  }

  
})