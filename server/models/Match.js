const mongoose = require('mongoose');
const matchSchema = new mongoose.Schema({
    matchId: { type: String, required: true, unique: true },
    homeTeam: { type: String, required: true },
    awayTeam: { type: String, required: true },
    sport: { type: String, enum: ['cricket', 'football', 'basketball'], required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date },
    status: { type: String, enum: ['scheduled', 'live', 'completed'], default: 'scheduled' },
    homeTeamScore: { type: Number, default: 0 },
    awayTeamScore: { type: Number, default: 0 },
    players: [{ playerId: String, playerName: String, teamName: String, points: { type: Number, default: 0 } }],
    venue: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Match', matchSchema);