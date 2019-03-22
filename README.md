## Faire Take Home Assignment

### Context

Faire is a marketplace that connects wholesale makers with retail stores. There is a wide variety of makers and products available on the Faire platform and so creating user interfaces that allow retailers to find relevant products effectively is vital to our success.

### Assignment Description

The goal of this assignment is to consume Faire's public APIs in order to build a compelling user interface to allow a retailer to effortlessly discover all of Faire's makers and products.

For inspiration, please familiarize yourself with Faire's own web UI: https://www.faire.com/category/All

How you choose to accomplish this goals is up to you - your creativity is welcome!

### API endpoints

There are three API endpoints that will be of use. The shapes of the request and response bodies are specified by protocol buffer (protobuf) messages found in `messages.proto`. More information on protocol buffers can be found here: https://developers.google.com/protocol-buffers/

** All request / response bodies are of type `application/json` and attributes are snake case - not camel case as the protobuf definitions suggest. **

#### Get available categories

This endpoint will return all categories and subcategories currently available on Faire.

`GET /api/category/new`

_Returns:_ An array of `Category` objects

#### Search for makers

This endpoint will search for makers / brands given a specific set of filters.

`POST /api/search/makers-with-filters`

_Takes:_ `SearchMakersWithFiltersRequest`

_Returns:_ `SearchMakersWithFiltersResponse`

#### Get maker products

This endpoint will respond with all products for a particular maker (AKA brand) that is identified by a brand token. A brand token will be provided by the maker search response and looks like this: `b_19d9fe9fd`

`GET /api/brand/{brand_token}/products`

_Returns:_ An array of `Product` objects

#### CORS isssues

If you run into CORS issues accessing the API, you can use the included `server.js` file to run a basic web server that is capable of proxying requests to https://www.faire.com. Run `npm install` followed by `node server.js` to run this server. The example can then be accessed in your browser via http://localhost:4242
