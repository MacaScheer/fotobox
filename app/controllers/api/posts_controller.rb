class Api::PostsController < ApplicationController
    
    before_action :require_signed_in!

    def index
        @posts = Post.with_attached_photo
        render :index
    end
    
    def show
        @post = Post.find(params[:id])
        render :show
    end

    def new
        @post = Post.new
    end

    def create
        @post = Post.new(post_params)
        @post.user_id = current_user.id
        if @post.save
            render json: @post
        else
            render json: @post.errors.full_messages, status: :unprocessable_entity
        end
    end

    def edit
        @post = Post.find(params[:id]) 
    end

    private
    def post_params
        params.require(:post).permit(:title, :location, :photo_url)
    end
end