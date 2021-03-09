console.log('PAGE LOADED')

function changeInnerHtml(collection, text) {
  for (tag of collection) {
    tag.innerHTML = text
  }
}

const paragraph = document.getElementsByTagName('p')
const span = document.getElementsByTagName('span')

changeInnerHtml(paragraph, 'paragraph')
changeInnerHtml(span, 'span')
