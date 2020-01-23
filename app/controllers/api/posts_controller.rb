class Api::PostsController < ApplicationController
    
    before_action :require_signed_in!

    def index
        num = params[:page].to_i * 3
        @posts = Post.with_attached_photo.order('created_at DESC').last(num)
        render :index
    end
    
    def show
        @post = Post.find(params[:id])
        render :show

    end

    def profile_posts
      num = params[:page].to_i * 9
        @posts = Post.where(user_id: params[:id]).order('created_at DESC').last(num)
        # debugger
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