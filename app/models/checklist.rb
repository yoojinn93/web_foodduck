class Checklist < ActiveRecord::Base
    has_many :additives, throuth: :registers
end
