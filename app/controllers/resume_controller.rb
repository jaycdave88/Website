class ResumeController < ApplicationController

def download_pdf
  send_file(
    "#{Rails.root}/public/resume.pdf",
    filename: "Jay C. Davé Resume",
    type: "application/pdf"
  )
end