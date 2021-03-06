require 'rubygems'
require 'rack/debug'
require 'lib/cias/config'
require 'lib/cias/rack/parser_haml'
require 'lib/cias/rack/test_response'

app = Rack::Builder.new do
  use Rack::Debug
  use Rack::Lint
  # use Rack::Logger
  # use Rack::CommonLogger
  use Rack::ShowExceptions
  use Rack::ContentLength
  use Rack::Static, :urls => ['/stylesheets', '/images', '/javascripts'], :root => "public"
  use CIAS::Rack::TestResponse
  run CIAS::Rack::Parser::Haml.new :context => CIAS::Config.defaults
end

if $0 == __FILE__
  require 'rack'
  require 'rack/showexceptions'
  Rack::Handler.default.run app, :Port => CIAS::Config.port
end
