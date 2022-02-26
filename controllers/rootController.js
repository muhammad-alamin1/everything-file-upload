const rootGetController = (req, res) => {
    res.render('pages/index', {
        title: 'File Upload',
        url: '',
        size: '',
        name: '',
        type: '',
    })
}

const rootPostController = (req, res) => {
    res.render('pages/index', {
        title: 'File Upload',
        url: req.file.filename,
        size: req.file.size,
        name: req.file.originalname,
        type: req.file.mimetype,
    })
}

module.exports = {
    rootGetController,
    rootPostController
}