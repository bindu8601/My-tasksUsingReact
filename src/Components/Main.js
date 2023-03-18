import React, {Component} from 'react'
import List from './List'
import Title from './Title'
class Main extends Component{
    render(){
      return <div>
              <Title newtitle={'My New Task list'}/>
              <List tasks={['Learning React','Practicing']}/>
              <Title newtitle={'Another Task List'}/>
              <List tasks={['Using React','Developing']}/>
              <Title newtitle={'Final List for the Day'}/>
              <List tasks={['Reading some thing new','Sleeping']}/>

             </div>
    }
}
export default Main