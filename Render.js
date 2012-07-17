POS3D.Render = function(){
    const TICK = 60.0;
    var model;
        
    var canvasWidth;
    var canvasHeight;
    var context;
    var canvasX;
    var canvasY; 
    var planeNormal;
    var mod = "teapot.obj";
    var test = 0;
    var projection;
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
         
                        f.push(new POS3D.TriFace(v[l[1]-1],v[l[2]-1],v[l[3]-1],null));
                    }
                }
             
                model = new POS3D.Model(new POS3D.Vector(0,0,100),f);
                //       model.transform.rotateY(toRad(90));
                //   model.transform.rotateX(1.57);
                model.transform.translate(100,100, 0);
              model.transform.scale(50,50, 1);     
           model.transform.rotateX(toRad(180));
            //    model.transformFaces();
                setTimeout(POS3D.Render.loop, (1/TICK) * 1000);
            });

        },
        loop: function() { 
            POS3D.Render.update();
            POS3D.Render.draw();
            setTimeout(POS3D.Render.loop, (1/TICK) * 1000);
        },
        update: function() {
            //      projection.
            //  projection.vector.x++;
            //   if(projection.vector.z == 200){
            //        projection.vector.z = 0;
            //      }
             model.transform.rotateY(toRad(5));
          
      //      model.transform.rotateX(toRad(1));
    
        },
        draw: function(){ 
       
            context.clearRect(0, 0, canvasWidth, canvasHeight);
            context.fillStyle= "#C0C0C0";
            context.fillRect(0,0,canvasWidth,canvasHeight);
           
     


   
            drawModel(model.transformFaces());
  
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
            if (POS3D.Vector.dotProduct(faces[i].getCenter,planeNormal) < 0){
   
                continue;
                
            }
               
         
            if(faces[i].color != null)
                context.fillStyle  = faces[i].color;
            context.translate(startX, startY);
            
            context.beginPath();

            context.lineTo(faces[i].a.x,faces[i].a.y); 
 
            context.lineTo(faces[i].b.x,faces[i].b.y); 
            context.lineTo(faces[i].c.x,faces[i].c.y); 
            
            if(faces[i].color != null)
                context.fill(); 
            else{
                context.stroke();
            }
            context.closePath();  
        
            context.translate(-startX, -startY);

        }

    }

    function toRad(Value) {
        /** Converts numeric degrees to radians */
        return Value * Math.PI / 180;
    }
 
    return Render;
}();

