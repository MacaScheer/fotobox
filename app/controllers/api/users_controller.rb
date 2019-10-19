require 'open-uri'

class Api::UsersController < ApplicationController
    
    # def new
    #     @user = User.new(user_params)
    # end

    def create
        @user = User.new(user_params)
        # profile = open("https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/lightbox_favicon.svg")
        # @user.profile_picture.attach(io: profile, filename: "lightbox_favicon.svg" )
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
        # render :index
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
