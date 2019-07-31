class PostsController < ApplicationController
    before_action :require_signed_in!

    def index
        @posts = Post.all
    end
    
    def show
        @post = Post.find_by(params[:id])
    end
    def new
        @post = Post.new
    end

    def create
        @post = Post.new(post_params)
        @post.author_id = current_user.id
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: :unprocessable_entity
        end
    end

    def edit
        @post = Post.find(params[:id]) 
    end

    def update
        @post = current_user.posts.find(params[:id])
        if @post.update_attributes(post_params)
            render :show
        else
            render json: @post.errors.full_messages, status: :unprocessable_entity
        end
    end



    private
    def post_params
        params.require(:post).permit(:title, :img_url, :location)
    end

end