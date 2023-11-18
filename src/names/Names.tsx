import Name from "./name/Name";

const Names = (props: NamesProps) => {
    // rule #1: only one root element is returned
    return <>
        {props.names.map(n => <Name key={n} name={n}>18</Name>)}
    </>
}

export default Names;

interface NamesProps {
    names: string [];
}