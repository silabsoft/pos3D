POS3D.Matrix = (function() {

    function Matrix(){
        var matrix = [4];
        for(var i = 0; i < 4; i++){
            
            matrix[i] = [];

            for(var x = 0; x < 4; x++){
                matrix[i][x] = 0;
    
            }
        }
        [0][0] = 1;
        matrix[1][1] = 1;
        matrix[2][2] = 1;
        matrix[3][3] = 1;   
        
        this.multiply = function (b) {
            var n = [];
            for(var i = 0; i < 4; i++){
                n[i] = [];
            }
            for(i = 0; i < 3; i++) {
            
                n[i][0] =matrix[i][0] * b[0][0] +matrix[i][1] * b[1][0] +matrix[i][2] * b[2][0] +matrix[i][3] * b[3][0];
                n[i][1] =matrix[i][0] * b[0][1] +matrix[i][1] * b[1][1] +matrix[i][2] * b[2][1] +matrix[i][3] * b[3][1];
                n[i][2] =matrix[i][0] * b[0][2] +matrix[i][1] * b[1][2] +matrix[i][2] * b[2][2] +matrix[i][3] * b[3][2];
                n[i][3] =matrix[i][0] * b[0][3] +matrix[i][1] * b[1][3] +matrix[i][2] * b[2][3] +matrix[i][3] * b[3][3];
            }
            matrix = n;
        }
        
        this.translate = function(x,y,z) {
            var trans
            = [[1, 0, 0, x],[0, 1, 0, y], [0, 0, 1, z],[0, 0, 0, 1]];
            this.multiply(trans);
        } 
        
        this.scale = function(x,y,z) {
            var trans = [[x, 0, 0, 0], [0, y, 0, 0],[0, 0, z, 0],[0, 0, 0, 1]];
            this.multiply(trans);
        } 
            
        this.rotateX = function(theta) {
            var cos = Math.cos(theta);
            var sin = Math.sin(theta);
            var trans = [
            [1, 0, 0, 0],
            [0, cos, -sin, 0],
            [0, sin, cos, 0],
            [0, 0, 0, 1]
            ];
            this.multiply(trans);
        }
            
        this.rotateY = function(theta) {
            var cos = Math.cos(theta);
            var sin = Math.sin(theta);
            var trans =[
            [cos, 0, sin, 0],
            [0, 1, 0, 0],
            [-sin, 0, cos, 0],
            [0, 0, 0, 1]
            ]
            this.multiply(trans);
        }    
        return{

        
            getMatrix: function(){
                return matrix;
            }
            ,
            applyTransform : function(v) {
                var x = (v.getX() *matrix[0][0]) + (v.getY() *matrix[0][1]) + (v.getZ() *matrix[0][2]) + (matrix[0][3]);
                var y = (v.getX() *matrix[1][0]) + (v.getY() *matrix[1][1]) + (v.getZ() *matrix[1][2]) + (matrix[1][3]);
                var z = (v.getX() *matrix[2][0]) + (v.getY() *matrix[2][1]) + (v.getZ() *matrix[2][2]) + (matrix[2][3]);
                return new POS3D.Vertex(x, y, z);
            }

       
        }
    }
    return Matrix;
})();