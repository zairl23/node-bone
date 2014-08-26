var koa = require('koa')
  , router = require('koa-router')
  , request = require('request')
  , app = koa()
  , serve = require('koa-static')
  , url = 'http://example.com';

// Model logic
var Model = {
    all: function() {
		request(apiName, function (error, response, body){
			if (!error && response.statusCode == 200) {
    		    Model.data = '';
		        Model.data = JSON.parse(body);
    	    }
   	    });
   	    return Model.data;
    }
} 

app.use(router(app));
// server static file
app.use(serve('.'));
//app.use('/', )
app.get('/', function *(next) {
  //var user = yield User.findOne(this.params.id);
  this.body = 'hello, welcome to node-bone';
});

// route about Model
app.get('/model/all', function *(next) {
    this.body = Model.all();
});

var port = Number(process.env.PORT || 3000);
app.listen(port);

