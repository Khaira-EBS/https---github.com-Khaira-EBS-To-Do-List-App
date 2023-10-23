import React from 'react'
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';

const ListContent = ({ list }) => {
    console.log(list)
  return (
    <div>
        <div>
            <button className=''>All</button>
            <button className=''>Active</button>
            <button className=''>Completed</button>
        </div>
        {list.map((items, index) => 
            <div key={index} className='list'>
                <input type='checkbox'/>
                <p>{items.name}</p>
                <div>
                    <BsFillPencilFill />
                    <BsFillTrashFill />
                </div>
            </div>
        )}
    </div>
  )
}

export default ListContent