require 'rubygems'
require 'rack/debug'
require 'lib/rack_parser/haml'

app = Rack::Builder.new do
  use Rack::Debug
  use Rack::Lint
  use Rack::CommonLogger
  use Rack::ShowExceptions
  use Rack::ContentLength
  use Rack::Static, :urls => ['/stylesheets', '/images', '/javascripts'], :root => "public"
  run RackParser::Haml.new
end

if $0 == __FILE__
  require 'rack'
  require 'rack/showexceptions'
  Rack::Handler.default.run app, :Port => 9191
end
