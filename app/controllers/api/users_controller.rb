class Api::UsersController < ApplicationController
    
    def new
        @user = User.new(user_params)
    end

    def create
        @user = User.new(user_params)
        if @user.save
            signin(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: :unprocessable_entity
        end
    end


    private
    def user_params
        params.require(:user).permit(:username, :password, :email)
    end

end
