
export const Tile = ({ value, index, onClick }) => {
  const borderWidth = `
    ${index < 3 ? '0' : '1px'}
    ${index % 3 === 2 ? '0' : '1px'}
    ${index > 5 ? '0' : '1px'}
    ${index % 3 === 0 ? '0' : '1px'};
  `
  //bottomWidth: top-right-bottom-left
  
  return (
    <div className={'tile'} onClick={onClick} style={{ borderWidth }}>
      <style>{`
        .tile {
          height: 33.333333%;
          flex: 0 0 33.333333%;
          box-sizing: border-box;
          border: solid #006064;
          font-size: 64pt;
          color: #00B8D4;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .O{
          height: 33.333333%;
          flex: 0 0 33.333333%;
          box-sizing: border-box;
          border: solid #006064;
          font-size: 64pt;
          color: #E91E63;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
      
      {value}
    </div>
  )
}

