POS3D.Vertex = (function(){
    function Vertex(x,y,z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return{
            getX : function(){
                return x;
            },
            getY : function(){
                return x;
            },
            getZ : function(){
                return z;
            },
            add : function(v) {
                return new POS3D.Vertex(x + v.x, y + v.y, z + v.z);
            },
            
            subtract :function(v) {
                return new POS3D.Vertex(x - v.x, y - v.y, z - v.z);
            },
            
            multiply : function(i) {
                return new POS3D.Vertex(x * i, y * i, z * i);
            },
            
            divide : function(i) {
                return new POS3D.Vertex(x / i, y / i, z / i);
            },
            
            getDotProduct : function(v) {
                return x * v.x + y * v.y + z * v.z;
            },
            
            crossProduct : function(v) {
                return new POS3D.Vertex(y * v.z - z * v.y, z * v.x - x * v.z, x * v.y - y * v.x);
            },
            
            getMagnitude : function(){
                return Math.sqrt(x * x + y * y + z * z);
            },
            
            normalize : function(){
                var mag = this.getMagnitude();
                return new POS3D.Vertex(x / mag, y / mag, z / mag);
            },
            
            toString : function(){
                return "Vertex: ["+x+","+y+ ","+z+"]";
            }
        }
    
    }
    return Vertex;
})();