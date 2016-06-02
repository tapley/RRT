class Api::CommentsController < ApplicationController

	def create
		render json: Comment.create(text: params[:text], author: params[:author])
	end

	def index
		render json: Comment.all
	end

	def show
		render json: Comment.find(params[:id])
	end
end
