json.content  @message.content
json.id  @message.id
json.name  @message.user.name
json.image  @message.image
json.created_at  format_posted_time(@message.created_at)
