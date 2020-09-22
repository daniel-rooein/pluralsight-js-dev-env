/*
The file contains references to the vendor libraries
we're using in this project. This is used by webpack
in the production build only*. A seperate bundle for vendor
code is useful since it's unlikely to change as often
as the application's code. So all the libraries we reference
here will be writted to vendor.js so they can be cached until
one of them change. So basically, this avoids
customers having to donload a huge JS file anytime a line
of code changes. They only have to download vendor.js when
a vendor library changes which should be less frequent.
Any files that aren't referenced here will be bundled into
main.js for production buil.d
*/

/*eslint-disable no-unused-vars*/

import fetch from 'whatwg-fetch';
