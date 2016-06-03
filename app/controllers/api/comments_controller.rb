class Api::CommentsController < ApplicationController

	def create		
		Comment.create(text: params[:text], author: params[:author])
		render json: Comment.all
	end

	def index
		render json: Comment.all
	end

	def show
		render json: Comment.find(params[:id])
	end
end
