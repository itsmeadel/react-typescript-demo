type GreetProps = {
    name : string
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h1> Welcome {props.name}! You have unread 20 messages.</h1>
        </div>
    )
}