# frozen_string_literal: true

class GuitarsController < ApplicationController
  def index
    render json: Guitar.all
  end

  def show; end

  def new; end

  def edit; end

  def create; end

  def update; end

  def delete; end

  def destroy; end
end
