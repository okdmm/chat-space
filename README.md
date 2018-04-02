
# DB

## users

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|mail|string|null: false, foreign_key: true|
|name|stinrg|------|
|pass|
|confirm-pass|



### Association

-has_many :messages
-has_many :group_users
-has_many :groups, through: :group_users

## groups

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|group_name|null:false, foreign_key: true|
### Association

- has_many :users, through: :group_users
- has_many :group_users
- has_many :messages

## groupe_users

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## messages

|Column|Type|Options|
|------|----|-------|
|body|test|-------|
|image|string|------|
|user_id|integer|foreign_key: true|
|group_id|integer|foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user
