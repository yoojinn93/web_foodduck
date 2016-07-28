class Additive < ActiveRecord::Base
    has_many :registers
    has_many :checklists, through: :registers
end
