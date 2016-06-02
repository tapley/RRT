/// <reference path="../typings/react/react-global.d.ts" />

// interface Props {}
// interface State {}

// interface Comment {
//   content: string;
//   author: string;
// }

// class CommentBox extends React.Component< Props, State>{
//   render() {
//     return <div>Hello world!</div>
//   }
// }



interface Props {
  foo: string;
}

class MyComponent extends React.Component<Props, {}> {
  render() {
    return <span>{this.props.foo}</span>
  }
}

<MyComponent foo="bar" />; // ok


ReactDOM.render(
  // <CommentBox />,
  <MyComponent foo="bar" />,
  document.getElementById('content')
);



