class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            signin(@user)
            render "/api/users/show"
        else
            render json: ["invalid credentials"], status: :unprocessable_entity
        end
    end

    def destroy
       if logged_in?
            signout
            output = {}
            render json: output
       else
            render json: ["error"], status: 405 
        end
    end
end
