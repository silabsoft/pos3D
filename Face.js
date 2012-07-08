POS3D.Face = (function(){
    function Face(v, c){
        this.verticies =v;
        this.color = c;
        
        this.getVerticies = function(){
            return this.verticies;
        }
        this.applyTransform = function(m){
            var verts = [];
            for(var i = 0; i < this.verticies.length; i++){
           
                verts[i] = m.applyTransform(m,this.verticies);
            }
            return new POS3D.Face(verts,this.color);
        }
        this.getColor = function(){
            return this.color;
        }
        this.getNormal = function(){
            return  this.verticies[0].crossProduct( Vertex().substract(this.verticies[0], this.verticies[1]), Vertex().substract(this.verticies[2], this.verticies[1]));
        }
    }
    return Face;
})();

