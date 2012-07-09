POS3D.Face = (function(){
    function Face(v, c){
        this.verticies = v;
        this.color = c;
        
    }
    Face.prototype.applyTransform = function(m){
        for(var i = 0; i < this.verticies.length; i++){
            POS3D.Matrix.applyTransform(m,this.verticies);
        }
    }
    Face.prototype.getNormal = function(){
        return  POS3D.Vector.crossProduct( POS3D.Vector.subtract(this.verticies[0], this.verticies[1]), POS3D.Vector.subtract(this.verticies[2], this.verticies[1]));
    }
    Face.applyTransform = function(f,m){
        var verts = [];
        for(var i = 0; i < f.verticies.length; i++){
           
            verts[i] = POS3D.Matrix.applyTransform(m,f.verticies);
        }
        return new POS3D.Face(verts,f.color);
    }
    Face.getNormal = function(f){
        return  Vector.crossProduct( Vector.subtract(f.verticies[0], f.verticies[1]), Vector.subtract(f.verticies[2], f.verticies[1]));
    }
    return Face;
})();

