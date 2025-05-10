const User = require('../model/mongoModel');

// Insert a single document
exports.insertOne = async (req, res) => {
    try {
        const user = new User(req.body);
        const result = await user.save();
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Insert multiple documents
exports.insertMany = async (req, res) => {
    try {
        const result = await User.insertMany(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Find documents
exports.find = async (req, res) => {
    try {
        const result = await User.find(req.query);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Find one document
exports.findOne = async (req, res) => {
    try {
        const result = await User.findOne(req.query);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Find documents with limit
exports.findWithLimit = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 5;
        const result = await User.find().limit(limit);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Find documents with skip (pagination)
exports.findWithSkip = async (req, res) => {
    try {
        const skip = parseInt(req.query.skip) || 0;
        const result = await User.find().skip(skip);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Find documents with sort
exports.findWithSort = async (req, res) => {
    try {
        const sort = req.query.sort || { age: -1 };
        const result = await User.find().sort(sort);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get distinct values
exports.distinct = async (req, res) => {
    try {
        const field = req.query.field;
        const result = await User.distinct(field);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Count documents
exports.countDocuments = async (req, res) => {
    try {
        const result = await User.countDocuments(req.query);
        res.status(200).json({ count: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update one document
exports.updateOne = async (req, res) => {
    try {
        const result = await User.updateOne(req.query, req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update multiple documents
exports.updateMany = async (req, res) => {
    try {
        const result = await User.updateMany(req.query, req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Replace one document
exports.replaceOne = async (req, res) => {
    try {
        const result = await User.replaceOne(req.query, req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete one document
exports.deleteOne = async (req, res) => {
    try {
        const result = await User.deleteOne(req.query);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete multiple documents
exports.deleteMany = async (req, res) => {
    try {
        const result = await User.deleteMany(req.query);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Aggregate
exports.aggregate = async (req, res) => {
    try {
        const pipeline = req.body.pipeline || [];
        const result = await User.aggregate(pipeline);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create an index
exports.createIndex = async (req, res) => {
    try {
        const field = req.body.field;
        const options = req.body.options || {};
        const result = await User.createIndex(field, options);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Drop an index
exports.dropIndex = async (req, res) => {
    try {
        const indexName = req.body.indexName;
        const result = await User.collection.dropIndex(indexName);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// List all indexes
exports.getIndexes = async (req, res) => {
    try {
        const result = await User.collection.indexes();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Find and update one document atomically
exports.findOneAndUpdate = async (req, res) => {
    try {
        const result = await User.findOneAndUpdate(req.query, req.body, { returnDocument: 'after' });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Find and delete one document
exports.findOneAndDelete = async (req, res) => {
    try {
        const result = await User.findOneAndDelete(req.query);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Bulk write
exports.bulkWrite = async (req, res) => {
    try {
        const operations = req.body.operations || [];
        const result = await User.bulkWrite(operations);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Find and replace one document
exports.findOneAndReplace = async (req, res) => {
    try {
        const result = await User.findOneAndReplace(req.query, req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Rename collection
exports.renameCollection = async (req, res) => {
    try {
        const newName = req.body.newName;
        const result = await User.collection.rename(newName);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Drop collection
exports.dropCollection = async (req, res) => {
    try {
        const result = await User.collection.drop();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// List all collections
exports.listCollections = async (req, res) => {
    try {
        const collections = await User.db.listCollections().toArray();
        res.status(200).json(collections);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};  