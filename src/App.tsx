import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';
import {Rating} from './components/Rating';


function App() {
  console.log("App rendering")
  return (
    <div>
      {/* <img src={'https://sun9-61.userapi.com/impg/F6pn44xhfmrk4CAwDQE-gC45bBIHnJcFmYxTdA/ua__uJL3-i8.jpg?size=736x663&quality=95&sign=2650036cd5e8d5f8671bae2553175849&type=album'}/> */}
      <PageTitle title={"This is APP component"}/>
      <PageTitle title={"My friends"}/>
      
      Article 1
      <Rating value={3}/>
      <Accordion titleValue={"Menu"}/>
      <Accordion titleValue={"Users"}/>
      Article 2
      <Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  debugger
  console.log("PageTitle rendering")
  return <h1>{ props.title }</h1>
}


export default App;
