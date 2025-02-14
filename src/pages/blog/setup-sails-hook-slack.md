---
 layout: '../../layouts/BlogPost.astro'
 title: 'How to monitor your Sails application with Slack.'
 description: 'A simple Sails hook to help you send messages to slack from your Sails application. It also comes with a helper function to send messages directly to slack without necessary logging it.'
 pubDate: '14 February, 2025'
---

Monitoring your Sails application has never been easier! In this article I will show you how to setup your Sails application with Slack.

### Prerequisites

- Get your Slack webhook from the Slack channel you want to send messages to.

### Installation

```bash
npm install sails-hook-slack
```

### Usage

To use the Slack hook in your Sails.js application, add the following configuration to your `config/slack.js` file:

```javascript
module.exports.slack = {
  webhookUrl: process.env.SLACK_WEBHOOK_URL,
  defaultUsername: process.env.SLACK_DEFAULT_USERNAME,
  defaultIcon: process.env.SLACK_DEFAULT_ICON,
  logLevels: process.env.SLACK_LOG_LEVELS,
};
```

### Configuration

- `webhookUrl`: Your Slack Webhook Url.
- `defaultUsername`: The default username for sails to use when sending the message to Slack.
- `defaultIcon`: The default icon for sails to use when sending the message to Slack.
- `logLevels`: A comma separated list of log levels to send to Slack.

### Bonus

There is a helper function `sails.helpers.slack` that you can use to send messages to Slack directly without logging the message.

```javascript
sails.helpers.slack("Hello from Sails!", {
  username: "Sails",
  icon: ":boom:",
});
```

The `username` and `icon` options are optional. If not passed then the default values will be used.

### That's it!

That's all it takes to monitor your Sails application with slack. See you on the next one.
