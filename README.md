# playwithsiyuan
 一些玩思源笔记的时候鼓捣的小玩意儿

### 一、挂件：zizhibianlan-new

#### 安装和使用

这是一个简单的挂件，安装方法是把zizhibianlan-new这个文件夹直接放到你的思源笔记的widgets文件夹里面。

使用方法是在思源笔记核心启动的前提下在浏览器输入http://localhost:6806/widgets/zizhibianlan-new

#### 主要功能

##### 1、简单的星标标记

启用这个选项之后，笔记内自定义属性star的值为1至5的内容块会被以五角星标记。

##### 2、简单的复习卡片功能

启用这个选项之后，笔记内自定义属性fuxikapian为1的块会被显示为挖空卡片，其中的高亮部分显示为挖空。

比较建议的使用方式是在嵌入块使用fuxikapian属性用来复习。

挖空的内容会在你的鼠标移上去的时候显示。

##### 3、简单的多级表格视图

启用这个选项之后，笔记内自定义属性libiaobiaoge为1的列表块会被显示为多级表格。

##### 4、自定义段落缩进

启用这个选项之后可以调整段落块的缩进值，只影响顶层段落块，对于位于容器块内部的段落块没有影响。

##### 5、运行笔记内的js代码（实验）

启用这个选项之后，笔记内的js代码块上会出现运行本代码块的按钮，点击之后代码块的内容会运行一次（仅供娱乐）。

##### 6、添加笔记内的css代码（实验）

启用这个选项之后，笔记内的css代码块上会出现添加本代码块css样式的按钮，点击之后代码块的内容会被加入到笔记窗口的样式种，可以用于实验css样式，同一时间只有一个代码块的样式会生效，取消勾选之后相应的样式会被去除（仅供娱乐）。

##### 7、提供了note-views的快捷窗口

note-views是一位大佬开发的一款挂件，实现了类似notion的视图。

可以在大佬的Github里找到：[langzhou/siyuan-note: 思源笔记美化教程 (github.com)](https://github.com/langzhou/siyuan-note)。

在你安装了note-views之后，打开http://localhost:6806/widgets/zizhibianlan-new之后可以看到一个note-views的窗口，点击刷新挂件按钮，嵌入的note-views窗口显示的内容就会变成你当前编辑的笔记所在文件夹的内容。

##### 8、提供了little-things的快捷窗口

little-things是一位大佬（是的跟上面那个note-views是同一位开发的....）开发的挂件，实现了轻量级的事务管理。

可以在大佬的Github里找到：[langzhou/siyuan-note: 思源笔记美化教程 (github.com)](https://github.com/langzhou/siyuan-note)。

在你安装了little-things之后，打开http://localhost:6806/widgets/zizhibianlan-new之后可以看到一个note-views的窗口，点击刷新挂件按钮，嵌入的little-things窗口显示的内容就会变成你当前编辑的笔记的内容。



