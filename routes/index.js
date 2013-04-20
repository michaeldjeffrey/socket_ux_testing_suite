
/*
 * GET home page.
 */

exports.index = function(req, res){
	res.cookie('sid', req.session.id)
  res.render('index', { title: 'Express'});
};