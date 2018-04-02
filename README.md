
# DB

## users

|Column|Type|Options|
|------|----|-------|
|mail|string|null: false, unique: true|
|name|string|null: false, unique: ture, index: true|


### Association

- has_many :messages
- has_many :group_users
- has_many :groups, through: :group_users

## groups

|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false, index: true|
### Association

- has_many :users, through: :group_users
- has_many :group_users
- has_many :messages

## groupe_users

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## messages

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|user_id|references|null: false,foreign_key: true|
|group_id|references|null: false, foreign_key: true|
|posted_at|datetime|null: false|
### Association
- belongs_to :group
- belongs_to :user
