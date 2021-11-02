class User < ApplicationRecord
  has_secure_password
  has_many :games
  validates :username, uniqueness: true
end
