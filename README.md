# login-token-axios

<<<<<<< HEAD
> axios+token+Element UI
=======
> 使用token完成的login登陆页面
>>>>>>> e51bfae43b50883fdd4174115c69dd25b3b04635

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report


### 项目部署

1. 使用`vue-cli`脚手架搭建项目 
  	 
   准备环境： node（8以上），npm ，vue-cli（全局安装）

	vue init webpack ‘项目名称’

2. 安装包

    npm i less less-loader -D
	
    npm i element-ui axios vuex -S

3. 使用git/svn管理代码 这里使用的是git
  	
   在本地初始化仓库：
	
        git init 
 
 提交代码到本地仓库 

在github上建立空仓库，将本地仓库和github仓库建立关联，直接复制过来即可


### 使用Element-UI

问题1： 想要实现<el-menu>默认展开一个菜单项，在标签上添加
	:default-openeds="['1']"

就可以实现，这里‘1’ 是需要展开的子sub目录的index值。

问题2： 使用自带的一些属性值 要用 `：`绑定

1. 侧边栏部分使用了	nav	menu导航菜单
2. 收货地址部分使用了 	Table 表格
