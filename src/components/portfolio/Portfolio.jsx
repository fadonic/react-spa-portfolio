import {useState, useEffect} from 'react'
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';
import { feauturedPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from '../../data';

const Portfolio = () => {

  const [selected, setSelected] = useState('featured')
  const [data, setData] = useState([])

  const listItems = [
       {id: 'featured', title : 'Featured'},
       {id:'web', title: 'Web App'},
       {id:'mobile', title:'Mobile App'},
       {id:'design', title:'Design'},
       {id:'content', title:'Content'},
  ]

  useEffect(() => {
    switch(selected){
      case 'featured':
        setData(feauturedPortfolio);
        break;
      case 'web':
        setData(webPortfolio);
        break;
      case 'mobile':
        setData(mobilePortfolio);
        break;
      case 'design': 
        setData(designPortfolio)
        break;
      case 'content': 
        setData(contentPortfolio);
        break;
      default: 
      setData([])
    }
    
  }, [selected])
  return (
    <div className="portfolio" id="portfolio">
     <h1>Portfolio</h1>
     <ul>
       {listItems.map(item=><PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>)}
     </ul>
     <div className="container">
       {data.map(d=>(
         <div className="item">
         <img src="assets/post/7.jpeg" alt="" />
         <h3>{d.title}</h3>
       </div>
       ))}
     </div>
    </div>
  );
};

export default Portfolio;