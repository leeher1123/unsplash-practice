import {IconCollections, IconPhotos, IconUsers} from "../icons";
import React from "react";

export const getSearchMenus = (query, category, {totalNum}) => {
  return(
    [
      {
        name: 'photos',
        to: `/search/photos/${query}`,
        isActive: category === 'photos',
        icon: <IconPhotos/>,
        num: totalNum.photos.total
      },
      {
        name: 'collections',
        to: `/search/collections/${query}`,
        isActive: category === 'collections',
        icon: <IconCollections/>,
        num: totalNum.collections.total
      },
      {
        name: 'users',
        to: `/search/users/${query}`,
        isActive: category === 'users',
        icon: <IconUsers/>,
        num: totalNum.users.total
      }
    ]
  )
}