module CIAS
  module Config
    def self.defaults
      {:services => {
        :login => '/test/login'
        }
      }
    end
    def self.port
      9191
    end
  end
end
