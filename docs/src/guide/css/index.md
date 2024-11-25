# CSS

CSS（**C**ascading **S**tyle **S**heets，层叠样式表），是一种样式表语言，用来描述 HTML 文档的呈现。



## 语法规范

```css
h1 { color: red; }
```

CSS 语法由两部分构成：

- **选择器**：找到要添加样式的元素，例如：`h1` 。
- **声明块**：设置具体的样式（**声明块**是由一个或多个**声明**组成），声明的格式为： `属性名: 属性值;` ，例如：`{ color: red; }` 。



### 注释

```css {2}
h1 {
  /* 字体颜色为红色 */
  color: red;
}
```



### 命名规范

- 使用字母或单词起名。里面可以包含数字或 - 
- 见名知意
- 区分大小写



### 浏览器私有前缀

浏览器的私有前缀是为了兼容老版本的写法，比较新版本的浏览器无需添加

- 私有前缀

  - `-moz-` ：代表 **firefox** 浏览器私有属性。

  - `-ms-` ：代表 **IE** 浏览器私有属性。

  - `-webkit-` ：代表 **Safari**、**Chrome** 私有属性。

  - `-o-` ：代表 **Opera** 私有属性。

- 提倡写法（先写私有前缀，在写总的）

  ```css
  .box {
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    -o-border-radius: 10px;
    border-radius: 10px;
  }
  /* 一般不加微软的，微软的不更新了 */
  ```

  

## 代码风格

### 展开风格

开发时推荐，便于维护和调试。

```css
h1 {
  color: red;
}
```

### 紧凑风格

项目上线时推荐，可减小文件体积，节约网络流量，同时能让用户打开网页时的速度更快。

```css
h1{color:red;}
```
