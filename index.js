// Your code here

class Polygon {
    constructor(sides){
        this.sides = sides;
    }

    get countSides(){
        return this.sides.length;
    }

    get perimeter(){
        return this.sides.reduce(function(acc, current){
            return acc + current;
        }, 0)
    }
}

class Triangle extends Polygon {

}

class Square extends Polygon {

}