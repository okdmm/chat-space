class Group < ApplicationRecord
  has_many :users, through: :group_users
  has_many :group_users
  has_many :mesasages
  validates :name, presence: true
end
