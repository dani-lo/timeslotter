define(["backbone","underscore","views/partials/timeslot/display","views/partials/timeslot/plot","views/partials/timeslot/create","lib/slotshub","text!/templates/timeslots.html"],function(a,b,c,d,e,f,g){"use strict";var h=a.View.extend({el:".timeslotter",initialize:function(){return this.tpl=g,this.hub=new f,this},render:function(){this.$el.append(this.tpl),this.hub.fetchSlots().then(b.bind(function(a){b.each(a,b.bind(function(a){var b=new c({slotsData:a});this.$el.find(".view-slots").append(b.render())},this))},this))}});return h});