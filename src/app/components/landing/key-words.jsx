import { styled } from '@linaria/react';

export const KeyWords = () => {
  return (
    <Main>
      <TagContainer className='pskov'>
        <Tag>
          Псков
        </Tag>
      </TagContainer>
      <TagContainer className='paper'>
        <Tag>
          Доклады
        </Tag>
      </TagContainer>
      <TagContainer className='networking'>
        <Tag>
          Нетворкинг
        </Tag>
      </TagContainer>
      <TagContainer className='afterparty'>
        <Tag>
          Афтерпати
        </Tag>
      </TagContainer>
      <TagContainer className='hard'>
        <Tag>
          Харды
        </Tag>
      </TagContainer>
      <TagContainer className='soft'>
        <Tag>
          Софты
        </Tag>
      </TagContainer>
    </Main>
  );
};

const Main = styled.section`
  position: relative;
  height: 355px;
`

const TagContainer = styled.div`
  position: absolute;
  opacity: 0;

  &.pskov {
    opacity: 1;
    left: -8%;
    bottom: 140px;
    transform: rotate(-16deg);
  }

  &.paper {
    opacity: 1;
    left: 5%;
    bottom: 0;
  }

  &.networking {
    opacity: 1;
    left: 20%;
    bottom: 155px;
    transform: rotate(-15deg);
  }

  &.afterparty {
    opacity: 1;
    left: 40%;
    bottom: 40px;
    transform: rotate(10deg);
  }

  &.hard {
    opacity: 1;
    right: 7%;
    bottom: 95px;
    transform: rotate(25deg);
  }

  &.soft {
    opacity: 1;
    right: -10%;
    bottom: 90px;
    transform: rotate(25deg);
  }
`

const Tag = styled.p`
  width: 500px;
  height: 90px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 25px;
  font-family: 'Unbounded-Light';

  position: relative;
  --b: 1px;
  --s: 25px;
  --c1: #4B4547;
  --c2: #080808;
  border: none;

  &::before {
    content:"";
    position: absolute;
    border-radius: 20px;
    inset: 0;
    padding: var(--b);
    background: 
      repeating-conic-gradient(var(--c1) 0 25%,var(--c2) 0 50%) 
      0 0/var(--s) var(--s) round;
    -webkit-mask: linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
    pointer-events: none;
  }
`