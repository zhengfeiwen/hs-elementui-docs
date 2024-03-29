### 前端性能优化的目的

>1.从用户角度而言:优化能够让页面加载得更快、对用户的操作响应的更及时，能够给用户提供更为良好的体验。 
>2.从服务商角度而言:优化能够减少页面请求数、或者减小请求所占带宽，能够节省可观的资源。

##### 前端优化的方法有很多种，可以将其分为两大类，第一类是`页面级别的优化`如http请求数，内联脚本的位置优化等，第二类为`代码级别的优化`，例Java中的DOM 操作优化、CSS选择符优化、图片优化以及 HTML结构优化等等。

### CSS
#### 将样式表置顶
##### 经样式表(css)放在网页的HEAD中会让网页显得加载速度更快，因为这样做可以使浏览器逐步加载已将下载的网页内容。这对内容比较多的网页尤其重要，用户不用一直等待在一个白屏上，而是可以先看已经下载的内容。

##### 如果将样式表放在底部，浏览器会拒绝渲染已经下载的网页，因为大多数浏览器在实现时都努力避免重绘，样式表中的内容是绘制网页的关键信息，没有下载下来之前只好对不起观众了。

#### 避免CSS表达式
##### CSS表达式可以动态的设置CSS属性，在IE5-IE8中支持，其他浏览器中表达式会被忽略。例如下面表达式在不同时间设置不同的背景颜色。

      background-color: expression( (new Date()).getHours()%2 ? "#B8D4FF" : "#F08A00" );

##### CSS表达式的问题在于它被重新计算的次数远比我们想象的要多，不仅在网页绘制或大小改变时计算，即使我们滚动屏幕或者移动鼠标的时候也在计算，因此我们还是尽量避免使用它来防止使用不当而造成的性能损耗。

##### 如果想达到类似的效果我们可以通过简单的脚本做到。

      <html>
        <head>
        </head>
        <body>
          <script type="text/javascript">
            var currentTime = new Date().getHours();
            if (currentTime%2) {
              if (document.body) {
                document.body.style.background = "#B8D4FF";
              }
            }
            else {
              if (document.body) {
                document.body.style.background = "#F08A00";
              }
            }
          </script>
        </body>
      </html>

#### 用`<link>`代替`@import`
##### 避免使用`@import`的原因很简单，因为它相当于将css放在网页内容底部。

#### 避免使用`Filters`
##### AlphaImageLoad也是IE5.5 - IE8中支持，这种滤镜的使用会导致图片在下载的时候阻塞网页绘制，另外使用这种滤镜会导致内存使用量的问题。IE9中已经不再支持。