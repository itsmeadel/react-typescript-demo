import { Component } from "react"


type CounterProps = {
    message: string,
}

type CounterState = {
    count: number,
}




export class Counter extends Component<CounterProps, CounterState> {


    static defaultProps = {
        color: 'blue'
      };
      
    state = {
        count:5 ,
    }


    handleClick = () => {
         this.setState((prevState) => ({count: prevState.count + 1  }))

}

    rende() {
         return (
             <div>
             <button onClick={this.handleClick}> Increment</button>
            <div>   </div>
        </div>
    )
}
}
