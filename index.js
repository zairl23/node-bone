var koa = require('koa')
  , router = require('koa-router')
  , request = require('request')
  , app = koa()
  , serve = require('koa-static');

app.use(router(app));
// server static file
app.use(serve('.'));
//app.use('/', )
app.get('/web', function *(next) {
  //var user = yield User.findOne(this.params.id);
  this.body = 'hello';
});
app.get('/web/1', function *(next) {
  //var user = yield User.findOne(this.params.id);
  this.body = 'hello';
  //app.use(serve('index.html'));
});


var port = Number(process.env.PORT || 3000);
app.listen(port);

