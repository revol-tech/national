class AddModelToProduct < ActiveRecord::Migration
  def change
    add_column :products, :model_no, :string

    add_column :products, :description, :string

    add_column :products, :image, :string

  end
end
