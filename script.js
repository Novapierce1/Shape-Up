let squareLength,
    circleRadius,
    triangleHeight,
    rectHeight,
    rectWidth,
    field;

document.addEventListener('DOMContentLoaded', () => {
    squareLength = document.getElementById('square-length');
    circleRadius = document.getElementById('circle-radius');
    triangleHeight = document.getElementById('triangle-height');
    rectHeight = document.getElementById('rect-height');
    rectWidth = document.getElementById('rect-width');
    field = document.getElementsByClassName('field')[0];

});

class Shape {
    constructor(type){
        this.shape = document.createElement('div');
        this.shape.className = type;
        this.shape.addEventListener('dblclick', this.removeshape.bind(this));
        this.shape.addEventListener('click', this.describe.bind(this));
    }

    draw(){
        field.appendChild(this.shape);
        console.log('Im a: ' + this.shape.className);
    }

    removeshape() {
        this.shape.remove();
        $('#shape').text("Shape Name: ")
        $('#width').text("Width: ")
        $('#height').text("Height: ")
        $('#radius').text("Radius: ")
        $('#area').text("Area: ")
        $('#perimeter').text("Perimeter: ")
    }


}
//Circle Constructor
class Circle extends Shape {
    constructor (){
        super('circle');
        var availW = field.offsetWidth  - 60;
        var availH = field.offsetHeight  - 60; 
        var randomY = Math.round(Math.random() * availH) + 'px';
        var randomX = Math.round(Math.random() * availW) + 'px';
        this.shape.style.left = randomX;
        this.shape.style.top = randomY; 
        this.shape.style.width = circleRadius.value + 'px';
        this.shape.style.height = circleRadius.value + 'px';
        this.draw();
    }
    get width(){
        return " N/A"
    }
    get height(){
        return " N/A"
    }
    get radius(){
        return circleRadius.value + 'px'
    }
    
    get perimeter(){
        return Math.round(circleRadius.value*2*Math.PI) + 'px'
    } 
    get area(){
        return Math.round(Math.PI*(Math.pow(circleRadius.value, 2))) + 'px'
    }
}
const makeCircle = () => {
        new Circle();
}
//Triangle Constructor
class Triangle extends Shape {
    constructor () {
        super('triangle');
        var availW = field.offsetWidth  - 60;
        var availH = field.offsetHeight  - 60; 
        var randomY = Math.round(Math.random() * availH) + 'px';
        var randomX = Math.round(Math.random() * availW) + 'px';
        this.shape.style.left = randomX;
        this.shape.style.top = randomY; 
        this.shape.style.borderBottom = triangleHeight.value + 'px solid yellow';
        this.shape.style.borderRight = triangleHeight.value + 'px solid transparent';
        this.shape.style.borderTop = triangleHeight.value + 'px solid transparent';
        this.draw();
    }
    get width(){
        return triangleHeight.value + 'px'
    }
    get height(){
        return triangleHeight.value + 'px'
    }
    get radius(){
        return "N/A"
    }
    get perimeter(){
        return Math.round(triangleHeight.value*3) + 'px'
    }
    get area(){
        return Math.round(0.5*(triangleHeight.value*2)) + 'px'
    }  
}
const makeTriangle = () => {
        new Triangle();
}

//Square Constructor
class Square extends Shape {
    constructor (){
        

        super('square');
       
        var availW = field.offsetWidth  - 60;
        var availH = field.offsetHeight  - 60; 
        var randomY = Math.round(Math.random() * availH) + 'px';
        var randomX = Math.round(Math.random() * availW) + 'px';
        this.shape.style.width = squareLength.value + 'px';
        this.shape.style.height = squareLength.value + 'px';
        this.shape.style.left = randomX;
        this.shape.style.top = randomY; 
        console.log(randomX, randomY)
        this.draw();
    }
    get width(){
        return squareLength.value + 'px'
    }
    get height(){
        return squareLength.value + 'px'
    }
    get radius(){
        return "N/A"
    }
    
    get area(){
        return Math.round(Math.pow(squareLength.value, 2)) + 'px'
    }
    get perimeter(){
        return Math.round(4*squareLength.value) + 'px'
    }
    
}
const makeSquare = () => {
        new Square();
}

    //rectangle constructor
class Rectangle extends Shape {
    constructor (){
        super('rectangle');
        var availW = field.offsetWidth  - 60;
        var availH = field.offsetHeight  - 60; 
        var randomY = Math.round(Math.random() * availH) + 'px';
        var randomX = Math.round(Math.random() * availW) + 'px';
        this.shape.style.left = randomX;
        this.shape.style.top = randomY; 
        this.shape.style.height = rectHeight.value + 'px';
        this.shape.style.width = rectWidth.value + 'px';
        this.draw();
    }
    get width(){
        return rectWidth.value
    }
    get height(){
        return rectHeight.value
    }
    get radius(){
        return "N/A"
    }
    get perimeter(){
        console.log ('worked')
        return Math.round(2*(rectHeight.value + rectWidth.value)) + 'px'
    }
    get area(){
        console.log('also worked')
        return Math.round(rectHeight.value * rectWidth.value) + 'px'
    }
}
const makeRectangle = () => {   
        new Rectangle();
}

Shape.prototype.describe = function(){
        $('#shape').text("Shape Name: "+this.shape.className)
        $('#width').text("Width: "+this.width)
        $('#height').text("Height: "+this.height)
        $('#radius').text("Radius: "+this.radius)
        $('#area').text("Area: "+this.area)
        $('#perimeter').text("Perimeter: "+this.perimeter)
}