const exprees = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World yhouda');
})



app.listen(3000, () => {
    console.log('Server is running on port 3000 yehouda');
}
)