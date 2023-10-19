type GreetProps = {
    name : string
    messageCount? : number
    isLoggedIn : boolean
}

export const Greet = (props: GreetProps) => {

    const { messageCount= 0} = props
    return (
        <div><h1>
            { props.isLoggedIn ? ` Welcome ${props.name}! You have unread ${messageCount} messages.` : 'Welcome Guest'}
            </h1>
        </div>
    )
}