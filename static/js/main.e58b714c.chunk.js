(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(55)},29:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),c=n.n(o),l=(n(29),n(5)),s=n(6),i=n(9),u=n(7),d=n(10),m=n(11),h=n(57),p=n(59),b=n(58),v=function(e){var t=e.item;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm"},r.a.createElement("div",{className:"card",style:{marginBottom:"1rem",width:"23rem",marginLeft:"0.8rem"}},r.a.createElement("img",{className:"card-img-top",src:t.urlToImage,alt:t.title}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.title),r.a.createElement("p",{className:"card-text"},t.content),r.a.createElement("a",{href:t.url,className:"btn btn-primary",target:"_blank",rel:"noopener noreferrer"},"Full Article")))))},w=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={news:[]},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://newsapi.org/v2/top-headlines?sources=".concat(this.props.sourceName,"&apiKey=").concat("063bd9bcd1b847f9a6146f60d88e2808");fetch(t).then(function(e){return e.json()}).then(function(t){e.setState({news:t.articles})}).catch(function(e){return console.log(e)})}},{key:"componentDidUpdate",value:function(e){var t=this;if(this.props.newSource!==e.newSource){var n="https://newsapi.org/v2/top-headlines?sources=".concat(this.props.newSource,"&apiKey=").concat("063bd9bcd1b847f9a6146f60d88e2808");fetch(n).then(function(e){return e.json()}).then(function(e){t.setState({news:e.articles})}).catch(function(e){return console.log(e)})}}},{key:"renderItem",value:function(){return this.state.news.map(function(e){return r.a.createElement(v,{key:e.title,item:e})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},this.renderItem())}}]),t}(a.Component),f=n(21),g=n.n(f),E=function(e){var t=e.item;return r.a.createElement("div",{className:"divider"},r.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"section"},r.a.createElement("h5",null," ",t.source.name," "),r.a.createElement("p",null," ",t.title," "))),r.a.createElement("hr",null))},y=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={sidenews:[]},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://newsapi.org/v2/top-headlines?country=".concat(this.props.country,"&apiKey=").concat("063bd9bcd1b847f9a6146f60d88e2808");g.a.get(t).then(function(t){e.setState({sidenews:t.data.articles})}).catch(function(e){return console.log(e)})}},{key:"componentDidUpdate",value:function(e){var t=this;if(this.props.newCountry!==e.newCountry){var n="https://newsapi.org/v2/top-headlines?country=".concat(this.props.newCountry,"&apiKey=").concat("063bd9bcd1b847f9a6146f60d88e2808");fetch(n).then(function(e){return e.json()}).then(function(e){t.setState({sidenews:e.articles})}).catch(function(e){return console.log(e)})}}},{key:"renderItem",value:function(){return this.state.sidenews.map(function(e){return r.a.createElement(E,{key:e.title,item:e})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null," ","Top headlines"," ",r.a.createElement("span",{style:{textTransform:"uppercase"}}," ",this.props.newCountry," ")),r.a.createElement("hr",null),this.renderItem())}}]),t}(a.Component),C=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).toggleOpen=function(){return e.setState({isOpen:!e.state.isOpen})},e.handleClose=function(t){var n=t.target.value;e.setState({changeSource:n},function(){e.props.changeSource(e.state.changeSource)})},e.state={changeSource:null,isOpen:!1},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e="dropdown-menu".concat(this.state.isOpen?" show":"");return r.a.createElement("div",{className:"dropdown",style:{margin:"0 auto"},onClick:this.toggleOpen},r.a.createElement("button",{className:"btn btn-danger dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true"},"Change News Source"),r.a.createElement("div",{className:e,"aria-labelledby":"dropdownMenuButton"},r.a.createElement("button",{value:"spiegel-online",className:"dropdown-item",onClick:this.handleClose},"Spiegel Online"),r.a.createElement("button",{value:"die-zeit",className:"dropdown-item",onClick:this.handleClose},"Die Zeit"),r.a.createElement("button",{value:"bild",className:"dropdown-item",onClick:this.handleClose},"Bild"),r.a.createElement("button",{value:"reddit-r-all",className:"dropdown-item",onClick:this.handleClose},"Reddit/all"),r.a.createElement("button",{value:"reuters",className:"dropdown-item",onClick:this.handleClose},"Reuters"),r.a.createElement("button",{value:"google-news",className:"dropdown-item",onClick:this.handleClose},"Google News"," "),r.a.createElement("button",{value:"techcrunch",className:"dropdown-item",onClick:this.handleClose},"TechCrunch")))}}]),t}(a.Component),N=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).toggleOpen=function(){return e.setState({isOpen:!e.state.isOpen})},e.handleClose=function(t){var n=t.target.value;e.setState({changeCountry:n},function(){e.props.changeCountry(e.state.changeCountry)})},e.state={changeCountry:null,isOpen:!1},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e="dropdown-menu".concat(this.state.isOpen?" show":"");return r.a.createElement("div",{className:"dropdown",style:{margin:"0 auto"},onClick:this.toggleOpen},r.a.createElement("button",{className:"btn btn-danger dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true"},"Change Country"),r.a.createElement("div",{className:e,"aria-labelledby":"dropdownMenuButton"},r.a.createElement("button",{value:"de",className:"dropdown-item",onClick:this.handleClose},"Germany"),r.a.createElement("button",{value:"us",className:"dropdown-item",onClick:this.handleClose},"United States"),r.a.createElement("button",{value:"gb",className:"dropdown-item",onClick:this.handleClose},"United Kingdom"),r.a.createElement("button",{value:"fr",className:"dropdown-item",onClick:this.handleClose},"France"),r.a.createElement("button",{value:"ca",className:"dropdown-item",onClick:this.handleClose},"Canada"),r.a.createElement("button",{value:"ae",className:"dropdown-item",onClick:this.handleClose},"UAE")))}}]),t}(a.Component),O=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={sourceName:"wired",country:"de",newCountry:null,newSource:null},e.changeSource=e.changeSource.bind(Object(m.a)(Object(m.a)(e))),e.changeCountry=e.changeCountry.bind(Object(m.a)(Object(m.a)(e))),e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"changeSource",value:function(e){this.setState({newSource:e})}},{key:"changeCountry",value:function(e){console.log(e),this.setState({newCountry:e})}},{key:"render",value:function(){var e=this;return r.a.createElement(a.Fragment,null,r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("nav",{className:"navbar sticky-top navbar-dark bg-dark"},r.a.createElement("span",{className:"navbar-brand mb-0 h1"},"My Feed"),r.a.createElement(b.a,{path:"/",render:function(){return r.a.createElement(C,{changeSource:e.changeSource})}}),r.a.createElement(b.a,{path:"/",render:function(){return r.a.createElement(N,{changeCountry:e.changeCountry})}})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-8"},r.a.createElement(b.a,{exact:!0,path:"/",render:function(){return r.a.createElement(w,{newSource:e.state.newSource,sourceName:e.state.sourceName})}})),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement(b.a,{exact:!0,path:"/",render:function(){return r.a.createElement(y,{newCountry:e.state.newCountry,country:e.state.country})}}))))))))}}]),t}(a.Component);n(53),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.e58b714c.chunk.js.map