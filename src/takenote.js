import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const styles = {
  TakeNote: {
    padding:'10px'
  }
};

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
      id:  this.props.notes.length + 1,
      title: this.state.title,
      description: this.state.note
    }
    this.props.onNew(obj);
    this.setState({
      title: '',
      note:''
    });
    this.setState({expanded:false})
  }

  render() {
    return (
      <div>
        <Paper  style={styles.TakeNote}>
          {this.state.expanded ? <TextField
              id="title"
              label="Title"
              margin="normal"
              value={this.state.title}
              fullWidth={true}
              autoComplete= 'off'
              onChange={this.handleTtileChange.bind(this)}
            />: null}
            <TextField
              id="notes"
              label="Notes"
              margin="normal"
              required={true}
              value={this.state.note}
              fullWidth={true}
              multiline={true}
              onChange={this.handleNoteChange.bind(this)}
              onClick={this.handleExpanded.bind(this)}
            />
             {this.state.expanded ? <Button color="primary" onClick={this.handleNewNote.bind(this)} >Save</Button>: null }
        </Paper>
      </div>
    );
  }
  
}


