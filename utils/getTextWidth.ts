/**
 * 计算一段文字在浏览器中的宽度
 * @param text 
 * @param fontSize 
 */
let TextWidthCanvas: HTMLCanvasElement | null = null

const getTextWidth = function (text: string, font: string = 'normal 12px Arial'): number {
  TextWidthCanvas = TextWidthCanvas || (TextWidthCanvas = document.createElement('canvas'))
  const context = TextWidthCanvas.getContext("2d");
  context && context.font && (context.font = font)
  let textMetrics = context?.measureText(text)
  return textMetrics?.width || 0
}

export { getTextWidth }