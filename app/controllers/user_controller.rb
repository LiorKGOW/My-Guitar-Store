class UserController < ApplicationController
  def index
    render :json => [
      'admin', 'guest'
    ]
  end
end
