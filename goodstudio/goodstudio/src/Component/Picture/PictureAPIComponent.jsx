import React from 'react';
import * as axios from 'axios';
import Picture from './Picture';
class PictureAPIComponent extends React.Component{
    componentDidUpdate(){

            axios.get(this.props.url).then(response => {
                this.props.setPicture(response.data.url)
            }).catch((e)=> {alert(e.message)})
       
    }
    render(){
        return (
                    <Picture url={this.props.urlImg} />
                )
    }
}


export default PictureAPIComponent