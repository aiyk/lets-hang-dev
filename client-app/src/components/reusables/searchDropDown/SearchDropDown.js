import React from 'react'

export default function SearchDropDown(props) {
  const {payload, action} = props;
  const payloadItem = payload.length ? (
    payload.map(item => {
      return(
        <li key={item.key} onClick = {action}>{item.value}</li>
      )
    })
  ) : (
    <div>...</div>
  )

  return (
    <ul id="locationSearchCriteriaUl" className="suggestion-list nice nice-scroll">{payloadItem}</ul>
  )
}
