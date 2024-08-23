import { MongoClient, ServerApiVersion } from "mongodb";

let db;
export const connectDB = async()=>{
    if(db) return db;
    
    try{
        const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
        if(uri)
        {
            const client = new MongoClient(uri, {
                serverApi: {
                  version: ServerApiVersion.v1,
                  strict: true,
                  deprecationErrors: true,
                }
            });
            db = client.db("Next-Auth");
            return db;
        }
        console.log("URI not found!");
        
    }
    catch(err)
    {
        console.log(err);
    }
}
