(function(){var e={3228:function(e,t,n){"use strict";var a=n(9242),s=n(3396),r=n.p+"img/logo.f0df9c2a.png";const i=(0,s._)("img",{alt:"Vue logo",src:r,width:"400",height:"280"},null,-1);function o(e,t,n,a,r,o){const l=(0,s.up)("HelloWorld");return(0,s.wg)(),(0,s.iD)(s.HY,null,[i,(0,s.Wm)(l,{msg:"Welcome to Your Vue.js App"})],64)}var l=n(7139);const u=e=>((0,s.dD)("data-v-b06b7036"),e=e(),(0,s.Cn)(),e),p={key:0},d=u((()=>(0,s._)("div",{class:"titlefont fontLargeSize titleFont"}," 메타마스크 설치됨 ",-1))),c=u((()=>(0,s._)("div",{id:"tempImage"},null,-1))),y={key:0},m={key:1},f={key:0},_={key:1},b={class:"function"},v=u((()=>(0,s._)("div",{class:"title"}," ownerOf ",-1))),w={class:"parameters"},g=u((()=>(0,s._)("span",{class:"parameterName"},"tokenId : ",-1))),k={class:"buttons"},T={key:0,class:"result"},h={class:"function"},O=u((()=>(0,s._)("div",{class:"title"}," balanceOf ",-1))),I={class:"parameters"},M=u((()=>(0,s._)("span",{class:"parameterName"},"owner : ",-1))),C={class:"buttons"},x={key:0,class:"result"},q={class:"function"},A=u((()=>(0,s._)("div",{class:"title"}," mint ",-1))),D={class:"parameters"},B=u((()=>(0,s._)("span",{class:"parameterName"},"to : ",-1))),F={class:"parameters"},j=u((()=>(0,s._)("span",{class:"parameterName"},"tokenId : ",-1))),N={class:"parameters"},U=u((()=>(0,s._)("span",{class:"parameterName"},"uri : ",-1))),V={class:"buttons"},H={key:0,class:"result"},S=u((()=>(0,s._)("div",null,null,-1))),W={key:1};function z(e,t,n,r,i,o){return(0,s.wg)(),(0,s.iD)("div",null,[i.isInstallMetaMask?((0,s.wg)(),(0,s.iD)("div",p,[d,c,null==i.myAddress?((0,s.wg)(),(0,s.iD)("div",y,[(0,s._)("button",{onClick:t[0]||(t[0]=(...e)=>o.connectToMetaMask&&o.connectToMetaMask(...e))},"메타마스크 연결")])):((0,s.wg)(),(0,s.iD)("div",m,[null==i.myContract?((0,s.wg)(),(0,s.iD)("div",f,[(0,s._)("button",{onClick:t[1]||(t[1]=(...e)=>o.connectToContract&&o.connectToContract(...e))},"컨트랙트 연결")])):((0,s.wg)(),(0,s.iD)("div",_,[(0,s._)("div",b,[v,(0,s._)("div",w,[g,(0,s.wy)((0,s._)("input",{class:"parameterInput",type:"text",placeholder:"tokenId","onUpdate:modelValue":t[2]||(t[2]=e=>i.ownerOf_tokenId=e)},null,512),[[a.nr,i.ownerOf_tokenId]])]),(0,s._)("div",k,[(0,s._)("button",{class:"callButton",onClick:t[3]||(t[3]=(...e)=>o.requestOwnerOf&&o.requestOwnerOf(...e))},"call")]),null!=i.ownerOf_result?((0,s.wg)(),(0,s.iD)("div",T," ownerOf : "+(0,l.zw)(i.ownerOf_result),1)):(0,s.kq)("",!0)]),(0,s._)("div",h,[O,(0,s._)("div",I,[M,(0,s.wy)((0,s._)("input",{class:"parameterInput",type:"text",placeholder:"owner","onUpdate:modelValue":t[4]||(t[4]=e=>i.balanceOf_address=e)},null,512),[[a.nr,i.balanceOf_address]])]),(0,s._)("div",C,[(0,s._)("button",{class:"callButton",onClick:t[5]||(t[5]=(...e)=>o.requestBalanceOf&&o.requestBalanceOf(...e))},"call")]),null!=i.balanceOf_result?((0,s.wg)(),(0,s.iD)("div",x," balanceOf : "+(0,l.zw)(i.balanceOf_result),1)):(0,s.kq)("",!0)]),(0,s._)("div",q,[A,(0,s._)("div",D,[B,(0,s.wy)((0,s._)("input",{class:"parameterInput",type:"text",placeholder:"to","onUpdate:modelValue":t[6]||(t[6]=e=>i.mint_to=e)},null,512),[[a.nr,i.mint_to]])]),(0,s._)("div",F,[j,(0,s.wy)((0,s._)("input",{class:"parameterInput",type:"text",placeholder:"tokenId","onUpdate:modelValue":t[7]||(t[7]=e=>i.mint_tokenId=e)},null,512),[[a.nr,i.mint_tokenId]])]),(0,s._)("div",N,[U,(0,s.wy)((0,s._)("input",{class:"parameterInput",type:"text",placeholder:"uri","onUpdate:modelValue":t[8]||(t[8]=e=>i.mint_uri=e)},null,512),[[a.nr,i.mint_uri]])]),(0,s._)("div",V,[(0,s._)("button",{class:"callButton",onClick:t[9]||(t[9]=(...e)=>o.requestMint&&o.requestMint(...e))},"call")]),null!=i.mint_result?((0,s.wg)(),(0,s.iD)("div",H," mint : "+(0,l.zw)(i.mint_result),1)):(0,s.kq)("",!0)]),S]))]))])):((0,s.wg)(),(0,s.iD)("div",W," 메타 마스크 설치안됨 "))])}var E=n(6141),P=n(6796),R=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"inputs":[{"internalType":"address","name":"approved","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"uri","type":"string"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"uri","type":"string"}],"name":"setTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"_name","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"_symbol","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenSymbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]'),Y={name:"HelloWorld",props:{msg:String},data(){return{isInstallMetaMask:null!=window.ethereum&&1==window.ethereum.isMetaMask,myAddress:null,myContract:null,ownerOf_tokenId:null,ownerOf_result:null,balanceOf_address:null,balanceOf_result:null,mint_to:null,mint_tokenId:null,mint_uri:null,mint_result:null}},methods:{async connectToMetaMask(){console.log("click connectToMetaMask");var e=await window.ethereum.request({method:"eth_requestAccounts"});console.log(e),e.length>0&&(this.myAddress=e[0])},connectToContract(){console.log("click connectToContract");var e="0xc52bcCB5cbE0D0EB4068E54decA1Ae825f95965A",t=new E.Q(window.ethereum),n=t.getSigner();this.myContract=new P.CH(e,R,n),console.log(this.myContract)},async requestOwnerOf(){console.log("click requestOwnerof"),console.log(this.ownerOf_tokenId),this.ownerOf_result=await this.myContract.ownerOf(this.ownerOf_tokenId),console.log(this.ownerOf_result)},async requestBalanceOf(){console.log("click requestBalanceOf"),console.log(this.balanceOf_address),this.balanceOf_result=await this.myContract.balanceOf(this.balanceOf_address),console.log(this.balanceOf_result)},async requestMint(){console.log("click requstMint"),console.log(this.mint_to),console.log(this.mint_tokenId),console.log(this.mint_uri),this.mint_result=await this.myContract.mint(this.mint_to,this.mint_tokenId,this.mint_uri),console.log(this.mint_result)}}},Z=n(89);const J=(0,Z.Z)(Y,[["render",z],["__scopeId","data-v-b06b7036"]]);var L=J,Q={name:"App",components:{HelloWorld:L}};const G=(0,Z.Z)(Q,[["render",o]]);var K=G;(0,a.ri)(K).mount("#app")},6601:function(){}},t={};function n(a){var s=t[a];if(void 0!==s)return s.exports;var r=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,a,s,r){if(!a){var i=1/0;for(p=0;p<e.length;p++){a=e[p][0],s=e[p][1],r=e[p][2];for(var o=!0,l=0;l<a.length;l++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(o=!1,r<i&&(i=r));if(o){e.splice(p--,1);var u=s();void 0!==u&&(t=u)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[a,s,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var s,r,i=a[0],o=a[1],l=a[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(s in o)n.o(o,s)&&(n.m[s]=o[s]);if(l)var p=l(n)}for(t&&t(a);u<i.length;u++)r=i[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(p)},a=self["webpackChunkfront"]=self["webpackChunkfront"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(3228)}));a=n.O(a)})();
//# sourceMappingURL=app.97a7241e.js.map