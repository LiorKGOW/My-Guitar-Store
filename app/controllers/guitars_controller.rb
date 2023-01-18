# frozen_string_literal: true

class GuitarsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]

  def index
    render json: Guitar.all
  end

  def show; end

  def new; end

  def edit; end

  def create
    # Instantiate a new Guitar
    @guitar = Guitar.new(guitar_params)

    # Insert the new values inserted by the user to the instance variable of the guitar:
    apply_guitar_attributes(params[:name], params[:url], params[:price], params[:description])

    # Save the guitar to the DB
    if @guitar.save
      render json: @guitar
    else
      render json: @guitar.errors, status: :unprocessable_entity
    end
  end

  def update; end

  def delete; end

  def destroy; end

  private

  def guitar_params
    params.require(:guitar).permit(:name, :url, :price, :description)
  end

  def apply_guitar_attributes(name, url, price, description)
    @guitar.name = name
    @guitar.url = url
    @guitar.price = price
    @guitar.description = description
  end
end
