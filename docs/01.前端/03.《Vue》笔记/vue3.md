---
title: vue3
date: 2022-10-06 09:20:01
permalink: /pages/7f8d99/
author: 
  name: niko
---
### 邂逅Vue.js开发

#### 声明式和命令式

* 原生开发和Vue开发的模式和特点，我们会发现是完全不同的，这里其实涉及到两种不同的编程范式： 
  * 命令式编程和声明式编程； 
  * 命令式编程关注的是 “how to do”自己完成整个how的过程； 
  * 声明式编程关注的是 “what to do”，由框架(机器)完成 “how”的过程；
* 在原生的实现过程中，我们是如何操作的呢？ 
  * 我们每完成一个操作，都需要通过JavaScript编写一条代码，来给浏览器一个指令； 
  * 这样的编写代码的过程，我们称之为命令式编程；
  * 在早期的原生JavaScript和jQuery开发的过程中，我们都是通过这种命令式的方式在编写代码的； 
* 在Vue的实现过程中，我们是如何操作的呢？
  * 我们会在createApp传入的对象中声明需要的内容，模板template、数据data、方法methods； 
  * 这样的编写代码的过程，我们称之为是声明式编程； 
  * 目前Vue、React、Angular、小程序的编程模式，我们称之为声明式编程；

#### MVVM模型

* MVC和MVVM都是一种软件的体系结构 
  * MVC是Model – View –Controller的简称，是在前期被使用非常框架的架构模式，比如iOS、前端； 
  * MVVM是Model-View-ViewModel的简称，是目前非常流行的架构模式；

* 通常情况下，我们也经常称Vue是一个MVVM的框架。 
  * Vue官方其实有说明，Vue虽然并没有完全遵守MVVM的模型，但是整个设计是受到它的启发的。

![image-20220923125401558](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231254638.png)

#### data属性

![image-20220923145101345](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231451396.png)

#### methods属性

![image-20220923145222040](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231452100.png)

![image-20220923145412761](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231454817.png)

问题二：this到底指向什么？

![image-20220923145448754](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231454870.png)

### Vue基础 – 模板语法

#### Mustache双大括号语法（掌握）

![image-20220923145618572](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231456638.png)

#### v-once指令（了解）

![image-20220923145641649](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231456701.png)

#### v-text指令（了解）

![image-20220923145658102](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231456134.png)

#### v-html

![image-20220923145727650](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231457709.png)

#### v-pre

![image-20220923145742764](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231457813.png)

#### v-cloak

![image-20220923145912106](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231459162.png)

#### v-bind的绑定属性

绑定基本属性

![image-20220923150021678](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231500741.png)

##### 绑定class介绍

![image-20220923150033423](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231500463.png)

绑定class – 对象语法

![image-20220923150047759](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231500819.png)

绑定class – 数组语法

![image-20220923150104286](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231501336.png)

##### 绑定style介绍

![image-20220923150118381](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231501432.png)

绑定style演练

![image-20220923150219401](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231502458.png)

动态绑定属性

![image-20220923150332662](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231503715.png)

绑定一个对象

![image-20220923150443459](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231504514.png)

#### v-on绑定事件

![image-20220923150520191](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231505228.png)

##### v-on的用法

![image-20220923150540327](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231505378.png)

##### v-on的基本使用

![image-20220923151554424](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231515476.png)

##### v-on参数传递

![image-20220923151615450](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231516509.png)

##### v-on的修饰符

![image-20220923151648801](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231516859.png)

#### 条件渲染

![image-20220923151807724](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231518763.png)

##### v-if、v-else、v-else-if

![image-20220923151824319](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231518365.png)

##### template元素

![image-20220923151840556](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231518608.png)

##### v-show

![image-20220923153411127](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231534160.png)

##### v-show和v-if的区别

![image-20220923153427092](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231534141.png)

##### 列表渲染

v-for基本使用

![image-20220923153624046](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231536108.png)

v-for支持的类型

![image-20220923160417882](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231604942.png)

template元素

![image-20220923160431399](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231604447.png)

##### 数组更新检测

![image-20220923160506432](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231605480.png)

##### v-for中的key是什么作用？

![image-20220923160633508](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231606575.png)

