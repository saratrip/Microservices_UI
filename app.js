const express = require('express')
const request = require('request')
const path = require('path')
const app = express()
const port = process.env.PORT || 3010
console.log('#### process.env = ', process.env)
console.log('#### process.env.APP_URL = ', process.env.APP_URL)
const catalogServer = process.env.APP_URL.replace('-ui-', '-catalog-api-')
const orderServer = process.env.APP_URL.replace('-ui-', '-orders-api-')
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true,
    limit: "5mb"
}));
app.use(express.static(__dirname + '/static'));

app.get('/getItems', (req, res) => {
    request(`${catalogServer}/items`, (error, response, body) => {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.
        res.json(JSON.parse(body))
    });
})

app.post('/submitOrders', (req, res) => {
    request.post({
        url: `${orderServer}/rest/orders`, 
        form: { data: req.body }
    }, (err,httpResponse,body) => {
        res.json({success:true})            
    })
})

app.get('/getOrders', (req, res) => {
    request.get({
        url: `${orderServer}/rest/orders`
    }, (err,httpResponse,body) => {
        const _body = body.split('<p>').filter(el => el).join(',')
        res.json(JSON.parse(_body))
    })
})

app.get('/', (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, './')
    })
})
app.listen(port, () => console.log(`App listening on port ${port}!`))
