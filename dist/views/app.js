define(["backbone","views/pages/slots"],function(a,b){var c=a.View.extend({el:".timeslotter",initialize:function(){console.log("Wahoo!");var a=new b({el:".slots-view"});a.initialize().render()}});return c});