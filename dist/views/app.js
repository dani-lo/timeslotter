define(["backbone","underscore","views/partials/timeslot/display","views/partials/timeslot/create","lib/ts","lib/slotshub","text!timeslots.html"],function(a,b,c,d,e,f,g){"use strict";var h=a.View.extend({el:".timeslotter-timeslots",initialize:function(){return this.hub=new f,this.loader=e.getLoader(),this},render:function(){this.$el.append(g),this.hub.fetchSlots().then(b.bind(function(a){b.each(a,b.bind(function(a){this.appendTimeslot(a)},this))},this));var a=new d({owner:this});a.render(),this.loader.loaded(),setTimeout(b.bind(function(){this.loader.unload()},this),250)},appendTimeslot:function(a,b){var d=new c({slotsData:a});d.render(b)}});return h});