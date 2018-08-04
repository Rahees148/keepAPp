import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// const styles = {
//   paper: {
//     maxWidth: 575,
//     margin:'auto',
//     padding:15
//   }
// };

export default class TakeNote extends Component  {
  constructor ( props ) {
    super( props );
    this.state = {
      expanded:false,
      note:'',
      title:''
    }
  }
  handleExpanded(event) {
    this.setState({expanded:true})
  }
  handleNoteChange(event){
    this.setState({note: event.target.value})
  }
  handleTtileChange(event){
    this.setState({title: event.target.value})
  }
  handleNewNote(event) {
    let obj = {
      title: this.state.title,
      description: this.state.note
    }
    this.props.onNew(obj);
  }

  render() {
    return (
      <div>
        <Paper >
          {this.state.expanded ? <TextField
              id="title"
              label="Title"
              margin="normal"
              value={this.state.title}
              fullWidth={true}
              onChange={this.handleTtileChange.bind(this)}
            />: null}
            <TextField
              id="notes"
              label="Notes"
              margin="normal"
              value={this.state.note}
              fullWidth={true}
              onChange={this.handleNoteChange.bind(this)}
              onClick={this.handleExpanded.bind(this)}
            />
             {this.state.expanded ? <Button color="primary" onClick={this.handleNewNote.bind(this)} >Save</Button>: null }
        </Paper>
      </div>
    );
  }
  
}


