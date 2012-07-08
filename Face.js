POS3D.Face = function(verts){
    const verticies = verts;

    
    this.getVerticies = function(){
        return verticies;
    }
    this.applyTransform = function(m,f){
        var verts = [];
        var fVerts = f.getVerticies();
        for(var i = 0; i < fVerts.length; i++){
           
            verts[i] = m.applyTransform(m,fVerts[i]);
        }
       return new POS3D.Face(verts);
    }
    this.getNormal = function(){
       return  verticies[0].crossProduct( verticies[0].substract(verticies[0], verticies[1]), verticies[0].substract(verticies[2], verticies[1]));
    }
}



