const Contact = require('../models/contactSchema');
const asyncHandler = require('express-async-handler');
// async handler will catch all the exceptions. this is can be used instead of try catch block
const getAllContacts = asyncHandler(async(req, res) => {
    const allContacts = await Contact.find();
    res.status(200).json(allContacts);

    // res.status(200).json({title:"Success", message:"Get all contacts"});
});

const getContactById = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
    // res.status(200).json({title:"Success", m÷essage:"Get contact by id"});
});

const createContact = asyncHandler(async(req, res) => {
    try {
        console.log("Req.body", req.body);
    const { name, email,phone } = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("Name , phone and Email are mandatory");
    }
    const saveRes = await Contact.create({
        name,
        email,
        phone
    });
    res.status(200).json(saveRes);
    } catch (error) {
        console.log("catch error", error)
    }
    
});

const updateContactById = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(200).json(updatedContact);
});

const deleteContactById = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    // const deleteContact = await Contact.deleteOne({_id:req.params.id});
    const deleteContact = await Contact.findByIdAndDelete(req.params.id);

    res.status(200).json(deleteContact);
});


module.exports = { getAllContacts, getContactById, createContact, updateContactById,deleteContactById };