module.exports = async function(req, res) {
  const postBody = req.body.postBody
  const record = await Post.create({text: postBody}).fetch();
  res.send(record);
}