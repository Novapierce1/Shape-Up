let squarelength,
    field;

document.addEventListener('DOMContentLoaded', () => {
  /*var length = parseInt(document.getElementById('squarelength').value);
  var radius = parseInt(document.getElementById('circleradius').value); 
  var height = parseInt(document.getElementById('rectheight' || 'triangleheight').value);
  var width = parseInt(document.getElementById('rectwidth').value);  */
    squarelength = document.getElementById('squarelength');
    field = document.getElementsByClassName('field')[0];

    class shape {
    /*constructor(height, width, length, radius, circumference, area, perimeter){
        this.height = height;
        this.width = width;
        this.length = length;
        this.radius = radius;
        this.circumference = circumference;
        this.area = area;
        this.perimeter = perimeter;*/
    constructor(name){
        this.shape = document.createElement('div');
        this.shape.className = name;
    }

    draw(){
        field.appendChild(this.shape);
        console.log('Im a: ' + this.shape.className)
    }

    describe(){
        $('#shape').append(this.name)
        $('#width').append(this.with)
        $('#height').append(this.height)
        $('#radius').append(this.radius)
        $('#area').append(this.area)
        $('#perimeter').append(this.perimeter)
    }

}
    //Circle Constructor
    class circle extends shape {
        constructor (radius, shape){
            super('circle');
            this.radius = radius
        }
        
        get circumference(){
            return (this.radius*this.radius*Math.PI)
        } 
        get area(){
            return (Math.PI*(Math.pow(this.radius, 2)))
        }
    }

    $('#MakeCircle').click(function(){
        var canvas = document.getElementById('#shapearea')
        var ctx = canvas.getContext()
        
    })


//Triangle Constructor
    class triangle extends shape {
        constructor (height) {
            super('triangle');
            this.height
        }
        get perimeter(){
            return 2*this.height*(Math.sqrt(2*this.height*this.height))
            }
        get area(){
            return 0.5*this.height*this.height
            }  
        }

//Square Constructor
    class square extends shape {
        constructor (){
        super('square');
        this.shape.style.width = squarelength.value + 'px';
        this.shape.style.height = squarelength.value + 'px';
        this.draw();
        }
        get area(){
            return Math.pow(this.lenth, 2)
        }
        get perimeter(){
            return 4*this.length
        }
    }

    //rectangle constructor
    class rectangle extends shape {
        constructor (height, width, shape){
            super('rectangle');
            this.height = height
            this.width = width;
        }
        get perimeter(){
            return 2*(this.length + this.width)
        }
        get area(){
            return (this.length * this.width)
        }
    }
    
})