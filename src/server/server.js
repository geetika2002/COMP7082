import express from 'express';
// import cors from 'cors';
import users from "./routes/user.js";
import db from './connection.js';

const PORT = process.env.PORT || 5050;
const app = express();

// app.use(cors());
app.use(express.json());

app.use("/user", users);

app.use((req, res, next) => {
    req.db = db; // Attach db to the request object
    next();
  });

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});