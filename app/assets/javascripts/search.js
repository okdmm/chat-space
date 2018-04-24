$(function(){
  function appendHTML(user){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${ user.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }" data-user-name="${ user.name }">追加</a>
                </div>`
    $('#user-search-result').append(html)
  }

  function appendNoUser(remark ){
    var html = `<p class="chat-group-user__name">${ remark }</p>`  
    $('#user__name-result').append(html)
  }

  var preInputs

  $('#user-search-field').on('keyup', function() {
    var input = $(this).val()
    if ( input == "" ) {
      $('#user-search-result').empty()
      return false
    }
    $.ajax ({
      type: 'GET',
      url: '/users',
      data: {keyword: input},
      dataType: 'json'
    })
    .done(function(data){
      if (data.length !== 0 ) {
        data.forEach(function(user){
        appendHTML(user)
        })
      }
      else {
        appendNoUser("一致なし")
      }
    })
    .fail(function(){
      alert('失敗')
    })
    $('#user-search-result').empty()
  })
})
