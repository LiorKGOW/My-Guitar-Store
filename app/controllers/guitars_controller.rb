class GuitarsController < ApplicationController
  def index
    render :json => [
        {
            'name':'guitar1',
            'url':'https://rukminim1.flixcart.com/image/416/416/acoustic-guitar/x/8/w/topaz-blue-signature-original-imaefec7uhypjdr9.jpeg?q=70',
            'price':'100',
            'description':'blablabla 1'
        },
        {
            'name':'guitar2',
            'url':'https://shop.brianmayguitars.co.uk/user/special/content/Antique%20Cherry%20a.jpg',
            'price':'200',
            'description':'blablabla 2'
        },
        {
            'name':'guitar3',
            'url':'https://cdn.mos.cms.futurecdn.net/Yh6r74b8CAj2jbdf2FAhq4-970-80.jpg.webp',
            'price':'300',
            'description':'blablabla 3'
        }
    ]
  end
end
