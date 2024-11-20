// Error management middleware
const middleware = ((err, req, res, next) => {
    res.status(500).json({ error: err.message });
})

module.exports = middleware