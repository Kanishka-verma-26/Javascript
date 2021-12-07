function makeBricks(s,b,g){
    return g%5>=0 && g%5-s<=0 && s+5*b >=g;
}