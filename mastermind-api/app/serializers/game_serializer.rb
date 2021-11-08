class GameSerializer
  include JSONAPI::Serializer
  attributes :id, :combo, :score, :board

  belongs_to :user
end
