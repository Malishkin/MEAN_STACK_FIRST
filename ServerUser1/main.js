const express = require('express');
const usersRouter = require('./routers/usersRouter');

const cors = require('cors');

let app = express();

app.use(cors());

require('./configs/database');

app.use(express.json());

app.use('/api/users1', usersRouter)



app.listen(8000);

