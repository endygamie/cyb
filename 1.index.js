(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{5331:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),l=a(768),r=a.n(l),i=a(1),s=a(7),c=a(108),d=a(475),h=a(4),p=a(3);const m=(e,t)=>[{mode:"line",x:d.c,y:d.b,opacity:.45,line:{width:2,opacity:1,color:"#fff"},hovertemplate:`Price: %{y:.2f%} ETH/GCYB<br>Tokens claimed: %{x} GCYB<br>Cap: ${e} ETH<extra></extra>`},{type:"scatter",mode:"lines",line:{color:"#36d6ae",width:3},x:t.x,y:t.y,hovertemplate:`Price: %{y:.2f%} ETH/GCYB<br>Tokens claimed: %{x} GCYB<br>Cap: ${e} ETH<extra></extra>`}],f=(e,t,a,o)=>({bargap:0,paper_bgcolor:"#000",plot_bgcolor:"#000",showlegend:!1,hovermode:"closest",hoverlabel:{bgcolor:"#000",font:{color:"#fff"}},yaxis:{autotick:!0,fixedrange:!0,title:{text:"Price, ETH/GCYB"},tickfont:{color:"#36d6ae"},titlefont:{size:e},gridcolor:"#ffffff66",color:"#fff",zerolinecolor:"#dedede"},xaxis:{autotick:!0,fixedrange:!0,title:{text:"Tokens claimed, GCYB"},titlefont:{size:e},tickfont:{color:"#36d6ae"},gridcolor:"#ffffff66",color:"#fff",zerolinecolor:"#dedede"},width:t,height:a,margin:o}),g={displayModeBar:!1,scrollZoom:!1,showSendToCloud:!0};var x=a(2),u=a(2126),b=a.n(u),E=Object.defineProperty,y=(e,t,a)=>(((e,t,a)=>{t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!=typeof t?t+"":t,a),a);const w=({data:e})=>{const[t,a]=Object(o.useState)(30),l=Object(o.useCallback)((()=>{setTimeout((()=>{a(t+10)}),50)}),[t,a]),r=Object(o.useMemo)((()=>e.slice(0,t)),[t]),d=r.map((e=>n.a.createElement(i.Pane,{key:e.eth_txhash,display:"flex",paddingX:20,paddingY:20,alignItems:"center",borderBottom:"1px solid #3ab79375",marginBottom:10},n.a.createElement(i.Pane,{fontSize:"18px",display:"flex",flex:1},n.a.createElement(x.E,{to:`http://etherscan.io/address/${e.sender}`},n.a.createElement(i.Pane,{marginRight:10},Object(p.u)(e.sender,8,5))),n.a.createElement(i.Pane,null,"bought")),null===e.eul?n.a.createElement(i.Pane,{color:"#FFF",fontSize:"18px",marginX:5},"PROCESSING"):n.a.createElement(i.Pane,{color:"#00e676",display:"flex",fontSize:"18px",marginX:5},"+",n.a.createElement(x.w,{marginLeft:3,number:Object(p.j)(Math.floor(e.eul/h.CYBER.DIVISOR_CYBER_G*1e3)/1e3,3),currency:"GCYB",fontSizeDecimal:16})),null!==e.cyber_hash&&n.a.createElement(i.Pane,null,n.a.createElement(x.Z,{placement:"top",tooltip:"Proof Tx"},n.a.createElement(s.a,{style:{display:"flex"},to:`/network/bostrom/tx/${e.cyber_hash.toUpperCase()}`},n.a.createElement("img",{src:b.a,alt:"img",style:{width:"20px",height:"20px"}})))))));return n.a.createElement(c.a,{dataLength:Object.keys(r).length,next:l,hasMore:t<e.length,loader:n.a.createElement("h4",null,"Loading",n.a.createElement(x.v,null)),pullDownToRefresh:!0,pullDownToRefreshContent:n.a.createElement("h3",{style:{textAlign:"center"}},"↓ Pull down to refresh"),releaseToRefreshContent:n.a.createElement("h3",{style:{textAlign:"center"}},"↑ Release to refresh"),refreshFunction:l},e.length>0?d:n.a.createElement("div",null,"No txs"))};class C extends o.Component{constructor(e){super(e),y(this,"plotlyHover",(e=>{const{cap:t}=this.props;try{if(e.points[0])if(-1!==d.c.indexOf(e.points[0].x)){const t=d.a[d.c.indexOf(e.points[0].x)];this.setState({caps:Object(p.j)(t)})}else this.setState({caps:Object(p.j)(t)})}catch(e){this.setState({caps:Object(p.j)(t)})}})),y(this,"plotUnhover",(()=>{this.setState({caps:""})})),this.state={caps:"",width:890,height:350,size:16,margin:{l:40,r:20,b:40,t:10,pad:4}}}componentDidMount(){const{mobile:e}=this.props;e&&this.setState({width:360,height:250,size:14,margin:{l:30,r:8,b:35,t:0,pad:2}})}render(){const{caps:e,width:t,height:a,size:o,margin:l}=this.state,{data3d:s,dataTxs:c}=this.props;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container-dinamics"},n.a.createElement(r.a,{data:m(e,s),layout:f(o,t,a,l),onHover:e=>this.plotlyHover(e),onUnhover:e=>this.plotUnhover(e),config:g})),!c.loading&&c.data.length>0&&n.a.createElement(i.Pane,{marginTop:15},n.a.createElement(w,{data:c.data})))}}t.default=C}}]);