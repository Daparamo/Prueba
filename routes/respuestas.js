const router = require('express-promise-router')();

const { getRespuestas, newRespuesta, updateRespuesta, delRespuesta } = require('../controllers/respuestas');



router.get('/', getRespuestas);
router.post('/', newRespuesta);
router.put('/', updateRespuesta);
router.delete('/', delRespuesta);



module.exports = router;