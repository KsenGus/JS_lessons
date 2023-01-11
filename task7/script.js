class Options {
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    newDiv(){
        let div = document.createElement('div');
        let parameters = `height:${this.height}px;
        width:${this.width}px;
        background-color:${this.bg};
        font-size:${this.fontSize}px;
        text-align:${this.textAlign}`;
        div.style.cssText = parameters;
        document.body.appendChild(div);
    }
}
const options = new Options(500, 100, 'red', 30, 'center');