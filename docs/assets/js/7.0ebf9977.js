(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{402:function(t,s,a){t.exports=a.p+"assets/img/asleep-awake.a233a2ef.svg"},403:function(t,s,a){t.exports=a.p+"assets/img/transitions-events.af54e0b5.svg"},404:function(t,s,a){t.exports=a.p+"assets/img/initial-state.bdbe27a5.svg"},405:function(t,s,a){t.exports=a.p+"assets/img/final-state.63512456.svg"},406:function(t,s,a){t.exports=a.p+"assets/img/compound-state.e9bfccbb.svg"},407:function(t,s,a){t.exports=a.p+"assets/img/parallel-states.f60d5dd7.svg"},408:function(t,s,a){t.exports=a.p+"assets/img/self-transition.c8ffac05.svg"},409:function(t,s,a){t.exports=a.p+"assets/img/basic-login.c40ae416.svg"},410:function(t,s,a){t.exports=a.p+"assets/img/login-compound-state.d6d9b069.svg"},411:function(t,s,a){t.exports=a.p+"assets/img/delayed-transition.352ce5a6.svg"},412:function(t,s,a){t.exports=a.p+"assets/img/entry-action.8f5dc1ec.svg"},557:function(t,s,a){"use strict";a.r(s);var v=a(45),_=Object(v.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"状态机和状态图简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#状态机和状态图简介"}},[t._v("#")]),t._v(" 状态机和状态图简介")]),t._v(" "),v("p",[t._v("状态图（statecharts）是一种图形语言，它用来描述过程中的状态。")]),t._v(" "),v("p",[t._v("你可能也用过类似的图，来设计用户流程图、规划数据库、或者构建 APP 架构。状态图（statecharts）是换种方式，用一堆盒子和箭头，来给人展示什么叫流程。不过，有了 XState，我们就能用代码来管理应用逻辑了。")]),t._v(" "),v("p",[t._v("这篇指南，会用初学者友好的方式，给你讲讲状态图（statecharts） 基础，内容如下：")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#states"}},[t._v("状态 states")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#transitions-and-events"}},[t._v("转换与事件 transitions and events")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#initial-state"}},[t._v("初始状态 initial states")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#final-state"}},[t._v("最终状态 final states")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#compound-states"}},[t._v("复合状态 compound states")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#parallel-states"}},[t._v("并行状态 parallel states")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#self-transition"}},[t._v("自转换 self-transitions")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#planning-statecharts"}},[t._v("计划状态图 planning statecharts")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#delayed-transitions"}},[t._v("延迟状态图 delayed transitions")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#actions"}},[t._v("动作 actions")])])]),t._v(" "),v("h2",{attrs:{id:"状态-states"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#状态-states"}},[t._v("#")]),t._v(" 状态 States")]),t._v(" "),v("p",[t._v("我们用圆角矩形盒子来展示 "),v("em",[t._v("状态")]),t._v("。为狗的过程，绘制状态图，首先会想到两种状态：")]),t._v(" "),v("p",[v("img",{attrs:{src:a(402),alt:""}})]),t._v(" "),v("p",[t._v("狗总是 "),v("strong",[t._v("睡着（asleep）")]),t._v(" 或 "),v("strong",[t._v("醒着（awake）")]),t._v("。狗不能同时睡着和醒着，狗也不可能不睡不醒。只有这两种状态，没其它的了，这就是我们说的有限数量的状态。")]),t._v(" "),v("h2",{attrs:{id:"转换与事件-transitions-and-events"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#转换与事件-transitions-and-events"}},[t._v("#")]),t._v(" 转换与事件 Transitions and events")]),t._v(" "),v("p",[t._v("狗在 "),v("strong",[t._v("睡着")]),t._v(" 和 "),v("strong",[t._v("醒着")]),t._v(" 之间的变化，是通过转换来表示的，它用一个箭头表示，从一个状态指向过程序列中的下一个状态。")]),t._v(" "),v("p",[v("img",{attrs:{src:a(403),alt:""}})]),t._v(" "),v("p",[t._v("转换（transition）是由导致状态更改的 "),v("strong",[t._v("事件（event）")]),t._v(" 引起的。用事件来标记转换。")]),t._v(" "),v("p",[t._v("转换和事件是 "),v("strong",[t._v("确定性")]),t._v(" 的。 确定性意味着每个转换和事件总是指向相同的下一个状态，并且每次进程运行时总是从给定的起始条件产生相同的结果。 你永远不会把狗摇醒后，它还 "),v("strong",[t._v("睡着")]),t._v(" ，或打晕它 它还 "),v("strong",[t._v("醒着")]),t._v(" 吧。")]),t._v(" "),v("p",[t._v("小狗具有两个有限状态，和两个转换的过程，就是一个 "),v("em",[t._v("有限状态机")]),t._v("。 状态机用于描述某事物的行为。 状态机描述事物的状态，以及这些状态之间的转换。 它是一个有限状态机，因为它具有有限数量的状态。（缩写为 FSM）")]),t._v(" "),v("h2",{attrs:{id:"初始状态-initial-state"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#初始状态-initial-state"}},[t._v("#")]),t._v(" 初始状态 Initial state")]),t._v(" "),v("p",[t._v("任何具有状态的事物，都会有一个 "),v("em",[t._v("初始状态")]),t._v("，即进程存在的默认状态，直到发生事件，从而改变事物的状态。")]),t._v(" "),v("p",[t._v("初始状态用实心圆圈表示，箭头从圆圈指向初始状态。")]),t._v(" "),v("p",[v("img",{attrs:{src:a(404),alt:""}})]),t._v(" "),v("p",[t._v("用状态图来描述遛狗的过程，初始状态会是 "),v("strong",[t._v("等待（waiting）")]),t._v(" 走路。")]),t._v(" "),v("h2",{attrs:{id:"最终状态-final-state"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#最终状态-final-state"}},[t._v("#")]),t._v(" 最终状态 Final state")]),t._v(" "),v("p",[t._v("大多数具有状态的进程都会有一个 "),v("em",[t._v("最终状态")]),t._v("，即进程完成时的最后一个状态。 最终状态由状态圆角矩形框上的双边框表示。")]),t._v(" "),v("p",[t._v("在遛狗状态图中，最终状态是 "),v("strong",[t._v("溜狗完成（walk complete）")]),t._v("。")]),t._v(" "),v("p",[v("img",{attrs:{src:a(405),alt:"Dog walking statechart showing waiting state transitioning through the leave home event to the on a walk state, then transitioning through the arrive home event to the final state of walk complete."}})]),t._v(" "),v("h2",{attrs:{id:"复合状态-compound-states"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#复合状态-compound-states"}},[t._v("#")]),t._v(" 复合状态 Compound states")]),t._v(" "),v("p",[t._v("复合状态是可以包含更多状态的状态，也称为子状态。 这些子状态只能在父级复合状态发生时发生。在遛狗（on a walk）状态中，可以有 "),v("strong",[t._v("走路中（walking）")]),t._v("、 "),v("strong",[t._v("奔跑中（running）")]),t._v(" 和 "),v("strong",[t._v("停下来闻闻好闻的气味（stopping to sniff good smells）")]),t._v(" 几个子状态。")]),t._v(" "),v("p",[t._v("复合状态由标记的圆角矩形框表示，该框充当其子状态的容器。")]),t._v(" "),v("p",[v("img",{attrs:{src:a(406),alt:""}})]),t._v(" "),v("p",[t._v("复合状态还应指定哪个子状态是初始状态。 在 "),v("strong",[t._v("on a walk")]),t._v(" 状态下，初始状态为 "),v("strong",[t._v("walking")]),t._v("。")]),t._v(" "),v("p",[t._v("复合状态使状态图能够处理比日常状态机更复杂的情况。")]),t._v(" "),v("h3",{attrs:{id:"原子状态-atomic-states"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#原子状态-atomic-states"}},[t._v("#")]),t._v(" 原子状态 Atomic states")]),t._v(" "),v("p",[t._v("原子状态是没有任何子状态的状态。"),v("strong",[t._v("等待（Waiting）")]),t._v(", "),v("strong",[t._v("遛狗完成（walk complete）")]),t._v(", "),v("strong",[t._v("走路（walking）")]),t._v(", "),v("strong",[t._v("奔跑（running）")]),t._v(" 和 "),v("strong",[t._v("停下来闻闻好闻的（stopping to sniff good smells）")]),t._v(" 都是原子状态。")]),t._v(" "),v("h3",{attrs:{id:"并行状态-parallel-states"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#并行状态-parallel-states"}},[t._v("#")]),t._v(" 并行状态 Parallel states")]),t._v(" "),v("p",[t._v("并行状态是一种复合状态，其中所有子状态（也称为区域）同时处于活动状态。 这些区域在复合状态容器内由虚线分隔。")]),t._v(" "),v("p",[t._v("在 "),v("strong",[t._v("on a walk")]),t._v(" 复合状态内，可能有两个区域。 一个区域包含狗的 "),v("strong",[t._v("walking")]),t._v("、 "),v("strong",[t._v("running")]),t._v(" 和 "),v("strong",[t._v("stopping to sniff good smells")]),t._v(" 的活动子状态，另一个区域包含狗的尾巴 "),v("strong",[t._v("摇动（wagging）")]),t._v(" 和 "),v("strong",[t._v("不摇动（not wagging）")]),t._v(" 状态。 狗可以走路和摇尾巴，跑和摇尾巴，或者在摇尾巴的同时停下来闻，它也可以在不摇尾巴的情况下进行任何这些活动。")]),t._v(" "),v("p",[v("img",{attrs:{src:a(407),alt:""}})]),t._v(" "),v("p",[t._v("两个区域还应该指定哪个子状态是初始状态。 在我们的 "),v("strong",[t._v("tail")]),t._v(" 区域，初始状态是 "),v("strong",[t._v("not wagging")]),t._v("。")]),t._v(" "),v("h3",{attrs:{id:"自转换-self-transition"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#自转换-self-transition"}},[t._v("#")]),t._v(" 自转换 Self-transition")]),t._v(" "),v("p",[t._v("自转换是指事件发生但转换返回到相同状态时。 转换箭头退出并重新进入相同的状态。")]),t._v(" "),v("p",[t._v("描述自我转变的一种有用方法是在过程中“一直做某事，但一直没变化”。")]),t._v(" "),v("p",[t._v("在狗讨好的过程中，会有一个 "),v("strong",[t._v("讨好（begging）")]),t._v(" 状态和一个 "),v("strong",[t._v("获得好处（gets treat）")]),t._v(" 事件。 而对于爱吃的狗来说，无论你经历了多少次得到 "),v("strong",[t._v("gets treat")]),t._v(" 事件，狗都会回到 "),v("strong",[t._v("begging")]),t._v(" 状态。")]),t._v(" "),v("p",[v("img",{attrs:{src:a(408),alt:""}})]),t._v(" "),v("h2",{attrs:{id:"计划状态图-planning-statecharts"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#计划状态图-planning-statecharts"}},[t._v("#")]),t._v(" 计划状态图 Planning statecharts")]),t._v(" "),v("p",[t._v("状态图的好处之一是，在将状态图放在一起的过程中，你可以发觉过程中的所有可能状态。 这种探索将帮助你避免代码中的错误，因为能让你覆盖到所有的事件变化。")]),t._v(" "),v("p",[t._v("而且由于状态图是可执行的，它们既可以作为图表，也可以作为代码，从而减少在图表和编码环境之间引入差异或错误解释的可能性。")]),t._v(" "),v("h3",{attrs:{id:"为登录状态机计划一个状态图-planning-a-statechart-for-a-login-machine"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为登录状态机计划一个状态图-planning-a-statechart-for-a-login-machine"}},[t._v("#")]),t._v(" 为登录状态机计划一个状态图 Planning a statechart for a login machine")]),t._v(" "),v("p",[t._v("要绘制登录状态机的状态图，首先要列出流程中的基本事件。 想想你的登录过程会 "),v("em",[t._v("做")]),t._v(" 什么：")]),t._v(" "),v("ul",[v("li",[t._v("登进 log in")]),t._v(" "),v("li",[t._v("登出 log out")])]),t._v(" "),v("p",[t._v("然后列出由于这些事件而存在的 "),v("em",[t._v("状态")]),t._v("：")]),t._v(" "),v("ul",[v("li",[t._v("已登进 logged in")]),t._v(" "),v("li",[t._v("已登出 logged out")])]),t._v(" "),v("p",[t._v("一旦有了一些事件和状态，状态图就开始了。")]),t._v(" "),v("p",[v("img",{attrs:{src:a(409),alt:"Login statechart showing an initial logged out state transitioning through a log in event to a logged in state, then transitioning through a log out event back to the logged out state."}})]),t._v(" "),v("p",[t._v("不要忘记 "),v("em",[t._v("初始状态")]),t._v("。 在这种情况下，"),v("strong",[t._v("logged out")]),t._v(" 状态是初始状态，因为任何新用户都会进入未登录过程。")]),t._v(" "),v("h2",{attrs:{id:"延迟转换-delayed-transitions"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#延迟转换-delayed-transitions"}},[t._v("#")]),t._v(" 延迟转换 Delayed transitions")]),t._v(" "),v("p",[t._v("作为安全措施，某些登进和登出的过程，会在固定时间后，登出非活动用户。")]),t._v(" "),v("p",[v("strong",[t._v("活动（active）")]),t._v(" 和 "),v("strong",[t._v("空闲（idle）")]),t._v(" 状态仅在用户登进时发生，因此它们成为 "),v("strong",[t._v("登进（logged in）")]),t._v(" 复合状态中的子状态。")]),t._v(" "),v("p",[v("img",{attrs:{src:a(410),alt:""}})]),t._v(" "),v("p",[v("strong",[t._v("logged in")]),t._v(" 复合状态中的初始状态是 "),v("strong",[t._v("active")]),t._v("，因为它是 "),v("strong",[t._v("log in")]),t._v(" 事件的直接结果，登录是用户活动的标志。")]),t._v(" "),v("p",[v("em",[t._v("延迟转换（delayed transition）")]),t._v(" 是一种在处于某种状态，达到指定时间长度后，发生的转换。 延迟的转换被标记为“之后”和一个固定的持续时间，以指示在转换到下一个指示状态之前应该经过多长时间。")]),t._v(" "),v("p",[t._v("在登进状态图中，"),v("strong",[t._v("60000")]),t._v(" 毫秒或 1 分钟的延迟转换跟随 "),v("strong",[t._v("active")]),t._v(" 状态来确定用户是否 "),v("strong",[t._v("idle")]),t._v("。 如果在转换达到一分钟之前有 "),v("strong",[t._v("activity")]),t._v(" 事件，则流程返回 "),v("strong",[t._v("active")]),t._v(" 状态。")]),t._v(" "),v("p",[v("img",{attrs:{src:a(411),alt:""}})]),t._v(" "),v("p",[t._v("如果用户保持 "),v("strong",[t._v("idle")]),t._v(" 状态，则在空闲状态之后会延迟 "),v("strong",[t._v("180000")]),t._v(" 毫秒（或 3 分钟）转换到 "),v("strong",[t._v("自动登出（auto logged out）")]),t._v(" 状态。")]),t._v(" "),v("h2",{attrs:{id:"动作-actions"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#动作-actions"}},[t._v("#")]),t._v(" 动作 Actions")]),t._v(" "),v("p",[t._v("状态图使用，在状态图之外系统触发的 "),v("em",[t._v("actions")]),t._v("。 动作通常也称为 "),v("em",[t._v("作用（effects）")]),t._v(" 或 "),v("em",[t._v("副作用（side-effects）")]),t._v("。 “副作用”听起来像是一个消极或不重要的术语，但引发动作，是使用状态图的主要目的。")]),t._v(" "),v("p",[t._v("动作事件，对后续的其余部分没有影响，事件只是被触发，流程还是原来设置的那样，走下一步。 例如，登录状态图可能会执行更改用户界面的操作。")]),t._v(" "),v("p",[t._v("可以在进入或退出状态或转换时触发 "),v("em",[t._v("动作")]),t._v("。状态的操作包含在状态容器内，带有“entry /” 或 “exit /”标签，具体取决于动作是在进入还是退出状态时触发。")]),t._v(" "),v("p",[t._v("在登录状态图中，"),v("strong",[t._v("idle")]),t._v(" 状态有一个进入动作来警告用户他们可能会被登出。")]),t._v(" "),v("p",[v("img",{attrs:{src:a(412),alt:""}})])])}),[],!1,null,null,null);s.default=_.exports}}]);