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

    # Update the Guitar in the DB:
    if @guitar.update({ name: params[:name], url: params[:url], price: params[:price],
                        description: params[:description] })
      render json: @guitar
    else
      render json: @guitar.errors, status: :unprocessable_entity
    end
  end

  def delete; end

  def destroy; end
end
