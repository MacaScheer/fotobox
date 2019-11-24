class Api::PostsController < ApplicationController
    
    before_action :require_signed_in!

    def index
        @posts = Post.with_attached_photo.page(params[:page]).per(5)
        render :index
        # render json:@posts
    end
    
    def show
        @post = Post.find(params[:id])
        render :show

    end

    def profile_posts
        @posts = Post.where(user_id: params[:id])
        render :index
    end

    def new
        @post = Post.new
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: :unprocessable_entity
        end
    end

    def edit
        @post = Post.find(params[:id]) 
    end

    # def destroy
    #     post = Post.find(params[:id])
    #     post.destroy
    #     render :index

    # end
  def destroy 
    @post = Post.find(params[:id])
      if @post.user_id = current_user.id 
        @post.destroy
        render json: {postId: params[:id]}
      else 
        render json: ["Users are only able to delete pictures they have posted"], status: 401
      end

    #   render :index
  end

    private
    def post_params
        params.require(:post).permit(:title, :location, :photo, :user_id)
    end
end