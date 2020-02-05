import React,{Component} from "react";
import api from '../../services/api';
import './style.css'

class Main extends Component{

    state = {
        products: []
    }
    componentDidMount (){
        this.loadProducts();
    }

    loadProducts = async () =>{
        const response = await api.get('/');
        this.setState({products:response.data});
    } 


    render(){
        return(
            <div className="product-list">
                {this.state.products.map(product=>{
                    return <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.desc}</p>
                        <a href={product.url}>Acessar</a>
                    </article>
                  
                })}
            </div>
        )
    }
}

export default Main;
