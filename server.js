const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there

app.use(cors());

app.use(express.json());


const uri = process.env.ATLAS_URI;
//const db = require("./config/keys").mongoURI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./routes/users');
 //const comsRouter = require('./routes/coms');
// const healthsRouter = require('./routes/healths');
// const crowdsRouter = require('./routes/crowds');
// const hygienesRouter = require('./routes/hygienes');
// const lqisRouter = require('./routes/lqis');
// const formsRouter = require('./routes/forms');

app.use('/users', usersRouter);
 //app.use('/coms', comsRouter)
// app.use('/healths', healthsRouter)
// app.use('/crowds', crowdsRouter)
// app.use('/hygienes', hygienesRouter)
// app.use('/lqis', lqisRouter)
// app.use('/forms', formsRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

