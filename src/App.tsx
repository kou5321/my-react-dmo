import Names from "./names/Names";
import React from "react";
import AddName from "./names/add-name/AddName";

const names = ["alice", "bob", "carrie"];

class App extends React.Component<AppProps, any>{ // generics
    /*
    child -> parent
     */
    addName(name: string) {
        names.push(name);
    }
    render() {
        return <main>
            <AddName/>
            <Names names={names}/>
        </main>
    }
}

export default App;

interface AppProps {

}