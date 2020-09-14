class Contact < ApplicationRecord
    validates :firstName, presence: { message: "First Name is REQUIRED" }
    validates :lastName, presence: { message: "Last Name is REQUIRED" }
    validates :email, presence: { message: "Email is REQUIRED" }, uniqueness: { message: "Email is already registered." }
    validates :phone,  presence: { message: "Phone is REQUIRED" }
end
