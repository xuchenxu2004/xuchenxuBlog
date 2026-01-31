# 前端三剑客

<Linkcard 
url='https://www.bilibili.com/video/BV1BT4y1W7Aw/?p=8&share_source=copy_web&vd_source=d0caeb97a7ff1b5ffa5a2694d33664ae'
title="学习来源" 
description="Bilibili: 3小时前端入门教程（HTML+CSS+JS）" 
logo="/bilibili_icon.png"/>

## HTML
HTML通过一系列的`标签`(也称`元素`)、来定义文本、图像、链接等等。HTML标签是由尖括号包围的关键字。  
标签通常成对出现，包括开始标签和结束标签（也称为双标签），内容位于这两个标签之间，例如：
```html
<p>这是一个段落。</p><h1>这是一个标题。</h1>
<a href="#">这是一个超链接。</a>
```
除了双标签，也存在单标签，例如：
```html
‹input type="text"›
‹br>
<hr>
```
区别：单标签用于没有内容的元素，双标签用于有内容的元素
### 1.常见文本标签
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>常见文本标签练习</title>
</head>
<body>
    <h1>一级标题标签</h1>
    <h2>二级标题标签</h2>
    <h3>三级标题标签</h3>
    <h4>四级标题标签</h4>
    <h5>五级标题标签</h5>
    <h6>六级标题标签</h6>
    <p>这是一个段落标签</p>
    <p>
        更改文本样式：<b>字体加粗</b>、<strong>加粗2</strong>、<i>斜体</i>、<u>下划线</u>、<s>删除</s>、<del>删除2</del>
    </p>

    <ul>
        <li>无序列表元素1</li>
        <li>无序列表元素2</li>
        <li>无序列表元素3</li>
    </ul>
        
    <ol>
        <li>有序列表元素1</li>
        <li>有序列表元素2</li>
        <li>有序列表元素3</li>
    </ol>
    <h3>table row</h3>
    <h3>table data</h3>
    <h3>table header</h3>
    
    <table border = "2" >
        <tr>
            <th>列标题 1</th>
            <th>列标题 2</th>
            <th>列标题 3</th>
        </tr>
        <tr>
            <td>元素11</td>
            <td>元素12</td>
            <td>元素13</td>
        </tr>
        <tr>
            <td>元素21</td>
            <td>元素22</td>
            <td>元素23</td>
        </tr>
        <tr>
            <td>元素31</td>
            <td>元素32</td>
            <td>元素33</td>
        </tr>
    </table>
</body>
</html>
```
### 2.HTML属性

>属性在HTML中起到非常重要的作用，它们用于定义元素的行为和外观，以及与其他元素的关系。<br>

基本语法：
```html
＜开始标签 属性名="属性值">
```
* 每个HTML元素可以具有不同的属性
```html
<p id="describe" class="section">这是一个段落标签</p>
ka href="https://www.baidu.com">这是一个超链接</a>
```
* 属性名称不区分大小写，属性值对大小写敏感
```html
<img src="example.jpg" alt="">
<img SRC="example. jpg" alt="">
<img src="EXAMPLE.JPG" alt="'">
<!--前两者相同，第三个与前两个不一样-->
```
<br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML 属性</title>
</head>
<body>
    <a href="https://www.baidu.com">这是一个超链接</a>
    <br>
    <a href="https://www.baidu.com" target ="_blank">这是第二个超链接</a>
    <hr>
    <img src="https://www.usts.edu.cn/images/Usts-logo.png" alt="该图片无法显示">
    <hr>
    <img src="pic.png" alt="该图片无法显示"> <!--图片的名字不对，使用替换内容-->
    <hr>
    <img src="pic1.png" alt="该图片无法显示" width="500" height="300"><!--调整图片大小-->
</body>
</html>
```
### 3.HTML区块
> 块元素(block)<br>

块级元素通常用于组织和布局页面的主要结构和内容，例如段落、标题、列表、表格等。它们用于创建页面的主要部分，将内容分隔成逻辑块。
* 块级元素通常会从新行开始，并占据整行的宽度，因此它们会在页面上呈现为一块独立的内容块。
* 可以包含其他块级元素和行内元素。
* 常见的块级元素包括`<div>`，`<p>`，`<h1>`到`<h6>`，`<ul>`，`<ol>`，`<li>`，`<table>`，`<form>`等。

