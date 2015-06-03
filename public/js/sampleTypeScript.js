/**
 * Created by James Lawrence on 01/06/2015.
 */
var FooBar = (function () {
    function FooBar() {
        this.fullName = "James Lawrence";
    }
    FooBar.prototype.showMe = function () {
        console.log(this.fullName);
    };
    return FooBar;
})();
var foo = new FooBar();
foo.showMe();
//# sourceMappingURL=sampleTypeScript.js.map