define(["backbone","underscore","jquery","views/helper/timeslotterform","lib/slotdata","text!/templates/slot-create.html"],function(a,b,c,d,e,f){"use strict";var g=a.View.extend({el:".createslot",initialize:function(a){return this.tform=new d,this.tform.init({onSubmit:b.bind(this.startCreate,this)}).render(),this.slotData=null,this},render:function(){},startCreate:function(a){this.slotsData=new e,this.slotsData.initialize(a),this.$el.append(b.template(f,{name:this.slotsData.name,type:this.slotsData.type,pace:this.slotsData.getPace(),slots:this.slotsData.slots})),this.$el.find(".go-create").on("click",function(){}),this.$el.find(".slotlist_box").on("click",b.bind(function(a){var b=c(a.currentTarget),d=parseInt(b.attr("id").replace("slotbox-",""),10);b.toggleClass("booked"),b.hasClass("booked")?this.slotsData.bookSlot(d):this.slotsData.freeSlot(d),console.log(this.slotsData.toObject())},this))},goCreate:function(a){this.reset()},reset:function(){this.$el.find(".slotlist").remove()}});return g});