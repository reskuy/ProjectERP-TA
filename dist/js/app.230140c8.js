(function(t){function e(e){for(var i,l,o=e[0],s=e[1],d=e[2],u=0,m=[];u<o.length;u++)l=o[u],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&m.push(n[l][0]),n[l]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);c&&c(e);while(m.length)m.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,o=1;o<a.length;o++){var s=a[o];0!==n[s]&&(i=!1)}i&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var i={},n={app:0},r=[];function l(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=i,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(a,i,function(e){return t[e]}.bind(null,i));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var c=s;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Navbar"),a("v-main",[a("router-view")],1)],1)},r=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"overflow-hidden"},[a("Appbar"),a("Navdrawer")],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{app:"",color:"primary",fixed:""}},[a("div",{staticClass:"d-flex align-center"},[a("p",[t._v("Hi")])]),a("v-spacer"),a("v-btn",{attrs:{href:"#",text:""}},[a("v-icon",[t._v("mdi-bell-outline")])],1),a("v-btn",{attrs:{href:"#",text:""}},[a("v-icon",[t._v("mdi-alert-circle-outline")])],1)],1)},d=[],c=a("2877"),u=a("6544"),m=a.n(u),v=a("40dc"),p=a("8336"),f=a("132d"),b=a("2fa4"),k={},g=Object(c["a"])(k,s,d,!1,null,null,null),h=g.exports;m()(g,{VAppBar:v["a"],VBtn:p["a"],VIcon:f["a"],VSpacer:b["a"]});var x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{attrs:{app:"",color:"primary",expandOnHover:"",miniVariant:"",permanent:"",fixed:"",dark:"",height:"100%"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[a("v-list-item",{class:t.miniVariant&&"px-0",attrs:{"two-line":""}},[a("v-list-item-avatar",[a("img",{attrs:{src:"https://i.ibb.co/tJrtCtK/585e4bf3cb11b227491c339a.png"}})]),a("v-list-item-content",[a("v-list-item-title",[t._v("User Role")]),a("v-list-item-subtitle",[t._v("Setting")])],1)],1),a("v-divider"),a("v-list-item",{attrs:{link:"",to:"/Home"}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-home")])],1),a("v-list-item-title",[t._v("Dashboard")])],1),t._l(t.items,(function(e){return a("v-list-group",{key:e.title,attrs:{"prepend-icon":e.icon,color:t.active?"primary":""},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)]},proxy:!0}],null,!0),model:{value:e.active,callback:function(a){t.$set(e,"active",a)},expression:"item.active"}},t._l(e.items,(function(e){return a("v-list-item",{key:e.title,attrs:{link:"",to:e.link}},[a("v-list-item-content",[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))]),a("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)],1)})),1)}))],2)],1)},I=[],_={data:function(){return{drawer:!0,items:[{icon:"mdi-package-variant-closed",title:"Barang",items:[{icon:"mdi-view-list",title:"Daftar Barang",link:"/Barang"},{icon:"mdi-plus-box",title:"Input Barang",link:"/InputBarang"}]},{icon:"mdi-account-group",title:"Pelanggan",items:[{icon:"mdi-view-list",title:"Daftar Pelanggan",link:"/Pelanggan"},{icon:"mdi-plus-box",title:"Pelanggan",link:"/InputPelanggan"}]},{icon:"mdi-truck-fast",title:"Suplier",items:[{icon:"mdi-view-list",title:"Daftar Suplier",link:"/Suplier"},{icon:"mdi-plus-box",title:"Suplier",link:"/InputSuplier"}]},{icon:"mdi-warehouse",title:"Gudang",items:[{icon:"mdi-view-list",title:"Daftar Gudang",link:"/Gudang"},{icon:"mdi-plus-box",title:"Gudang",link:"/InputGudang"}]}],permanent:!0,miniVariant:!0,expandOnHover:!0}}},V=_,y=a("ce7e"),w=a("8860"),B=a("56b0"),O=a("da13"),S=a("8270"),C=a("5d23"),T=a("34c3"),j=a("f774"),P=Object(c["a"])(V,x,I,!1,null,null,null),$=P.exports;m()(P,{VDivider:y["a"],VIcon:f["a"],VList:w["a"],VListGroup:B["a"],VListItem:O["a"],VListItemAvatar:S["a"],VListItemContent:C["a"],VListItemIcon:T["a"],VListItemSubtitle:C["b"],VListItemTitle:C["c"],VNavigationDrawer:j["a"]});var D={components:{Appbar:h,Navdrawer:$},data:function(){return{}}},A=D,N=a("a523"),K=Object(c["a"])(A,l,o,!1,null,null,null),L=K.exports;m()(K,{VContainer:N["a"]});var M={name:"App",components:{Navbar:L},data:function(){return{}}},E=M,G=a("7496"),H=a("f6c4"),J=Object(c["a"])(E,n,r,!1,null,null,null),R=J.exports;m()(J,{VApp:G["a"],VMain:H["a"]});var U=a("f309");i["a"].use(U["a"]);var F=new U["a"]({}),Y=a("8c4f"),q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.barang,"sort-by":"kode"},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[t._v("Barang")]),a("v-divider",{staticClass:"mx-6",attrs:{inset:"",vertical:""}}),a("v-toolbar-title",[t._v("Daftar Barang")]),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.additem;return[a("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",n,!1),i),[t._v("Tambahkan Barang")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"18",sm:"10",md:"6"}},[a("v-text-field",{attrs:{label:"Kode"},model:{value:t.editedItem.kode,callback:function(e){t.$set(t.editedItem,"kode",e)},expression:"editedItem.kode"}})],1),a("v-col",{attrs:{cols:"18",sm:"10",md:"6"}},[a("v-text-field",{attrs:{label:"Nama"},model:{value:t.editedItem.nama,callback:function(e){t.$set(t.editedItem,"nama",e)},expression:"editedItem.nama"}})],1),a("v-col",{attrs:{cols:"18",sm:"10",md:"6"}},[a("v-text-field",{attrs:{label:"Merk"},model:{value:t.editedItem.merk,callback:function(e){t.$set(t.editedItem,"merk",e)},expression:"editedItem.merk"}})],1),a("v-col",{attrs:{cols:"18",sm:"10",md:"6"}},[a("v-text-field",{attrs:{label:"Kategori"},model:{value:t.editedItem.kategori,callback:function(e){t.$set(t.editedItem,"kategori",e)},expression:"editedItem.kategori"}})],1),a("v-col",{attrs:{cols:"18",sm:"10",md:"6"}},[a("v-text-field",{attrs:{label:"PartNumber 1"},model:{value:t.editedItem.partnumber1,callback:function(e){t.$set(t.editedItem,"partnumber1",e)},expression:"editedItem.partnumber1"}})],1),a("v-col",{attrs:{cols:"18",sm:"10",md:"6"}},[a("v-text-field",{attrs:{label:"PartNumber 2"},model:{value:t.editedItem.partnumber2,callback:function(e){t.$set(t.editedItem,"partnumber2",e)},expression:"editedItem.partnumber2"}})],1),a("v-col",{attrs:{cols:"18",sm:"10",md:"6"}},[a("v-text-field",{attrs:{label:"Kendaraan"},model:{value:t.editedItem.kendaraan,callback:function(e){t.$set(t.editedItem,"kendaraan",e)},expression:"editedItem.kendaraan"}})],1),a("v-col",{attrs:{cols:"18",sm:"10",md:"6"}},[a("v-text-field",{attrs:{label:"Kode Suplier"},model:{value:t.editedItem.kd_suplier,callback:function(e){t.$set(t.editedItem,"kd_suplier",e)},expression:"editedItem.kd_suplier"}})],1),a("v-col",{attrs:{cols:"18",sm:"10",md:"6"}},[a("v-text-field",{attrs:{label:"Dimensi"},model:{value:t.editedItem.dimensi,callback:function(e){t.$set(t.editedItem,"dimensi",e)},expression:"editedItem.dimensi"}})],1),a("v-col",{attrs:{cols:"18",sm:"10",md:"6"}},[a("v-switch",{attrs:{color:"primary","true-value":"Aktif","false-value":"tidak",label:" Aktif "},model:{value:t.editedItem.aktif,callback:function(e){t.$set(t.editedItem,"aktif",e)},expression:"editedItem.aktif"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Batal")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v("Simpan")])],1)],1)],1)],1)]},proxy:!0},{key:"item.aksi",fn:function(e){var i=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(i)}}},[t._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(i)}}},[t._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[a("p",[t._v("Tidak ada Data barang")])]},proxy:!0}],null,!0)})},z=[],Q=(a("c975"),a("a434"),a("bc3a")),W=a.n(Q),X=W.a.create({baseURL:"http://localhost:3000/api",headers:{"Content-type":"application/json"}}),Z={data:function(){return{dialog:!1,headers:[{text:"Kode",align:"start",value:"kode"},{text:"Nama",value:"nama"},{text:"Merk",value:"merk"},{text:"PartNumber 1",value:"partnumber1"},{text:"PartNumber 2",value:"partnumber2"},{text:"Kategori",value:"kategori"},{text:"Kendaraan",value:"kendaraan"},{text:"Kode Suplier",value:"kd_suplier"},{text:"Dimensi",value:"dimensi"},{text:"Aktif",value:"aktif"},{text:"Aksi",value:"aksi",sortable:!1}],barang:[],editedIndex:-1,editedItem:{kode:"",nama:0,merk:0,kategori:0,partnumber1:0,partnumber2:0,kendaraan:"0",kd_suplier:"0",dimensi:"0",aktif:""},defaultItem:{kode:"",nama:0,merk:0,kategori:0,partnumber1:0,partnumber2:0,kendaraan:"0",kd_suplier:"0",dimensi:"0",aktif:"tidak"}}},computed:{formTitle:function(){return-1===this.editedIndex?"Tambahkan Barang":"Edit Barang"}},watch:{dialog:function(t){t||this.close()}},mounted:function(){this.getBarang()},methods:{getBarang:function(){var t=this;X.get("/barang").then((function(e){console.log(e.data),t.barang=e.data}),(function(t){console.error(t)}))},TambahkanBarang:function(){var t=this;X.post("/barang",{kode:this.editedItem.kode,nama:this.editedItem.nama,merk:this.editedItem.merk,kategori:this.editedItem.kategori,partnumber1:this.editedItem.partnumber1,partnumber2:this.editedItem.partnumber2,kendaraan:this.editedItem.kendaraan,kd_suplier:this.editedItem.kd_suplier,dimensi:this.editedItem.dimensi,aktif:this.editedItem.aktif}).then((function(e){t.kode="",t.nama="",t.merk="",t.kategori="",t.partnumber1="",t.partnumber2="",t.kendaraan="",t.kd_suplier="",t.dimensi="",t.aktif="",console.log(e)})).catch((function(t){console.log(t)}))},HapusBarang:function(t,e){var a=this;X.delete("/barang/"+t.id).then((function(t){a.barang.splice(e,1),console.log(t)})).catch((function(t){console.log(t)}))},editItem:function(t){this.editedIndex=this.barang.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){var e=this.barang.indexOf(t),a=confirm("Anda Yakin Menghapus Barang ini?");a&&this.HapusBarang(t,e)},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},save:function(){this.editedIndex>-1?Object.assign(this.barang[this.editedIndex],this.editedItem):(this.barang.push(this.editedItem),this.TambahkanBarang(this.editedItem)),this.close()}}},tt=Z,et=a("b0af"),at=a("99d9"),it=a("62ad"),nt=a("8fea"),rt=a("169a"),lt=a("0fd9"),ot=a("b73d"),st=a("8654"),dt=a("71d9"),ct=a("2a7f"),ut=Object(c["a"])(tt,q,z,!1,null,null,null),mt=ut.exports;m()(ut,{VBtn:p["a"],VCard:et["a"],VCardActions:at["a"],VCardText:at["b"],VCardTitle:at["c"],VCol:it["a"],VContainer:N["a"],VDataTable:nt["a"],VDialog:rt["a"],VDivider:y["a"],VIcon:f["a"],VRow:lt["a"],VSpacer:b["a"],VSwitch:ot["a"],VTextField:st["a"],VToolbar:dt["a"],VToolbarTitle:ct["a"]}),i["a"].use(Y["a"]);var vt=new Y["a"]({routes:[{path:"/Barang",name:"Barang",component:mt}],mode:"history"});i["a"].config.productionTip=!1,new i["a"]({router:vt,vuetify:F,render:function(t){return t(R)}}).$mount("#app")}});
//# sourceMappingURL=app.230140c8.js.map