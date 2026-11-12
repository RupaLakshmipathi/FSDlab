const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Rupa',
        course: 'CSE'
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});


//views/home.ejs
<html>
<body>
    <h1>Welcome <%= name %></h1>
    <h2>Course: <%= course %></h2>
</body>
</html>
