require 'rack/debug'

module Rack

  require 'haml'

  class Haml
    
    def initialize(options = {})
      @options = {:root => 'public', :engine => ::Haml::Engine}.merge(options)
    end

    def call(env)
      req = Rack::Request.new(env)

      if req.get?
          template_name = @options[:root] + get_template_name(req.path)
          [200, {'Content-Type' => 'text/html'}, render(template_name)]
      end
    end

    private
    def get_template_name(requested_file)
      requested_file == '/' ?  '/index.haml' : requested_file.gsub(/.html$/, 'haml')
    end

    def render(template_name)
      engine = @options[:engine].new(::File.read(template_name))
      engine.render
    end

  end

end

app = Rack::Builder.new do
  use Rack::Debug
  use Rack::Lint
  use Rack::CommonLogger
  use Rack::ShowExceptions
  use Rack::ContentLength
  run Rack::Haml.new
end

if $0 == __FILE__
  require 'rack'
  require 'rack/showexceptions'
  Rack::Handler.default.run app, :Port => 9191
end
