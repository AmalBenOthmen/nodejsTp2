const express = require ("express");
const router = express.Router();
let voitures = [{id:1,name:"clio"},{id:2,name:"megane"},{id:3,name:"range"}]

router.post('/ajouter', (req,res)=>{
   
   let newVoiture=req.body;
   voitures.push(newVoiture) ;
   res.send(voitures);

})
router.get('/all',(req,res)=>{
res.send(voitures);

})
router.get('/:id',(req,res)=>{
    const id = parseInt(req.params.id); 
    const voiture = voitures.find(V => V.id === id); 
    if (voiture) {
      res.json(voiture);
    }
    else
    res.send("this car doesn't exist");
})
router.put('/update/:id',(req,res)=>{
    const id = parseInt(req.params.id); 
    const voiture = voitures.find(V => V.id === id); 
    if (voiture) {
        
        voitures[voiture]=req.body ;
        res.json(voitures[voiture]);
        
    }else
    res.send("this car doesn't exist");
})
router.delete('/delete/:id',(req,res)=>{
    const id = parseInt(req.params.id); 
    const voiture = voitures.find(V => V.id === id); 
    if (voiture) {
        voitures.splice(voiture);
        }else
    res.send("this car doesn't exist");
})
    module.exports=router;