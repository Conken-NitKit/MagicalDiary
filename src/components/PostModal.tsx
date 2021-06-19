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
  return <Container></Container>
}

export default PostModal
