const exprees = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World yhouda');
})


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is running on port 3000 yehouda');
}
)