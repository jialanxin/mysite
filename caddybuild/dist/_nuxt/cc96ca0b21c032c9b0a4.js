(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{297:function(t,e,n){"use strict";n.r(e);var l={name:"OpticalUnitConvert",data:function(){return{energy:"",wavelenth:"",c:299792458,h:662607004e-42,e:1602176634e-28}},methods:{nm2eV:function(){this.energy=(this.c*this.h*1e9/this.e/this.wavelenth).toFixed(2)},eV2nm:function(){this.wavelenth=(this.c*this.h*1e9/this.e/this.energy).toFixed(2)}}},r=n(53),o=n(74),c=n.n(o),v=n(154),h=n(265),d=n(266),m=n(294),w=n(300),V=n(295),f=n(298),x=n(27),y=n(124),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"elevation-12"},[n("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[n("v-toolbar-title",[t._v("Optical Unit Convert")])],1),t._v(" "),n("v-card-text",[n("v-container",[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",[n("v-text-field",{attrs:{label:"Energy(eV)"},model:{value:t.energy,callback:function(e){t.energy=e},expression:"energy"}})],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{attrs:{color:"primary",small:""},on:{click:t.eV2nm}},[t._v("convert")])],1)],1),t._v(" "),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",[n("v-text-field",{attrs:{label:"Wavelenth(nm)"},model:{value:t.wavelenth,callback:function(e){t.wavelenth=e},expression:"wavelenth"}})],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{attrs:{color:"primary",small:""},on:{click:t.nm2eV}},[t._v("convert")])],1)],1)],1)],1)],1)}),[],!1,null,null,null),C=component.exports;c()(component,{VBtn:v.a,VCard:h.a,VCardText:d.a,VCol:m.a,VContainer:w.a,VRow:V.a,VTextField:f.a,VToolbar:x.a,VToolbarTitle:y.a});var _={components:{OpticalUnitConvert:C}},k=Object(r.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",[e("v-row",[e("v-col",{staticClass:"text-center"},[e("OpticalUnitConvert")],1)],1)],1)}),[],!1,null,null,null);e.default=k.exports;c()(k,{VCol:m.a,VContainer:w.a,VRow:V.a})}}]);