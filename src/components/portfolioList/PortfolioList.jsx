import './portfolioList.scss';

const PortfolioList = ({title, active, setSelected, id}) => {
  return (
    <li className={active? "portfolioListItem active" : "portfolioListItem"} onClick={()=>setSelected(id)}>
      {title}
    </li>
  );
};

export default PortfolioList;