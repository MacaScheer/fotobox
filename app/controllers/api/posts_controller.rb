class Api::PostsController < ApplicationController
    
    before_action :require_signed_in!

    def index
        firstKey = params[:page]
        @posts = Post.with_attached_photo.all.order('created_at ASC').limit(4).offset(firstKey)
        render :index
    end
    
    def show
        @post = Post.find(params[:id])
        render :show

    end

    def profile_posts
      # num = params[:page].to_i * 9
      #   @posts = Post.where(user_id: params[:id]).order('created_at DESC').last(num)
      firstKey = params[:page]
      if firstKey == "0"
        debugger
        @posts = Post.where(user_id: params[:id]).order('created_at DESC').limit(15)
      else
        @posts = Post.where(user_id: params[:id]).order('created_at DESC').limit(8).offset(firstKey)
      end
        render :index
    end

    def num_posts
      @posts_num = Post.where(user_id: params[:id]).count()
      render json:  [@posts_num, params[:id]]
    end

    def fetch_total
      @num = Post.count()
      render json: @num
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