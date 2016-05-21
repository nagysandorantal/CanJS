/**
 * Created by Sandor on 5/21/2016.
 */

can.Component.extend({
    tag: 'hello-world',
    template: can.view( 'components/HelloWorld/HelloWorld.stache' ),
    viewModel: {message: "Hi from component!"}
});

