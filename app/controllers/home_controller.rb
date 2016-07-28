class HomeController < ApplicationController
  def index
     if user_signed_in?
       redirect_to "/home/main" 
     end
  end
  def checklist
    @checklists=Checklist.all
  end
  def checklist_create
    @checklist= Checklist.new(title: params[:title])
    @checklist.save
    redirect_to "/home/checklist"
  end
  def checklist1
    @checklists_selected=Checklist.find_by(:id => params[:id])
    @additives=Additive.where(checklist_id: params[:id])
  end
  def additive_create
    @additive=Additive.new(name: params[:name], checklist_id: params[:id])
    @additive.save
    redirect_to :back
  end
  def delete_list
        @one_check = Checklist.find(params[:id])
        @one_check.destroy
        redirect_to "/home/checklist"
  end
  def delete_additive
        @one_add = Additive.find(params[:id])
        @one_add.destroy
        redirect_to :back
  end
      
end
