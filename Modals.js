function openViewModal(triggerId, modal, SLACK_ACCESS_TOKEN) {
  var payload = {
    trigger_id: triggerId,
    view: modal
  };
  UrlFetchApp.fetch('https://slack.com/api/views.open', {
    method: 'POST',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
    headers: {
      'Authorization': 'Bearer ' + SLACK_ACCESS_TOKEN
    }
  });
}

function buildViewModal(initialValue, timestamp, channel) {
  return {
    "title": {
      "type": "plain_text",
      "text": "Edit Message"
    },
    "submit": {
      "type": "plain_text",
      "text": "Edit"
    },
    "blocks": [
      {
        "block_id": "multi_line",
        "type": "input",
        "element": {
          "type": "plain_text_input",
          "action_id": "ml_input",
          "multiline": true,
          "initial_value": initialValue
        },
        "label": {
          "type": "plain_text",
          "text": "Message"
        },
        "hint": {
          "type": "plain_text",
          "text": timestamp + '/' + channel
        }
      }
    ],
    "type": "modal"
  };
}