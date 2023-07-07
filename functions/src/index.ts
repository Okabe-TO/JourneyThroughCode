import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';

const app = express();
app.use(cors());

app.get('/api', (req, res) => {
	res.send('Hello, world!!');
});

export const api = functions.https.onRequest(app);
