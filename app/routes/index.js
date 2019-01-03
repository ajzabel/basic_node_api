// routes/index.js

const noteRoutes=require('./routes.js')

module.exports = function(app, db) {
    noteRoutes(app, db)
    //Include other route groups
}