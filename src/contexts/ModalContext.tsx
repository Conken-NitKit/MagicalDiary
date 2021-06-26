import { createContext } from 'react'

export const ModalContext = createContext<{
  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}>({ isModalOpen: false, setIsModalOpen: () => {} })

export default ModalContext
