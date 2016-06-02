import path from 'path';
import express from 'express';
import config from 'config';
import OoyalaApi from 'ooyala-api';

const app = express();
const port = process.env.PORT || 8080;
const BASE_DIR = path.join(__dirname, '../../../');
const api = new OoyalaApi(config.api.key, config.api.secret, {log: true});

app.use(express.static(BASE_DIR + 'dist'));

app.get('/channel/:id', (req, res) => {
  const channelId = decodeURIComponent(req.params.id);
  console.log('REQUEST: /channel/' + channelId);

  // Get the info associated with the video URL
  api.get('/v2/assets/' + channelId + '/lineup')
  .then((items) => {
    res.status(200).json(items);
  }).catch((err) => {
    console.error(err);
    res.sendStatus(404);
  });
});

// Start server
//if (require.main === module) {
  console.log('Server listening on port %s', port);
  app.listen(port);
//}

export default app;
