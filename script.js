hideChat(0);

$('#prime').click(function () {
      toggleFab();
      if ($("#imgsrc").attr("src") == "chat/bubble-chat.png") {
            $("#imgsrc").attr("src", "chat/test.png");


      } else if ($("#imgsrc").attr("src") == "chat/test.png") {
            $("#imgsrc").attr("src", "chat/bubble-chat.png")
      }

      else {
            $("#imgsrc").attr("src", "chat/bubble-chat.png")
      };

});

function toggleFab() {

      $('.prime').toggleClass('');
      $('.prime').toggleClass('');
      $('.prime').toggleClass('is-active');
      $('.prime').toggleClass('is-visible');
      $('#prime').toggleClass('is-float');
      $('.chat').toggleClass('is-visible');
      $('.fab').toggleClass('is-visible');

}

$('#leftar').click(function (e) {
      hideChat(1);
});
$('#chat_fullscreen_loader').click(function (e) {
      $('.fullscreen').toggleClass('zmdi-window-maximize');
      $('.fullscreen').toggleClass('zmdi-window-restore');
      $('.chat').toggleClass('chat_fullscreen');
      $('.fab').toggleClass('is-hide');
      $('.header_img').toggleClass('change_img');
      $('.img_container').toggleClass('change_img');
      $('.chat_header').toggleClass('chat_header2');
      $('.fab_field').toggleClass('fab_field2');
      $('.chat_converse').toggleClass('chat_converse2');
      //$('#chat_converse').css('display', 'none');
      // $('#chat_body').css('display', 'none');
      // $('#chat_form').css('display', 'none');
      // $('.chat_login').css('display', 'none');
      // $('#chat_fullscreen').css('display', 'block');
});



function hideChat(hide) {
      switch (hide) {
            case 0:
                  $('#chat_converse').css('display', 'none');
                  $('#chat_body').css('display', 'none');
                  $('#chat_form').css('display', 'none');
                  $('.chat_login').css('display', 'block');
                  $('.chat_fullscreen_loader').css('display', 'none');
                  $('#chat_fullscreen').css('display', 'none');
                  break;
            case 1:
                  $('#chat_converse').css('display', 'none');
                  $('#chat_body').css('display', 'none');
                  $('#chat_form').css('display', 'none');
                  $('.chat_login').css('display', 'none');
                  $('.chat_fullscreen_loader').css('display', 'block');
                  $('#chat_fullscreen').css('display', 'block');
                  break;
      }
}