> 行内元素 （inline）<br>

行内元素通常用于添加文本样式或为文本中的一部分应用样式。它们可以在文本中插入小的元素，例如超链接、强调文本等。
* 行内元素通常在同一行内呈现，不会独占一行。
* 它们只占据其内容所需的宽度，而不是整行的宽度。
* 行内元素不能包含块级元素，但可以包含其他行内元素。
* 常见的行内元素包括`＜span>`，`<a>`，`＜strong>`，`<em>`，`<img>`，`<br>`，`<input>`等。
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML区块</title>
</head>

<body>
    <div class="nav">
        <a href="#">链接1</a>
        <a href="#">链接2</a>
        <a href="#">链接3</a>
        <a href="#">链接4</a>
        <a href="#">链接5</a>
    </div>

    <div class="content">
        <h1>文章标题</h1>
        <p>文章内容</p>
        <p>文章内容</p>
        <p>文章内容</p>
        <p>文章内容</p>
        <p>文章内容</p>
    </div>

    <span>这是第 1 个 span 标签</span>
    <span>这是第 2 个 span 标签</span>
    <span>这是第 3 个 span 标签</span>
    <span>这是第 4 个 span 标签</span>
    <hr>
    <span>链接点这里 <a href="#">链接</a></span>
</body>
</html>
```
### 4.HTML表单
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML 表单</title>
</head>

<body>

    <form>
        <label for="username">用户名：</label>
        <input type="text" id="username" placeholder="请输入用户名">
        <br><br>
        <labe for="pwd">密码：</labe>
        <input type="password" id="pwd" placeholder="请输入密码">
        <br><br>
        <label for="">性别：</label>
        <input type="radio" name="gander"> 男
        <input type="radio" name="gander"> 女
        <input type="radio" name="gander"> 其他
        <br><br>
        <label for="">爱好：</label>
        <input type="checkbox" name="bobby"> 唱歌
        <input type="checkbox" name="bobby"> 跳舞
        <input type="checkbox" name="bobby"> RAP
        <input type="checkbox" name="bobby"> 篮球     
        <br><br>
        <input type="submit" value="上传">
    </form>

    <form action="#"></form>
    
</body>
</html>
```
## CSS
CSS 全名是`Cascading Style Sheets`，中文名`层叠样式表`。  
用于定义网页样式和布局的样式表语言。  
通过CSS，你可以指定页面中各个元素的颜色、字体、大小、间距、边框、背景等样式，从而实现更精确的页面设计。 
> CSS语法<br>

CSS 通常由`选择器`、`属性`和`属性值`组成，多个规则可以组合在一起，以便同时应用多个样式
```css
选择器{
    属性1:属性值1;
    属性2:属性值2;
}
```
1. 选择器的声明中可以写无数条属性
2. 声明的每一行属性，都需要以英文分号结尾；
3. 声明中的所有属性和值都是以键值对这种形式出现的；
示例：
```css
/*这是一个p标签选择器*/
p {u    
    color: blue; 
    font-size: 16px;
}
```
### 5.CSS导入方式
CSS 三种导入方式
下面是三种常见的 CSS 导入方式：
1. `内联样式 （Inline Styles）`
2. `内部样式表 （Internal Stylesheet）`
3. `外部样式表 （External Stylesheet）`
<br>

三种导入方式的优先级：“`内联样式`＞`内部样式表`＞`外部样式表`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS 导入方式</title>
    <link rel="stylesheet" href="CSS/style.css"> <!--链接外部样式表-->
    <style>
        p {
            color: blue;
            font-size: 25px;
        }

        h2 {
            color: green;
        }
    </style>
</head>
<body>
    <p>这是一个应用了css样式的文本</p>
    <h1 style="color: red ;">
        这是一个一级标题标签,使用内联样式
    </h1>
    <h2>这是一个二级标题，使用内部样式</h2>
    <h3>这是一个三级标题，使用外部样式</h3>
</body>
</html>
```
创建一个CSS文件夹，在其中布置外部样式。通过内部引用对对应部分应用外部样式
```css
h3 {
    color: purple;
}
```
### 6.CSS选择器





## JavaScript
