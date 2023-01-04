# frozen_string_literal: true

class GuitarsController < ApplicationController
  def index
    render json: Guitar.all
  end

  def show; end

  def new; end

  def edit; end

  def delete; end
end
