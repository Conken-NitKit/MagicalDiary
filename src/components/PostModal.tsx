import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;

  top: 0;

  z-index: 6;

  height: 100%;
  width: 100%;

  background: rgba(0, 0, 0, 0.5);
`

export const PostModal = () => {
  const el = document.getElementById('modal')
  return ReactDOM.createPortal(<Container></Container>, el!)
}

export default PostModal
