"use strict";(self.webpackChunkproject_money_guard=self.webpackChunkproject_money_guard||[]).push([[399],{6454:function(n,e,i){i(2791);e.Z=i.p+"static/media/logo_money_guard.fce5decc9b22ef0ca025e9630273e85c.svg"},7609:function(n,e,i){i(2791);e.Z=i.p+"static/media/sprite.d34226730588e01b4b6a1ba69b82af33.svg"},1572:function(n,e,i){i.d(e,{Z:function(){return F}});var t,o,r,s,d,l,a,p,c,x,h=i(4165),f=i(5861),u=i(9439),g=i(1243),w=i(2791),m=i(168),j=i(6487),C=j.ZP.div(t||(t=(0,m.Z)(["\n  position: relative;\n  background-color: rgba(74, 86, 226, 0.1);\n  width: 320px;\n  height: 214px;\n  margin: 0 auto;\n  @media only screen and (min-width: 768px) {\n    min-width: 336px;\n    height: 214px;\n    margin: 0;\n  }\n  @media only screen and (min-width: 1280px) {\n    min-width: 480px;\n    max-height: 395px;\n  }\n"]))),y=j.ZP.div(o||(o=(0,m.Z)(["\n  position: relative;\n  width: 100%;\n  /* height: 100%; */\n  /* background-color: rgba(74, 86, 226, 0.1); */\n\n  top: -6px;\n  &::before {\n    content: '';\n    display: inline-block;\n    position: absolute;\n    width: 6px;\n    height: 6px;\n    border-radius: 50%;\n    background-color: #563eaf;\n    border: solid 1px #ff868d;\n    left: 39px;\n    top: 21px;\n    z-index: 1000;\n    /* &::before {\n      content: '","';\n      display: inline-block;\n      position: absolute;\n      width: 6px;\n      height: 6px;\n      border-radius: 50%;\n      background-color: #563eaf;\n      border: solid 1px #ff868d;\n      left: 39px;\n      top: 21px;\n      z-index: 1000;\n    } */\n  }\n\n  &::after {\n    content: '';\n    display: inline-block;\n    position: absolute;\n    width: 6px;\n    height: 6px;\n    border-radius: 50%;\n    background-color: #563eaf;\n    border: solid 1px #ff868d;\n    left: 242px;\n    top: -2px;\n    z-index: 1000;\n  }\n  @media only screen and (min-width: 768px) {\n    &::before {\n      left: 42px;\n      top: 21px;\n    }\n    &::after {\n      left: 254px;\n      top: -2px;\n    }\n  }\n  @media only screen and (min-width: 1280px) {\n    &::before {\n      left: 58px;\n      top: 29px;\n      width: 9px;\n      height: 9px;\n    }\n    &::after {\n      left: 364px;\n      top: -4px;\n      width: 9px;\n      height: 9px;\n    }\n    top: 26px;\n  }\n"])),(function(n){return n.$usd})),b=j.ZP.table(r||(r=(0,m.Z)(["\n  width: 100%;\n  font-size: 16px;\n  line-height: normal;\n  border-collapse: collapse;\n  padding-left: 20px;\n  @media only screen and (min-width: 1280px) {\n    /* padding-left: 50px; */\n  }\n"]))),v=j.ZP.thead(s||(s=(0,m.Z)(["\n  background: rgba(255, 255, 255, 0.2);\n  font-weight: 600;\n  @media only screen and (min-width: 1280px) {\n    /* padding-left: 50px; */\n  }\n"]))),Z=j.ZP.th(d||(d=(0,m.Z)(["\n  padding-top: 13px;\n  padding-bottom: 13px;\n  width: 33%;\n  padding-left: 20px;\n  @media only screen and (min-width: 1280px) {\n    &:first-child {\n      padding-left: 62px;\n    }\n    &:last-child {\n      padding-right: 111px;\n    }\n  }\n"]))),L=j.ZP.td(l||(l=(0,m.Z)(["\n  padding-top: 8px;\n  padding-bottom: 8px;\n  width: 30%;\n  padding-left: 25px;\n  &:last-child {\n    padding-left: 46px;\n  }\n  @media only screen and (min-width: 1280px) {\n    text-align: center;\n    &:first-child {\n      padding-left: 62px;\n    }\n    &:last-child {\n      padding-right: 131px;\n    }\n  }\n"]))),k=j.ZP.svg(a||(a=(0,m.Z)(["\n  position: absolute;\n  width: 100%;\n"]))),z=j.ZP.svg(p||(p=(0,m.Z)(["\n  width: 100%;\n  position: absolute;\n  top: 6px;\n  @media only screen and (min-width: 1280px) {\n    top: 20px;\n  }\n"]))),_=j.ZP.div(c||(c=(0,m.Z)(["\n  position: absolute;\n  left: 48px;\n  top: 8px;\n  color: var(--dashboard-text, #ff868d);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: normal;\n"]))),M=j.ZP.div(x||(x=(0,m.Z)(["\n  position: absolute;\n  left: 352px;\n  top: -27px;\n  color: var(--dashboard-text, #ff868d);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: normal;\n"]))),P=i(4805),S=i(184),F=function(){var n=(0,w.useState)(null),e=(0,u.Z)(n,2),i=e[0],t=e[1];(0,w.useEffect)((function(){var n=function(){var n=(0,f.Z)((0,h.Z)().mark((function n(){var e,i,o;return(0,h.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,g.Z.get("https://api.monobank.ua/bank/currency");case 3:e=n.sent,i=e.data,o=(new Date).getTime(),localStorage.setItem("MONO",JSON.stringify({data:i,fetchTime:o})),t(i),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.error("Error fetching data:",n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}(),e=localStorage.getItem("MONO");if(e){var i=JSON.parse(e),o=i.data,r=i.fetchTime;(new Date).getTime()-r<3e5?t(o):n()}else n()}),[]);var o=null===i||void 0===i?void 0:i.find((function(n){return 840===n.currencyCodeA})),r=null===i||void 0===i?void 0:i.find((function(n){return 978===n.currencyCodeA})),s=null===o||void 0===o?void 0:o.rateBuy.toFixed(2),d=null===o||void 0===o?void 0:o.rateSell.toFixed(2),l=null===r||void 0===r?void 0:r.rateBuy.toFixed(2),a=null===r||void 0===r?void 0:r.rateSell.toFixed(2),p=(0,P.useMediaQuery)({query:"(max-width: 767px)"}),c=(0,P.useMediaQuery)({query:"(min-width: 768px)"}),x=(0,P.useMediaQuery)({query:"(max-width: 1279px)"}),m=(0,P.useMediaQuery)({query:"(min-width: 1280px)"});return(0,S.jsxs)(C,{children:[(0,S.jsxs)(b,{children:[(0,S.jsx)(v,{children:(0,S.jsxs)("tr",{children:[(0,S.jsx)(Z,{children:"Currency"}),(0,S.jsx)(Z,{children:"Purchase"}),(0,S.jsx)(Z,{children:"Sale"})]})}),(0,S.jsxs)("tbody",{children:[(0,S.jsxs)("tr",{children:[(0,S.jsx)(L,{children:"USD"}),(0,S.jsx)(L,{children:s}),(0,S.jsx)(L,{children:d})]}),(0,S.jsxs)("tr",{children:[(0,S.jsx)(L,{children:"EUR"}),(0,S.jsx)(L,{children:l}),(0,S.jsx)(L,{children:a})]})]})]}),p?(0,S.jsxs)(y,{children:[(0,S.jsx)(k,{xmlns:"http://www.w3.org/2000/svg",width:"320",height:"72",viewBox:"0 0 320 72",fill:"none",children:(0,S.jsx)("path",{d:"M0 48.1232L25.6 30.368C27.8187 28.4332 33.9968 24.5634 40.96 24.5634C47.9232 24.5634 53.4187 27.295 55.296 28.6608L110.08 67.5855C111.616 68.7237 116.326 71 122.88 71C129.434 71 134.144 68.7237 135.68 67.5855L230.4 6.46313C232.789 4.64208 238.08 1 244.736 1C251.392 1 257.365 4.64208 260.096 6.46313L280.576 20.8038C281.941 21.7144 286.208 23.5354 292.352 23.5354C298.496 23.5354 301.818 21.5514 303.104 20.8038C307.586 18.1985 310.805 15.3875 316.416 15.6821C317.137 15.72 318.834 15.8815 320 16.365",stroke:"#FF868D"})}),(0,S.jsxs)(z,{xmlns:"http://www.w3.org/2000/svg",width:"320",height:"88",viewBox:"0 0 320 88",fill:"none",children:[(0,S.jsx)("path",{d:"M25.6 29.4725L0 47.2908V80C0 84.4183 3.58171 88 7.99999 88H312C316.418 88 320 84.4183 320 80V15.4197C318.834 14.9345 317.137 14.7724 316.416 14.7344C310.805 14.4387 307.586 17.2597 303.104 19.8743L303.048 19.9068C301.724 20.6803 298.409 22.6156 292.352 22.6156C286.208 22.6156 281.941 20.7881 280.576 19.8743L260.096 5.48257C257.365 3.65504 251.392 0 244.736 0C238.08 0 232.789 3.65504 230.4 5.48257L135.68 66.8225C134.144 67.9647 129.434 70.2491 122.88 70.2491C116.326 70.2491 111.616 67.9647 110.08 66.8225L55.296 27.7592C53.4187 26.3886 47.9232 23.6473 40.96 23.6473C33.9968 23.6473 27.8187 27.5308 25.6 29.4725Z",fill:"url(#paint0_linear_34_6965)","fill-opacity":"0.6"}),(0,S.jsx)("path",{d:"M25.6 29.4725L0 47.2908V80C0 84.4183 3.58171 88 7.99999 88H312C316.418 88 320 84.4183 320 80V15.4197C318.834 14.9345 317.137 14.7724 316.416 14.7344C310.805 14.4387 307.586 17.2597 303.104 19.8743L303.048 19.9068C301.724 20.6803 298.409 22.6156 292.352 22.6156C286.208 22.6156 281.941 20.7881 280.576 19.8743L260.096 5.48257C257.365 3.65504 251.392 0 244.736 0C238.08 0 232.789 3.65504 230.4 5.48257L135.68 66.8225C134.144 67.9647 129.434 70.2491 122.88 70.2491C116.326 70.2491 111.616 67.9647 110.08 66.8225L55.296 27.7592C53.4187 26.3886 47.9232 23.6473 40.96 23.6473C33.9968 23.6473 27.8187 27.5308 25.6 29.4725Z",fill:"#390096","fill-opacity":"0.2"}),(0,S.jsx)("defs",{children:(0,S.jsxs)("linearGradient",{id:"paint0_linear_34_6965",x1:"160",y1:"12.95",x2:"160",y2:"102.2",gradientUnits:"userSpaceOnUse",children:[(0,S.jsx)("stop",{"stop-color":"white"}),(0,S.jsx)("stop",{offset:"0.374892","stop-color":"white","stop-opacity":"0.536458"}),(0,S.jsx)("stop",{offset:"0.6091","stop-color":"white","stop-opacity":"0.269957"}),(0,S.jsx)("stop",{offset:"0.766012","stop-color":"white","stop-opacity":"0.151176"}),(0,S.jsx)("stop",{offset:"1","stop-color":"white","stop-opacity":"0"})]})})]})]}):"",c&x?(0,S.jsxs)(y,{children:[(0,S.jsx)(k,{xmlns:"http://www.w3.org/2000/svg",width:"338",height:"72",viewBox:"0 0 338 72",fill:"none",children:(0,S.jsx)("path",{d:"M1 48.291L27.88 30.4726C30.2096 28.5309 36.6966 24.6474 44.008 24.6474C51.3194 24.6474 57.0896 27.3886 59.0608 28.7593L116.584 67.8227C118.197 68.9649 123.143 71.2493 130.024 71.2493C136.905 71.2493 141.851 68.9649 143.464 67.8227L242.92 6.48258C245.429 4.65505 250.984 1 257.973 1C264.962 1 271.234 4.65505 274.101 6.48258L295.605 20.8744C297.038 21.7881 301.518 23.6156 307.97 23.6156C314.421 23.6156 317.909 21.6246 319.259 20.8744C323.966 18.2597 327.345 15.4387 333.237 15.7344C333.993 15.7724 335.776 15.9345 337 16.4198",stroke:"#FF868D"})}),(0,S.jsxs)(z,{xmlns:"http://www.w3.org/2000/svg",width:"336",height:"88",viewBox:"0 0 336 88",fill:"none",children:[(0,S.jsx)("path",{d:"M26.88 29.4724L0 47.2907V80C0 84.4183 3.58173 88 8.00001 88H328C332.418 88 336 84.4183 336 80V15.4195C334.776 14.9343 332.993 14.7722 332.237 14.7342C326.345 14.4385 322.966 17.2595 318.259 19.8741L318.201 19.9066C316.81 20.6801 313.33 22.6154 306.97 22.6154C300.518 22.6154 296.038 20.7879 294.605 19.8741L273.101 5.48234C270.234 3.65481 263.962 -0.000244141 256.973 -0.000244141C249.984 -0.000244141 244.429 3.65481 241.92 5.48234L142.464 66.8224C140.851 67.9646 135.905 70.249 129.024 70.249C122.143 70.249 117.197 67.9646 115.584 66.8224L58.0608 27.759C56.0896 26.3884 50.3194 23.6471 43.008 23.6471C35.6966 23.6471 29.2096 27.5306 26.88 29.4724Z",fill:"url(#paint0_linear_32_4883)","fill-opacity":"0.6"}),(0,S.jsx)("path",{d:"M26.88 29.4724L0 47.2907V80C0 84.4183 3.58173 88 8.00001 88H328C332.418 88 336 84.4183 336 80V15.4195C334.776 14.9343 332.993 14.7722 332.237 14.7342C326.345 14.4385 322.966 17.2595 318.259 19.8741L318.201 19.9066C316.81 20.6801 313.33 22.6154 306.97 22.6154C300.518 22.6154 296.038 20.7879 294.605 19.8741L273.101 5.48234C270.234 3.65481 263.962 -0.000244141 256.973 -0.000244141C249.984 -0.000244141 244.429 3.65481 241.92 5.48234L142.464 66.8224C140.851 67.9646 135.905 70.249 129.024 70.249C122.143 70.249 117.197 67.9646 115.584 66.8224L58.0608 27.759C56.0896 26.3884 50.3194 23.6471 43.008 23.6471C35.6966 23.6471 29.2096 27.5306 26.88 29.4724Z",fill:"#390096","fill-opacity":"0.2"}),(0,S.jsx)("defs",{children:(0,S.jsxs)("linearGradient",{id:"paint0_linear_32_4883",x1:"168",y1:"12.9498",x2:"168",y2:"102.2",gradientUnits:"userSpaceOnUse",children:[(0,S.jsx)("stop",{"stop-color":"white"}),(0,S.jsx)("stop",{offset:"0.374892","stop-color":"white","stop-opacity":"0.536458"}),(0,S.jsx)("stop",{offset:"0.6091","stop-color":"white","stop-opacity":"0.269957"}),(0,S.jsx)("stop",{offset:"0.766012","stop-color":"white","stop-opacity":"0.151176"}),(0,S.jsx)("stop",{offset:"1","stop-color":"white","stop-opacity":"0"})]})})]})]}):"",m?(0,S.jsxs)(y,{$usd:s,children:[(0,S.jsx)(_,{children:s}),(0,S.jsx)(M,{children:l}),(0,S.jsx)(k,{xmlns:"http://www.w3.org/2000/svg",width:"480",height:"102",viewBox:"0 0 480 102",fill:"none",children:(0,S.jsx)("path",{d:"M0 68.5585L38.4 43.1037C41.728 40.3298 50.9952 34.7819 61.44 34.7819C71.8848 34.7819 80.128 38.6981 82.944 40.6561L165.12 96.461C167.424 98.0927 174.49 101.356 184.32 101.356C194.15 101.356 201.216 98.0927 203.52 96.461L345.6 8.83226C349.184 6.22151 357.12 1 367.104 1C377.088 1 386.048 6.22151 390.144 8.83226L420.864 29.3919C422.912 30.6973 429.312 33.3081 438.528 33.3081C447.744 33.3081 452.727 30.4637 454.656 29.3919C461.379 25.6567 466.207 21.6267 474.624 22.0492C475.705 22.1035 478.251 22.335 480 23.0282",stroke:"#FF868D"})}),(0,S.jsxs)(z,{xmlns:"http://www.w3.org/2000/svg",width:"480",height:"167",viewBox:"0 0 480 167",fill:"none",children:[(0,S.jsx)("path",{d:"M38.4 42.1037L0 67.5585V167H480V22.0282C478.251 21.335 475.705 21.1035 474.624 21.0492C466.207 20.6267 461.379 24.6567 454.656 28.3919L454.573 28.4384C452.585 29.5434 447.614 32.3081 438.528 32.3081C429.312 32.3081 422.912 29.6973 420.864 28.3919L390.144 7.83226C386.048 5.22151 377.088 0 367.104 0C357.12 0 349.184 5.22151 345.6 7.83226L203.52 95.461C201.216 97.0927 194.15 100.356 184.32 100.356C174.49 100.356 167.424 97.0927 165.12 95.461L82.944 39.6561C80.128 37.6981 71.8848 33.7819 61.44 33.7819C50.9952 33.7819 41.728 39.3298 38.4 42.1037Z",fill:"url(#paint0_linear_15_252)","fill-opacity":"0.6"}),(0,S.jsx)("path",{d:"M38.4 42.1037L0 67.5585V167H480V22.0282C478.251 21.335 475.705 21.1035 474.624 21.0492C466.207 20.6267 461.379 24.6567 454.656 28.3919L454.573 28.4384C452.585 29.5434 447.614 32.3081 438.528 32.3081C429.312 32.3081 422.912 29.6973 420.864 28.3919L390.144 7.83226C386.048 5.22151 377.088 0 367.104 0C357.12 0 349.184 5.22151 345.6 7.83226L203.52 95.461C201.216 97.0927 194.15 100.356 184.32 100.356C174.49 100.356 167.424 97.0927 165.12 95.461L82.944 39.6561C80.128 37.6981 71.8848 33.7819 61.44 33.7819C50.9952 33.7819 41.728 39.3298 38.4 42.1037Z",fill:"#390096","fill-opacity":"0.2"}),(0,S.jsx)("defs",{children:(0,S.jsxs)("linearGradient",{id:"paint0_linear_15_252",x1:"240",y1:"18.5",x2:"240",y2:"146",gradientUnits:"userSpaceOnUse",children:[(0,S.jsx)("stop",{"stop-color":"white"}),(0,S.jsx)("stop",{offset:"0.374892","stop-color":"white","stop-opacity":"0.536458"}),(0,S.jsx)("stop",{offset:"0.6091","stop-color":"white","stop-opacity":"0.269957"}),(0,S.jsx)("stop",{offset:"0.766012","stop-color":"white","stop-opacity":"0.151176"}),(0,S.jsx)("stop",{offset:"1","stop-color":"white","stop-opacity":"0"})]})})]})]}):""]})}},6399:function(n,e,i){i.r(e),i.d(e,{default:function(){return an}});var t,o,r,s,d,l,a,p,c,x,h,f,u=i(2791),g=i(168),w=i(6487),m=w.ZP.div(t||(t=(0,g.Z)(["\n  border-radius: 8px;\n  background: rgba(82, 59, 126, 0.6);\n  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);\n  /* backdrop-filter: blur(50px); */\n  padding: 8px 74px 12px 32px;\n  width: 280px;\n  height: 80px;\n\n  @media only screen and (min-width: 768px) {\n    padding: 8px 122px 12px 40px;\n    width: 330px;\n  }\n"]))),j=w.ZP.h2(o||(o=(0,g.Z)(["\n  font-size: 30px;\n  font-weight: 700;\n"]))),C=w.ZP.h4(r||(r=(0,g.Z)(["\n  color: ",";\n  font-family: 'Poppins';\n  font-size: 12px;\n  font-weight: 400;\n  text-transform: uppercase;\n  margin-bottom: 12px;\n"])),(function(n){return n.theme.colors.subColor})),y=i(9434),b=i(4217),v=i(184),Z=function(){var n=(0,y.v9)(b.QM);return(0,v.jsxs)(m,{children:[(0,v.jsx)(C,{children:"Your Balance"}),(0,v.jsxs)(j,{children:["\u20b4",n.toFixed(2)]})]})},L=i(2530),k=(0,w.zo)(L.P)(s||(s=(0,g.Z)(["\n  width: 100%;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]))),z=w.zo.div(d||(d=(0,g.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 8px;\n"]))),_=w.zo.div(l||(l=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),M=w.zo.img(a||(a=(0,g.Z)(["\n  width: 13px;\n  height: 17px;\n"]))),P=w.zo.span(p||(p=(0,g.Z)(["\n  color: #fbfbfb;\n  font-size: 13px;\n"]))),S=w.zo.p(c||(c=(0,g.Z)(["\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.6);\n"]))),F=w.zo.img(x||(x=(0,g.Z)(["\n  margin-right: 12px;\n  margin-left: 4px;\n"]))),V=w.zo.p(h||(h=(0,g.Z)(["\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.6);\n  margin-left: 8px;\n"]))),O=w.zo.button(f||(f=(0,g.Z)(["\n  padding: 0;\n  background: transparent;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),B=i(6454);var Q=i.p+"static/media/exit.e630083d99c67516c6d0428369e2c7e6.svg";var q,U,H,D,E,T,N=i.p+"static/media/straight_line.af8513ecc3ad6b6637fe1f628e65400e.svg",G=i(4805),$=i(9273),I=function(){var n=(0,y.I0)(),e=(0,G.useMediaQuery)({query:"(min-width: 768px)"}),i=(0,y.v9)(b.dy),t=(null===i||void 0===i?void 0:i.email)||"name.surname",o=t.indexOf("@"),r=t.slice(0,o);return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("header",{children:(0,v.jsxs)(k,{children:[(0,v.jsxs)(_,{children:[(0,v.jsx)(M,{src:B.Z,alt:"logo"}),(0,v.jsx)(P,{children:"Money Guard"})]}),(0,v.jsxs)(z,{children:[(0,v.jsx)(S,{children:r}),e&&(0,v.jsx)(F,{src:N,alt:"divider-icon"}),(0,v.jsxs)(O,{onClick:function(){console.log("Logout"),n((0,$.j2)())},children:[(0,v.jsx)("img",{src:Q,alt:"exit"}),e&&(0,v.jsx)(V,{children:"Exit"})]})]})]})})})},A=i(7609),J=i(1087),R=w.zo.ul(q||(q=(0,g.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 32px;\n  align-items: center;\n  justify-content: center;\n\n  @media only screen and (min-width: 768px) {\n    flex-direction: column;\n    align-items: baseline;\n    gap: 12px;\n  }\n"]))),W=(0,w.zo)(J.OL)(U||(U=(0,g.Z)(["\n  /* align-items: center; */\n  width: 38px;\n  height: 38px;\n  &.active {\n    /* color: #4a56e2; */\n    color: ",";\n    border-radius: 3px;\n  }\n  & svg {\n    fill: currentColor;\n  }\n\n  @media only screen and (min-width: 768px) {\n    & svg {\n      width: 24px;\n      height: 24px;\n    }\n  }\n"])),(function(n){return n.theme.backgrounds.activeNavBtn})),Y=w.zo.span(H||(H=(0,g.Z)(["\n  /* color: #fbfbfb; */\n  color: ",";\n  font-size: 18px;\n  margin-left: 20px;\n"])),(function(n){return n.theme.colors.mainWhite})),K=function(){var n=(0,G.useMediaQuery)({query:"(min-width: 768px)"}),e=(0,G.useMediaQuery)({query:"(max-width: 767px)"});return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("nav",{children:(0,v.jsx)(L.P,{children:(0,v.jsxs)(R,{children:[(0,v.jsx)("li",{children:(0,v.jsxs)(W,{to:"/",children:[(0,v.jsx)("svg",{width:"38",height:"38",children:(0,v.jsx)("use",{href:"".concat(A.Z,"#homepage")})}),n&&(0,v.jsx)(Y,{children:"Home"})]})}),(0,v.jsx)("li",{children:(0,v.jsxs)(W,{to:"/statistics",children:[(0,v.jsx)("svg",{width:"38",height:"38",children:(0,v.jsx)("use",{href:"".concat(A.Z,"#statistics")})}),n&&(0,v.jsx)(Y,{children:"Statistics"})]})}),e?(0,v.jsx)("li",{children:(0,v.jsx)(W,{to:"/currency",children:(0,v.jsx)("svg",{width:"38",height:"38",children:(0,v.jsx)("use",{href:"".concat(A.Z,"#dollar")})})})}):null]})})})})},X=i(7689),nn=i(1572),en=(0,w.ZP)(L.P)(D||(D=(0,g.Z)(["\n  @media only screen and (min-width: 768px) {\n    display: flex;\n    flex-direction: row;\n    /* gap: 32px; */\n    @media only screen and (min-width: 768px) {\n      justify-content: space-between;\n    }\n    @media only screen and (min-width: 1280px) {\n      flex-direction: column;\n    }\n  }\n"]))),tn=w.ZP.div(E||(E=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n  margin-top: 12px;\n  margin-bottom: 32px;\n  @media only screen and (min-width: 768px) {\n    gap: 28px;\n    margin-bottom: 20px;\n    margin-top: 0;\n  }\n"]))),on=i(5518),rn=i(9439),sn=i(8185),dn=w.ZP.div(T||(T=(0,g.Z)(["\n  opacity: ",";\n  position: fixed;\n  bottom: 21vh;\n  right: 4.5vw;\n  height: 20px;\n  font-size: 3rem;\n  z-index: 100;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.6);\n  transition: all 0.3s;\n  &:hover {\n    color: rgba(255, 255, 255, 0.9);\n  }\n"])),(function(n){return n.$opacity})),ln=function(){var n=(0,u.useState)(!1),e=(0,rn.Z)(n,2),i=e[0],t=e[1],o=(0,u.useState)(0),r=(0,rn.Z)(o,2),s=r[0],d=r[1];return window.addEventListener("scroll",(function(){document.documentElement.scrollTop>200?(t(!0),d(1)):(t(!1),d(0))})),(0,v.jsx)(dn,{$opacity:s,children:(0,v.jsx)(sn.gtS,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{display:i?"inline-block":"none"}})})},an=function(){var n=(0,G.useMediaQuery)({query:"(min-width: 768px)"});return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(I,{}),(0,v.jsxs)(en,{children:[(0,v.jsxs)(tn,{children:[(0,v.jsx)(K,{}),(0,v.jsx)(Z,{})]}),n&&(0,v.jsx)(nn.Z,{})]}),(0,v.jsx)(u.Suspense,{fallback:(0,v.jsx)(on.Z,{}),children:(0,v.jsx)(X.j3,{})}),(0,v.jsx)(ln,{})]})}}}]);
//# sourceMappingURL=399.e3e6b9d2.chunk.js.map