class Api::V1::ContactsController < ApplicationController
  def index
    render json: Contact.all
  end

  def create
    contact = Contact.new(contact_params)
      if contact.save
        render json: {contacts: contact, ok: true}, status: :created
      else
        render json: {errors: contact.errors, ok: false}, status: :unprocessable_entity
      end
  end

  def destroy
    Contact.destroy(params[:id])
  end

  def update
    contact = Contact.find(params[:id])
    if contact.update(contact_params)
      render json: {contacts: contact, ok: true}, status: :created
    else
      render json: {errors: contact.errors, ok: false}, status: :unprocessable_entity
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:id, :firstName, :lastName, :email, :phone)
  end
end