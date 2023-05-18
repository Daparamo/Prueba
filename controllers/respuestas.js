const { async } = require('rxjs');
const Respuestas = require('../models/respuestas');



module.exports = {
    
    getRespuestas: async (req, res, next) => {
        try {
            const respuestas = await Respuestas.find({});
            res.status(200).json(respuestas);
        }
        catch (e) {
            console.log("Error Index: **************", e)
        }
    },
    
    newRespuesta: async (req, res, next) => {
        try {
            const newRespuesta = new Respuestas(req.body)
            const respuesta = await newRespuesta.save();
            _id = respuesta._id.toString()

            res.status(200).json(_id);
        } catch (e) {
            res.status(400);
        }
    },
    
    updateRespuesta: async (req, res, next) => {
       
    },
    
    delRespuesta: async (req, res, next) => {
       
    }
};