(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{307:function(t,e,r){var content=r(314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("962a87ea",content,!0,{sourceMap:!1})},313:function(t,e,r){"use strict";r(307)},314:function(t,e,r){var n=r(35)(!1);n.push([t.i,".contact-form[data-v-1bb0b718]{display:flex;flex-direction:column;justify-content:center;align-items:center}",""]),t.exports=n},317:function(t,e,r){"use strict";r.r(e);r(19),r(30);var n={data:function(){return{printMessage:"",user:{name:"",email:"",text:""},error:""}},methods:{onSubmit:function(){""===this.user.name||""===this.user.email||""===this.user.text?(this.error="Not be blank!",this.printMessage=""):(this.printMessage="Submited!",this.getTimeOut(),this.$store.dispatch("addMail",{name:this.user.name,email:this.user.email,text:this.user.text}),this.error="",this.user.name="",this.user.email="",this.user.text="")},getTimeOut:function(){var t=this;setTimeout((function(){t.printMessage="Write to us again..."}),2e3),setTimeout((function(){t.printMessage=null}),8e3)}}},o=(r(313),r(15)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"contact-section"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-6 offset-xl-3 mb-5"},[r("Message",{attrs:{printMessage:t.printMessage}}),t._v(" "),r("form",{staticClass:"contact-form col-xl-6 offset-xl-3 mb-5",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[r("InputsControls",{attrs:{placeholder:"User Name",type:"text"},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}}),t._v(" "),r("InputsControls",{attrs:{placeholder:"Email",type:"email"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),t._v(" "),r("TextareaControls",{attrs:{placeholder:"Text"},model:{value:t.user.text,callback:function(e){t.$set(t.user,"text",e)},expression:"user.text"}}),t._v(" "),r("ButtonControls"),t._v(" "),r("span",{staticClass:"mt-3",staticStyle:{color:"red"}},[t._v(t._s(t.error))])],1)],1)])])])])}),[],!1,null,"1bb0b718",null);e.default=component.exports}}]);