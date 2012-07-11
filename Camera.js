POS3D.Camera = (function(){
    function Face(v){
        this.vector = v;
       this.matrix = new POS3D.Matrix();
    }
    return Camera;
})();