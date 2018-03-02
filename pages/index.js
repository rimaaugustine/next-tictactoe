
import React from "react"
import Head from 'next/head'

class Index extends React.Component {
  render(){
    const Style = {
      color: '#000000'
    }
    return (
      <div >
      <Head>      
        <link rel="stylesheet" href="../static/style.css"/>
      </Head>     
        <h3 style={Style} className="flexbox">I am index</h3>
        <em>I am declared using the class syntax</em>
      </div>
    );
  }
}


export default Index;