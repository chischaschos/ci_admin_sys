module RackParser

  require 'haml'

  class Haml
    
    def initialize(options = {})
      @options = {:root => 'public', :engine => ::Haml::Engine, :extensions => ['html', 'tpl']} \
        .merge(options)
    end

    def call(env)
      req = Rack::Request.new(env)

      if req.get? && req.path =~ /#{get_extensions_regexp}$/
          template_name = @options[:root] + get_template_name(req.path)
          [200, {'Content-Type' => 'text/html'}, render(template_name)]
      end
    end

    private
    def get_template_name(requested_file)
      requested_file == '/' ?  '/index.haml' : requested_file.gsub(/html$/, 'haml')
    end

    def render(template_name)
      engine = @options[:engine].new(::File.read(template_name))
      engine.render
    end

    def get_extensions_regexp
      debugger
      @options[:extensions].join('|') << '|\/'
    end

  end

end

