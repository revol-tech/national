class CreateProductDetails < ActiveRecord::Migration
  def change
    create_table :product_details do |t|
      t.string :model_no
      t.string :brand
      t.integer :product_id

      t.timestamps
    end
  end
end
