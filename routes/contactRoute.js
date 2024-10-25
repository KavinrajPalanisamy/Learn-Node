const express = require('express');
const router = express.Router();
const { 
    getAllContacts,
    getContactById,
    createContact, 
    updateContactById,
    deleteContactById 
} = require('../controllers/contactController');


router.route('/').get(getAllContacts);

router.route('/:id').get(getContactById);

router.route('/').post(createContact);

router.route('/:id').put(updateContactById);

router.route('/:id').delete(deleteContactById);

module.exports = router;