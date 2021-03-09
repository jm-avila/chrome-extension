console.log('background running!')

chrome.browserAction.onClicked.addListener(handleOnClicked)

let colorChanged = false

function handleOnClicked(tab) {
  console.log('Click!')
  console.log(tab)

  const request = {
    txt: null,
    change: null,
    tag: 'p',
  }

  if (colorChanged) {
    request.txt = 'Change p background color to default.'
    request.change = 'default'
    colorChanged = false
  } else {
    request.txt = 'Change p background color to custom.'
    request.change = 'custom'
    colorChanged = true
  }

  chrome.tabs.sendMessage(tab.id, request)
}
