# frozen_string_literal: true

class GuitarsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:update]

  def index
    render json: Guitar.all
  end

  def show; end

  def new; end

  def edit; end

  def create; end

  def update
    # Find the Guitar in the DB with an 'id' of ${id}:
    @guitar = Guitar.find(params[:id])

    # Insert the new values inserted by the user to the instance variable of the guitar:
    change_guitar_attributes(params[:name], params[:url], params[:price], params[:description])

    # Try to update the Guitar in the DB:
    if @guitar.update(guitar_params)
      true
    else
      false
    end
  end

  def change_guitar_attributes(name, url, price, description)
    @guitar.name = name
    @guitar.url = url
    @guitar.price = price
    @guitar.description = description
  end

  def delete; end

  def destroy; end

  private

  def guitar_params
    params.require(:guitar).permit(:name, :url, :price, :description)
  end
end
