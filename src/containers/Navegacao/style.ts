import styled from 'styled-components'

export const SessaoContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: #3f3f3f;

  h2 {
    font-size: 24px;
  }

  ul {
    display: flex;
    justify-content: space-between;

    li {
      max-width: 100px;
      a {
        color: black;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
          max-width: 100px;
        }
        p {
          text-align: center;
        }
      }
    }
  }
`
