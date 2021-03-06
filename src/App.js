import React, { Component } from 'react';
import './App.css';
import TOC from "./components/TOC";
import Content from "./components/Content"
import Subject from "./components/Subject"

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      subject:{title:'WEB',sub:'world wide web!'},
      welcome:{title:'Welcome',desc:'Hello, React'},
      contents:[
        {id:1,title:'HTML',desc:'HTML for information'},
        {id:2,title:'CSS',desc:'CSS is for design'},
        {id:3,title:'JavaScript',desc:'JavaScript is for interactive'},
      ],
      Content:{title:'HTML',desc:'HTML is HyperText Markup Language.'}
    }
  }
  render(){
    var _title, _desc = null;
    if(this.state.mode === 'welcome')
    {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }
    else if(this.state.mode === 'read')
    {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return(
      <div className="App">
        {/*<Subject title = {this.state.Subject.title} sub = {this.state.Subject.sub}></Subject>*/}

        <header>
              <h1><a href = "/" onClick={function(e){
                e.preventDefault();
              }}>{this.state.subject.title}</a></h1>
              {this.state.subject.sub}
          </header>




        <TOC data={this.state.contents}></TOC>
        <Content title = {_title} desc = {_desc}></Content>
      </div>
    );
  }
}

export default App;
