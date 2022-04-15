const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
// console.log(ctx)
canvas.width=700
canvas.height=500

let dx = 2
let dy = 2
document.addEventListener('keydown',function(e){
    switch(e.code){
        case 'ArrowUp':
            dy=-2
            break
        case 'ArrowLeft':
            dx=-2
            break
        case 'ArrowDown':
            dy=2
            break
        case 'ArrowRight':
            dx=2
            break
    }
})


class Ball{
    constructor(){
        this.radius=50
        this.x=canvas.width/2
        this.y=canvas.height/2
        this.xpos1=this.x
        this.xpos2=this.x
        this.ypos1=this.y
        this.ypos2=this.y
    }
    update(){
        this.x+=dx
        this.y+=dy
        this.xpos1+=dx
        this.xpos2+=dx
        this.ypos1+=dy
        this.ypos2+=dy

        ///////////////////////////////////////
        if(this.x>=canvas.width+this.radius && dx==2){
            this.x=this.x-canvas.width
        }else if(this.x<=-this.radius && dx==-2){
            this.x=this.x+canvas.width
        }
                
        if(this.x>=canvas.width-this.radius){
            this.xpos1=this.x-canvas.width
        }else if(this.x<=this.radius){
            this.xpos2=this.x+canvas.width
        }else{
            this.xpos1=this.x
            this.xpos2=this.x
        }
        ///////////////////////////////////////
        if(this.y>=canvas.height+this.radius && dy==2){
            this.y=this.y-canvas.height
        }else if(this.y<=-this.radius && dy==-2){
            this.y=this.y+canvas.height
        }

        if(this.y>=canvas.height-this.radius){
            this.ypos1=this.y-canvas.height
        }else if(this.y<=this.radius){
            this.ypos2=this.y+canvas.height
        }else{
            this.ypos1=this.y
            this.ypos2=this.y
        }

        ///////////////////////////////////////////////////////////////////
         if(this.x>=canvas.width-this.radius || this.x<=this.radius || this.y>=canvas.height-this.radius || this.y<=this.radius ){
            this.duplicate(this.xpos1,this.ypos1)
            this.duplicate(this.xpos2,this.ypos2)
            this.duplicate(this.xpos1,this.ypos2)
            this.duplicate(this.xpos2,this.ypos1)
        }
    }
    draw(){
        ctx.lineWidth=2
        ctx.strokeStyle='black'
        ctx.fillStyle='green'
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2)
        ctx.stroke()
        ctx.closePath()
        ctx.fill()
    }
    duplicate(xcor,ycor){
        ctx.lineWidth=2
        ctx.strokeStyle='black'
        ctx.fillStyle='green'
        ctx.beginPath()
        ctx.arc(xcor,ycor,this.radius,0,Math.PI*2)
        ctx.stroke()
        ctx.closePath()
        ctx.fill()
    }
}


let ball1 = new Ball()
function animateMotion(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ball1.draw()
    ball1.update()
    requestAnimationFrame(animateMotion)
}
animateMotion()