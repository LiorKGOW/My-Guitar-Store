class UserController < ApplicationController
  def index
    render json: %w[
      admin guest
    ]
  end
end
