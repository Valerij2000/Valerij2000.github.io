// Scroll Yakor

function scrollDownUp(id){
  var offset = 0;
  $('html, body').animate({
    scrollTop: $(id).offset ().top - offset
  }, 500);
  return false;
};


// back to top button

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});




// ajax mail


$('#sendMail').on('click', function(){

  var mail = $('#mail').val().trim();
  var message = $('#message').val().trim();

   if (mail == '') {
    $('#error').text('Некорректный mail...');
    return false;
  }

   if (message.length < 5) {
    $('#error').text('Введите пожалуйста сообщение более 5 симовлов...');
    return false;
  }


  $('#error').text('');


// AJAX запрос


function funcBefore(){
  // Функция prop('disabled', true); - позваоляет сделать кнопку неактивной
  $('#sendMail').prop('disabled', true);
  // $('#reset').prop('disabled', true);
};

// Параметр data это данные полученные с сервера  
function funcSuccess(data){
   if (!data) {
    $('#sendMail').prop('disabled', false);
    alert('Errors...');
   } else{
    // Функция trigger c методом reset очищает форму с id mailForm
    alert("Ваше сообщение было отправлено администратору сайта !");
      $('#mailForm').trigger('reset');
     $('#sendMail').prop('disabled', false);
     // $('#reset').prop('disabled', false);
   }
};


$.ajax({
  // Внимательно смотри путь к файлу ! Должен быть так: 
  url: 'ajax/mail.php',
  type: 'POST',
  cache: false,
  data: {'mail': mail, 'message': message},
  dataType: 'html',
  beforeSend: funcBefore,
  success: funcSuccess
});



});
