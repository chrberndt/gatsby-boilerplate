(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{148:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a.n(n),o=a(160),i=a.n(o),l=a(0),c=a.n(l),s=a(165),u=a(161),m=a(7),d=a.n(m),f=a(175),p=a.n(f),h=a(164),g=a(171),b=a(173),v=(a(262),a(35),a(82),a(267)),E=a(168),y=a(153),w=function(e){function t(){return e.apply(this,arguments)||this}d()(t,e);var a=t.prototype;return a.componentDidMount=function(){this._codeTabs=new g.a,this._codeClipboard=new b.a},a.componentWillUnmount=function(){this._codeTabs=null,this._codeClipboard.dispose()},a.render=function(){return c.a.createElement("div",null,this.props.children)},t}(l.Component),N=function(e,t){return c.a.createElement("a",{className:"link-primary",target:"_blank",rel:"noopener noreferrer",href:e.url},_(e,t))},x=function(e,t){return c.a.createElement(y.Link,{className:"link-primary",to:e.slug},_(e,t))},_=function(e,t){return console.log(k(e.banner)),c.a.createElement("div",{key:t,className:"card"},c.a.createElement("img",{className:"mx-auto",alt:"banner",src:k(e.banner)?e.banner:Object(y.withPrefix)(e.banner)}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h2",{className:"clay-h2 font-weight-bold"},e.title),c.a.createElement("p",{className:"clay-p"},e.description),c.a.createElement("br",null),c.a.createElement("small",{style:{float:"right"}}," ","by "+e.author+" at "+e.date)))},k=function(e){var t=e.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);return"string"==typeof t[1]&&t[1].length>0&&t[1].toLowerCase()!==E.window.location.protocol||"string"==typeof t[2]&&t[2].length>0&&t[2].replace(new RegExp(":("+{"http:":80,"https:":443}[E.window.location.protocol]+")?$"),"")!==E.window.location.host},S=function(e){return c.a.createElement(y.StaticQuery,{query:"3031386988",render:function(e){var t=e.allMdx.edges.map(function(e){var t=e.node,a=t.fields,n=t.frontmatter;return r()({},n,a)});return c.a.createElement(c.a.Fragment,null,c.a.createElement(w,null,t.map(function(e,t){return null!==e.url?N(e,t):x(e,t)})))},data:v})},C=function(e){function t(){return e.apply(this,arguments)||this}return d()(t,e),t.prototype.render=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"blog-main"},c.a.createElement("h1",null,"Latest Stories: "),c.a.createElement(S,null)))},t}(l.Component),L=a(181),P=a(172),T=function(e){function t(){return e.apply(this,arguments)||this}return d()(t,e),t.prototype.render=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(O,{activePage:this.props.title}),c.a.createElement("small",null,this.props.author?"by "+this.props.author:""," | ",this.props.date?""+this.props.date:""),c.a.createElement("h1",null,this.props.title),c.a.createElement("div",{className:"blog-article"},c.a.createElement(L.a,{components:{h1:P.a.H1,h2:P.a.H2,h3:P.a.H3,h4:P.a.H4,p:P.a.P}},this.props.codeBody)),c.a.createElement(j,{location:this.props.location}))},t}(l.Component),j=function(e){return c.a.createElement("div",{className:"social"},c.a.createElement("div",{className:"social-banner"},c.a.createElement("p",{className:"social-banner-title"},"Share this article")),c.a.createElement("div",{className:"social-buttons"},c.a.createElement("a",{className:"social-button facebook",href:Object(y.withPrefix)("https://www.facebook.com/sharer/sharer.php?u="+e.location.href),target:"_blank",rel:"noopener noreferrer"},c.a.createElement("svg",{className:"lexicon-icon"},c.a.createElement("use",{xlinkHref:Object(y.withPrefix)("images/icons/icons.svg#social-facebook")}))),c.a.createElement("a",{className:"social-button twitter",href:Object(y.withPrefix)("https://twitter.com/home?status="+e.location.href),target:"_blank",rel:"noopener noreferrer"},c.a.createElement("svg",{className:"lexicon-icon"},c.a.createElement("use",{xlinkHref:Object(y.withPrefix)("images/icons/icons.svg#twitter")}))),c.a.createElement("a",{className:"social-button linkedin",href:Object(y.withPrefix)("https://www.linkedin.com/shareArticle?mini=true&amp;url="+e.location.href),target:"_blank",rel:"noopener noreferrer"},c.a.createElement("svg",{className:"lexicon-icon"},c.a.createElement("use",{xlinkHref:Object(y.withPrefix)("images/icons/icons.svg#social-linkedin")})))))},O=function(e){return c.a.createElement("ol",{className:"breadcrumb"},c.a.createElement("li",{className:"breadcrumb-item"},c.a.createElement(y.Link,{className:"breadcrumb-link",to:"/blog/",title:"Return to Blog"},c.a.createElement("span",{className:"breadcrumb-text-truncate"},"Return to Blog"))),c.a.createElement("li",{className:"active breadcrumb-item"},c.a.createElement(y.Link,{className:"breadcrumb-link",to:"#",title:e.activePage},c.a.createElement("span",{className:"breadcrumb-text-truncate",title:e.activePage},e.activePage))))},A=T,R=a(158),D=a(163),q=function(e){function t(){return e.apply(this,arguments)||this}d()(t,e);var a=t.prototype;return a.componentDidMount=function(){this._codeTabs=new g.a,this._codeClipboard=new b.a},a.componentWillUnmount=function(){this._codeTabs=null,this._codeClipboard.dispose()},a.render=function(){var e=this.props.data.mdx,t=e.code,a=e.frontmatter,n=a.title,r=a.mainPage,o=a.date,i=a.author,l=a.needsAuth,s=e.excerpt,u=e.timeToRead;return c.a.createElement(D.a,{needsAuth:l},c.a.createElement("div",{className:"blog"},c.a.createElement(p.a,null,c.a.createElement("title",null,n),c.a.createElement("meta",{name:"description",content:s}),c.a.createElement("meta",{name:"og:description",content:s}),c.a.createElement("meta",{name:"twitter:description",content:s}),c.a.createElement("meta",{name:"og:title",content:n}),c.a.createElement("meta",{name:"og:type",content:"article"}),c.a.createElement("meta",{name:"twitter.label1",content:"Reading time"}),c.a.createElement("meta",{name:"twitter:data1",content:u+" min read"})),c.a.createElement("main",{className:"content"},c.a.createElement("header",{className:"header"},c.a.createElement(R.a,{opaque:!r,fixed:r}),r&&c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"intro blog-intro text-center col"},c.a.createElement("div",{className:"container-fluid container-fluid-max-lg"},c.a.createElement("h1",{className:"h1"},"Blog"),c.a.createElement("h2",{className:"h3"},"Where good ideas come from")))))),c.a.createElement("div",{className:"clay-site-container container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},!r&&c.a.createElement("article",null,c.a.createElement(A,{title:n,author:i,date:o,codeBody:t.body,location:this.props.location})),r&&c.a.createElement(C,{title:n,excerpt:s,timeToRead:u}))))),c.a.createElement(h.a,null)))},t}(l.Component);a.d(t,"pageQuery",function(){return U});var U="1520345035";t.default=function(e){var t=e.children,a=i()(e,["children"]);return c.a.createElement(s.MDXScopeProvider,{__mdxScope:r()({},u.a)},c.a.createElement(q,a,t))}},153:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(151),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(155),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(33);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},154:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return u}),a.d(t,"c",function(){return m}),a.d(t,"d",function(){return d});a(34);var n=a(179),r=a.n(n),o=a(169),i=function(){return"undefined"!=typeof window},l=function(e){return window.localStorage.setItem("gatsbyUser",JSON.stringify(e))},c=i()?r.a.auth("auth-boilerplate.wedeploy.io").auth("0bbea119-1d30-43ed-800b-1487ef52b316"):o.Nothing,s=function(e){var t=e.email,a=e.password;if(!m())return new Promise(function(e,n){c.signInWithEmailAndPassword(t,a).then(function(t){var a=t.data_,n=a.createdAt,r=a.email,o=a.id,i=a.token;l({createdAt:n,email:r,id:o,token:i}),e()}).catch(function(e){n(alert(e.error_description))})})},u=function(e){var t=e.email,a=e.password;if(!m())return new Promise(function(e,n){c.createUser({email:t,password:a}).then(function(t){e()}).catch(function(e){n(alert(e))})})},m=function(){return!!c.currentUser},d=function(){return l({}),c.signOut()}},155:function(e,t,a){var n;e.exports=(n=a(156))&&n.default||n},156:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a.n(n),o=a(0),i=a.n(o),l=a(4),c=a.n(l),s=a(54),u=a(2),m=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,r()({location:t,pageResources:a},a.json))};m.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=m},158:function(e,t,a){"use strict";a(178);var n=a(53),r=a.n(n),o=a(7),i=a.n(o),l=a(168),c=a(0),s=a.n(c),u=a(153),m=a(170),d=a.n(m),f=a(154),p=function(e){function t(){var t;return(t=e.call(this)||this).expandToggler=function(){t.props.onNavbarToggleClick()},t._rootNode=l.window||l.document,t._addScroll=t._addScroll.bind(r()(t)),t}i()(t,e);var a=t.prototype;return a._getScrollTop=function(){return this._rootNode===l.window?this._rootNode.pageYOffset:this._rootNode===l.document?this._rootNode.defaultView.pageYOffset:void 0},a._addScroll=function(){this._getScrollTop()>=50?this.refs.navElement.classList.add("scroll"):this.refs.navElement.classList.remove("scroll")},a._handleLogout=function(){var e=this;Object(f.d)().then(function(){e.forceUpdate()}).catch(function(e){alert(e),l.window.location.reload()})},a.componentDidMount=function(){this.props.static||this._rootNode.addEventListener("scroll",this._addScroll,!1)},a.componentWillUnmount=function(){this.props.static||this._rootNode.removeEventListener("scroll",this._addScroll,!1)},a.render=function(){var e=this.props,t=e.fixed,a=void 0===t||t,n=e.opaque,r=void 0!==n&&n,o=e.effect,i=void 0!==o&&o,l=e.sidebarHamburguerIcon,c=void 0!==l&&l,m=d()("navbar navbar-clay-site navbar-expand-lg navbar-dark",{"fixed-top":a,scroll:i,"bg-primary":r});return s.a.createElement("nav",{ref:"navElement",className:m},s.a.createElement("div",{className:"container-fluid"},s.a.createElement(u.Link,{to:"/",className:"navbar-brand"},s.a.createElement("img",{className:"logo mr-2",src:Object(u.withPrefix)("/images/home/liferay_logo.svg"),alt:"Liferay Logo"}),s.a.createElement("span",{className:"title align-middle"},"Gatsby Boilerplate")),c&&s.a.createElement("button",{onClick:this.expandToggler,className:"navbar-toggler p-2 order-md-1",type:"button","data-toggle":"collapse","data-target":"#claySidebar","aria-controls":"claySidebar","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("svg",{"aria-hidden":"true",className:"lexicon-icon lexicon-icon-bars"},s.a.createElement("use",{xlinkHref:Object(u.withPrefix)("images/icons/icons.svg#bars")}))),s.a.createElement("ul",{className:"navbar-nav ml-md-auto"},s.a.createElement("li",{className:"nav-item"},s.a.createElement(u.Link,{className:"nav-link ml-lg-3",to:"/docs/"},"Docs")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(u.Link,{className:"nav-link ml-lg-3",to:"/blog/"},"Blog")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(u.Link,{className:"nav-link ml-lg-3",to:"/onboarding/"},"Onboarding")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(u.Link,{className:"nav-link ml-lg-3",to:"/updates/"},"Updates")),Object(f.c)()?s.a.createElement("li",{className:"nav-item"},s.a.createElement(u.Link,{className:"nav-link ml-lg-3",to:"#",onClick:this._handleLogout.bind(this)},"Logout")):"",s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"mx-3 mr-lg-0",href:"https://github.com/diegonvs/gatsby-boilerplate",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{src:Object(u.withPrefix)("/images/home/GitHub-Mark-64px.svg"),alt:""}))))))},t}(c.Component);t.a=p},161:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(174);t.a={React:r.a,MDXTag:o.MDXTag}},163:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=a(0),i=a.n(o),l=a(154),c=(a(180),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={email:"",password:""},t.handleUpdate=function(e){var a;t.setState(((a={})[e.target.name]=e.target.value,a))},t._handleSignUp=function(e){e.preventDefault(),Object(l.b)(t.state).then(function(){t.props.changeLoginState(!0)}).catch(function(){t.props.changeLoginState(!1)})},t._handleSubmit=function(e){e.preventDefault(),Object(l.a)(t.state).then(function(){t.props.changeLoginState(!0)}).catch(function(){t.props.changeLoginState(!1)})},t}return r()(t,e),t.prototype.render=function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"login"},i.a.createElement("div",{className:"clay-site-container container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"sheet"},i.a.createElement("div",{className:"sheet-header"},i.a.createElement("h2",{className:"sheet-title"},"Login")),i.a.createElement("form",{method:"post",onSubmit:function(t){e._handleSubmit(t)}},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"basicInputTypeEmail"},"Email"),i.a.createElement("input",{className:"form-control",autoComplete:"email",type:"email",name:"email",onChange:this.handleUpdate,id:"basicInputTypeEmail"})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"basicInputTypePassword"},"Password"),i.a.createElement("input",{className:"form-control",autoComplete:"current-password",id:"basicInputTypePassword",onChange:this.handleUpdate,placeholder:"Enter password",name:"password",type:"password"})),i.a.createElement("div",{className:"form-group"},i.a.createElement("div",{className:"btn-group"},i.a.createElement("div",{className:"btn-group-item"},i.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit")),i.a.createElement("div",{className:"btn-group-item"},i.a.createElement("a",{className:"btn btn-secondary",onClick:function(t){e._handleSignUp(t)},href:"#no"},"Sign Up")))))))))))},t}(o.Component)),s=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={login:!1},a}r()(t,e);var a=t.prototype;return a.changeLoginState=function(e){this.setState(function(){return{login:e}})},a.componentDidMount=function(){this.setState({login:!!Object(l.c)()})},a.render=function(){return this.props.needsAuth&&!this.state.login?i.a.createElement(c,{changeLoginState:this.changeLoginState.bind(this)}):this.props.children},t}(o.Component);t.a=s},164:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(153),i=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container-fluid container-fluid-max-lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg text-center text-lg-left mb-4 mb-lg-0"},r.a.createElement("img",{className:"logo",alt:"liferay logo",src:Object(o.withPrefix)("images/liferayLogo.png")}),r.a.createElement("div",{className:"clearfix d-lg-none"}),"Brought to you by ",r.a.createElement("a",{href:"http://www.liferay.com",className:"font-weight-bold",target:"_blank",rel:"noopener noreferrer"},"Liferay, Inc.")),r.a.createElement("div",{className:"col-lg text-center text-lg-right"},r.a.createElement("div",null,"Powered by ",r.a.createElement("a",{href:"https://wedeploy.com/",className:"font-weight-bold",target:"_blank",rel:"noopener noreferrer"},"WeDeploy™"))))))};t.a=i},171:function(e,t,a){"use strict";a(75);var n=a(157),r=a.n(n),o=a(187),i=a.n(o),l=function(){function e(){var e=this,t=[];Array.prototype.slice.call(document.querySelectorAll(".code-container")).forEach(function(a){t.push({label:e._getTabLabelFromElement(a),element:a}),a.nextElementSibling&&r.a.hasClass(a.nextElementSibling,"code-container")||(t.length>1&&e._renderTabs(t),t=[])})}var t=e.prototype;return t._getTabLabelFromElement=function(e){return e.getAttribute("data-label")},t._hide=function(e){r.a.addClasses(e,"hide")},t._hideAll=function(e){var t=this;e.forEach(function(e){t._hide(e.element)})},t._renderTabs=function(e){var t=this,a=r.a.buildFragment('<div class="tabContainer"></div>'),n=new i.a({elementClasses:"nav-code-tabs",tabs:e},a);n.on("changeRequest",function(e){var a=e.state.tab;t._hideAll(n.tabs),t._show(n.tabs[a].element)}),this._hideAll(n.tabs),this._show(n.tabs[0].element),e[0].element.parentNode.insertBefore(a,e[0].element)},t._show=function(e){r.a.removeClasses(e,"hide")},e}();t.a=l},172:function(e,t,a){"use strict";var n={};a.r(n),a.d(n,"H1",function(){return i}),a.d(n,"H2",function(){return l}),a.d(n,"H3",function(){return c}),a.d(n,"H4",function(){return s}),a.d(n,"P",function(){return u});var r=a(0),o=a.n(r),i=function(e){return o.a.createElement("h1",{className:"clay-h1"},e.children)},l=function(e){return o.a.createElement("h2",{className:"clay-h2"},e.children)},c=function(e){return o.a.createElement("h3",{className:"clay-h3"},e.children)},s=function(e){return o.a.createElement("h4",{className:"clay-h4"},e.children)},u=function(e){return o.a.createElement("p",{className:"clay-p"},e.children)};t.a=n},173:function(e,t,a){"use strict";var n=a(189),r=a.n(n),o=a(190),i=a.n(o),l=function(){},c=function(){function e(){this.clayTooltip=new r.a(new l),this.clayClipboard=new i.a({selector:".code-container .btn-copy",text:function(e){return e.setAttribute("title","Copied"),setTimeout(function(){e.setAttribute("title","Copy")},2e3),e.parentNode.querySelector("pre code").innerText}})}return e.prototype.dispose=function(){this.clayTooltip.dispose(),this.clayClipboard.dispose()},e}();t.a=c},262:function(e,t,a){var n=a(6),r=a(263),o=a(26).f,i=a(266).f,l=a(57),c=a(79),s=n.RegExp,u=s,m=s.prototype,d=/a/g,f=/a/g,p=new s(d)!==d;if(a(18)&&(!p||a(17)(function(){return f[a(3)("match")]=!1,s(d)!=d||s(f)==f||"/a/i"!=s(d,"i")}))){s=function(e,t){var a=this instanceof s,n=l(e),o=void 0===t;return!a&&n&&e.constructor===s&&o?e:r(p?new u(n&&!o?e.source:e,t):u((n=e instanceof s)?e.source:e,n&&o?c.call(e):t),a?this:m,s)};for(var h=function(e){e in s||o(s,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},g=i(u),b=0;g.length>b;)h(g[b++]);m.constructor=s,s.prototype=m,a(19)(n,"RegExp",s)}a(85)("RegExp")},263:function(e,t,a){var n=a(13),r=a(264).set;e.exports=function(e,t,a){var o,i=t.constructor;return i!==a&&"function"==typeof i&&(o=i.prototype)!==a.prototype&&n(o)&&r&&r(e,o),e}},264:function(e,t,a){var n=a(13),r=a(5),o=function(e,t){if(r(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{(n=a(20)(Function.call,a(265).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,a){return o(e,a),t?e.__proto__=a:n(e,a),e}}({},!1):void 0),check:o}},265:function(e,t,a){var n=a(84),r=a(55),o=a(37),i=a(81),l=a(29),c=a(80),s=Object.getOwnPropertyDescriptor;t.f=a(18)?s:function(e,t){if(e=o(e),t=i(t,!0),c)try{return s(e,t)}catch(a){}if(l(e,t))return r(!n.f.call(e,t),e[t])}},266:function(e,t,a){var n=a(83),r=a(56).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,r)}},267:function(e){e.exports={data:{allMdx:{edges:[{node:{fields:{slug:"blog/2018-12-11-liferay-portal-ce-clustering-returns.html"},frontmatter:{title:"Liferay Portal CE Clustering Returns",date:"December 11, 2018",description:"I’m happy to announce we will be returning out of the box support for clustering with the release of Liferay Portal 7.1 CE GA3.",author:"Bryan H Cheung",url:"https://community.liferay.com/blogs/-/blogs/liferay-portal-ce-clustering-returns",banner:"https://community.liferay.com/o/osb-community-theme/images/header-bg.jpg"}}},{node:{fields:{slug:"blog/2018-11-07-release.html"},frontmatter:{title:"Gatsby Boilerplate was launched!",date:"November 07, 2018",description:"Start your new Gatsby project with this amazing boilerplate <3",author:"Diego Nascimento",url:null,banner:"images/hoohay.jpg"}}},{node:{fields:{slug:"blog/2017-01-04-just-in-small-batch-of-jamaican-blue-mountain-in-store-next-week.html"},frontmatter:{title:"Just in: small batch of Jamaican Blue Mountain in store next week",date:"January 04, 2017",description:"We’re proud to announce that we’ll be offering a small batch of Jamaica Blue Mountain coffee beans in our store next week.",author:"Matuzalém Teles",url:null,banner:"images/jamaicanbluemountain.jpg"}}},{node:{fields:{slug:"blog/2017-01-04-a-beginners-guide-to-brewing-with-chemex.html"},frontmatter:{title:"A beginners’ guide to brewing with Chemex",date:"January 04, 2017",description:"Brewing with a Chemex probably seems like a complicated, time-consuming ordeal, but once you get used to the process, it becomes a soothing ritual that's worth the effort every time.",author:"Diego Nascimento",url:null,banner:"images/chemex-pour-over-glass-coffee-maker-with-wood-collar-c.jpg"}}},{node:{fields:{slug:"blog/2016-12-17-making-sense-of-the-scaas-new-flavor-wheel.html"},frontmatter:{title:"Making sense of the SCAA’s new Flavor Wheel",date:"December 17, 2016",description:"The Coffee Taster’s Flavor Wheel, the official resource used by coffee tasters, has been revised for the first time this year.",author:"Diego Nascimento",url:null,banner:"images/flavor_wheel.jpg"}}}]}}}}}]);
//# sourceMappingURL=component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-ba-7-d-3-c-27-d-52-f-0929-fb-04-a-0681-cc-61514-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-d12ddd007db75fefe103.js.map