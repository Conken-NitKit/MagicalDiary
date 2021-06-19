import { useContext } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import { ModalContext } from '../contexts/ModalContext'
import CloseIcon from '@material-ui/icons/Close'

const Container = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  position: absolute;

  top: 0;

  z-index: 1101;

  height: 100%;
  width: 100%;

  background: rgba(0, 0, 0, 0.5);
`

const Modal = styled.div`
  display: flex;

  flex-direction: column;

  justify-content: space-between;
  align-items: center;

  border-radius: 0.7vw;

  height: 60%;
  width: 40%;

  background: white;
`

const AddButtonSpace = styled.div`
  display: flex;

  align-items: center;

  border-top-left-radius: 0.7vw;
  border-top-right-radius: 0.7vw;

  height: 15%;
  width: 100%;
`

const AddButton = styled.button`
  margin: 0 10%;

  border: none;
  border-radius: 0.3vw;

  height: 50%;
  width: 33%;

  font: 900 1.4vw 'M PLUS Rounded 1c';

  color: white;

  outline: none;

  background: rgba(26, 42, 124, 0.5);

  transition: 0.7s;

  &:hover {
    background: rgba(26, 42, 124, 0.3);
  }
`

const Description = styled.a`
  font: 900 1.4vw 'M PLUS Rounded 1c';
`

const Cancel = styled(CloseIcon)`
  margin: 0 10% 0 auto;

  height: 60%;
  width: 10%;
`

const Preview = styled.img`
  height: 60%;
  width: 80%;
`

const ConfirmationButtonSpace = styled(AddButtonSpace)`
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0.7vw;
  border-bottom-right-radius: 0.7vw;
`

export const PostModal = () => {
  const el = document.getElementById('modal')

  const { setIsModalOpen } = useContext(ModalContext)

  return ReactDOM.createPortal(
    <Container>
      <Modal>
        <AddButtonSpace>
          <AddButton>ファイルを選択</AddButton>
          <Description>hrrn.png</Description>
          <Cancel
            onClick={() => {
              setIsModalOpen(false)
            }}
          ></Cancel>
        </AddButtonSpace>
        <Preview src="" /*投稿した写真*/></Preview>
        <Description>あなたが飲んだのはhrrnですか？</Description>
        <ConfirmationButtonSpace>
          <AddButton
            onClick={() => {
              setIsModalOpen(false)
            }}
          >
            はい
          </AddButton>
          <AddButton
            onClick={() => {
              setIsModalOpen(false)
            }}
          >
            いいえ
          </AddButton>
        </ConfirmationButtonSpace>
      </Modal>
    </Container>,
    el!,
  )
}

export default PostModal
