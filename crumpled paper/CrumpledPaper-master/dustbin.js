class dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=100;
		
		this.image = loadImage("dustbin.png")

	}
	display()
	{
			var dustbinPos = this.body.position;

			

			push()
			translate(dustbinPos.x, dustbinPos.y);
			imageMode(CENTER)
		    image(this.image,0,0,this.dustbinWidth, this.dustbinHeight);
			pop()

			
			
	}

}