const Bell = require('../models/bellModel');

/**
 * Liste des sonneries
 */
exports.list_all_bell = (req, res) => {
  Bell.find({bell_id: req.params.bell_id}, (error, bells) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."})
    }
    else{
      res.status(200);
      res.json(bells);
    }
  })
}


/**
 * Création d'une sonnerie
 */
exports.create_a_bell = (req, res) => {
  let new_bell = new Bell(req.body);
  
  new_bell.save((error, bell) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."})
    }
    else{
      res.status(201);
      res.json(bell);
     
    }
  })
}




/**
 * Affiche une sonnerie en fonction de son id
 */
exports.get_a_bell = (req, res) => {

  Bell.findById(req.params.bell_id, (error , bell) =>{
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."})
    }
    else{
      res.status(201);
      res.json(bell);
      
    }
  })
}

