# frozen_string_literal: true

require 'test_helper'

class GuitarsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get guitars_index_url
    assert_response :success
  end
end
