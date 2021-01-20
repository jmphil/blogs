const require = require('express');
const app = express();
const PORT = 3000;
//views
app.set("view engine", "ejs");
//static folder
app.use(express.static('public'));
//parser
router.use(express.json());
router.use(express.urlencoded({extended: false}));

app.use(bodyParser.json());
//database
let db = require('./models');

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
