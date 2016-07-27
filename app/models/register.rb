class Register < ActiveRecord::Base
    belongs_to :additive
    belongs_to :checklist
end
