import React, { Component } from 'react'

import ParticlesBg from 'particles-bg'

class Background extends Component {
    render () {
      let config = {
          num: [4, 7],
          rps: 0.1,
          radius: [5, 20],
          life: [1.5, 3],
          v: [1, 1],
          tha: [-40, 40],
          // body: "./img/icon.png", // Whether to render pictures
          // rotate: [0, 20],
          alpha: [0.6, 0],
          scale: [1, 0.1],
          position: "all", // all or center or {x:1,y:1,width:100,height:100}
          color: ["random", "#ff0000"],
          cross: "dead", // cross or bround
          random: 15,  // or null,
          g: 1,    // gravity
          // f: [2, -1], // force
          onParticleUpdate: (ctx, particle) => {
              ctx.beginPath();
              ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
              ctx.fillStyle = particle.color;
              ctx.fill();
              ctx.closePath();
          }
        };
    return (
      <>
        <div>...</div>
        <ParticlesBg type="square" num={10} config={config} bg={{
            backgroundColor: "black",
            position: "absolute",
            height: "200vh"
            }} />
      </>
    )
  }
}

export default Background;


// Different Options
// "color"
// "ball"
// "lines"
// "thick"
// "circle"
// "cobweb"
// "polygon"
// "square"
// "tadpole"
// "fountain"
// "random"
// "custom"