认识VNode

![image-20220923160724621](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231607689.png)

虚拟DOM

![image-20220923160811080](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231608145.png)

没有key的过程如下

![image-20220923160906861](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231609948.png)

有key执行操作（源码）

![image-20220923160935484](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231609605.png)

有key的diff算法如下（一）

![image-20220923160951437](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231609515.png)

有key的diff算法如下（二）

![image-20220923161002631](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231610718.png)

有key的diff算法如下（三

![image-20220923161017796](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231610885.png)

### Vue基础 – Options API

#### computed计算属性使用

![image-20220923161134595](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231611684.png)

计算属性 vs methods

计算属性和methods的实现看起来是差别是不大的，而且我们多次提到计算属性有缓存的。

![image-20220923161332881](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231613942.png)

计算属性的缓存

![image-20220923161347101](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231613171.png)

##### 计算属性的setter和getter

![image-20220923162915039](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231629091.png)

#### 侦听器watch

![image-20220923163032894](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231630947.png)

##### 侦听器案例

![image-20220923163105083](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231631151.png)

##### 侦听器watch的配置选项

![image-20220923163132220](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231631280.png)

![image-20220923163156785](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231631828.png)

##### 侦听器watch的其他方式（一）

![image-20220923164828920](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231648966.png)

##### 侦听器watch的其他方式（二）

![image-20220923165416870](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231654926.png)

### Vue基础 – v-model表单

#### v-model的基本使用

![image-20220923174020293](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231740374.png)

#### v-model的原理

![image-20220923174045668](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231740718.png)

#### v-model绑定textarea

![image-20220923174409553](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231744599.png)

#### v-model绑定checkbox

![image-20220923175156123](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231751188.png)

#### v-model绑定radio

![image-20220923181151194](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231811240.png)

#### v-model绑定select

![image-20220923181230897](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231812968.png)

#### v-model的值绑定

![image-20220923181252028](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231812076.png)

#### v-model修饰符 - lazy

![image-20220923181356368](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231813421.png)

#### v-model修饰符 - number

![image-20220923181837911](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231818975.png)

#### v-model修饰符 - trim

![image-20220923182214545](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231822591.png)

### Vue组件化基础 - 脚手架

### 组件化开发

![image-20220923185143780](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231851837.png)

#### Vue的组件化

![image-20220923185217645](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231852701.png)

#### 注册组件的方式

* 注册组件分成两种：
  *  全局组件：在任何其他的组件中都可以使用的组件；
  *  局部组件：只有在注册的组件中才能使用的组件；

#### 注册全局组件

![image-20220923185416268](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231854347.png)

##### 全局组件的逻辑

![image-20220923185458467](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231854527.png)

##### 组件的名称

![image-20220923185524411](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231855473.png)

#### 注册局部组件

![image-20220923185611601](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231856663.png)

##### 布局组件注册代码

![image-20220923185649976](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231856073.png)

#### Vue的开发模式

![image-20220923185943334](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231859396.png)

##### 单文件的特点

![image-20220923190031312](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231900377.png)

##### 如何支持SFC

![image-20220923190055646](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231900691.png)

##### VSCode对SFC文件的支持

![image-20220923191056206](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231910275.png)

#### Vue CLI脚手架

* ◼ Vue的脚手架就是Vue CLI：
  * CLI是Command-Line Interface, 翻译为命令行界面； 
  * 我们可以通过CLI选择项目的配置和创建出我们的项目；
  * Vue CLI已经内置了webpack相关的配置，我们不需要从零来配置；

##### Vue CLI 安装和使用

![image-20220923191232591](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231912637.png)

##### vue create 项目的过程

![image-20220923191310173](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231913246.png)

##### 项目的目录结构

![image-20220923191329514](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231913572.png)

##### Vue CLI的运行原理

![image-20220923191427248](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209231914332.png)

### 组件化 – 组件间通信

#### Vue组件的嵌套关系

组件的拆分

![image-20220924141304333](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209241413420.png)

组件的通信

![image-20220924141414010](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209241414078.png)

#### 父子组件之间通信的方式

![image-20220924141538196](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209241415241.png)

#### 父组件传递给子组件

