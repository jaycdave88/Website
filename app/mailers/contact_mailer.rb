class ContactMailer < ActionMailer::Base
  def send_message params
    @name = params[:name]
    @email = params[:email]
    @subject = params[:subject]
    @message = params[:message]
    mail to: 'jaycdave@gmail.com', from: 'letsmakelife2happy@gmail.com',
        subject: '1 New Mail Received'
  end
end