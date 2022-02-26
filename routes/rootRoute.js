const rootRouter = require('express').Router({ caseSensitive: true });

const { rootGetController, rootPostController } = require('../controllers/rootController');
const upload = require('../middlewares/upload/uploadMiddleware');


rootRouter.get('/', rootGetController);
rootRouter.post('/', upload.single('avatar'), rootPostController);

module.exports = rootRouter;