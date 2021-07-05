
### 基数排序（Radix Sort）

##### 基数排序是按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位。有时候有些属性是有优先级顺序的，先按低优先级排序，再按高优先级排序。最后的次序就是高优先级高的在前，高优先级相同的低优先级高的在前。

#### 算法描述

>取得数组中的最大数，并取得位数；
>arr为原始数组，从最低位开始取每个位组成radix数组；
>对radix进行计数排序（利用计数排序适用于小范围数的特点）；

#### 动图演示

![radix](./radix.gif "基数排序")

#### 代码实现

    var counter = [];
    function radixSort(arr, maxDigit) {
        var mod = 10;
        var dev = 1;
        for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
            for(var j = 0; j < arr.length; j++) {
                var bucket = parseInt((arr[j] % mod) / dev);
                if(counter[bucket]==null) {
                    counter[bucket] = [];
                }
                counter[bucket].push(arr[j]);
            }
            var pos = 0;
            for(var j = 0; j < counter.length; j++) {
                var value = null;
                if(counter[j]!=null) {
                    while ((value = counter[j].shift()) != null) {
                          arr[pos++] = value;
                    }
              }
            }
        }
        return arr;
    }

#### 算法分析

##### 基数排序基于分别排序，分别收集，所以是稳定的。但基数排序的性能比桶排序要略差，每一次关键字的桶分配都需要O(n)的时间复杂度，而且分配之后得到新的关键字序列又需要O(n)的时间复杂度。假如待排数据可以分为d个关键字，则基数排序的时间复杂度将是O(d*2n) ，当然d要远远小于n，因此基本上还是线性级别的。

##### 基数排序的空间复杂度为O(n+k)，其中k为桶的数量。一般来说n>>k，因此额外空间需要大概n个左右。