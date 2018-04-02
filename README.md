
# DB

## users

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|mail|string|null: false, foreign_key: true|
|name|stinrg|------|


### Association

-has_many :messages
-has_many :group_users
-has_many :groups, through: :group_users

## groups

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|group_name|string|-------|
### Association

- has_many :users, through: :group_users
- has_many :group_users
- has_many :messages

## groupe_users

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|ejhnull: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## messages

|Column|Type|Options|
|------|----|-------|
|body|test|null: false|
|image|string||
|user_id|references|foreign_key: true|
|group_id|references|foreign_key: true|
|posted_at|datime||
### Association
- belongs_to :group
- belongs_to :user
