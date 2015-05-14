###学习月报（2014-10 韩江）
本次月报分为两个部分：
1. JS基础
2. iWEB大会武汉站感想
3. 总结与规划


###1.JS基础
####1.1浏览器中事件的三个阶段
最近又看了一下《Javascript高级程序设计》中的事件部分，发现之前对事件的几个阶段了解还不是很充分。（接下来的讨论不考虑低版本的只支持事件冒泡处理的浏览器）之前一直以为在浏览器中，事件的传播流程有两个：事件捕获和事件冒泡。然而，结合测试和书上的描述发现，事件传播中还有一个容易混淆的阶段：目标阶段。

下面构建一个4层DIV嵌套的简单测试页面，测试在chrome浏览器中进行：
***
![Alt text](/blog/img/1.png)
***
在chrome中，事件的传播起点是从window对象开始捕获，逐级捕获到事件目标元素，然后再从事件目标元素逐级向上冒泡到window对象。在这里，为了测试方便对事件的监听从div1开始。当div4上触发了一个事件（例如click）时，下图为事件的传播流程：
***
![Alt text](/blog/img/2.png)
***
上图中，阶段1至3为事件的捕获阶段，5至7为事件的冒泡阶段，阶段4就是传说中的“目标阶段”。下面使用JS中的addEventListener函数来为各层的div元素在不同阶段（冒泡或者捕获）添加click事件的监听程序。

``` javascript
	var div1 = document.getElementById("div1"),
		div2 = document.getElementById("div2"),
		div3 = document.getElementById("div3"),
		div4 = document.getElementById("div4");

	function bubbleFun(e){
		console.log(this.id+" state:bubble stateId:"+e.eventPhase);
	}

	function catchFunc(e){
		console.log(this.id+" state:catch stateId:"+e.eventPhase);
	}

	div1.addEventListener('click',bubbleFun,false);
	div2.addEventListener('click',bubbleFun,false);
	div3.addEventListener('click',bubbleFun,false);
	div4.addEventListener('click',bubbleFun,false);

	div1.addEventListener('click',catchFunc,true);
	div2.addEventListener('click',catchFunc,true);
	div3.addEventListener('click',catchFunc,true);
	div4.addEventListener('click',catchFunc,true);
```

接下来点击div4,控制台输出结果如下：
>div1 state:catch stateId:1  
div2 state:catch stateId:1  
div3 state:catch stateId:1  
div4 state:bubble stateId:2  
div4 state:catch stateId:2  
div3 state:bubble stateId:3   
div2 state:bubble stateId:3   
div1 state:bubble stateId:3  

结果分析：众所周知，addEventListener的第三个boolean参数为true时，表示事件在捕获阶段时进行处理，false时表示事件在冒泡阶段进行处理。此参数默认为false，为了兼容不支持事件捕获的浏览器。从结果可看出，事件在div1至div3之间的捕获或冒泡都很正常：先由外层向内层捕获，再由内层向外层冒泡。但在最内层的div4，也就是事件的目标元素上，通过冒泡方式（第三个参数为false）绑定的事件处理竟然在通过捕获（第三个参数为true）之前，乍一看有点不合理。但结合前面说到了，事件的完整传播流程有三个阶段：捕获-目标-冒泡。但是事件绑定函数的第三个参数只提供了在两个阶段绑定：捕获和冒泡，那么addEventListener的第三个参数是如何对应上事件的三个阶段的呢？

答案是：如果事件传播到了目标元素（比如这里的div4），那么目标元素上绑定的监听程序无视第三个boolean参数，不管是true还是false都是一视同仁，所以在目标元素上添加的事件处理程序会按照添加顺序执行，而不管添加时第三个参数是什么。因为在代码中以“bubble”方式添加的程序在前面，所以结果中就先输出它的信息。如果说从addEventListener的第三个参数不好判断事件处于哪个阶段时，那么可以通过事件对象的eventPhase属于来判断。事件触发时的事件对象中，eventPhase有3个可能值：1代表事件处于捕获阶段，2代表事件处于目标阶段，3代表事件处于冒泡阶段。结合eventPhase的值，从结果也可以直观地看出事件的整个传播流程。


