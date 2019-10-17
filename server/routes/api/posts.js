const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get Posts
router.get('/',async (req,res)=> {
const posts = await get_users();
res.send(await posts.find({}).toArray());
});

//Add Posts

router.post('/',async (req,res)=> {

  const posts = await get_users();
  await posts.insertOne({
    userid : req.body.userid,
    username : req.body.username,
    createdAt : new Date()
  });
  res.status(201).send();

});

//Delete Posts

router.delete('/:id',async (req,res)=> {

  const posts = await get_users();
  await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
  res.status(200).send();


});


async function get_users()
{
    const client = await mongodb.MongoClient.connect(
        'mongodb://localhost:27017',
        {
          useNewUrlParser: true
        }
      );
    
      return client.db('PGDataBase').collection('users');
}


module.exports = router;