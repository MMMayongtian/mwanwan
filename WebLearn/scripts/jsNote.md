## 声明
- let
  - 类似其他语言的变量声明
- var
  - 不建议使用
  - 可延迟声明
  - 可重复声明
  - 
## 数据类型
- String 单双引号
- Number 数字
- Boolean true/false
- Array 数组 [,,,]
- Object 对象 JavaScript里**一切皆对象 一切皆可储存在变量里** objectTest {name:"aaa",num:50}  objectTest.name
- 
## 运算符
- 加减乘除 +-*/
- 赋值 =
- 等于 ===
- 不等于 !==
- 取非 !

## 条件语句
if...else

## 函数(function)
封装可复用的功能 如：
- document.querySelector('h1') 元素选择函数
- alert('hello!') 警告框
浏览器内置函数 随时可用
### 函数定义
``` JavaScript
function multipy(num1, num2) {
    let result = num1 * num2;
    return result;
}
```
## 事件
为网页添加真实的交互能力，捕捉浏览器操作并运行一些代码作为响应。
如**点击事件**
### 点击事件：
当定点设备的按钮在一个元素上被按下和放开时，click事件会被触发。
若在某元素上按下按钮后指针移至元素外释放按钮，则在包含这两个元素的最具体的父级元素上触发事件。
click事件会在**mousedown**和**mouseup**事件依次触发后触发。
#### 语法
在类似addEventListener()这样的方法中使用事件名称，或设置事件处理器属性。
```javascript
addEventListener('click',(event) => {});
onclick = (event) => { };
```

注：EventTarget.addEventListener()方法将指定的监听器注册到EventTarget上，当该对象触发指定的事件时，指定的回调函数就会被执行。事件目标可以为一个文档上的元素**Element、Document和Window**，也可以是任何支持事件的对象，如**XMLHTTPRequest**。
- 推荐使用addEventListener()
  - 允许为一个事件添加多个监听器
  - 相比onXYZ属性绑定 提供更精细的手段来控制listener的触发（可选择捕获或者冒泡）
  - 对任何事件都有效，而不仅仅是HTML或SVG元素

### 事件类型
一个**MouseEvent**,继承自**Event**
Event <- UIEvent <- MouseEvent

### 事件属性
该接口同样继承了其父级 UIEvent和Event 的属性
- MouseEvent.altKey 按下alt键+触发鼠标事件 返回true
- MouseEvent.button 按钮编号
- MouseEvent.buttons 按钮
- MouseEvent.clientY 本地DOM坐标系的Y左边
- MouseEvent.clientX 本地DOM坐标系的X左边
- MouseEvent.ctrlKey control+鼠标 返回true
- ......
- 