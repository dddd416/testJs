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