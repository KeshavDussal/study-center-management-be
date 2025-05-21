const deskService = require('../services/deskService');

exports.createDesk = async (req, res) => {
    try {
        const desk = await deskService.addDesk(req.body);
        res.status(201).json({ message: 'Desk created successfully', desk });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateDesk = async (req, res) => {
    try {
        const deskId = req.params.id;
        const updatedDesk = await deskService.updateDesk(deskId, req.body);
        res.status(200).json({ message: 'Desk updated successfully', desk: updatedDesk });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// DELETE /api/desks/:id
exports.deleteDesk = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedDesk = await deskService.deleteDesk(id);
        res.status(200).json({ message: 'Desk deleted successfully', deletedDesk });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// GET /api/desks
exports.getAllDesks = async (req, res) => {
    try {
        const desks = await deskService.getAllDesks();

        if (desks.length === 0) {
            return res.status(404).json({ message: 'No desks found.' });
        }

        res.status(200).json(desks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST /api/desks/assign
exports.assignDesk = async (req, res) => {
    try {
        const { studentId, deskId } = req.body;
        const result = await deskService.assignDesk(studentId, deskId);
        res.status(200).json({ message: 'Desk assigned successfully', data: result });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// POST /api/desks/unassign
exports.unassignDesk = async (req, res) => {
    try {
        const { studentId } = req.body;
        const result = await deskService.unassignDesk(studentId);
        res.status(200).json({ message: 'Desk unassigned successfully', data: result });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
