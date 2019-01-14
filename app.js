const Koa = require('koa');
const config = require('./config.js');
const koaBody = require('koa-body');
const app = new Koa();
const port = 5000;
require('./models/ref');
app.use(koaBody());




const index = require('./routes/index');
const user = require('./routes/user');
const task = require('./routes/task');
const address = require('./routes/address');
const info = require('./routes/info');
const teacher = require('./routes/teacher');
const course = require('./routes/course');

app.use(index.routes());
app.use(user.routes());
app.use(task.routes());
app.use(address.routes());
app.use(info.routes());
app.use(teacher.routes());
app.use(course.routes());

app.listen(port, () => {
    console.log('app running on port: ' + port);
});