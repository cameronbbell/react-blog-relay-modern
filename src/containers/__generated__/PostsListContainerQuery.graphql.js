/**
 * @flow
 * @relayHash 6b82e560de4dcc888f6f99362518854b
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type PostsListContainerQueryResponse = {|
  +posts: ?{|
    +count: ?number;
    +edges: ?$ReadOnlyArray<?{| |}>;
  |};
|};
*/


/*
query PostsListContainerQuery(
  $itemsPerPage: Int
  $offset: Int
) {
  posts(first: $itemsPerPage, offset: $offset) {
    count
    edges {
      ...PostList
    }
  }
}

fragment PostList on PostEdge {
  node {
    title
    created_at
    link_text
    posted_by_user {
      name
      id
    }
    id
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "itemsPerPage",
        "type": "Int",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "offset",
        "type": "Int",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "PostsListContainerQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "itemsPerPage",
            "type": "Int"
          },
          {
            "kind": "Variable",
            "name": "offset",
            "variableName": "offset",
            "type": "Int"
          }
        ],
        "concreteType": "PostConnection",
        "name": "posts",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "count",
            "storageKey": null
          },
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
                "name": "PostList",
                "args": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootQuery"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "PostsListContainerQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "itemsPerPage",
        "type": "Int",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "offset",
        "type": "Int",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "PostsListContainerQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "itemsPerPage",
            "type": "Int"
          },
          {
            "kind": "Variable",
            "name": "offset",
            "variableName": "offset",
            "type": "Int"
          }
        ],
        "concreteType": "PostConnection",
        "name": "posts",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "count",
            "storageKey": null
          },
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
                        "name": "title",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "created_at",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "link_text",
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "User",
                        "name": "posted_by_user",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "name",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "id",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "id",
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
        "storageKey": null
      }
    ]
  },
  "text": "query PostsListContainerQuery(\n  $itemsPerPage: Int\n  $offset: Int\n) {\n  posts(first: $itemsPerPage, offset: $offset) {\n    count\n    edges {\n      ...PostList\n    }\n  }\n}\n\nfragment PostList on PostEdge {\n  node {\n    title\n    created_at\n    link_text\n    posted_by_user {\n      name\n      id\n    }\n    id\n  }\n}\n"
};

module.exports = batch;
