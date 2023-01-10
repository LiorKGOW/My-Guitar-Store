# frozen_string_literal: true

class CreateGuitars < ActiveRecord::Migration[6.1]
  def change
    create_table :guitars do |t|
      t.string :name
      t.string :url
      t.integer :price
      t.string :description

      t.timestamps
    end
  end
end
