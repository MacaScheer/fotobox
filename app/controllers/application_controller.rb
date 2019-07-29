class ApplicationController < ActionController::Base
protect_from_forgery with: :exception
helper_method :logged_in?, :current_user

private
def logged_in?
    !!current_user
end

def current_user
    @current_user ||= self.find_by_session_token(session[:session_token])
end

def signin(user) 
    @current_user = user
    session[:session_token] = user.reset_session_token!
end

def signout
    current_user.try(:reset_session_token!)
    session[:session_token] = nil
end

def require_signed_in!
    redirect_to new_session_url unless logged_in?
end
end

