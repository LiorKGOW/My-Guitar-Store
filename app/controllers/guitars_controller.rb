# frozen_string_literal: true

# rubocop:disable Metrics/MethodLength

class GuitarsController < ApplicationController
  def index
    render json: [
      {
        name: 'guitar1',
        url: 'https://rukminim1.flixcart.com/image/416/416/acoustic-guitar/x/8/w/topaz-blue-signature-original-imaefec7uhypjdr9.jpeg?q=70',
        price: '100',
        description: 'blablabla 1'
      },
      {
        name: 'guitar2',
        url: 'https://shop.brianmayguitars.co.uk/user/special/content/Antique%20Cherry%20a.jpg',
        price: '200',
        description: 'blablabla 2'
      },
      {
        name: 'guitar3',
        url: 'https://cdn.mos.cms.futurecdn.net/Yh6r74b8CAj2jbdf2FAhq4-970-80.jpg.webp',
        price: '300',
        description: 'blablabla 3'
      }
    ]
  end

  def guitar_gallery; end

  def welcome_page; end

  def contact
    # redirect_to(:action => 'contact_us')

    param = params['country']
    @phone_number = nil

    if param == 'us' || param == 'ca'
      @phone_number = '(800) 555-6789'
    elsif param == 'uk'
      @phone_number = '(020) 7946-1234'
    else
      @phone_number = '+972 (052) 654-3210'
    end

    ##############################################
    # another option: (Solution)

    if ['us','ca'].include?(params[:country])
      @phone_number = '(800) 555-6789'
    elsif params[:country] == 'uk'
      @phone_number = '(020) 7946-1234'
    else
      @phone_number = '+972 (052) 654-3210'
    end

    ##############################################
    # another option: (Rubocop)

    @phone_number = if %w[us ca].include?(params[:country])
      '(800) 555-6789'
    elsif params[:country] == 'uk'
      '(020) 7946-1234'
    else
      '+972 (052) 654-3210'
    end

    render('contact_us')
  end
end

# rubocop:enable Metrics/MethodLength
