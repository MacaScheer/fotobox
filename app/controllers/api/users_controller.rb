class Api::UsersController < ApplicationController
    
    def new
        @user = User.new(user_params)
    end
    def create
        @user = User.new(user_params)
        # debugger
        if @user.save
            sign_in(@user)
            render '/api/users/show'
        else
            render json: @user.errors.full_messages, status: :unprocessable_entity
        end
    end


    private
    def user_params
        params.require(:user).permit(:username, :password)
    end

end
