POS3D.Matrix = (function() {
 
    function Matrix(){
        this.a0 = 1;
        this.a1 = 0;
        this.a2 = 0;
        this.a3 = 0;
        this.b0 = 0;
        this.b1 = 1;
        this.b2 = 0;
        this.b3 = 0;
        this.c0 = 0;
        this.c1 = 0;
        this.c2 = 1;
        this.c3 = 0;
        this.d0 = 0;
        this.d1 = 0;
        this.d2 = 0;
        this.d3 = 1;

     
    }
    Matrix.prototype.multiply = function(tra0, tra1, tra2, tra3, trb0, trb1, trb2, trb3, trc0, trc1, trc2, trc3, trd0, trd1, trd2, trd3, trd4){
        var ta0 = this.a0 * tra0 + this.a1 * trb0 + this.a2 * trc0 + this.a3 * trd0;
        var ta1 = this.a0 * tra1 + this.a1 * trb1 + this.a2 * trc1 + this.a3 * trd1;
        var ta2 = this.a0 * tra2 + this.a1 * trb2 + this.a2 * trc2 + this.a3 * trd2;
        var ta3 = this.a0 * tra3 + this.a1 * trb3 + this.a2 * trc3 + this.a3 * trd3;
        var tb0 = this.b0 * tra0 + this.b1 * trb0 + this.b2 * trc0 + this.b3 * trd0;
        var tb1 = this.b0 * tra1 + this.b1 * trb1 + this.b2 * trc1 + this.b3 * trd1;
        var tb2 = this.b0 * tra2 + this.b1 * trb2 + this.b2 * trc2 + this.b3 * trd2;
        var tb3 = this.b0 * tra3 + this.b1 * trb3 + this.b2 * trc3 + this.b3 * trd3;
        var tc0 = this.c0 * tra0 + this.c1 * trb0 + this.c2 * trc0 + this.c3 * trd0;
        var tc1 = this.c0 * tra1 + this.c1 * trb1 + this.c2 * trc1 + this.c3 * trd1;
        var tc2 = this.c0 * tra2 + this.c1 * trb2 + this.c2 * trc2 + this.c3 * trd2;
        var tc3 = this.c0 * tra3 + this.c1 * trb3 + this.c2 * trc3 + this.c3 * trd3;
        var td0 = this.d0 * tra0 + this.d1 * trb0 + this.d2 * trc0 + this.d3 * trd0;
        var td1 = this.d0 * tra1 + this.d1 * trb1 + this.d2 * trc1 + this.d3 * trd1;
        var td2 = this.d0 * tra2 + this.d1 * trb2 + this.d2 * trc2 + this.d3 * trd2;
        var td3 = this.d0 * tra3 + this.d1 * trb3 + this.d2 * trc3 + this.d3 * trd3;
        //     for(var i = 0; i < 3; i++) {
        //  n[i][0] = this.matrix[i][0] * b[0][0] + this.matrix[i][1] * b[1][0] + this.matrix[i][2] * b[2][0] + this.matrix[i][3] * b[3][0];
        // n[i][1] = this.matrix[i][0] * b[0][1] + this.matrix[i][1] * b[1][1] + this.matrix[i][2] * b[2][1] + this.matrix[i][3] * b[3][1];
        //  n[i][2] = this.matrix[i][0] * b[0][2] + this.matrix[i][1] * b[1][2] + this.matrix[i][2] * b[2][2] + this.matrix[i][3] * b[3][2];
        //   n[i][3] = this.matrix[i][0] * b[0][3] + this.matrix[i][1] * b[1][3] + this.matrix[i][2] * b[2][3] + this.matrix[i][3] * b[3][3];
                
        //   }    
        this.a0 = ta0;
        this.a1 = ta1;
        this.a2 = ta2;
        this.a3 = ta3;
        this.b0 = tb0;
        this.b1 = tb1;
        this.b2 = tb2;
        this.b3 = tb3;
        this.c0 = tc0;
        this.c1 = tc1;
        this.c2 = tc2;
        this.c3 = tc3;
        this.d0 = td0;
        this.d1 = td1;
        this.d2 = td2;
        this.d3 = td3;
    }
    Matrix.prototype.translate = function(x,y,z){
        /*    var trans =[
        [1, 0, 0, x],
        [0, 1, 0, y],
        [0, 0, 1, z],
        [0, 0, 0, 1]
        ];
        */
        this.multiply(1,0,0,x,0,1,0,y,0,0,1,z,0,0,0,1);
    }
    
    Matrix.prototype.scale = function (x,y,z){
        /*   var trans =[
        [x, 0, 0, 0],
        [0, y, 0, 0],
        [0, 0, z, 0],
        [0, 0, 0, 1]
        ];    
        */
        this.multiply(x,0,0,0,0,y,0,0,0,0,z,0,0,0,0,1);
    }
    Matrix.prototype.rotateX = function(theta){
        var cos = Math.cos(theta);
        var sin = Math.sin(theta);
        /*  var trans =[
        [1, 0, 0, 0],
        [0,  cos, -sin, 0],
        [0, sin, cos, 0],
        [0, 0, 0, 1]
        ];   
        */
        this.multiply(1,0,0,0,0,cos,-sin,0,0,sin,cos,0,0,0,0,1);
    }
    Matrix.prototype.reset = function(){
        this.a0 = 1;
        this.a1 = 0;
        this.a2 = 0;
        this.a3 = 0;
        this.b0 = 0;
        this.b1 = 1;
        this.b2 = 0;
        this.b3 = 0;
        this.c0 = 0;
        this.c1 = 0;
        this.c2 = 1;
        this.c3 = 0;
        this.d0 = 0;
        this.d1 = 0;
        this.d2 = 0;
        this.d3 = 1;      
    }
    Matrix.prototype.rotateY = function(theta){
        var cos = Math.cos(theta);
        var sin = Math.sin(theta);
        /*   var trans =[
        [ cos, 0, sin, 0],
        [  0, 1, 0, 0],
        [   -sin, 0, cos, 0],
        [  0, 0, 0, 1]
        ];   
        */
        this.multiply(cos,0,sin,0,0,1,0,0,-sin,0,cos,0,0,0,0,1);
    }
    Matrix.prototype.applyTransform = function(v){
        var tx = (v.x * this.a0) + (v.y * this.a1) + (v.z * this.a2) + (this.a3);
        var ty= (v.x * this.b0) + (v.y * this.b1) + (v.z * this.b2) + (this.b3);
        var tz = (v.x * this.c0) + (v.y * this.c1) + (v.z * this.c2) + (this.c3);

        v.x = tx;
        v.y = ty;
        v.z = tz;
        return v;
    }
    /*   
    Matrix.applyTransform = function(m,v){
        var x = (v.x * m.a0) + (v.y * m.a1) + (v.z * m.a2) + (m.a3);
        var y = (v.x * m.b0) + (v.y * m.b1) + (v.z * m.b2) + (m.b3);
        var z = (v.x * m.c0) + (v.y * m.c1) + (v.z * m.c2) + (m.c3);

        return new POS3D.Vector(x, y, z);   
    }

 


    public void rotateY(final double theta) {
        final double cos = StrictMath.cos(theta);
        final double sin = StrictMath.sin(theta);
        trans = new double[][] {
                {cos, 0, sin, 0},
                {0, 1, 0, 0},
                {-sin, 0, cos, 0},
                {0, 0, 0, 1}
        };
        multiply(trans);
    }

// --Commented out by Inspection START (6/16/08 1:17 AM):
//    public void rotateZ(final double theta) {
//        final double cos = StrictMath.cos(theta);
//        final double sin = StrictMath.sin(theta);
//        trans = new double[][] {
//                {cos, -sin, 0, 0},
//                {sin, cos, 0, 0},
//                {0, 0, 1, 0},
//                {0, 0, 0, 1}
//        };
//        multiply(trans);
//    }
// --Commented out by Inspection STOP (6/16/08 1:17 AM)


     */
    return Matrix;
})();