define(["backbone","underscore","views/partials/timeslot/display","views/partials/timeslot/plot","views/partials/timeslot/create","util/slotshub","text!/templates/timeslots.html"],function(a,b,c,d,e,f,g){"use strict";var h=a.View.extend({el:".timeslotter",initialize:function(){return this.tpl=g,this.subviews={display:new c,create:new e,plot:new d},this.hub=new f,this.hub.initialize(),this},render:function(){this.$el.append(this.tpl),this.hub.start().then(b.bind(function(){},this))}});return h});