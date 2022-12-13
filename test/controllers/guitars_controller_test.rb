# frozen_string_literal: true

require 'test_helper'

class GuitarsControllerTest < ActionDispatch::IntegrationTest
  test 'should get guitarGallery' do
    get guitars_guitar_gallery_url
    assert_response :success
  end

  test 'should get welcomePage' do
    get guitars_welcome_page_url
    assert_response :success
  end
end
