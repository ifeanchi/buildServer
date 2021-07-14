const myServer = require('express')

const app = myServer();
const port = 5000;

app.use(myServer.static('public'))

app.listen(port, () => {
    console.log(`Server is up and running on http://localhost:${port}`);
});
