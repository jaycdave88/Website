class Api::V1::ContactController < ActionController::Base
	def create
		begin
			ContactMailer.send_message(params).deliver
			@flash = { success: true, message: 'Your message has been delivered!!' }
		rescue Exception => e
			@flash = { success: false, message: e.message }
		end
	end
end