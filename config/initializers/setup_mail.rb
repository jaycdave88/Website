ActionMailer::Base.default_url_options = { :host => 'website-jaycdave.herokuapp.com' }  
ActionMailer::Base.delivery_method = :smtp
ActionMailer::Base.perform_deliveries = true
ActionMailer::Base.raise_delivery_errors = true
ActionMailer::Base.smtp_settings = {
  :address              => "smtp.gmail.com",
  :port                 => 587,
  :enable_starttls_auto => true,
  :domain             => 'website-jaycdave.herokuapp.com',
  :user_name            => 'jaycdave@gmail.com',
  :password             => 'Zumiez6431$!',
  :authentication       => "plain"
}

#ActionMailer::Base.default_url_options = { :host => 'localhost', :port => 3000 }