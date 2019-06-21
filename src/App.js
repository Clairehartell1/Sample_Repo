import React, { Component } from 'react';
import './App.css';
import Mainnavbar from './components/Navbar/Mainnavbar';
import { Input  } from 'antd';
import 'antd/dist/antd.css';
import iPhone from './img/iPhone.svg'
import Gadgets from './img/Gadgets.svg'
import Machines from './img/Machines.svg'
import Monitors from './img/Monitors.svg'
import Accessor from './img/Accessor.svg'
import ArtSupplies from './img/ArtSupplies.svg'
import Susi from './img/Susi.svg'



const Search = Input.Search;

class App extends Component {
  render(){
    return(
      <div className="App">
        <Mainnavbar />
        
        <div className="BorrowText">
          <p>Borrow an Asset</p>
        </div>
        
        <div className="SearchButton">
        <Search placeholder="Search for an item in all categories" 
        onSearch={value => console.log(value)}
        style={{ width:"370px", height: "46px" }}/>
        </div>  

        

        <div className="CategoriesText">
          <p>Categories</p>
        </div>
        
        <div className="AssetCards">

          <div class="cards__item">
          <img style={{height:"47.5px", width:"26.97px"}} className="CardIcon" src={iPhone} alt="iPhone XR" />
              <div class="card">
                <div class="card__image card__image--phone"></div>
                  <div class="card__content">
                    <div class="card__title">Phone/Tablets</div>
                    </div>
                </div>
            </div> 

            <div class="cards__item">
              <div class="card">
              <img style={{height:"22.5px", width:"55.77px"}} className="CardIcon" src={Gadgets} alt="Gadgets" />
                <div class="card__image card__image--gadgets"></div>
                  <div class="card__content">
                    <div class="card__title">Gadgets</div>
                    </div>
                </div>
            </div>

            <div class="cards__item">
              <div class="card">
              <img  style={{height:"47.5px", width:"56.11px"}} className="CardIcon" src={Machines} alt="Machines" />
                <div class="card__image card__image--Machines"></div>
                  <div class="card__content">
                    <div class="card__title">Machines</div>
                    </div>
                </div>
            </div> 

            <div class="cards__item">
              <div class="card">
              <img style={{height:"46.61px", width:"46.97px"}} className="CardIcon" src={Monitors} alt="Monitors" />
                <div class="card__image card__image--Monitors"></div>
                  <div class="card__content">
                    <div class="card__title">Monitors</div>
                    </div>
                </div>
            </div> 

            <div class="cards__item">
              <div class="card">
              <img style={{height:"46.12px", width:"21.77px"}} className="CardIcon" src={Accessor} alt="Accessories" />
                <div class="card__image card__image--Accessories"></div>
                  <div class="card__content">
                    <div class="card__title">Accessories</div>
                    </div>  
                </div>
            </div> 

            <div class="cards__item">
              <div className="card">
              <img  style={{height:"38.03px", width:"40.8px"}} className="CardIcon" src={ArtSupplies} alt="Art" />
                <div class="card__image card__image--ArtSupplies"></div>
                  <div class="card__content">
                    <div class="card__title">Art Supplies</div>
                    </div>
                </div>
            </div>

            <div class="long_cards__item">
              <div class="card">
              <img  style={{height:"38.03px", width:"40.8px"}} className="CardIcon" src={Susi} alt="key" />
                <div class="card__image card__image--Susi"></div>
                  <div class="card__content">
                    <div class="card__title">Others</div>
                    </div>
                </div>
            </div>
        </div>


    
        
        <div className="FreqBorrowed">
          <p>FREQUENTLY BORROWED</p>
        </div>

        <div class="footer">
            <div className="FooterCard">
              <div className="Description">iPhone XR Gin Bilog</div>
            </div>
        </div>

       

        
      </div>
    )
  }
}
 
export default App;
