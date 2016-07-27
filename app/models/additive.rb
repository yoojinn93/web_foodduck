class Additive < ActiveRecord::Base
    has_many :checklists, throuth: :registers
end
