define(["backbone","underscore","views/partials/timeslot/display","views/partials/timeslot/create","views/helper/loader","lib/slotshub","text!timeslots.html"],function(a,b,c,d,e,f,g){"use strict";var h=a.View.extend({el:".timeslotter",initialize:function(){return this.tpl=g,this.hub=new f,this.loader=new e,this},render:function(){this.$el.append(this.tpl),this.hub.fetchSlots().then(b.bind(function(a){b.each(a,b.bind(function(a){this.appendTimeslot(a)},this))},this));var a=new d({owner:this});a.render(),this.loader.loaded(),setTimeout(b.bind(function(){this.loader.unload()},this),250)},appendTimeslot:function(a,b){var d=new c({slotsData:a});b?this.$el.find(".view-slots").prepend(d.render()):this.$el.find(".view-slots").append(d.render())}});return h});