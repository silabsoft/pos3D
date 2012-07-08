POS3D.Model = (function(){

    function Model(x,y,z,f){

        var faces = f;
        var transform = new POS3D.Matrix();
        return{
            getFaces : function(){
                return faces;
            },
            getX :function(){
                return x;
            },
            getY : function(){
                return y;
            },
            getZ : function(){
                return z;
            },
            transformFaces : function(m){
                var nFaces = [];
                for (var i = 0; i < faces.length; i++)
                    nFaces[i] = faces[i].applyTransform(m)
                return new POS3D.Model(x,y,z,nFaces);
            },
            transformThis :function(m){
                var trans = Matrix().applyTransform(m, new POS3D.Vertex(x,y,z));
                return new POS3D.Model(trans.getX(),trans.getY(),trans.getZ(),faces);
            },
            getTransform : function(){
                return transform;
            }
        }
    }
    return Model;
})();

