/**
 * @flow
 * @relayHash 60d53074240eae573d69342e8f6658e8
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type RecentPostsContainerQueryResponse = {|
  +posts: ?{|
    +edges: ?$ReadOnlyArray<?{| |}>;
  |};
|};
*/


/*
query RecentPostsContainerQuery {
  posts(first: 5) {
    edges {
      ...PostLinks
    }
  }
}

fragment PostLinks on PostEdge {
  node {
    id
    title
    link_text
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RecentPostsContainerQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 5,
            "type": "Int"
          }
        ],
        "concreteType": "PostConnection",
        "name": "posts",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "PostEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "PostLinks",
                "args": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "posts{\"first\":5}"
      }
    ],
    "type": "RootQuery"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "RecentPostsContainerQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "RecentPostsContainerQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 5,
            "type": "Int"
          }
        ],
        "concreteType": "PostConnection",
        "name": "posts",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "PostEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "InlineFragment",
                "type": "PostEdge",
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Post",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "id",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "title",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "link_text",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ]
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "posts{\"first\":5}"
      }
    ]
  },
  "text": "query RecentPostsContainerQuery {\n  posts(first: 5) {\n    edges {\n      ...PostLinks\n    }\n  }\n}\n\nfragment PostLinks on PostEdge {\n  node {\n    id\n    title\n    link_text\n  }\n}\n"
};

module.exports = batch;
