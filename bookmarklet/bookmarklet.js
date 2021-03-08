const bookmarkletIIFIE = (function () {
  console.log('removeText')
  const p = document.getElementsByTagName('p')
  for (let i = 0; i < p.length; i++) {
    p[i].innerHTML = ''
  }
})()
