class User < ApplicationRecord
  has_secure_password
  has_many :games
  validates :username, uniqueness: true

  def avg_score
    score = 0
    if self.games.count > 0
      self.games.each do |game|
        score += game.score
      end
      return score / self.games.count
    else
      return 0
    end
  end

  def self.mastermind
    all.sort_by{|u| u.avg_score}.last
  end

  def as_json(options={})
    options[:methods] = [:avg_score]
    super
  end

end
