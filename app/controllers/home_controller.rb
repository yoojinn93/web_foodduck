class HomeController < ApplicationController
  def main
  end
  def index
     if user_signed_in?
       redirect_to "/home/main" 
     end
  end
end
