
//crud operations
use("cruddb")

db.createCollection("collection1")

db.collection1.insertOne({
    "name":"tanish",
    "roll no.":125113045
})

db.collection1.insertMany([
    {
        "name":"tanish1",
        "package":"1cr"
    },
    {
        "name":"tanish2",
        "package":"2cr"
    },
    {
        "name":"tanish3",
        "package":"3cr"
    },
    {
        "name":"tanish4",
        "package":"4cr"
    }
]);

//read
let a= db.collection1.find({"package":"2cr"})

console.log(a);
console.log(a.count());
console.log(a.toArray());

let b = db.collection1.findOne({ "package":"3cr" })
console.log(b);

// UPDATE

db.collection1.updateMany({ name: { $in: ["tanish","tanish1", "tanish2", "tanish3"] } }, {$set:{name: "Tanish Yadav"}},)

db.collection1.updateOne({package: "1cr"}, {$set:{package: "10cr"}})

delete

db.collection1.deleteOne({package:"2cr"})

db.collection1.deleteMany({package:"10cr"})
