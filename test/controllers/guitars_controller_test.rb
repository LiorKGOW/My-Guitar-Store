# frozen_string_literal: true

require 'test_helper'

class GuitarsControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get guitars_index_url
    assert_response :success
  end

  test 'should get show' do
    get guitars_show_url
    assert_response :success
  end

  test 'should get new' do
    get guitars_new_url
    assert_response :success
  end

  test 'should get edit' do
    get guitars_edit_url
    assert_response :success
  end

  test 'should get delete' do
    get guitars_delete_url
    assert_response :success
  end
end
