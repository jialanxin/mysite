(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{318:function(e,d,n){"use strict";n.r(d);var m={data:function(){return{title:"Git速查表",lastUpdate:"2020-03-16",open:[],items:[{id:1,name:"代码仓库",children:[{id:2,name:"创建仓库",children:[{id:3,name:"1.进入需要创建代码库的文件夹",cmd:"cd 文件路径"},{id:4,name:"2.创建/初始化仓库",cmd:"git init"},{id:5,name:"3.拉取远程仓库到本地",cmd:"git clone"},{id:6,name:"建议使用git clone"}]},{id:7,name:"添加文件到仓库",children:[{id:8,name:"1.添加文件到暂存区",children:[{id:9,name:"添加单个文件",cmd:"git add 文件名"},{id:10,name:"添加所有文件",cmd:"git add ."},{id:11,name:"会忽略.gitinore中的文件 以及 空目录"}]},{id:12,name:"2.提交到本地仓库",children:[{id:13,cmd:"git commit",children:[{id:14,name:"填写commit message"},{id:15,name:"保存"}]},{id:16,name:"不建议使用",cmd:'git commit -m "commit message"'},{id:17,name:"提交要遵循commit message的规范"}]},{id:18,name:"3.查看工作区状态",cmd:"git status"},{id:19,name:"4.对比工作区文件变化",cmd:"git diff"}]},{id:20,name:"仓库配置",children:[{id:21,name:"1.配置全局用户名和邮箱",children:[{id:22,cmd:"git config --global user.name 用户名"},{id:23,cmd:"git config --global user.email 邮箱"}]},{id:24,name:"2.配置当前仓库用户名和邮箱",children:[{id:25,cmd:"git config user.name 用户名"},{id:26,cmd:"git config user.email 邮箱"}]}]}]},{id:27,name:"代码版本/提交切换",children:[{id:28,name:"查看不同版本/提交",children:[{id:29,name:"1.提交详情",cmd:"git log"},{id:30,name:"2.提交简介",cmd:"git log --oneline"}]},{id:31,name:"回退版本/提交",children:[{id:32,name:"1.回退到当前最新提交",cmd:"git reset --hard HEAD"},{id:33,name:"2.回退到上次提交",cmd:"git reset --hard HEAD^"},{id:34,name:"3.回退到上n次提交",cmd:"git reset --hard HRAD~n"},{id:35,name:"4.回退到某次提交",cmd:"git reset --hard commitid"}]},{id:36,name:"重返未来版本",children:[{id:37,name:"1.查看历史提交以及被退回的提交",cmd:"git reflog"},{id:38,name:"2.回到未来版本",cmd:"git commit --hard commitid"}]},{id:39,name:"撤销修改",children:[{id:40,name:"1.工作区内的撤销",cmd:"git checkout 文件名"},{id:41,name:"2.暂存区内的撤销",children:[{id:42,name:"从暂存区回退到工作区",cmd:"git reset HEAD 文件"},{id:43,name:"撤销修改",cmd:"git checkout 文件名"}]},{id:44,name:"提交到了版本库->参见回退版本/提交"}]},{id:45,name:"删除文件",children:[{id:46,name:"从版本库删除文件（等价于rm 文件 && git add 文件）,删除后需要提交",cmd:"git rm 文件名"},{id:47,name:"撤销删除 同 撤销修改"},{id:48,name:"从版本库中删除文件，但本地不删除",cmd:"git rm --cached 文件名"}]},{id:49,name:"重命名文件/文件夹",cmd:"git mv"},{id:50,name:"工作现场暂存 同 分支-工作现场暂存"},{id:51,name:"忽略文件 .gitignore文件"}]},{id:52,name:"分支",children:[{id:53,name:"创建与合并分支",children:[{id:54,name:"1.创建分支",children:[{id:55,name:"仅创建",cmd:"git branch 分支名"},{id:56,name:"创建并切换",cmd:"git checkout -b 分支名"}]},{id:57,name:"2.切换分支",cmd:"git checkout 分支名"},{id:58,name:"3.合并分支",children:[{id:59,name:"合并某分支到当前分支，并禁用fast forward",cmd:"git merge --no-ff 分支名"},{id:60,name:"不建议使用变基",cmd:"git rebase"}]},{id:61,name:"4.删除分支",children:[{id:62,name:"删除本地分支",children:[{id:63,name:"删除未合并分支",cmd:"git branch -D 分支名"},{id:64,name:"删除已合并分支",cmd:"git branch -d 分支名"}]},{id:65,name:"删除远程分支（建议界面操作）",cmd:"git push origin -d 分支名"}]},{id:66,name:"5.查看分支",children:[{id:67,name:"查看当前分支",cmd:"git branch"},{id:68,name:"查看所有分支",cmd:"git branch -a"}]},{id:69,name:"合并分支，解决分支冲突",children:[{id:70,name:"将要合并的分支更新到最新"},{id:71,name:"切换到主分支"},{id:72,name:"合并分支"},{id:73,name:"解决冲突"},{id:74,name:"暂存并提交到版本库"},{id:75,name:"查看分支状态",cmd:"git log --graph --oneline"}]}]},{id:76,name:"工作现场暂存",children:[{id:77,name:"1.暂存工作现场",cmd:"git stash"},{id:78,name:"2.恢复工作现场",children:[{id:79,name:"恢复",cmd:"git stash apply"},{id:80,name:"删除",cmd:"git stash drop"},{id:81,name:"恢复到工作区内并删除储藏区",cmd:"git stash pop"}]}]},{id:82,name:"多人协作",children:[{id:83,name:"1.查看远程库信息（-v 更详细）",cmd:"git remote"},{id:84,name:"2.更新/推送远程库",children:[{id:85,name:"更新远程库信息",cmd:"git fetch"},{id:86,name:"远程库更新到本地（等价于 fetch + merge）",cmd:"git pull"},{id:87,name:"本地分支推送到远程库",cmd:"git push origin 分支名"}]},{id:88,name:"本地分支和远程分支交互",children:[{id:89,name:"使用远程分支A创建本地分支",cmd:"git checkout -b A origin/A"},{id:90,name:"将本地分支与远程分支关联",cmd:"git branch --set-upstream A origin/A"}]}]}]},{id:91,name:"代码版本tag"},{id:92,name:"其他生僻命令"}]}},head:function(){return{title:this.title}}},t=n(55),c=n(77),r=n.n(c),l=n(305),o=n(324),h=n(306),v=n(323),component=Object(t.a)(m,(function(){var e=this,d=e.$createElement,n=e._self._c||d;return n("v-container",[n("v-row",[n("v-col",[n("h1",[e._v(e._s(e.title))])])],1),e._v(" "),n("v-row",[n("v-col",[n("p",{staticClass:"font-weight-light"},[e._v("latest update: "+e._s(e.lastUpdate))])])],1),e._v(" "),n("v-row",[n("v-col",[n("p",[e._v("在其他网站上看到一张Git速查表，不好导出保存，所以重新写一遍。")]),e._v(" "),n("v-treeview",{attrs:{items:e.items,open:e.open},scopedSlots:e._u([{key:"label",fn:function(d){var m=d.item;return[e._v("\n          "+e._s(m.name)+"\n          "),m.cmd?n("kbd",[e._v(e._s(m.cmd))]):e._e()]}}])})],1)],1)],1)}),[],!1,null,null,null);d.default=component.exports;r()(component,{VCol:l.a,VContainer:o.a,VRow:h.a,VTreeview:v.a})}}]);