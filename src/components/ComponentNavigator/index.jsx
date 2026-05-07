import React, { useEffect} from 'react'

const ComponentNavigator = (props) => {
  const {
    count, updateIndexToShow, indexToShow } = props;
  useEffect(() => {
    const timer =  setInterval(() => {
      updateIndexToShow()  
       },5000)
       return () => {
        clearInterval(timer)
       }
  },[indexToShow])


  return (
    <div className='carousel sm:mt-[24px] md:mt-[24px]'>
      <ul className="carousel-dots gap-[20px]">
        {Array(count).fill(0).map((_ , idx) => {
          return(
            <li className={`${indexToShow === idx ? "active ": ""}`} onClick={() => updateIndexToShow(idx)} key={idx}> </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ComponentNavigator