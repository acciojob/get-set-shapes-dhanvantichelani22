//complete this code
class Rectangle {
	constructor(width,height){
		this._width = width;
		this._height= height;
		console.log("Rectangle width:",this._width);
		console.log("Rectangle height:", this._height);
}
	 get width(){
		 this._width;
}
	get height(){
		this._height;
}
	getArea(){
		return this._width*this._height;
}
}

class Square extends Rectangle{
	constructor(side){
		super(side,side);
		console.log("Square width:",this._width);
		console.log("Square height:",this._height);
}
getPerimeter(){
		return 4*side;
}

}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
