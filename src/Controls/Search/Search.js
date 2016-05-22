/**
 * Created by Sandor on 5/21/2016.
 */

var Search = can.Control( {

    init: function(el, options) {
        this.placeholder = options.searchText === undefined ? "Search" : options.searchText;

        el.append( can.view('Controls/Search/Search.stache', { placeholder: this.placeholder }));
    }
});
