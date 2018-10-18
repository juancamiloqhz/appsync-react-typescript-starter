import * as React from "react";
import { graphqlOperation } from "aws-amplify";
import { Connect } from "aws-amplify-react";
import { listBlogs } from "./graphql/queries";

export class Blogs extends React.PureComponent {
  render() {
    return (
      <Connect query={graphqlOperation(listBlogs)}>
        {({ data: { listBlogs: blogs } }: any) => {
          if (!blogs) {
            return null;
          }
          return blogs.items.map((item: any) => (
            <div key={item.name}>{item.name}</div>
          ));
        }}
      </Connect>
    );
  }
}
