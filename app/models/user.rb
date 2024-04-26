# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string
#  password_digest :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :username, uniqueness: { case_sensitive: false }, presence: true, length: { minimum: 3, maximum: 15 }
  has_secure_password

  has_many :messages
end
