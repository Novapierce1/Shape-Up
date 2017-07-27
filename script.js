document.addEventListener('DOMContentLoaded', function() {
  var length = parseInt(document.getElementById('squarelength').value);
  var radius = parseInt(document.getElementById('circleradius').value); 
  var height = parseInt(document.getElementById('rectheight' || 'triangleheight').value);
  var width = parseInt(document.getElementById('rectwidth').value);
class shape{
    constructor(height, width, length, radius){
        this.height = height;
        this.width = width;
        this.length = length;
        this.radius = radius;
    }
}

class circle extends shape {
    constructor (radius){
        this.radius;
        super(radius);
    }
    get circumference(){
        return (this.radius*thisradius*Math.PI)
    }
    get area(){
        return (Math.PI*(Math.pow(this.radius, 2)))
    }
}

class triangle extends shape {
    constructor (height) {
        this.height;
        super(height);
    }
    get perimeter(){
        return 2*this.height*(Math.sqrt(2*this.height*this.height))
        }
    get area(){
        return 0.5*this.height*this.height
        }  
    }

class square extends shape {
    constructor (length){
        this.length;
        super(length);
    }
    get area(){
        return Math.pow(this.lenth, 2)
    }
    get perimeter(){
        return 4*this.length
    }
}

class rectangle extends shape {
    constructor (height, width){
        this.height
        this.width;
    }
    get perimeter(){
        return 2*(this.length + this.width)
    }
    get area(){
        return (this.length * this.width)
    }
}
  
})