import React from 'react'
import DesignRules from '../components/design_rules/DesignRules'
import Hero from '../components/hero_section/Hero'
import ResponsiveDesign from '../components/responsive_design/ResponsiveDesign'

const index = () => {
  return (
    <div>
      <Hero />
      <DesignRules />
      <ResponsiveDesign/>
    </div>
  )
}

export default index
