module.exports = (server) => {
    const bellController = require('../controllers/bellController');
    
  
    server.route('/bell')
    .get(bellController.list_all_bell)
    .post(bellController.create_a_bell)
    
  
    server.route('/bells/:bell_id') // req.params.bell_id
    .get(bellController.get_a_bell) // affiche une sonnerie 
    .put(bellController.update_a_bell)
    
  }
  