####1.2 JS中正则表达式中的前瞻
最近在[codewars](http://www.codewars.com/)上做了一些题目，其中有一题映象比较深，是考查正则表达式的。题目要求很简单，要求实现一个函数，检查函数的参数是否满足如下要求：
1. 至少有6位字符
2. 至少包含一个大写字母
3. 至少包含一个小写字母
4. 至少包含一个数字

我刚开始想只写一个正则式来实现，后来发现想不出来，结果只能分为几条正则式来检查，代码如下：
``` javascript
function validate(password) {
  return  /^[A-Za-z0-9]{6,}$/.test(password) &&
          /[A-Z]+/.test(password) &&
          /[a-z]+/.test(password) &&
          /[0-9]+/.test(password) ;
}
```
以上代码简单粗暴，直接分别对每种要求进行正则匹配。
提交之后查看别人的代码，发现还真是可以用一条正则式来实现：
``` javascript
function validate(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
}
```
看了这代码之后才知道正则表达式中的正向前瞻。(?=)是正向前瞻的格式。正向前瞻用来检查接下来的出现的是不是某个特定的字符集，它的检测不会使正则式的指针后移。以上的正则式为三个正向前瞻后面接一个正常的匹配。^(?=.*\d)表示在开始^后就判断后继字符是否至少有一个数字，如果不是，那么匹配失败，如果是，则继续后面的匹配，由于正向前瞻并不会使匹配指针后移，所以下次匹配还是从头开始。

与正向前瞻对应的是负向前瞻，(?!)是负向前瞻的格式。正向前瞻用来检查接下来的出现的是否不是某个特定的字符集，它的检测不会使正则式的指针后移。负向前瞻引出了我在[codewars](http://www.codewars.com/)中遇到的另一个题目。题目是写一个函数来判断函数的参数是否满足IPV4地址格式。我的代码一如继往简单粗暴，根本没用正则式：
``` javascript
function isValidIP(str) {
  var arr = str.split('.'),
      value;
  return arr.length === 4 && 
         arr.every(function(v){
           value = parseInt(v);
           return (value + "") === v && value <= 255;
         });
}
```

再看看codewars上大神用正则式实现的：
``` javascript
function isValidIP(str) {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
}
```

([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])这段匹配的是0-255的数字，(\\.(?!\$)|\$)利用负向前瞻实现这样一个匹配：如果没到结尾，那么匹配一个.  否则，直接匹配结尾。

做了以上两个题目后发现我在正则表达式方面还是太年轻。。。

###2.iWEB大会武汉站感想
之前报名了iWEB大会武汉站，10月25号会议开始，在一个小咖啡厅里，人比较多，而且大部分是学生。本人当天脸比较黑，现场抽了几十次奖我一个都没中，哪怕是一件T-shirt也好啊。。。进入正题，当天的会议内容如下：

1. 《如何让Android手机的HTML5 App性能体验接近原生》-崔红保（Dcloud 前端工程师）
2. 《HTML5App流量价值最大化》-赵伊江（Google商业合作部负责人）
3. 《AppCan：乘着HTML5的翅膀 让App开发更完美》-林传毅（AppCan售前技术总监）
4. 《有了Bootstrap，为什么我们还要做Amaze UI？》-张宁（云适配HTML5布道官）
5. 《Egret——推动游戏前行》-张鑫磊(Egret社区技术经理)
6. 《前后端分离架构实战》-李一航（用家App-前端工程师）
7. 《智能大屏和HTML5的小时代》-刘翀（乐视应用商店运营经理）


####2.1 《如何让Android手机的HTML5 App性能体验接近原生》
之前对Web App没有关注很多，只是了解一些基本的概念，Dcloud的这次展示列举了HTML5在开发移动应用时面临的各种问题以及他们对应的解决方案。下图展示了HTML开发移动应用与原生Android的对比：
![Alt text](/blog/img/3.png)
    演讲嘉宾将HTML5几个主要的缺点简称为“性工能不足”（O__O||），接着陆续介绍了他们是怎么应对这些问题的。下图为他们的具体解决方案：
![Alt text](/blog/img/4.png)
Native.js看起来很强大，不过我后面没有去尝试过，HBuilder的展示视频也比较给力，编写速度很快，结合MUI可以很快地开发出类似原生Android的UI。不过我觉得自己暂时还没有使用HBuilder这种大型的IDE的必要，文本编辑级的Sublime已经够了。

####2.2 《HTML5App流量价值最大化》
演讲主题：我们有大批的广告客户，你们做的APP接个我们的广告API，流量哗哗变成钱
    
####2.3 《AppCan：乘着HTML5的翅膀 让App开发更完美》
这一段没怎么听，现场空调太冷，跑太场外晒太阳去了。。。

####2.4 《有了Bootstrap，为什么我们还要做Amaze UI？》
听起来中文意思像“阿妹子UI”，这里和前面的MUI有点类似。听到这里并结合前面的MUI，我想起了之间看了一些WEB组件化的一些概念。不过目前对于WEB Component的理解以及后面的发展还不是很清晰，所以后面还需要进一步学习与探索。
    
####2.5 《Egret——推动游戏前行》
这场的嘉宾比较尴尬，一来就问有多少做过HTML5游戏的，结果举手之人只有一两个，只得脸一黑。尽管后面讲游戏引擎讲得绘声绘色，但无奈场下听众绝大多数都是在校学生，只能纷纷投去“不明觉历”的目光。其实在参加会议前几天我就浏览了一下Egret的相关一些情况，它是从神经猫这个游戏出来之后开始进入更多人的视线。一个程序员，一个美工，利用Egret一天半就搞定了游戏的开发。最近腾讯X5浏览器内核植入了Egret Runtime组件，能够全面提升HTML5游戏在移动设备的用户体验。感觉好厉害，都有种想做游戏的冲动了。后来安装了Egret环境还有Cocos2d准备尝试一下HTML5游戏开发，发现最近时间比较紧，如果投入过多时间进来估计毕业论文就得黑了。。。还是等以后有闲的时间再来折腾一下玩玩。
    
####2.6 《前后端分离架构实战》
这次的嘉宾有点羞涩，说话声音比较小，所以没有听得很明白。看PPT大概的意思就是使用一些技术来实现前后端工作的更好分离。分离的方案是在后端框架Django和前端之间再加一层node中的express。
    
####2.6 《智能大屏和HTML5的小时代》
演讲主题：开发者们快来智能电视平台来做游戏做应用。


###3.总结与规划
本月刚找完工作，心情久久不能平复，拒了其他几家公司后决定就来大腾讯了！导师知道我们找完工作，开始给我们安排毕业论文的相关工作，所以可以自由支配的时间并不多，一般就抽点空余时间看看前端的技术，上codewars做做题，顺便复习了一下前端的一些基础知识。node和grunt也有过一些尝试，明白了基本操作和原理，只是没有连续的项目开发做锻炼很快就会忘记操作的细节。
接下来的一个月的安排看时间空闲情况，时间多的话就试一下egret或者cocos2d的游戏玩玩，如果时间不多的话就还是老实学一些前端开发的一些工程化工具，看看一些简单库或框架的源码。

    
