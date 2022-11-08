import * as React from 'react'

import ConfirmModal from '@/components/confirm-modal'
import { useModalState } from '@/context/confirm-modal'

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
