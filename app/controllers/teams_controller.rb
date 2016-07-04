class TeamsController < ApplicationController
	def index
		#calling the private method
		render_teams
	end

	def create
		Team.create(team_params)
		#calling the private method
		render_teams
	end

	private
	#private methods that queries all teams in json format
	def render_teams
		render :json => Team.all 
	end

	def team_params
		params.require(:team).permit(:name)
	end
end