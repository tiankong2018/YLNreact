import React,{ Component } from 'react'
import Item from './Item'
import styles from './index.scss'

export default function Message({data}){
    return(
      <div className={`bg-white ${styles.root}`}>
        <div className={`main-color ${styles.left}`}>
          <i className={`i-tixing40 font-32 ${styles.ico}`} />
          <span className="font-24">本店消息</span>
        </div>
        <div className={`text-overflow-1 ${styles.right}`}>
           <Item data={data} />
        </div>
      </div>
    )
}