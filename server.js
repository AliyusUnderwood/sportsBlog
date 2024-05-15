const express = require('express');
const sequelize = require('./config/config');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path');
const hbs = require('express-handlebars');
const bcrypt = require('bcrypt');
const User = require('./models/Users');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const upload = require('./config/multerConfig');
const { Comments, Posts } = require('./models');
const app = express();

const port = process.env.PORT || 3000;

const exphbs = hbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine('handlebars', (filePath, options, callback) => {
  const engine = exphbs.engine();
  engine(filePath, options, callback);
});

app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(routes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home', {
    showFeed: true,
  });
});

app.get('/posts', (req, res) => {
  res.render('posts', {});
});

app.get('/login', (req, res) => {
  res.render('auth/login', {
    showLogin: true,
  });
});

app.get('/signup', (req, res) => {
  res.render('auth/signup', {});
});

app.post('/upload', upload.single('profilePic'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  // Access uploaded file info
  const filePath = req.file.path;

  // Create new user instance with file path
  const newUser = new User({
    // Other user data fields
    profilePicture: filePath,
  });

  try {
    // Save user to database
    await newUser.save();
    res.json({ success: true, fileInfo: req.file });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save user' });
  }
});


// Start server
sequelize.sync({ force: false })
  .then(() => {
    return User.sync();
  })
  .then(() => {
    return Posts.sync();
  })
  .then(() => {
    return Comments.sync();
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Error synchronizing models:', err);
  });