POS3D.Model = (function() {
   
    function Model(v,f){
        this.vector = v;
        this.faces = f;
       
        this.transform = new POS3D.Matrix();
    }

    

    Model.prototype.transformFaces = function(){
        var f = [this.faces.length];
        for (var i = 0; i < this.faces.length; i++){
            f[i] = this.faces[i].applyTransform(this.transform);
        }
        this.transform.reset();
        this.faces = f;
        return this;
    
    }
    Model.prototype.transformThis = function(){
        return new POS3D.Matrix.applyTransform(this.transform, this.vector);
    }
    
    


    return Model;
})();

