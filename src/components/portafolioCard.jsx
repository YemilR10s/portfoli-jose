/* eslint-disable react/prop-types */


export const PortafolioCard = ({item}) => {
  return (
    <>
    <div className="card">
    <div className="card-title">{item.title}</div>
    <div className="card-description">{item.description}</div>
    <img className="card-image" src={item.image} alt="" />

    </div>
    
    </>
  )
}
