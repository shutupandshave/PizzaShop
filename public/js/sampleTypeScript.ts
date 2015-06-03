/**
 * Created by James Lawrence on 01/06/2015.
 */
class FooBar {
    private fullName = "James Lawrence";
    showMe () {
        console.log(this.fullName);
    }
}
var foo = new FooBar();
foo.showMe();