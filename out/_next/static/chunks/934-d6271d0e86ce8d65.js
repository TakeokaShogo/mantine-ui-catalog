"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[934],{2694:function(e,o,n){n.d(o,{J:function(){return ae}});var r=n(7294),t=n(3051);const a=["mousedown","touchstart"];var i=n(3594),s=n(4761),l=n(5851),c=n(7048),d=n(8301),u=n(8463),p=n(4993),f=n(212);function w(e){const o=[(0,d.cv)(e.offset)];return e.middlewares.shift&&o.push((0,d.uY)({limiter:(0,d.dr)()})),e.middlewares.flip&&o.push((0,d.RR)()),e.middlewares.inline&&o.push((0,d.Qo)()),o.push((0,u.x7)({element:e.arrowRef,padding:e.arrowOffset})),o}var v=n(8216);const h="Popover component was not found in the tree",m="Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported",[g,y]=(0,v.R)(h);var O=n(665),P=n(4241),b=n(6010),C=Object.defineProperty,E=Object.defineProperties,k=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,N=(e,o,n)=>o in e?C(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,S=(e,o)=>{for(var n in o||(o={}))R.call(o,n)&&N(e,n,o[n]);if(x)for(var n of x(o))D.call(o,n)&&N(e,n,o[n]);return e};const T={refProp:"ref",popupType:"dialog"},I=(0,r.forwardRef)(((e,o)=>{const n=(0,s.N4)("PopoverTarget",T,e),{children:t,refProp:a,popupType:i}=n,l=((e,o)=>{var n={};for(var r in e)R.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&x)for(var r of x(e))o.indexOf(r)<0&&D.call(e,r)&&(n[r]=e[r]);return n})(n,["children","refProp","popupType"]);if(!(0,P.k)(t))throw new Error(m);const c=l,d=y(),u=(0,O.Y)(d.reference,t.ref,o),p=d.withRoles?{"aria-haspopup":i,"aria-expanded":d.opened,"aria-controls":d.getDropdownId(),id:d.getTargetId()}:{};return(0,r.cloneElement)(t,S((f=S(S(S({},c),p),d.targetProps),w={className:(0,b.Z)(d.targetProps.className,c.className,t.props.className),[a]:u},E(f,k(w))),d.controlled?null:{onClick:d.onToggle}));var f,w}));I.displayName="@mantine/core/PopoverTarget";var j=n(6768),_=n(1611);function F(e,o={active:!0}){return"function"===typeof e&&o.active?n=>{var r;"Escape"===n.key&&(e(n),null==(r=o.onTrigger)||r.call(o))}:o.onKeyDown||_.Z}var z=n(6362),$=(0,n(6817).k)(((e,{radius:o,shadow:n})=>({dropdown:{position:"absolute",backgroundColor:e.white,background:"dark"===e.colorScheme?e.colors.dark[6]:e.white,border:`${(0,j.h)(1)} solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[2]}`,padding:`${e.spacing.sm} ${e.spacing.md}`,boxShadow:e.shadows[n]||n||"none",borderRadius:e.fn.radius(o),"&:focus":{outline:0}},arrow:{backgroundColor:"inherit",border:`${(0,j.h)(1)} solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[2]}`,zIndex:1}}))),L=n(8269),A=n(8036),M=n(3990),Y=n(4523),K=n(3468),V=Object.defineProperty,Z=Object.defineProperties,X=Object.getOwnPropertyDescriptors,q=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,Q=(e,o,n)=>o in e?V(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,B=(e,o)=>{for(var n in o||(o={}))H.call(o,n)&&Q(e,n,o[n]);if(q)for(var n of q(o))J.call(o,n)&&Q(e,n,o[n]);return e},G=(e,o)=>Z(e,X(o));const U={};function W(e){var o;const n=(0,s.N4)("PopoverDropdown",U,e),{style:t,className:a,children:i,onKeyDownCapture:l}=n,c=((e,o)=>{var n={};for(var r in e)H.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&q)for(var r of q(e))o.indexOf(r)<0&&J.call(e,r)&&(n[r]=e[r]);return n})(n,["style","className","children","onKeyDownCapture"]),d=y(),{classes:u,cx:p}=$({radius:d.radius,shadow:d.shadow},{name:d.__staticSelector,classNames:d.classNames,styles:d.styles,unstyled:d.unstyled,variant:d.variant}),f=(0,z.u)({opened:d.opened,shouldReturnFocus:d.returnFocus}),w=d.withRoles?{"aria-labelledby":d.getTargetId(),id:d.getDropdownId(),role:"dialog"}:{};return d.disabled?null:r.createElement(L.q,G(B({},d.portalProps),{withinPortal:d.withinPortal}),r.createElement(A.u,G(B({mounted:d.opened},d.transitionProps),{transition:d.transitionProps.transition||"fade",duration:null!=(o=d.transitionProps.duration)?o:150,keepMounted:d.keepMounted,exitDuration:"number"===typeof d.transitionProps.exitDuration?d.transitionProps.exitDuration:d.transitionProps.duration}),(e=>{var o,n;return r.createElement(M.i,{active:d.trapFocus},r.createElement(Y.x,B(G(B({},w),{tabIndex:-1,ref:d.floating,style:G(B(B({},t),e),{zIndex:d.zIndex,top:null!=(o=d.y)?o:0,left:null!=(n=d.x)?n:0,width:"target"===d.width?void 0:(0,j.h)(d.width)}),className:p(u.dropdown,a),onKeyDownCapture:F(d.onClose,{active:d.closeOnEscape,onTrigger:f,onKeyDown:l}),"data-position":d.placement}),c),i,r.createElement(K.Y,{ref:d.arrowRef,arrowX:d.arrowX,arrowY:d.arrowY,visible:d.withArrow,position:d.placement,arrowSize:d.arrowSize,arrowRadius:d.arrowRadius,arrowOffset:d.arrowOffset,arrowPosition:d.arrowPosition,className:u.arrow})))})))}W.displayName="@mantine/core/PopoverDropdown";var ee=n(4870),oe=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;const te={position:"bottom",offset:8,positionDependencies:[],transitionProps:{transition:"fade",duration:150},middlewares:{flip:!0,shift:!0,inline:!1},arrowSize:7,arrowOffset:5,arrowRadius:0,arrowPosition:"side",closeOnClickOutside:!0,withinPortal:!1,closeOnEscape:!0,trapFocus:!1,withRoles:!0,returnFocus:!1,clickOutsideEvents:["mousedown","touchstart"],zIndex:(0,i.w)("popover"),__staticSelector:"Popover",width:"max-content"};function ae(e){var o,n,i,u,v,h;const m=(0,r.useRef)(null),y=(0,s.N4)("Popover",te,e),{children:O,position:P,offset:b,onPositionChange:C,positionDependencies:E,opened:k,transitionProps:x,width:R,middlewares:D,withArrow:N,arrowSize:S,arrowOffset:T,arrowRadius:I,arrowPosition:j,unstyled:_,classNames:F,styles:z,closeOnClickOutside:$,withinPortal:L,portalProps:A,closeOnEscape:M,clickOutsideEvents:Y,trapFocus:K,onClose:V,onOpen:Z,onChange:X,zIndex:q,radius:H,shadow:J,id:Q,defaultOpened:B,__staticSelector:G,withRoles:U,disabled:W,returnFocus:ae,variant:ie,keepMounted:se}=y,le=((e,o)=>{var n={};for(var r in e)ne.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&oe)for(var r of oe(e))o.indexOf(r)<0&&re.call(e,r)&&(n[r]=e[r]);return n})(y,["children","position","offset","onPositionChange","positionDependencies","opened","transitionProps","width","middlewares","withArrow","arrowSize","arrowOffset","arrowRadius","arrowPosition","unstyled","classNames","styles","closeOnClickOutside","withinPortal","portalProps","closeOnEscape","clickOutsideEvents","trapFocus","onClose","onOpen","onChange","zIndex","radius","shadow","id","defaultOpened","__staticSelector","withRoles","disabled","returnFocus","variant","keepMounted"]),[ce,de]=(0,r.useState)(null),[ue,pe]=(0,r.useState)(null),fe=(0,t.M)(Q),we=(0,s.rZ)(),ve=function(e){const[o,n]=(0,l.C)({value:e.opened,defaultValue:e.defaultOpened,finalValue:!1,onChange:e.onChange}),r=(0,p.YF)({placement:e.position,middleware:[...w(e),..."target"===e.width?[(0,d.dp)({apply({rects:e}){var o,n;Object.assign(null!=(n=null==(o=r.refs.floating.current)?void 0:o.style)?n:{},{width:`${e.reference.width}px`})}})]:[]]});return(0,f.L)({opened:e.opened,position:e.position,positionDependencies:e.positionDependencies,floating:r}),(0,c.l)((()=>{var o;null==(o=e.onPositionChange)||o.call(e,r.placement)}),[r.placement]),(0,c.l)((()=>{var o,n;e.opened?null==(n=e.onOpen)||n.call(e):null==(o=e.onClose)||o.call(e)}),[e.opened]),{floating:r,controlled:"boolean"===typeof e.opened,opened:o,onClose:()=>{var o;null==(o=e.onClose)||o.call(e),n(!1)},onToggle:()=>{var r,t;o?(null==(r=e.onClose)||r.call(e),n(!1)):(null==(t=e.onOpen)||t.call(e),n(!0))}}}({middlewares:D,width:R,position:(0,ee._)(we.dir,P),offset:"number"===typeof b?b+(N?S/2:0):b,arrowRef:m,arrowOffset:T,onPositionChange:C,positionDependencies:E,opened:k,defaultOpened:B,onChange:X,onOpen:Z,onClose:V});!function(e,o,n){const t=(0,r.useRef)();(0,r.useEffect)((()=>{const r=o=>{const{target:r}=null!=o?o:{};if(Array.isArray(n)){const t=(null==r?void 0:r.hasAttribute("data-ignore-outside-clicks"))||!document.body.contains(r)&&"HTML"!==r.tagName;n.every((e=>!!e&&!o.composedPath().includes(e)))&&!t&&e()}else t.current&&!t.current.contains(r)&&e()};return(o||a).forEach((e=>document.addEventListener(e,r))),()=>{(o||a).forEach((e=>document.removeEventListener(e,r)))}}),[t,e,n])}((()=>ve.opened&&$&&ve.onClose()),Y,[ce,ue]);const he=(0,r.useCallback)((e=>{de(e),ve.floating.reference(e)}),[ve.floating.reference]),me=(0,r.useCallback)((e=>{pe(e),ve.floating.floating(e)}),[ve.floating.floating]);return r.createElement(g,{value:{returnFocus:ae,disabled:W,controlled:ve.controlled,reference:he,floating:me,x:ve.floating.x,y:ve.floating.y,arrowX:null==(i=null==(n=null==(o=ve.floating)?void 0:o.middlewareData)?void 0:n.arrow)?void 0:i.x,arrowY:null==(h=null==(v=null==(u=ve.floating)?void 0:u.middlewareData)?void 0:v.arrow)?void 0:h.y,opened:ve.opened,arrowRef:m,transitionProps:x,width:R,withArrow:N,arrowSize:S,arrowOffset:T,arrowRadius:I,arrowPosition:j,placement:ve.floating.placement,trapFocus:K,withinPortal:L,portalProps:A,zIndex:q,radius:H,shadow:J,closeOnEscape:M,onClose:ve.onClose,onToggle:ve.onToggle,getTargetId:()=>`${fe}-target`,getDropdownId:()=>`${fe}-dropdown`,withRoles:U,targetProps:le,__staticSelector:G,classNames:F,styles:z,unstyled:_,variant:ie,keepMounted:se}},O)}ae.Target=I,ae.Dropdown=W,ae.displayName="@mantine/core/Popover"},6362:function(e,o,n){n.d(o,{u:function(){return a}});var r=n(7294),t=n(7048);function a({opened:e,shouldReturnFocus:o=!0}){const n=(0,r.useRef)(),a=()=>{var e;n.current&&"focus"in n.current&&"function"===typeof n.current.focus&&(null==(e=n.current)||e.focus({preventScroll:!0}))};return(0,t.l)((()=>{let r=-1;const t=e=>{"Tab"===e.key&&window.clearTimeout(r)};return document.addEventListener("keydown",t),e?n.current=document.activeElement:o&&(r=window.setTimeout(a,10)),()=>{window.clearTimeout(r),document.removeEventListener("keydown",t)}}),[e,o]),a}},5851:function(e,o,n){n.d(o,{C:function(){return t}});var r=n(7294);function t({value:e,defaultValue:o,finalValue:n,onChange:t=(()=>{})}){const[a,i]=(0,r.useState)(void 0!==o?o:n);return void 0!==e?[e,t,!0]:[a,e=>{i(e),null==t||t(e)},!1]}},4137:function(e,o,n){n.d(o,{s:function(){return t}});var r=n(7294);function t(e,o,n){(0,r.useEffect)((()=>(window.addEventListener(e,o,n),()=>window.removeEventListener(e,o,n))),[e,o])}},8216:function(e,o,n){n.d(o,{R:function(){return t}});var r=n(7294);function t(e){const o=(0,r.createContext)(null);return[({children:e,value:n})=>r.createElement(o.Provider,{value:n},e),()=>{const n=(0,r.useContext)(o);if(null===n)throw new Error(e);return n}]}},1611:function(e,o,n){n.d(o,{Z:function(){return r}});const r=()=>{}}}]);