module CIAS
  module Config
    def self.defaults
      {:services => {
        :login => { 
          :url => '/test/login',
          :response => {
            :session => {
                :id => 1,
                :name => 'bla_session'
              },
            :successful => true,
            :errors => nil
            }
          }
        }
      }
    end
    def self.port
      9191
    end
  end
end
