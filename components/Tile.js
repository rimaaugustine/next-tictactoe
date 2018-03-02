export const Tile = ({ value, index, onClick }) => {
  const borderWidth = `
    ${index < 3 ? '0' : '1px'}
    ${index % 3 === 2 ? '0' : '1px'}
    ${index > 5 ? '0' : '1px'}
    ${index % 3 === 0 ? '0' : '1px'};
  `
  return (
    <div className='tile' onClick={onClick} style={{ borderWidth }}>
      <style jsx>{`
        .tile {
          height: 33.333333%;
          flex: 0 0 33.333333%;
          box-sizing: border-box;
          border: solid #333;
          font-size: 64pt;
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