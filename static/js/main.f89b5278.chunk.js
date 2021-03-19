(this["webpackJsonpmagic-maze"]=this["webpackJsonpmagic-maze"]||[]).push([[0],{67:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(28),i=a.n(s),o=a(15),c=(a(67),a(68),a(86)),l=a(87),h=a(88),d=a(33),u=a(91),j=a(90),b=a(2),y=a.n(b),p=a(7),v=a(85),m=a(89),f=a(1),O=new d.a({id:"application-0-exwhb"});function x(e){var t=e.setUser,a=function(){var e=Object(p.a)(y.a.mark((function e(){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.logIn(d.b.anonymous());case 3:a=e.sent,t(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("Failed to connect");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)("a",{href:"#",onClick:a,children:"login as guest"})}function g(e){var t=e.email,a=e.password,r=function(){var e=Object(p.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.emailPasswordAuth.registerUser(t,a);case 3:alert("A confirmation mail has been sent to the mailbox."),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert("Invalid email or password");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)(v.a,{variant:"secondary",onClick:r,children:"Register"})}function k(e){var t=e.setUser,a=e.email,r=e.password,n=function(){var e=Object(p.a)(y.a.mark((function e(){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.logIn(d.b.emailPassword(a,r));case 3:n=e.sent,t(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("Invalid email or password");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)(v.a,{variant:"secondary",onClick:n,children:"Login"})}function M(e){var t=e.setUser,a=function(){var e=Object(p.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.currentUser.logOut();case 3:t(null),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert("Failed to connect");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)(v.a,{size:"lg",variant:"secondary",onClick:a,children:"Log out"})}function P(e){var t=e.setUser,a=n.a.useState("Login"),r=Object(o.a)(a,2),s=r[0],i=r[1],c=n.a.useState(""),l=Object(o.a)(c,2),h=l[0],d=l[1],u=n.a.useState(""),j=Object(o.a)(u,2),b=j[0],y=j[1],p=n.a.useState(""),v=Object(o.a)(p,2),m=v[0],O=v[1];return n.a.useEffect((function(){d(""),y(""),O("")}),[s]),Object(f.jsxs)("div",{className:"login_form",children:["Register"===s?Object(f.jsx)("input",{type:"username",placeholder:"username",value:h,onChange:function(e){return d(e.target.value)},className:"form_input"}):Object(f.jsx)(f.Fragment,{}),Object(f.jsx)("input",{type:"email",placeholder:"email",value:b,onChange:function(e){return y(e.target.value)},className:"form_input"}),Object(f.jsx)("input",{type:"password",placeholder:"password",value:m,onChange:function(e){return O(e.target.value)},className:"form_input"}),"Login"===s?Object(f.jsx)(k,{setUser:t,email:b,password:m}):Object(f.jsx)(g,{email:b,password:m}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"You may also "}),Object(f.jsx)("a",{href:"#",onClick:function(){i((function(e){return"Login"===e?"Register":"Login"}))},children:"Login"===s?"register a new account":"go to login"}),Object(f.jsx)("span",{children:" or "}),Object(f.jsx)(x,{setUser:t})]})]})}function w(e){var t=e.setUser,a=n.a.useState(!1),r=Object(o.a)(a,2),s=r[0],i=r[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)(v.a,{size:"lg",variant:"secondary",onClick:function(){return i(!0)},children:"Login"}),Object(f.jsxs)(m.a,{show:s,onHide:function(){return i(!1)},children:[Object(f.jsx)(m.a.Header,{closeButton:!0,children:Object(f.jsx)(m.a.Title,{children:"Join us!"})}),Object(f.jsx)(m.a.Body,{children:Object(f.jsx)(P,{setUser:t})})]})]})}function _(e){var t=e.user,a=e.setUser;return Object(f.jsx)("div",{children:Object(f.jsxs)(u.a,{className:"py-4",bg:"dark",variant:"dark",children:[Object(f.jsx)(u.a.Brand,{href:"https://github.com/luyou00001/CSCI-3100-Project-E3\t",children:"Magic Maze"}),Object(f.jsx)(j.a,{children:Object(f.jsx)(u.a.Text,{children:"\u2022 A game created by CSCI3100 Project Group E3"})}),Object(f.jsx)(j.a,{className:"ml-auto",children:t?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(u.a.Text,{children:["Your id: ",t.id]}),Object(f.jsx)(j.a.Link,{href:"#home",children:Object(f.jsx)(M,{setUser:a})})]}):Object(f.jsx)(j.a.Link,{href:"#home",children:Object(f.jsx)(w,{setUser:a})})})]})})}var C=a(8),S=a(10),H=a(13),W=a(14),K=function(e){Object(H.a)(a,e);var t=Object(W.a)(a);function a(){return Object(C.a)(this,a),t.apply(this,arguments)}return Object(S.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"chat_room",children:Object(f.jsx)("h1",{children:"Chat room"})})}}]),a}(n.a.Component),N=a(12),U=a(61);a.n(U).a.start();var E=function(e){Object(H.a)(a,e);var t=Object(W.a)(a);function a(e){var r;return Object(C.a)(this,a),(r=t.call(this,e)).state={board:[],entityStates:{entrance:"\u256c",empty:"\u3000",player:"\u2642"}},r.setPlayerPosition=r.setPlayerPosition.bind(Object(N.a)(r)),r.setBoard=r.setBoard.bind(Object(N.a)(r)),r}return Object(S.a)(a,[{key:"componentWillMount",value:function(){for(var e=this,t=this.props,a=t.boardHeight,r=t.boardWidth,n=t.areaHeight,s=t.areaWidth,i=t.playerPosition,o=[],c=0;c<a;c++){for(var l=[],h=0;h<r;h++){for(var d=[],u=0;u<n;u++){for(var j=[],b=0;b<s;b++)0===b&&0===u||b===s-1&&0===u||b===s-1&&u===n-1||0===b&&u===n-1?j.push(this.state.entityStates.entrance):i.x===h*s+b&&i.y===c*n+u?j.push(this.state.entityStates.player):j.push(this.state.entityStates.empty);d.push(j)}l.push(d)}o.push(l)}this.setState({board:o,areaHeight:n,areaWidth:s,playerPosition:i},(function(){e.setPlayerPosition(i)}))}},{key:"setPlayerPosition",value:function(e){var t=this.state,a=t.board,r=t.areaHeight,n=t.areaWidth,s=e.x,i=e.y;a[Math.floor(i/r)][Math.floor(s/n)][i%r][s%n]=this.state.entityStates.player,this.setState({board:a})}},{key:"componentWillReceiveProps",value:function(e){e===this.props||this.setBoard(e)}},{key:"setBoard",value:function(e){var t=this,a=e.playerPosition,r=e.prevPlayerPos,n=e.areaHeight,s=e.areaWidth,i=this.state.board,o=r.x,c=r.y,l=a.x,h=a.y;i[Math.floor(c/n)][Math.floor(o/s)][c%n][o%s]=this.state.entityStates.empty,i[Math.floor(h/n)][Math.floor(l/s)][h%n][l%s]=this.state.entityStates.player,this.setState({board:i,playerPosition:a},(function(){t.setPlayerPosition(a)}))}},{key:"render",value:function(){var e=this.state.board;return console.log(e),Object(f.jsx)("div",{children:e.map((function(e,t){return Object(f.jsx)("tr",{children:e.map((function(e,a){var r="blue",n="yellow";return(t+a)%2==0&&(r="yellow",n="blue"),Object(f.jsx)("td",{style:{textAlign:"center",verticalAlign:"middle",backgroundColor:n,color:r},children:Object(f.jsx)("table",{className:"area",cellSpacing:"0",id:"table",border:"3px",width:"100",height:"100",textAlign:"center",children:Object(f.jsx)("tbody",{children:e.map((function(e){return Object(f.jsx)("tr",{children:e.map((function(e){return Object(f.jsx)("td",{className:"area",children:e})}))})}))})})})}))})}))})}}]),a}(r.Component),B=(a(81),a(24)),L=function(e){Object(H.a)(a,e);var t=Object(W.a)(a);function a(e){var r;return Object(C.a)(this,a),(r=t.call(this,e)).state={win:!1,showGameBoard:!1,boardHeight:0,boardWidth:0,areaHeight:0,areaWidth:0,randomEntrances:[],randomPositions:[],playerPosition:{x:0,y:0},prevPlayerPos:{x:0,y:0},totalMoves:0},r.initializeBoardPlayer=r.initializeBoardPlayer.bind(Object(N.a)(r)),r.startGame=r.startGame.bind(Object(N.a)(r)),r.setEntrances=r.setEntrances.bind(Object(N.a)(r)),r.countTotalMoves=r.countTotalMoves.bind(Object(N.a)(r)),r.handleKeyUp=r.handleKeyUp.bind(Object(N.a)(r)),r.handleKeyDown=r.handleKeyDown.bind(Object(N.a)(r)),r.handleKeyRight=r.handleKeyRight.bind(Object(N.a)(r)),r.handleKeyLeft=r.handleKeyLeft.bind(Object(N.a)(r)),r.makeMove=r.makeMove.bind(Object(N.a)(r)),r}return Object(S.a)(a,[{key:"componentWillMount",value:function(){this.initializeBoardPlayer()}},{key:"initializeBoardPlayer",value:function(){var e=this,t={x:Math.floor(2.5),y:Math.floor(2.5)},a={x:Math.floor(2.5),y:Math.floor(2.5)};this.setState({boardHeight:5,boardWidth:5,areaWidth:5,areaHeight:5,playerPosition:t,prevPlayerPos:a,showGameBoard:!0},(function(){e.startGame()}))}},{key:"startGame",value:function(){this.setEntrances()}},{key:"setEntrances",value:function(){for(var e,t=this.state,a=t.randomEntrances,r=t.boardHeight,n=t.boardWidth,s=0;s<r;s++)for(var i=0;i<n;i++){a.push([]);for(var o=[[1,-1],[1,0],[0,1],[-1,1]],c=4;c>0;){var l=i+o[e=Math.floor(Math.random()*c)][0],h=s+o[e][1];l<0||l>=r||h<0||h>=r?(a[i+s*n].push([]),a[i+s*n][4-c].push(i),a[i+s*n][4-c].push(s)):(a[i+s*n].push([]),a[i+s*n][4-c].push(l),a[i+s*n][4-c].push(h)),c--,o.splice(e,1)}}this.setState({randomEntrances:a})}},{key:"countTotalMoves",value:function(){this.setState({totalMoves:++this.state.totalMoves})}},{key:"handleKeyUp",value:function(e){e.preventDefault();var t=this.state,a=t.playerPosition,r=t.areaHeight;Number(a.y)%r-1>=0&&this.makeMove(a.x,a.y-1)}},{key:"handleKeyDown",value:function(e){e.preventDefault();var t=this.state,a=t.playerPosition,r=t.areaHeight;Number(a.y)%r+1<r&&this.makeMove(a.x,a.y+1)}},{key:"handleKeyRight",value:function(e){e.preventDefault();var t=this.state,a=t.playerPosition,r=t.areaWidth;Number(a.x)%r+1<r&&this.makeMove(a.x+1,a.y)}},{key:"handleKeyLeft",value:function(e){e.preventDefault();var t=this.state,a=t.playerPosition,r=t.areaWidth;Number(a.x)%r-1>=0&&this.makeMove(a.x-1,a.y)}},{key:"makeMove",value:function(e,t){var a=this.state,r=a.playerPosition,n=a.randomEntrances,s=a.boardHeight,i=a.boardWidth,o=a.areaWidth,c=a.areaHeight,l=a.win,h={x:r.x,y:r.y},d=e%o,u=t%c;if(0===d&&0===u||d===o-1&&0===u||d===o-1&&u===c-1||0===d&&u===c-1){var j;j=0===d&&0===u?0:d===o-1&&0===u?1:d===o-1&&u===c-1?2:3;var b=Math.floor(e/o),y=Math.floor(t/c),p=n[b+y*i][j][0]*o+Math.floor(o/2),v=n[b+y*i][j][1]*c+Math.floor(c/2);r.x=p,r.y=v,Math.floor(p/o)===i-1&&Math.floor(v/c)===s-1&&(l=!0)}else r.x=e,r.y=t;this.setState({playerPosition:r,prevPlayerPos:h,win:l}),this.countTotalMoves()}},{key:"render",value:function(){var e=this.state,t=e.playerPosition,a=e.randomEntrances,r=e.boardWidth,n=e.areaWidth,s=e.areaHeight,i=e.totalMoves,o=e.win,c="*GM Mode* Coordinates: ("+t.x+", "+t.y+") ",l=Math.floor(t.x/n)+Math.floor(t.y/s)*r;if(c+="Entrance: ",a[l])for(var h=0;h<4;h++)c+="("+a[l][h][0]+", "+a[l][h][1]+") ";return o&&(o=!1,alert("You win! Total moves: "+i)),Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"status",children:c}),Object(f.jsx)(B.b,{keyEventName:B.a,keyValue:"ArrowUp",onKeyHandle:this.handleKeyUp}),Object(f.jsx)(B.b,{keyEventName:B.a,keyValue:"ArrowDown",onKeyHandle:this.handleKeyDown}),Object(f.jsx)(B.b,{keyEventName:B.a,keyValue:"ArrowRight",onKeyHandle:this.handleKeyRight}),Object(f.jsx)(B.b,{keyEventName:B.a,keyValue:"ArrowLeft",onKeyHandle:this.handleKeyLeft}),this.state.showGameBoard&&Object(f.jsx)(E,{randomPositions:this.state.randomPositions,boardWidth:this.state.boardWidth,boardHeight:this.state.boardHeight,areaWidth:this.state.areaWidth,areaHeight:this.state.areaHeight,playerPosition:this.state.playerPosition,prevPlayerPos:this.state.prevPlayerPos,totalMoves:this.state.totalMoves})," "]})}}]),a}(r.Component),A=function(e){Object(H.a)(a,e);var t=Object(W.a)(a);function a(){return Object(C.a)(this,a),t.apply(this,arguments)}return Object(S.a)(a,[{key:"render",value:function(){var e="Ready";return this.props.isready&&(e="Cancel"),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:this.props.playername}),Object(f.jsx)("td",{children:Object(f.jsx)("button",{onClick:this.props.handleready,children:e})})]})}}]),a}(r.Component),D=function(e){Object(H.a)(a,e);var t=Object(W.a)(a);function a(e){var r;return Object(C.a)(this,a),(r=t.call(this,e)).state={room_name:r.props.roomname,player_list:r.props.player_list,player_num:r.props.player_num,ready_num:0,ready_state:Array(4).fill(!1)},r.addready=r.addready.bind(Object(N.a)(r)),r.minusready=r.minusready.bind(Object(N.a)(r)),r}return Object(S.a)(a,[{key:"addready",value:function(e){var t=this.state.ready_state;t[e]=!0;var a=this.state.ready_num+1;this.setState({ready_num:a,ready_state:t})}},{key:"minusready",value:function(e){var t=this.state.ready_state;t[e]=!1;var a=this.state.ready_num-1;a<0||this.setState({ready_num:a,ready_state:t})}},{key:"render",value:function(){for(var e=this,t=[0,0,0,0],a=function(a){e.state.ready_state[a]?t[a]=function(){return e.minusready(a)}:t[a]=function(){return e.addready(a)}},r=0;r<4;r++)a(r);return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:this.props.room_name}),Object(f.jsxs)("table",{children:[Object(f.jsx)(A,{isready:this.state.ready_state[0],playername:this.props.player_list[0],handleready:t[0]}),Object(f.jsx)(A,{isready:this.state.ready_state[1],playername:this.props.player_list[1],handleready:t[1]}),Object(f.jsx)(A,{isready:this.state.ready_state[2],playername:this.props.player_list[2],handleready:t[2]}),Object(f.jsx)(A,{isready:this.state.ready_state[3],playername:this.props.player_list[3],handleready:t[3]})]}),Object(f.jsxs)("h2",{children:["Number of ready: ",this.state.ready_num]})]})}}]),a}(r.Component);function R(e){var t=e.setMode;return Object(f.jsx)(v.a,{size:"lg",variant:"primary",onClick:function(){t("Demo")},children:"Demo"})}function z(e){var t=e.setMode;return Object(f.jsx)(v.a,{size:"lg",variant:"primary",onClick:function(){t("CustomRoom")},children:"Custom room"})}var G=function(e){Object(H.a)(a,e);var t=Object(W.a)(a);function a(e){var r;return Object(C.a)(this,a),(r=t.call(this,e)).state={mode:""},r.setMode=r.setMode.bind(Object(N.a)(r)),r}return Object(S.a)(a,[{key:"setMode",value:function(e){this.setState({mode:e})}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"menu",children:[Object(f.jsx)("h1",{children:"Menu"}),Object(f.jsx)(R,{setMode:this.setMode}),Object(f.jsx)(z,{setMode:this.setMode}),"Demo"===this.state.mode?Object(f.jsx)(L,{}):Object(f.jsx)(f.Fragment,{}),"CustomRoom"===this.state.mode?Object(f.jsx)(D,{room_name:"Game1",player_list:["Paul","Alice","Sun","Jason"],player_num:4}):Object(f.jsx)(f.Fragment,{})]})}}]),a}(n.a.Component),T=new d.a({id:"application-0-exwhb"});var I=function(){var e=n.a.useState(T.currentUser),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)(_,{user:a,setUser:r}),Object(f.jsx)(c.a,{fluid:!0,children:Object(f.jsxs)(l.a,{children:[Object(f.jsx)(h.a,{children:Object(f.jsx)(K,{})}),Object(f.jsx)(h.a,{children:Object(f.jsx)(G,{})})]})})]})};i.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(I,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.f89b5278.chunk.js.map