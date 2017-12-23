import React, {Component} from 'react'

class listArticles extends Component {

    render(){

        const articles = this.props.data
        const articleslist = articles.map(name => {
            return(

                <h1>{name.id}</h1>
            )
        }
        )
        return(
            <h1>{this.props.name.id}</h1>

        )
    }

}

export default listArticles;