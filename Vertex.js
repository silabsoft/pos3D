POS3D.Vertex = (function(){
    function Vertex(x,y,z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.add = function(v) {
            return new POS3D.Vertex(x + v.x, y + v.y, z + v.z);
        }

        this.subtract = function(v) {
            return new POS3D.Vertex(x - v.x, y - v.y, z - v.z);
        }

        this.multiply = function(i) {
            return new POS3D.Vertex(x * i, y * i, z * i);
        }

        this.divide = function(i) {
            return new POS3D.Vertex(x / i, y / i, z / i);
        }

        this.getDotProduct = function(v) {
            return x * v.x + y * v.y + z * v.z;
        }

        this.crossProduct = function(v) {
            return new POS3D.Vertex(y * v.z - z * v.y, z * v.x - x * v.z, x * v.y - y * v.x);
        }

        this.getMagnitude = function(){
            return Math.sqrt(x * x + y * y + z * z);
        }

        this.normalize = function(){
            var mag = this.getMagnitude();
            return new POS3D.Vertex(x / mag, y / mag, z / mag);
        }
    
        this.toString = function(){
            return "Vertex: ["+x+","+y+ ","+z+"]";
        }
        
    }
    return Vertex;
})();