import React from 'react'
import style from './index.module.css'

export default function PlanCardItem({ title, active }) {

  const item_classes = [style.card_item, active ? '' : style.item_false].join(' ');

  return (
    <div className={item_classes}>
      { title }
    </div>
  )
}
