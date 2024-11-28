export const Square = ({ children, isSelected, updateBoard, index}) => {
    const className = `cuadrado ${isSelected ? 'isSelected' : ''}`
  
    const handleClick = () => {
      updateBoard(index)
    }
    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }