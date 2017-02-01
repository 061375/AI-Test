var Target = {
    x:0,
    y:0,
    width:0,
    height:0,
    target:$('.target'),
    init:function(){
        this.x = Math.random() * $(window).width();
        this.y = Math.random() * $(window).height();
        //this.x = ($(window).width()/2)+200;
        //this.y = $(window).height()/2;
        this.target.css("left",this.x);
        this.target.css("top",this.y);
        this.width = this.target.width();
        this.height = this.target.height();
    },
    move:function() {
        this.x = Math.random() * $(window).width();
        this.y = Math.random() * $(window).height();
        this.target.css("left",this.x);
        this.target.css("top",this.y);
    }
}