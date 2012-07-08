POS3D.Face = (function(){
    function Face(v, c){
        var verticies =v;
        var color = c;
        return{
            getVerticies : function(){
                return verticies;
            },
            applyTransform : function(m){
                var verts = [];
                for(var i = 0; i < verticies.length; i++){
           
                    verts[i] = m.applyTransform(m,verticies);
                }
                return new POS3D.Face(verts,color);
            },
            getColor : function(){
                return color;
            },
            getNormal : function(){
                return  Vertex.crossProduct( Vertex.substract(verticies[0], verticies[1]), Vertex.substract(verticies[2], verticies[1]));
            }
        }
        
    }
    return Face;
})();

