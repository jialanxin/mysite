(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{301:function(v,t,e){"use strict";e.r(t);var _={data:function(){return{title:"安装ArchWSL",lastUpdate:"2020-03-02"}},head:function(){return{title:this.title}}},l=e(55),n=e(77),o=e.n(n),c=e(293),r=e(305),d=e(294),component=Object(l.a)(_,(function(){var v=this,t=v.$createElement,e=v._self._c||t;return e("v-container",[e("v-row",[e("v-col",[e("h1",[v._v(v._s(v.title))])])],1),v._v(" "),e("v-row",[e("v-col",[e("p",{staticClass:"font-weight-light"},[v._v("latest update: "+v._s(v.lastUpdate))])])],1),v._v(" "),e("v-row",[e("v-col",[e("p",[v._v("记录一下安装ArchWSL的步骤，基于Windows 10 20H1 版本的WSL2。")]),v._v(" "),e("ol",[e("li",[v._v("激活Windows的相关设置，这部分略过，可以看微软的文档。")]),v._v(" "),e("li",[v._v("Github上下载yuk7/ArchWSL，完成软件安装。安装包的命名决定了最后实例的命名。")]),v._v(" "),e("li",[v._v("由于后续yay不能用root用户，需要设置好root用户的密码和添加新用户，最后设置默认用户。参见yuk7/ArchWSL的wiki部分。")]),v._v(" "),e("li",[v._v("修改"),e("code",[v._v("/etc/pacman.d/mirrorlist")]),v._v("，随后"),e("kbd",[v._v("sudo pacman-key --init")]),v._v("和"),e("kbd",[v._v("sudo pacman-key --population")]),v._v("激活初始key。")]),v._v(" "),e("li",[e("kbd",[v._v("sudo pacman -Syyu base-devel")]),v._v("刷新软件列表，安装base-devel软件包。")]),v._v(" "),e("li",[v._v("安装yay，"),e("kbd",[v._v("git clone")]),v._v(" ，"),e("kbd",[v._v("cd")]),v._v(" ，最后"),e("kbd",[v._v("makepkg -sic")]),v._v("。 ")]),v._v(" "),e("li",[v._v("yay安装pacvis，可视化依赖关系。")]),v._v(" "),e("li",[v._v("yay安装openssh，生成密钥使用"),e("kbd",[v._v("ssh-keygen")]),v._v("。")])])])],1)],1)}),[],!1,null,null,null);t.default=component.exports;o()(component,{VCol:c.a,VContainer:r.a,VRow:d.a})}}]);