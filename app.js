const require = require('express');
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static('public'));

var bodyParser = require("body-parser");
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
//database
let db = require('./models');

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
