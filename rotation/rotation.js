setInterval(function () {
    const show = document.querySelector('span[data-show]')
    //show.nextElementSibling及show元素同一层的下一个元素 但如果当show已经是最后一个的时候，就要改成获取第一个元素
    const next = show.nextElementSibling || document.querySelector('span:first-child')
    const up = document.querySelector('span[data-up]')
    //当up有值时，就移除data-up,让其回到最下边
    if (up) {
      up.removeAttribute('data-up')
    }
    //现在在中间，要把它移到上面
    show.removeAttribute('data-show')
    show.setAttribute('data-up', '')
    //将下一个元素移到中间
    next.setAttribute('data-show', '')
  }, 2600)

// 1.mask为啥设置height为106px？
// 刚好为一组轮播字的高度；
// 2.span为何这样设置css？
// 为了轮播字都重叠在一起；后往下移动（top:100px),因为mask设置了overflow:hidden，所以看不见
// 3.为何单独设置data-show属性?
// 这是为了让具备该属性的span向上移动一倍高度的距离；
// 4.什么是background-clip?
// 这是用文字作为遮色片，结合text-fill-color:transparent和background-repeat:no repeat,将各需要轮播的文字设置对应的渐层文字，即可实现渐变效果。