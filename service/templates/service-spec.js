describe('<%= name %>', function () {

    beforeEach(module('<%= appname %>'));

    it('should ...', inject(function ( <%= _(name).classify() %>) {

        //expect(<%= _(name).classify() %>.doSomething()).toEqual('something');

    }));

});