![image-20220924141614891](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209241416951.png)

##### Props的数组用法

![image-20220924145105772](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209241451862.png)

##### Props的对象用法

![image-20220924145134352](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209241451412.png)

type的类型

 String
 Number
 Boolean
 Array
 Object
 Date
 Function
 Symbol

对象类型的其他写法

![image-20220924192619542](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209241926621.png)

Prop 的大小写命名

![image-20220924194514144](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209241945201.png)

##### 非Prop的Attribute

![image-20220925153304743](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209251533847.png)

##### 禁用Attribute继承和多根节点

![image-20220925154256659](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209251542724.png)

#### 子组件传递给父组件

![image-20220925154350815](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209251543866.png)

#### 自定义事件的流程

### ![image-20220925182630428](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209251826494.png)组件化 - 插槽Slot/非父子通信

#### 如何使用插槽slot？

![image-20220926092059746](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209260921829.png)

#### 插槽的默认内容

![image-20220926092117671](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209260921730.png)

#### 多个插槽的效果

![image-20220926092218458](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209260922523.png)

#### 插槽的基本使用

![](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209260923584.png)

#### 具名插槽的使用

![image-20220926095106133](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209260951199.png)

#### 动态插槽名

![image-20220926095240158](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209260952222.png)

#### 具名插槽使用的时候缩写

![](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209260953556.png)

#### 渲染作用域

![image-20220926095420110](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209260954146.png)

#### 渲染作用域案例

![image-20220926095526644](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209260955704.png)

#### 认识作用域插槽

![image-20220926095832045](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209260958097.png)

#### 作用域插槽的案例

![](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209260959750.png)

#### 独占默认插槽的缩写

![image-20220926101132534](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261011597.png)

#### 默认插槽和具名插槽混合

![image-20220926101441288](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261014358.png)

#### 非父子组件的通信

![image-20220926101516768](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261015803.png)

#### 全局事件总线mitt库

![image-20220926101550274](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261015328.png)

#### 使用事件总线工具

![image-20220926101657201](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261016253.png)

#### Mitt的事件取消

![image-20220926101708518](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261017555.png)

#### Provide和Inject

![image-20220926101725035](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261017088.png)

#### Provide和Inject基本使用

![image-20220926101745091](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261017148.png)

#### Provide和Inject函数的写法

![image-20220926101822830](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261018893.png)

#### 处理响应式数据

![image-20220926101836967](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261018035.png)

### 组件化 – 额外知识补充

#### 认识生命周期

![image-20220926102648314](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261026377.png)

#### 生命周期的流程

![image-20220926102726937](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261027004.png)

#### $refs的使用

![image-20220926103130895](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261031952.png)

#### parent和root

![image-20220926103241832](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261032881.png)

#### 切换组件案例

![image-20220926103636888](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261036940.png)

#### v-if显示不同的组件

![image-20220926103649139](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261036195.png)

#### 动态组件的实现

![image-20220926103703628](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261037688.png)

#### 动态组件的传值

![image-20220926103716596](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261037637.png)

#### 认识keep-alive

![image-20220926104240284](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261042348.png)

#### keep-alive属性

![image-20220926104308590](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261043655.png)

#### 缓存组件的生命周期

![image-20220926104459711](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261044764.png)

#### Webpack的代码分包

![image-20220926104544631](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261045710.png)

#### Vue中实现异步组件

![image-20220926104616907](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261046975.png)

#### 组件的v-model

![image-20220926104646719](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261046782.png)

#### 组件v-model的实现

![image-20220926104740946](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261047009.png)

#### 绑定多个属性

![image-20220926105430050](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261054117.png)

#### 认识Mixin

![](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261054884.png)

#### Mixin的基本使用

![image-20220926105743643](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261057707.png)

#### Mixin的合并规则

![image-20220926105759343](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261057408.png)

#### 全局混入Mixin

![image-20220926170302723](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261703780.png)

### Vue3 – Composition API

#### Options API的弊端

![image-20220926195234137](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261952203.png)

#### 大组件的逻辑分散

![image-20220926195527178](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261955275.png)

#### 认识Composition API

![image-20220926195618386](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261956443.png)

#### setup函数的参数

![image-20220926195719140](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261957207.png)

