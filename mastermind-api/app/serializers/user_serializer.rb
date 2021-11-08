class UserSerializer
  include JSONAPI::Serializer
  attributes :id, :username, :avg_score

  has_many :games

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

end


# {"id":4,"username":"Testdummy","password_digest":"$2a$12$lLGLUZVVdM/DV89A/bDb9ux/UNgXZo7CVT6//I0wqdt9ZZF6gbFJm","created_at":"2021-11-05T05:02:52.898Z","updated_at":"2021-11-05T05:02:52.898Z","average_score":null,"avg_score":8888}

# {"id":4,"username":"Testdummy","password_digest":"$2a$12$lLGLUZVVdM/DV89A/bDb9ux/UNgXZo7CVT6//I0wqdt9ZZF6gbFJm","created_at":"2021-11-05T05:02:52.898Z","updated_at":"2021-11-05T05:02:52.898Z","average_score":null,"avg_score":8888}