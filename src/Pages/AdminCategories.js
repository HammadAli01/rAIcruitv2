import React from 'react'
import Admindashboardnavbar from '../Components/navbars/Admindashboardnavbar'
import Managecategories from './../Components/Managecategories';
export default function AdminCategories() {
  return (
    <div><Admindashboardnavbar side={true} />
<Managecategories/>
    </div>
  )
}
