class PlayersController < ApplicationController
	def index
		#calling the private method
		render_players
	end

	def create
		Player.create(player_params)
		#calling the private method
		render_players
	end

	private
	#private method that queries all players in json format
	def render_players
		render :json => Player.all 
	end

	def player_params
		params.require(:player).permit(:first_name, :last_name)
	end
end