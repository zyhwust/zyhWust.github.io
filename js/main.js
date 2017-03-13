var App = {};
App.getData = function(args){
	this.curPage = parseInt(args.page) || 1;
	this.init();
};
App.getData.prototype = {
	init: function(){
		this.$bodyWrap = $('.body-wrap');
		this.$navWrap = $('#page-nav');
		this.getList();
		this.getPage();
	},
	getList: function(){
		var html = '';
		for(let item of dataList[this.curPage - 1]){
			html += '<article id="'+ item.id +'" class="article article-type-post" itemscope="" itemprop="blogPost">\
					    <div class="article-meta">\
					      	<a href="/2015/12/10/javascript理解之闭包/" class="article-date">\
					  			<time datetime="" itemprop="datePublished">'+ item.time +'</time>\
							</a>\
					    </div>\
							<div class="article-inner">\
								<input type="hidden" class="isFancy" />\
					      	<header class="article-header">\
						    	<h1 itemprop="name">\
						      		<a class="article-title" href="">'+ item.contentTitle +'</a>\
						    	</h1>\
					      	</header>\
							<div class="article-entry" itemprop="articleBody">\
								<h3 id="">'+ item.contentTitle +'</h3><p>'+ item.content +'<br>\
						    </div>\
							<div class="article-info article-info-index">\
								<div class="article-tag tagcloud">\
									<ul class="article-tag-list">\
										<li class="article-tag-list-item">\
											<a class="article-tag-list-link color5" href="">'+ item.tag1 +'</a>\
										</li>\
									</ul>\
								</div>\
								<div class="article-category tagcloud">\
									<a class="article-category-link color1" href="">'+ item.tag2 +'</a>\
									<a class="article-category-link color5" href="">'+ item.tag3 +'</a>\
								</div>\
						        <p class="article-more-link">\
						          	<a href="">更多 &gt;&gt;</a>\
						        </p>\
									<div class="clearfix"></div>\
							</div>\
							</div>	\
					</article>'
		};
		this.$bodyWrap.prepend(html);
	},
	getPage: function(){
		var totalPage = dataList.length;
		var html = '';
		var page = '';
		var nextPage = this.curPage + 1;
		var prevPage = this.curPage - 1;
		if(this.curPage != 1){
			html += '<a class="extend prev" rel="prev" href="../html/blog.html?page='+ prevPage +'"> &laquo; Prev</a>';
		}
		for(let index in dataList){
			page = parseInt(index)+1;
			if(this.curPage == page){
				html += '<span class="page-number current">'+ page +'</span>';
			}else{
				html += '<a class="page-number" href="../html/blog.html?page='+ page +'">'+ page +'</a>';
			}
		}
		if(this.curPage != totalPage){
			html += '<a class="extend next" rel="next" href="../html/blog.html?page='+ nextPage +'">Next &raquo;</a>';
		}
		this.$navWrap.append(html);
	}
};
