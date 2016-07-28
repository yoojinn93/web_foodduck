class Checklist < ActiveRecord::Base
    has_many :registers
    has_many :additives, through: :registers
end
