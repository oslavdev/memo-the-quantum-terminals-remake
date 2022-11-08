import * as React from 'react'

import { Bar, EqualiserColumn, EqualiserContainer } from "@/components/UI/intro/eq/equaliser";

export default function Equaliser() {
  return (
    <EqualiserContainer>
    <EqualiserColumn>
      <Bar/>
    </EqualiserColumn>
    <EqualiserColumn>
    <Bar/>
    </EqualiserColumn>
    <EqualiserColumn>
    <Bar/>
    </EqualiserColumn>
    <EqualiserColumn>
    <Bar/>
    </EqualiserColumn>
    <EqualiserColumn>
    <Bar/>
    </EqualiserColumn>
  </EqualiserContainer>
  )
}
