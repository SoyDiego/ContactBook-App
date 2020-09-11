class Api::V1::ContactsController < ApplicationController
  def index
    render json: Contact.all
  end

  def create
    contact = Contact.create(contact_params)
    render json: contact
  end

  def destroy
    Contact.destroy(params[:id])
  end

  def update
    contact = Contact.find(params[:id])
    contact.update_attributes(contact_params)
    render json: contact
  end

  private

  def contact_params
    params.require(:contact).permit(:id, :firstName, :lastName, :email, :phone)
  end
end