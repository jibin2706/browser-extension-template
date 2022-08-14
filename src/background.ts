import browser from 'webextension-polyfill'

console.log('--- script loaded  ---')

browser.action.onClicked.addListener(tab => {
  console.log({ tab })
})
