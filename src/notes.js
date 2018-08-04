import React, { Component } from 'react';
import Grid from  '@material-ui/core/Grid';
import Note from './note'
const styles = {
  gridContainer: {
    marginTop :"1em"
  }
};

export default class Notes extends Component  {
//   constructor ( props ) {
//     super( props );
//   }
  

  render() {
    const {onDelete} = this.props;
    return (
      <Grid container spacing={24} style={styles.gridContainer} >
         { this.props.notes.map( n => 
         <Grid key={n.id} item sm={3} >
          <Note onDelete={() => onDelete(n)}  value={n} />
        </Grid>
      )}
      </Grid>
    );
  }
  
}


