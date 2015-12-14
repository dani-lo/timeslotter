define([
	'squire',
	'mocks/slots-collection'
], function(Squire, MockSlotsCollection) {

  	describe('Slots Hub', function() {
  		//
	    var injector;
	    //
	    beforeEach(function() {
	    	//
	     	injector = new Squire();
	    });
	    //
	    afterEach(function() {
	    	//
	     	injector.remove();
	    });
	    //
	    it('should fetch data via slots collection and populate slot data items', function(done) {
	    	//
			injector.mock('collections/slots', MockSlotsCollection);
			//
			injector.require(['lib/slotshub'], function(SlotsHub) {
				//
				var slotsHub = new SlotsHub();
				//
				slotsHub.fetchSlots().then(function (d) {
					//
					var slotDataItems = slotsHub.populateSlotsData(d);
					//
					expect(slotDataItems[0].types).toBeDefined();
					//
					done();
				});
			});
		});

		it('should inflate slots logic objects from data', function(done) {
	    	//
			injector.require(['lib/slotdata', "mocks/slots-collection"], function(SlotData, MockSlotsCollection) {
				//
				var slotDataItem = new SlotData();

				var coll = new MockSlotsCollection()

				coll.fetch({
					//
					success: function () {

						slotDataItem.inflate(coll.models[0]);]

						expect(slotDataItem.slots.length).toEqual(12);

						done();
					}
				});
			});
		});
	});
});