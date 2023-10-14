"use strict";(self.webpackChunkproject_money_guard=self.webpackChunkproject_money_guard||[]).push([[373],{1373:function(n,t,e){e.r(t),e.d(t,{default:function(){return En}});var r,i,o,a,c,s,d,l,h,u,x,p,m,g,f,b,j,y,w,v,Z,k,S,P,C,z,D,F=e(9439),M=e(2791),T=e(168),E=e(6487),I=e(5705),N=e(9513),L=e.n(N),O=E.zo.div(r||(r=(0,T.Z)(["\n  padding: 20px 0;\n"]))),_=(0,E.zo)(I.l0)(i||(i=(0,T.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 280px;\n"]))),A=(0,E.zo)(I.gN)(o||(o=(0,T.Z)(["\n  width: 280px;\n  height: 75px;\n  color: rgba(255, 255, 255, 0.6);\n  background: transparent;\n  border: none;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.4);\n  padding: 0 20px;\n"]))),B=E.zo.select(a||(a=(0,T.Z)(["\n  width: 280px;\n  height: 75px;\n  color: rgba(255, 255, 255, 0.6);\n  background: transparent;\n  padding: 0 20px;\n  border: none;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.4);\n"]))),H=E.zo.h2(c||(c=(0,T.Z)(["\n  text-align: center;\n  font-size: 24px;\n  margin-bottom: 34px;\n"]))),W=(0,E.zo)(L())(s||(s=(0,T.Z)(["\n  width: 280px;\n  height: 75px;\n  padding: 0 20px;\n  color: ",";\n  background: transparent;\n  padding: 0 20px;\n  border: none;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.4);\n"])),(function(n){return n.theme.colors.mainWhite})),$=E.zo.div(d||(d=(0,T.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),q=E.zo.button(l||(l=(0,T.Z)(["\n  width: 280px;\n  height: 50px;\n  padding: 13px 100px;\n  border-radius: 20px;\n  font-size: 18px;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: ",";\n  background: ",";\n  margin-top: 40px;\n"])),(function(n){return n.theme.colors.mainWhite}),(function(n){return n.theme.backgrounds.btnGradient})),U=E.zo.button(h||(h=(0,T.Z)(["\n  width: 280px;\n  height: 50px;\n  padding: 13px 100px;\n  border-radius: 20px;\n  font-size: 18px;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #623f8b;\n  background-color: ",";\n  text-align: center;\n"])),(function(n){return n.theme.colors.mainWhite})),G=e(9434),Y=e(6378),J=e(8007),K=(e(8639),e(7609)),Q=e(184),R=["Main expenses","Products","Car","Self Care","Child Care","Household Products","Education","Leisure","Other expenses","Entertainment"],V=(0,J.Ry)({amount:(0,J.Z_)().required().min(2,"Too Short!").max(50,"Too Long!"),comment:(0,J.Z_)().min(2,"Too Short!").max(50,"Too Long!"),category:(0,J.Z_)().oneOf(R).required()}),X=function(){var n=(0,G.I0)(),t=(0,M.useState)(),e=(0,F.Z)(t,2),r=e[0],i=e[1];return(0,Q.jsx)("div",{children:(0,Q.jsxs)(O,{children:[(0,Q.jsx)(H,{children:"Add transaction"}),(0,Q.jsx)(I.J9,{initialValues:{type:"Expense",category:"",amount:"",date:(new Date).toLocaleDateString("uk-UA"),comment:""},validationSchema:V,onSubmit:function(t){console.log("submit",t),n((0,Y.Oj)(t))},children:function(n){var t=n.errors,e=n.touched,o=n.values,a=n.handleChange;return(0,Q.jsxs)(_,{autoComplete:"off",children:[(0,Q.jsxs)(B,{name:"type",value:o.type,onChange:a,children:[(0,Q.jsx)("option",{children:"Income"}),(0,Q.jsx)("option",{children:"Expense"})]}),(0,Q.jsxs)(B,{name:"category",value:o.category,onChange:a,children:[(0,Q.jsx)("option",{disabled:!0,value:"",children:"Select a category"}),R.map((function(n){return(0,Q.jsx)("option",{children:n},n)}))]}),(0,Q.jsx)(A,{name:"amount",placeholder:"0.00"}),(0,Q.jsx)(W,{name:"date",value:o.date,onChange:function(n){a({target:{name:"date",value:n.toLocaleDateString("uk-UA")}}),i(n)},dateFormat:"dd.MM.yyyy",showIcon:!0,selected:r,maxDate:new Date,style:{float:"right"},icon:(0,Q.jsx)("svg",{width:"24",height:"24",children:(0,Q.jsx)("use",{href:"".concat(K.Z,"#calendar")})})}),(0,Q.jsx)(A,{name:"comment",type:"comment",placeholder:"Comment"}),t.comment&&e.comment?(0,Q.jsx)("div",{children:t.comment}):null,(0,Q.jsxs)($,{children:[(0,Q.jsx)(q,{type:"submit",children:"Add"}),(0,Q.jsx)(U,{type:"submit",children:"Cancel"})]})]})}})]})})},nn=function(){return(0,Q.jsx)("div",{children:"ButtonAddTransactions"})},tn=function(){return(0,Q.jsx)("div",{children:"EditTransactionForm"})},en=function(){return(0,Q.jsx)("div",{children:"ModalAddTransaction"})},rn=function(){return(0,Q.jsx)("div",{children:"ModalEditTransaction"})},on=e(5518),an=E.ZP.div(u||(u=(0,T.Z)(["\n  margin: 0 auto;\n"]))),cn=E.ZP.ul(x||(x=(0,T.Z)(["\n  max-height: 50vh;\n  overflow-y: scroll;\n  &::-webkit-scrollbar-thumb {\n    background-color: rgba(82, 59, 126, 0.3);\n  }\n  &::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  }\n  &::-webkit-scrollbar {\n    width: 0.5em;\n  }\n  @media only screen and (min-width: 320px) and (max-width: 767px) {\n    display: block;\n    list-style: none;\n  }\n  @media screen and (min-width: 768px) {\n    display: none;\n  }\n"]))),sn=E.ZP.div(p||(p=(0,T.Z)(["\n  display: none;\n  margin: 0 auto;\n\n  @media screen and (min-width: 768px) {\n    display: flex;\n    flex-direction: column;\n  }\n"]))),dn=E.ZP.table(m||(m=(0,T.Z)(["\n  border-collapse: collapse;\n  width: 100%;\n"]))),ln=E.ZP.tr(g||(g=(0,T.Z)(["\n  display: flex;\n  align-items: center;\n\n  padding: 16px 20px;\n  border-radius: 8px;\n  background: ",";\n  box-shadow: ",";\n  backdrop-filter: ",";\n\n  & :nth-child(3) {\n    margin-left: -15px;\n  }\n  & :nth-child(4) {\n    margin-left: -30px;\n  }\n  & :nth-child(5) {\n    margin-left: 18px;\n  }\n  & :nth-child(:not(:last-child)) {\n    margin-right: 0;\n  }\n  @media only screen and (min-width: 768px) {\n    gap: 60px;\n  }\n"])),(function(n){return n.theme.backgrounds.tableHead}),(function(n){return n.theme.shadows.default}),(function(n){return n.theme.blur.backdropFilter})),hn=E.ZP.th(f||(f=(0,T.Z)(["\n  text-align: center;\n  font-size: 16px;\n  font-weight: 400;\n\n  color: ",";\n"])),(function(n){return n.theme.colors.mainWhite})),un=E.ZP.tbody(b||(b=(0,T.Z)(["\n  display: block;\n\n  max-height: 50vh;\n  overflow-y: scroll;\n  &::-webkit-scrollbar-thumb {\n    background-color: rgba(82, 59, 126, 0.3);\n  }\n  &::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  }\n  &::-webkit-scrollbar {\n    width: 0.5em;\n  }\n"]))),xn=E.ZP.tr(j||(j=(0,T.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 20px;\n  border-bottom: ",";\n\n  gap: 50px;\n"])),(function(n){return n.theme.border.borderBottom})),pn=E.ZP.td(y||(y=(0,T.Z)(["\n  min-width: 50px;\n  text-align: center;\n  font-family: Poppins;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  color: ",";\n"])),(function(n){return n.$color})),mn=(0,E.ZP)(pn)(w||(w=(0,T.Z)(["\n  text-align: start;\n  flex-shrink: 1;\n  flex-basis: 100px;\n"]))),gn=E.ZP.div(v||(v=(0,T.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),fn=E.ZP.li(Z||(Z=(0,T.Z)(["\n  margin: 0 auto;\n  min-width: 280px;\n  max-width: 360px;\n  margin-bottom: 8px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.1);\n  border-left: 5px solid ",";\n  @media only screen and (min-width: 320px) and (max-width: 767px) {\n    display: block;\n    list-style: none;\n  }\n  @media screen and (min-width: 768px) {\n    display: none;\n  }\n"])),(function(n){return n.$color})),bn=E.ZP.div(k||(k=(0,T.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 20px;\n  border-bottom: ",";\n"])),(function(n){return n.theme.border.borderBottom})),jn=E.ZP.p(S||(S=(0,T.Z)(["\n  text-align: right;\n  font-family: Poppins;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  color: ",";\n"])),(function(n){return n.theme.colors.mainWhite})),yn=E.ZP.span(P||(P=(0,T.Z)(["\n  max-width: 120px;\n"]))),wn=E.ZP.div(C||(C=(0,T.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 20px;\n"]))),vn=E.ZP.button(z||(z=(0,T.Z)(["\n  text-align: center;\n  font-family: Poppins;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  padding: 4px 12px;\n\n  border-radius: 18px;\n  background: ",";\n  box-shadow: ",";\n"])),(function(n){return n.theme.backgrounds.btnGradient}),(function(n){return n.theme.shadows.deleteBtnShadow})),Zn=E.ZP.button(D||(D=(0,T.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 12px;\n\n  background-color: transparent;\n\n  color: var(--white-60, rgba(255, 255, 255, 0.6));\n  text-align: center;\n  font-family: Poppins;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  letter-spacing: 0.32px;\n"]))),kn=e(8418);function Sn(n){var t=new Date(n),e=t.getDate().toString().padStart(2,"0"),r=(t.getMonth()+1).toString().padStart(2,"0"),i=t.getFullYear().toString().slice(-2);return"".concat(e,".").concat(r,".").concat(i)}var Pn=function(n){var t=n.transaction,e=(0,G.v9)(kn.us),r=e.find((function(n){return n.id===t.categoryId})),i=(0,G.I0)();return(0,Q.jsx)(Q.Fragment,{children:(0,Q.jsxs)(fn,{$color:"INCOME"===t.type?"#ff868d":"#FFB627",children:[(0,Q.jsxs)(bn,{children:[(0,Q.jsx)(jn,{children:"Date"}),(0,Q.jsx)("span",{children:Sn(t.transactionDate)})]}),(0,Q.jsxs)(bn,{children:[(0,Q.jsx)(jn,{children:"Type"}),(0,Q.jsx)("span",{children:t.type})]}),(0,Q.jsxs)(bn,{children:[(0,Q.jsx)(jn,{children:"Category"}),(0,Q.jsx)("span",{children:e?r.name:"-"})]}),(0,Q.jsxs)(bn,{children:[(0,Q.jsx)(jn,{children:"Comment"}),(0,Q.jsx)(yn,{children:t.comment.length>=25?"".concat(t.comment.slice(0,25),"..."):t.comment})]}),(0,Q.jsxs)(bn,{children:[(0,Q.jsx)(jn,{children:"Sum"}),(0,Q.jsx)("span",{children:t.amount})]}),(0,Q.jsxs)(wn,{children:[(0,Q.jsx)(vn,{onClick:function(){return n=t.id,void i((0,Y.nm)(n));var n},children:"Delete"}),(0,Q.jsxs)(Zn,{children:[(0,Q.jsx)("svg",{width:"14",height:"14",children:(0,Q.jsx)("use",{href:"".concat(K.Z,"#edit")})}),"Edit"]})]})]})})},Cn=e(4217),zn=function(){var n=(0,G.v9)(kn.ig),t=(0,G.v9)(Cn.NH),e=(0,G.v9)(kn.zh);return(0,Q.jsx)(Q.Fragment,{children:(0,Q.jsxs)(cn,{children:[t&&(0,Q.jsx)(on.Z,{}),e&&(0,Q.jsx)("h1",{children:"Something went wrong... \ud83d\ude22"}),n.length>0?n.map((function(n){return(0,Q.jsx)(Pn,{transaction:n},n.id)})):(0,Q.jsx)("h3",{children:"Oh, you don't have transactions yet. Let's create one!"})]})})};function Dn(n){var t=new Date(n),e=t.getDate().toString().padStart(2,"0"),r=(t.getMonth()+1).toString().padStart(2,"0"),i=t.getFullYear().toString().slice(-2);return"".concat(e,".").concat(r,".").concat(i)}var Fn=function(){var n=(0,G.I0)(),t=(0,G.v9)(kn.ig),e=(0,G.v9)(kn.us),r=(0,G.v9)(kn.NH),i=(0,G.v9)(kn.zh);return(0,Q.jsx)(an,{children:(0,Q.jsxs)(sn,{children:[r&&(0,Q.jsx)(on.Z,{}),i&&(0,Q.jsx)("h1",{children:"Something went wrong... \ud83d\ude22"}),(0,Q.jsxs)(dn,{children:[(0,Q.jsx)("thead",{children:(0,Q.jsxs)(ln,{children:[(0,Q.jsx)(hn,{children:"Date"}),(0,Q.jsx)(hn,{children:"Type"}),(0,Q.jsx)(hn,{children:"Category"}),(0,Q.jsx)(hn,{children:"Comment"}),(0,Q.jsx)(hn,{children:"Sum"})]})}),(0,Q.jsx)(un,{children:t.length>0?t.map((function(t){var r;return(0,Q.jsxs)(xn,{children:[(0,Q.jsx)(pn,{children:Dn(t.transactionDate)}),(0,Q.jsx)(pn,{children:"INCOME"===t.type?"+":"-"}),(0,Q.jsx)(pn,{children:(null===(r=e.find((function(n){return n.id===t.categoryId})))||void 0===r?void 0:r.name)||"-"}),(0,Q.jsx)(mn,{children:t.comment}),(0,Q.jsx)(pn,{$color:"INCOME"===t.type?"#FFB627":"#FF868D",children:t.amount}),(0,Q.jsx)("td",{children:(0,Q.jsxs)(gn,{children:[(0,Q.jsx)(Zn,{children:(0,Q.jsx)("svg",{width:"14",height:"14",children:(0,Q.jsx)("use",{href:"".concat(K.Z,"#edit")})})}),(0,Q.jsx)(vn,{onClick:function(){return e=t.id,void n((0,Y.nm)(e));var e},children:"Delete"})]})})]},t.id)})):(0,Q.jsx)("tr",{children:(0,Q.jsx)("td",{colSpan:"6",children:"No transactions found."})})})]})]})})},Mn=e(4805),Tn=e(7451),En=function(){var n=(0,Mn.useMediaQuery)({query:"(min-width:768px)"});return(0,Q.jsxs)(Tn.P,{children:[n?(0,Q.jsx)(Fn,{}):(0,Q.jsx)(zn,{}),(0,Q.jsx)(nn,{}),(0,Q.jsx)(en,{}),(0,Q.jsx)(rn,{}),(0,Q.jsx)(X,{}),(0,Q.jsx)(tn,{})]})}},8418:function(n,t,e){e.d(t,{Cp:function(){return l},Kk:function(){return s},NH:function(){return i},UF:function(){return c},ig:function(){return r},ip:function(){return d},us:function(){return a},zh:function(){return o}});var r=function(n){return n.transactions.transactions.items},i=function(n){return n.transactions.transactions.isLoading},o=function(n){return n.transactions.transactions.error},a=function(n){return n.transactions.transactions.categories},c=function(n){return n.transactions.summary.categoriesSummary},s=function(n){return n.transactions.summary.incomeSummary},d=function(n){return n.transactions.summary.expenseSummary},l=function(n){return n.transactions.summary.periodTotal}}}]);
//# sourceMappingURL=373.b46dfc72.chunk.js.map