class PagesController < ApplicationController
  def index
  	@category = Category.all
 		@product = Product.all
  end

  def new
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  def create
  end
end
