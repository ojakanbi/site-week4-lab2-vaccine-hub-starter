
// const ExpressError = require('./utils/errors'); //importing the error class
const userRoutes = require('./routes/user'); //importing the user routes
const express = require('express'); //importing express
require('dotenv').config();

const app = express();
app.use(express.json());  // creating an instance of express

const port = process.env.PORT || 5000

app.use(userRoutes); //using the user routes

app.get('/', (req, res) => {
    res.status(200).send('This server is working!')
}
)




// app.get('*', function(req, res){
//     res.status(404).send('what???');
//   });   // 404 error handling


app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})

