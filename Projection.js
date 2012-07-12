POS3D.Projection = (function(){
    function Projection(v){
        this.vector = v;
        console.log(this.vector.toString());
        this.matrix = new POS3D.Matrix();
    }
    Projection.prototype.projectionX = function(ve){
        return (this.vector.z * (ve.x-this.vector.z)) / ((this.vector.z + ve.z) + this.vector.x);
    }
    Projection.prototype.projectionY = function(v){
        return (this.vector.z * (v.y-this.vector.y)) / (this.vector.z + v.z) + this.vector.y;
    }   
    return Projection;
    
    
})();