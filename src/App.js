import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TakeNote from './takenote';
import Notes from './notes';
import logo from './logo.svg';
import './App.css';
const styles = {
  appBar: {
    marginBottom:'4em'
  }
};

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      notes: [
        {
          id: 1,
          title: 'test1',
          description: 'description1'
        },
        {
          id: 2,
          title: 'test2',
          description: 'description2'
        }
      ]
    }
  }

  addNote(note) {
    this.setState({
      notes: [...this.state.notes, note]
    });
  }
  handleDeleteNote(item){
    console.log('in app',item)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Card >
        <CardContent>
        <AppBar position="static" className={styles.appBar.marginBottom}>
          <Toolbar>
            <IconButton color="inherit">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              Keep
          </Typography>
          </Toolbar>
        </AppBar>

        <TakeNote onNew={this.addNote.bind(this)}/>
        <Notes notes={this.state.notes} onDelete={this.handleDeleteNote} />
        </CardContent>
        </Card>
      </div>
      
    );
  }
}

export default App;
