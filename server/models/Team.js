const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    playerId: { type: String, required: true },
    playerName: { type: String, required: true },
    position: { type: String, required: true },
    points: { type: Number, default: 0 }
});

const TeamSchema = new mongoose.Schema({
    teamId: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    teamName: { type: String, required: true },
    matchId: { type: String, required: true },
    captain: { type: String, required: true },
    viceCaptain: { type: String, required: true },
    players: [PlayerSchema],
    totalPoints: { type: Number, default: 0 },
    rank: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Team', TeamSchema);