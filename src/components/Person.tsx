import { PersonProps } from "./PersonProps" // type of props for large amount of data


export const Person = (props: PersonProps) => {

    return <div>{props.name.first} {props.name.last}
    </div>

}