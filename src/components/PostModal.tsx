import { useContext, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
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

const InputSpace = styled.label`
  display: flex;

  justify-content: center;

  align-items: center;

  margin: 0 10%;
  border-radius: 0.3vw;

  height: 50%;
  width: 33%;

  font: 900 1.4vw 'M PLUS Rounded 1c';

  color: white;

  background: rgba(26, 42, 124, 0.5);
`

const Input = styled.input`
  display: none;
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

const ImageDescription = styled(Description)`
  display: flex;

  align-items: center;

  height: 50%;
  width: 25%;

  white-space: nowrap;

  overflow: hidden;
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
  const [suggestedDrink] = useState<string>('')
  const el = document.getElementById('modal')

  const [image, setImage] = useState('')
  const { setIsModalOpen } = useContext(ModalContext)

  return ReactDOM.createPortal(
    <Container>
      <Modal>
        <AddButtonSpace>
          <InputSpace>
            <form method="post" encType="multipart/form-data">
              <Input
                type="file"
                name="energy drink"
                onChange={(event) => {
                  const data = new FormData()
                  const header = {
                    headers: {
                      'Prediction-Key': '73e1471c984c46fe8bcbe1ab3c8be241',
                      'Content-Type': 'application/octet-stream',
                    },
                  }
                  if (!event.target.files) return
                  const postFile = event.target.files[0]
                  axios
                    .post(
                      'https://magical-diary.cognitiveservices.azure.com/customvision/v3.0/Prediction/60ad0f7d-db0f-4b06-a9c3-77a023006ef0/classify/iterations/magical-diary/image',
                      postFile,
                      header,
                    )
                    .then((response) => {
                      setImage(postFile.name)
                    })
                    .catch((error) => {
                      console.log(error)
                    })
                }}
              />
            </form>
            ファイルを選択
          </InputSpace>
          <ImageDescription>{image}</ImageDescription>
          <Cancel
            onClick={() => {
              setIsModalOpen(false)
            }}
          ></Cancel>
        </AddButtonSpace>
        
        {/* TODO: 投稿した写真をPreviewのsrc要素の中に入れる */}
        <Preview src="" />
        <Description>あなたが飲んだのは{suggestedDrink}ですか？</Description>
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
