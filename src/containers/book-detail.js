import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class BookDetail extends Component{
    render(){
        if(!this.props.book){
            return(
                <div>Select book</div>
            );
        }
        return (
          <div>
              <h3>Details for :</h3>
              <p>{this.props.book.title}</p>
          </div> 
        );
    }
}

//Retourne le state redux en props dans le container
function mapStateToProps(state){
return {
    book: state.activeBook
    }
}
//Si action declencher resultat se met dans le props
function mapDispatchToProps(dispatch){
    return bindActionCreators({},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(BookDetail);
