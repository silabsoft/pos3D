POS3D.Model = (function() {
    function Model(v,f){
        this.vector = v;
        this.faces = f;
       
        this.transform = new POS3D.Matrix();
    }

    

    Model.prototype.transformFaces = function(){
        for (var i = 0; i < this.faces.length; i++){
           this.faces[i] = this.faces[i].applyTransform(this.transform);
        }
        return new POS3D.Model(this.vector,this.faces);
    
    }
    Model.prototype.transformThis = function(){
       return new POS3D.Matrix.applyTransform(this.transform, this.vector);
    }
    Model.transformFaces = function(mod){
         
        var nFaces = [];
        for (var i = 0; i < mod.faces.length; i++)
            nFaces[i] = POS3D.Face.applyTransform(mod.faces[i],mod.transform);

        return new POS3D.Model(mod.vector,nFaces);  
    }
    Model.transformThis = function(mod,m){
        var trans = POS3D.Matrix.applyTransform(m, mod.vector);
        return new POS3D.Model(new POS3D.Vector(trans.getX(),trans.getY(),trans.getZ()),mod.faces);
    }


    return Model;
})();

