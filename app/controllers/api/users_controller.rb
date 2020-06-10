require 'open-uri'

class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        @user.profile_picture.attach(io: File.open("#{Rails.root}/app/assets/images/rolleiflex.jpg"), filename: "rolleiflex.jpg")
        @user.bio = ""
        if @user.save
            signin(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: :unprocessable_entity
        end
    end

    def index
        @user = User.all
        render 'api/users/index'
    end

    def update
        @user = current_user
        
        if @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find(params[:id])
        render :show
    end


    def user_params
        params.require(:user).permit(:username, :password, :email, :profile_picture)
    end

end
