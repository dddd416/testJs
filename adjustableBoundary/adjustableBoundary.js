var startX, startWidth
//为了使得刷新后分隔栏的位置仍然不变
startWidth = localStorage.getItem('scalable_width') || getScalableDivWidth()

document.querySelector('.scalable').style.width = startWidth + 'px'

document.querySelector('.separator').addEventListener('mousedown', startDrag)

function startDrag(e) {
  //startX用来记录按下鼠标的那一刻，鼠标的X坐标
  startX = e.clientX
  //startWidth用来记录按下鼠标的那一刻，左边scalable的宽度
  startWidth = getScalableDivWidth()
  
  document.documentElement.addEventListener('mousemove', onDrag)
  document.documentElement.addEventListener('mouseup', stopDrag)
}
//e指的是事件发生后，传递回来的事件资料
function onDrag(e) {
    //e.clientX - startX可得到鼠标移动的距离 newWidth得到的是新的宽度
  let newWidth = startWidth + e.clientX - startX
  document.querySelector('.scalable').style.width = newWidth + 'px'
}

function stopDrag(e) {
  localStorage.setItem('scalable_width', getScalableDivWidth())
  document.documentElement.removeEventListener('mousemove', onDrag)
  document.documentElement.removeEventListener('mouseup', stopDrag)
}

function getScalableDivWidth() {
  //10为进制 得到的结果不带单位
  return parseInt(window.getComputedStyle(document.querySelector('.scalable')).width, 10)
}