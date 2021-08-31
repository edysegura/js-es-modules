export class Logger {
  /**
   * This specify where the log will be output
   * Possible values: htmlOutput, defaultOutput
   */
  static output = 'console'

  /**
   * Log a information
   * @param {String} message
   */
  static info(message) {
    Logger[this.output](message)
  }

  /**
   * Log a information on HTML
   * @param {String} message
   */
  static html(message) {
    const textarea = document.querySelector('textarea')
    if (textarea) {
      textarea.value += `${message}\n`
    }
  }

  /**
   * Log a information on console
   * @param {String} message
   */
  static console(message) {
    console.log(message)
  }
}
