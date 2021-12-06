import ResizeObserver from 'resize-observer-polyfill'
import throttle from 'lodash/throttle'

const fnMap = new Map()
let ro: ResizeObserver | null = null

const addResizeObserverEl = (el: HTMLElement, fn?: (entry?: ResizeObserverEntry) => void) => {
  if (ro === null) {
    ro = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        fnMap.get(entry.target)(entry)
      }
    })
  }

  if (fn instanceof Function) {
    fnMap.set(el, throttle(fn, 100))
    ro.observe(el)
  } else {
    fnMap.delete(el)
    ro.unobserve(el)
  }
}

export function listenElResize(el: HTMLElement, fn: (entry?: ResizeObserverEntry) => void) {
  addResizeObserverEl(el, fn)
}
export function removeListenElResize(el: HTMLElement) {
  addResizeObserverEl(el)
}
