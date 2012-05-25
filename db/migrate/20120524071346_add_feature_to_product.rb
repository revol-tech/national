class AddFeatureToProduct < ActiveRecord::Migration
  def change
    add_column :products, :feature, :boolean

  end
end
