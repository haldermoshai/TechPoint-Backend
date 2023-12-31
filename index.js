const express = require ("express"); //importing format
const mongoose = require ("mongoose");
const productRouter = require ("./routes/productRoutes");
const userRouter = require ("./routes/userRoutes");
const cors = require ("cors");

const app = express ();

app.use (cors(
	{origin: "http://localhost:3000"}
));

const mongoDbUrl = "mongodb+srv://sourav:sourav@cluster0.zhzbmm4.mongodb.net/shopping_site?retryWrites=true&w=majority";

mongoose.connect (mongoDbUrl, {});

const db = mongoose.connection;

db.on ("error", console.error.bind (console, "Mongodb connection error: "));

db.once ("open", () => {
	console.log ("Connected to MongoDB!");
});

app.use (express.json());
app.use (productRouter);
app.use (userRouter);

app.listen (4000, "0.0.0.0", () => {
	console.log ("Server started at port 4000");
});