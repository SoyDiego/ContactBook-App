class Contact < ApplicationRecord
    validates :firstName, :lastName, :email, :phone,  presence: { message: "Please complete all fields." }
    validates :email, uniqueness: { message: "Email is already registered." }
end
