class User < ApplicationRecord
  has_secure_password
  has_many :games
  validates :username, uniqueness: true

  def avg_score
    score = 0
    self.games.each do |game|
      score += game.score
    end
    return score / self.games.count
  end

  def self.mastermind
    all.sort_by{|u| u.avg_score}.last
  end

end
