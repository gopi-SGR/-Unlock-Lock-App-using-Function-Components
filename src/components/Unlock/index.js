import {useState} from 'react'
import {
  AppContainer,
  Lockcontainer,
  LockText,
  LockImage,
  CustomButton,
} from './styledComponents'
const Unlock = () => {
  const [isLock, setLock] = useState(true)

  const onToggleLock = () => {
    setLock(prevLock => !prevLock)
  }

  const activeImage = isLock
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const activeImageAlt = isLock ? 'lock' : 'unlock'
  const activeButtonText = isLock ? 'Unlock' : 'Lock'
  const activeText = isLock
    ? 'Your Device is Locked'
    : 'Your Device is Unlocked'
  return (
    <AppContainer>
      <Lockcontainer>
        <LockImage src={activeImage} alt={activeImageAlt} />
        <LockText>{activeText}</LockText>
        <CustomButton type="button" onClick={onToggleLock}>
          {activeButtonText}
        </CustomButton>
      </Lockcontainer>
    </AppContainer>
  )
}

export default Unlock
