import * as React from 'react'

interface Props {
    name: string
}

class App extends React.Component<Props> {
    render() {
      const { name } = this.props;
      return (
        <>
          <h1 className="text-4xl text-white bg-black">
            Hola {name}
          </h1>
        </>
      );
    }
}

export default App;