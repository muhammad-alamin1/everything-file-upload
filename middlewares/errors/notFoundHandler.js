const notFoundHandler = (req, res, next) => {
    res.render('pages/404', {
        title: 'Not Found',
    })
}

module.exports = {
    notFoundHandler
};