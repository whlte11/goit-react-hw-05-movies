"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{311:function(e,t,n){function r(e){return fetch(e,{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDhlY2Y3NDVmNWJiZTUwZmM2NDhjMDg1OWZhMTcwMSIsInN1YiI6IjY0ODhjMTU2ZDJiMjA5MDBjYTIxNzA5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4vxGV4kBszJbv90PYcnQ1DUyBmnKxmAR_P1khjcXgUk"}}).then((function(e){return e.json()}))}n.d(t,{v:function(){return r}})},247:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});var r=n(439),c=n(791),i=n(689),h=n(311),o=n(184);function a(){var e=(0,i.UO)().movieId,t=(0,c.useState)(""),n=(0,r.Z)(t,2),a=n[0],u=n[1];return(0,c.useEffect)((function(){var t="https://api.themoviedb.org/3/movie/".concat(e,"/credits?language=en-US");(0,h.v)(t).then((function(e){u(e)})).catch((function(e){return console.error("error:"+e)}))}),[e]),a&&(0,o.jsx)("ul",{children:a.cast.map((function(e){return(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{width:"100px",height:"150px",src:"https://image.tmdb.org/t/p/original/".concat(e.profile_path),alt:e.name}),(0,o.jsx)("h3",{children:e.name}),(0,o.jsx)("p",{children:e.character})]},e.id)}))})}}}]);
//# sourceMappingURL=247.784c6415.chunk.js.map