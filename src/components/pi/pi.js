import React from "react";


class Pi extends React.Component{

    state = {
        renderPi: false
    }

    calculatePi = () =>{
        let pi = 1;
        for (let i = 0; i < 20; i++){
        let den = i * 2 + 3;
        if(i%2==0){
            pi -= (1/den);
        }
        else{
            pi+= (1/den);
        }
    } 
        pi *= 4;
    
    let error = 100*((pi - Math.PI)/(Math.PI))
    return <div>The estimated value of pi is {pi} with precent error of {error}%
        over 20 iteration
    </div>
    }

    renderResults = () =>{
        if (this.state.renderPi == true){
  
        return <div>
            {this.calculatePi()}
        </div>
        }
        else{
            return <div>
            calculate pi here
            </div>
        }
    }


    render(){
        return(
            <div>
                <button onClick = {()=>{this.setState({renderPi:true})}}> click to calculate pi</button>
                {this.renderResults()}
            </div>
        )
    }

}

export default Pi