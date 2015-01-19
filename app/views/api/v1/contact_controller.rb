class Api::V1::ContactController < ActionController::Base
	def create
		begin
			ContactMailer.message(params).deliver
			render json: { status: true, message: 'Your message has been delivered!!' }
		rescue Exception => e
			render json: { status: false, message: e.message }
		end
	end
end