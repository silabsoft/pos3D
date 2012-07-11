POS3D.Render = function(){
    const TICK = 60.0;
    var model;/* = new POS3D.Model(new POS3D.Vector(0,0,100),
        [
        new POS3D.Face([new POS3D.Vector(0.0,0.0,0.0),new POS3D.Vector(1.0,1.0,0.0),new POS3D.Vector(1.0,0.0,0.0)],"#FF0000"),
        new POS3D.Face([new POS3D.Vector(0.0,0.0,0.0),new POS3D.Vector(0.0,1.0,0.0),new POS3D.Vector(1.0,1.0,0.0)],"#00FFFF"),
        new POS3D.Face([new POS3D.Vector(0.0,0.0,0.0), new POS3D.Vector(0.0,1.0,1.0),new POS3D.Vector(0.0,1.0,0.0)],"#0000FF"),
        new POS3D.Face([new POS3D.Vector(0.0,0.0,0.0),new POS3D.Vector(0.0,0.0,1.0),new POS3D.Vector(0.0,1.0,1.0)],"#0000A0"),
        new POS3D.Face([new POS3D.Vector(0.0,1.0,0.0),new POS3D.Vector(1.0,1.0,1.0),new POS3D.Vector(1.0,1.0,0.0)],"#ADD8E6"),
        new POS3D.Face([new POS3D.Vector(0.0,1.0,0.0),new POS3D.Vector(0.0,1.0,1.0),new POS3D.Vector(1.0,1.0,1.0)],"#800080"),
        new POS3D.Face([new POS3D.Vector(1.0,0.0,0.0),new POS3D.Vector(1.0,1.0,0.0),new POS3D.Vector(1.0,1.0,1.0)],"#FFFF00"),
        new POS3D.Face([new POS3D.Vector(1.0,0.0,0.0),new POS3D.Vector(1.0,1.0,1.0),new POS3D.Vector(1.0,0.0,1.0)],"#00FF00"),
        new POS3D.Face([new POS3D.Vector(0.0,0.0,0.0),new POS3D.Vector(1.0,0.0,0.0),new POS3D.Vector(1.0,0.0,1.0)],"#FF00FF"),
        new POS3D.Face([new POS3D.Vector(0.0,0.0,0.0),new POS3D.Vector(1.0,0.0,1.0),new POS3D.Vector(0.0,0.0,1.0)],"#FF0FFF"),
        new POS3D.Face([new POS3D.Vector(0.0,0.0,1.0),new POS3D.Vector(1.0,0.0,1.0),new POS3D.Vector(1.0,1.0,1.0)],"#000000"),
        new POS3D.Face([new POS3D.Vector(0.0,0.0,1.0),new POS3D.Vector(1.0,1.0,1.0),new POS3D.Vector(0.0,1.0,1.0)],"#FFA500")
        ]

        );*/
        
    var canvasWidth;
    var canvasHeight;
    var context;
    var canvasX;
    var canvasY; 
    var planeNormal;
    var pov;
    var mod = "humanoid_tri.obj";
    return {
        init: function(mod) { 
            var canvas = document.getElementById("renderCanvas");
            canvasWidth = $('#renderCanvas').width();
            canvasHeight = $('#renderCanvas').height();     
            canvasX = $('#renderCanvas').offset().left;
            canvasY = $('#renderCanvas').offset().top;
            context = canvas.getContext('2d');

            planeNormal = new POS3D.Vector(0,0,0);
       

            //  pov = new POS3D.Matrix();
            // poVector(0, 0, 50)
            $.get(mod, function(data){
                var n =data.split("\n");
                var v = [];
                var f = [];
                for(var i = 0; i < n.length; i++){
                    var l = n[i].split(" ");
                    if(l[0] == "v"){
                        var t = new POS3D.Vector(l[1],l[2],l[3]);
                       
                        v.push(t);
                    }
                    if(l[0] == "f"){
         
                      f.push(new POS3D.Face([v[l[1]-1],v[l[2]-1],v[l[3]-1]],null));
                    }
                }
             
                model = new POS3D.Model(new POS3D.Vector(0,0,100),f);
               // model.transform.rotateY(1.57);
             //   model.transform.rotateX(1.57);
                model.transform.translate(100, 100, 1);
                model.transform.scale(15,15, 1);     
                setTimeout(POS3D.Render.loop, (1/TICK) * 1000);
            });

        },
        loop: function() { 
            POS3D.Render.update();
            POS3D.Render.draw();
            setTimeout(POS3D.Render.loop, (1/TICK) * 1000);
        },
        update: function() {
  
            model.transform.rotateY(-0.017);
            model.transform.rotateX(0.017);
            
        },
        draw: function(){ 
            context.clearRect(0, 0, canvasWidth, canvasHeight);
            context.fillStyle= "#C0C0C0";
            context.fillRect(0,0,canvasWidth,canvasHeight);
        
            if(model != null){

                drawModel(POS3D.Model.transformFaces(model));
                
            }
        }
    };
    
    function drawModel(m){
       
        var startX = m.vector.x+m.vector.z;
        var startY = m.vector.y+m.vector.z;
        var faces = m.faces;
        faces.sort(function(f0,f1){
            var v0 = f0.getCenter();
            var v1 = f1.getCenter();
            return v0.z - v1.z;      
        });
        
        
        for (var i = 0; i < faces.length; i++) {
            if (POS3D.Vector.dotProduct(faces[i].getCenter,planeNormal) < 0)
                continue;
         
            if(faces[i].color != null)
                context.fillStyle  = faces[i].color;
            context.translate(startX, startY);
            
            context.beginPath();
            var v = faces[i].verticies;
            for(var x = 0; x < v.length; x++){
                
                context.lineTo(v[x].x,v[x].y); 
 
                
 
            }
            if(faces[i].color != null)
                context.fill(); 
            else{
                context.stroke();
            }
            context.closePath();  
        
            context.translate(-startX, -startY);

        }

    }
    function projectionX(pov,vX){
        return (pov.getZ() * (vX.getX()-pov.getZ())) / (pov.getZ() + vX.getZ()) + pov.getX();
    }
    function projectionY(pov,vX){
        return (pov.getZ() * (vX.getY()-pov.getY())) / (pov.getZ() + vX.getZ()) + pov.getY();
    }   
    function toRad(Value) {
        /** Converts numeric degrees to radians */
        return Value * Math.PI / 180;
    }
 
return Render;
}();

