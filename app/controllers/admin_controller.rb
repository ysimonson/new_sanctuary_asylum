##renamed to community admin controller
class AdminController < ApplicationController
  before_action :authenticate_user!
  before_action :require_admin
  after_action :log_action

  private
  def require_admin
    not_found unless current_user.admin?
  end

  def log_action
    Rails.logger.info "ADMIN [#{current_user.email}, ip: #{request.remote_ip}]:  #{request_path_parameters} #{request_query_parameters}"
  end

  def request_path_parameters
    "PATH: #{request.path_parameters}"
  end

  def request_query_parameters
    "QUERY: #{request.query_parameters}" if request.query_parameters.present?
  end

  def require_admin
    if current_user.community_admin? && current_user.community_id == params[:community_id]
    elsif current_user.regional_admin? && current_user.regional_community_ids.include?(params[:community_id])
    else
      not_found
    end
  end

  ## RULES
  ### When regionsl admins sign in, they have a community_id (like all community admins)
  ## And are redirected to the dashboard with that community_id param

  ##Change it so that they land on friends.

  ## If you are a community admin role AND if you belong to the community,
  ##then you have access.  Else NO ACCESS

  ## If you are a regional admin role AND if user.regional_community_ids.include?(params[:community_id])
end
