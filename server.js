const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000' // Cho phép domain của trang web
}));

// ... Các routes và phần còn lại của code server ...

app.listen(5000, () => {
    console.log('Server đang chạy tại port 5000');
});

const dbConnection = require('./db')
const roomsRoute = require('./routes/roomsRoute')

app.use('/api/rooms', roomsRoute)
app.use(express.json());

// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log('Node Server Started using nodemon'));
// const userRoute = require('./routes/usersRoute');
// app.use('/api/users', usersRoute);
