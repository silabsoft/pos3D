POS3D.TriFace = (function(){
    function TriFace(a,b,c,color){
        this.a = a;
        this.b = b;
        this.c = c;
        this.color = color;
        
    }
    TriFace.prototype.applyTransform = function(m){
        //    console.log("before: "+this.a);
       
        var ta =   m.applyTransform(this.a);
        var tb  =m.applyTransform(this.b);
        var tc=   m.applyTransform(this.c);
        return new POS3D.TriFace(ta,tb,tc);
    }
    TriFace.prototype.getCenter = function(){
        return  POS3D.Vector.crossProduct( POS3D.Vector.subtract(this.a, this.b), POS3D.Vector.subtract(this.c, this.b));
    }

    return TriFace;
})();

