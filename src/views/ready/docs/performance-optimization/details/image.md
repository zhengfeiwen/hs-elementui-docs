### 前端性能优化的目的

>1.从用户角度而言:优化能够让页面加载得更快、对用户的操作响应的更及时，能够给用户提供更为良好的体验。 
>2.从服务商角度而言:优化能够减少页面请求数、或者减小请求所占带宽，能够节省可观的资源。

##### 前端优化的方法有很多种，可以将其分为两大类，第一类是`页面级别的优化`如http请求数，内联脚本的位置优化等，第二类为`代码级别的优化`，例Java中的DOM 操作优化、CSS选择符优化、图片优化以及 HTML结构优化等等。

### 图片

#### 优化图像

##### 当美工完成了网站的图片设计后，我们可以在上传图片之前对其做以下优化

>1.检查GIF图片中图像颜色的数量是否和调色板规格一致。如果你发现图片中只用到了4种颜色，而在调色板的中显示的256色的颜色槽，那么这张图片就还有压缩的空间。可以使用`imagemagick`检查： 
`identify -verbose image.gif`
>2.尝试把GIF格式转换成PNG格式，看看是否节省空间。大多数情况下是可以压缩的。下面这条简单的命令可以安全地把GIF格式转换为PNG格式： 
`convert image.gif image.png`
>3.在所有的PNG图片上运行pngcrush（或者其它PNG优化工具）。例如： 
`pngcrush image.png -rem alla -reduce -brute result.png`
>4.在所有的JPEG图片上运行jpegtran。这个工具可以对图片中的出现的锯齿等做无损操作，同时它还可以用于优化和清除图片中的注释以及其它无用信息 
`jpegtran -copy none -optimize -perfect src.jpg dest.jpg`

#### 优化CSS Sprite

>1.Spirite中水平排列图片，垂直排列会增加文件大小；
>2.Spirite中把颜色较近的组合在一起可以降低颜色数，理想状况是低于256色以便适用PNG8格式；
>3.不要在Spirite的图像中间留有较大空隙。这虽然不大会增加文件大小,但对于用户代理来说它需要更少的内存来把图片解压为像素地图。100×100的图片为1万像素，1000×1000就是100万像素。

#### 不要在HTML中缩放图片

##### 不要通过图片缩放来适应页面，如果你需要小图片，就直接使用小图片吧。

#### 使用小且可缓存的`favicon.ico`

##### 网站图标文件`favicon.ico`，不管你服务器有还是没有，浏览器都会去尝试请求这个图标。所以我们要确保这个图标

>1.存在
>2.文件尽量小，最好小于1k
>3.设置一个长的过期时间