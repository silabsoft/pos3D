POS3D.Face = (function(){
    function Face(v, c){
        this.verticies = v;
        this.color = c;
        
    }
    Face.prototype.applyTransform = function(m){
        for(var i = 0; i < this.verticies.length; i++){
         
            this.verticies[i] =   m.applyTransform(this.verticies[i]);
       
        }
        return new POS3D.Face(this.verticies,this.color);
    }
    Face.prototype.getCenter = function(){
        return  POS3D.Vector.crossProduct( POS3D.Vector.subtract(this.verticies[0], this.verticies[1]), POS3D.Vector.subtract(this.verticies[2], this.verticies[1]));
    }
    Face.applyTransform = function(f,m){
      
        var verts = [];
        for(var i = 0; i < f.verticies.length; i++){
           
            verts[i] = POS3D.Matrix.applyTransform(m,f.verticies[i]);
        }
        return new POS3D.Face(verts,f.color);
    }
    Face.getCenter = function(f){
        return new POS3D.Vector.crossProduct( POS3D.Vector.subtract(f.verticies[0], f.verticies[1]), POS3D.Vector.subtract(f.verticies[2], f.verticies[1]));

 }
    return Face;
})();

