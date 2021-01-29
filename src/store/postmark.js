let initialState = {
  collectionBody: '',
  responseMarkdown: '',
  responseStatus: 0,
};

const requestOptions = { 
    method: 'POST',
    headers: {"content-type": "application/json; charset=UTF-8", "Access-Control-Allow-Origin": "*"},
    redirect: 'follow',
    body: '',
    mode: 'cors' }
    
const url = 'https://postmark.pixeljava.com/postmarker';

export const post = (payload) => async dispatch => {
  let newPayload = `
  {
    "info": {
      "_postman_id": "7a41f30a-5766-4358-a144-667eace5d408",
      "name": "Pokemon Test",
      "description": "This is a sample collection.",
      "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
    },
    "item": [
      {
        "name": "GET /v2/encounter-method/:id",
        "request": {
          "auth": {
            "type": "basic",
            "basic": [
              {
                "key": "password",
                "value": "badpass",
                "type": "string"
              },
              {
                "key": "username",
                "value": "test",
                "type": "string"
              }
            ]
          },
          "method": "GET",
          "header": [],
          "url": {
            "raw": "https://pokeapi.co/api/v2/encounter-method/5/?lang=en",
            "protocol": "https",
            "host": [
              "pokeapi",
              "co"
            ],
            "path": [
              "api",
              "v2",
              "encounter-method",
              "5",
              ""
            ],
            "query": [
              {
                "key": "lang",
                "value": "en",
                "description": "Response language"
              }
            ]
          },
          "description": "This call will get one Pokemon encounter method (Surf)."
        },
        "response": [
          {
            "name": "GET /v2/encounter-method/685/?lang=en",
            "originalRequest": {
              "method": "GET",
              "header": [],
              "url": {
                "raw": "https://pokeapi.co/api/v2/encounter-method/685/?lang=en",
                "protocol": "https",
                "host": [
                  "pokeapi",
                  "co"
                ],
                "path": [
                  "api",
                  "v2",
                  "encounter-method",
                  "685",
                  ""
                ],
                "query": [
                  {
                    "key": "lang",
                    "value": "en",
                    "description": "Response language"
                  }
                ]
              }
            },
            "status": "Not Found",
            "code": 404,
            "_postman_previewlanguage": "plain",
            "header": [
              {
                "key": "Date",
                "value": "Tue, 05 Jan 2021 18:01:31 GMT"
              },
              {
                "key": "Content-Type",
                "value": "text/plain; charset=utf-8"
              },
              {
                "key": "Content-Length",
                "value": "9"
              },
              {
                "key": "Connection",
                "value": "keep-alive"
              },
              {
                "key": "Access-Control-Allow-Origin",
                "value": "*"
              },
              {
                "key": "Cache-Control",
                "value": "public, max-age=86400, s-maxage=86400"
              },
              {
                "key": "Etag",
                "value": "W/\"9-0gXL1ngzMqISxa6S1zx3F4wtLyg\""
              },
              {
                "key": "Function-Execution-Id",
                "value": "pdac02e46ws0"
              },
              {
                "key": "X-Cloud-Trace-Context",
                "value": "43ce6b6fa5b55f40156a1d76e294f7a7"
              },
              {
                "key": "X-Powered-By",
                "value": "Express"
              },
              {
                "key": "X-Served-By",
                "value": "cache-yvr1535-YVR"
              },
              {
                "key": "X-Cache",
                "value": "MISS"
              },
              {
                "key": "X-Cache-Hits",
                "value": "0"
              },
              {
                "key": "X-Timer",
                "value": "S1609869691.908998,VS0,VE940"
              },
              {
                "key": "Vary",
                "value": "Accept-Encoding, x-fh-requested-host, accept-encoding"
              },
              {
                "key": "CF-Cache-Status",
                "value": "MISS"
              },
              {
                "key": "cf-request-id",
                "value": "07754f1ff20000fdaddb256000000001"
              },
              {
                "key": "Expect-CT",
                "value": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\""
              },
              {
                "key": "Report-To",
                "value": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report?s=X2p7PvFv%2FyMVwwOeO0NClLjZhLqe06egoBwCKhMO2mof8eMW%2FuK7acQhBDwAwjjlLsX9exQNqLjS8E2CRBwhLDU5jQxIEnNcoTfC\"}],\"group\":\"cf-nel\",\"max_age\":604800}"
              },
              {
                "key": "NEL",
                "value": "{\"report_to\":\"cf-nel\",\"max_age\":604800}"
              },
              {
                "key": "Server",
                "value": "cloudflare"
              },
              {
                "key": "CF-RAY",
                "value": "60cf1adfee6dfdad-PDX"
              }
            ],
            "cookie": [],
            "body": "Not Found"
          },
          {
            "name": "GET /v2/encounter-method/5/?lang=en",
            "originalRequest": {
              "method": "GET",
              "header": [],
              "url": {
                "raw": "https://pokeapi.co/api/v2/encounter-method/5/?lang=en",
                "protocol": "https",
                "host": [
                  "pokeapi",
                  "co"
                ],
                "path": [
                  "api",
                  "v2",
                  "encounter-method",
                  "5",
                  ""
                ],
                "query": [
                  {
                    "key": "lang",
                    "value": "en",
                    "description": "Response language"
                  }
                ]
              }
            },
            "status": "OK",
            "code": 200,
            "_postman_previewlanguage": "json",
            "header": [
              {
                "key": "Date",
                "value": "Tue, 05 Jan 2021 17:59:24 GMT"
              },
              {
                "key": "Content-Type",
                "value": "application/json; charset=utf-8"
              },
              {
                "key": "Transfer-Encoding",
                "value": "chunked"
              },
              {
                "key": "Connection",
                "value": "keep-alive"
              },
              {
                "key": "Access-Control-Allow-Origin",
                "value": "*"
              },
              {
                "key": "Cache-Control",
                "value": "public, max-age=86400, s-maxage=86400"
              },
              {
                "key": "Etag",
                "value": "W/\"de-YvHGw15/9wJvP1JPt0cCNFzpoto\""
              },
              {
                "key": "Function-Execution-Id",
                "value": "ok7srnelwdzf"
              },
              {
                "key": "X-Cloud-Trace-Context",
                "value": "76557398fcbc52d359e50cb21f125647"
              },
              {
                "key": "X-Country-Code",
                "value": "US"
              },
              {
                "key": "X-Powered-By",
                "value": "Express"
              },
              {
                "key": "X-Served-By",
                "value": "cache-yvr1522-YVR"
              },
              {
                "key": "X-Cache",
                "value": "MISS"
              },
              {
                "key": "X-Cache-Hits",
                "value": "0"
              },
              {
                "key": "X-Timer",
                "value": "S1609869564.232145,VS0,VE552"
              },
              {
                "key": "Vary",
                "value": "Accept-Encoding,cookie,need-authorization, x-fh-requested-host, accept-encoding"
              },
              {
                "key": "CF-Cache-Status",
                "value": "MISS"
              },
              {
                "key": "cf-request-id",
                "value": "07754d31290000fdadc6bff000000001"
              },
              {
                "key": "Expect-CT",
                "value": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\""
              },
              {
                "key": "Report-To",
                "value": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report?s=qvyrQt8TzaGmk%2FnEIHExNt3qOlRuYQTZxpHx1GIScawBquLUtZ%2FPaojGo5rIdVycFvGbEu2p%2Fx81yWh8k%2FS7MR7%2BG9EfGwxjE99Q\"}],\"group\":\"cf-nel\",\"max_age\":604800}"
              },
              {
                "key": "NEL",
                "value": "{\"report_to\":\"cf-nel\",\"max_age\":604800}"
              },
              {
                "key": "Server",
                "value": "cloudflare"
              },
              {
                "key": "CF-RAY",
                "value": "60cf17c84feffdad-PDX"
              },
              {
                "key": "Content-Encoding",
                "value": "br"
              }
            ],
            "cookie": [],
            "body": "{\n    \"id\": 5,\n    \"name\": \"surf\",\n    \"names\": [\n        {\n            \"language\": {\n                \"name\": \"de\",\n                \"url\": \"https://pokeapi.co/api/v2/language/6/\"\n            },\n            \"name\": \"Surfen\"\n        },\n        {\n            \"language\": {\n                \"name\": \"en\",\n                \"url\": \"https://pokeapi.co/api/v2/language/9/\"\n            },\n            \"name\": \"Surfing\"\n        }\n    ],\n    \"order\": 14\n}"
          },
          {
            "name": "GET /v2/encounter-method/(%)/?lang=en",
            "originalRequest": {
              "method": "GET",
              "header": [],
              "url": {
                "raw": "https://pokeapi.co/api/v2/encounter-method/(%)/?lang=en",
                "protocol": "https",
                "host": [
                  "pokeapi",
                  "co"
                ],
                "path": [
                  "api",
                  "v2",
                  "encounter-method",
                  "(%)",
                  ""
                ],
                "query": [
                  {
                    "key": "lang",
                    "value": "en",
                    "description": "Response language"
                  }
                ]
              }
            },
            "status": "Bad Request",
            "code": 400,
            "_postman_previewlanguage": "html",
            "header": [
              {
                "key": "Server",
                "value": "cloudflare"
              },
              {
                "key": "Date",
                "value": "Tue, 05 Jan 2021 18:03:03 GMT"
              },
              {
                "key": "Content-Type",
                "value": "text/html"
              },
              {
                "key": "Content-Length",
                "value": "155"
              },
              {
                "key": "Connection",
                "value": "close"
              },
              {
                "key": "CF-RAY",
                "value": "-"
              }
            ],
            "cookie": [],
            "body": "<html>\n    <head>\n        <title>400 Bad Request</title>\n    </head>\n    <body>\n        <center>\n            <h1>400 Bad Request</h1>\n        </center>\n        <hr>\n        <center>cloudflare</center>\n    </body>\n</html>"
          }
        ]
      }
    ],
    "auth": {
      "type": "bearer",
      "bearer": [
        {
          "key": "token",
          "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImphbWVzOTAyIiwiaWF0IjoxNjA4MjYzMDI3fQ.UOyU6RUwBgV45xwUGhjTThm_fh4wKmrXGh1eMstK2iA",
          "type": "string"
        }
      ]
    }
  }`;
  requestOptions.body = newPayload;
  return await fetch(url, requestOptions)
    .then(response => {
      dispatch(postAction(response))
  })
}

export const postAction = payload => {
  return{
    type: 'POST',
    payload: payload
  }
}

export const setFieldState = payload => {
  return{
    type: 'SET_BODY',
    payload: payload
  }
}

export const resetStore = () => {
  return {
    type: 'RESET',
  };
};

const postmarkStore = (state = initialState, action) => {
  let { type, payload } = action;
  console.log('Payload from store:', payload);

  switch (type) {
    case 'POST':
      console.log(payload)
      console.log(payload.body)
      console.log(payload.status)
      let newStatePost = {responseMarkdown: payload.body, responseStatus: payload.status, collectionBody: state.collectionBody};
      return newStatePost;

    case 'SET_BODY':
      let newState = {responseMarkdown: state.responseMarkdown, responseStatus: state.responseStatus, collectionBody: payload};
      return newState;

    case 'RESET':
      return initialState;

    default:
      return state;
  }
};

export default postmarkStore;
