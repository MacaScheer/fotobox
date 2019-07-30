class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            sign_in(@user)
            render "/api/users/show"
        else
            render json: ["invalid credentials"], status: :unprocessable_entity
        end
    end

    def destroy
       if logged_in?
            sign_out
            output = {}
            render json: output
       else
            render json: ["error"], status: 405 
        end
    end
end
