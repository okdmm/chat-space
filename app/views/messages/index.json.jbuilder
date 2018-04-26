json.array! @newmsgs do |newmsg|
  json.name newmsg.user.name
  json.created_at format_posted_time(newmsg.created_at)
  json.content newmsg.content
  json.id newmsg.id
  json.image newmsg.image
end
