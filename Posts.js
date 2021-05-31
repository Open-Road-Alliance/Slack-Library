// Originally was posting to the webhook URL
// But cannot edit posts made via webhook so using postMessage endpoint
function postToSlack(payload, SLACK_ACCESS_TOKEN) {
  UrlFetchApp.fetch('https://slack.com/api/chat.postMessage', {
    method: 'POST',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
    headers: {
      'Authorization': 'Bearer ' + SLACK_ACCESS_TOKEN
    }
  });
};

function updateMessage(timestamp, channel, message, SLACK_ACCESS_TOKEN) {
  var payload = buildPostBlock(message, channel, true);

  payload.ts = timestamp;

  var resp = UrlFetchApp.fetch('https://slack.com/api/chat.update', {
    method: 'POST',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
    headers: {
      'Authorization': 'Bearer ' + SLACK_ACCESS_TOKEN
    }
  });
}

function buildPostBlock(message, channel, includeButton) {
  var post = {
    "channel": channel,
    "text": message,
    "blocks": [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": message
        }
      }
    ]
  };

  if (includeButton) {
    post.blocks[0].accessory = {
      "type": "button",
      "text": {
        "type": "plain_text",
        "text": "Edit",
        "emoji": true
      },
      "value": "edit_123",
      "action_id": "button-action"
    };
  }

  return post;
}