1、什么是protobuf

protobuf是Google开源的一款类似于Json,XML数据交换格式，其内部数据是纯二进制格式，不依赖于语言和平台，具有简单，数据

量小，快速等优点.

2、protobuf的优缺点

XML、json、protobuf格式比较

1、json: 一般的web项目中，最流行的主要还是json。因为浏览器对于json数据支持非常好，有很多内建的函数支持。 
2、XML: 在webservice中应用最为广泛，但是相比于json，它的数据更加冗余，因为需要成对的闭合标签。json使用了键值对的方式，不仅压缩了一定的数据空间，同时也具有可读性。 
3、protobuf:是后起之秀，是谷歌开源的一种数据格式，适合高性能，对响应速度有要求的数据传输场景。因为profobuf是二进制数据格式，需要编码和解码。数据本身不具有可读性。因此只能反序列化之后得到真正可读的数据。

相对于其它protobuf更具有优势 
1：序列化后体积相比json和XML很小，适合网络传输 
2：支持跨平台多语言 
3：消息格式升级和兼容性还不错 
4：序列化反序列化速度很快，快于Json的处理速速

结论： 
在一个需要大量的数据传输的场景中，如果数据量很大，那么选择protobuf可以明显的减少数据量，减少网络IO，从而减少网络传输所消耗的时间。

3、protobuf使用

使用的方法也比较简单：

1.编写protobuf格式的消息文件（以.proto为后缀的文件）

2.使用protobuf的编译器编译消息文件XXX.proto

3.使用编译好对应语言的类文件进行消息的序列化和反序列化



3.1 编写protobuf格式的消息文件

举个例子，下面就是我编写的一个test.proto文件

    syntax = "proto3";//语法是proto3的语法
    package test;//给每一个文件指定一个package值。
    
    //每一个数据结构就是一个消息 有message关键字定义
    message user_login{
      //限定修饰符 | 数据类型 | 字段名称 = | 字段编码值 | [字段默认值]
    	required int32 userId = 1;
    	required string	userName = 2; 
      require string password = 3;
    }

ps:更多的语法规则大家可以百度查看，这里不详细讲解了。

3.2 使用protobuf的编译器编译消息文件

google 提供了多种语言的实现：C++、C#、Objective-C、Java、JavaScript、Ruby、PHP、Dart、Go 语言，每一种实现都包含了相应语言的编译器以及文件。

4、egret集成protobuf

在H5游戏领域，对于服务端与客户端的通信协议有一个选择，那就是使用protobuf.js。对于那些直接使用JavaScript开发的引擎而言，protobuf的导入非常简单，然而egret采用的是typescript语言开发的，直接导入protobuf，在使用中是一定会报错的，也就是要解决ts调用js的问题。官方为开发者提供了egret protobuf集成库直接解决了这个问题。

4.1 介绍egret protobuf库

特性

1. 提供 protobuf.js 基础运行时库
2. 提供命令行脚本，将 protofile 生成 JavaScript 代码
3. 生成正确的 .d.ts 代码，以方便 TypeScript 项目使用
4. 一键配置白鹭引擎的配置文件，无需开发者手动修改配置即可在项目中直接集成
5. 本项目虽然名为 egret protobuf ，但是理论上支持所有 HTML5 游戏引擎。欢迎使用 PIXI.js , Cocos2d-js , LayaAir 等其他引擎的开发者使用本库。

原理

封装了 protobufjs 库及命令行。使用 protobufjs 6.8.4 的运行时库。

protobufjs 自身存在着 pbts 命令，虽然也可以生成 .d.ts 文件，但是在全局模式而非 ES6 module 的情况下存在一些错误，本项目致力于解决这个问题，使 protobufjs 可以在非 ES6 模块项目中（比如白鹭引擎）中也可以使用 protobufjs

protobufjs 提供了多种使用方式，由于微信小游戏禁止 eval , new Function 等动态代码形式，所以本项目只提供了生成代码的形式，不支持通过 protobuf.load('awesome.proto') 的方式（因为这种方式也无法在微信小游戏中运行）。

4.2 安装egret protobuf库

第一步，首先检查你是否安装了node.js以及npm，没有安装的自行安装。



第二步，在自己的电脑上安装protobufjs库以及egret protobuf库。

protobuf.js是基于ByteBuffer.js的Protocol Buffers纯JavaScript实现，主要功能是解析.proto文件，构建Message类，编码解码。

    #安装protobufjs库
    npm install protobufjs@6.8.4 -g
    #安装egret protobuf库
    npm install @egret/protobuf -g

4.3 使用egret protobuf库

假设用户有个名为 egret-project 的白鹭项目;

第一步，cd到egret-project目录下

    cd egret-project

第二步，将egret protobuf代码以及项目结构拷贝至白鹭项目

    pb-egret add

执行之后的项目目录如下图：



第三步，将XXX.proto文件拷贝至protofile目录中。



第四步，将XXX.proto文件在peorobuf/bundles目录下生成对应的js文件和d.ts文件。

    pb-egret generate



4.4 使用生成的js类

将XXX.proto文件编译成js类之后，我们可以看到该类中有几个静态函数。

  方法名            	描述                                      
  create         	从一组满足有效消息要求的属性中创建一个新消息实例，如果适用，建议首选create而非fromObject，因为create不会执行可能存在冗余的转换。
  encode         	对消息实例或有效的纯JavaScript对象进行编码，encode不隐式的验证消息，而由用户确定有效负载是有效消息。
  encodeDelimited	将protobuffer解码为消息实例，如果required字段缺少则会抛出util.ProtocolError错误。
  decodeDelimited	工作方式类似于decode函数，会另外读取一个消息的长度作为变量的预设值。   
  verify         	验证普通JavaScript对象是否满足有效消息的要求，以确保无错误的进行加密编码（encode）。verify不抛出错误而会将错误消息作为字符串返回。

测试试用下这几个函数。

Main.ts

            var user = {
                "userId":1,
                "userName":"psyche"
            }
            //验证user是否满足要求
            var ret = test.user_login.verify(user);
            console.log(ret);
    				//如果正确，ret是null 否则是返回字符串
            if(ret){
                throw Error(ret);
            }
    			
            var msg = test.user_login.create(user);
            console.log(msg);
    				//将实例编译成二进制流
            var buf = test.user_login.encode(user).finish();
            console.log(buf);
    				//解析二进制流
            var de_buf = test.user_login.decode(buf);
            console.log(de_buf);



本次关于egret中使用protobuf的介绍到此为止。

案例链接：
