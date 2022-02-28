该项目可实现轮播图的效果，轮播间隔为2.5s。

其中难点如下：

1）mask为啥设置height为106px？

刚好为一组轮播字的高度；

2）span为何这样设置css？

为了轮播字都重叠在一起；后往下移动（top:100px),因为mask设置了overflow:hidden，所以看不见

3）为何单独设置data-show属性?

这是为了让具备该属性的span向上移动一倍高度的距离；

4）什么是background-clip?

这是用文字作为遮色片，结合text-fill-color:transparent和background-repeat:no repeat,将各需要轮播的文字设置对应的渐层文字，即可实现渐变效果。

实现效果如下：

![image](https://user-images.githubusercontent.com/98251282/155889730-4f38e9c3-e5c5-4a02-8c84-65338659652f.png)
