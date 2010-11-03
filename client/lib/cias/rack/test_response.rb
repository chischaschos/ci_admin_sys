module CIAS
  module Rack

    require 'json'

    class TestResponse

      def initialize(app)
        @app = app
      end

      def call(env) 
        req = ::Rack::Request.new(env)

        if matches = req.path.match(/^\/test\/(.*)/)
          begin
            req_service = CIAS::Config.defaults[:services][matches[1].to_sym][:response]
          rescue 
            req_service = nil
          end
          [200, {'Content-Type' => 'application/json'}, req_service.to_json]
        else
          @app.call env
        end
      end
    end

  end
end
