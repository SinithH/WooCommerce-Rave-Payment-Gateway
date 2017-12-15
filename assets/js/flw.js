/* global location flw_payment_args jQuery*/
'use strict';

var form   = jQuery( '#flw-pay-now-button' );

if ( form ) {

  form.on( 'click', function( evt ) {
    evt.preventDefault();
    location.href = flw_payment_args.cb_url;
  } );

}
