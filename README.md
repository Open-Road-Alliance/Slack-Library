# Slack Library (Google Apps Script)

This is a simple wrapper that facilitates the communication between Google Apps Script and the Slack API.

## Prerequisites

Before you can use this library, you must:

1. Have access to a Slack workspace
2. Set up or have access to a Slack App first:
3. If your Slack app will feature any interactivity, you must have an endpoint to interact with

## Setup

To add this library to your script file, do the following in the Apps Script code editor:

1. Click on the menu item "Resources > Libraries..."
2. In the "Add a Library" text box, enter the script ID `1z8ZNWyiRYvxumRw5z4UEX5lhvk2PwoBDlxl2V_LTuiB2CIvsdjPyz3QQ` and click the "Add" button.
3. Choose a version in the dropdown box (usually best to pick the latest version).
4. Click the "Save" button.

In the _new_ editor:

1. Click on the plus sign next to _Libraries_
2. In the _Script ID_ text box, enter the script ID `1z8ZNWyiRYvxumRw5z4UEX5lhvk2PwoBDlxl2V_LTuiB2CIvsdjPyz3QQ` and click the "Lookup" button.
3. Choose a version in the dropdown box (usually best to pick the latest version).
4. Specify an Identifier (this is the name that will be referenced throughout your script)

If you are [setting explicit scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) in your manifest file, ensure that the following scope is included:

- `https://www.googleapis.com/auth/script.external_request`

## Usage

Most of the setup, happens on the Slack App side and the actual configuration details depend on the functionality of your app.

### Grabbing the access token

After creating your app and enabling the necessary features, install your app into your workspace. Installing your app will give you access to your access token, which, in turn, provides your app with all the scopes and permissions needed to hit the APIs. To review or edit scopes on your app, check out the _Scopes_ section under the _OAuth & Permissions_ tab of your app.

To make API calls on behalf of your app, you'll need the _Bot User OAuth Token_, which can be found under the _OAuth & Permissions_ tab of your app. If it is not there, then the token was likely revoked or compromised and therefore needs to be regenerated, which can be done by re-installing the app in your workspace.

## Hitting the APIs

Once you have the access token, you can hit the various APIs. The last argument of all methods must be the access token. This library currently supports the following actions:

- Posting messages to Slack via the postMessage API
- Updating messages
- Opening a modal with content

## Additional Resources

- [Slack API](https://api.slack.com/)
- [Slack App Quick Start](https://api.slack.com/start)
- [Slack Block Kit Builder](https://app.slack.com/block-kit-builder/)
- [Slack API Scopes](https://api.slack.com/legacy/oauth-scopes)
