POS3D.Model = (function(){

    function Model(x,y,z,f){

        var faces = f;
        var transform =   new POS3D.Matrix();
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
        this.transformFaces = function(m){
            var nFaces = [];
            for (var i = 0; i < faces.length; i++)
                nFaces[i] = POS3D.Face().applyTransform(m)
            return new POS3D.Model(x,y,z,nFaces);
        }
        this.transformThis = function(m){
            var trans = Matrix().applyTransform(m, new POS3D.Vertex(x,y,z));
            return new POS3D.Model(trans.getX(),trans.getY(),trans.getZ(),faces);
        }
        this.getTransform = function(){
            return transform;
        }
    }
    return Model;
})();

