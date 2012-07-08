POS3D.Camera = function(a,b,c){
    var x =a;
    var y = b;
    var z = c;
    
    this.getX = function(){
        return x;
    }
    this.setX = function(i){
        x = i;
    }
    this.getY = function(){
        return y;
    }
    this.setY = function(i){
        y = i;
    }
    this.getZ = function(){
        return z;
        
    }
    this.setZ = function(i){
        z = i;
    }
}