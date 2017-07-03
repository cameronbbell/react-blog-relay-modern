/**
 * @flow
 * @relayHash c15063f22526afe02121216bfe1464ef
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type SpecificPostContainerQueryResponse = {|
  +posts: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{| |};
    |}>;
  |};
|};
*/


/*
query SpecificPostContainerQuery(
  $linkText: String
) {
  posts(linkText: $linkText) {
    edges {
      node {
        ...Post
        id
      }
    }
  }
}

fragment Post on Post {
  title
  body
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "linkText",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SpecificPostContainerQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "linkText",
            "variableName": "linkText",
            "type": "String"
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
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Post",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "Post",
                    "args": null
                  }
                ],
                "storageKey": null
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
  "name": "SpecificPostContainerQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "linkText",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "SpecificPostContainerQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "linkText",
            "variableName": "linkText",
            "type": "String"
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
                    "name": "body",
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
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query SpecificPostContainerQuery(\n  $linkText: String\n) {\n  posts(linkText: $linkText) {\n    edges {\n      node {\n        ...Post\n        id\n      }\n    }\n  }\n}\n\nfragment Post on Post {\n  title\n  body\n}\n"
};

module.exports = batch;
