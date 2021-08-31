
const button = document.querySelector('button')
button.addEventListener('click', logEvent)

async function logEvent(event) {
  const { Logger } = await import('./logger.js')
  Logger.output = 'html'
  Logger.info(`This event was trigged at: ${event.timeStamp}`)
}
