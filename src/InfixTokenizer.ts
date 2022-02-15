const DEFAULT_FUNCTIONS = [
  'sin',
  'cos',
  'tan',
  'arcsin',
  'arccos',
  'arctan',
  'log',
  'ln',
  'sqrt',
  'cbrt'
]

export default class InfixTokenizer {
  private expression: string
  private regex: RegExp
  private nextToken?: string

  constructor(
    expression: string, 
    functions: string[] = DEFAULT_FUNCTIONS
  ) {
    this.expression = expression.replaceAll(' ', '') // strip spaces for infix
    const regexSource = `\\d+(\\.\\d+)?|${functions.join('|')}|[()*/^+-]`
    this.regex = new RegExp(regexSource, 'g')
  }

  hasMoreTokens() {
    const match = this.regex.exec(this.expression)
    this.nextToken = match?.[0]
    return Boolean(match)
  }

  readToken() {
    return this.nextToken
  }
}