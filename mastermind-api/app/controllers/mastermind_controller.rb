class MastermindController < ApplicationController
    def index
        @mastermind = User.mastermind

        render json: @mastermind
    end
end
