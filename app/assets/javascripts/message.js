$(function(){
  function flushMessage(){
    var html = `<p class="notice">メッセージを送信しました。</p>`
    $('.notification').append(html)
    $('.notice').fadeIn(200)
    $('.notice').delay(1500).queue(function() {
      this.remove();
    })
  }

  function buildHTML(message){
    var img = '';
    if (message.image.url){
    img = `<img class="message_image" src="${ message.image.url }" >`
    }
    var html = `<div class="chat-main__message">
                  <div class="chat-main__message-name">
                    ${ message.name } 
                  </div>
                  <div class="chat-main__message-time">
                    ${ message.created_at }
                  </div>
                  <div class="chat-main__message-body">
                    ${ message.content }
                    ${img}
                  </div>
                </div>`
    return html; 
  }

  $('#new_message').submit(function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      type: 'POST',
      url: url,
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-main__body--messages-list').append(html)
      flushMessage()
      $('#message_content').val('')
      $('#message_image').val('')
      $('.form__submit').prop('disabled',false)
      $('.chat-main__body').animate({ scrollTop: $('.chat-main__body')[0].scrollHeight})
    })
    .fail(function(){
      alert('メッセージを入力してください');
    })
  })
})
