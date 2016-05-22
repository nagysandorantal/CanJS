/**
 * Created by Sandor on 5/21/2016.
 */
$(function () {
    $('#can-main').html( can.view('main.stache', { message: 'Hello from main.js' }) );
    var searchCtrl = new Search('#can-search', { searchText: 'Serach ...' } );

});