(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{264:function(e,t,n){var content=n(265);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("7132a15d",content,!0,{sourceMap:!1})},265:function(e,t,n){(e.exports=n(11)(!1)).push([e.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;-webkit-box-flex:1;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;-webkit-transition:inherit;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:-webkit-inline-box;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""])},274:function(e,t,n){"use strict";n(10),n(8),n(5),n(4),n(9);var r=n(2),o=(n(264),n(23));function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(e){var t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:c({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:c({role:"separator","aria-orientation":t},this.$attrs),on:this.$listeners})}})},300:function(e,t,n){"use strict";n.r(t);var r={data:function(){return{title:"12月读书笔记",lastUpdate:"2019-12-13"}}},o=n(53),v=n(74),c=n.n(v),l=n(296),d=n(305),_=n(274),h=n(297),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",[n("v-col",[n("h1",[e._v(e._s(e.title))])])],1),e._v(" "),n("v-row",[n("v-col",[n("p",{staticClass:"font-weight-light"},[e._v("latest update: "+e._s(e.lastUpdate))])])],1),e._v(" "),n("v-row",[n("v-col",[n("h2",[e._v("\n        强光学激发下，单层MoSe\n        "),n("sub",[e._v("2")]),e._v("的三激子非线性动力学\n      ")]),e._v(" "),n("h3",[e._v("\n        Nonlinear dynamics of trions under strong optical excitation in monolayer MoSe\n        "),n("sub",[e._v("2")])]),e._v(" "),n("p",{staticClass:"font-weight-light"},[e._v("Ye 2018")]),e._v(" "),n("p",[e._v("A-excition 1.653eV Trion 1.622eV")]),e._v(" "),n("p",[e._v("pump 1.690~1.645eV")]),e._v(" "),n("p",[e._v("\n        Triexponential fit: A\n        "),n("sub",[e._v("1")]),e._v(" + ,A\n        "),n("sub",[e._v("2")]),e._v(" + ,A\n        "),n("sub",[e._v("3")]),e._v(" - ,τ\n        "),n("sub",[e._v("1")]),e._v(" 2.0ps ,τ\n        "),n("sub",[e._v("2")]),e._v(" 450ps ,τ\n        "),n("sub",[e._v("3")]),e._v(" 10ps\n      ")]),e._v(" "),n("p",[e._v("\n        τ\n        "),n("sub",[e._v("1")]),e._v(",τ\n        "),n("sub",[e._v("2")]),e._v("各pump下不变，随pump energy↑，A\n        "),n("sub",[e._v("1")]),e._v("+A\n        "),n("sub",[e._v("2")]),e._v("↑，A\n        "),n("sub",[e._v("3")]),e._v("↑\n      ")]),e._v(" "),n("p",[e._v("pump 1.69eV probe 1.65eV")]),e._v(" "),n("p",[e._v("\n        Biexponential: τ\n        "),n("sub",[e._v("1")]),e._v(", 6.2ps, radiative recombination/phonon scattering; τ\n        "),n("sub",[e._v("2")]),e._v(", 67ps, nonrediative recombination/defect\n      ")]),e._v(" "),n("p",[e._v("pump 1.69eV probe 1.62eV")]),e._v(" "),n("p",[e._v("\n        Biexponential: τ\n        "),n("sub",[e._v("1")]),e._v(", 2.2ps, trion formation time; τ\n        "),n("sub",[e._v("2")]),e._v(", 450ps, population loss of trion\n      ")]),e._v(" "),n("p",[e._v("pump 1.69eV, at T = 0.5ps, peaks at 1.65/1.62")]),e._v(" "),n("p",[e._v("pump 1.65eV, at T = 0.5ps, peaks at 1.65, negative at 1.62, redshift and boardening of peak,bandgap renormailzation")]),e._v(" "),n("p",[e._v("Near timezero, signal reversal: combined contribution from the coherent exciton-trion coupling and the blue-detuned optical Stark effect, as well as from the incoherent population decay from excitons and trions")]),e._v(" "),n("v-divider"),e._v(" "),n("h2",{staticClass:"mt-4"},[e._v("氧化石墨烯及其还原衍生物的绝缘体-半导体-半金属转变的超快光谱学研究")]),e._v(" "),n("h3",[e._v("Ultrafast Spectroscopic Study of Insulator−Semiconductor−Semimetal Transitions in Graphene Oxide and Its Reduced Derivatives")]),e._v(" "),n("p",{staticClass:"font-weight-light"},[e._v("Wang 2019")]),e._v(" "),n("p",[e._v("部分还原氧化石墨烯（rGO）随着氧组分的降低会经历绝缘体-半导体-半金属的转变，原因是sp2电子云重新占据主要分布。")]),e._v(" "),n("p",[e._v("pump 400nm/500nm/600nm probe 400-850nm")]),e._v(" "),n("p",[e._v("T-DA positive: 由氧官能团引起 negative：band-filling effect")]),e._v(" "),n("p",[e._v("从绝缘体到半导体到半金属，激发这一点T-DA为负，DOS越连贯，激发点的红方向negative区域越长")]),e._v(" "),n("p",[e._v("半导体类型中，还会有负峰出现在激发区域外，此处的电子累积在带边")]),e._v(" "),n("p",[e._v("从绝缘体到半导体到半金属，弛豫时间也变短了")]),e._v(" "),n("v-divider"),e._v(" "),n("h2",{staticClass:"mt-4"},[e._v("从子带间跃迁确定剥离的少层石墨烯的载流子寿命")]),e._v(" "),n("h3",[e._v("Carrier Lifetime in Exfoliated Few-Layer Graphene Determined from Intersubband Optical Transitions")]),e._v(" "),n("p",{staticClass:"font-weight-light"},[e._v("Limmer 2013")]),e._v(" "),n("p",[e._v("在半导体中可以观察PL时间或者probe设置在bandgap位置来观察载流子寿命，半金属中不允许")]),e._v(" "),n("p",[e._v("pump 1.55eV probe 0.35-0.8eV")]),e._v(" "),n("p",[e._v("1层，T-DA全为负，2345层存在正的区域。正的区域由子带间跃迁导致。")]),e._v(" "),n("p",[e._v("The depopulation of states at a specific k is determined by several physical processes such as intraband relaxation by optical and acoustic phonons, Coulomb scattering, and eventually interband recombination ")]),e._v(" "),n("p",[e._v("Thus, it is difficult to extract reliable information on the carrier lifetime from the bleaching, since a number of processes are contributing to the recorded decay which has a signal vanishing without necessarily having the graphene carrier distribution equilibrated at room temperature. Often a typical biexponential curve is observed, which is ascribed to optical and acoustic phonon scattering ")]),e._v(" "),n("p",[e._v("the decay of the intersubband photoinduced absorptions is only sensitive to the presence of a hot carrier distribution which differs from the one at room temperature. ")]),e._v(" "),n("v-divider"),e._v(" "),n("h2",{staticClass:"mt-4"},[e._v("CVD生长的石墨烯中的超快电子-光学声子散射和赝粒子寿命")]),e._v(" "),n("h3",[e._v("Ultrafast Electron-Optical Phonon Scattering and Quasiparticle Lifetime in CVD-Grown Graphene")]),e._v(" "),n("p",{staticClass:"font-weight-light"},[e._v("Shang 2011")]),e._v(" "),n("p",[e._v("pump 350nm probe 400~650nm")]),e._v(" "),n("v-divider")],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VCol:l.a,VContainer:d.a,VDivider:_.a,VRow:h.a})}}]);