### 前端性能优化的目的

>1.从用户角度而言:优化能够让页面加载得更快、对用户的操作响应的更及时，能够给用户提供更为良好的体验。 
>2.从服务商角度而言:优化能够减少页面请求数、或者减小请求所占带宽，能够节省可观的资源。

##### 前端优化的方法有很多种，可以将其分为两大类，第一类是`页面级别的优化`如http请求数，内联脚本的位置优化等，第二类为`代码级别的优化`，例Java中的DOM 操作优化、CSS选择符优化、图片优化以及 HTML结构优化等等。

### Cookie

#### 减少Cookie大小

##### Cookie被用来做认证或个性化设置，其信息被包含在http报文头中，对于cookie我们要注意以下几点，来提高请求的响应速度，

>1.去除没有必要的cookie，如果网页不需要cookie就完全禁掉
>2.将cookie的大小减到最小
>3.注意cookie设置的domain级别，没有必要情况下不要影响到sub-domain
>4.设置合适的过期时间，比较长的过期时间可以提高响应速度。

#### 页面内容使用无cookie域名
##### 大多数网站的静态资源都没必要cookie，我们可以采用不同的domain来单独存放这些静态文件，这样做不仅可以减少cookie大小从而提高响应速度，还有一个好处是有些proxy拒绝缓存带有cookie的内容，如果能将这些静态资源cookie去除，那就可以得到这些proxy的缓存支持。

##### 常见的划分domain的方式是将静态文件放在static.example.com，动态内容放在www.example.com。

##### 也有一些网站需要在二级域名上应用cookie，所有的子域都会继承，这种情况下一般会再购买一个专门的域名来存放cookie-free的静态资源。例如Yahoo!的yimg.com，YouTube的ytimg.com等。