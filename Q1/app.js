const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const staticPath = path.join(__dirname, '/public');
app.set('view engine', 'hbs');
app.use(express.static(staticPath));

app.get('/', (req, res) => {
    switch (req.query.milestone) {
        case 'The-Birth':
            res.render('The-Birth', {
                record: data["The-Birth"]
            });
            break;
        case 'The-First-Website':
            res.render('The-First-Website', {
                record: data["The-First-Website"]
            });
            break;
        case 'The-Birth_of_at_Sign':
            res.render('The-Birth_of_at_Sign', {
                record: data["The-Birth_of_at_Sign"]
            });
            break;
        case 'Welcome-to-the-Wired-World':
            res.render('Welcome-to-the-Wired-World', {
                record: data["Welcome-to-the-Wired-World"]
            });
            break;
        case 'Dot-Com-Boom':
            res.render('Dot-Com-Boom', {
                record: data["Dot-Com-Boom"]
            });
            break;
        case 'Web-2.0':
            res.render('Web-2', {
                record: data["Web-2.0"]
            });
            break;
        case 'Cloud-Computing-Takes-off':
            res.render('Cloud-Computing-Takes-off', {
                record: data["Cloud-Computing-Takes-off"]
            });
            break;
        case 'Today':
            res.render('Today', {
                record: data["Today"]
            });
            break;
        default:
            res.render('The-Birth', {
                record: data["The-Birth"]
            });
    }

});






app.listen(3000, () => { console.log('Listening to port 3000') });