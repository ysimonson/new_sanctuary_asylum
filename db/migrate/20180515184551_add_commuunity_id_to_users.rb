class AddCommuunityIdToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :community_id, :integer
  end
end
