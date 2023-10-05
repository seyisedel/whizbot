// src/index.js

const { BotFrameworkAdapter } = require('botbuilder');
const { WhizBot } = require('./bot');

// Load environment variables from .env file (dotenv package required)
require('dotenv').config();

// Create Bot Adapter and Bot
const adapter = new BotFrameworkAdapter({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword
});

const bot = new WhizBot();

// Listen for incoming requests
adapter.listen(process.env.PORT || 3978, () => {
    console.log(`Listening on port ${process.env.PORT || 3978}...`);
});

// Handle incoming messages
adapter.onTurnError = async (context, error) => {
    console.error(`[onTurnError]: ${error}`);
    await context.sendActivity('An error occurred. Please try again later.');
};

// Start processing messages
adapter.processActivity();
