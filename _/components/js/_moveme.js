var moveMe = {
    x:0,
    y:0,
    dir:0,
    width:0,
    height:0,
    target:Target,
    me:$('.moveme'),
    runid:false,
    runspeed:1000,
    speed:3,
    events:{
        port:Math.random() * 1,
        startboard:Math.random() * 1,
        distance:Math.random() * 1
    },
    init:function() {
        this.x = Math.random() * $(window).width();
        this.y = Math.random() * $(window).height();
        this.dir = Math.floor(Math.random() * 360);
        this.x = $(window).width()/2;
        this.y = $(window).height()/2;
        this.me.css("left",this.x);
        this.me.css("top",this.y);
        this.me.css('transform','rotate('+this.dir+'deg)');
        this.runid = setInterval(function(){
            this.loop();
        },this.runspeed);
    },
    loop:function() {
        if (this.events.port < this.events.starboard) {
            this.dir--;
        }else{
            this.dir++;
        }
        if (this.dir > 360) this.dir = 0;
        if (this.dir < 0) this.dir = 360;
        var xy = motion_set_2(this.x,this.y,this.dir,this.speed);
        this.x = xy.x;
        this.y = xy.y;
        
        // check outside
        
        // render the current location
        this.me.css("left",this.x);
        this.me.css("top",this.y);
        this.me.css('transform','rotate('+this.dir+'deg)');
        
        // record what happened (local for now)
        var r = distance_to_directions(this,this.target);
        this.events.port = r.port;
        this.events.startboard = r.starboard;
    }
}