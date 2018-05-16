class UserRegion < ApplicationRecord
  belongs_to :region
  belongs_to :user
end
