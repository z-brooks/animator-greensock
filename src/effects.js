import 'greensock';

let extendedEffects = new Map([
                    ['reset-rot', { set: { transformOrigin: 'center center', rotationX: 0, rotationY: 0, rotationZ: 0 }}],
                    ['reset-pos', { set: { x: 0, y: 0, z: 0 }}],
                    ['reset-vis', { set: { opacity: 1 }}],
                    ['reset-all', { set: { x: 0, y: 0, z: 0, rotation: 0, rotationZ: 0, rotationX: 0, rotationY: 0, scale: 1, scaleZ: 1, transformOrigin: 'center center', opacity: 1 } }],
                    ['show', { set: { opacity: 1 }}],
                    ['hide', { set: { opacity: 0 }}],
                    ['puff-out', { from: { opacity: 1, scale: 1, scaleZ: 1}, to: { opacity: 0, scale: 1.8, scaleZ: 1.2 }}],
                    ['puff-in',  { to: { opacity: 1, scale: 1, scaleZ: 1}, from: { opacity: 0, scale: .6, scaleZ: .8 }}],
                    ['fade-in',  { duration: .5, from: { opacity: 0 }, to: { opacity: 1 }}],
                    ['fade-out', { duration: .5, to: { opacity: 0 }}],
                    ['scale-in-up', { duration: .5, set: { transformOrigin: 'top center' }, from: { scaleY: 1, opacity: 1 }, to: { scaleY: 0, opacity: 0 }}],
                    ['scale-out-down', { duration: .5, set: { transformOrigin: 'center top' }, from: { scaleY: 0, opacity: 0 }, to: { scaleY: 1, opacity: 1 }}],

                    ['bounce-up-in',    { ease: Bounce.easeOut, from: { y: +1000 }}],
                    ['bounce-down-in',  { ease: Bounce.easeOut, from: { y: -1000 }}],
                    ['bounce-right-in', { ease: Bounce.easeOut, from: { x: -1000 }}],
                    ['bounce-left-in',  { ease: Bounce.easeOut, from: { x: +1000 }}],
                    
                    ['bounce-up-out',   { ease: Elastic.easeIn.config(2.5,.8), from: { y: 0 }, to: { y: -1000 }}],
                    ['bounce-down-out', { ease: Elastic.easeIn.config(2.5,.8), from: { y: 0 }, to: { y: +1000 }}],
                    ['bounce-right-out',{ ease: Elastic.easeIn.config(2.5,.8), from: { x: 0 }, to: { x: -1000 }}],
                    ['bounce-left-out', { ease: Elastic.easeIn.config(2.5,.8), from: { x: 0 }, to: { x: +1000 }}],
                    
                    ['scale-bounce-in-up', { duration: .5, ease: 'Bounce.easeOut', set: { transformOrigin: 'top center' }, from: { scaleY: 1, opacity: 1 }, to: { scaleY: 0, opacity: 0 }}],
                    ['scale-bounce-out-down', { duration: .75, ease: 'Bounce.easeOut', set: { transformOrigin: 'center top' }, from: { scaleY: 0, opacity: 0 }, to: { scaleY: 1, opacity: 1 }}],
                    
                    ['shake-h',{ ease: Elastic.easeOut.config(2.3,0.4), effect: [{ duration: .01, to: { x: -10}}, { duration: .7, to: { x: 0}}] }],
                    ['shake-v',{ ease: Elastic.easeOut.config(2.3,0.4), effect: [{ duration: .01, to: { y: -10}}, { duration: .7, to: { y: 0}}] }],
                    
                    ['wobble', { duration: 1, ease: Elastic.easeOut.config(2.0,0.3), effect: [{duration: .01, to: { rotation: -30 }}, { duration: 1, to: { rotation: 0 }}]}],
                    ['rock', { repeat: -1, duration: 2.5, ease: Linear.easeNone, effect: [
                                {duration: .25, set: { transformOrigin: '50% 65% 0px' }, from: { rotationZ: 0 }, to: { rotationZ: 30 }},
                                {duration: .5, to: { rotationZ: -30 }},
                                {duration: .25, to: { rotationZ: 0 }}
                            ]
                    }],
                    
                    ['flip-in-h',  
                        { ease: Power2.easeIn, duration: .4, from: { rotationY: -90, transformPerspective: 600 }, to: { rotationY: 0  }}
                    ],
                    ['flip-in-v',  
                        { ease: Power2.easeIn, duration: .4, from: { rotationX: -90, transformPerspective: 600 },  to: { rotationX: 0  }}
                    ],
                    ['flip-out-h', 
                        { ease: Power2.easeOut, duration: .4, from: { rotationY: 0, transformPerspective: 600 }, to: { rotationY: 90 }}
                    ],
                    ['flip-out-v', 
                        { ease: Power2.easeOut, duration: .4, from: { rotationX: 0, transformPerspective: 600 }, to: { rotationX: 90 }}
                    ],
                    
                    ['tada', { effect: [
                                //{set: { transformOrigin: 'center center' }},
                                {duration: 0.16, to: { rotation: "-=5", opacity: 1 }, from: { transformOrigin: 'center center' } },
                                {duration: 0.08, to: { scale: .8 },  position: "-=0.16" },
                                {duration: 0.08, to: { scale: 1.3 }, position: "-=0.08" },
                                {duration: 0.08, to: { rotation: "+=10" }},
                                {duration: 0.08, to: { rotation: "-=10" }},
                                {duration: 0.08, to: { rotation: "+=10" }},
                                {duration: 0.08, to: { rotation: "-=10" }},
                                {duration: 0.08, to: { rotation: "+=10" }},
                                {duration: 0.08, to: { rotation: "-=10" }},
                                {duration: 0.16, to: { rotation: "+=5", scale: 1 }}
                                ]}],
                                
                    ['jump',   { duration: .75, effect: [{from: {y:0}}, { ease: Power3.easeOut, duration: .1, to: { y:-30 }}, { ease: Bounce.easeOut, duration: 1, to: { y: 0 }}]}],
                    ['flash',  { duration: .35, repeat: 3, yoyo: true, effect: { from: { opacity: 1 }, to: { opacity: 0 } } }],
                    ['pulse',  { repeat: 1, duration: .75, effect: [{set: { scale: 1, opacity: 1 }}, { to: { scale: .9, opacity: .7 }}, { to: { scale: 1, opacity: 1 }}]} ],
                    ['jiggle', { duration: .6, effect: 
                        [
                            //{set: {scale:  1,    scaleZ: 1    }}, 
                            {to:  {scaleX: 1.25, scaleY: .75  }, from: { scale: 1, scaleZ: 1 }}, 
                            {to:  {scaleX: .75,  scaleY: 1.25 }}, 
                            {to:  {scaleX: 1.15, scaleY: .85  }}, 
                            {to:  {scaleX: .95,  scaleY: 1.05 }}, 
                            {to:  {scaleX: 1.05, scaleY: .95  }},
                            {to:  {scale:  1 }}
                        ]
                    }],
                    
                    ['browse-in', [
                        {duration: .15, from: { scale: .8, opacity: 0 }, to: { opacity: .7}}, 
                        {duration: .4,  to: { scale: 1.2, opacity: 1 }}, 
                        {duration: .12, to: { scale: 1  }}
                    ]],
                    ['browse-out-left' , [
                        {duration: .5,  from: { x: 0, rotationX: 0, rotationY: 0 }, to: { x: '-105%', rotationY: 35, rotationX: 10, z: -10 }}, 
                        {duration: .3,  to: { opacity: 1 }}, 
                        {duration: .2,  to: { opacity: 0, x: '0%', rotationY: 0, rotationX: 0, z: -10 }}
                    ]],
                    ['browse-out-right', [
                        {duration: .5,  from: { x: 0, rotationX: 0, rotationY: 0 }, to: { x: '105%',  rotationY: 35, rotationX: -10, z: -10}}, 
                        {duration: .3,  to: {opacity: 1}}, 
                        {duration: .2,  to: { opacity: 0, x: '0%', rotationY: 0, rotationX: 0, z: -10}}
                    ]],
                    
                    
                    ['fly-in', [
                        //{set: { opacity: 0, scale: .3, scaleZ: .3 }},
                        {duration: .2,to: { scale: 1.1, scaleZ: 1.1 }, from: { opacity: 0, scale: .3, scaleZ: .3 }},
                        {duration: .2,to: { scale: .9, scaleZ: .9 }},
                        {duration: .4,to: { opacity: 1 }, position: "-=.4"},
                        {duration: .2,to: { scale: 1.03, scaleZ: 1.03 }},
                        {duration: .2,to: { scale: .97, scaleZ: .97}},
                        {duration: .2,to: { scale: 1, scaleZ: 1 }}
                    ]],
                    
                    ['fly-in-up', [
                        //{set: { opacity: 0, x: 0, y: 1500, z: 0}},
                        {duration: .3, from: { opacity: 0, x: 0, y: 700, z: 0 }, to: { opacity: 1, y: -20 }},
                        {duration: .15,to: { y: 10 }},
                        {duration: .15,to: { y: -5 }},
                        {duration: .1, to: { y: 0 }}
                    ]], 
                    
                    ['fly-in-down', [
                        //{set: { opacity: 0, x: 0, y: -1500, z: 0}},
                        {duration: .6, from: {opacity: 0, x: 0, y: -1500, z: 0}, to: { opacity: 1, y: 25 }},
                        {duration: .15,to: { y: -10 }},
                        {duration: .15,to: { y: 5 }},
                        {duration: .1, to: { y: 0 }}
                    ]],
                    
                    ['fly-in-left', [
                        //{set: { opacity: 0, x: 1500, y: 0, z: 0}},
                        {duration: .6, from: { opacity: 0, x: 1500, y: 0, z: 0 }, to: { opacity: 1, x: -25 }},
                        {duration: .15,to: { x: 10 }},
                        {duration: .15,to: { x: -5 }},
                        {duration: .1, to: { x: 0 }}
                    ]],
                    
                    ['fly-in-right', [
                        //{set: { opacity: 0, x: -1500, y: 0, z: 0}},
                        {duration: .6, to: { opacity: 1, x: 25 }, from: { opacity: 0, x: -1500, y: 0, z: 0 }},
                        {duration: .15,to: { x: -10 }},
                        {duration: .15,to: { x: 5 }},
                        {duration: .1, to: { x: 0 }}
                    ]],

                    ['fly-out-down', [
                        {duration: .2,  to: { y: 10 }, from: { opacity: 1, y: 0 }},
                        {duration: .25, to: { opacity: 1, y: -20 }},
                        {duration: .2,  to: { opacity: 0, y: 700 }}
                    ]],
                    ['fly-out-up', [
                        {duration: .2, to: { y: -10 }, from: { y: 0, opacity: 1 }},
                        {duration: .25, to: { opacity: 1, y: 20 }},
                        {duration: .55, to: { opacity: 0, y: -1500 }}
                    ]],
                    ['fly-out-left', [
                        {duration: .2,  to: { x: -10 }, from: { x: 0, opacity: 1 }},
                        {duration: .25, to: { opacity: 1, x: 20 }},
                        {duration: .55, to: { opacity: 0, x: -1500 }}
                    ]],
                    ['fly-out-right', [
                        {duration: .2,  to: { x: 10 }, from: { x: 0, opacity: 1 }},
                        {duration: .25, to: { opacity: 1, x: -20 }},
                        {duration: .55, to: { opacity: 0, x: 1500 }}
                    ]],
                    ['swing-in-v', [
                        //{set: { transformPerspective: 600 } }, //, rotationX: 90, opacity: 0 }},
                        {ease: Power4.easeInOut, duration: .8, to: { rotationX: -45 }, from: { rotationX: 90, transformPerspective: 600 }},
                        {duration: .3, to: { opacity: 1 }, from: { opacity: 0 }, position: 0},  // test: be sure position is applied properly
                        {duration: .3, to: { rotationX: 25 }},
                        {duration: .2, to: { rotationX: -17.5 }},
                        {duration: .2, to: { rotationX: 0 }}
                    ]],
                    ['swing-in-h', [
                        {set: { transformPerspective: 600, ease: Linear.easeNone }},
                        {ease: Power4.easeInOut, duration: .8, to: { rotationY: 45 }, from: { rotationY: -90 }},
                        {duration: .3, to: { opacity: 1 }, from: { opacity: 0 }, position: 0},  // test: be sure position is applied properly
                        {duration: .3, to: { rotationY: -27.5 }},
                        {duration: .2, to: { rotationY: 17.5 }},
                        {duration: .2, to: { rotationY: 0 }}
                    ]],
                    ['swing-out-v', [
                        //{set: { transformPerspective: 600 }},// rotationX: 0 }},
                        {delay: .1, duration: .4, to: { rotationX: -12.5 }, from: { rotationY: 0, transformPerspective: 600 }},
                        {duration: .3, to: { rotationX: 18 }},
                        {duration: .3, to: { rotationX: -38, opacity: 1 }},
                        {duration: .6, to: { rotationX: 90, opacity: 0 }}
                    ]],
                    ['swing-out-h', [
                        {set: { transformPerspective: 600}}, // rotationY: 0 }},
                        {delay: .1, duration: .6, to: { rotationY: 12.5 }, from: { rotationY: 0 }},
                        {duration: .4, to: { rotationY: -18.5 }},
                        {duration: .3, to: { rotationY: 38, opacity: 1 }},
                        {duration: .6, to: { rotationY: -90, opacity: 0 }}
                    ]],
                    ['swing-in-left',  [{set: { transformOrigin: 'center left'  }}, { duration: 1.1, effect: 'swing-in-h' }]],
                    ['swing-in-right', [{set: { transformOrigin: 'center right' }}, { duration: 1.1, effect: 'swing-in-h' }]],
                    ['swing-in-down',  [{set: { transformOrigin: 'top center'   }}, { duration: .8,  effect: 'swing-in-v' }]],
                    ['swing-in-up',    [{set: { transformOrigin: 'bottom center'}}, { duration: .8,  effect: 'swing-in-v' }]],
                    
                    ['swing-out-left', [{set: { transformOrigin: 'center left'  }}, { duration: .8, effect: 'swing-out-h' }]],
                    ['swing-out-right',[{set: { transformOrigin: 'center right' }}, { duration: .8, effect: 'swing-out-h' }]],
                    ['swing-out-up',   [{set: { transformOrigin: 'top center'   }}, { duration: .8, effect: 'swing-out-v' }]],
                    ['swing-out-down', [{set: { transformOrigin: 'bottom center'}}, { duration: .8, effect: 'swing-out-v' }]],
                    
                        // testing: stagger, chaining.
                    ['swing-set', { stagger: 1, effect: ['swing-in-down','swing-out-right','swing-in-up','swing-out-left','swing-in-right','swing-out-up','swing-in-left','swing-out-down']}]
]);


export {extendedEffects};