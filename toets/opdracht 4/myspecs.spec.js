const newLocal = describe('voorbeeld.js', function () {
    it('should have one or more undefined variables', function () {
        console.log('voorbeeld undefined test');
        expect(aantal.voorbeeld).toBeUndefined();
    });

    it('should have one an amount >= 2', function () {
        console.log('aantal >= 2 test');
        expect(console.voorbeeld).toBeGreaterThanOrEqual(2);
    });
}); 

//niet aan toegekomen