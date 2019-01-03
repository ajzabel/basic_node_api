//routes/routes.js

module.exports = function(app, db) {

     app.post('/notes', (req, res) => {
        db.collection('notes').insert(req.body, (err, result) => {
            if (err) {
                res.send({'error': 'An error has occurred'})
            }
            else {
                res.send(result)
            }
        })
        
    })
}