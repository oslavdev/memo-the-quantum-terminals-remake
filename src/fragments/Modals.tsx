import React from 'react'

import { useModalState } from '@/context/confirmModal'
import ConfirmModal from '@/components/ConfirmModal'

type ModalChildrenProps = {
  children: React.ReactNode
}

export default function Modals({ children }: ModalChildrenProps) {
  const modalState = useModalState()

  return (
    <>
      {modalState ? <ConfirmModal state={modalState} /> : null}
      {children}
    </>
  )
}
