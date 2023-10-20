import { Name } from "./PersonProps"



type PersonListProps= {
    names: Name[] //'name' is an array of 'names' type.
}


export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {props.names.map(name => {
                return (
                    <h2 key={name.first}>{name.first} {name.last}</h2>
                )
            })}
        
        </div>

    )
}