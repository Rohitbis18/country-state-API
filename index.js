import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';
import cityRoutes from './routes/city.js';
import stateRoutes from './routes/state.js';

const app = express ();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/countries', usersRoutes);
app.use('/cities' , cityRoutes);
app.use('/states' ,stateRoutes);
//app.get('/', (req, res) => res.send('Hello from.')
// );//

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
