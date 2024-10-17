const express = require("express");
const cors = require("cors");
// copied from mongodb atlas
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 3000;

// middlewares

app.use(
  cors({
    origin: "*",
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// database connection string
const uri =
  "mongodb+srv://suprithn:suprithn@cluster0.yhagvpl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // creating a new database and a new collection
    const bookCollections = client.db("BookInventory").collection("books");

    // post method to upload a book
    app.post("/upload-book", async (req, res) => {
      const body = req.body;
      const result = await bookCollections.insertOne(body);
      res.status(200).json(result);
    });

    // get method to get all books
    app.get("/books", async (req, res) => {
      const books = await bookCollections.find({}).toArray();
      res.status(200).json(books);
    });

    // get books by its genre
    app.get("/books/genre", async (req, res) => {
      const genre = req.query.genre;
      const books = await bookCollections.find({ category: genre }).toArray();
      res.status(200).send(books);
    });

    // get a particular book
    app.get("/book/:id", async (req, res) => {
      const book = await bookCollections.findOne({
        _id: new ObjectId(req.params.id),
      });
      res.status(200).send(book);
    });

    // put method to update a document
    app.put("/book/:id", async (req, res) => {
      const id = req.params.id;
      const toUpdate = req.body;
      const result = await bookCollections.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: toUpdate },
        { new: true }
      );
      res.status(200).json(result);
    });

    // delete method to delete a document
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const result = await bookCollections.deleteOne({ _id: new ObjectId(id) });
      res.status(200).send(result);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
