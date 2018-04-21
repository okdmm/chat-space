$(function(){
  function buildHTML(message){
    var img = '';
    if (message.image){
    img = '<img src="${message.image}">'
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
                  <img class='message_image'>
                    ${img}
                  </img>
                  </div>
                </div>`
    return html; 
  }

  $('#new_message').on('submit', function(e){
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
      $('#message_content').val('')
    })
    .fail(function(){
      alert('メッセージを入力してください');
    })
    return false;
  })
})
