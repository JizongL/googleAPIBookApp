(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),l=a.n(r),c=(a(15),a(1)),s=a(2),i=a(4),u=a(3),p=a(5);a(6);var m=function(e){return o.a.createElement("div",null,o.a.createElement("form",null,o.a.createElement("label",null,"Print Type:",o.a.createElement("select",{id:"print-type",name:"print-type",onChange:function(t){return e.printTypeHandle(t)}},o.a.createElement("option",{value:"all"},"All"),o.a.createElement("option",{value:"books"},"Book"),o.a.createElement("option",{value:"magazines"},"Magazine")))))};var h=function(e){return o.a.createElement("div",{className:"book-type"},o.a.createElement("form",{className:"book-type-form"},o.a.createElement("label",null,"Book Type:",o.a.createElement("select",{id:"book-type",name:"book-type",onChange:function(t){return e.bookTypeHandle(t)}},o.a.createElement("option",{value:""},"No Filter"),o.a.createElement("option",{value:"filter=ebooks"},"ebooks"),o.a.createElement("option",{value:"filter=free-ebooks"},"free ebooks"),o.a.createElement("option",{value:"filter=paid-ebooks"},"paid ebooks")))))},b=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"filter-tools"},o.a.createElement(m,{printTypeHandle:this.props.printTypeHandle}),o.a.createElement(h,{bookTypeHandle:this.props.bookTypeHandle}))}}]),t}(o.a.Component),d=(a(16),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleOnchange=function(e){a.setState({value:e.target.value})},a.state={value:""},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.state),o.a.createElement("div",{className:"search-tool"},o.a.createElement("form",{onSubmit:function(t){return e.props.searchHandle(t)},className:"search-book-form"},o.a.createElement("label",{htmlFor:"search"},"Search:",o.a.createElement("input",{type:"text",ref:"searc",name:"search",id:"search-tool",placeholder:"Search..",value:this.state.value,onChange:function(t){return e.handleOnchange(t)}})),o.a.createElement("input",{type:"submit"})))}}]),t}(o.a.Component)),f=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"book-tool-bar"},o.a.createElement(d,{searchHandle:this.props.searchHandle}),o.a.createElement(b,{printTypeHandle:this.props.printTypeHandle,bookTypeHandle:this.props.bookTypeHandle}))}}]),t}(o.a.Component),k=(a(17),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={expand:!1},a.expandHandle=function(){a.setState({expand:!0})},a.collapseHandle=function(){a.setState({expand:!1})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.bookdata.saleInfo.retailPrice?o.a.createElement("div",{className:"book-price"},"price: ",new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(this.props.bookdata.saleInfo.retailPrice.amount)):o.a.createElement("div",null,"price not available"),a=this.props.bookdata.volumeInfo.imageLinks?o.a.createElement("img",{alt:"bookcover",src:this.props.bookdata.volumeInfo.imageLinks.thumbnail}):o.a.createElement("span",null,"front cover is not available"),n="";return this.props.bookdata.volumeInfo.description&&(n=this.state.expand?o.a.createElement("div",{className:"book-description"},this.props.bookdata.volumeInfo.description,o.a.createElement("strong",{onClick:function(){return e.collapseHandle()},id:"view-less",type:"submit"},"Show Less")):o.a.createElement("div",{className:"book-description"},this.props.bookdata.volumeInfo.description.slice(0,300),o.a.createElement("strong",{onClick:function(){return e.expandHandle()},id:"view-more",type:"submit"},"Show More"))),o.a.createElement("li",{className:"book-item"},o.a.createElement("div",{className:"book-item-container"},o.a.createElement("div",{className:"book-cover"},a),o.a.createElement("div",null,o.a.createElement("h3",{className:"book-title"}," ",this.props.bookdata.volumeInfo.title),o.a.createElement("div",{className:"book-author"},"Author: ",this.props.bookdata.volumeInfo.authors),t,n)))}}]),t}(o.a.Component)),v=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){console.log(this.props.books,"test booklist current");var e=this.props.books?this.props.books.map(function(e,t){return o.a.createElement(k,{bookdata:e,key:t})}):o.a.createElement("div",{className:"no-book-found"},"No book found!");return o.a.createElement("ul",{className:"book-list"},e)}}]),t}(o.a.Component),y=(a(18),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).searchTermHandle=function(e){e.preventDefault(),a.setState({searchTerm:e.target["search-tool"].value},function(){return a.doFetch()})},a.printTypeFilterHandle=function(e){e.preventDefault(),a.setState({printType:e.currentTarget.value},function(){return a.doFetch()})},a.bookTypeFilterHandle=function(e){e.preventDefault(),a.setState({bookType:e.currentTarget.value},function(){return a.doFetch()})},a.state={bookList:[],searchTerm:"",printType:"all",bookType:"books",error:"",loading:!1},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0});var t="https://www.googleapis.com/books/v1/volumes?q=".concat(this.state.searchTerm,":keyes&key=AIzaSyAUoZApaq9eRmbV9OaTTHFzrLSoeXCDbsA&printType=").concat(this.state.bookType);console.log(t,"test url"),fetch(t).then(function(e){return e.ok?e.json():e.json().then(function(e){var t=e.error.message;return Promise.reject(t)})}).then(function(t){e.setState({bookList:t.items,error:null,loading:!1})}).catch(function(t){console.log("error testing final",t),e.setState({error:t,loading:!1})})}},{key:"doFetch",value:function(){var e=this,t="https://www.googleapis.com/books/v1/volumes?q=".concat(this.state.searchTerm,":keyes&key=AIzaSyAUoZApaq9eRmbV9OaTTHFzrLSoeXCDbsA&printType=").concat(this.state.printType,"&").concat(this.state.bookType);fetch(t).then(function(e){return e.ok?e.json():e.json().then(function(e){var t=e.error.message;return Promise.reject(t)})}).then(function(t){e.setState({bookList:t.items,error:null,loading:!1})}).catch(function(t){console.log("error testing in catch",t),e.setState({error:t})})}},{key:"render",value:function(){console.log(this.state.error,"test error final");var e=this.state.error?o.a.createElement("span",null,this.state.error):this.state.loading?o.a.createElement("span",null,"Loading..."):o.a.createElement(v,{books:this.state.bookList});return o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement("h1",null,"Gogle Book Search")),o.a.createElement(f,{searchHandle:this.searchTermHandle,printTypeHandle:this.printTypeFilterHandle,bookTypeHandle:this.bookTypeFilterHandle}),e)}}]),t}(n.Component));l.a.render(o.a.createElement(y,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.36d72dfb.chunk.js.map