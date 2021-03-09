console.log('PAGE LOADED')

chrome.runtime.onMessage.addListener(handleMessages)

function handleMessages(request, sender, sendResponse) {
  console.log({ request, sender, sendResponse })
  if (request.tag === 'p') {
    console.log(request.txt)
    changePBackgroundColor(request.change)
  }
}

function changePBackgroundColor(type) {
  const paragraph = document.getElementsByTagName('p')
  const color = type === 'custom' ? '#FF00FF' : ''
  for (tag of paragraph) {
    tag.style['background-color'] = color
  }
}
