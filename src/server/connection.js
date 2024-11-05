import { MongoClient, ServerApiVersion } from "mongodb"; 

const uri = "mongodb+srv://BryanCL:srNt6v9a4ywcfz7a@Cluster0.9brzi.mongodb.net/Users?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const connectDB = async () => {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

export const db = client.db("Cluster0");