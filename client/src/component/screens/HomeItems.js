import React,{useContext} from 'react'
import Product from '../Product/Product';
import { GlobalContext } from './../../GlobalContext';

function HomeItems() {
  const data = useContext(GlobalContext)
  const [products,setProducts] = data.productApi.products
  const [isUser] = data.authApi.isUser;
  const [isAdmin] = data.authApi.isAdmin;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-dark">Products</h3>
        </div>
      </div>

      <div className="row">
        {
          products && products.map((item,index)=>{
            return(
                <Product key={index} {...item} isUser={isUser} isAdmin={isAdmin} />
            )
          })
        }
      </div>
    </div>
  )
}

export default HomeItems