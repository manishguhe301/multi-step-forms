import React from 'react'
import StepHeading from './StepHeading'

const BusinessInformation = () => {
  return (
    <div>
      <StepHeading
        currentStep='2'
        heading='Business Information'
        desc="Please, enter information about your company."
      />
    </div>
  )
}

export default BusinessInformation