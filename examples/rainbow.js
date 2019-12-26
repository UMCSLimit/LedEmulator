{
    let values = this.state.values;
    let _h = 0;
    
for(;;){
    for (let j = 0; j < 28; j++) {
        let out = HSVtoRGB((_h * 3)%360, 1, 1);
        for (let i = 0; i < 5; i++) {
            
            _h += 1;
            
            
            //R
            values[i][j][0] = out.r;
            //G
            values[i][j][1] = out.g;
            //B
            values[i][j][2] = out.b;
            
            
            }
        }
    this.setState({ values });
    await this.sleep(100);
}
}
    
function mix(a, b, v)
{
    return (1-v)*a + v*b;
}

function HSVtoRGB(H, S, V)
{
    var V2 = V * (1 - S);
    var r  = ((H>=0 && H<=60) || (H>=300 && H<=360)) ? V : ((H>=120 && H<=240) ? V2 : ((H>=60 && H<=120) ? mix(V,V2,(H-60)/60) : ((H>=240 && H<=300) ? mix(V2,V,(H-240)/60) : 0)));
    var g  = (H>=60 && H<=180) ? V : ((H>=240 && H<=360) ? V2 : ((H>=0 && H<=60) ? mix(V2,V,H/60) : ((H>=180 && H<=240) ? mix(V,V2,(H-180)/60) : 0)));
    var b  = (H>=0 && H<=120) ? V2 : ((H>=180 && H<=300) ? V : ((H>=120 && H<=180) ? mix(V2,V,(H-120)/60) : ((H>=300 && H<=360) ? mix(V,V2,(H-300)/60) : 0)));

    return {
        r : Math.round(r * 255),
        g : Math.round(g * 255),
        b : Math.round(b * 255)
    };
}
