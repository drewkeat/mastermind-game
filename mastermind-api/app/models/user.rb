class User < ApplicationRecord
  has_secure_password
  has_many :games
  validates :username, uniqueness: true

  def total_score
    score = 0
    self.games.each do |game|
      score += game.score
    end
    return score
  end

  def self.mastermind
    self.all.sort_by(&:total_score).last
  end

end
