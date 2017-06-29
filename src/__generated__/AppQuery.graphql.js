/**
 * @flow
 * @relayHash 99a264f4a6c29050b456096d07ece807
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AppQueryResponse = {|
  +node: ?{|
    +body?: string;
  |};
|};
*/


/*
query AppQuery {
  node(id: "posts:1") {
    __typename
    ... on Post {
      body
    }
    id
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "id",
            "value": "posts:1",
            "type": "ID!"
          }
        ],
        "concreteType": null,
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "type": "Post",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "body",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": "node{\"id\":\"posts:1\"}"
      }
    ],
    "type": "RootQuery"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "AppQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "AppQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "id",
            "value": "posts:1",
            "type": "ID!"
          }
        ],
        "concreteType": null,
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "__typename",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "Post",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "body",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": "node{\"id\":\"posts:1\"}"
      }
    ]
  },
  "text": "query AppQuery {\n  node(id: \"posts:1\") {\n    __typename\n    ... on Post {\n      body\n    }\n    id\n  }\n}\n"
};

module.exports = batch;
