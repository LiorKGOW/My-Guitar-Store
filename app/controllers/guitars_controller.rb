# frozen_string_literal: true

class GuitarsController < ApplicationController
  def index
    render json: Guitar.all
  end

  def show; end

  def new
    @guitar = Guitar.new
    # Present a form to create a new Guitar (render the new template)
  end

  def edit
    # When we enter this Action, we would have an id of the object
    @guitar = Guitar.find(params[:id])
  end

  def create
    # Instantiate a new Guitar using form parameters
    @guitar = Guitar.new(guitar_params)
    # Try to save the guitar to the DB
    if @guitar.save
      # If save succeeds, redirect to the index action
      redirect_to(guitars_path)
    else
      # If save fails, redisplay the form so the user can fix problems
      render(:new)
    end
  end

  def update
    # Find the Guitar in the DB with id, and load the form with it's current attributes
    @guitar = Guitar.find(params[:id])
    # Try to save the updated Guitar to the DB
    if @guitar.update(guitar_params)
      # If save succeeds, redirect to the personal page of the edited guitar (to inspect the updated attributes)
      redirect_to(guitar_path(@guitar))
    else
      # If save fails, redisplay the form so the user can fix problems
      render('edit')
    end
  end

  def delete; end

  def destroy; end

  private

  def guitar_params
    params.require(:guitar).permit(:name, :url, :price, :description)
  end
end
