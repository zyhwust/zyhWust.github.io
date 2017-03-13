var dataList = [
	[
		{
			'id' : 'post-javascript理解之json',
			'article-title' : 'javascript理解之json',
			'time' : '',
			'contentTitle' : '什么是JSON',
			'content' : 'JSON：JavaScript 对象表示法（JavaScript Object Notation）\
							JSON的形式是用大括号“{}”包围起来的项目列表，每一个项目间用逗号（,）分隔，而项目就是用冒号（:）分隔的属性名和属性值。这是典型的字典表示形式，也再次表明javascript里的对象就是字典结构。不管多么复杂的对象，都可以用一句JSON代码来创建并赋值。在JSON中，名称/值对 包括字段名称（在双引号中），后面写一个冒号，然后是值。',
			'tag1' : 'javascript基础',
			'tag2' : 'javascript',
			'tag3' : 'Json'
		},
		{
			'id' : 'post-javascript理解之正则表达式',
			'article-title' : 'javascript理解之正则表达式',
			'time' : '',
			'contentTitle' : '基本概念',
			'content' : '正则表达式是一种文本模式，包括普通字符（例如，a 到 z 之间的字母）和特殊字符（称为“元字符”）。模式描述在搜索文本时要匹配的一个或多个字符串。',
			'tag1' : 'javascript基础',
			'tag2' : 'javascript',
			'tag3' : '正则表达式'
		},
		{
			'id' : 'post-javascript理解之变量、作用域',
			'article-title' : 'javascript理解之变量、作用域',
			'time' : '',
			'contentTitle' : '基本概念',
			'content' : '基本类型值有：undefined，NUll，Boolean，Number和String，这些类型分别在内存中占有固定的大小空间，他们的值保存在栈空间，我们通过按值来访问的。\
						（1）值类型：数值、布尔值、null、undefined。\
						（2）引用类型：对象、数组、函数。',
			'tag1' : 'javascript基础',
			'tag2' : 'javascript',
			'tag3' : ''
		},
		{
			'id' : 'post-javascript理解之Ajax和Http状态字',
			'article-title' : 'javascript理解之Ajax和Http状态字',
			'time' : '',
			'contentTitle' : 'Ajax及其工作原理',
			'content' : 'AJAX 是一种与服务器交换数据无需刷新网页的技术。',
			'tag1' : 'javascript基础',
			'tag2' : 'javascript',
			'tag3' : 'Http、Ajax'
		},
		{
			'id' : 'post-javascript理解之function函数部分',
			'article-title' : 'javascript理解之function函数部分',
			'time' : '',
			'contentTitle' : '函数的概念：',
			'content' : '函数是由事件驱动的或者当它被调用时执行的可重复使用的代码块。',
			'tag1' : 'javascript基础',
			'tag2' : 'javascript',
			'tag3' : 'function'
		},
		{
			'id' : 'post-javascript理解之Bom与Dom',
			'article-title' : 'javascript理解之Bom与Dom',
			'time' : '',
			'contentTitle' : 'DOM介绍',
			'content' : 'D（文档）可以理解为整个Web加载的网页文档，O（对象）可以理解为类似window对象只来的东西，可以调用属性和方法，这里我们说的是document对象，M（模型）可以理解为网页文档的树形结构，DOM树由节点构成',
			'tag1' : 'javascript基础',
			'tag2' : 'javascript',
			'tag3' : 'Dom、Bom'
		},
		{
			'id' : 'post-javascript理解之数组与对象',
			'article-title' : 'javascript理解之数组与对象',
			'time' : '',
			'contentTitle' : '对象部分',
			'content' : 'Object 是一个无序的集合，可以存放任意类型对象，所有其他对象都继承自这个对象。\
							创建Object类型有两种，一种是使用new运算符，一种是字面量表示法。\
							a. 使用new运算符创建Object',
			'tag1' : 'javascript基础',
			'tag2' : 'javascript',
			'tag3' : '数组、对象'
		},
		{
			'id' : 'post-javascript理解之this关键字',
			'article-title' : 'javascript理解之this关键字',
			'time' : '2016-01-19',
			'contentTitle' : 'this应用场景',
			'content' : '在《javaScript语言精粹》这本书中，把 this 出现的场景分为四类\
						有对象就指向调用对象\
						没调用对象就指向全局对象\
						用new构造就指向新对象\
						通过 apply 或 call 或 bind 来改变 this 的所指。',
			'tag1' : 'javascript基础',
			'tag2' : 'javascript',
			'tag3' : 'this'
		},
		{
			'id' : 'post-javascript理解之继承',
			'article-title' : 'javascript理解之继承',
			'time' : '2016-01-19',
			'contentTitle' : 'js继承的概念',
			'content' : 'js里常用的如下两种继承方式：\
						原型链继承（对象间的继承）\
						类式继承（构造函数间的继承）\
						由于js不像java那样是真正面向对象的语言，js是基于对象的，它没有类的概念。所以，要想实现继承，可以用js的原型prototype机制或者用apply和call方法去实现',
			'tag1' : 'javascript基础',
			'tag2' : 'javascript',
			'tag3' : '继承'
		},
		{
			'id' : 'post-javascript理解之闭包',
			'article-title' : 'javascript理解之闭包',
			'time' : '2016-01-19',
			'contentTitle' : '闭包的概念',
			'content' : '闭包 是指有权访问另一个函数作用域中的变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量。',
			'tag1' : 'javascript基础',
			'tag2' : 'javascript',
			'tag3' : '闭包'
		},
	],
	[
		// {
		// 	'id' : 'post-',
		// 	'article-title' : '',
		// 	'time' : '',
		// 	'contentTitle' : '',
		// 	'content' : '',
		// 	'tag1' : 'javascript基础',
		// 	'tag2' : 'javascript',
		// 	'tag3' : ''
		// },
		{
			'id' : 'post-javascript理解之json',
			'article-title' : 'javascript理解之json',
			'time' : '',
			'contentTitle' : '什么是JSON',
			'content' : 'JSON：JavaScript 对象表示法（JavaScript Object Notation）\
							JSON的形式是用大括号“{}”包围起来的项目列表，每一个项目间用逗号（,）分隔，而项目就是用冒号（:）分隔的属性名和属性值。这是典型的字典表示形式，也再次表明javascript里的对象就是字典结构。不管多么复杂的对象，都可以用一句JSON代码来创建并赋值。在JSON中，名称/值对 包括字段名称（在双引号中），后面写一个冒号，然后是值。',
			'tag1' : 'javascript基础',
			'tag2' : 'javascript',
			'tag3' : 'Json'
		},
		{
			'id' : 'post-javascript理解之正则表达式',
			'article-title' : 'javascript理解之正则表达式',
			'time' : '',
			'contentTitle' : '基本概念',
			'content' : '正则表达式是一种文本模式，包括普通字符（例如，a 到 z 之间的字母）和特殊字符（称为“元字符”）。模式描述在搜索文本时要匹配的一个或多个字符串。',
			'tag1' : 'javascript基础',
			'tag2' : 'javascript',
			'tag3' : '正则表达式'
		},
		{
			'id' : 'post-javascript理解之变量、作用域',
			'article-title' : 'javascript理解之变量、作用域',
			'time' : '',
			'contentTitle' : '基本概念',
			'content' : '基本类型值有：undefined，NUll，Boolean，Number和String，这些类型分别在内存中占有固定的大小空间，他们的值保存在栈空间，我们通过按值来访问的。\
						（1）值类型：数值、布尔值、null、undefined。\
						（2）引用类型：对象、数组、函数。',
			'tag1' : 'javascript基础',
			'tag2' : 'javascript',
			'tag3' : ''
		},
		{
			'id' : 'post-javascript理解之Ajax和Http状态字',
			'article-title' : 'javascript理解之Ajax和Http状态字',
			'time' : '',
			'contentTitle' : 'Ajax及其工作原理',
			'content' : 'AJAX 是一种与服务器交换数据无需刷新网页的技术。',
			'tag1' : 'javascript基础',
			'tag2' : 'javascript',
			'tag3' : 'Http、Ajax'
		},
		{
			'id' : 'post-javascript理解之function函数部分',
			'article-title' : 'javascript理解之function函数部分',
			'time' : '',
			'contentTitle' : '函数的概念：',
			'content' : '函数是由事件驱动的或者当它被调用时执行的可重复使用的代码块。',
			'tag1' : 'javascript基础',
			'tag2' : 'javascript',
			'tag3' : 'function'
		},
		{
			'id' : 'post-javascript理解之Bom与Dom',
			'article-title' : 'javascript理解之Bom与Dom',
			'time' : '',
			'contentTitle' : 'DOM介绍',
			'content' : 'D（文档）可以理解为整个Web加载的网页文档，O（对象）可以理解为类似window对象只来的东西，可以调用属性和方法，这里我们说的是document对象，M（模型）可以理解为网页文档的树形结构，DOM树由节点构成',
			'tag1' : 'javascript基础',
			'tag2' : 'javascript',
			'tag3' : 'Dom、Bom'
		},
		{
			'id' : 'post-javascript理解之数组与对象',
			'article-title' : 'javascript理解之数组与对象',
			'time' : '',
			'contentTitle' : '对象部分',
			'content' : 'Object 是一个无序的集合，可以存放任意类型对象，所有其他对象都继承自这个对象。\
							创建Object类型有两种，一种是使用new运算符，一种是字面量表示法。\
							a. 使用new运算符创建Object',
			'tag1' : 'javascript基础',
			'tag2' : 'javascript',
			'tag3' : '数组、对象'
		},
		{
			'id' : 'post-javascript理解之this关键字',
			'article-title' : 'javascript理解之this关键字',
			'time' : '2016-01-19',
			'contentTitle' : 'this应用场景',
			'content' : '在《javaScript语言精粹》这本书中，把 this 出现的场景分为四类\
						有对象就指向调用对象\
						没调用对象就指向全局对象\
						用new构造就指向新对象\
						通过 apply 或 call 或 bind 来改变 this 的所指。',
			'tag1' : 'javascript基础',
			'tag2' : 'javascript',
			'tag3' : 'this'
		},
		{
			'id' : 'post-javascript理解之继承',
			'article-title' : 'javascript理解之继承',
			'time' : '2016-01-19',
			'contentTitle' : 'js继承的概念',
			'content' : 'js里常用的如下两种继承方式：\
						原型链继承（对象间的继承）\
						类式继承（构造函数间的继承）\
						由于js不像java那样是真正面向对象的语言，js是基于对象的，它没有类的概念。所以，要想实现继承，可以用js的原型prototype机制或者用apply和call方法去实现',
			'tag1' : 'javascript基础',
			'tag2' : 'javascript',
			'tag3' : '继承'
		},
		{
			'id' : 'post-javascript理解之闭包',
			'article-title' : 'javascript理解之闭包',
			'time' : '2016-01-19',
			'contentTitle' : '闭包的概念',
			'content' : '闭包 是指有权访问另一个函数作用域中的变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量。',
			'tag1' : 'javascript基础',
			'tag2' : 'javascript',
			'tag3' : '闭包'
		},
	]
];
