// src/bot.js

const { ActivityTypes, MessageFactory } = require('botbuilder');
const { createResource, deleteResource, startResource, stopResource, scaleResource } = require('./resourceManagement');
const { queryMetrics, fetchLogs, monitorAlerts } = require('./monitoring');
const { generateReports } = require('./reporting');

class WhizBot {
    async onTurn(context) {
        if (context.activity.type === ActivityTypes.Message) {
            const userMessage = context.activity.text;
            const response = await this.handleUserMessage(userMessage);
            await context.sendActivity(response);
        }
    }

    async handleUserMessage(userMessage) {
        // Implement logic to parse and handle user commands here
        // Example: "Create a VM," "Fetch resource metrics," etc.
        // You can call functions from other modules (e.g., resourceManagement.js, reporting.js) as needed.
    }
}

module.exports.WhizBot = WhizBot;
