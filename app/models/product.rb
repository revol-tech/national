class Product < ActiveRecord::Base
	has_many :product_details,:dependent=> :destroy
	has_many :categories
end
