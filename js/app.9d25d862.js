(function(){var e={5894:function(e,n,t){"use strict";var a=t(9242),i=t(3396),o=t.p+"img/logo.f0df9c2a.png";const r=(0,i._)("img",{alt:"Vue logo",src:o,width:"400",height:"280"},null,-1);function l(e,n,t,a,o,l){const s=(0,i.up)("HelloWorld");return(0,i.wg)(),(0,i.iD)(i.HY,null,[r,(0,i.Wm)(s,{msg:"Welcome to Your Vue.js App"})],64)}var s=t(7139);const u=e=>((0,i.dD)("data-v-15711024"),e=e(),(0,i.Cn)(),e),p={key:0},d=u((()=>(0,i._)("div",null,"메타마스크 설치됨",-1))),y={key:0},c={key:1},m={key:0},f={key:1},b=u((()=>(0,i._)("div",null," balanceOf ",-1))),w=u((()=>(0,i._)("span",null,"owner",-1))),v={key:0},_=u((()=>(0,i._)("div",null," mint ",-1))),T=u((()=>(0,i._)("span",null,"to",-1))),g=u((()=>(0,i._)("span",null,"tokenId",-1))),k=u((()=>(0,i._)("span",null,"uri",-1))),h={key:0},O={key:1};function M(e,n,t,o,r,l){return(0,i.wg)(),(0,i.iD)("div",null,[r.isInstallMetaMask?((0,i.wg)(),(0,i.iD)("div",p,[d,null==r.myAddress?((0,i.wg)(),(0,i.iD)("div",y,[(0,i._)("button",{onClick:n[0]||(n[0]=(...e)=>l.connectToMetaMask&&l.connectToMetaMask(...e))},"메타마스크 연결")])):((0,i.wg)(),(0,i.iD)("div",c,[null==r.myContract?((0,i.wg)(),(0,i.iD)("div",m,[(0,i._)("button",{onClick:n[1]||(n[1]=(...e)=>l.connectToContract&&l.connectToContract(...e))},"컨트랙트 연결")])):((0,i.wg)(),(0,i.iD)("div",f,[(0,i._)("div",null,[(0,i.wy)((0,i._)("input",{type:"text",placeholder:"tokenId","onUpdate:modelValue":n[2]||(n[2]=e=>r.ownerOf_tokenId=e)},null,512),[[a.nr,r.ownerOf_tokenId]]),(0,i._)("button",{onClick:n[3]||(n[3]=(...e)=>l.requestOwnerOf&&l.requestOwnerOf(...e))},"onwerof 요청"),(0,i._)("div",null,(0,s.zw)(r.ownerOf_result),1)]),(0,i._)("div",null,[b,(0,i._)("div",null,[w,(0,i.wy)((0,i._)("input",{type:"text",placeholder:"owner","onUpdate:modelValue":n[4]||(n[4]=e=>r.balanceOf_owner=e)},null,512),[[a.nr,r.balanceOf_owner]])]),(0,i._)("div",null,[(0,i._)("button",{onClick:n[5]||(n[5]=(...e)=>l.balanceOf&&l.balanceOf(...e))},"call")]),null!=r.balanceOf_result?((0,i.wg)(),(0,i.iD)("div",v," balanceOf : "+(0,s.zw)(r.balanceOf_result),1)):(0,i.kq)("",!0)]),(0,i._)("div",null,[_,(0,i._)("div",null,[T,(0,i.wy)((0,i._)("input",{type:"text",placeholder:"to","onUpdate:modelValue":n[6]||(n[6]=e=>r.mint_to=e)},null,512),[[a.nr,r.mint_to]])]),(0,i._)("div",null,[g,(0,i.wy)((0,i._)("input",{type:"text",placeholder:"tokenId","onUpdate:modelValue":n[7]||(n[7]=e=>r.mint_tokenId=e)},null,512),[[a.nr,r.mint_tokenId]])]),(0,i._)("div",null,[k,(0,i.wy)((0,i._)("input",{type:"text",placeholder:"uri","onUpdate:modelValue":n[8]||(n[8]=e=>r.mint_uri=e)},null,512),[[a.nr,r.mint_uri]])]),(0,i._)("div",null,[(0,i._)("button",{onClick:n[9]||(n[9]=(...e)=>l.mint&&l.mint(...e))},"call")]),null!=r.mint_result?((0,i.wg)(),(0,i.iD)("div",h," mint : "+(0,s.zw)(r.mint_result),1)):(0,i.kq)("",!0)])]))]))])):((0,i.wg)(),(0,i.iD)("div",O," 메타 마스크 설치안됨 "))])}var I=t(6141),x=t(6796),C=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"inputs":[{"internalType":"address","name":"approved","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"uri","type":"string"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"uri","type":"string"}],"name":"setTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"_name","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"_symbol","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenSymbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]'),A={name:"HelloWorld",props:{msg:String},data(){return{isInstallMetaMask:null!=window.ethereum&&1==window.ethereum.isMetaMask,myAddress:null,myContract:null,ownerOf_tokenId:null,ownerOf_result:null,balanceOf_owner:null,balanceOf_result:null,mint_to:null,mint_tokenId:null,mint_uri:null,mint_result:null}},methods:{async connectToMetaMask(){console.log("click connectToMetaMask");var e=await window.ethereum.request({method:"eth_requestAccounts"});console.log(e),e.length>0&&(this.myAddress=e[0])},connectToContract(){console.log("click connectToContract");var e="0x2fbcd49a8ed083b338abd8a5dfe321b5faeb27d3",n=new I.Q(window.ethereum),t=n.getSigner();this.myContract=new x.CH(e,C,t),console.log(this.myContract)},async requestOwnerOf(){console.log("click requestOwnerof"),console.log(this.ownerOf_tokenId),this.ownerOf_result=await this.myContract.ownerOf(this.ownerOf_tokenId),console.log(this.ownerOf_result)},async balanceOf(){console.log("balanceOf 호출");var e=await this.connectedContract.balanceOf(this.balanceOf_owner);console.log(e),this.balanceOf_result=e},async mint(){console.log("mint 호출");try{var e=await this.connectedContract.mint(this.mint_to,this.mint_tokenId,this.mint_uri);console.log(e),this.mint_result="생성 대기중",await e.wait(),this.mint_result=e}catch(n){console.log(n),this.mint_result=n}}}},D=t(89);const q=(0,D.Z)(A,[["render",M],["__scopeId","data-v-15711024"]]);var j=q,F={name:"App",components:{HelloWorld:j}};const U=(0,D.Z)(F,[["render",l]]);var V=U;(0,a.ri)(V).mount("#app")},6601:function(){}},n={};function t(a){var i=n[a];if(void 0!==i)return i.exports;var o=n[a]={id:a,loaded:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,a,i,o){if(!a){var r=1/0;for(p=0;p<e.length;p++){a=e[p][0],i=e[p][1],o=e[p][2];for(var l=!0,s=0;s<a.length;s++)(!1&o||r>=o)&&Object.keys(t.O).every((function(e){return t.O[e](a[s])}))?a.splice(s--,1):(l=!1,o<r&&(r=o));if(l){e.splice(p--,1);var u=i();void 0!==u&&(n=u)}}return n}o=o||0;for(var p=e.length;p>0&&e[p-1][2]>o;p--)e[p]=e[p-1];e[p]=[a,i,o]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/"}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,a){var i,o,r=a[0],l=a[1],s=a[2],u=0;if(r.some((function(n){return 0!==e[n]}))){for(i in l)t.o(l,i)&&(t.m[i]=l[i]);if(s)var p=s(t)}for(n&&n(a);u<r.length;u++)o=r[u],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(p)},a=self["webpackChunkfront"]=self["webpackChunkfront"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(5894)}));a=t.O(a)})();
//# sourceMappingURL=app.9d25d862.js.map