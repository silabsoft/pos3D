POS3D.Vector = (function() {
    function Vector(x,y,z) {
        this.x = x; 
        this.y = y;
        this.z = z;

    }
 
    Vector.prototype.toString = function(){
        return "Vector: ["+this.x+","+this.y+ ","+this.z+"]"; 
    }
    

    Vector.prototype.add = function(v){
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
    }
    Vector.prototype.subtract = function(v){
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
    }
    Vector.prototype.divide = function(v){
        this.x /= v.x;
        this.y /= v.y;
        this.z /= v.z;
    }   
    Vector.prototype.multiply = function(v){
        this.x *= v.x;
        this.y *= v.y;
        this.z *= v.z;
    }      
    Vector.prototype.getMagnitude = function(){
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    Vector.prototype.crossProduct = function(v){
        return new POS3D.Vertex(this.y * v.z - this.z * v.y, this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x);

    }
    Vector.prototype.dotProduct = function(v){
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }
    Vector.prototype.normalize = function(){
               
        var mag = this.getMagnitude();
        this.x /= mag;
        this.y /= mag; 
        this.z /= mag;
    }
    Vector.add = function(v0,v1){
        return new POS3D.Vector(v0.x+v1.x,v0.y+v1.y,v0.z+v1.z);
    }
    Vector.subtract = function(v0,v1){
        return new POS3D.Vector(v0.x-v1.x,v0.y-v1.y,v0.z-v1.z);
    };  
    Vector.divide = function(v0,v1){
        return new POS3D.Vector(v0.x/v1.x,v0.y/v1.y,v0.z/v1.z);
    };  
    Vector.multiply = function(v0,v1){
        return new POS3D.Vector(v0.x*v1.x,v0.y*v1.y,v0.z*v1.z);
    }; 
    Vector.getMagnitude = function(v){
        return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
    }
    Vector.crossProduct = function(v0,v1){
        
        return new POS3D.Vector(v0.y * v1.z - v0.z * v1.y, v0.z * v1.x - v0.x * v1.z, v0.x * v1.y - v0.y * v1.x);
    }
    Vector.dotProduct = function(v0,v1){
        return v0.x * v1.x + v0.y * v1.y + v0.z * v1.z;
    }
    Vector.normalize = function(v){
               
        var mag = v.getMagnitude();
        return new POS3D.Vector(v.x / mag, v.y / mag, v.z / mag);
    }
    return Vector;
})();






