define(["backbone","underscore","jquery","collections/slots","lib/slotdata"],function(a,b,c,d,e){"use strict";var f=function(){this.collection=new d};return f.prototype.fetchSlots=function(){var a=c.Deferred();return this.collection.fetch({success:b.bind(function(b){var c,d=[];this.collection.each(function(a){c=new e,c.initialize(),c.inflate(a),d.push(c)}),a.resolve(d)},this),error:function(){a.reject(new Error("Can not fetch slots data"))}}),a.promise()},f.prototype.storeSlot=function(a){var b=new e;b.initialize(),b.inflate(a),console.log(b.toObject())},f});