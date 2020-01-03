import { TweenLite, TweenMax } from 'gsap'

const handleComplete = target => TweenLite.set(target, {
  clearProps: 'position, width, transform',
})

export const handleEnterAnimation = (node) => {
  if (!node) return

  TweenMax.killTweensOf(node)
  const { parentNode } = node
  const targetWidth = parentNode.clientWidth -
    (parseFloat(getComputedStyle(parentNode).paddingLeft) * 2)

  TweenLite.set(node, {
    position: 'fixed',
    opacity: 0,
    autoAlpha: 0,
    width: targetWidth
  })
  
  TweenLite.to(node, 0.5, {
    force3D: true,
    opacity: 1,
    autoAlpha: 1,
    onComplete: handleComplete,
    onCompleteParams: [node]
  })
}
export const handleExitAnimation = (node) => {
  if (!node) return

  TweenMax.killTweensOf(node)
  const { parentNode } = node
  const targetWidth = parentNode.clientWidth -
    (parseFloat(getComputedStyle(parentNode).paddingLeft) * 2)

  TweenLite.set(node, {
    position: 'fixed',
    width: targetWidth
  })

  TweenLite.to(node, 0.5, {
    force3D: true,
    opacity: 0,
    position: 'fixed',
  })
}