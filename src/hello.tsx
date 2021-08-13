import React from 'react'

import styles from '@/assets/css/style.module.scss'

import Icon from '@/assets/images/1.png'

export default function Hello () {
  return (
    <div>
      hello webpack
      <p className={styles.hello}>Hello webpack</p>
      <img src={Icon} />
    </div>
  )
}