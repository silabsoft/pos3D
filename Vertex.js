POS3D.Vertex = function(a,s,d){
    const x = a;
    const y = s;
    const z = d;
    

    this.substract = function(a,b){
        return new POS3D.Vertex(a.getX()-b.getX(),a.getY()-b.getY(),a.getZ()-b.getZ());
    }

    this.crossProduct = function(v,v1){
        return new POS3D.Vertex(v.getY() * v1.getZ() - v.getZ() * v1.getY(), v.getZ() * v1.getX() - v.getX() * v1.getZ(), v.getX() * v1.getY() - v.getY() * v1.getX());
    }
    this.getLength = function(v){
        return (v.getX() * v.getX() + v.getY() * v.getY() + v.getZ() * v.getZ()) /2;
    }      
       
    this.getX = function(){
        return x;
    }    
    this.getY = function(){
        return y;
    }
    this.getZ = function(){
        return z;
    }

    this.toString = function(){
        return "Vertex: ["+x+","+y+ ","+z+"]";
    }
}