#### setup函数的返回值

![image-20220926195918253](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209261959313.png)

#### Reactive API

![](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209262000459.png)

#### Ref API

![image-20220926200214127](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209262002196.png)

#### Ref自动解包

![](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209262003538.png)

#### readonly

![image-20220926200509245](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209262005308.png)

##### readonly的使用

![](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209262005992.png)

##### readonly的应用

![image-20220926200556286](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209262005368.png)

#### Reactive判断的API

![image-20220926200614551](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209262006612.png)

#### toRefs

![image-20220926200633864](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209262006931.png)

#### toRef

![image-20220926200700744](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209262007790.png)

#### ref其他的API

![image-20220926200721329](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209262007386.png)

#### setup不可以使用this

![image-20220926200800452](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209262008509.png)

#### computed

![image-20220927104744448](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209271047547.png)

#### setup中使用ref

![image-20220927104852383](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209271048452.png)

#### 生命周期钩子

![image-20220927104915984](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209271049072.png)

#### Provide函数

![image-20220927104939594](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209271049666.png)

#### Inject函数

![image-20220927104950116](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209271049171.png)

#### 数据的响应式

![image-20220927105005592](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209271050646.png)

#### 侦听数据的变化

![image-20220927105026340](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209271050395.png)

#### Watch的使用

![image-20220927105037399](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209271050457.png)

#### 侦听多个数据源

![image-20220927105049259](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209271050317.png)

#### watch的选项

![image-20220927105101813](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209271051883.png)

#### watchEffect

![image-20220927105112685](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209271051751.png)

#### watchEffect的停止侦听

![image-20220927105122956](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209271051015.png)

#### useCounter

![image-20220927105137669](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209271051735.png)

#### useTitle

![image-20220927105150867](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209271051934.png)

#### useScrollPosition（作业）

![image-20220927105220531](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209271052588.png)

#### script setup语法

![image-20220927105233238](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209271052314.png)

#### 顶层的绑定会被暴露给模板

![image-20220927105245647](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209271052725.png)

#### 导入的组件直接使用

![image-20220927105256159](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209271052221.png)

#### defineProps() 和 defineEmits()

![image-20220927105308540](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209271053610.png)

#### defineExpose()

![image-20220927105318590](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209271053654.png)

### 高级特性补充

#### 自定义指令

![image-20220928072017912](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280720005.png)

#### 实现方式一：聚焦的默认实现

![image-20220928072038966](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280720035.png)

#### 实现方式二：局部自定义指令

![image-20220928072058546](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280720622.png)

#### 方式三：自定义全局指令

![image-20220928072111987](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280721036.png)

#### 指令的生命周期

![image-20220928072142608](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280721674.png)

#### 指令的参数和修饰符

![image-20220928072202570](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280722664.png)

#### 自定义指令练习

![image-20220928072222385](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280722440.png)

#### 时间格式化指令

![image-20220928072245257](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280722313.png)

#### 认识Teleport

![image-20220928072302656](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280723722.png)

#### 我们来看下面代码的效果：

![image-20220928072317697](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280723779.png)

#### 和组件结合使用

![image-20220928072334619](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280723698.png)

#### 多个teleport

![image-20220928072358089](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280723159.png)

#### 异步组件和Suspense

![image-20220928072418164](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280724221.png)

#### 认识Vue插件

![image-20220928072430291](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280724345.png)

#### 插件的编写方式

![image-20220928072442071](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280724141.png)

### Vue全家桶 - Vue-Router详解

#### Vue-Router基本使用

![image-20220928072831631](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280728702.png)

##### 路由的使用步骤

![image-20220928072856959](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280728011.png)

##### 路由的基本使用流程

![image-20220928072930103](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280729175.png)

##### 路由的默认路径

![image-20220928073020792](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280730854.png)

##### history模式

![image-20220928073340198](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280733258.png)

##### router-link

![image-20220928073419678](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280734731.png)

##### 路由懒加载

![image-20220928073445535](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280734608.png)

##### 打包效果分析

![image-20220928073811623](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280738709.png)

##### 路由的其他属性

![image-20220928073823193](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280738252.png)

##### 动态路由基本匹配

