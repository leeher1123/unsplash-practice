import {IconCollections, IconPhotos, IconUsers} from "../icons";
import React from "react";

export const getSearchMenus = (query, category) => {
  return(
    [
      {
        name: 'photos',
        to: `/search/photos/${query}`,
        isActive: category === 'photos',
        icon: <IconPhotos/>
      },
      {
        name: 'collections',
        to: `/search/collections/${query}`,
        isActive: category === 'collections',
        icon: <IconCollections/>
      },
      {
        name: 'users',
        to: `/search/users/${query}`,
        isActive: category === 'users',
        icon: <IconUsers/>
      }
    ]
  )
}