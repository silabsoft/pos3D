POS3D.Model = function(a,b,c,f){
    const x = a;
    const y = b;
    const z = c;
    const faces = f;
    const transform = new POS3D.Matrix();
    this.getFaces = function(){
        return faces;
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
    this.transformFaces = function(m,mod){
        var modFaces = mod.getFaces();
        var nFaces = [];
        for (var i = 0; i < modFaces.length; i++)
            nFaces[i] = modFaces[i].applyTransform(m, modFaces[i]);
        return new POS3D.Model(mod.getX(),mod.getY(),mod.getZ(),nFaces);
    }
    this.transformThis = function(m,mod){
        var trans = POS3D.Matrix.applyTransform(m, new POS3D.Vertex(mod.getX(), mod.getY(), mod.getZ()));
        return new POS3D.Model(trans.getX(),trans.getY(),trans.getZ(),mod.getFaces());
    }
    this.getTransform = function(){
        return transform;
    }
}

