class Api::UsersController < ApplicationController
    
    def new
        @user = User.new(user_params)
    end

    def create
        @user = User.new(user_params)
        @user.profile_picture.attach(io: open("https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/lightbox_favicon.svg"), filename: "lightbox_favicon.svg" )
        @user.bio = ""
        if @user.save
            signin(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: :unprocessable_entity
        end
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
    end


    def user_params
        params.require(:user).permit(:username, :password, :email, :profile_picture)
    end

end
