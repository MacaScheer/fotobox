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
        # debugger
        @post = Post.new(post_params)
        @post.user_id = current_user.id
        @post.photo_url = post_params.photo_url
        @post.title = post_params.title
        if @post.save
            render json: @post
        else
            render json: @post.errors.full_messages, status: :unprocessable_entity
        end
    end

    def edit
        @post = Post.find(params[:id]) 
    end

    def destroy
        post = Post.find(params[:id])
        post.destroy
        render :index
    end

    private
    def post_params
        params.require(:post).permit(:title, :location, :photo_url)
    end
end