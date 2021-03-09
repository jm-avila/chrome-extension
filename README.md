# (Extensions)[https://developer.chrome.com/docs/extensions/mv3/]

Extensions are event based programs used to modify or enhance the Chrome browsing experience.

Every extensions needs a manifest file, it's the equivalent of the package.json.

Common Properties:

- manifest_version
  - indicates which version of the manifest specification a Chrome Extension targets.
- name
- version
- content_script
  - Content scripts are files that run in the context of web pages.
  - Only run for matches.
  - Runs after the webpage was loaded.
  - It's purpose is to interact with the content of the web page.
  - Since it interacts with the web page, the console is available.
- background
  - Events are browser triggers, Rxtensions monitor these events in their background script, then react with specified instructions.
  - From the background you can add event listeners
  - (API Reference)[https://developer.chrome.com/docs/extensions/reference/]
- browser_action
  - Use browser actions to put icons in the main Google Chrome toolbar, to the right of the address bar. In addition to its icon, a browser action can have a tooltip, a badge, and a popup.
  - https://developer.chrome.com/docs/extensions/reference/browserAction/

There is a way to send messages from the background script to the content script and vice versa.
