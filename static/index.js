$(document).ready(function(){
var n = 999,
    speed = 3,
    wind = 500,
    windVariance = 1.5;

var c = document.getElementById("c"),
    ctx = c.getContext("2d"),
    cw = (c.width = window.innerWidth),
    ch = (c.height = window.innerHeight),
    img = new Image(64,64),
    particles = [],
    particleNumber = 0,
    Particle = function(index) {
      this.size = rand(5, 10);
      this.dur = (15-this.size)/speed;
      this.alpha = rand(0.25, 0.75);
      if (index<n/100) {
        this.size = rand(150,200);
        this.dur = this.dur/4;
        this.alpha = this.alpha/3.3;
      }
      else if (index<n/10) {
        this.size = rand(19,33);
        this.dur = this.dur/2.5;
        this.alpha = this.alpha/1.5;
      }
      var rot = -rand(3,5); 
      if (index%4==0) rot= -rot;
      this.draw = function() {
        ctx.translate( this.x, this.y );
        ctx.rotate(rot*this.progress);
        ctx.globalAlpha = this.alpha;
        ctx.drawImage(img, -this.size/2, -this.size/2, this.size, this.size);
        ctx.rotate(-rot*this.progress);
        ctx.translate( -this.x, -this.y );
      }
    };


function setParticle(p) {
  particleNumber++;
  var _tl = new TimelineMax()
            .fromTo(p, p.dur, {
                x:rand(-Math.abs(wind), (cw + Math.abs(wind))),
                y:-p.size,
                progress:0
            },{
                x:'+='+String( rand(wind/windVariance, wind*windVariance)), 
                y:ch+p.size,
                progress:1,              
                ease:Power0.easeNone,
                onComplete:function(){ setParticle(p); }
            });
  if (particleNumber<n) _tl.seek(p.dur*rand());
}


// First run
for (var i=0; i<n; i++) {
    particles.push(new Particle(i));
    setParticle(particles[i]);      
}

TweenMax.ticker.addEventListener("tick", function(){
  ctx.clearRect(0, 0, cw, ch);
  for (var i=0; i<n; i++) {
      particles[i].draw();
  }
});


window.addEventListener('resize', function() {
  particleNumber = 0;  
  cw = (c.width = window.innerWidth);
  ch = (c.height = window.innerHeight);
  for (var i=0; i<n; i++) {
    TweenMax.killTweensOf(particles[i]);
    setParticle(particles[i]);
  }
});


function rand(min=0, max=1) {
  return min + (max-min)*Math.random();
}


img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAulBMVEVHcEz////+/v7////+/v79/f3////x8fH9/f3+/v7+/v7////+/v7////////////////////////////////////////////////+/v7///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+MnUWcAAAAPnRSTlMACQ4GBAoWAQMCDRMQJSIfOlQICxgdSkFyG09hXDcrKUeMLZKgsmmnPoIaL2aHWH4xbaw0d0S8wXu3m5cymMmy7QsAAAVDSURBVHgBzZd3g6JKEMQP99BbzoSYs5jFHDbq9/9ar6qb4aHLxr+uX7jYP6pqmKHn179VGa37sDLyO1/u/aW9f1C/tfAzYr4GYa+23sVLMF9h8OFhd6lkWZZt2/h/qSQMCvmEQNt/+ES0eg4qlUo5KcfxPMvib3+KwOPZz+5UNpv9GxZ+CggZnyDon+JtL4XudDpdDitNCBCwEmbxTgBID97xeHSXF41KQapSqTTKZTBSjk3E72SCAJCe5aXwdHbnc6by+UJlAR1AeEZFAgL9EOA57K8Ucrle1/cDlu/3cjkwFGFzSeTNeBsB+m3tz+d6fnA+dIqszuEc+D0gGjSS9ZAmjdz/yrwFiIEy+wN0z2a12ulUq81mxc6ZCBgBwrETfWS4BBYFNPK57hbtp361Wm028b/+qWYQDfrwiKCPWwATSC8KeH6nWOtXm67rrtdr1wWlbxANRqEiqOEWkKKAnn9gv+u22y2pdttVROAzChFhqYbMdQSOJNDbdmb9prtut5aTyW63myyXLUHMioeAPpCEEO6o4RYAB91z8VR112jf1etHVL2+A2LdrJ5mRfgAIa0EJhkH2BqBLwLay139+LTZzOfzzdNREC59HEJC1ivRxK0CRhAQsG5Ndsen+Wo1GAxWKzCIgIiIIEn+ZgoJgFpVBKB/MJQaAHGsT1prVwg5SdKhiY8Axw36X19Yr0RAhBLOXRAogSuRiS8jQ8znQgAEDIaXEWo6GhGhhCZy2NIEcyQgc/0elAshYCKAl9F0ut/vp9PRCwlw4Tb7M5pYpNVDBMhEAN8AVoPXEdrHqD0IryDsllgLlYClZIyxEO6wjgyhe5j1xcJqCAD6n5+fx2PVcKSJU/HQzf3v4Wo3Sop4kZrr5Q4WXgh4fnh4AGIPwuqpTgmzDj0o4P4a4EQhtHbH+eACAPofH4GAhldKQArigesQBzAEXcgcPTAEhDiajp/RTwJyEAni4cwQuJBXAB5pXMheIB4YwgssAIASCcPBhh6wDt1bAD2Q4PxNV3K+8YAQmEEEeAVg8iHgDhIQ41YlbFYxD2EIBpB7A5AvCyWUIwlPRkIsxbgCz7oGyLnopcxKtkMJJLA/buGcAIjtqHgKF32X0B+9CM0+VsEA9FWOr4SHU8VI4EKQAAQ2BB086asY9Pgi2SXZC/GiBLMQ3BDHDQmjKYvv8oYvUrXWCXKFchKAO6IUe59pAjviZYRiPx0wgo7PveDEt0L8aNQ9qVsKK8Fj5XK58FChgDUiQIaNhAz1ZVAPfBd0V/Ng4sk2YH892s4EwMEtQHc1Pw/YETShZ+t8hQqPxaY4YAQez0TT+OZ01uMdBDnecb4/PbE/dp6YvZjgwYOE6Hxv8wPD2u3YHwpIdhDf1QuYOHdq/Ma18JFCLVvSTwFcg6wNB8mTin5l9SMnX+l1u43mdnvNfp5nZismAbgpS3ZsUCCi6bKa8nXsBL08IqSDhAjMsWBzVCEhOBRnNc4aMmic5APNBLAGpUQBGiNnDRIwbPhnjEpm2MHAFIiBv3oWJANEg+V50by1PRw6HLg6ncPWlwFBBHwMgAtOnGUOjDLxbbfbANOaGZQcAmjhI4IOnUCAIaUD4yKacbgTk1PQsddCEBx7G2Tk0YyZlXMvB072y1ZOJpjB23IgAkbKjUajwlpczbz3H96b7nnzsGwgyDClk7stApjhBwhzfdD7gyk+nZP/Z/3GB0RQhm17nqPl2XZJp+XPAGY9yOAdSquEbrZzRPwKgCrkHkaMFrvjd5/PEfFrJJvNRfK7d1lzk9X6+ZWY19t/sP4DoePqp9agWnMAAAAASUVORK5CYII=";
});