const express = require('express');
const {
    insertOne,
    insertMany,
    find,
    findOne,
    findWithLimit,
    findWithSkip,
    findWithSort,
    distinct,
    countDocuments,
    updateOne,
    updateMany,
    replaceOne,
    deleteOne,
    deleteMany,
    aggregate,
    createIndex,
    dropIndex,
    getIndexes,
    findOneAndUpdate,
    findOneAndDelete,
    bulkWrite,
    findOneAndReplace,
    renameCollection,
    dropCollection,
    listCollections,
} = require('../controllers/mongodbController');

const router = express.Router();

// Routes
router.post('/insertOne', insertOne);
router.post('/insertMany', insertMany);
router.get('/find', find);
router.get('/findOne', findOne);
router.get('/findWithLimit', findWithLimit);
router.get('/findWithSkip', findWithSkip);
router.get('/findWithSort', findWithSort);
router.get('/distinct', distinct);
router.get('/countDocuments', countDocuments);
router.put('/updateOne', updateOne);
router.put('/updateMany', updateMany);
router.put('/replaceOne', replaceOne);
router.delete('/deleteOne', deleteOne);
router.delete('/deleteMany', deleteMany);
router.post('/aggregate', aggregate);
router.post('/createIndex', createIndex);
router.delete('/dropIndex', dropIndex);
router.get('/getIndexes', getIndexes);
router.put('/findOneAndUpdate', findOneAndUpdate);
router.delete('/findOneAndDelete', findOneAndDelete);
router.post('/bulkWrite', bulkWrite);
router.put('/findOneAndReplace', findOneAndReplace);
router.put('/renameCollection', renameCollection);
router.delete('/dropCollection', dropCollection);
router.get('/listCollections', listCollections);

module.exports = router;