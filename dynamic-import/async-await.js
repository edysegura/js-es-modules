// since Chrome v89 and Node.js v14.5 we do have support to top level await
const { Logger } = await import('./logger.js')
Logger.info('This came from dynamic import!')
