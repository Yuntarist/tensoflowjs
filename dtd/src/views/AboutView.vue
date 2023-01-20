<template>
  <div>링크 어케 가져옴?</div>
</template>

<script setup>
const videoElement = document.createElement('video')
const button = document.createElement('button')
const div = document.createElement('div')
document.body.append(videoElement, button, div)
button.textContent = 'Tensor 추출'
videoElement.width = 300
videoElement.height = 300

const main = async () => {
  const cam = await tf.data.webcam(videoElement)
  const mnet = await mobilenet.load() // 2
  const img = await cam.capture()
  const result = await mnet.classify(img) // 2
  img.print()
  tf.dispose(img)
  div.innerHTML =
    '추측:' + result[0].className + '확률:' + result[0].probability
}
main()
button.addEventListener('click', () => {
  // 1
  main()
})
</script>

<style></style>
