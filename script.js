//complete this code
class Rectangle {
	constructor(width,height){
		this._width = width;
		this._height= height;
}
	get widthVal(){
			return this._width;
}
	get heightVal(){
	return this._height;
}
	getArea(){
		return this._width*this._height;
}
}

class Square extends Rectangle{
	constructor(side){
		super(side,side);
}
getPerimeter(){
		return 2*this._width+ 2*this._height;
}

}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