![image-20220928073840505](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280738567.png)

##### 获取动态路由的值

![image-20220928073852881](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280738954.png)

##### NotFound

![image-20220928073903201](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280739273.png)

##### 匹配规则加*

![image-20220928073913750](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280739809.png)

##### 路由的嵌套

![image-20220928073926778](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280739835.png)

##### 路由的嵌套配置

![image-20220928073945154](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280739211.png)

##### 代码的页面跳转

![image-20220928074003037](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280740097.png)

##### query方式的参数

![image-20220928074016311](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280740369.png)

##### 替换当前的位置

![image-20220928074028416](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280740463.png)

##### 页面的前进后退

![image-20220928074041974](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280740029.png)

##### 动态添加路由

![image-20220928074104931](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280741988.png)

##### 路由导航守卫

![image-20220928074121352](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280741416.png)

##### 登录守卫功能

![image-20220928074137758](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280741825.png)

其他导航守卫

* Vue还提供了很多的其他守卫函数，目的都是在某一个时刻给予我们回调，让我们可以更好的控制程序的流程或者功能： 
  * https://next.router.vuejs.org/zh/guide/advanced/navigation-guards.html

![image-20220928074235612](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209280742669.png)

### Vue全家桶 – Vuex状态管理

#### Vuex的状态管理

![image-20220928204822280](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209282048355.png)

#### Vuex的安装

![image-20220928204838155](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209282048198.png)

#### 创建Store

![image-20220928204924276](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209282049347.png)

#### 组件中使用store

![image-20220928204942657](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209282049702.png)

#### 单一状态树

![image-20220928205000786](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209282050851.png)

#### 组件获取状态

![image-20220928205019832](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209282050896.png)

#### 在setup中使用mapState

![image-20220928205039508](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209282050577.png)

#### getters的基本使用

![image-20220928205055710](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209282050784.png)

##### getters第二个参数

![image-20220928205109271](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209282051328.png)

##### getters的返回函数

![image-20220928205121264](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209282051327.png)

#### mapGetters的辅助函数

![image-20220928205215149](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209282052208.png)

#### Mutation基本使用

![image-20220928205228480](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209282052536.png)

##### Mutation携带数据

![image-20220928205243552](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209282052621.png)

##### Mutation常量类型

![image-20220928205257166](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209282052229.png)

##### mapMutations辅助函数

![image-20220928205308294](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209282053355.png)

##### mutation重要原则

![image-20220928205322448](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209282053513.png)

#### actions的基本使用

![image-20220928205341851](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209282053916.png)

##### actions的分发操作

![image-20220928205354129](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209282053200.png)

##### actions的辅助函数

![image-20220928205405442](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209282054503.png)

##### actions的异步操作

![image-20220928205419238](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209282054305.png)

#### module的基本使用

![image-20220928205432917](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209282054000.png)

##### module的局部状态

![image-20220928205444882](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209282054945.png)

##### module的命名空间

![image-20220928205458544](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209282054618.png)

##### module修改或派发根组件

![image-20220928205508413](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202209282055468.png)

### Vue全家桶 – Pinia状态管理

#### Pinia和Vuex的区别

![image-20221006101933764](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202210061019871.png)

#### 如何使用Pinia？

![image-20221006101958609](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202210061019665.png)

#### 认识Store

![image-20221006102026946](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202210061020002.png)

#### 定义一个Store

![image-20221006102043890](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202210061020951.png)

#### 使用定义的Store

![image-20221006102117855](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202210061021922.png)

#### 认识和定义State

![image-20221006102130554](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202210061021607.png)

##### 操作State（一）

![image-20221006102246342](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202210061022412.png)

##### 操作State（二）

![image-20221006102313787](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202210061023851.png)

#### 认识和定义Getters

![image-20221006102358689](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202210061023764.png)

##### 访问Getters（一）

![image-20221006102412980](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202210061024046.png)

##### 访问Getters（二）

![image-20221006102426683](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202210061024745.png)

#### 认识和定义Actions

![image-20221006102441426](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202210061024487.png)

#### Actions执行异步操作

![image-20221006102505034](https://typorayyds.oss-cn-beijing.aliyuncs.com/img/202210061025096.png)