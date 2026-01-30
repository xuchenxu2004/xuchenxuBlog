# 前端三剑客
## HTML
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
    <img src="pic.png" alt="该图片无法显示">
    <hr>
    <img src="pic1.png" alt="该图片无法显示" width="500" height="300">
</body>
</html>
```
### 3.HTML区块
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
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
### 5.CSS导入方式

## JavaScript
