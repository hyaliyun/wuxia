import{_ as r,B as i,o as e,c as n,b as s,q as o}from"./chunks/framework.B_10QUfm.js";const p={name:"JupiterTokenSwap",setup(){i(()=>{const a=document.createElement("script");a.src="https://terminal.jup.ag/main-v2.js",a.onload=()=>t(),document.head.appendChild(a)});function t(){window.Jupiter?window.Jupiter.init({displayMode:"integrated",integratedTargetId:"integrated-terminal",endpoint:"https://mainnet.helius-rpc.com/?api-key=a2fd82f0-2d15-4ba4-adff-1fb90ca096ba",strictTokenList:!1,defaultExplorer:"SolanaFM",formProps:{initialAmount:"1",initialInputMint:"So11111111111111111111111111111111111111112",initialOutputMint:"FvWxbAxMTrYVNVrvUusjNNSLFd55CwATZ2dYnUWy4XYU"}}):console.error("Jupiter script not loaded yet")}return{}}},c={class:"margin-vert--lg"};function l(t,a,d,_,f,v){return e(),n("main",c,a[0]||(a[0]=[s('<section class="margin-top--lg margin-bottom--lg text--center" data-v-7d8aa13d><div class="PartnerHero" data-v-7d8aa13d><h1 class="title" data-v-7d8aa13d>Token Exchange</h1><p class="lead" data-v-7d8aa13d>People are exchanging tokens built on Solana</p><a class="formButton" href="https://token-creator-fix.vercel.app/" target="_blank" data-v-7d8aa13d> 🙏 Please redeem your tokens </a></div><div class="body" data-v-7d8aa13d><div id="integrated-terminal" data-v-7d8aa13d></div></div></section>',1)]))}const u=r(p,[["render",l],["__scopeId","data-v-7d8aa13d"]]),h=JSON.parse('{"title":"","description":"","frontmatter":{"page":true},"headers":[],"relativePath":"swap/app.md","filePath":"swap/app.md"}'),m={name:"swap/app.md"},x=Object.assign(m,{setup(t){return(a,d)=>(e(),n("div",null,[o(u)]))}});export{h as __pageData,x as default};