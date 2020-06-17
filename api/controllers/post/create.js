module.exports = async function(req,res) {
  const postBody = req.body.postBody;
  console.log('Create a post object with text: ' + postBody);
  const record = await Post.create({text: postBody}).fetch();
  res.send(record);
    
}