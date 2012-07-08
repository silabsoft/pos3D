POS3D.Render = function(){
    const TICK = 60.0;
    var model = new POS3D.Model(0,0,0,
        [
        new POS3D.Face([new POS3D.Vertex(0, 0, 0),new POS3D.Vertex(1, 1, 0),new POS3D.Vertex(1, 0, 0)],"#FF0000"),
        new POS3D.Face([new POS3D.Vertex(0, 0, 0),new POS3D.Vertex(0, 1, 0),new POS3D.Vertex(1, 1, 0)],"#00FFFF"),
        new POS3D.Face([new POS3D.Vertex(0, 0, 0),new POS3D.Vertex(0, 1, 1),new POS3D.Vertex(0, 1, 0)],"#0000FF"),
        new POS3D.Face([new POS3D.Vertex(0, 0, 0),new POS3D.Vertex(0, 0, 1),new POS3D.Vertex(0, 1, 1)],"#0000A0"),
        new POS3D.Face([new POS3D.Vertex(0, 1, 0),new POS3D.Vertex(1, 1, 1),new POS3D.Vertex(1, 1, 0)],"#ADD8E6"),
        new POS3D.Face([new POS3D.Vertex(0, 1, 0),new POS3D.Vertex(0, 1, 1),new POS3D.Vertex(1, 1, 1)],"#800080"),   
        new POS3D.Face([new POS3D.Vertex(1, 0, 0),new POS3D.Vertex(1, 1, 0),new POS3D.Vertex(1, 1, 1)],"#FFFF00"),  
        new POS3D.Face([new POS3D.Vertex(0, 1, 0),new POS3D.Vertex(1, 1, 1),new POS3D.Vertex(1, 0, 1)],"#00FF00"),  
        new POS3D.Face([new POS3D.Vertex(0, 0, 0),new POS3D.Vertex(1, 0, 0),new POS3D.Vertex(1, 0, 1)],"#FF00FF"),
        new POS3D.Face([new POS3D.Vertex(0, 0, 0),new POS3D.Vertex(1, 0, 1),new POS3D.Vertex(0, 0, 1)],"#FF00FF"), 
        new POS3D.Face([new POS3D.Vertex(0, 0, 1),new POS3D.Vertex(1, 0, 1),new POS3D.Vertex(1, 1, 1)],"#000000"),   
        new POS3D.Face([new POS3D.Vertex(0, 0, 1),new POS3D.Vertex(1, 1, 1),new POS3D.Vertex(0, 1, 1)],"#FFA500")   
        ]
        );
        
    var canvasWidth;
    var canvasHeight;
    var context;
    var canvasX;
    var canvasY; 
    var planeNormal;
    
    return {
        init: function() { 
            var canvas = document.getElementById("renderCanvas");
            canvasWidth = $('#renderCanvas').width();
            canvasHeight = $('#renderCanvas').height();     
            canvasX = $('#renderCanvas').offset().left;
            canvasY = $('#renderCanvas').offset().top;
            context = canvas.getContext('2d');
            setTimeout(POS3D.Render.loop, (1/TICK) * 1000);
            planeNormal= new POS3D.Vertex(0,0,0);
            model.getTransform().translate(100, 100, 0);
            model.getTransform().scale(50,50, 1);   
            modelb.getTransform().translate(200, 200, 0);
            modelb.getTransform().scale(50,50, 1);
            
        },
        loop: function() { 
            POS3D.Render.update();
            POS3D.Render.draw();
            setTimeout(POS3D.Render.loop, (1/TICK) * 1000);
        },
        update: function() {
  
            model.getTransform().rotateY(0.017);
            model.getTransform().rotateX(-0.017);
 
        },
        draw: function(){ 
            context.clearRect(0, 0, canvasWidth, canvasHeight);
            context.fillStyle= "#C0C0C0";
            context.fillRect(0,0,canvasWidth,canvasHeight);
            if(model != null){
                drawModel(model.transformFaces(model.getTransform(), model));
                
            }
        }
    };
    
    function getLocation(mod){
        
        return 	{
            'x': (model.getX() + model.getZ()), 
            'y': (model.getY() + model.getZ())
        };

    }
    function drawModel(m){
       
        var location = getLocation(m);
        var startX = location['x'];
        var startY = location['y'];
        var faces = m.getFaces();
        faces.sort(function(f0,f1){
            //sort method by veer Note: possible issues due to lack of full perspective implementation. 
            var v0 = f0.getVerticies();
            var v1 = f1.getVerticies();
            var sum_z0 = 0;
            for (var x = 0; x < v0.length; ++x)
                sum_z0 += v0[x].getZ();
            var sum_z1 = 0;
            for (var x = 0; x < v1.length; ++x)
                sum_z1 += v1[x].getZ();
            return sum_z0 - sum_z1;      
            
     
        });
        
        
        for (var i = 0; i < faces.length; i++) {
        
            if (dotProduct(faces[i].getNormal(),planeNormal) < 0)
                continue;
         
          
            context.fillStyle  = faces[i].getColor();
            context.translate(startX, startY);
            context.beginPath();
            var v = faces[i].getVerticies();
            for(var x = 0; x < v.length; x++){
                
                context.lineTo(v[x].getX(),v[x].getY()); 
        
                
 
            }
            context.fillText("Priority:"+i,350,50+(i*12));  
        
            context.fill();

            context.closePath();           
            context.translate(-startX, -startY);

        }

    }
    function toRad(Value) {
        /** Converts numeric degrees to radians */
        return Value * Math.PI / 180;
    }
 
    function dotProduct(v,v1){
        return v.getX() * v1.getX() + v.getY() * v1.getY() + v.getZ() * v1.getZ();
    }
}();

