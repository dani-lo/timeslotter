define(["backbone","underscore","jquery","views/helper/timeslotterform","lib/slotdata","text!/templates/slot-create.html"],function(a,b,c,d,e,f){"use strict";var g=a.View.extend({el:".createslot",initialize:function(a){return this.tform=new d,this.tform.init({onSubmit:this.startCreate}).render(),this.slotData=null,this},render:function(){},startCreate:function(a){this.slotData=new e,this.slotData.initialize(a),this.$el.append(b.template(f,{name:this.slotsData.name,type:this.slotsData.type,pace:this.slotsData.getPace(),slots:this.slotsData.slots})),this.$el.find(".go-create").on("click",function(){}),this.$el.find(".slotlist_box").on("click",function(a){var b=c(a.currentTarget),d=parseInt(b.id.replace("slotbox-",""),10);b.toggleClass("booked"),b.hasClass("booked")?this.slotData.bookSlot(d):this.slotData.freeSlot(d)})},goCreate:function(a){this.reset()},reset:function(){this.$el.find(".slotlist").remove()}});return g});