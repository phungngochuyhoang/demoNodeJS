require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const routerGame = require('./routers/router-game');
const routerMusic = require('./routers/router-music');
const routerLogin = require('./routers/router-authentication');
const routerFollow = require('./routers/router-follow');
const routerGit = require('./routers/router-git');
const auth = require('./middleware/authentication');
const sessionMiddleware = require('./middleware/session');



const urlencodedBodyParser = bodyParser.urlencoded({extended: false});

const app = express();
const public = express.static('public');

// middleware 
app.use(urlencodedBodyParser);
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware.session);


//set file static
app.use(public);
app.use('/game', public);
app.use('/game/infoGame', public);
app.use('/game/follow', public)
 
// set view
app.set('view engine', 'pug');
app.set('views', './views');


// router
app.get('/', function(req, res) {
    res.render('index', {
        title: 'Home'
    })
})

app.use('/game', auth.authentication, routerGame);
app.use('/music', auth.authentication, routerMusic);
app.use('/login', routerLogin);
app.use('/follow', routerFollow);
app.use('/git', routerGit);

//listen
app.listen(process.env.PORT, process.env.HOST, function() {
    console.log('Server running with port ' + process.env.PORT);
})



