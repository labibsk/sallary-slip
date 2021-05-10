(this.webpackJsonpsalaryslip=this.webpackJsonpsalaryslip||[]).push([[0],{451:function(e,t,a){},452:function(e,t,a){},453:function(e,t,a){},458:function(e,t,a){},459:function(e,t,a){},504:function(e,t){},506:function(e,t){},535:function(e,t){},536:function(e,t){},641:function(e,t){},643:function(e,t){},671:function(e,t){},673:function(e,t){},674:function(e,t){},679:function(e,t){},681:function(e,t){},700:function(e,t){},712:function(e,t){},715:function(e,t){},886:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(32),o=a.n(c),i=(a(451),a(420)),l=(a(452),a(923)),s=a(928),d=a(46),b=a(927),j=a(170),p=(a(453),a(931)),u=a(922),O=a(17),y="DATE",h="COMPANY_PAN",f="EMPLOYEE_ID",m="EMPLOYEE_NAME",x="DATE_OF_JOINING",g="HAS_SEPERATED",v="DATE_OF_SEPERATION",N="BANK_NAME",E="BANK_ACCOUNT_NO",A="MONTHLY_GROSS",w="MONTHLY_BASIC",I="DAYS_MONTH",S="DAYS_PAYABLE",P="PAN",M="BASIC",T="CONVEYANCE_ALLOWANCE",C="INCENTIVE",_="INCOME_TAX",R="ARREARS",D="EMPLOYEE_IDS",k="SAVING",B="SAVING_MESSAGE",L="EMPLOYEE_INFO",F="RESET",z="EMPLOYEE_ID_ERROR",G="EMPLOYEE_NAME_ERROR",W="COMPANY_PAN_ERROR",Y="PAN_ERROR",V="BANK_NAME_ERROR",J="BANK_ACCOUNT_NO_ERROR",H="MONTHLY_BASIC_ERROR",K="MONTHLY_GROSS_ERROR",X="DAYS_MONTH_ERROR",U="DAYS_PAYABLE_ERROR",Z="BASIC_ERROR",Q="CONVEYANCE_ALLOWANCE_ERROR",q="INCENTIVE_ERROR",$="INCOME_TAX_ERROR",ee="ARREARS_ERROR",te=a(419);function ae(e){return{type:f,payload:e}}function ne(e){return{type:z,payload:e}}function re(e){return{type:G,payload:e}}function ce(e){return{type:W,payload:e}}function oe(e){return{type:Y,payload:e}}function ie(e){return{type:V,payload:e}}function le(e){return{type:J,payload:e}}function se(e){return{type:H,payload:e}}function de(e){return{type:K,payload:e}}function be(e){return{type:X,payload:e}}function je(e){return{type:U,payload:e}}function pe(e){return{type:Z,payload:e}}function ue(e){return{type:Q,payload:e}}function Oe(e){return{type:q,payload:e}}function ye(e){return{type:$,payload:e}}function he(e){return{type:ee,payload:e}}var fe=a(5);var me=function(){var e=Object(O.c)((function(e){return e.dateOfJoining})),t=Object(O.c)((function(e){return e.hasSeperated})),a=Object(O.c)((function(e){return e.dateOfSeperation})),n=Object(O.b)();return Object(fe.jsx)("div",{className:"Dates",children:Object(fe.jsxs)(d.a,{utils:j.a,children:[Object(fe.jsx)(b.a,{autoOk:!0,variant:"inline",inputVariant:"outlined",margin:"none",id:"dateOfJoining",label:"Date of Joining",format:"MMM, dd yyyy",value:e,onChange:function(e){return n({type:x,payload:e})},KeyboardButtonProps:{"aria-label":"change date"}}),Object(fe.jsxs)("div",{style:{display:"flex",height:"70px",alignItems:"center"},children:[Object(fe.jsx)(u.a,{control:Object(fe.jsx)(p.a,{checked:t,onChange:function(e){return n((t=e.target.checked,{type:g,payload:t}));var t},name:"Seperated",color:"primary"}),label:"Seperated"}),t&&Object(fe.jsx)(b.a,{style:{flexGrow:"1"},autoOk:!0,variant:"inline",inputVariant:"outlined",margin:"none",id:"dateOfSeperation",label:"Date of Seperation",format:"MMM, dd yyyy",value:a,onChange:function(e){return n({type:v,payload:e})},KeyboardButtonProps:{"aria-label":"change date"}})]})]})})};var xe=function(){var e=Object(O.c)((function(e){return e.bankName})),t=Object(O.c)((function(e){return e.bankAccountNo})),a=Object(O.c)((function(e){return e.employeeName})),n=Object(O.c)((function(e){return e.employeeNameError})),r=Object(O.c)((function(e){return e.bankNameError})),c=Object(O.c)((function(e){return e.bankAccountNoError})),o=Object(O.b)();return Object(fe.jsxs)(l.a,{className:"card",children:[Object(fe.jsx)("p",{className:"title",children:"Employee Info"}),Object(fe.jsx)(s.a,{fullWidth:!1,id:"employeeName",label:"Employee name",variant:"outlined",value:a,error:n,helperText:n?"Please Enter Employee name":"",onChange:function(e){return o((t=e.target.value,{type:m,payload:t}));var t}}),Object(fe.jsx)(me,{}),Object(fe.jsxs)("div",{className:"horizontal",children:[Object(fe.jsx)(s.a,{className:"horizontalItem",fullWidth:!1,id:"bankName",label:"Bank name",variant:"outlined",value:e,error:r,helperText:r?"Please Enter Bank Name":"",onChange:function(e){return o((t=e.target.value,{type:N,payload:t}));var t}}),Object(fe.jsx)(s.a,{className:"horizontalItem",fullWidth:!1,id:"bankAccountNo",label:"Bank A/c No",variant:"outlined",value:t,error:c,helperText:c?"Please Enter Bank A/c No":"",onChange:function(e){return o((t=e.target.value,{type:E,payload:t}));var t}})]})]})},ge=a(13),ve=a(930);var Ne=function(){var e=Object(O.c)((function(e){return e.employeeId})),t=Object(O.c)((function(e){return e.employeeIdError})),a=Object(O.c)((function(e){return e.employeeIds})),n=Object(O.b)();return Object(fe.jsx)(ve.a,{freeSolo:!0,id:"employeeIdAutocomplete",disableClearable:!0,options:a,getOptionLabel:function(e){return e.id},onChange:function(e,t){var a;n(ae(t.id)),n((a=t.data,{type:L,payload:{pan:a.pan,employeeName:a.employeeName,bankName:a.bankName,bankAccountNo:a.bankAccountNo,dateOfJoining:Object(te.a)(a.dateOfJoining,"dd MMM yyyy",new Date),hasSeperated:"N/A"!==a.dateOfSeperation,dateOfSeperation:"N/A"===a.dateOfSeperation?new Date:Object(te.a)(a.dateOfSeperation,"dd MMM yyyy",new Date),monthlyGross:a.monthlyGross,monthlyBasic:a.monthlyBasic,basic:a.basic,conveyanceAllowance:a.conveyanceAllowance,incentive:a.incentive,incomeTax:a.incomeTax,arrears:a.arrears}}))},renderInput:function(a){return Object(fe.jsx)(s.a,Object(ge.a)(Object(ge.a)({},a),{},{label:"Employee Id",margin:"normal",variant:"outlined",value:e,error:t,helperText:t?"Please Enter Employee Id":"",onChange:function(e){return n(ae(e.target.value))},InputProps:Object(ge.a)({},a.InputProps)}))}})};var Ee=function(){var e=Object(O.c)((function(e){return e.date})),t=Object(O.b)();return Object(fe.jsx)(d.a,{utils:j.a,children:Object(fe.jsx)(b.a,{autoOk:!0,views:["month","year"],variant:"inline",inputVariant:"outlined",margin:"none",fullWidth:!0,id:"paySlipFor",label:"Payslip For",value:e,onChange:function(e){return t({type:y,payload:e})}})})};var Ae=function(){var e=Object(O.c)((function(e){return e.companyPan})),t=Object(O.c)((function(e){return e.companyPanError})),a=Object(O.b)();return Object(fe.jsxs)(l.a,{className:"card",children:[Object(fe.jsxs)("div",{className:"horizontal",children:[Object(fe.jsx)(Ee,{className:"horizontalItem"}),Object(fe.jsx)(s.a,{className:"horizontalItem",id:"companyPan",label:"Company PAN",variant:"outlined",fullWidth:!0,value:e,error:t,helperText:t?"Please Enter Company PAN":"",onChange:function(e){return a((t=e.target.value,{type:h,payload:t}));var t}})]}),Object(fe.jsx)(Ne,{className:"employeeId"})]})};var we=function(){var e=Object(O.c)((function(e){return e.daysMonth})),t=Object(O.c)((function(e){return e.daysPayable})),a=Object(O.c)((function(e){return e.monthlyBasic})),n=Object(O.c)((function(e){return e.monthlyGross})),r=Object(O.c)((function(e){return e.pan})),c=Object(O.c)((function(e){return e.daysMonthError})),o=Object(O.c)((function(e){return e.daysPayableError})),i=Object(O.c)((function(e){return e.monthlyBasicError})),d=Object(O.c)((function(e){return e.monthlyGrossError})),b=Object(O.c)((function(e){return e.panError})),j=Object(O.b)();return Object(fe.jsxs)(l.a,{className:"card",children:[Object(fe.jsx)("p",{className:"title",children:"Payment Info"}),Object(fe.jsxs)("div",{className:"horizontal",children:[Object(fe.jsx)(s.a,{className:"horizontalItem",fullWidth:!1,id:"daysMonth",label:"Days Month",variant:"outlined",type:"number",autoComplete:"off",value:e,error:c,helperText:c?"Please Enter Days Month":"",onChange:function(e){return j((t=e.target.value,{type:I,payload:t}));var t}}),Object(fe.jsx)(s.a,{className:"horizontalItem",fullWidth:!1,id:"daysPayable",label:"Days Payable",variant:"outlined",type:"number",autoComplete:"off",value:t,error:o,helperText:o?"Please Enter Days Payable":"",onChange:function(e){return j((t=e.target.value,{type:S,payload:t}));var t}})]}),Object(fe.jsxs)("div",{className:"horizontal",children:[Object(fe.jsx)(s.a,{className:"horizontalItem",fullWidth:!1,id:"monthlyBasic",label:"Monthly Basic",variant:"outlined",type:"number",autoComplete:"off",value:a,error:i,helperText:i?"Please Enter Monthly Basic":"",onChange:function(e){return j((t=e.target.value,{type:w,payload:t}));var t}}),Object(fe.jsx)(s.a,{className:"horizontalItem",fullWidth:!1,id:"monthlyGross",label:"Monthly Gross",variant:"outlined",type:"number",autoComplete:"off",value:n,error:d,helperText:d?"Please Enter Monthly Gross":"",onChange:function(e){return j((t=e.target.value,{type:A,payload:t}));var t}})]}),Object(fe.jsx)(s.a,{id:"pan",label:"PAN",variant:"outlined",value:r,error:b,autoComplete:"off",helperText:b?"Please Enter PAN":"",onChange:function(e){return j((t=e.target.value,{type:P,payload:t}));var t}})]})};var Ie=function(){var e=Object(O.c)((function(e){return e.basic})),t=Object(O.c)((function(e){return e.conveyanceAllowance})),a=Object(O.c)((function(e){return e.incentive})),n=Object(O.c)((function(e){return e.incomeTax})),r=Object(O.c)((function(e){return e.arrears})),c=Object(O.b)();return Object(fe.jsxs)(l.a,{className:"card",children:[Object(fe.jsx)("p",{className:"title",children:"Salary Breakdown"}),Object(fe.jsxs)("div",{className:"horizontal",children:[Object(fe.jsx)(s.a,{className:"horizontalItem",fullWidth:!1,id:"basic",label:"Basic",variant:"outlined",type:"number",autoComplete:"off",value:e,onChange:function(e){return c((t=e.target.value,{type:M,payload:t}));var t}}),Object(fe.jsx)(s.a,{className:"horizontalItem",fullWidth:!1,id:"outlined-basic",label:"Conveyance Allowance",variant:"outlined",type:"number",autoComplete:"off",value:t,onChange:function(e){return c((t=e.target.value,{type:T,payload:t}));var t}})]}),Object(fe.jsx)(s.a,{id:"incentive",label:"Incentive",variant:"outlined",type:"number",autoComplete:"off",value:a,onChange:function(e){return c((t=e.target.value,{type:C,payload:t}));var t}}),Object(fe.jsxs)("div",{className:"horizontal",children:[Object(fe.jsx)(s.a,{className:"horizontalItem",fullWidth:!1,id:"incomeTax",label:"Income Tax (TDS)",variant:"outlined",type:"number",autoComplete:"off",value:n,onChange:function(e){return c((t=e.target.value,{type:_,payload:t}));var t}}),Object(fe.jsx)(s.a,{className:"horizontalItem",fullWidth:!1,id:"arrears",label:"Arrears",variant:"outlined",type:"number",autoComplete:"off",value:r,onChange:function(e){return c((t=e.target.value,{type:R,payload:t}));var t}})]})]})},Se=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"],Pe=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"],Me=["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"];function Te(e){return e>=1e6?Te(Math.floor(e/1e6))+" Million "+Ce(e%1e6):Ce(e)}function Ce(e){return e>=1e3?_e(Math.floor(e/1e3))+" Thousand "+_e(e%1e3):_e(e)}function _e(e){return e>99?Se[Math.floor(e/100)]+" Hundred "+Re(e%100):Re(e)}function Re(e){return e<10?Se[e]:e>=10&&e<20?Me[e-10]:Pe[Math.floor(e/10)]+" "+Se[e%10]}function De(e){return 0===e?"Zero":Te(e)}var ke=function(){var e=Object(O.c)((function(e){return e.basic})),t=Object(O.c)((function(e){return e.conveyanceAllowance})),a=Object(O.c)((function(e){return e.incentive})),n=Object(O.c)((function(e){return e.incomeTax})),r=Object(O.c)((function(e){return e.arrears})),c=((parseFloat(e)||0)+(parseFloat(t)||0)+(parseFloat(a)||0)).toFixed(2),o=((parseFloat(n)||0)+(parseFloat(r)||0)).toFixed(2);return Object(fe.jsxs)(l.a,{className:"card",children:[Object(fe.jsxs)("div",{className:"horizontal",children:[Object(fe.jsxs)("div",{className:"info",children:[Object(fe.jsx)("p",{className:"title",children:"Total Earnings"}),Object(fe.jsx)("p",{className:"value",children:c})]}),Object(fe.jsxs)("div",{className:"info",children:[Object(fe.jsx)("p",{className:"title",children:"Total Deductions"}),Object(fe.jsx)("p",{className:"value",children:o})]})]}),Object(fe.jsxs)("div",{className:"info",children:[Object(fe.jsx)("p",{className:"title",children:"Net Payable"}),Object(fe.jsx)("p",{className:"value",children:c-o}),Object(fe.jsxs)("p",{className:"subValue",children:["Rupees ",De(c-o)," Only"]})]})]})},Be=(a(458),a(924)),Le=a(169),Fe=a.n(Le),ze=a.p+"static/media/digital_wolf_logo.a4b84cc4.png",Ge=(a(459),function(){return Object(fe.jsxs)("div",{className:"companyInfo",children:[Object(fe.jsx)("img",{src:ze,className:"logo",alt:"Logo"}),Object(fe.jsxs)("div",{children:[Object(fe.jsx)("h3",{className:"name",children:"EDigital Wolf"}),Object(fe.jsxs)("p",{className:"address",children:["Shri Siddhi  Above SBI Bank, Sasane Nagar ",Object(fe.jsx)("br",{}),"Hadapsar, Pune, Maharashtra 411028"]})]})]})});var We=function(e){var t=e.visible,a=e.isMobile,n=e.classes,r=e.onSaveClick;return Object(fe.jsxs)("div",{className:"NavBar "+(t?"NavBar__normal":"NavBar__hidden"),children:[Object(fe.jsx)(Ge,{}),!a&&Object(fe.jsxs)(Be.a,{onClick:r,color:"primary",variant:"extended",children:[Object(fe.jsx)(Fe.a,{className:n.extendedIcon}),"  Download Payslip"]})]})},Ye=a(917),Ve=a(926),Je=a(422);var He,Ke=new Date,Xe={date:Ke,companyPan:"AAIFE5015H",employeeId:"",employeeName:"",dateOfJoining:Ke,hasSeperated:!1,dateOfSeperation:Ke,bankName:"",bankAccountNo:"",monthlyGross:"",monthlyBasic:"",daysMonth:(He=Ke,new Date(He.getFullYear(),He.getMonth()+1,0).getDate()).toString(),daysPayable:"",pan:"",basic:"",conveyanceAllowance:"",incentive:"",incomeTax:"",arrears:"",employeeIds:[],saving:!1,savingMessage:"Saving.."};var Ue=Object(Je.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0;switch(console.log("Reducer called : ",t),t.type){case y:return Object(ge.a)(Object(ge.a)({},e),{},{date:t.payload});case h:return Object(ge.a)(Object(ge.a)({},e),{},{companyPan:t.payload});case f:return Object(ge.a)(Object(ge.a)({},e),{},{employeeId:t.payload});case m:return Object(ge.a)(Object(ge.a)({},e),{},{employeeName:t.payload});case x:return Object(ge.a)(Object(ge.a)({},e),{},{dateOfJoining:t.payload});case g:return Object(ge.a)(Object(ge.a)({},e),{},{hasSeperated:t.payload});case v:return Object(ge.a)(Object(ge.a)({},e),{},{dateOfSeperation:t.payload});case N:return Object(ge.a)(Object(ge.a)({},e),{},{bankName:t.payload});case E:return Object(ge.a)(Object(ge.a)({},e),{},{bankAccountNo:t.payload});case A:return Object(ge.a)(Object(ge.a)({},e),{},{monthlyGross:t.payload});case w:return Object(ge.a)(Object(ge.a)({},e),{},{monthlyBasic:t.payload});case I:return Object(ge.a)(Object(ge.a)({},e),{},{daysMonth:t.payload});case S:return Object(ge.a)(Object(ge.a)({},e),{},{daysPayable:t.payload});case P:return Object(ge.a)(Object(ge.a)({},e),{},{pan:t.payload});case M:return Object(ge.a)(Object(ge.a)({},e),{},{basic:t.payload});case T:return Object(ge.a)(Object(ge.a)({},e),{},{conveyanceAllowance:t.payload});case C:return Object(ge.a)(Object(ge.a)({},e),{},{incentive:t.payload});case _:return Object(ge.a)(Object(ge.a)({},e),{},{incomeTax:t.payload});case R:return Object(ge.a)(Object(ge.a)({},e),{},{arrears:t.payload});case D:return Object(ge.a)(Object(ge.a)({},e),{},{employeeIds:t.payload});case k:return Object(ge.a)(Object(ge.a)({},e),{},{saving:t.payload});case B:return Object(ge.a)(Object(ge.a)({},e),{},{savingMessage:t.payload});case z:return Object(ge.a)(Object(ge.a)({},e),{},{employeeIdError:t.payload});case G:return Object(ge.a)(Object(ge.a)({},e),{},{employeeNameError:t.payload});case W:return Object(ge.a)(Object(ge.a)({},e),{},{companyPanError:t.payload});case Y:return Object(ge.a)(Object(ge.a)({},e),{},{panError:t.payload});case V:return Object(ge.a)(Object(ge.a)({},e),{},{bankNameError:t.payload});case J:return Object(ge.a)(Object(ge.a)({},e),{},{bankAccountNoError:t.payload});case H:return Object(ge.a)(Object(ge.a)({},e),{},{monthlyBasicError:t.payload});case K:return Object(ge.a)(Object(ge.a)({},e),{},{monthlyGrossError:t.payload});case X:return Object(ge.a)(Object(ge.a)({},e),{},{daysMonthError:t.payload});case U:return Object(ge.a)(Object(ge.a)({},e),{},{daysPayableError:t.payload});case Z:return Object(ge.a)(Object(ge.a)({},e),{},{basicError:t.payload});case Q:return Object(ge.a)(Object(ge.a)({},e),{},{conveyanceAllowanceError:t.payload});case q:return Object(ge.a)(Object(ge.a)({},e),{},{incentiveError:t.payload});case $:return Object(ge.a)(Object(ge.a)({},e),{},{incomeTaxError:t.payload});case ee:return Object(ge.a)(Object(ge.a)({},e),{},{arrearsError:t.payload});case L:return Object(ge.a)(Object(ge.a)({},e),t.payload);case F:return Object(ge.a)(Object(ge.a)({},Xe),{},{employeeIds:e.employeeIds});default:return Object(ge.a)({},Xe)}}),+window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var Ze=function(){(function(e){var t=e.getState();return 0===t.companyPan.length?(e.dispatch(ce(!0)),!1):(e.dispatch(ce(!1)),0===t.employeeId.length?(e.dispatch(ne(!0)),!1):(e.dispatch(ne(!1)),0===t.employeeName.length?(e.dispatch(re(!0)),!1):(e.dispatch(re(!1)),0===t.bankName.length?(e.dispatch(ie(!0)),!1):(e.dispatch(ie(!1)),0===t.bankAccountNo.length?(e.dispatch(le(!0)),!1):(e.dispatch(le(!1)),0===t.daysMonth.length?(e.dispatch(be(!0)),!1):(e.dispatch(be(!1)),0===t.daysPayable.length?(e.dispatch(je(!0)),!1):(e.dispatch(je(!1)),0===t.monthlyBasic.length?(e.dispatch(se(!0)),!1):(e.dispatch(se(!1)),0===t.monthlyGross.length?(e.dispatch(de(!0)),!1):(e.dispatch(de(!1)),0===t.pan.length?(e.dispatch(oe(!0)),!1):(e.dispatch(oe(!1)),0===t.basic.length?(e.dispatch(pe(!0)),!1):(e.dispatch(pe(!1)),0===t.conveyanceAllowance.length?(e.dispatch(ue(!0)),!1):(e.dispatch(ue(!1)),0===t.incentive.length?(e.dispatch(Oe(!0)),!1):(e.dispatch(Oe(!1)),0===t.incomeTax.length?(e.dispatch(ye(!0)),!1):(e.dispatch(ye(!1)),0!==t.arrears.length||(e.dispatch(he(!0)),!1)))))))))))))))})(Ue)&&(Ue.dispatch(he(!1)),Ue.dispatch({type:k,payload:!0}))},Qe=a(247);Qe.a.initializeApp({apiKey:"AIzaSyBFhJsmdAirbA_kdVrlp5VztQ0mzu0VBv4",authDomain:"salary-slip-35a4b.firebaseapp.com",projectId:"salary-slip-35a4b",storageBucket:"salary-slip-35a4b.appspot.com",messagingSenderId:"291647738956",appId:"1:291647738956:web:38883122da95e1f78ed0e9"});var qe=Qe.a.firestore(),$e=a(933),et=a(888),tt=a(920),at=a(929),nt=a(921),rt=a.p+"static/media/word.baefbedd.svg",ct=a.p+"static/media/pdf.ba4a9de7.svg",ot=a(409),it=a.n(ot),lt=a(410),st=a.n(lt),dt=a(411),bt=a.n(dt),jt=a(412);var pt,ut,Ot,yt,ht,ft,mt,xt=function(e){var t,a;t="https://ismail-creatvt.github.io/salaryslip/document/template.docx",a=function(t,a){if(t)throw t;var n=new st.a(a),r=(new it.a).loadZip(n);r.setData(e);try{r.render()}catch(t){if(console.log(JSON.stringify({error:t},(function(e,t){return t instanceof Error?Object.getOwnPropertyNames(t).reduce((function(e,a){return e[a]=t[a],e}),{}):t}))),t.properties&&t.properties.errors instanceof Array){var c=t.properties.errors.map((function(e){return e.properties.explanation})).join("\n");console.log("errorMessages",c)}throw t}var o=r.getZip().generate({type:"blob",mimeType:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"});Object(jt.saveAs)(o,e.fileName+".docx"),Ue.dispatch({type:B,payload:"Saving Employee data..."})},bt.a.getBinaryContent(t,a)},gt=a(421),vt=a(67),Nt=a(33),Et=a(34),At=a.n(Et),wt=At.a.View(pt||(pt=Object(Nt.a)(["\n        width:100%;\n        height:100%;\n        border:1px solid #000;\n        display:flex;\n        padding:16pt;\n        flex-direction:column;\n"]))),It=At.a.View(ut||(ut=Object(Nt.a)(["\n        width:100%;\n        display:flex;\n        flex-direction:row;\n"]))),St=At.a.View(Ot||(Ot=Object(Nt.a)(["\n    display:flex;\n    flex-direction:column;\n"])));vt.Font.register({family:"Lora",fonts:[{src:"https://ismail-creatvt.github.io/invoicegen/fonts/Lora-Regular.ttf",fontStyle:"normal",fontWeight:"normal"},{src:"https://ismail-creatvt.github.io/invoicegen/fonts/Lora-Medium.ttf",fontStyle:"normal",fontWeight:"medium"},{src:"https://ismail-creatvt.github.io/invoicegen/fonts/Lora-Bold.ttf",fontStyle:"normal",fontWeight:"bold"}]});At.a.Text(yt||(yt=Object(Nt.a)(["\n        font-family:'Lora';\n        font-size:11pt;\n        color:#000;\n        font-weight:bold;\n"])));var Pt,Mt,Tt,Ct,_t=At.a.Text(ht||(ht=Object(Nt.a)(["\n        color:#000;\n        font-family:'Lora';\n        font-size:14pt;\n        font-weight:bold;\n        margin-left:8pt;\n"]))),Rt=(At.a.Text(ft||(ft=Object(Nt.a)(["\n        color:#000;\n        font-family:'Lora';\n        font-size:14pt;\n        font-weight:bold;\n        flex-grow:1;\n        margin-top:4pt;\n"]))),At.a.Text(mt||(mt=Object(Nt.a)(["\n        color:#000;\n        font-family:'Lora';\n        font-size:11pt;\n        font-weight:normal;\n        margin-left:8pt;\n"]))));var Dt,kt,Bt,Lt,Ft,zt,Gt,Wt,Yt,Vt,Jt=function(e){var t=e.companyName,a=e.addressLine1,n=e.addressLine2,r=e.addressLine3;return Object(fe.jsxs)(It,{children:[Object(fe.jsx)(vt.Image,{src:ze,style:{width:"65.05pt",height:"54pt"}}),Object(fe.jsxs)(Ht,{children:[Object(fe.jsx)(_t,{children:t}),Object(fe.jsx)(Rt,{children:a}),Object(fe.jsx)(Rt,{children:n}),Object(fe.jsx)(Rt,{children:r})]}),Object(fe.jsxs)(Kt,{children:[Object(fe.jsx)(Xt,{children:"Pay Slip"}),Object(fe.jsx)(Ut,{children:"Dec 2021"})]})]})},Ht=At.a.View(Pt||(Pt=Object(Nt.a)(["\n    display:flex;\n    flex-direction:column;\n    flex-grow:1;\n"]))),Kt=At.a.View(Mt||(Mt=Object(Nt.a)(["\n    display:flex;\n    flex-direction:column;\n    align-items:flex-end;\n"]))),Xt=At.a.Text(Tt||(Tt=Object(Nt.a)(["\n    font-family:'Lora';\n    font-size:14pt;\n    font-weight:bold;\n"]))),Ut=At.a.Text(Ct||(Ct=Object(Nt.a)(["\n    font-family:'Lora';\n    font-size:11pt;\n    font-weight:bold;\n"]))),Zt=At.a.View(Dt||(Dt=Object(Nt.a)(["\n    border:0.5pt solid #000;\n    width:100%;\n    margin-top:20pt;\n"]))),Qt=At.a.View(kt||(kt=Object(Nt.a)(["\n    display:flex;\n    flex-direction:row;\n"]))),qt=At.a.Text(Bt||(Bt=Object(Nt.a)(["\n    border:0.5pt solid #000;\n    padding:4pt 5.4pt 4pt 5.4pt;\n    width:128pt;\n    font-size:11pt;\n    font-family:'Lora';\n    box-sizing:border-box;\n"]))),$t=At.a.Text(Lt||(Lt=Object(Nt.a)(["\n    border:0.5pt solid #000;\n    padding:4pt 5.4pt 4pt 5.4pt;\n    width:128pt;\n    font-size:11pt;\n    font-family:'Lora';\n    font-weight:bold;\n    box-sizing:border-box;\n"]))),ea=At.a.Text(Ft||(Ft=Object(Nt.a)(["\n    border-left:0.5pt solid #000;\n    border-right:0.5pt solid #000;\n    border-top:0.5pt solid #000;\n    padding:4pt 5.4pt 4pt 5.4pt;\n    font-size:11pt;\n    width:128pt;\n    font-family:'Lora';\n    box-sizing:border-box;\n"]))),ta=At.a.Text(zt||(zt=Object(Nt.a)(["\n    border-left:0.5pt solid #000;\n    border-right:0.5pt solid #000;\n    border-bottom:0.5pt solid #000;\n    padding:4pt 5.4pt 4pt 5.4pt;\n    font-size:11pt;\n    box-sizing:border-box;\n    font-family:'Lora';\n    width:128pt;\n"]))),aa=At.a.Text(Gt||(Gt=Object(Nt.a)(["\n    border-left:0.5pt solid #000;\n    border-right:0.5pt solid #000;\n    border-bottom:0.5pt solid #000;\n    padding:4pt 5.4pt 4pt 5.4pt;\n    font-size:11pt;\n    box-sizing:border-box;\n    font-family:'Lora';\n    width:128pt;\n    height:20pt;\n"]))),na=At.a.Text(Wt||(Wt=Object(Nt.a)(["\n    border-left:0.5pt solid #000;\n    border-right:0.5pt solid #000;\n    padding:4pt 5.4pt 4pt 5.4pt;\n    font-size:11pt;\n    font-family:'Lora';\n    width:128pt;\n    box-sizing:border-box;\n"]))),ra=At.a.Text(Yt||(Yt=Object(Nt.a)(["\n    border-left:0.5pt solid #000;\n    border-right:0.5pt solid #000;\n    padding:4pt 5.4pt 4pt 5.4pt;\n    height:20pt;\n    font-size:11pt;\n    font-family:'Lora';\n    width:128pt;\n    box-sizing:border-box;\n"]))),ca=At.a.View(Vt||(Vt=Object(Nt.a)(["\n    border:0.5pt solid #000;\n    height:28pt;\n    width:128pt;\n    box-sizing:border-box;\n"])));var oa=function(e){var t=e.bankName,a=e.bankAccountNo,n=e.pan;return Object(fe.jsxs)(St,{children:[Object(fe.jsxs)(Qt,{children:[Object(fe.jsx)(na,{children:"Bank Name"}),Object(fe.jsx)(na,{children:t}),Object(fe.jsx)(na,{children:"PAN"}),Object(fe.jsx)(na,{children:n})]}),Object(fe.jsxs)(Qt,{children:[Object(fe.jsx)(ta,{children:"Bank A/c No"}),Object(fe.jsx)(ta,{children:a}),Object(fe.jsx)(ta,{}),Object(fe.jsx)(ta,{})]})]})};var ia=function(e){var t=e.dateOfJoining,a=e.dateOfSeperation,n=e.daysMonth,r=e.daysPayable;return Object(fe.jsxs)(St,{children:[Object(fe.jsxs)(Qt,{children:[Object(fe.jsx)(na,{children:"Date of Joining"}),Object(fe.jsx)(na,{children:t}),Object(fe.jsx)(na,{children:"Days Month"}),Object(fe.jsx)(na,{children:n})]}),Object(fe.jsxs)(Qt,{children:[Object(fe.jsx)(na,{children:"Date of Seperation"}),Object(fe.jsx)(na,{children:a}),Object(fe.jsx)(na,{children:"Days Payable"}),Object(fe.jsx)(na,{children:r})]})]})};var la=function(e){var t=e.companyPan,a=e.employeeId,n=e.monthlyGross,r=e.monthlyBasic;return Object(fe.jsxs)(St,{children:[Object(fe.jsxs)(Qt,{children:[Object(fe.jsx)(ea,{children:"Company PAN"}),Object(fe.jsx)(ea,{children:t}),Object(fe.jsx)(ea,{children:"Monthly Gross"}),Object(fe.jsx)(ea,{children:n})]}),Object(fe.jsxs)(Qt,{children:[Object(fe.jsx)(na,{children:"Employee ID"}),Object(fe.jsx)(na,{children:a}),Object(fe.jsx)(na,{children:"Monthly Basic"}),Object(fe.jsx)(na,{children:r})]})]})};var sa=function(e){var t=e.employeeName;return Object(fe.jsxs)(Qt,{children:[Object(fe.jsx)($t,{children:"Name of Employee"}),Object(fe.jsx)(qt,{style:{flexGrow:"1"},children:t})]})};var da=function(e){var t=e.netPayable,a=e.netPayableInWords;return Object(fe.jsxs)(St,{children:[Object(fe.jsxs)(Qt,{children:[Object(fe.jsx)($t,{children:"Net Payable"}),Object(fe.jsx)($t,{style:{flexGrow:"1"},children:t})]}),Object(fe.jsxs)(Qt,{children:[Object(fe.jsx)(ca,{style:{alignSelf:"flex-stretch"}}),Object(fe.jsx)($t,{style:{flexGrow:"1"},children:a})]})]})};var ba=function(e){return e.netPayable,e.netPayableInWords,Object(fe.jsxs)(Qt,{children:[Object(fe.jsx)(qt,{children:"NOTE"}),Object(fe.jsx)(qt,{style:{flexGrow:"1"},children:"TDS calculations are based on Employee\u2019s Self Declaration of Investments. All Figures in INR."})]})};var ja=function(e){var t=e.basic,a=e.incomeTax,n=e.conveyanceAllowance,r=e.arrears,c=e.incentive;return e.totalEarnings,e.totalDeductions,e.netPayable,e.netPayableInWords,Object(fe.jsxs)(St,{children:[Object(fe.jsxs)(Qt,{children:[Object(fe.jsx)(qt,{children:"Earning Head"}),Object(fe.jsx)(qt,{children:"Currently Monthly Earnings"}),Object(fe.jsx)(qt,{children:"Deduction Head"}),Object(fe.jsx)(qt,{children:"Currently Monthly \nDeductions"})]}),Object(fe.jsxs)(Qt,{children:[Object(fe.jsx)(ea,{children:"Basic"}),Object(fe.jsx)(ea,{children:t}),Object(fe.jsx)(ea,{children:"Income Tax (TDS)"}),Object(fe.jsx)(ea,{children:a})]}),Object(fe.jsxs)(Qt,{children:[Object(fe.jsx)(na,{children:"Conveyance Allowance"}),Object(fe.jsx)(na,{children:n}),Object(fe.jsx)(na,{children:"Arrears"}),Object(fe.jsx)(na,{children:r})]}),Object(fe.jsxs)(Qt,{children:[Object(fe.jsx)(na,{children:"Incentive"}),Object(fe.jsx)(na,{children:c}),Object(fe.jsx)(na,{}),Object(fe.jsx)(na,{})]}),Object(fe.jsxs)(Qt,{children:[Object(fe.jsx)(ra,{}),Object(fe.jsx)(ra,{}),Object(fe.jsx)(ra,{}),Object(fe.jsx)(ra,{})]}),Object(fe.jsxs)(Qt,{children:[Object(fe.jsx)(aa,{}),Object(fe.jsx)(aa,{}),Object(fe.jsx)(aa,{}),Object(fe.jsx)(aa,{})]})]})};var pa=function(e){var t=e.totalEarnings,a=e.totalDeductions;return Object(fe.jsxs)(Qt,{children:[Object(fe.jsx)($t,{children:"Total"}),Object(fe.jsx)(qt,{children:t}),Object(fe.jsx)(ca,{}),Object(fe.jsx)(qt,{children:a})]})};var ua=function(e){var t=e.data;return Object(fe.jsxs)(Zt,{children:[Object(fe.jsx)(sa,{employeeName:t.employeeName}),Object(fe.jsx)(la,{companyPan:t.companyPan,employeeId:t.employeeId,monthlyGross:t.monthlyGross,monthlyBasic:t.monthlyBasic}),Object(fe.jsx)(ia,{dateOfJoining:t.dateOfJoining,dateOfSeperation:t.dateOfSeperation,daysMonth:t.daysMonth,daysPayable:t.daysPayable}),Object(fe.jsx)(oa,{bankName:t.bankName,bankAccountNo:t.bankAccountNo,pan:t.pan}),Object(fe.jsx)(Qt,{children:Object(fe.jsx)(ca,{style:{flexGrow:"1"}})}),Object(fe.jsx)(ja,{basic:t.basic,conveyanceAllowance:t.conveyanceAllowance,incentive:t.incentive,incomeTax:t.incomeTax,arrears:t.arrears}),Object(fe.jsx)(pa,{totalEarnings:t.totalEarnings,totalDeductions:t.totalDeductions}),Object(fe.jsx)(da,{netPayable:t.netPayable,netPayableInWords:t.netPayableInWords}),Object(fe.jsx)(ba,{})]})};var Oa=function(e){var t=e.data;return Object(fe.jsx)(vt.Document,{children:Object(fe.jsx)(vt.Page,{style:{margin:"0px",paddingBottom:"24pt",paddingTop:"24pt",paddingLeft:"24pt",paddingRight:"24pt"},children:Object(fe.jsxs)(wt,{children:[Object(fe.jsx)(Jt,{companyName:"EDigital Wolf",addressLine1:"Shri Siddhi Above SBI Bank, Sasane Nagar ",addressLine2:"Hadapsar, Pune",addressLine3:"Maharashtra 411028"}),Object(fe.jsx)(ua,{data:t})]})})})},ya=a(925);var ha=function(e){var t=e.open,a=Object(O.c)((function(e){console.log(e);var t=parseFloat(e.basic)||0,a=parseFloat(e.conveyanceAllowance)||0,n=parseFloat(e.incentive)||0,r=parseFloat(e.incomeTax)||0,c=parseFloat(e.arrears)||0,o=t+a+n,i=r+c,l=o-i;return{dateObject:e.date,date:Object(gt.a)(e.date,"MMM yyyy"),employeeName:e.employeeName,companyPan:e.companyPan,monthlyGross:(parseFloat(e.monthlyGross)||0).toFixed(2),employeeId:e.employeeId,monthlyBasic:(parseFloat(e.monthlyBasic)||0).toFixed(2),dateOfJoining:Object(gt.a)(e.dateOfJoining,"dd MMM yyyy"),daysMonth:e.daysMonth,dateOfSeperation:e.hasSeperated?Object(gt.a)(e.dateOfSeperation,"dd MMM yyyy"):"N/A",daysPayable:e.daysPayable,bankName:e.bankName,pan:e.pan,bankAccountNo:e.bankAccountNo,basic:t.toFixed(2),incomeTax:r.toFixed(2),conveyanceAllowance:a.toFixed(2),arrears:c.toFixed(2),incentive:n.toFixed(2),totalEarnings:o.toFixed(2),totalDeductions:i.toFixed(2),netPayable:"".concat(l.toFixed(2)),netPayableInWords:"Rupees ".concat(De(l)," Only"),fileName:"Salary_Slip_".concat(e.employeeId,"_").concat(Object(gt.a)(e.date,"MMM_yyyy"))}})),r=Object(O.b)(),c=function(){qe.collection("employeeIds").doc(a.employeeId).set({pan:a.pan,employeeName:a.employeeName,bankName:a.bankName,bankAccountNo:a.bankAccountNo,dateOfJoining:a.dateOfJoining,dateOfSeperation:a.dateOfSeperation,monthlyGross:a.monthlyGross,monthlyBasic:a.monthlyBasic,basic:a.basic,conveyanceAllowance:a.conveyanceAllowance,incentive:a.incentive,incomeTax:a.incomeTax,arrears:a.arrears}).then((function(){console.log("Document Written successfully")})).catch((function(e){console.log("Error while writing document")}))};return Object(fe.jsx)($e.a,{open:t,children:Object(fe.jsxs)(et.a,{style:{backgroundColor:"#e9e9e9"},children:[Object(fe.jsx)(tt.a,{onClick:function(e){r({type:F})},style:{position:"absolute",right:"10px",top:"10px"},children:Object(fe.jsx)(ya.a,{style:{color:"#000"}})}),Object(fe.jsx)(at.a,{style:{fontWeight:"bold",gap:"50px",paddingTop:"20px",paddingLeft:"50px",paddingRight:"50px",paddingBottom:"40px"},children:Object(fe.jsxs)(at.a,{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[Object(fe.jsx)("p",{children:"Download Payslip"}),Object(fe.jsxs)(at.a,{style:{display:"flex",flexDirection:"row",gap:"50px"},children:[Object(fe.jsx)(l.a,{style:{padding:"20px"},children:Object(fe.jsx)(vt.PDFDownloadLink,{document:Object(fe.jsx)(Oa,{data:a}),fileName:a.fileName,onClick:function(e){return c()},style:{textDecoration:"none",color:"#4a4a4a",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#fff"},children:function(e){e.blob,e.url;var t=e.loading;e.error;return Object(fe.jsxs)(n.Fragment,{children:[Object(fe.jsx)("img",{src:ct,style:{width:"64px",height:"64px"},alt:"Word"}),t&&Object(fe.jsx)(nt.a,{style:{position:"absolute"}})]})}})}),Object(fe.jsx)(l.a,{style:{padding:"20px",margin:"0px"},onClick:function(e){c(),xt(a)},children:Object(fe.jsx)("img",{src:rt,style:{width:"64px",height:"64px",padding:"0px"},alt:"Pdf"})})]})]})})]})})},fa=Object(Ye.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},extendedIcon:{marginRight:e.spacing(1)}}}));var ma=function(){var e=fa(),t=Object(n.useRef)(0),a=Object(n.useState)(!0),r=Object(i.a)(a,2),c=r[0],o=r[1],l=Object(Ve.a)("(max-width: 500px)"),s=Object(O.b)(),d=function(){qe.collection("employeeIds").onSnapshot((function(e){var t=e.docs.map((function(e){return{id:e.id,data:e.data()}}));s({type:D,payload:t})}))};Object(n.useEffect)((function(){d()}),[]),Object(n.useLayoutEffect)((function(){var e=function(){var e=window.pageYOffset;o(t.current>e),t.current=e};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]);var b=Object(O.c)((function(e){return e.saving}));return Object(fe.jsx)(n.Fragment,{children:Object(fe.jsxs)("div",{className:"App",children:[Object(fe.jsx)(We,{visible:c,isMobile:l,classes:e,onSaveClick:Ze}),Object(fe.jsxs)("div",{className:"Container",children:[Object(fe.jsx)(Ae,{}),Object(fe.jsx)(xe,{}),Object(fe.jsx)(we,{}),Object(fe.jsx)(Ie,{}),Object(fe.jsx)(ke,{}),l&&Object(fe.jsxs)(Be.a,{onClick:Ze,style:{position:"fixed",bottom:"20px",zIndex:"10",right:"20px",transition:"transform 300ms",transform:c?"translateY(0%)":"translateY(150%)"},color:"primary",variant:"extended",children:[Object(fe.jsx)(Fe.a,{className:e.extendedIcon}),"  Download Payslip"]}),b&&Object(fe.jsx)(ha,{open:b})]})]})})},xa=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,937)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))};o.a.render(Object(fe.jsx)(r.a.StrictMode,{children:Object(fe.jsx)(O.a,{store:Ue,children:Object(fe.jsx)(ma,{})})}),document.getElementById("root")),xa()}},[[886,1,2]]]);
//# sourceMappingURL=main.2a3294a2.chunk.js.map