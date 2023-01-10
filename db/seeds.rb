# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Guitar.destroy_all

Guitar.create!([
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
                 },
                 {
                   name: 'new guitar',
                   url: 'https://eddiesguitars.com/wp-content/uploads/2022/12/Froggy-Bottom-6-683x1024.jpg',
                   price: '400',
                   description: 'some description'
                 }
               ])

Rails.logger.debug { "Created #{Guitar.count} Guitars." }
