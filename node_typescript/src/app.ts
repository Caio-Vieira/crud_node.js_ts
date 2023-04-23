import 'dotenv/config';
import  express from 'express';
import { startConection,stopConection } from './infra/db/mongo';
import  routes  from './routes/route';

const app = express();
//startConection();
stopConection()
app.use(express.json());
app.use(routes);

export default app




